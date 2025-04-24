import { useMutation } from '@tanstack/react-query';

import { sendEmail } from '../queries/send-email.query';

export const useSendEmail = () => {
  return useMutation({
    mutationFn: sendEmail,
    mutationKey: ['sendEmail'],
  });
};
