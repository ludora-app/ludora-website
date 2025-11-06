import { useMutation } from '@tanstack/react-query';

import { sendContactEmail, sendPartnershipEmail } from '../queries/send-email.query';

export const useSendContactEmail = () => {
  return useMutation({
    mutationFn: sendContactEmail,
    mutationKey: ['sendContactEmail'],
  });
};

export const useSendPartnershipEmail = () => {
  return useMutation({
    mutationFn: sendPartnershipEmail,
    mutationKey: ['sendPartnershipEmail'],
  });
};
