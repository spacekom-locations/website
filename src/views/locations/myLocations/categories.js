import { LocationBasicSteps } from "./edit/steps/basics";
import { LocationGetReadySteps } from "./edit/steps/getReady";
import { LocationSceneSteps } from "./edit/steps/scene";

export const categories = [
  {
    id: "BASICS",
    name: "The Basics",
    title: "Step One: Location Basics",
    steps: LocationBasicSteps,
    description: "Amenities, logistic and more",
  },
  {
    id: "SCENE",
    name: "scene",
    title: "Step Two: Set the scene",
    steps: LocationSceneSteps,
    description: "Photos, short description, title",
  },
  {
    id: "GET_READY",
    name: "Get ready to shoot",
    title: "Step Three: Get ready to shoot",
    steps: LocationGetReadySteps,
    description: "Pricing and calendar",
  },
];
