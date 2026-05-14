const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    630: {
      slidesPerView: 2,
    },
    830: {
      slidesPerView: 3,
    }
  }
});


const items = document.querySelectorAll("details");

items.forEach((item) => {
  const summary = item.querySelector("summary");
  const trigger = summary.querySelector("span");
  const content = item.querySelector(".content");
  const icon = item.querySelector(".minus");

  summary.addEventListener("click", (e) => {
    e.preventDefault();
  });

  function toggle() {
    item.open = !item.open;

    if (item.open) {
      content.classList.add("open");
      icon.textContent = "−";
    } else {
      content.classList.remove("open");
      icon.textContent = "+";
    }
  }

  trigger.addEventListener("click", toggle);

  summary.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form_form");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("closeModal");

    modal.style.display = "none";

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
});