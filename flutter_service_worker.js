'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/main.dart.js": "7e2fd3426a73ff752291fb2e45560743",
"/index.html": "abb72016b8d1a019345deb6e95124f00",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/COMMIT_EDITMSG": "da6cbe916de1a401628dfe2b4cc919da",
"/.git/refs/heads/master": "e85f2030d7d0747b64ffd22e34e55ae4",
"/.git/refs/remotes/origin/master": "e85f2030d7d0747b64ffd22e34e55ae4",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "2bb7b25e9d5946b54b3f92b7cbee54c6",
"/.git/logs/refs/heads/master": "2bb7b25e9d5946b54b3f92b7cbee54c6",
"/.git/logs/refs/remotes/origin/master": "0cf03d2420871a2e514fef6da6c34a3b",
"/.git/objects/56/4136d2acbc084ced522affc5ea1e7f3374f99a": "4613d9ca4a2b3570b82b913a3ec33bf8",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
"/.git/objects/24/aa031668fa95eae1a0151ec4252184b31eaf80": "5ea7568e4f6835f0b7f9ef25f8343f34",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/95/2a788809fc2a4bdde21f04f66d7c74f3f80ad7": "341ecba955a1ba24600a6e4da4a0a665",
"/.git/objects/46/2b085c789804e5f3ce07d90aabd3eb68cc9d1f": "06a85b61d65393e8e7f9ad440b77024c",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/fc/515b506e9f6cb58d364b38309f9b672f98bc67": "8f7f9ca2e050b60ffd3efeb49b90a522",
"/.git/objects/d1/d5ea4a7f04df285ee45e05474ef42973907ed0": "f4f7d90538f8868cf9e55f9bcbd41075",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/f4/726a5fbb0c0ae9290d688f873095b4ed02e640": "d2a025bd9cc3f7088aca05d9beda6048",
"/.git/objects/eb/daed772eea73a4e050142b5f8401d1a8fd848c": "7a0d70555dd22cb023ee245ee44af239",
"/.git/objects/1e/91856a0390e715911dfb3af10bdddeeea83d6e": "db5d31ba99397187f495fcd9de5fe40e",
"/.git/objects/fa/8f183d122a531df57b7b04d7d1b94193561e16": "465a719ea40e6b49df1ad734597ee0b0",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/80/6696789d83f8ccdfbbf75e5980483b3e3ae886": "4c138c63b558df0989a83833c3de39a3",
"/.git/index": "3145f56e856ddc513b39f979f77a3970",
"/.git/config": "be1b262eba9d05fd364ecbb1b8f920ba",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/AssetManifest.json": "b1671a3fcac52d9f5ad549e59d468682",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/me.jpeg": "895a17c3632d4f9a6637ccd9f7cb43cf",
"/assets/LICENSE": "b43ab82a2c90bd2dc856e6ed8fe8355e",
"/manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
