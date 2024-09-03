import{a as b,S as w,i as a}from"./assets/vendor-ChuW6yoq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const f=e=>`
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
`;let d=1,g="";const h=async e=>{e!==g&&(d=1,g=e);try{const r=await b.get("https://pixabay.com/api/",{params:{key:"45483609-d3ae590ff20ddbd4abc31de80",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:15}});return d+=1,r.data}catch(r){console.error("Error fetching fotos:",r)}},p=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),y=document.querySelector(".js-load-more"),n=document.querySelector(".loader");let l="";const m=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),L=e=>{if(e.preventDefault(),l=p.elements.user_query.value.trim(),l===""){a.warning({title:"Warning",position:"topRight",message:"Please enter a search query."});return}n.style.display="inline-block",y.style.display="none",h(l).then(r=>{if(r.hits.length===0){a.warning({title:"Warning",position:"topRight",message:"No images found. Please try a different search query."});return}const i=r.hits.map(s=>f(s)).join("");u.innerHTML=i,m.refresh(),y.style.display="block",p.reset()}).catch(r=>{console.log(r),a.error({title:"Error",position:"topRight",message:"An error occurred while uploading images. Please try again."})}).finally(()=>{n.style.display="none"})},v=()=>{n.style.display="inline-block",h(l).then(e=>{if(e.hits.length>0){const r=e.hits.map(s=>f(s)).join("");u.insertAdjacentHTML("beforeend",r),m.refresh();const i=u.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}else a.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."})}).catch(e=>{console.log(e),a.error({title:"Error",position:"topRight",message:"An error occurred while uploading images. Please try again."})}).finally(()=>{n.style.display="none"})};y.addEventListener("click",v);p.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
