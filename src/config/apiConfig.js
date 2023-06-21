import axios from "axios";

export const instance = axios.create({
  baseURL: "https://62f67ea5a3bce3eed7c28375.mockapi.io/contacts/",
});
