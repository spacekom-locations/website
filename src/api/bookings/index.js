import api from "..";

export const indexBookings = async function () {
  const response = await api.get("/bookings");
  return response.data;
};
export const bookLocation = async function (data) {
  const response = await api.post("/bookings", data);
  return response.data;
};
