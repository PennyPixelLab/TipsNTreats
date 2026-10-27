(()=>{
const layer=document.querySelector('#loading-screen'),art=document.querySelector('#loading-art'),start=performance.now();let ready=false,finished=false,timer;
function dismiss(){if(finished)return;finished=true;clearTimeout(timer);layer.classList.add('is-done');document.documentElement.classList.remove('is-loading');setTimeout(()=>layer.remove(),450)}
function complete(){if(!ready||finished)return;if(!art.complete)return;setTimeout(dismiss,Math.max(0,1500-(performance.now()-start)))}
window.addEventListener('salon-ready',()=>{ready=true;complete()},{once:true});art.addEventListener('load',complete,{once:true});art.addEventListener('error',complete,{once:true});
timer=setTimeout(()=>{if(ready)dismiss();else{document.querySelector('#loading-text').textContent='読み込みに時間がかかっています';document.querySelector('#loading-retry').hidden=false;layer.classList.add('load-delayed')}},8000);
window.addEventListener('pageshow',e=>{if(e.persisted)dismiss()});
})();
