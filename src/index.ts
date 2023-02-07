export const testURL = 'https://myaccount.economist.com/id/keys';

addEventListener('fetch', async (event) => {
  const resultOfFetch = fetch(testURL, {
    headers: { Accept: 'application/json' },
  });

  console.log(resultOfFetch);
  return event.respondWith(resultOfFetch);
});
