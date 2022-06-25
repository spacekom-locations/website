import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/users/index";
import Locations from "./modules/locations/index";
import Bookings from "./modules/bookings/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    User,
    Locations,
    Bookings,
  },
});
