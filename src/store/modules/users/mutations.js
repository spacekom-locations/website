export default {
  setAsAuthenticated(state) {
    state.isAuthenticated = true;
  },
  setAsUnAuthenticated(state) {
    state.isAuthenticated = false;
  },
  setUser(state, user) {
    state.user = user;
    window.localStorage.setItem("user", JSON.stringify(user));
  },
  setAuthorizationToken(state, token) {
    state.authorizationToken = token;
    window.localStorage.setItem("authorizationToken", token);
  },
  setAsRenter(state) {
    state.isHost = false;
    window.localStorage.setItem("isHost", false);
  },
  setAsHost(state) {
    state.isHost = true;
    window.localStorage.setItem("isHost", true);
  },
  toggleIsHost(state) {
    state.isHost = !state.isHost;
    window.localStorage.setItem("isHost", state.isHost);
  },
};
