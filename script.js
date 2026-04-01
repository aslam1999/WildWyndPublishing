// ══════════ ACTIVE NAV LINK (FINAL FIXED) ══════════

// Get current page name
let currentPage = window.location.pathname.split("/").pop();

// Handle homepage case (e.g., "/" → index.html)
if (currentPage === "") {
  currentPage = "index.html";
}

// Loop through all nav links
document.querySelectorAll(".nav-link-wrap a").forEach((link) => {
  // Get only the file name from href (removes ./ or /)
  let linkPage = link.getAttribute("href").split("/").pop();

  // Compare and add active class
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

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
    alt: "Cover image, Sexy Centaur and Badass Birdman",
    title: "SEXY CENTAUR AND BADASS BIRDMAN",
    author: "Stewbert Filthwell",
    meta: "April 2025 — Fantasy, Adventure, Humour",
    body: `<p>In a hidden valley where myth still breathes, a battle-hardened centaur and a sharp-eyed winged warrior stand at the edge of a decision that will shape two worlds. Long dismissed as a mere legend, these two ill fated rogues are dragged into the spotlight and forced into action when a growing human expansion threatens the fragile boundary between the seen and the unseen worlds. Their seemingly impossible partnership will drag you through a harrowing adventure full of sharp turns and unexpected kicks as they fight to protect the secrets of their world.</p>
    <p>Stewbert Fillthewell delivers a cinematic fantasy rooted in loyalty, pride, and uneasy alliance. Lush landscapes and character-driven tension anchor this sweeping tale of resistance, identity, and courage under pressure. And don't forget to laugh.</p>`,
    buy: "#",
  },
  2: {
    cover: "assets/PORTFOLIO_CARDS/book2.png",
    alt: "Cover image, Salt In Her Eye",
    title: "SALT IN HER EYE",
    author: "Faye Krill",
    meta: "November 2025 — Poetry, Inspirational",
    body: `<p>In a sparse but deeply resonate voice, Faye Krill examines grief, memory, longing, and endurance. Inspired by pivotal moments in her own life, each poem captures intimate snapshots of private reckoning and quiet strength. Their words draw readers deep into landscapes shaped by the forces of fear, the pain of absence, and the power of resilience.</p>
    <p>Salt In Her Eye is more than just a random assembly of poems. It is a reflective collection of deep insights and a chronicle of personal growth. Her writing is presented as an act of self development that balances vulnerability with clarity, and offers a perspective uniquely devoid of any analysis or sentimentality.</p>`,
    buy: "#",
  },
  3: {
    cover: "assets/PORTFOLIO_CARDS/book3.png",
    alt: "Cover image, Fast Eddie",
    title: "FAST EDDIE",
    author: "Liza RD",
    meta: "May 2025 — Action Thriller, Urban, Humour",
    body: `<p>Eddie survives only by charm, speed, and animal instinct. In a city where reputation travels faster than traffic, he navigates the blurred line between legitimate business, and shady underground deals. But his reputation is starting to catch up with his tail pipes. Now a badly miscalculated deal has forced him into a tightening net of rivals who operate without rules, and seem to be all over town. Will Eddie be quick enough with his tongue and his tires to get out of this one?</p>
    <p>As usual, Liza RD delivers her story at a mind blurring pace, driven by passionate personalities, and relentless momentum. Fast Eddie combines street-level realism with edge of your seat suspense, and sharp witty dialogue that will keep you flipping pages until three in the morning.</p>`,
    buy: "#",
  },
  4: {
    cover: "assets/PORTFOLIO_CARDS/book4.png",
    alt: "Cover image, Pahtchya Batur",
    title: "PAHTCHYA BATUR",
    author: "Blayz Goldthorn",
    meta: "August 2024 — Epic Fantasy, Dark Urban, Horror, Supernatural, Allegory",
    body: `<p>Pahtchya Batur has never been one to roll over, and accept his fate. Born in the oppressive shadow of Couvai City, this Pit Bull Shepherd cross grew up in a world full of violence, hatred, and supernatural dangers. Like most other weredogs around him, he was nearly consumed by the struggle to survive. But unlike the others, Pahtchya dared to dream of a better future.</p>
    <p>Part fictional biography and part urban drama, the Dog Clans of Couvai series make you a witness to a fractured city divided by loyalty, bloodline and political privilege. Blayz Goldthorn explores the tension between instinct and conscience through the lives of characters living in a society shaped by hierarchy, discrimination, and the fight for survival.</p>`,
    buy: "https://www.amazon.com/Pahtchya-Batur-Clans-Couvai-book-ebook/dp/B0DDPH3P94",
  },
  5: {
    cover: "assets/PORTFOLIO_CARDS/book5.png",
    alt: "Cover image, Adventures of the Scholarly Owls",
    title: "ADVENTURES OF THE SCHOLARLY OWLS",
    author: "Swivel Head",
    meta: "September 2025 — Children's Fantasy, Educational",
    body: `<p>In a forest academy where learning once thrived, a sudden reliance on artificial intelligence threatens the owls' ability to think for themselves. Led by Professor Big Eyes, a small group of students rediscovers the value of reading deeply into the world, writing things from the heart, and figuring stuff out by using your own swivelling head!</p>
    <p>Written for children by an anonymous English teacher in Victoria BC, this richly illustrated story blends humour and simple wisdom. It encourages young readers to put down their phones and develop their own thinking skills in a world filled with the temptations of instant answers.</p>`,
    buy: "#",
  },
  6: {
    cover: "assets/PORTFOLIO_CARDS/book6.png",
    alt: "Cover image, Excursions Into Another Dimension",
    title: "EXCURSIONS INTO ANOTHER DIMENSION",
    author: "Margaret Kealy",
    meta: "February 2025 — Science Fiction, Action Thriller, Paranormal",
    body: `<p>When experimental research uncovers an inter-dimensional fracture beneath the ocean floor, physicist Dr. Mara Ionescu volunteers for a mission no one fully understands, least of all herself. What begins as scientific curiosity turns into a confrontation with alternate realities shaped by memory, time, and human fear. Now Mara is locked in a battle to escape from herself, and her colleagues are fighting to keep falling into the same trap.</p>
    <p>Margaret Kealy blends scientific plausibility with psychological depth in this fast paced science fiction thriller. Excursions Into Another Dimension explores the depths of human consciousness, and examines what can happen when the pace of discovery moves faster than reasoning.</p>`,
    buy: "#",
  },
  7: {
    cover: "assets/PORTFOLIO_CARDS/book7.png",
    alt: "Cover image, Vancouver Island's Dopest Hiking Trails",
    title: "VANCOUVER ISLAND'S DOPEST HIKING TRAILS",
    author: "Boots McToots",
    meta: "January 2025 — Outdoor Guide, Biography, Humour",
    body: `<p>Part trail guide and part humorous account, this updated 2025 guide features trail recommendations and access information not covered by previous editions. It highlights route difficulty, seasonal access, and scenic highlights from the lesser known northern end of the island. From coastal bluffs to alpine ridges, Dopest Hiking Trails provides practical guidance for both experienced hikers and newcomers.</p>
    <p>Clear maps, photography, and field-tested notes make this a reliable companion for exploring the island's most rewarding trails. Combined with Boots McToot's enthusiastic tone and hilariously exaggerated personal accounts, this book will boot your butt outside!</p>`,
    buy: "#",
  },
  8: {
    cover: "assets/PORTFOLIO_CARDS/book8.png",
    alt: "Cover image, Maaji's Kitchen",
    title: "MAAJI'S KITCHEN",
    author: "Asha Mehta",
    meta: "November 2025 — Ayurvedic Recipes, Cultural Heritage",
    body: `<p>Asha Mehta invites readers into the warmth of her childhood kitchen, where every dish prepared carried lessons with it about balance, health, and heritage. Rooted in Ayurvedic principles, these recipes are paired with personal reflections and cultural insights, drawn from her family's collective memory.</p>
    <p>Blending good food and great storytelling, Asha Mehta offers practical guidance alongside cultural context, celebrating nourishment as both medicine and tradition. Her relaxing motherly tone and gently paced narrative draws you deeply into contemplating and appreciating the simple things in life.</p>`,
    buy: "#",
  },
  9: {
    cover: "assets/PORTFOLIO_CARDS/book9.png",
    alt: "Cover image, Chi Coast",
    title: "CHI COAST",
    author: "Jun Li",
    meta: "October 2024 — Medicine, Cultural Heritage, Health Studies",
    body: `<p>Jun Li explores how traditional Chinese medicine adapted and evolved within Canada's coastal communities. Through historical accounts, practitioner interviews, and cultural analysis, this book traces the transmission of healing knowledge across a vast span of generations and geographies.</p>
    <p>Jun Li offers a thoughtful examination of cultural integration, community health, and the preservation of medical tradition. Combined with thorough research and detailed accounts, Chi Coast will leave you with a much broader and deeper view of not only Chinese Medicine, but of tradition and community in general.</p>`,
    buy: "#",
  },
  10: {
    cover: "assets/PORTFOLIO_CARDS/book10.png",
    alt: "Cover image, From Guyana to Haida Gwai",
    title: "FROM GUYANA TO HAIDA GWAI",
    author: "Asida Okoye",
    meta: "July 2025 — Autobiography",
    body: `<p>In this ground breaking book, Asida Okoye recounts his journey from Guyana's savannah landscapes, to the rugged coastlines of Haida Gwai. His story is one of forced migration, unbelievable resilience, and a never ending search for a sense of belonging that spans two continents. Deeply personal and reflective, From Guyana to Haida Gwai documents the challenges and revelations that shaped a life that was built in the no-man's land that lies between cultures.</p>`,
    buy: "#",
  },
  11: {
    cover: "assets/PORTFOLIO_CARDS/book11.png",
    alt: "Cover image, Cold Water Travellers",
    title: "COLD WATER TRAVELLERS",
    author: "Pamela Molasses",
    meta: "March 2024 — Environmental Sciences",
    body: `<p>Marine biologist Pamela Molasses presents a detailed study of sea turtle migration along the Pacific Northwest coastline. Combining field research, satellite tracking data, and ecological analysis, the book traces how climate and coastal development influence their migration patterns. Written in language that is accessible to general readers and professional alike, this book highlights the delicate balance between marine life and environmental change.</p>`,
    buy: "#",
  },
  12: {
    cover: "assets/PORTFOLIO_CARDS/book12.png",
    alt: "Cover image, The Beaten Path",
    title: "THE BEATEN PATH",
    author: "Clare Eagledon",
    meta: "April 2025 — Cultural Heritage, Spirituality",
    body: `<p>Through interviews, archival research, and cultural consultation, Clare Eagleton documents the enduring drum traditions of the Tla-o-qui-aht people. The book examines rhythm as a form of ceremony, communication, and cultural continuity. Stepping beyond the boundaries of a dry historical analysis, The Beaten Path is both scholarly and accessible, inviting readers to glimpse a worldview that most people have long since forgotten.</p>`,
    buy: "#",
  },
};

