import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://65f43e67f54db27bc0211b36.mockapi.io/api/',
});

export const fetchContacts = async () => {
  const { data } = await instanceContacts(`contacts`);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instanceContacts.delete(`/contacts/${id}`);
  return data;
};

export const addContact = async item => {
  const { data } = await instanceContacts.post(`/contacts`, item);
  return data;
};
