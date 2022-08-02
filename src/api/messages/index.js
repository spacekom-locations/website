import api from "../index";

export const loadThreads = async function () {
  const response = await api.get("/messages");
  return response.data;
};

export const createThread = async function (
  message,
  location_id,
  booking_inputs,
  has_flexible_dates
) {
  const response = await api.post("/messages", {
    message,
    location_id,
    booking_inputs,
    has_flexible_dates,
  });
  return response.data;
};

export const createThreadFromBooking = async function (bookingId, message) {
  const response = await api.post(`/messages/compose-from-booking`, {
    message: message,
    booking_id: bookingId
  });
  return response.data;
};

export const showThread = async function (id) {
  const response = await api.get(`/messages/${id}`);
  return response.data;
};

export const sendMessage = async function (threadId, message) {
  const response = await api.post(`messages/${threadId}`, {
    message,
  });
  return response.data;
};
