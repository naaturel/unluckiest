

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Cz998YEo.js","_app/immutable/chunks/scheduler.PSnnHpgA.js","_app/immutable/chunks/index.0641B4xi.js"];
export const stylesheets = [];
export const fonts = [];
