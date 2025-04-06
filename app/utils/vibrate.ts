import { consola } from "consola";
export const vibrate = (pattern: number[]) => {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  } else {
    consola.warn("Vibration API is not supported in this browser.");
  }
};