// ══════════ MODAL ══════════
const overlay = document.getElementById("modal-overlay");
const closeBtn = document.getElementById("modal-close");

if (overlay && closeBtn) {
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
}

// ══════════ SERVICE DATA ══════════
const services = {
  editing: {
    icon: "assets/SERVICES_CARDS/edit_icon_large.png",
    alt: "Editing icon",
    title: "PHASE 1: EDITING",
    body: `
      <p>Editing is the first step towards a polished masterpiece. The focus of this phase is to strengthen an author's ideas, and to refine the way they are expressed. This process involves two different kinds of editing work:</p>
      <ul>
        <li>Copy editing, where the characters, setting and overall storyline are improved</li>
        <li>Structural editing, where the sentence structure, spelling and grammar are improved</li>
      </ul>
      <p>Copy editing is performed on a manuscript with direct input from authors, through a process of repeated iterations. Our changes are presented as suggestions, and wherever possible, we offer multiple possibilities. Informed by scheduled feedback sessions with the author, these iterations are refined until everyone is satisfied that the writing is achieving its purpose. Drafts and revisions are never discarded, and authors always have the final say regarding changes made to story elements.</p>
      <p>Structural editing typically follows copy editing, because grammar usage and sentence structure must be determined by the content itself. The focus of structural editing shifts away from the author's perspective, and begins to consider how the writing will be received by an audience. Unnecessary words are dropped, awkward phrases are refined, and the overall structure is optimized for easier reading.</p>
      <p>For non-fiction work, there are sometimes additional editing considerations. This may include proper formatting to comply with requirements for scientific papers and journals, educational institutions, governments, and other professional entities. Proper citation styles and references are also a common part of the editing process for non-fiction work.</p>
      <p>If you have a manuscript which may benefit from our editing services, please fill out the service inquiry form linked below, and be sure to attach a copy of your work as a .docX file. Wildwynd Publishing evaluates all submissions very carefully, and reserves the right to accept or decline them at our sole discretion.</p>
      <p>Upon receiving your submission, Wildwynd Publishing will evaluate it, and respond via email within 5 business days. If rejected you will be given an explanation, and may also be given instructions for improvement and re-submission. If accepted you will be provided with further details and instructions, including a preliminary project brief, and an estimated budget.</p>
    `,
    next: "#design",
  },
  design: {
    icon: "assets/SERVICES_CARDS/design_icon_large.png",
    alt: "Design icon",
    title: "PHASE 2: DESIGN",
    body: `
      <p>Design is the second step towards a professional publication, and it involves far more than making a nice cover. The focus of this phase is to make sure the content is presented in the best way possible, inside and out. This process involves two different kinds of design work:</p>
      <ul>
        <li>Exterior design, which includes both covers, the spine, dimensions, and materials</li>
        <li>Interior design, which includes typography, image optimization and page layout</li>
      </ul>
      <p>Interior and exterior design processes depend a lot on the nature of the content, and the kind of book being published. Ebook covers and content must comply with the hosting platform requirements for dimensions, colors, accessibility and file types. Print books must consider the type of material being printed on, and the type of printing process being used.</p>
      <p>In either case, our design services follow the same iterative process of feedback sessions with authors that is used during the editing phase. Guided by the content and by the expectations of the author's audience, draft revisions are evaluated and refined through scheduled sessions until everyone is satisfied with the book's presentation.</p>
      <p>As with the editing phase, there are sometimes additional design considerations for non-fiction work. Formatting and cover specifications for academic writing can be very strict, and largely dependent on the author's chosen route of publication and distribution.</p>
      <p>If you have a manuscript which may benefit from our design services, please fill out the service inquiry form linked below, and be sure to attach a copy of your work as a .docX file. Wildwynd Publishing evaluates all submissions very carefully, and reserves the right to accept or decline them at our sole discretion.</p>
      <p>Upon receiving your submission, Wildwynd Publishing will evaluate it, and respond via email within 5 business days. If rejected you will be given an explanation, and may also be given instructions for improvement and re-submission. If accepted you will be provided with further details and instructions, including a preliminary project brief, and an estimated budget.</p>
    `,
    next: "#distribution",
  },
  distribution: {
    icon: "assets/SERVICES_CARDS/distribution_icon_large.png",
    alt: "Distribution icon",
    title: "PHASE 3: DISTRIBUTION",
    body: `
      <p>The distribution phase includes everything involved in making a book available to readers. In addition to our in-house ebook and print distribution services, Wildwynd Publishing also has a growing network of agreements with third party distributors, both locally and internationally. If you have published a book with us, you're automatically eligible for access to our distribution services, which may include:</p>
      <ul>
        <li>In-house distribution for ebooks and print</li>
        <li>Third party distribution via bookstores, libraries, schools and online platforms</li>
        <li>Direct to customer e-commerce</li>
      </ul>
      <p>As with everything else in the publication process, methods of distribution depend on the content, and the author's intentions. Fiction writers tend to benefit most from direct to customer sales online, while professional writers of non-fiction are more likely to need mass distribution of printed materials.</p>
      <p>It is during the distribution phase that important legal and monetary considerations first arise for authors. This may include copyright considerations, printing or hosting expenses, royalties, and shipping costs. With two decades of experience in both print and digital distribution, our knowledgeable staff is well prepared to support authors.</p>
      <p>If you already have a book published elsewhere that might be eligible for our distribution services, please fill out the service inquiry form linked below. Be sure to include a title, publisher, ISBN#, and a link to your work if the content is digital.</p>
      <p>Upon receiving your request, Wildwynd Publishing will evaluate it, and respond via email within 5 business days. If rejected you will be given an explanation, and may also be given instructions for improvement and re-submission. If accepted you will be provided with further details and instructions, and an estimated budget.</p>
    `,
    next: "#marketing",
  },
  marketing: {
    icon: "assets/SERVICES_CARDS/marketing_icon_large.png",
    alt: "Marketing icon",
    title: "PHASE 4: MARKETING",
    body: `
      <p>The fourth and perhaps most widely dreaded phase of the publishing process is marketing. A great book will only get into the hands of readers if made visible in the right place and time, and presented in the right way. At Wildwynd Publishing, we view marketing as something that is exactly half art, and half science. The art of marketing includes:</p>
      <ul>
        <li>Understanding the goals and needs of authors</li>
        <li>Understanding the desires, needs and behaviours of readers</li>
        <li>Finding a rhetorical strategy that will connect these things</li>
      </ul>
      <p>The science of marketing includes:</p>
      <ul>
        <li>User data analysis</li>
        <li>Performance metrics</li>
        <li>Calculation of costs and return on investment</li>
      </ul>
      <p>If you have published a book with us, you're automatically eligible for access to our marketing services. Our process begins with identifying an author's most promising target audience(s), and researching their behaviours and needs. Next we look at an author's competitors to better understand the marketplace, and identify strategies that have been working for similar publications.</p>
      <p>Once that is done, we begin to build a complete marketing plan, then develop any additional assets that may be needed. We work directly with authors throughout this process, and we teach them about best practices to follow while implementing their plans.</p>
      <p>It is important to note that Wildwynd Publishing will not be held solely responsible for executing and monitoring the marketing campaigns of authors. It is the author's responsibility to adhere to our recommendations, implement the strategies we create, and monitor their success.</p>
      <p>If you have a published book that may be eligible for access to our marketing services, please fill out the service inquiry form linked below.</p>
      <p>Upon receiving your request, Wildwynd Publishing will evaluate it, and respond via email within 5 business days. If rejected you will be given an explanation, and may also be given instructions for improvement and re-submission. If accepted you will be provided with further details and instructions, and an estimated budget.</p>
    `,
    next: "#",
  },
};

