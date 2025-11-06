import ky from 'ky';

interface SendEmailContent {
  email: string;
  message: string;
  name: string;
  subject: string;
}

interface SendPartnershipEmailContent {
  companyName: string;
  email: string;
  name: string;
  phoneNumber: string;
}

const SEND_EMAIL_URL = '/api/send-email';

export const sendContactEmail = async (content: SendEmailContent) => {
  try {
    const response = await ky
      .post(`${SEND_EMAIL_URL}/contact`, {
        json: content,
      })
      .json();
    return response;
  } catch (error) {
    throw error;
  }
};

export const sendPartnershipEmail = async (content: SendPartnershipEmailContent) => {
  try {
    const response = await ky
      .post(`${SEND_EMAIL_URL}/partners`, {
        json: content,
      })
      .json();
    return response;
  } catch (error) {
    throw error;
  }
};
