import { PostHog } from 'posthog-node';

let posthogInstance: PostHog | null = null;

export function getPostHogServer() {
  if (process.env.NODE_ENV !== 'production') {
    return {
      capture: () => {},
      captureException: () => {},
      flush: () => Promise.resolve(),
      isFeatureEnabled: () => Promise.resolve(false),
      on: () => {},
      shutdown: () => Promise.resolve(),
    } as unknown as PostHog;
  }

  if (!posthogInstance) {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      console.warn('PostHog token is missing. Server-side tracking may not work.');
    }
    posthogInstance = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      flushAt: 1,
      flushInterval: 0,
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
    });
  }
  return posthogInstance;
}
