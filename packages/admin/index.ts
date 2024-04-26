import { api } from "@monorepooo/api"
import { utils } from "@monorepooo/utils"

export function admin() {
  return `[admin ${api()},${utils()}]`
}
