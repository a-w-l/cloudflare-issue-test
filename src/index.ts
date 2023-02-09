export const testURL = 'https://myaccount.economist.com/id/keys';

const getResponseBody = async (): Promise<Response> => {
  const result = await fetch(testURL, {
    headers: { Accept: 'application/json' },
    cf: {
      resolveOverride:
        'myaccount.economist.com.00d3z000002jvyieac.live.siteforce.com',
    },
  }).then((r) => r.text());

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
