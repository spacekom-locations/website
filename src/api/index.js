import axios from "axios";
import { responseCodes } from "./responseCodes";
import router from "../router/index";
import store from "../store";


export const HTTP_METHOD_GET = "GET";
export const HTTP_METHOD_POST = "POST";
export const HTTP_METHOD_DELETE = "DELETE";
export const HTTP_METHOD_PUT = "PUT";

export default {
  async makeAPIRequest(method, url, data, params) {
    const requestConfiguration = { method, url, data, params };

    try {
      const response = await axios.request(requestConfiguration);

      return response;
    } catch (error) {
      const responseCode = error.response.status;
      const responseData = error.response;
      alert(error);
      switch (responseCode) {
        case responseCodes.HTTP_UNAUTHORIZED:
          //incase the user is'nt authenticated and not in login page

          if (router.history.current.name == "Authenticate") {
            throw error;
          }
          store.dispatch("User/logout");
          router.push({
            name: "Authenticate",
            query: { action: 'login', next: router.history.current.name },
          });
          break;
        case responseCodes.HTTP_FORBIDDEN:
          router.push({ name: "Unauthorized" });
          break;
        case responseCodes.HTTP_NOT_FOUND:
          router.push({ name: "NotFound" });
          break;
        case responseCodes.HTTP_TOO_MANY_REQUESTS:
          router.push({ name: "TooManyRequests" });
          break;
        default:
          throw error;
      }
      return responseData;
    }
  },
  async post(url, data, params) {
    return await this.makeAPIRequest(HTTP_METHOD_POST, url, data, params);
  },
  async get(url, params) {
    return await this.makeAPIRequest(HTTP_METHOD_GET, url, null, params);
  },
  async put(url, data, params) {
    const putMethodParam = { _method: HTTP_METHOD_PUT };
    if (params) {
      params = Object.assign(params, putMethodParam);
    } else params = putMethodParam;
    return await this.post(url, data, params);
  },
  async delete(url, data, params) {
    return await this.makeAPIRequest(HTTP_METHOD_DELETE, url, data, params);
  },
};
