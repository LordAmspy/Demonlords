// Get the modal
var modal = document.getElementById("myModal");

var modalImg = document.getElementById("modal-img");

function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};