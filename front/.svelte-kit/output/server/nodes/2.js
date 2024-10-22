

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B0UqQsDX.js","_app/immutable/chunks/scheduler.t-3xYmlC.js","_app/immutable/chunks/index.Dz99_Qdh.js","_app/immutable/chunks/scoreStore.BJlEo5Dk.js","_app/immutable/chunks/index.BEtjop6e.js"];
export const stylesheets = ["_app/immutable/assets/2.DxlxdAfj.css"];
export const fonts = [];
