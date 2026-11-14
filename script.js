const photo = document.querySelector(".photo-main");

function reveal() {
  document.body.classList.add("is-ready");
}

if (photo.complete && photo.naturalWidth > 0) {
  reveal();
} else {
  photo.addEventListener("load", reveal, { once: true });
  photo.addEventListener("error", reveal, { once: true });
}
