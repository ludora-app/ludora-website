import { HTTPError } from 'ky';

export const handleApiError = async (error: unknown) => {
  if (error instanceof HTTPError) {
    const errorBody = await error.response.json();
    throw errorBody || 'Failed to create person';
  }
  throw error;
};
