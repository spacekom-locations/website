import config from "../../../api/config";

export default {
  async login(context, payload) {
    context.commit("setAuthorizationToken", payload.token);
    context.commit("setUser", payload.user);
    context.commit("setAsAuthenticated");

    window.localStorage.setItem("authorizationToken", payload.token);
    window.localStorage.setItem("user", JSON.stringify(payload.user));

    const isHost = Boolean(window.localStorage.getItem("isHost"));
    if (isHost) {
      context.commit("setAsHost");
    } else {
      context.commit("setAsRenter");
    }
    
    config.setAuthorizationHeader(payload.token);
  },
  logout(context) {
    context.commit("setAuthorizationToken", null);
    context.commit("setUser", null);
    context.commit("setAsUnAuthenticated");

    window.localStorage.removeItem("authorizationToken");
    window.localStorage.removeItem("user");

    config.setAuthorizationHeader("");
  },
};
