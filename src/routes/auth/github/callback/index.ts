import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler<Response, CFContext> = async ({ request, platform }) => {
  const url = new URL(request.url);
  const state = url.searchParams.get('state');
  const code = url.searchParams.get('code');

  if (code === null || state === null) {
    return new Response('Invalid auth callback', { status: 400 });
  }
  const { returnUrl } = platform.EB.get(`auth:github:${state}`, { type: 'json' });

  throw Response.redirect(returnUrl);
};
