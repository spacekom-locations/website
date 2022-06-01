import { mainEventBus } from "../main";
import VueI18n from "../i18n";
import store from "../store";
import Sugar from "sugar";

export default {
  loadConfig() {
    this.loadLocale();
    this.loadUser();
  },
  loadLocale() {
    this.setArabicTranslationForSugarDates();
    if (window.localStorage.getItem("locale")) {
      const locale = window.localStorage.getItem("locale");
      if (VueI18n.locale != locale) {
        mainEventBus.$emit("changeLocale", locale);
      }
    }
  },
  loadUser() {
    try {
      if (
        window.localStorage.getItem("authorizationToken") &&
        window.localStorage.getItem("user")
      ) {
        const token = window.localStorage.getItem("authorizationToken");
        const user = JSON.parse(
          window.localStorage.getItem("user")
        );
        const userPayload = {
          token,
          user,
        };
        store.dispatch("User/login", userPayload);
      }
    } catch (error) {
      console.error(error);
      store.dispatch("User/logout");
    }
  },
  loadTheme(vuetifyInstance) {
    vuetifyInstance.theme.dark = false;
    if (window.localStorage.getItem("isDarkTheme")) {
      const isDark = Number(window.localStorage.getItem("isDarkTheme"));
      if (isDark) {
        vuetifyInstance.theme.dark = true;
      }
    }
  },
  setArabicTranslationForSugarDates() {
    /*
     * Arabic locale definition.
     * See the readme for customization and more information.
     * To set this locale globally:
     *
     * Sugar.Date.setLocale('ar')
     *
     */
    Sugar.Date.addLocale("ar", {
      plural: true,
      units:
        "ثانية|ثواني,دقيقة|دقائق,ساعة|ساعات,يوم|أيام,أسبوع|أسابيع,شهر|أشهر,سنة|سنوات",
      months:
        "جانفي,فيفري,مارس,أفريل,ماي,جوان,جويلية,أوت,سبتمبر,أكتوبر,نوفمبر,ديسمبر",
      weekdays: "أحد,اثنين,ثلاثاء,أربعاء,خميس,جمعة,سبت",
      numerals: "صفر,واحد|ة,اثنان,ثلاثة,أربعة,خمسة,ستة,سبعة,ثمانية,تسعة,عشرة",
      tokens: " ",
      short: "{yyyy}/{MM}/{dd}",
      medium: "{yyyy} {month} {d}",
      long: "{yyyy} {month} {d} {time}",
      full: "{weekday} {d} {month} {yyyy} {time}",
      stamp: "{dow} {d} {mon} {yyyy} {time}",
      time: "{mm}:{H}",
      past: "{sign} {num} {unit}",
      future: "{sign} {num} {unit}",
      duration: "{num} {unit}",
      timeMarkers: " ",
      ampm: "صباحا,مساء",
      modifiers: [
        { name: "day", src: "أمس", value: -1 },
        { name: "day", src: "اليوم", value: 0 },
        { name: "day", src: "غدا", value: 1 },
        { name: "sign", src: "منذ", value: -1 },
        { name: "sign", src: "في غضون", value: 1 },
        { name: "shift", src: "الماضي|ة", value: -1 },
        { name: "shift", src: "الآتي|ة", value: 1 },
      ],
      parse: [
        "{months} {year?}",
        "{sign} {num} {unit}",
        "{0?} {unit:5-7} {shift}",
      ],
      timeParse: [
        "{day|weekday} {shift?}",
        "{weekday?},? {0?} {date}{1?} {months}\\.? {year?}",
      ],
      timeFrontParse: [
        "{0?} {weekday} {shift}",
        "{weekday?},? {0?} {date}{1?} {months}\\.? {year?}",
      ],
    });
  },
};
