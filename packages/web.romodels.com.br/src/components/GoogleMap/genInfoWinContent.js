export const genInfoWindowContent = data => {
  const carouselImages = genCarouselImagesFromGoogleData(data);

  return `
  <div class='container' >
    <div class='row'>
      <div class='col-4'>

          <div id="google-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" style="max-height: 160px; width: 100%;">
              ${carouselImages}
            </div>
            <a class="carousel-control-prev" href="#google-carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#google-carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

      </div>
      <div class='col-8'>
        <p class='lead' >${data.name}</p>
        <p class='text-justify' >Endereço: ${data.formatted_address}</p>
        <p class='text-justify' >Telefone: ${data.formatted_phone_number}</p>
        <div><a href='${data.url}'>Ir para Google Maps...</a></div>
      </div>
    </div>
  </div>
  `;
};

function genCarouselImagesFromGoogleData(data) {
  let payload = '';

  data.photos.forEach((val, i, arr) => {
    payload += `
    <div class="carousel-item ${i === 0 ? 'active' : ''} ">
      <div><img height='100%' width='100%' src='${val.getUrl()}' alt='carousel-item-${i + 1}'></div>
    </div>
  `;
  });

  return payload;
}

// <div class="carousel-item active">
// <div><img height='100%' width='100%' src='${data.photos[0].getUrl()}' alt='Something'></div>
// </div>
// <div class="carousel-item">
// <div><img height='100%' width='100%' src='${data.photos[1].getUrl()}' alt='Something'></div>
// </div>
// <div class="carousel-item">
// <div><img height='100%' width='100%' src='${data.photos[3].getUrl()}' alt='Something'></div>
// </div>
// <div class="carousel-item">
// <div><img height='100%' width='100%' src='${data.photos[4].getUrl()}' alt='Something'></div>
// </div>
// <div class="carousel-item">
// <div><img height='100%' width='100%' src='${data.photos[5].getUrl()}' alt='Something'></div>
// </div>
// <div class="carousel-item">
// <div><img height='100%' width='100%' src='${data.photos[6].getUrl()}' alt='Something'></div>
// </div>
// <div class="carousel-item">
// <div><img height='100%' width='100%' src='${data.photos[7].getUrl()}' alt='Something'></div>
// </div>
// <div class="carousel-item">
// <div><img height='100%' width='100%' src='${data.photos[8].getUrl()}' alt='Something'></div>
// </div>
// <div class="carousel-item">
// <div><img height='100%' width='100%' src='${data.photos[9].getUrl()}' alt='Something'></div>
// </div>

// <div><img height='100%' width='100%' src='${data.photos[0].getUrl()}' alt='Something'></div>
