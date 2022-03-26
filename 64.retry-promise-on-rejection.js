/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
async function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  if (maximumRetryCount === 0) {
    return await fetcher()
  }

  try {
    return await fetcher()
  } catch {
    return await fetchWithAutoRetry(fetcher, --maximumRetryCount)
  }
}
