export default {
  setCurrentBooking(state, booking) {
    state.currentBooking = booking;
  },
  resetCurrentBooking(state) {
    state.currentBooking = {
      location: {},
      bookingDetails: {
        selectedCrewRange: null,
        selectedActivity: null,
        selectedDates: [
          {
            day: null,
            start: null,
            end: null,
          },
        ],
        addOns: [],
      },
    };
  },
};
