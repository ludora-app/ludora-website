import PlausibleProviderNative from 'next-plausible';

const PLAUSIBLE_DOMAIN = process.env.PLAUSIBLE_DOMAIN ?? '';
const PLAUSIBLE_CUSTOM_DOMAIN = process.env.PLAUSIBLE_CUSTOM_DOMAIN;

export function PlausibleProvider({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProviderNative
      domain={PLAUSIBLE_DOMAIN}
      customDomain={PLAUSIBLE_CUSTOM_DOMAIN}
      selfHosted
      trackOutboundLinks
      taggedEvents
      hash
    >
      {children}
    </PlausibleProviderNative>
  );
}
