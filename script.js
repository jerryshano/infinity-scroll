const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// unsplash api
const apiKey = "lwYuAgh7r50NTqGITjeLDiPd8cVxNte9_Wg0fjDhHkY";
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let photosArray = [];

const displayPhotos = () => {
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

//  get photos from unspalsh api
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    `you have this ${error}`;
  }
};
getPhotos();
