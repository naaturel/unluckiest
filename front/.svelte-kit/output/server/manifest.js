export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["style/app.css","style/menu.css"]),
	mimeTypes: {".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dk8EHlvX.js","app":"_app/immutable/entry/app.BB-guR1A.js","imports":["_app/immutable/entry/start.Dk8EHlvX.js","_app/immutable/chunks/entry.CWTQmo3s.js","_app/immutable/chunks/scheduler.t-3xYmlC.js","_app/immutable/chunks/index.BEtjop6e.js","_app/immutable/entry/app.BB-guR1A.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.t-3xYmlC.js","_app/immutable/chunks/index.Dz99_Qdh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/play",
				pattern: /^\/play\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
