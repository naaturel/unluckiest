

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.AnXNanYA.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.PSnnHpgA.js","_app/immutable/chunks/index.0641B4xi.js"];
export const stylesheets = [];
export const fonts = [];
