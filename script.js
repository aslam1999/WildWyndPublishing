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
