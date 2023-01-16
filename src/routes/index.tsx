import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      There's actually no frontend, so there was actually no point in using qwik...
    </div>
  );
});

export const head: DocumentHead = {
  title: 'CF Preview App Auth Redirector',
  meta: [
    {
      name: 'description',
      content: 'Nothing to see here',
    },
  ],
};
