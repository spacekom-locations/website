import api from "../index";

export const addLocation = async function (location) {
  const response = await api.post("/users/0/locations", location);
  return response.data;
};

export const updateLocation = async function (locationId, payload) {
  const response = await api.put(`users/0/locations/${locationId}`, payload);
  return response.data;
};

export const indexMyLocations = async function () {
  const response = await api.get("users/0/locations");
  return response.data;
};

export const showLocation = async function (id) {
  const response = await api.get(`users/0/locations/${id}`);
  return response.data;
};

export const uploadLocationImages = async function (locationId, images) {
  const form = new FormData();
  for (let image of images) {
    form.append("image[]", image);
  }

  const response = await api.post(
    `users/0/locations/${locationId}/images`,
    form
  );
  return response.data;
};

export const removeLocationImage = async function (locationId, image) {
  const response = await api.delete(`users/0/locations/${locationId}/images`, {
    image,
  });
  return response.data;
};
