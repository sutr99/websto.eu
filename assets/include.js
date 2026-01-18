function loadPartial(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => {
      console.error("Failed to load partial:", url, err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("site-header", "/partials/header.html");
  loadPartial("site-footer", "/partials/footer.html");
});
