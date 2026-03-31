// <!-- ══════════ CAROUSEL SCRIPT ══════════ -->
document
  .querySelectorAll(".portfolio-carousels .carousel-wrapper")
  .forEach((wrapper) => {
    const track = wrapper.querySelector(".carousel-track");
    const prevBtn = wrapper.querySelector(".carousel-btn--prev");
    const nextBtn = wrapper.querySelector(".carousel-btn--next");
    let current = 0;

    function getItemWidth() {
      const item = track.querySelector(".carousel-item");
      const gap = 32; // matches 2rem gap
      return item.offsetWidth + gap;
    }

    function getVisible() {
      return Math.floor(
        wrapper.querySelector(".carousel-track-container").offsetWidth /
          getItemWidth(),
      );
    }

    function update() {
      track.style.transform = `translateX(-${current * getItemWidth()}px)`;
    }

    nextBtn.addEventListener("click", () => {
      const total = track.children.length;
      if (current < total - getVisible()) current++;
      update();
    });

    prevBtn.addEventListener("click", () => {
      if (current > 0) current--;
      update();
    });
  });

// ══════════ BOOK DATA ══════════
const books = {
  1: {
    cover: "assets/PORTFOLIO_CARDS/book1.png",
    alt: "Cover image, Sexy Centaur and Badass Birdman, written by Stewbert Filthwell",
    title: "SEXY CENTAUR AND BADASS BIRDMAN",
    author: "Stewbert Filthwell",
    meta: "April 2025 — Fantasy, Adventure, Humour",
    body: `<p>In a hidden valley where myth still breathes, a battle-hardened centaur and a sharp-eyed winged warrior stand at the edge of a decision that will shape two worlds. Long dismissed as a mere legend, these two ill fated rogues are dragged into the spotlight and forced into action when a growing human expansion threatens the fragile boundary between the seen and the unseen worlds. Their seemingly impossible partnership will drag you through a harrowing adventure full of sharp turns and unexpected kicks as they fight to protect the secrets of their world.</p>
    <p>Stewbert Fillthewell delivers a cinematic fantasy rooted in loyalty, pride, and uneasy alliance. Lush landscapes and character-driven tension anchor this sweeping tale of resistance, identity, and courage under pressure. And don't forget to laugh.</p>`,
    buy: "#",
  },
};

// ══════════ MODAL ══════════
const overlay = document.getElementById("modal-overlay");
const closeBtn = document.getElementById("modal-close");

document.querySelectorAll(".carousel-item[data-book]").forEach((item) => {
  item.style.cursor = "pointer";
  item.addEventListener("click", () => {
    const id = item.getAttribute("data-book");
    const book = books[id];
    if (!book) return;

    document.getElementById("modal-cover").src = book.cover;
    document.getElementById("modal-cover").alt = book.alt;
    document.getElementById("modal-title").textContent = book.title;
    document.getElementById("modal-author").textContent = book.author;
    document.getElementById("modal-meta").textContent = book.meta;
    document.getElementById("modal-body").innerHTML = book.body;
    document.getElementById("modal-buy").href = book.buy;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});
