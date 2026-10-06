/* =========================================================
   VŨ THÙY LINH — SELECTED WORK
   FINAL PROJECT CONFIGURATION
========================================================= */


/* =========================================================
   PROJECT DATA
========================================================= */

const PROJECTS = [

  /* =======================================================
     01 — CỎ MỀM HOMELAB
  ======================================================= */

  {
    id: "comem",

    number: "01",

    title: "Cỏ Mềm HomeLab",

    type: "Marketing Strategy · IMC",

    description:
      "From target audience and consumer insight to brand positioning, communication direction and strategic recommendations.",

    role: "Project Lead",

    context:
      "Marketing Fundamentals · Academic group project",

    tags: [
      "Consumer Insight",
      "STP",
      "Positioning",
      "IMC"
    ],

    accent: "#ff9dcd",

    accentSoft:
      "rgba(255,157,205,.20)",


    /* Homepage cover */

    cover:
      "assets/comem/1.png",


    /* Selected proof slides */

    slides: [

      {
        src:
          "assets/comem/16.png",

        caption:
          "Target audience · Truth, Tension, Motivation & Insight"
      },

      {
        src:
          "assets/comem/17.png",

        caption:
          "Positioning map & brand direction"
      },

      {
        src:
          "assets/comem/25.png",

        caption:
          "Multichannel communication & storytelling"
      },

      {
        src:
          "assets/comem/26.png",

        caption:
          "KOL & influencer communication"
      },

      {
        src:
          "assets/comem/35.png",

        caption:
          "TOWS & strategic recommendations"
      }

    ]

  },


  /* =======================================================
     02 — GEN Z × CONCERT
     CONSUMER BEHAVIOR
  ======================================================= */

  {
    id: "consumer",

    number: "02",

    title: "Gen Z × Concert",

    type:
      "Consumer Behavior · Insight",

    description:
      "Exploring how social influence, motivation, perception and attitude shape Gen Z's concert-ticket purchase behavior.",

    role:
      "Consumer Behavior & Insight Analysis",

    context:
      "Consumer Behavior · Academic group project",

    tags: [
      "Interview",
      "Consumer Insight",
      "Motivation",
      "e-WOM"
    ],

    accent:
      "#a9f0d3",

    accentSoft:
      "rgba(169,240,211,.18)",


    /* Homepage cover */

    cover:
      "assets/consumer/1 (1).png",


    /* Selected proof slides */

    slides: [

      {
        src:
          "assets/consumer/3.png",

        caption:
          "Qualitative research · 5 Gen Z respondents"
      },

      {
        src:
          "assets/consumer/8.png",

        caption:
          "Reference groups & e-WOM"
      },

      {
        src:
          "assets/consumer/21.png",

        caption:
          "Consumer needs & motivation"
      },

      {
        src:
          "assets/consumer/43.png",

        caption:
          "Concert positioning recommendation"
      },

      {
        src:
          "assets/consumer/44.png",

        caption:
          "Communication & experience recommendations"
      }

    ]

  },


  /* =======================================================
     03 — VINAMILK
     FOR A HEALTHIER TOMORROW
  ======================================================= */

  {
    id: "vinamilk",

    number: "03",

    title:
      "For A Healthier Tomorrow",

    type:
      "Campaign Planning",

    description:
      "A six-month Vinamilk campaign structured around audience, objectives, key message, creative direction and channel planning.",

    role:
      "Campaign Planning & Audience Analysis",

    context:
      "Business Management · Academic group project",

    tags: [
      "Audience",
      "Key Message",
      "Creative",
      "Media Plan"
    ],

    accent:
      "#b8c6ff",

    accentSoft:
      "rgba(184,198,255,.18)",


    /* =====================================================
       HOMEPAGE COVER

       16 (1).png
       = Rebranding Initiative
    ===================================================== */

    cover:
      "assets/vinamilk/16 (1).png",


    /* =====================================================
       SELECTED PROOF SLIDES
    ===================================================== */

    slides: [

      /* 15 = SWOT */

      {
        src:
          "assets/vinamilk/15.png",

        caption:
          "SWOT analysis & brand context"
      },


      /* 21 = Campaign Objectives */

      {
        src:
          "assets/vinamilk/21 (1).png",

        caption:
          "Campaign objectives"
      },


      /* 22 = Target Audience */

      {
        src:
          "assets/vinamilk/22.png",

        caption:
          "Target audience analysis"
      },


      /* 23 = Key Message / Creative */

      {
        src:
          "assets/vinamilk/23 (1).png",

        caption:
          "Key message & creative strategy"
      },


      /* 24 = Media Plan */

      {
        src:
          "assets/vinamilk/24.png",

        caption:
          "Media channels, budget & timeline"
      }

    ]

  },


  /* =======================================================
     04 — SOCIAL MEDIA
     PERFORMANCE & STRATEGY
  ======================================================= */

  {
    id: "social",

    number: "04",

    title:
      "Social Media Performance & Strategy",

    type:
      "Social Analytics · Strategy",

    description:
      "Facebook and Instagram performance translated into content and channel recommendations through social analytics and the RACE framework.",

    role:
      "Social Media Analytics & Strategy",

    context:
      "Web & Social Media Analysis · Academic group project",

    tags: [
      "Meta",
      "Brand24",
      "RACE",
      "Content"
    ],

    accent:
      "#d3b6ff",

    accentSoft:
      "rgba(211,182,255,.20)",


    /* Homepage cover */

    cover:
      "assets/social/7.png",


    /* Selected proof slides */

    slides: [

      {
        src:
          "assets/social/8 (1).png",

        caption:
          "Engagement & content performance"
      },

      {
        src:
          "assets/social/19.png",

        caption:
          "Paid content & CTR analysis"
      },

      {
        src:
          "assets/social/23.png",

        caption:
          "Brand24 social listening"
      },

      {
        src:
          "assets/social/27.png",

        caption:
          "RACE strategic recommendations"
      }

    ]

  }

];



