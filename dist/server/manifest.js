const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar-1.png","desain-tanpa-judul-10.png","desain-tanpa-judul-14.png","desain-tanpa-judul-6.png","desain-tanpa-judul-8.png","gif-onye-1-2d2e38.gif","group-6.svg","group-7.svg","image-3.png","logo-an-6-1.png","lol.svg","robots.txt","untitled252.png","untitled325.png","vector-1.svg","vector-2.svg","vector-3.svg","vector-arrow-inner.svg","vector-arrow-outer.svg"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BcS4JzxX.js",app:"_app/immutable/entry/app.BPnwibtH.js",imports:["_app/immutable/entry/start.BcS4JzxX.js","_app/immutable/chunks/DB6RKumZ.js","_app/immutable/chunks/DmsB0uuP.js","_app/immutable/entry/app.BPnwibtH.js","_app/immutable/chunks/DmsB0uuP.js","_app/immutable/chunks/kNaey6uv.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-uv7TCIaE.js')),
			__memo(() => import('./chunks/1-CanzRfcy.js')),
			__memo(() => import('./chunks/2-Dp81W_TV.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
