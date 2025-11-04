import ky from 'ky';

import { handleApiError } from '../utils/error-handler.utils';

type CreatePersonParams = {
  email: string;
  name?: string;
};

type SendContactMessageParams = {
  email: string;
  name?: string;
  message: string;
  subject: string;
};

type CreateOpportunityParams = {
  companyName: string;
  email: string;
  name: string;
  phoneNumber: string;
};

const NEXT_TWENTY_CRM_URL = 'api/twenty-crm';

export const createPerson = async (params: CreatePersonParams) => {
  try {
    const response = await ky
      .post(`${NEXT_TWENTY_CRM_URL}/people`, {
        json: params,
      })
      .json();
    return response;
  } catch (error) {
    await handleApiError(error);
  }
};

export const sendContactMessage = async (params: SendContactMessageParams) => {
  try {
    const response = await ky
      .post(`${NEXT_TWENTY_CRM_URL}/contact`, {
        json: params,
      })
      .json();
    return response;
  } catch (error) {
    await handleApiError(error);
  }
};

export const createOpportunity = async (params: CreateOpportunityParams) => {
  try {
    const response = await ky
      .post(`${NEXT_TWENTY_CRM_URL}/opportunities`, {
        json: params,
      })
      .json();
    return response;
  } catch (error) {
    await handleApiError(error);
  }
};