/* =========================================================
   DOM ELEMENTS
========================================================= */

const projectGrid =
  document.getElementById(
    "projectGrid"
  );


const viewer =
  document.getElementById(
    "viewer"
  );


const viewerClose =
  document.getElementById(
    "viewerClose"
  );


const viewerTitle =
  document.getElementById(
    "viewerTitle"
  );


const viewerType =
  document.getElementById(
    "viewerType"
  );


const viewerDescription =
  document.getElementById(
    "viewerDescription"
  );


const viewerRole =
  document.getElementById(
    "viewerRole"
  );


const viewerContext =
  document.getElementById(
    "viewerContext"
  );


const mainSlide =
  document.getElementById(
    "mainSlide"
  );


const slideError =
  document.getElementById(
    "slideError"
  );


const slideCaption =
  document.getElementById(
    "slideCaption"
  );


const slideCounter =
  document.getElementById(
    "slideCounter"
  );


const thumbnailStrip =
  document.getElementById(
    "thumbnailStrip"
  );


const previousButton =
  document.getElementById(
    "prevSlide"
  );


const nextButton =
  document.getElementById(
    "nextSlide"
  );



/* =========================================================
   CURRENT STATE
========================================================= */

let activeProject =
  null;


let activeSlide =
  0;



/* =========================================================
   RENDER PROJECT CARDS
========================================================= */

