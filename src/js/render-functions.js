export const createGalleryCardTemplate = imgInfo => {
  return `
  <li class="gallery-card">
  <a class="gallery-link" href="${imgInfo.largeImageURL}">
    <img class="gallery-card" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
    <div class="card-info">
      <p class="info-item">
        <b>Likes</b> ${imgInfo.likes}
      </p>
      <p class="info-item">
        <b>Views</b> ${imgInfo.views}
      </p>
      <p class="info-item">
        <b>Comments</b> ${imgInfo.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b> ${imgInfo.downloads}
      </p>
    </div>
  </a>
</li>
`;
};
