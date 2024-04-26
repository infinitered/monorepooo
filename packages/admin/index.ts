import { api } from "@monorepooo/api";
import { utils } from "@monorepooo/utils";
import { utilsTwo } from "@monorepooo/utils-two";

export function admin() {
  return `[admin ${api()},${utils()},${utilsTwo}}!]`;
}