function renderProjects() {

  projectGrid.innerHTML =
    "";


  PROJECTS.forEach(
    project => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "project-card";


      card.tabIndex =
        0;


      card.style.setProperty(
        "--accent",
        project.accent
      );


      card.style.setProperty(
        "--accent-soft",
        project.accentSoft
      );


      card.innerHTML = `

        <div class="card-cover">

          <div class="cover-placeholder">

            <span class="cover-number">
              ${project.number}
            </span>

            <strong>
              ${project.title}
            </strong>

          </div>


          <img
            src="${project.cover}"
            alt="${project.title} project cover"
          >

        </div>


        <div class="project-info">

          <span class="project-kicker">
            ${project.type}
          </span>


          <h3>
            ${project.title}
          </h3>


          <p>
            ${project.description}
          </p>


          <div class="card-bottom">

            <div class="card-tags">

              ${project.tags
                .map(
                  tag =>
                    `<span>${tag}</span>`
                )
                .join("")}

            </div>


            <span class="open-symbol">
              ↗
            </span>

          </div>

        </div>

      `;



      /* =====================================================
         COVER FALLBACK

         Nếu sai tên ảnh hoặc chưa có file ảnh,
         website tự ẩn broken image.
      ===================================================== */

      const coverImage =
        card.querySelector(
          ".card-cover img"
        );


      coverImage.addEventListener(
        "error",
        () => {

          coverImage.style.display =
            "none";

        }
      );



      /* =====================================================
         OPEN PROJECT
      ===================================================== */

      card.addEventListener(
        "click",
        () => {

          openProject(
            project
          );

        }
      );


      card.addEventListener(
        "keydown",
        event => {

          if (
            event.key === "Enter"

            ||

            event.key === " "
          ) {

            event.preventDefault();


            openProject(
              project
            );

          }

        }
      );


      addTiltEffect(
        card
      );


      projectGrid.appendChild(
        card
      );

    }
  );

}



/* =========================================================
   SUBTLE CARD TILT
========================================================= */

function addTiltEffect(
  card
) {

  const supportsHover =
    window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;


  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  if (
    !supportsHover

    ||

    reducedMotion
  ) {

    return;

  }


  card.addEventListener(
    "mousemove",
    event => {

      const rect =
        card.getBoundingClientRect();


      const x =
        event.clientX
        -
        rect.left;


      const y =
        event.clientY
        -
        rect.top;


      const centerX =
        rect.width
        /
        2;


      const centerY =
        rect.height
        /
        2;


      const rotateY =
        (
          x
          -
          centerX
        )
        /
        centerX
        *
        2.2;


      const rotateX =
        -
        (
          y
          -
          centerY
        )
        /
        centerY
        *
        2.2;


      card.style.setProperty(
        "--rx",
        `${rotateX}deg`
      );


      card.style.setProperty(
        "--ry",
        `${rotateY}deg`
      );

    }
  );


  card.addEventListener(
    "mouseleave",
    () => {

      card.style.setProperty(
        "--rx",
        "0deg"
      );


      card.style.setProperty(
        "--ry",
        "0deg"
      );

    }
  );

}



/* =========================================================
   OPEN PROJECT VIEWER
========================================================= */

function openProject(
  project
) {

  activeProject =
    project;


  activeSlide =
    0;


  viewer.style.setProperty(
    "--viewer-accent",
    project.accent
  );


  viewerTitle.textContent =
    project.title;


  viewerType.textContent =
    project.type;


  viewerDescription.textContent =
    project.description;


  viewerRole.textContent =
    project.role;


  viewerContext.textContent =
    project.context;


  renderThumbnails();


  showSlide(
    0
  );


  viewer.showModal();


  document.body.classList.add(
    "dialog-open"
  );

}



/* =========================================================
   SHOW CURRENT SLIDE
========================================================= */

function showSlide(
  index
) {

  if (
    !activeProject
  ) {

    return;

  }


  const total =
    activeProject.slides.length;


  /*
    Loop navigation:
    last → first
    first → last
  */

  activeSlide =
    (
      index
      +
      total
    )
    %
    total;


  const slide =
    activeProject.slides[
      activeSlide
    ];


  /* reset error */

  slideError.style.display =
    "none";


  mainSlide.style.display =
    "block";


  /* load slide */

  mainSlide.src =
    slide.src;


  mainSlide.alt =
    `${activeProject.title} — ${slide.caption}`;


  /* caption */

  slideCaption.textContent =
    slide.caption;


  /* counter */

  slideCounter.textContent =
    `${String(
      activeSlide
      +
      1
    ).padStart(
      2,
      "0"
    )} / ${String(
      total
    ).padStart(
      2,
      "0"
    )}`;


  updateThumbnailState();

}