// ══════════ SERVICE MODAL ══════════

let currentService = "";
const serviceOrder = ["editing", "design", "distribution", "marketing"];
const serviceOverlay = document.getElementById("service-modal-overlay");
const serviceCloseBtn = document.getElementById("service-modal-close");

if (serviceOverlay && serviceCloseBtn) {
  document.querySelectorAll(".service-block[data-service]").forEach((block) => {
    block.style.cursor = "pointer";
    block.addEventListener("click", (e) => {
      e.preventDefault();
      const id = block.getAttribute("data-service");
      currentService = id;
      const service = services[id];
      if (!service) return;
      document.getElementById("service-modal-icon").src = service.icon;
      document.getElementById("service-modal-icon").alt = service.alt;
      document.getElementById("service-modal-title").textContent =
        service.title;
      document.getElementById("service-modal-body").innerHTML = service.body;
      document.getElementById("service-modal-next").href = service.next;
      serviceOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  serviceCloseBtn.addEventListener("click", () => {
    serviceOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  const serviceModalSubmit = document.getElementById("service-modal-submit");
  if (serviceModalSubmit) {
    serviceModalSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      serviceOverlay.classList.remove("active");
      document.body.style.overflow = "";
      const serviceFormOverlay = document.getElementById(
        "service-form-overlay",
      );
      if (serviceFormOverlay) {
        serviceFormOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      } else {
        window.location.href = "contact.html";
      }
    });
  }
}

const nextBtn = document.getElementById("service-modal-next");

if (nextBtn) {
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const currentIndex = serviceOrder.indexOf(currentService);
    const nextService = serviceOrder[currentIndex + 1];

    if (nextService) {
      const service = services[nextService];

      // update modal manually (same as your existing code)
      document.getElementById("service-modal-icon").src = service.icon;
      document.getElementById("service-modal-icon").alt = service.alt;
      document.getElementById("service-modal-title").textContent =
        service.title;
      document.getElementById("service-modal-body").innerHTML = service.body;

      currentService = nextService;
    }
  });
}

if (!nextService) {
  nextBtn.style.opacity = "0.5";
  nextBtn.style.pointerEvents = "none";
}

// ══════════ FORMS ══════════
const generalFormOverlay = document.getElementById("general-form-overlay");
const serviceFormOverlay = document.getElementById("service-form-overlay");
const generalFormClose = document.getElementById("general-form-close");
const serviceFormClose = document.getElementById("service-form-close");
const generalFormCancel = document.getElementById("general-form-cancel");
const serviceFormCancel = document.getElementById("service-form-cancel");
const openGeneralForm = document.getElementById("open-general-form");
const openServiceForm = document.getElementById("open-service-form");

if (generalFormOverlay) {
  if (openServiceForm && serviceFormOverlay) {
    openServiceForm.addEventListener("click", (e) => {
      e.preventDefault();
      serviceFormOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  // close general form
  generalFormClose.addEventListener("click", () => {
    generalFormOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  // close service form
  serviceFormClose.addEventListener("click", () => {
    serviceFormOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  // cancel buttons
  if (generalFormCancel) {
    generalFormCancel.addEventListener("click", (e) => {
      e.preventDefault();
      generalFormOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (serviceFormCancel) {
    serviceFormCancel.addEventListener("click", (e) => {
      e.preventDefault();
      serviceFormOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // submit handlers
  document
    .getElementById("general-inquiry-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Thank you! Your inquiry has been submitted. We will respond within 5 business days.",
      );
      generalFormOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });

  document
    .getElementById("service-request-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Thank you! Your service request has been submitted. We will respond within 5 business days.",
      );
      serviceFormOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
}
