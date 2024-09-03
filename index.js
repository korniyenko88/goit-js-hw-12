import{a as b,S as w,i as l}from"./assets/vendor-ChuW6yoq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const g=e=>`
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
`;let p=1,h="";const f=async e=>{e!==h&&(p=1,h=e);try{const t=await b.get("https://pixabay.com/api/",{params:{key:"45483609-d3ae590ff20ddbd4abc31de80",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:p,per_page:15}});return p+=1,t.data}catch(t){throw console.error("Error fetching fotos:",t),t}},u=document.querySelector(".js-search-form"),y=document.querySelector(".js-gallery"),a=document.querySelector(".js-load-more"),c=document.querySelector(".loader");let n="";const m=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),L=e=>{if(e.preventDefault(),n=u.elements.user_query.value.trim(),n===""){l.warning({title:"Warning",position:"topRight",message:"Please enter a search query."});return}c.style.display="inline-block",a.style.display="none",f(n).then(t=>{if(t.hits.length===0){l.warning({title:"Warning",position:"topRight",message:"No images found. Please try a different search query."});return}const i=t.hits.map(s=>g(s)).join("");y.innerHTML=i,m.refresh(),t.hits.length<15?a.style.display="none":a.style.display="block",u.reset()}).catch(t=>{console.log(t),l.error({title:"Error",position:"topRight",message:"An error occurred while uploading images. Please try again."})}).finally(()=>{c.style.display="none"})},v=()=>{c.style.display="inline-block",f(n).then(e=>{if(e.hits.length>0){const t=e.hits.map(s=>g(s)).join("");y.insertAdjacentHTML("beforeend",t),m.refresh();const i=y.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}else l.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),a.style.display="none"}).catch(e=>{console.log(e),l.error({title:"Error",position:"topRight",message:"An error occurred while uploading images. Please try again."})}).finally(()=>{c.style.display="none"})};a.addEventListener("click",v);u.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
