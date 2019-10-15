import Api from './api';

export const getEmailId = async () => {
  const res = await Api.get('/wp-json/contact-form-7/v1/contact-forms');
  return res.data;
}

export const sendEmail = async (id, data) => {
  const res = await Api.post(`/wp-json/contact-form-7/v1/contact-forms/${id}/feedback`, data);
  return res.data;
}