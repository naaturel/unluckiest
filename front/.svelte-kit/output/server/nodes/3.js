

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.vi6sie8m.js","_app/immutable/chunks/scheduler.t-3xYmlC.js","_app/immutable/chunks/index.Dz99_Qdh.js"];
export const stylesheets = [];
export const fonts = [];
