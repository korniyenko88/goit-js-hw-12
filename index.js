import{a as w,S as L,i as l}from"./assets/vendor-ChuW6yoq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const h=e=>`
  <li class="gallery-card">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-card" src="${e.webformatURL}" alt="${e.tags}" />
    <div class="card-info">
      <p class="info-item">
        <b>Likes</b> ${e.likes}
      </p>
      <p class="info-item">
        <b>Views</b> ${e.views}
      </p>
      <p class="info-item">
        <b>Comments</b> ${e.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b> ${e.downloads}
      </p>
    </div>
  </a>
</li>
`;let p=1,g="";const f=async e=>{e!==g&&(p=1,g=e);try{const t=await w.get("https://pixabay.com/api/",{params:{key:"45483609-d3ae590ff20ddbd4abc31de80",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:p,per_page:15}});return p+=1,t.data}catch(t){throw console.error("Error fetching fotos:",t),t}},u=document.querySelector(".js-search-form"),y=document.querySelector(".js-gallery"),n=document.querySelector(".js-load-more"),c=document.querySelector(".loader");let a="";const m=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),b=e=>{e.length<15?n.style.display="none":n.style.display="block"},v=e=>{if(e.preventDefault(),a=u.elements.user_query.value.trim(),a===""){l.warning({title:"Warning",position:"topRight",message:"Please enter a search query."});return}c.style.display="inline-block",n.style.display="none",f(a).then(t=>{if(t.hits.length===0){l.warning({title:"Warning",position:"topRight",message:"No images found. Please try a different search query."});return}const i=t.hits.map(s=>h(s)).join("");y.innerHTML=i,m.refresh(),b(t.hits),u.reset()}).catch(t=>{console.log(t),l.error({title:"Error",position:"topRight",message:"An error occurred while uploading images. Please try again."})}).finally(()=>{c.style.display="none"})},E=()=>{c.style.display="inline-block",f(a).then(e=>{if(e.hits.length>0){const t=e.hits.map(s=>h(s)).join("");y.insertAdjacentHTML("beforeend",t),m.refresh();const i=y.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"}),b(e.hits)}else l.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),n.style.display="none"}).catch(e=>{console.log(e),l.error({title:"Error",position:"topRight",message:"An error occurred while uploading images. Please try again."})}).finally(()=>{c.style.display="none"})};n.addEventListener("click",E);u.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
