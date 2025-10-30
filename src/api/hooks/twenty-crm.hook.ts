import { useMutation } from '@tanstack/react-query';

import { createPerson, sendContactMessage } from '../queries/twenty-crm.query';

export const useAddCrmPerson = () => {
  return useMutation({
    mutationFn: createPerson,
    mutationKey: ['createPerson'],
  });
};

export const useSendCrmContactMessage = () => {
  return useMutation({
    mutationFn: sendContactMessage,
    mutationKey: ['sendContactMessage'],
  });
};
