import PlausibleProviderNative from 'next-plausible';

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? '';
const PLAUSIBLE_SUB_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_SUB_DOMAIN;

export function PlausibleProvider({ children }: { children: React.ReactNode }) {
  return (
    <PlausibleProviderNative domain={PLAUSIBLE_DOMAIN} customDomain={PLAUSIBLE_SUB_DOMAIN} selfHosted>
      {children}
    </PlausibleProviderNative>
  );
}
