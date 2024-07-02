'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "95b3b47d4b3fd3a40e8f7fe97a3320ff",
".git/config": "763df18ab001f274c6e6d26bfae7b36f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ac8a6c3540933349aca2219f3b1a15f5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5ed8247c281416978676907750f1da5b",
".git/logs/refs/heads/main": "5ed8247c281416978676907750f1da5b",
".git/logs/refs/remotes/origin/main": "d2c65f14fc58d960f7b7f8a553fc05c9",
".git/objects/04/0021e2444b499f607e30ebc63f290dea5272d4": "a84b6980365056c0dd31ed37dad974d6",
".git/objects/05/0f7792ac053e84ca40cb729d5ce4a46d02dbca": "ca3669b5cef57b28c63d07d78a1397b1",
".git/objects/05/a8059f4d86fc7a4f842fd394a3d051f382b32f": "f661f4736d87a221f4dc9ef87a1c0e31",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/15/0980ae5c4ced95af39529c2c122720ad8c4239": "c3e993a365fd97dd51aad1b8777ce201",
".git/objects/17/ea195a4b23a0947d83686dc83e5d449ed8b34a": "935dfcb412098916fd42dcf1821a4ff6",
".git/objects/18/d73a6553d375d276373ac84af2b02008385a73": "a9ebf50a786635e7deea4eed81643fd2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/8663f0b53969ef060a6af509ac670f188b20bb": "4ae8c35c43fa363088650f7aaf4604ea",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/8f92eae99da5e74787cd3627b1f85bcbe9cef0": "a07bd013fecfa9e641aca7f7a35f8d67",
".git/objects/26/ce9a743ab1539d5fc3a6669e7c86c1dece8a72": "6a16816b40805d2cdeacbff116a0d284",
".git/objects/28/28040a508895d7c010ee73c8f6f299eea56004": "b4838e3ba7a1574758f43053daca66af",
".git/objects/29/5afe72c66f8306acff7ea3bdcb3e1469d76678": "1d07c27a46007ed1d42b431be2fdbd40",
".git/objects/35/ba031c2506f3a156cbc6065226733806b19699": "1fb91b953d6bda4951e6bbd561690d28",
".git/objects/38/83eaf9dcb8cae0aefe41ddd1cf6947f457b5dd": "dee9d253de90c776d8b3dd14080e11cd",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/cb213453dd30cd13f1f06ef581dde214f7cb74": "fc1f581beb69baccb60df8d57cf8418c",
".git/objects/4b/8d9867d388b2c5e2db4a5a08c00998416e628a": "7c0b7b67e1b85abe015d7f5e66228840",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/3c8cfc9ae221d5dd622a2ee99b71b044a7116a": "ad336b7a2347b93cac9eb95acb899206",
".git/objects/5d/6459479951385805fb82ebb2ee3781f5d0b473": "5bc80d691cb9e4bda42bd4c03aa64f92",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/be58a1cb5a44c4678200ac6cfb5d7f41ec5f74": "70a4a5e9a8cf387b0a5a7c3d22f374f2",
".git/objects/67/087d39b2bf19d51c44257d02f6c69945400d6e": "15bb45b0cda216c605132781a4141aa9",
".git/objects/6b/7f16ed09c9a377cc24ac79176c0312d1f1aa31": "51c8db9a2694a4794190c19472766a0a",
".git/objects/71/332313ab947d3028af4ec78448bd0eddf07c15": "4170c596f92ad73df4a9ea658f646643",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/72db938ca856117eed0350e55a7f0d75428b59": "da7c909e327beb579df2dc42075b52de",
".git/objects/77/acaccbc44e60a5516f70d4ec1d121cf4a9c4b6": "601753be8c347a1ac0332d0bf65449ce",
".git/objects/79/facce211550a0cfc4fbfc99a319af84ccf9b26": "89e2ea35837cd1fda60fea2747220ca0",
".git/objects/7c/da68a4a475493bada56029c0b016a8fafb1687": "7bfdd8f5b542beda5f62905f2b1819d7",
".git/objects/90/5f677326de3ac84e46ecccab8d398cc5b8c788": "0f37ee0c64b4633c5c6e4778d73b1cbf",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9b/b2e041e609701d6f5b21c4d9a1aef3ec97c217": "2dd23565fe53cfcdab507350be1f4ce7",
".git/objects/9e/e78796e1c2208e13b2dfd5af3ba25187b62b45": "25a23374a41064e161f9fd352e9e696f",
".git/objects/a5/7725411957bcef0ed00174b48343543f1b79c6": "a5d69cb9afb3ace3b3ed33bd6f36b9ea",
".git/objects/a9/454fe8459b4ddaa591c8de7487bd6593b97ec1": "5278d68940a5630c7e84d5fb3fb130c2",
".git/objects/ae/debf4e55f1e7419807517cc78a2b7a444b71a1": "511adda14bb4d04f24ce47b0c74e498e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/c7/a5b6632937eaf5f064c987d03182839fe01950": "433d192e83cf9fedea89d5af60b7a0bb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/7e83b0750512f66e436ce91bd6bacae347e0c1": "b098ace23398c1e4d897b8826e65ed81",
".git/objects/d7/831fb28ca58ff0530346910175c3b07011a2ba": "81d2d5e94b9658955e2df8de8bd46e74",
".git/objects/d9/69e2376927992cfcc70e7198c397c904187083": "a1789e4551975ff7e9b2d691ad0b0cbf",
".git/objects/d9/8769540243939796f3457bf7acd97f72226216": "9d520f0b1fa7eea312ebfd274799e55c",
".git/objects/dc/1abef6bc91b650d8d97f593beafbaeb6193edd": "9550fe8b1d82e66191cf79fd8a5bdad2",
".git/objects/e3/6418c65043b9df8fb285c0acccdfecd7afd95a": "ce22e5be6986d549ccb8d6a28428a904",
".git/objects/e4/7446c5cd088b0416b84e7b25a4b5e48dad1b55": "549c012bb161c46e1ef18837153775d3",
".git/objects/e9/476b957a6008813e61b2fbf2f5ec86fd31c13f": "7ebf7287391a7df69afb3974859e0077",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/1d164e0699949d1c10e60a708f930e1fccc6c6": "26f98b624f63da1c909af9bdd3d715ac",
".git/objects/fd/b487022d045ed24259f61009ada49aaff74540": "1e239562dfd6c331b456020b492f8e5c",
".git/objects/fe/634f7c834947337770f62b81634b25c33c66f4": "af0346ede46d6330070c83ba20b6cb0e",
".git/objects/fe/ad80c39d2c7114720bdba45db815881177a9cb": "ef62a477d30e621f5174c5d50daf0600",
".git/refs/heads/main": "521c1d0c9b842f9f73ca45d7a5425e62",
".git/refs/remotes/origin/main": "521c1d0c9b842f9f73ca45d7a5425e62",
"assets/AssetManifest.bin": "fdce4aa3c6daa0d46c6c712494c3851d",
"assets/AssetManifest.bin.json": "cbd0c027014be1380505c15fbac19201",
"assets/AssetManifest.json": "ee0c2c95ac4bfec0d3f2525a553441b5",
"assets/assets/fonts/Tanha-FD.ttf": "73ec92f80f0964e7653d996475a07fb3",
"assets/assets/img/1.jpg": "474d348ddb0eb47c9595b8c7f117b853",
"assets/assets/img/91388754.png": "a39569a962bc80eff8971eddb681c995",
"assets/assets/img/bg.jpg": "5f94b587f8fbaa92371e484e6d6da78e",
"assets/assets/img/bg2.jpg": "ae0995975b82f7690e290554efecd6b5",
"assets/assets/img/icon.jpg": "b6418c7f445adab4f79c20832e89eb50",
"assets/assets/img/profile.png": "1c97f101f0f87ade1937e09686aa5f13",
"assets/assets/lottie/1.json": "af71ab9a3294ad00197d66991b046ed2",
"assets/FontManifest.json": "ce5f009813b2d10ec4326a36ba44dc1e",
"assets/fonts/MaterialIcons-Regular.otf": "db5ca61231d3093e2f9a119c66ff013f",
"assets/NOTICES": "49224065e286b9a915c960fd7ec1a025",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4938450b801e41a38d020df6502c4cab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "cc432ee19961c9b317aabc22cb3a0886",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5f6aa3d9b65b4da7d5777fcb69e5d8bd",
"icons/Icon-192.png": "f072fcd19bc0fdc2f507864a7d7888be",
"icons/Icon-512.png": "99fbf247bc7b6df2e4298b00a2491112",
"icons/Icon-maskable-192.png": "f072fcd19bc0fdc2f507864a7d7888be",
"icons/Icon-maskable-512.png": "99fbf247bc7b6df2e4298b00a2491112",
"index.html": "182df827f55bb9fd43001a2fa81de9e0",
"/": "182df827f55bb9fd43001a2fa81de9e0",
"main.dart.js": "4e506fcb3680a0315356bc289cbf0dd0",
"manifest.json": "208f4bb3db78755cecde7a283592388d",
"version.json": "2cbb4ace4595cee1f2d37354d05121da"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
