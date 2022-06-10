import { categories } from "../categories";

export const basicsFields = [
  { field: "country", isRequired: true },
  { field: "street", isRequired: true },
  { field: "apt_suite", isRequired: false },
  { field: "city", isRequired: true },
  { field: "state", isRequired: true },
  { field: "zip_code", isRequired: true },
  { field: "lat", isRequired: true },
  { field: "lng", isRequired: true },
  { field: "kind", isRequired: false },
  { field: "types", isRequired: false },
  { field: "bedrooms_count", isRequired: false },
  { field: "bathrooms_count", isRequired: false },
  { field: "size", isRequired: false },
  { field: "lot_size", isRequired: false },
  { field: "main_floor_number", isRequired: false },
  { field: "parking_capacity", isRequired: false },
  { field: "motor_home_parking_types", isRequired: false },
  { field: "amenities", isRequired: false },
];

export const sceneFields = [
  { field: "styles", isRequired: false },
  { field: "features", isRequired: false },
  { field: "architectural_styles", isRequired: false },
  { field: "bathrooms_types", isRequired: false },
  { field: "ceiling_types", isRequired: false },
  { field: "doors_types", isRequired: false },
  { field: "exterior_types", isRequired: false },
  { field: "floor_types", isRequired: false },
  { field: "interior_types", isRequired: false },
  { field: "kitchen_features", isRequired: false },
  { field: "activities_types", isRequired: false },
  { field: "walls_types", isRequired: false },
  { field: "water_features", isRequired: false },
  { field: "windows_types", isRequired: false },
  { field: "description", isRequired: true },
  { field: "title", isRequired: true },
  { field: "images", isRequired: true },
];

export const getReadyFields = [
  { field: "crews_rules", isRequired: false },
  { field: "allowed_activities", isRequired: true },
  { field: "maximum_attendees_number", isRequired: true },
  { field: "minimum_rental_hours", isRequired: true },
  { field: "currency_code", isRequired: true },
  { field: "pricing", isRequired: true },
];

export const calculateProgress = function (fields, object) {
  let trueCount = 0;
  let falseCount = 0;
  let key;
  for (let field of fields) {
    key = field.field;
    if (field.isRequired == false) {
      ++trueCount;
      continue;
    }
    switch (typeof object[key]) {
      case "undefined":
        console.log("false found undefined ", object[key]);
        ++falseCount;
        break;
      case "object":
        if (
          !object[key] ||
          (Array.isArray(object[key]) && !object[key].length)
        ) {
          ++falseCount;
          console.log("false found object ", object[key]);
        } else ++trueCount;
        break;
      case "string":
        if (!object[key].length) {
          ++falseCount;
          console.log("false found string", object[key]);
        } else ++trueCount;
        break;
      default:
        ++trueCount;
        break;
    }
  }
  const percent = Math.floor((trueCount * 100) / (trueCount + falseCount));
  return percent;
};

export const basicsCompletionProgress = function (object) {
  return calculateProgress(basicsFields, object);
};

export const sceneCompletionProgress = function (object) {
  return calculateProgress(sceneFields, object);
};
export const getReadyCompletionProgress = function (object) {
  return calculateProgress(getReadyFields, object);
};

export const calculateCategoryCompletion = function (categoryId, object) {
  switch (categoryId) {
    case "BASICS":
      return basicsCompletionProgress(object);
    case "SCENE":
      return sceneCompletionProgress(object);
    case "GET_READY":
      return getReadyCompletionProgress(object);
    default:
      return 100;
  }
};

export const completionProgress = function (object) {
  let sum = 0;
  for (let category of categories) {
    sum += Math.floor(calculateCategoryCompletion(category.id, object));
  }
  return Math.floor(sum / categories.length);
};
