export const testURL = 'https://myaccount.economist.com/id/keys';

const getResponseBody = async (): Promise<Response> => {
  const result = await fetch(testURL, {
    headers: { Accept: 'application/json' },
  }).then((r) => r.json());

  const body = {
    message: 'request to worker successful',
    fetchResult: result,
  };

  return new Response(JSON.stringify(body), {
    status: 200,
  });
};

addEventListener('fetch', async (event) => {
  return event.respondWith(getResponseBody());
});
