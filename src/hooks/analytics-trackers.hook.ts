/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useErrorHandler.ts

import { HTTPError, TimeoutError } from 'ky';
import posthog from 'posthog-js';
import { useCallback, useEffect } from 'react';

import { AnalyticsEvent, AnalyticsEventWithDataType } from '@/constants/analytics-events.constants';

export const useAnalytics = () => {
  const trackError = useCallback(({ error, extra }: { error?: any; extra?: Record<string, any> }) => {
    if (error instanceof HTTPError || error instanceof TimeoutError) {
      posthog.captureException(error, {
        ...extra,
      });
    } else {
      posthog.captureException(error, {
        ...extra,
      });
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log('Analytics error:', error);
    }
  }, []);

  const trackEvent = useCallback(<T extends AnalyticsEvent>({ data, eventName }: AnalyticsEventWithDataType<T>) => {
    posthog.capture(eventName, data);
  }, []);

  return { trackError, trackEvent };
};

export const useGetMethodErrorTracking = ({
  error,
  extra,
  isError,
}: {
  error?: any;
  isError: boolean;
  extra?: Record<string, any>;
}) => {
  const { trackError } = useAnalytics();

  useEffect(() => {
    if (isError && error) {
      trackError({
        error,
        extra,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error]);
};
