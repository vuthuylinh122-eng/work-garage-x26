
/* ========================================================
   VŨ THÙY LINH — MASTER SELECTED WORK
   6 academic group projects | PNG slide galleries
   Keep existing styles.css unchanged.
   To reorder cases: reorder the objects in PROJECTS.
======================================================== */

const PROJECTS = [
  {
    id: "comem",
    number: "01",
    title: "Cỏ Mềm HomeLab",
    type: "Marketing Strategy · IMC",
    description: "Exploring audience insight, positioning and multichannel strategy for a Vietnamese natural skincare brand.",
    role: "Project Lead",
    context: "Marketing Fundamentals · Academic group project",
    tags: ["Consumer Insight", "Positioning", "IMC", "Strategy"],
    accent: "#ff9dcd",
    accentSoft: "rgba(255,157,205,.20)",
    cover: "assets/comem/1.png",
    slides: [
      { src: "assets/comem/16.png", caption: "Target audience · Truth, Tension, Motivation & Insight" },
      { src: "assets/comem/17.png", caption: "Positioning map & brand direction" },
      { src: "assets/comem/25.png", caption: "Multichannel communication & storytelling" },
      { src: "assets/comem/26.png", caption: "KOL & influencer communication" },
      { src: "assets/comem/35.png", caption: "TOWS & strategic recommendations" }
    ]
  },

  {
    id: "quant",
    number: "02",
    title: "Gen Z Concert · Quantitative Research",
    type: "Market Research · Data Analysis",
    description: "A 398-response survey exploring the drivers of concert-ticket purchase intention through quantitative research and statistical testing.",
    role: "Research & One-way ANOVA Analysis",
    context: "Marketing Research · Academic group project",
    tags: ["398 Responses", "SPSS", "ANOVA", "Insights"],
    accent: "#db9bff",
    accentSoft: "rgba(219,155,255,.20)",
    cover: "assets/quant/07.png",
    slides: [
      { src: "assets/quant/08.png", caption: "Research methodology · Sampling & data processing" },
      { src: "assets/quant/13.png", caption: "Survey findings · 398 respondents" },
      { src: "assets/quant/15.png", caption: "One-way ANOVA · Differences by occupation" },
      { src: "assets/quant/19.png", caption: "From findings to marketing implications" },
      { src: "assets/quant/21.png", caption: "Recommendations · e-WOM & social influence" }
    ]
  },

  {
    id: "social",
    number: "03",
    title: "Social Media Performance & Strategy",
    type: "Social Analytics · Strategy",
    description: "Facebook and Instagram performance analysis, paid-content evaluation and social listening translated into RACE recommendations.",
    role: "Social Media Analytics & Strategy",
    context: "Web & Social Media Analysis · Academic group project",
    tags: ["Meta", "Brand24", "CTR", "RACE"],
    accent: "#d3b6ff",
    accentSoft: "rgba(211,182,255,.20)",
    cover: "assets/social/7.png",
    slides: [
      { src: "assets/social/8 (1).png", caption: "Engagement & content performance" },
      { src: "assets/social/19.png", caption: "Paid content & CTR analysis" },
      { src: "assets/social/23.png", caption: "Brand24 · Social listening snapshot" },
      { src: "assets/social/27.png", caption: "RACE strategic recommendations" }
    ]
  },

  {
    id: "consumer",
    number: "04",
    title: "Gen Z × Concert",
    type: "Consumer Behavior · Qualitative Research",
    description: "A qualitative exploration of social influence, e-WOM, motivation and experience in Gen Z's concert-ticket choices.",
    role: "Consumer Behavior & Insight Analysis",
    context: "Consumer Behavior · Academic group project",
    tags: ["Interviews", "e-WOM", "Motivation", "Insight"],
    accent: "#a9f0d3",
    accentSoft: "rgba(169,240,211,.18)",
    cover: "assets/consumer/1 (1).png",
    slides: [
      { src: "assets/consumer/3.png", caption: "Qualitative research · 5 Gen Z respondents" },
      { src: "assets/consumer/8.png", caption: "Reference groups & e-WOM" },
      { src: "assets/consumer/21.png", caption: "Consumer needs & motivation" },
      { src: "assets/consumer/43.png", caption: "Concert positioning recommendation" },
      { src: "assets/consumer/44.png", caption: "Communication & experience recommendations" }
    ]
  },

  {
    id: "vinamilk",
    number: "05",
    title: "For A Healthier Tomorrow",
    type: "Campaign Planning",
    description: "A six-month Vinamilk campaign proposal, from audience and objectives to creative direction and channel planning.",
    role: "Campaign Planning & Audience Analysis",
    context: "Business Management · Academic group project",
    tags: ["Audience", "Message", "Creative", "Media Plan"],
    accent: "#b8c6ff",
    accentSoft: "rgba(184,198,255,.18)",
    cover: "assets/vinamilk/16 (1).png",
    slides: [
      { src: "assets/vinamilk/15.png", caption: "SWOT analysis & brand context" },
      { src: "assets/vinamilk/21 (1).png", caption: "Campaign objectives" },
      { src: "assets/vinamilk/22.png", caption: "Target audience analysis" },
      { src: "assets/vinamilk/23 (1).png", caption: "Key message & creative strategy" },
      { src: "assets/vinamilk/24.png", caption: "Media channels, budget & timeline" }
    ]
  },

  {
    id: "cerave",
    number: "06",
    title: "CeraVe · Market & PR Review",
    type: "Industry Research · Public Relations",
    description: "A group review of dermocosmetics market trends, competitor positioning, priority publics and PR improvement opportunities.",
    role: "Market & PR Analysis · Group Work",
    context: "Principles of Public Relations · Academic group project",
    tags: ["Market Trends", "Competitors", "Audiences", "PR"],
    accent: "#9bcfff",
    accentSoft: "rgba(155,207,255,.18)",
    cover: "assets/cerave/01.png",
    slides: [
      { src: "assets/cerave/04.png", caption: "Dermocosmetics market & category trends" },
      { src: "assets/cerave/05.png", caption: "Competitor positioning · CeraVe & alternatives" },
      { src: "assets/cerave/07 (1).png", caption: "Audience analysis · Consumers & dermatologists" },
      { src: "assets/cerave/25.png", caption: "PR recommendations · Community engagement" }
    ]
  }
];


