export default {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  user(state) {
    return state.user;
  },
  authorizationToken(state) {
    return state.authorizationToken;
  },
  isEmailConfirmed(state) {
    return state.user.email_verified_at != null;
  },
  isPhoneNumberConfirmed(state) {
    return (
      state.user.phone_number != null &&
      state.user.phone_number_verified_at != null
    );
  },
};
