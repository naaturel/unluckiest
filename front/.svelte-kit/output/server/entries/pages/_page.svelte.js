import { c as create_ssr_component, d as each, e as escape, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { s as scoreStore } from "../../chunks/scoreStore.js";
const css = {
  code: ".leaderboard.svelte-13k6dxr{display:flex;flex-direction:column;width:60vw;height:65vh;padding:0 2vw 2vw 2vw;overflow:scroll;overflow-x:hidden}.leaderboard.svelte-13k6dxr::-webkit-scrollbar{display:none}li.svelte-13k6dxr{display:flex;justify-content:space-around;padding:1.25vh;margin:1.5vh;border:2px solid #A1674A;border-radius:10px;background-color:#f1ecec;box-shadow:0 0 10px #343232}li.svelte-13k6dxr:hover{transform:scale(1.075);background-color:#F5F5F5}.name.svelte-13k6dxr,.score.svelte-13k6dxr{color:black;margin-left:3vh}.name.svelte-13k6dxr{flex-grow:100;border-right:1px solid #A1674A}.score.svelte-13k6dxr{flex-grow:20;text-align:center}",
  map: '{"version":3,"file":"LeaderBoard.svelte","sources":["LeaderBoard.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n    export let scores = []\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<ul class=\\"leaderboard\\">\\r\\n\\r\\n    {#each scores as score, i}\\r\\n        <li class=\\"item\\">\\r\\n            <div class=\\"name\\"><img src=\\"\\" alt=\\"\\"/> {score.playerName} </div><div class=\\"score\\"> {score.value} pts.</div>\\r\\n        </li>\\r\\n    {/each}\\r\\n\\r\\n</ul>\\r\\n\\r\\n<style>\\r\\n\\r\\n    .leaderboard\\r\\n    {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n\\r\\n        width: 60vw;\\r\\n        height: 65vh;\\r\\n\\r\\n        padding: 0 2vw 2vw 2vw;\\r\\n        overflow: scroll;\\r\\n        overflow-x: hidden;\\r\\n    }\\r\\n\\r\\n    .leaderboard::-webkit-scrollbar {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    li\\r\\n    {\\r\\n        display: flex;\\r\\n        justify-content: space-around;\\r\\n        padding: 1.25vh;\\r\\n        margin: 1.5vh;\\r\\n        border: 2px solid #A1674A;\\r\\n        border-radius: 10px;\\r\\n        background-color: #f1ecec;\\r\\n        box-shadow: 0 0 10px #343232;\\r\\n    }\\r\\n\\r\\n    li:hover\\r\\n    {\\r\\n        transform: scale(1.075);\\r\\n        background-color: #F5F5F5;\\r\\n    }\\r\\n\\r\\n    .name, .score\\r\\n    {\\r\\n        color: black;\\r\\n        margin-left: 3vh;\\r\\n    }\\r\\n\\r\\n    .name\\r\\n    {\\r\\n        flex-grow: 100;\\r\\n        border-right: 1px solid #A1674A;\\r\\n    }\\r\\n\\r\\n    .score\\r\\n    {\\r\\n        flex-grow: 20;\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n</style>"],"names":[],"mappings":"AAkBI,2BACA,CACI,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CAEtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAEZ,OAAO,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACtB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,MAChB,CAEA,2BAAY,mBAAoB,CAC5B,OAAO,CAAE,IACb,CAEA,iBACA,CACI,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,OACzB,CAEA,iBAAE,MACF,CACI,SAAS,CAAE,MAAM,KAAK,CAAC,CACvB,gBAAgB,CAAE,OACtB,CAEA,oBAAK,CAAE,qBACP,CACI,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,GACjB,CAEA,oBACA,CACI,SAAS,CAAE,GAAG,CACd,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,OAC5B,CAEA,qBACA,CACI,SAAS,CAAE,EAAE,CACb,UAAU,CAAE,MAChB"}'
};
const LeaderBoard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { scores = [] } = $$props;
  if ($$props.scores === void 0 && $$bindings.scores && scores !== void 0) $$bindings.scores(scores);
  $$result.css.add(css);
  return `<ul class="leaderboard svelte-13k6dxr">${each(scores, (score, i) => {
    return `<li class="item svelte-13k6dxr"><div class="name svelte-13k6dxr"><img src="" alt=""> ${escape(score.playerName)} </div><div class="score svelte-13k6dxr">${escape(score.value)} pts.</div> </li>`;
  })} </ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $scoreStore, $$unsubscribe_scoreStore;
  $$unsubscribe_scoreStore = subscribe(scoreStore, (value) => $scoreStore = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(LeaderBoard, "LeaderBoard").$$render(
      $$result,
      { scores: $scoreStore },
      {
        scores: ($$value) => {
          $scoreStore = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_scoreStore();
  return $$rendered;
});
export {
  Page as default
};
