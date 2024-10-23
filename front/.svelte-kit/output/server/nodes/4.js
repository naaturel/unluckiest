

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/play/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DdPoLKDr.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.PSnnHpgA.js","_app/immutable/chunks/index.0641B4xi.js","_app/immutable/chunks/scoreStore.d37k1Evl.js","_app/immutable/chunks/index.DXEl5lQ6.js"];
export const stylesheets = ["_app/immutable/assets/4.DKtufWnM.css"];
export const fonts = [];
