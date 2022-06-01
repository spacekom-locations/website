import api from "../index";

export const signup = async function (
  name,
  email,
  password,
  password_confirmation
) {
  const response = await api.post("authenticate/signup", {
    name,
    email,
    password,
    password_confirmation,
  });
  return response.data;
};

export const login = async function (email, password) {
  const response = await api.post("authenticate/login", { email, password });
  return response.data;
};

export const logout = async function (tokens = null) {
  if (!tokens) tokens = "current";

  const response = await api.get("logout", { tokens });
  return response.data;
};

export const getUser = async function (id) {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
export const update = async function (userData) {
  const response = await api.put("/users/0", userData);
  return response.data;
};

export const getPersonalAccessTokens = async function () {
  const response = await api.get("/users/0/personal-access-tokens");
  return response.data;
};
