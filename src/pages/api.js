import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});
export const googleAuth = (code) =>
  api.get(`/api/v1/user/login/google?code=${code}`);
