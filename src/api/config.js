import axios from "axios";

export default {
  setDefaults() {
    if (process.env.NODE_ENV == "production") {
      axios.defaults.baseURL = process.env.VUE_APP_API_PRODUCTION_BASE_URL;
    } else {
      axios.defaults.baseURL = process.env.VUE_APP_API_DEVELOPMENT_BASE_URL;
    }
    axios.defaults.headers.common["Accept"] = "application/json";
  },

  setAuthorizationHeader(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
};
