/*
========================================
PORTAL KELAS C
Vanilla JavaScript
========================================
*/

document.addEventListener("DOMContentLoaded", () => {

  /*
  ========================================
  DARK MODE
  ========================================
  */

  const themeToggle = document.querySelector(".theme-toggle");

  const savedTheme =
    localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {

      const currentTheme =
        document.documentElement.getAttribute(
          "data-theme"
        );

      const nextTheme =
        currentTheme === "dark"
          ? "light"
          : "dark";

      document.documentElement.setAttribute(
        "data-theme",
        nextTheme
      );

      localStorage.setItem(
        "theme",
        nextTheme
      );

      showToast(
        `Mode ${nextTheme} aktif`
      );
    });
  }

  /*
  ========================================
  MOBILE MENU
  ========================================
  */

  const menuToggle =
    document.querySelector(".menu-toggle");

  const mobileMenu =
    document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      mobileMenu.classList.toggle(
        "active"
      );

    });

  }

  /*
  ========================================
  SMOOTH SCROLL
  ========================================
  */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener("click", e => {

        e.preventDefault();

        const target =
          document.querySelector(
            link.getAttribute("href")
          );

        if (target) {

          target.scrollIntoView({
            behavior: "smooth"
          });

        }

      });

    });

  /*
  ========================================
  BACK TO TOP
  ========================================
  */

  const backToTop =
    document.querySelector(".back-to-top");

  if (backToTop) {

    window.addEventListener(
      "scroll",
      () => {

        if (window.scrollY > 400) {

          backToTop.classList.add("show");

        } else {

          backToTop.classList.remove(
            "show"
          );

        }

      }
    );

    backToTop.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }

  /*
  ========================================
  SCROLL REVEAL
  ========================================
  */

  const reveals =
    document.querySelectorAll(".reveal");

  if (reveals.length > 0) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "revealed"
              );

            }

          });

        },
        {
          threshold: 0.2
        }
      );

    reveals.forEach(item =>
      observer.observe(item)
    );

  }

  /*
  ========================================
  ANIMATED COUNTER
  ========================================
  */

  const counters =
    document.querySelectorAll(
      "[data-counter]"
    );

  counters.forEach(counter => {

    const target =
      Number(
        counter.dataset.counter
      );

    let current = 0;

    const updateCounter = () => {

      const increment =
        target / 100;

      current += increment;

      if (current < target) {

        counter.textContent =
          Math.floor(current);

        requestAnimationFrame(
          updateCounter
        );

      } else {

        counter.textContent =
          target;

      }

    };

    updateCounter();

  });

  /*
  ========================================
  SEARCH MAHASISWA
  ========================================
  */

  const mahasiswaSearch =
    document.querySelector(
      "#search-mahasiswa"
    );

  if (mahasiswaSearch) {

    mahasiswaSearch.addEventListener(
      "keyup",
      () => {

        const keyword =
          mahasiswaSearch.value.toLowerCase();

        const rows =
          document.querySelectorAll(
            ".student-row"
          );

        rows.forEach(row => {

          row.style.display =
            row.textContent
              .toLowerCase()
              .includes(keyword)
              ? ""
              : "none";

        });

      }
    );

  }

  /*
  ========================================
  SEARCH DOKUMEN
  ========================================
  */

  const dokumenSearch =
    document.querySelector(
      "#search-dokumen"
    );

  if (dokumenSearch) {

    dokumenSearch.addEventListener(
      "keyup",
      () => {

        const keyword =
          dokumenSearch.value.toLowerCase();

        const docs =
          document.querySelectorAll(
            ".document-item"
          );

        docs.forEach(doc => {

          doc.style.display =
            doc.textContent
              .toLowerCase()
              .includes(keyword)
              ? ""
              : "none";

        });

      }
    );

  }

  /*
  ========================================
  LIGHTBOX GALERI
  ========================================
  */

  const images =
    document.querySelectorAll(
      ".gallery-grid img"
    );

  if (images.length > 0) {

    const lightbox =
      document.createElement("div");

    lightbox.className =
      "lightbox";

    lightbox.innerHTML =
      '<img class="lightbox-image">';

    document.body.appendChild(
      lightbox
    );

    const lightboxImage =
      lightbox.querySelector(
        ".lightbox-image"
      );

    images.forEach(img => {

      img.addEventListener(
        "click",
        () => {

          lightbox.classList.add(
            "active"
          );

          lightboxImage.src =
            img.src;

        }
      );

    });

    lightbox.addEventListener(
      "click",
      () => {

        lightbox.classList.remove(
          "active"
        );

      }
    );

  }

});

/*
========================================
TOAST
========================================
*/

function showToast(message) {

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.textContent = message;

  document.body.appendChild(
    toast
  );

  setTimeout(() => {

    toast.classList.add("show");

  }, 100);

  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

    setTimeout(() => {

      toast.remove();

    }, 300);

  }, 3000);

}
