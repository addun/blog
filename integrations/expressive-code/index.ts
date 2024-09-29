import { ExpressiveCodeTheme } from "astro-expressive-code";
import fs from "node:fs";

export function getDarkTheme() {
  console.log(import.meta.url);

  const jsonc = fs.readFileSync(new URL(`./themes/night-owl-dark.jsonc`, import.meta.url), "utf-8");
  return ExpressiveCodeTheme.fromJSONString(jsonc);
}

export function getLightTheme() {
  const jsonc = fs.readFileSync(new URL(`./themes/night-owl-light.jsonc`, import.meta.url), "utf-8");
  return ExpressiveCodeTheme.fromJSONString(jsonc);
}