/* =========================================================
   MAIN IMAGE ERROR
========================================================= */

mainSlide.addEventListener(
  "error",
  () => {

    mainSlide.style.display =
      "none";


    slideError.style.display =
      "grid";

  }
);



/* =========================================================
   CREATE THUMBNAILS
========================================================= */

function renderThumbnails() {

  thumbnailStrip.innerHTML =
    "";


  activeProject.slides.forEach(
    (
      slide,
      index
    ) => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "thumbnail";


      button.setAttribute(
        "aria-label",
        `Open slide ${index + 1}: ${slide.caption}`
      );


      button.innerHTML = `

        <img
          src="${slide.src}"
          alt="${slide.caption}"
        >

      `;



      /* click thumbnail */

      button.addEventListener(
        "click",
        () => {

          showSlide(
            index
          );

        }
      );



      /* hide thumbnail if image is missing */

      const image =
        button.querySelector(
          "img"
        );


      image.addEventListener(
        "error",
        () => {

          button.style.display =
            "none";

        }
      );


      thumbnailStrip.appendChild(
        button
      );

    }
  );

}



/* =========================================================
   ACTIVE THUMBNAIL
========================================================= */

function updateThumbnailState() {

  const thumbnails =
    thumbnailStrip.querySelectorAll(
      ".thumbnail"
    );


  thumbnails.forEach(
    (
      thumbnail,
      index
    ) => {

      thumbnail.classList.toggle(
        "active",
        index ===
        activeSlide
      );

    }
  );


  /*
    Nếu project có nhiều slide,
    thumbnail đang xem sẽ tự scroll
    vào giữa.
  */

  thumbnails[
    activeSlide
  ]?.scrollIntoView(
    {

      behavior:
        "smooth",

      inline:
        "center",

      block:
        "nearest"

    }
  );

}



/* =========================================================
   PREVIOUS SLIDE
========================================================= */

previousButton.addEventListener(
  "click",
  () => {

    showSlide(
      activeSlide
      -
      1
    );

  }
);



/* =========================================================
   NEXT SLIDE
========================================================= */

nextButton.addEventListener(
  "click",
  () => {

    showSlide(
      activeSlide
      +
      1
    );

  }
);



/* =========================================================
   KEYBOARD NAVIGATION

   ArrowLeft  = previous
   ArrowRight = next
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      !viewer.open
    ) {

      return;

    }


    if (
      event.key ===
      "ArrowLeft"
    ) {

      showSlide(
        activeSlide
        -
        1
      );

    }


    if (
      event.key ===
      "ArrowRight"
    ) {

      showSlide(
        activeSlide
        +
        1
      );

    }

  }
);



/* =========================================================
   CLOSE VIEWER
========================================================= */

viewerClose.addEventListener(
  "click",
  () => {

    viewer.close();

  }
);



/* =========================================================
   RESTORE PAGE SCROLL AFTER CLOSE
========================================================= */

viewer.addEventListener(
  "close",
  () => {

    document.body.classList.remove(
      "dialog-open"
    );

  }
);



/* =========================================================
   CLICK OUTSIDE MODAL TO CLOSE
========================================================= */

viewer.addEventListener(
  "click",
  event => {

    const rect =
      viewer.getBoundingClientRect();


    const outside =

      event.clientX
      <
      rect.left

      ||

      event.clientX
      >
      rect.right

      ||

      event.clientY
      <
      rect.top

      ||

      event.clientY
      >
      rect.bottom;


    if (
      outside
    ) {

      viewer.close();

    }

  }
);



/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

renderProjects();