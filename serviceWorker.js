const staticDev = "jhonarendra-rocket"
const assets = [
	"/",
	"/index.html",
	"/apple-touch-icon.png",
	"/apple-touch-icon-57x57.png",
	"/apple-touch-icon-72x72.png",
	"/apple-touch-icon-76x76.png",
	"/apple-touch-icon-114x114.png",
	"/apple-touch-icon-120x120.png",
	"/apple-touch-icon-144x144.png",
	"/apple-touch-icon-152x152.png",
	"/apple-touch-icon-180x180.png",
	"/favicon.ico",
	"/favicon.png",
	"/css/app.0eeedd3f.css",
	"/css/chunk-vendors.a2cadc9e.css",
	"/fonts/fa-brands-400.cbd387d9.eot",
	"/fonts/fa-brands-400.d30c44aa.woff",
	"/fonts/fa-brands-400.d6ac6c96.ttf",
	"/fonts/fa-brands-400.eac60e8a.woff2",
	"/fonts/fa-regular-400.4b218302.woff2",
	"/fonts/fa-regular-400.8c1f0780.eot",
	"/fonts/fa-regular-400.e32cb360.woff",
	"/fonts/fa-regular-400.f1994ecd.ttf",
	"/fonts/fa-solid-900.2e302fa4.eot",
	"/fonts/fa-solid-900.5dc01cfc.woff2",
	"/fonts/fa-solid-900.80c404ff.ttf",
	"/fonts/fa-solid-900.a8eedaad.woff",
	"/fonts/QdVUSTchPBm7nuUeVf70viFl.0ae6341d.woff2",
	"/img/arrow.90f33ec8.svg",
	"/img/awan1.7ef8d01e.png",
	"/img/awan1.c6f8ffdb.svg",
	"/img/awan2.208c8f63.png",
	"/img/awan2.81e54487.svg",
	"/img/awan3.0bb71a59.svg",
	"/img/awan3.2459c6f1.png",
	"/img/awan4.237e5ec8.png",
	"/img/awan4.ac039bed.svg",
	"/img/awan5.790f031d.png",
	"/img/awan6.3901d06f.png",
	"/img/bmkg-logo.95956092.png",
	"/img/char1.9e95b4be.svg",
	"/img/char2.5f79c010.svg",
	"/img/cincintitik.b3d9f093.svg",
	"/img/curl.5e5ef2bf.png",
	"/img/dotdot.ab7d3631.svg",
	"/img/fa-brands-400.4568b5b5.svg",
	"/img/fa-regular-400.26d8edc8.svg",
	"/img/fa-solid-900.b7c60297.svg",
	"/img/fire1.c4448f15.svg",
	"/img/fire2.f235ac00.svg",
	"/img/fotojhonarendra.e65b0715.png",
	"/img/icon-firestore.d36c8a60.png",
	"/img/icon-git.ca2e1086.png",
	"/img/icon-pwa.54b9a5b7.png",
	"/img/icon-vue.7361ef3e.png",
	"/img/iconads.a8336df7.png",
	"/img/iconandroid.f1a3b093.png",
	"/img/icondzgn.f432b261.png",
	"/img/iconfb.42bd46dc.png",
	"/img/iconig.a3d3e2ce.png",
	"/img/iconseo.e8476506.png",
	"/img/iconsosmed.c15878a6.png",
	"/img/icontw.c26490a0.png",
	"/img/iconweb.1ca71cd2.png",
	"/img/jhonarendra-2.3e4f1980.png",
	"/img/jhonarendra.5841a674.png",
	"/img/kotak2besar.da4dfef5.png",
	"/img/laksita-logo.cdac5a8a.jpg",
	"/img/lingk3.896d9948.png",
	"/img/lingkdotted.e9b543af.png",
	"/img/lingkgaris.5556be3b.png",
	"/img/lingkgarisfoto.40767dda.png",
	"/img/lingkhead.c6f1a783.png",
	"/img/lingktrans.58023f3b.png",
	"/img/logo-unud.fadb1762.png",
	"/img/logo.82b9c7a5.png",
	"/img/no-image.be2dfb9d.jpg",
	"/img/rocket.6e1e48c2.svg",
	"/img/sigasiku.4e735d71.svg",
	"/img/small-corel.07f5399e.png",
	"/img/small-jquery.04d7bd6b.png",
	"/img/small-nodejs.4233723c.png",
	"/img/small-otak.50e3e5c8.jpg",
	"/img/small-vue.bf3d3122.png",
	"/img/thumb-rocket.8648044e.png",
	"/img/trape.ce325df1.svg",
	"/img/trapehead.f8799840.svg",
	"/js/app.69e6f6e9.js"
	"/js/app.69e6f6e9.js.map"
	"/js/chunk-2d21a3d2.d328670b.js"
	"/js/chunk-2d21a3d2.d328670b.js.map"
	"/js/chunk-vendors.d51ec661.js"
	"/js/chunk-vendors.d51ec661.js.map"
]
self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticDev).then(cache => {
			cache.addAll(assets)
		})
	)
})
self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})