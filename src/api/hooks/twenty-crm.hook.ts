import { useMutation } from '@tanstack/react-query';

import { createOpportunity, createPerson, sendContactMessage } from '../queries/twenty-crm.query';

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

export const useAddCrmOpportunity = () => {
  return useMutation({
    mutationFn: createOpportunity,
    mutationKey: ['createOpportunity'],
  });
};
