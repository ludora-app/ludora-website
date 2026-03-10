type JsonType = string | number | boolean | null | Date | { [key: string]: JsonType } | JsonType[];

export const ANALYTICS_EVENTS = {
  FORMS: {
    BE_INFORMED: 'be_informed_form_submitted',
    CONTACT: 'contact_form_submitted',
    NEWSLETTER: 'newsletter_form_submitted',
    PARTNERSHIP: 'partnership_form_submitted',
  },
  STORE: {
    APP_STORE: 'app_store_clicked',
    GOOGLE_PLAY: 'google_play_clicked',
  },
} as const;

export interface AnalyticsEventData {
  [ANALYTICS_EVENTS.STORE.APP_STORE]: {
    page: string;
  };
  [ANALYTICS_EVENTS.STORE.GOOGLE_PLAY]: {
    page: string;
  };
}

type DeepValue<T> = T extends string ? T : T extends object ? DeepValue<T[keyof T]> : never;

export type AnalyticsEvent = DeepValue<typeof ANALYTICS_EVENTS>;

export type AnalyticsEventWithDataType<T extends AnalyticsEvent> = T extends keyof AnalyticsEventData
  ? {
      eventName: T;
      data: AnalyticsEventData[T];
    }
  : {
      eventName: T;
      data?: Record<string, JsonType> | undefined;
    };
