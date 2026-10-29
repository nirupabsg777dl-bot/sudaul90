const CACHE="sudaul-v9";
const ASSETS=['./', './index.html', './styles.css', './app.js', './manifest.json', './icon-192.png', './icon-512.png', './privacy.html', './p_bench.jpg', './p_birddog.jpg', './p_bridge.jpg', './p_cablefly.jpg', './p_cablerow.jpg', './p_cablerow2.jpg', './p_climber.jpg', './p_curl.jpg', './p_curl2.jpg', './p_deadbug.jpg', './p_gsquat.jpg', './p_incline.jpg', './p_incline2.jpg', './p_legpress.jpg', './p_lunge.jpg', './p_lunge2.jpg', './p_ohp.jpg', './p_ohp2.jpg', './p_plank.jpg', './p_pullover.jpg', './p_pushup.jpg', './p_raise.jpg', './p_rdl.jpg', './p_rdl2.jpg', './p_row.jpg', './p_squat.jpg', './p_stretch.jpg', './p_stretch2.jpg', './p_walk.jpg'];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
  if(res&&res.status===200&&res.type==="basic"){const cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl))}
  return res;
 }).catch(()=>caches.match("./index.html"))));
});
