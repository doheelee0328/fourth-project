const openBtn = document.getElementById("open-btn");
const modal = document.getElementById("modal-container");
const closeBtn = document.getElementById("close-btn");

const closeModal = () => {
  modal.style.display = "none";
};

openBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

