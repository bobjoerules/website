async function updateCommitCounts() {
    const owner = "bobjoerules";
    const cacheKey = "projectCommitCounts";
    const cacheTtlMs = 12 * 60 * 60 * 1000;
    const projects = Array.from(document.querySelectorAll(".project p[data-title]"));

    let cache = {};
    try {
        cache = JSON.parse(localStorage.getItem(cacheKey) || "{}");
    } catch (err) {
        console.warn("Could not parse commit cache", err);
    }

    function getCommitCountSpan(infoParagraph) {
        const totalLabel = Array.from(infoParagraph.querySelectorAll("span")).find(function (span) {
            return span.textContent.trim() === "Total Commits:";
        });
        if (!totalLabel) return null;
        const valueSpan = totalLabel.nextElementSibling;
        return valueSpan && valueSpan.tagName === "SPAN" ? valueSpan : null;
    }

    function getCachedCount(repo) {
        const item = cache[repo];
        if (!item) return null;
        if (Date.now() - item.timestamp > cacheTtlMs) return null;
        return item.count;
    }

    function setCachedCount(repo, count) {
        cache[repo] = {
            count: count,
            timestamp: Date.now()
        };
    }

    for (const infoParagraph of projects) {
        const repo = infoParagraph.getAttribute("data-title");
        const countSpan = getCommitCountSpan(infoParagraph);
        if (!repo || !countSpan) continue;

        const cachedCount = getCachedCount(repo);
        if (cachedCount !== null) {
            countSpan.textContent = " " + cachedCount;
            continue;
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(function () {
            controller.abort();
        }, 8000);

        try {
            const res = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
                {
                    headers: {
                        Accept: "application/vnd.github+json"
                    },
                    signal: controller.signal
                }
            );

            if (res.status === 403 && res.headers.get("X-RateLimit-Remaining") === "0") {
                console.warn("Rate limit hit while fetching", repo);
                break;
            }

            if (!res.ok) {
                console.error(`Failed to fetch ${repo}: ${res.status}`);
                continue;
            }

            const linkHeader = res.headers.get("Link");
            let count = null;

            if (linkHeader) {
                const match = linkHeader.match(/[?&]page=(\d+)>;\s*rel="last"/);
                if (match) {
                    count = Number(match[1]);
                }
            }

            if (count === null) {
                const data = await res.json();
                count = Array.isArray(data) ? data.length : 0;
            }

            setCachedCount(repo, count);
            countSpan.textContent = " " + count;
        } catch (err) {
            console.error("Error fetching commits for", repo, err);
        } finally {
            clearTimeout(timeoutId);
        }
    }

    try {
        localStorage.setItem(cacheKey, JSON.stringify(cache));
    } catch (err) {
        console.warn("Could not save commit cache", err);
    }
}

updateCommitCounts();