const CACHE_NAME="ICDNCache";let cachelist=[];self.addEventListener("install",(async function(e){self.skipWaiting(),e.waitUntil(caches.open(CACHE_NAME).then((function(e){return console.log("Opened cache"),e.addAll(cachelist)})))})),self.addEventListener("fetch",(async e=>{try{e.respondWith(handle(e.request))}catch(t){e.respondWith(handleerr(e.request,t))}}));const handleerr=async(e,t)=>new Response(`<h1>CDN分流器遇到了致命错误</h1>\n    <b>${t}</b>`,{headers:{"content-type":"text/html; charset=utf-8"}}),lfetch=async(e,t)=>{let n=new AbortController;const s=async e=>new Response(await e.arrayBuffer(),{status:e.status,headers:e.headers});return Promise.any||(Promise.any=function(e){return new Promise(((t,n)=>{let s=(e=Array.isArray(e)?e:[]).length,a=[];if(0===s)return n(new AggregateError("All promises were rejected"));e.forEach((e=>{e.then((e=>{t(e)}),(e=>{s--,a.push(e),0===s&&n(new AggregateError(a))}))}))}))}),Promise.any(e.map((e=>new Promise(((t,a)=>{fetch(e,{signal:n.signal}).then(s).then((e=>{200==e.status?(n.abort(),t(e)):a(e)}))})))))};self.addEventListener("fetch",(async e=>{try{e.respondWith(handle(e.request))}catch(t){-1!=fullpath(urlPath).indexOf(".html")&&e.respondWith(fetch("/404.html"))}}));const fullpath=e=>((e=e.split("?")[0].split("#")[0]).match(/\/$/)&&(e+="index"),e.match(/\.[a-zA-Z]+$/)||(e+=".html"),e),generate_blog_urls=(e,t,n)=>{const s=["https://fomalhaut.s3.ladydaily.com"];for(var a in s)s[a]+=n;return s},mirror=[],get_newest_version=async e=>lfetch(e,e[0]).then((e=>e.json())).then(res.version);self.db={read:(e,t)=>(t||(t={type:"text"}),new Promise(((t,n)=>{caches.open(CACHE_NAME).then((n=>{n.match(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`)).then((function(e){e||t(null),e.text().then((e=>t(e)))})).catch((()=>{t(null)}))}))}))),write:(e,t)=>new Promise(((n,s)=>{caches.open(CACHE_NAME).then((function(s){s.put(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`),new Response(t)),n()})).catch((()=>{s()}))}))};const set_newest_version=async e=>lfetch(e,e[0]).then((e=>e.json())).then((async e=>{await db.write("blog_version",e.version)}));function getFileType(e){return suffix=e.split(".")[e.split(".").length-1],"html"==suffix||"htm"==suffix?"text/html":"js"==suffix?"text/javascript":"css"==suffix?"text/css":"jpg"==suffix||"jpeg"==suffix?"image/jpeg":"ico"==suffix?"image/x-icon":"png"==suffix?"image/png":"webp"==suffix?"image/webp":"text/plain"}setInterval((async()=>{await set_newest_version(mirror)}),6e4),setTimeout((async()=>{await set_newest_version(mirror)}),5e3);const handle=async e=>{const t=e.url,n=new URL(t),s=n.pathname,a=n.hostname;return lxs=[],"www.fomal.cc"===a?lfetch(generate_blog_urls(0,await db.read("blog_version"),fullpath(s))).then((e=>e.arrayBuffer())).then((e=>new Response(e,{headers:{"Content-Type":`${getFileType(fullpath(s).split("/")[fullpath(s).split("/").length-1].split("\\")[fullpath(s).split("/")[fullpath(s).split("/").length-1].split("\\").length-1])};charset=utf-8`}}))):fetch(e)};