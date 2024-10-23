import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/scoreStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${`<p data-svelte-h="svelte-17x5wrh">Loading leaderboard...</p>`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
