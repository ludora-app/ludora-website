import { PostHog } from 'posthog-node';

export const posthog =
  process.env.NODE_ENV === 'production'
    ? new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      })
    : ({
        capture: () => {},
        captureException: () => {},
        isFeatureEnabled: () => Promise.resolve(false),
        on: () => {},
        shutdown: () => Promise.resolve(),
      } as unknown as PostHog);