/* ========================================================
   DOM ELEMENTS
======================================================== */

const $ = id => document.getElementById(id);

const projectGrid = $("projectGrid");
const viewer = $("viewer");
const viewerClose = $("viewerClose");
const viewerTitle = $("viewerTitle");
const viewerType = $("viewerType");
const viewerDescription = $("viewerDescription");
const viewerRole = $("viewerRole");
const viewerContext = $("viewerContext");
const mainSlide = $("mainSlide");
const slideError = $("slideError");
const slideCaption = $("slideCaption");
const slideCounter = $("slideCounter");
const thumbnailStrip = $("thumbnailStrip");
const previousButton = $("prevSlide");
const nextButton = $("nextSlide");

let activeProject = null;
let activeSlide = 0;
let lastCard = null;


/* ========================================================
   RENDER PROJECT CARDS
======================================================== */

function renderProjects() {
  projectGrid.replaceChildren();

  PROJECTS.forEach(project => {
    const card = document.createElement("article");

    card.className = "project-card";
    card.tabIndex = 0;

    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      `Open ${project.title} gallery`
    );

    card.style.setProperty("--accent", project.accent);
    card.style.setProperty("--accent-soft", project.accentSoft);

    card.innerHTML = `
      <div class="card-cover">
        <div class="cover-placeholder">
          <span class="cover-number">${project.number}</span>
          <strong>${project.title}</strong>
        </div>
        <img
          src="${project.cover}"
          alt="${project.title} project cover"
          loading="lazy"
        >
      </div>

      <div class="project-info">
        <span class="project-kicker">${project.type}</span>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="card-bottom">
          <div class="card-tags">
            ${project.tags
              .map(tag => `<span>${tag}</span>`)
              .join("")}
          </div>

          <span
            class="open-symbol"
            aria-hidden="true"
          >↗</span>
        </div>
      </div>
    `;

    const coverImage = card.querySelector(
      ".card-cover img"
    );

    coverImage.addEventListener("error", () => {
      coverImage.hidden = true;
    });

    card.addEventListener("click", () => {
      openProject(project, card);
    });

    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProject(project, card);
      }
    });

    addTiltEffect(card);

    projectGrid.append(card);
  });

  const count = $("projectCount");

  if (count) {
    count.textContent = String(PROJECTS.length).padStart(2, "0");
  }
}


