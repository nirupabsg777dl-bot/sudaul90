const CACHE="sudaul-v20";
const CORE=[
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './privacy.html'
];
self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(CACHE).then(c=>Promise.allSettled(CORE.map(u=>c.add(u).catch(()=>{}))))
  );
  self.skipWaiting();
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
      if(res&&res.status===200&&res.type==="basic"){
        const cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));
      }
      return res;
    }).catch(()=>caches.match("./index.html")))
  );
});
