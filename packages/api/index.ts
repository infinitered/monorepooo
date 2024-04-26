import { utils } from "@monorepooo/utils";
export function api() {
  return `{api ${utils()}}`;
}

export function sayHello() {
  return "Hello from api package";
}