/* ========================================================
   SUBTLE CARD TILT
======================================================== */

function addTiltEffect(card) {
  if (
    !matchMedia("(hover: hover) and (pointer: fine)").matches ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();

    const rotateY =
      ((e.clientX - rect.left) / rect.width - 0.5) * 4.4;

    const rotateX =
      (0.5 - (e.clientY - rect.top) / rect.height) * 4.4;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });
}


/* ========================================================
   OPEN PROJECT GALLERY
======================================================== */

function openProject(project, sourceCard) {
  activeProject = project;
  activeSlide = 0;
  lastCard = sourceCard;

  viewer.style.setProperty(
    "--viewer-accent",
    project.accent
  );

  viewerTitle.textContent = project.title;
  viewerType.textContent = project.type;
  viewerDescription.textContent = project.description;
  viewerRole.textContent = project.role;
  viewerContext.textContent = project.context;

  renderThumbnails();

  viewer.showModal();

  document.body.classList.add("dialog-open");

  showSlide(0);

  viewerClose.focus();
}


/* ========================================================
   DISPLAY CURRENT SLIDE
======================================================== */

function showSlide(index) {
  if (
    !activeProject ||
    !activeProject.slides.length
  ) {
    return;
  }

  const total = activeProject.slides.length;

  activeSlide = (index + total) % total;

  const slide = activeProject.slides[activeSlide];

  slideError.style.display = "none";
  mainSlide.style.display = "block";

  mainSlide.alt =
    `${activeProject.title}: ${slide.caption}`;

  mainSlide.src = slide.src;

  slideCaption.textContent = slide.caption;

  slideCounter.textContent =
    `${String(activeSlide + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  updateThumbnailState();
}


/* ========================================================
   MAIN IMAGE ERROR
======================================================== */

mainSlide.addEventListener("error", () => {
  mainSlide.style.display = "none";
  slideError.style.display = "grid";
});


/* ========================================================
   RENDER SLIDE THUMBNAILS
======================================================== */

function renderThumbnails() {
  thumbnailStrip.replaceChildren();

  activeProject.slides.forEach((slide, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "thumbnail";

    button.setAttribute(
      "aria-label",
      `Open slide ${index + 1}: ${slide.caption}`
    );

    const image = document.createElement("img");

    image.src = slide.src;
    image.alt = slide.caption;
    image.loading = "lazy";

    image.addEventListener("error", () => {
      button.hidden = true;
    });

    button.append(image);

    button.addEventListener("click", () => {
      showSlide(index);
    });

    thumbnailStrip.append(button);
  });
}


/* ========================================================
   UPDATE ACTIVE THUMBNAIL
======================================================== */

function updateThumbnailState() {
  const thumbnails = thumbnailStrip.querySelectorAll(
    ".thumbnail"
  );

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.classList.toggle(
      "active",
      index === activeSlide
    );

    thumbnail.setAttribute(
      "aria-pressed",
      String(index === activeSlide)
    );
  });

  thumbnails[activeSlide]?.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });
}


/* ========================================================
   GALLERY NAVIGATION
======================================================== */

previousButton.addEventListener("click", () => {
  showSlide(activeSlide - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(activeSlide + 1);
});

viewerClose.addEventListener("click", () => {
  viewer.close();
});

viewer.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");

  lastCard?.focus();
});

document.addEventListener("keydown", e => {
  if (!viewer.open) return;

  if (e.key === "ArrowLeft") {
    e.preventDefault();
    showSlide(activeSlide - 1);
  }

  if (e.key === "ArrowRight") {
    e.preventDefault();
    showSlide(activeSlide + 1);
  }
});

viewer.addEventListener("click", e => {
  if (e.target === viewer) {
    viewer.close();
  }
});


/* ========================================================
   INITIALIZE MASTER PORTFOLIO
======================================================== */

renderProjects();
