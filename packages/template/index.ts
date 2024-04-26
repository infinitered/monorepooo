import { admin } from "@monorepooo/admin";
import { web } from "@monorepooo/web";
import { sayHello, sayGoodbye } from "@monorepooo/api";
export function template() {
  return `(template ${admin()},${web()})`;
}

console.log("\nTemplate v0.1.1");
console.log(sayHello());
console.log("======");
console.log(template());
console.log("======");
console.log(sayGoodbye());
