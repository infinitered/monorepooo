import { api } from "@monorepooo/api"
import { utils } from "@monorepooo/utils"

export function web():string {
  return `[web ${api()},${utils()}]`;
}
