import ky from 'ky';

interface SendEmailContent {
  email: string;
  message: string;
  name: string;
  subject: string;
}

export const sendEmail = async (content: SendEmailContent) => {
  try {
    const response = await ky
      .post('/api/send-email', {
        json: content,
      })
      .json();
    return response;
  } catch (error) {
    throw error;
  }
};
