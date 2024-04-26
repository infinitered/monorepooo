import {admin} from "@monorepooo/admin"
import { web } from "@monorepooo/web"
export function template() {
  return `(template ${admin()},${web()})`;
}

console.log("\nTemplate v0.1.0")
console.log("======");
console.log(template());
console.log("======");
