import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://65f43e67f54db27bc0211b36.mockapi.io/api/',
});

export const getAllContactsApi = async () => {
  const { data } = await instanceContacts(`contacts`);
  return data;
};
