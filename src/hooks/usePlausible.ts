import { usePlausible as usePlausibleNative } from 'next-plausible';

type EventActions = 'form-submit' | 'click' | 'scroll' | 'view' | 'download' | 'purchase';

type EventCategories = 'newsletter' | 'contact' | 'download-app' | 'partnership';

type EventProps = {
  action: EventActions;
  buttonId?: string;
  category: EventCategories;
  id?: string;
  source?: string;
  value?: number;
};

type MyEvents = {
  newsletterSubscription: EventProps;
  downloadAppBtnIos: EventProps;
  downloadAppBtnAndroid: EventProps;
  contactFormSubmit: EventProps;
  partnershipFormSubmit: EventProps;
};

type TrackEventProps = EventProps & {
  eventName: keyof MyEvents;
};

export const useEventTracking = () => {
  const plausible = usePlausibleNative<MyEvents>();

  const trackEvent = ({ action, buttonId, category, eventName, id, source, value }: TrackEventProps) => {
    plausible(eventName, {
      props: {
        action,
        buttonId,
        category,
        id,
        source,
        value,
      },
    });
  };

  return {
    trackEvent,
  };
};
