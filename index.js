import { create } from "create-svelte";

create("./emptyDir", {
  name: "@scope/package",
  /* these two don't matter, so long as they're valid */
  template: "skeleton",
  types: "typescript",
});

console.log(
  "        Now observe ./emptyDir/package.json and see that the name field is not set to @scope/package",
);
