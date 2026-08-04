(() => {
  'use strict';

  // ── Project data ──
  const projects = {
    'sememes': {
      year: '2026',
      title: 'Sememes',
      desc: 'A web application that records voice notes, transcribes them with OpenAI Whisper, auto-translates to English, and builds an interactive Topic Map — a network graph of recurring themes linked back to the exact moments they appear.\n\nFeatures include drag-and-drop audio/text upload, real-time SSE-streamed transcription, rich-text editing with auto-save, and a vis.js-powered semantic graph where node size scales by frequency and edges show relationship types. Five built-in color themes with persistent selection.',
      tags: ['Python', 'Flask', 'OpenAI Whisper', 'vis.js', 'SSE'],
      img: 'assets/sememe/thumbnail.svg',
      links: [
        { label: 'GitHub', url: 'https://github.com/llama-with-thumbs/Sememe', primary: true }
      ],
      gallery: []
    },
    'sporescope': {
      year: '2025',
      title: 'SporeScope',
      desc: 'A web application for visualizing biological growth experiments captured on Raspberry Pi-based imaging rigs. The system retrieves experiment data from Firestore and delivers an interactive exploration interface for examining plates, analytical snippets, perimeter boundary shapes, time-series metrics, and growth dynamics.\n\nFeatures include polygon rendering for shape detection, GIF frame synchronization, and an ontology-driven data model organizing chambers, plates, and snippets in Firestore with corresponding assets in Firebase Storage.',
      tags: ['React', 'TypeScript', 'Firebase', 'Recharts', 'Canvas', 'GitHub Pages'],
      img: 'assets/sporescope/thumbnail.png',
      links: [
        { label: 'Live Demo', url: 'https://llama-with-thumbs.github.io/SporeScopeWeb/', primary: true },
        { label: 'GitHub', url: 'https://github.com/llama-with-thumbs/SporeScopeWeb' }
      ],
      gallery: [
        'https://firebasestorage.googleapis.com/v0/b/sporescope.firebasestorage.app/o/Assets%2FScreenshot%202025-12-16%20151047.png?alt=media&token=c83a15da-34ed-4abf-92eb-2c0bb16e5a67',
        'https://firebasestorage.googleapis.com/v0/b/sporescope.firebasestorage.app/o/Assets%2FChamber-flask-model.drawio.png?alt=media&token=cb922253-0f0b-4af3-9451-b2d95e402105',
        'https://firebasestorage.googleapis.com/v0/b/sporescope.firebasestorage.app/o/Assets%2Ftest_with_circles.png?alt=media&token=91d37956-3e60-47c9-836a-6032dff34ef3'
      ]
    },
    'hot-springs': {
      year: '2025',
      title: 'Hot Springs Finder',
      desc: 'An interactive, browser-based map application showcasing thermal springs across the United States. Rebuilt data from the original NCEI dataset (decommissioned May 2025) and now freely available as an open-source tool.\n\nFeatures include search with autocomplete, temperature filtering via dual-handle slider with °F/°C conversion, category filters (Boiling, Hot, Warm), collapsible legend, map layer toggle (Default/Satellite), and fully responsive design. Static site architecture with no backend needed.',
      tags: ['Leaflet.js', 'JavaScript', 'HTML/CSS', 'GitHub Pages'],
      img: 'assets/hot-springs-finder/thumbnail.png',
      links: [
        { label: 'Live Demo', url: 'https://hotspringfinder.com/', primary: true },
        { label: 'GitHub', url: 'https://github.com/llama-with-thumbs/hot-springs-map' }
      ],
      gallery: []
    },
    'bio-chart': {
      year: '2023',
      title: 'Bio Chart',
      desc: 'A full-stack project involving programming microcontrollers to collect data from sensors, transmit it to a database, perform analysis, and present the results through a web-based user interface.\n\nThe pipeline includes image processing (alignment, cropping, storage), RGB color channel extraction, and an ontology-based data model designed for scalability. Firebase houses processed assets, while AWS EC2 handles compute workloads.',
      tags: ['React', 'TypeScript', 'Firebase', 'Python', 'AWS EC2', 'Conventional Commits'],
      img: 'assets/bio-chart/thumbnail.png',
      links: [
        { label: 'Live Demo', url: 'https://llama-with-thumbs.github.io/bio-chart-web/', primary: true },
        { label: 'GitHub', url: 'https://github.com/llama-with-thumbs/bio-chart-web' }
      ],
      gallery: []
    },
    'covid-dashboard': {
      year: '2021',
      title: 'Covid Dashboard',
      desc: 'A single-page application built as part of The Rolling Scopes School project-based course. Emphasizes best practices including Airbnb style, Conventional Commits, BEM methodology, and collaborative group work.\n\nFeatures an interactive Mapbox map for geographic visualization, D3.js charts for cumulative and daily case tracking, country-by-country statistics, and real-time data from Johns Hopkins CSSE and multiple COVID APIs.',
      tags: ['D3.js', 'Mapbox', 'Webpack', 'MVC', 'REST APIs'],
      img: 'assets/covid-dashboard/thumbnail.png',
      links: [
        { label: 'Live Demo', url: 'https://llama-with-thumbs.github.io/covid-console/', primary: true }
      ],
      gallery: []
    },
    'bh-healthcare': {
      year: '2020',
      title: 'BH Healthcare',
      desc: 'A company website for Best Home Health Care, Inc. — a home health care provider operating in Needham and Lawrence, MA. The site introduces community services including Group Adult Foster Care (GAFC) and Adult Foster Care (AFC), highlights company values, and enables job applicants to submit forms.\n\nFeatures include application forms with Formik/Yup validation, email routing via EmailJS/Nodemailer, site-wide search powered by Fuse.js, and multilingual support (Spanish, Portuguese, Russian) via Google Translate widget.\n\nAlso built a Google Apps Script automation suite for the company — triggered workflows that send scheduled emails, process spreadsheet data, and handle internal business operations.',
      tags: ['React', 'Bootstrap', 'Formik', 'Yup', 'EmailJS', 'Fuse.js', 'Apps Script'],
      img: 'assets/bh-healthcare/thumbnail.png',
      links: [
        { label: 'Visit Site', url: 'https://www.bhhealthcare.org/', primary: true }
      ],
      gallery: []
    },
    'language-for-kids': {
      year: '2022',
      title: 'Language for Kids',
      desc: 'A web-based language-learning application developed during 2021 as a game hub featuring interactive web games designed to teach children new languages in an engaging format.\n\nCollaborated with a graphic designer to develop a vibrant UI balancing playfulness with clarity. Designed responsive web and mobile layouts with a game carousel, intuitive navigation, login/registration interfaces, user profiles, and progress tracking.',
      tags: ['JavaScript', 'Figma', 'Responsive', 'Firebase'],
      img: 'assets/language-for-kids/thumbnail.png',
      links: [
        { label: 'GitHub', url: 'https://github.com/llama-with-thumbs/lang/tree/main', primary: true },
        { label: 'Figma Prototype', url: 'https://www.figma.com/proto/ABqLjkEt2fg9qeTgJYKYQw/Main-page-to-Vlad--Copy-' }
      ],
      gallery: []
    },
    'medart': {
      year: '2021',
      title: 'MedArt Endodontics',
      desc: 'Professional website for MedArt Endodontics — a dental specialty practice in Center City Philadelphia dedicated to root canal treatment. Features service information, 3D imaging details, appointment booking, and patient resources.\n\nBuilt with responsive design, clean navigation, and professional medical aesthetics.',
      tags: ['HTML/CSS', 'JavaScript', 'Responsive'],
      img: 'assets/medart-endodontics/thumbnail.png',
      links: [
        { label: 'Visit Site', url: 'https://www.medartendo.com/', primary: true }
      ],
      gallery: []
    },
    'musictutor': {
      year: '2025',
      title: 'MusicTutor',
      desc: 'An AI-powered music education platform built on a semantic knowledge graph.\n\nThe ontology (RDF/OWL) defines core classes — Person, Student, Course, Module, Lesson, CourseTaking, and Message (with StudentMessage, AITutorMessage, SystemMessage subclasses). Courses decompose into Modules and Lessons with explicit sequential ordering (isFollowedBy). CourseTaking reifies enrollment, linking a Student to a Course in a temporally scoped context.\n\nMessages are typed and linked both sequentially and to specific Lesson entities, embedding conversational interaction into the curricular graph.\n\nThe instance graph instantiates this schema with concrete courses, modules, lessons, students, and timestamped dialogue threads — forming an operational knowledge graph where structure, participation, and interaction are semantically coherent.\n\nApache Jena Fuseki (TDB2) serves as the persistent RDF triple store and SPARQL endpoint. A Node/Express backend mediates access with authentication, authorization, and business logic, while Fuseki handles semantic persistence and graph querying.',
      tags: ['RDF/OWL', 'Apache Fuseki', 'SPARQL', 'Node.js', 'Express', 'React Native', 'OpenAI'],
      img: 'assets/musictutor/instance-graph.png',
      links: [],
      gallery: []
    },
    'more-projects': {
      year: 'Various',
      title: 'More Projects',
      desc: 'A collection of additional projects spanning mobile and web development:\n\n• MusicTutor — Expo/React Native mobile app with Node/Express backend and OpenAI integration for music education.\n• Ziz — Flask-based local accounting and household management tool.\n• Budget Math / Budget TSX — React/TypeScript budgeting interface for personal finance tracking.\n• Timely-Notify — Calendar-driven notification web app using Python FastAPI backend and Leaflet-based map UI.',
      tags: ['React Native', 'Flask', 'FastAPI', 'TypeScript', 'Node.js', 'OpenAI'],
      img: 'assets/more-projects/thumbnail.svg',
      links: [
        { label: 'Timely-Notify Demo', url: 'https://timely-notify.onrender.com', primary: true }
      ],
      gallery: []
    },
    'memoji': {
      year: '2020',
      title: 'Memoji',
      desc: 'Interactive memory card game developed as the capstone project for a Coursera Front-End Specialization (Sep 2019 – Feb 2020).\n\nDemonstrates proficiency in semantic HTML5, responsive CSS3 with flexbox/grid layouts, animations, and ES6+ JavaScript for DOM manipulation and game logic. Features visual feedback systems including color changes, flipping animations, result screens, and a modular programming approach.',
      tags: ['HTML5', 'CSS3', 'ES6+', 'DOM Events', 'Responsive'],
      img: 'assets/memoji/thumbnail.png',
      links: [
        { label: 'Play Game', url: 'https://llama-with-thumbs.github.io/coursera-JS/', primary: true }
      ],
      gallery: []
    },
    'gem-puzzle': {
      year: '2021',
      title: 'Gem Puzzle',
      desc: 'Classic sliding tile puzzle game with smooth CSS animations, move counter, and timer. Built as a practice project exploring DOM manipulation and game state management.',
      tags: ['JavaScript', 'CSS3', 'HTML5'],
      img: 'assets/gem-puzzle/thumbnail.svg',
      links: [],
      gallery: []
    },
    'calculator': {
      year: '2020',
      title: 'Calculator',
      desc: 'Functional calculator application with full keyboard support, clean minimal UI, and standard arithmetic operations. Built with vanilla JavaScript focusing on event handling and state management.',
      tags: ['JavaScript', 'HTML/CSS'],
      img: 'assets/calculator/thumbnail.svg',
      links: [],
      gallery: []
    },
    'english-cards': {
      year: '2021',
      title: 'English Cards',
      desc: 'Flashcard-based vocabulary learning application with smooth flip animations, category selection, and progress tracking. Designed to help users learn English vocabulary through interactive card-matching exercises.',
      tags: ['JavaScript', 'CSS Animations'],
      img: 'assets/english-cards/thumbnail.svg',
      links: [],
      gallery: []
    },
    'virtual-keyboard': {
      year: '2020',
      title: 'Virtual Keyboard',
      desc: 'On-screen virtual keyboard with multilingual support and key press animations. Features multiple language layouts, visual key press feedback, and full text input functionality.',
      tags: ['JavaScript', 'DOM Events', 'CSS'],
      img: 'assets/virtual-keyboard/thumbnail.svg',
      links: [],
      gallery: []
    },

    // ── R&D projects (rd.html) ──
    // Photos: drop images into assets/rd/<project>/ and list them in `gallery`.
    'sporescope-rig': {
      year: '2025',
      title: 'SporeScope — Imaging Rig',
      desc: 'The physical side of SporeScope — the station that photographs the plates the web app analyzes.\n\nThe frame is built from black aluminium extrusion, with a solid top plate and an open working volume. The stage at the bottom is a backlit panel: plates sit on a diffused light box so each dish is lit evenly from beneath, which is what gives clean edges for growth area, perimeter, and polygon boundary extraction rather than the uneven top lighting a room provides. Six petri dishes load at once, in fixed positions on the stage.\n\nAbove them, the camera is carried on a rail under the top plate so it can be set over the stage and left there — fixed height, fixed framing, repeatable frame after frame.\n\nThe rest of the carousel is what comes out of it. The web app groups plates under their chamber and gives each one a live row: the current frame with a scale bar, a culture profile (seeded culture, substrate, start date, elapsed time, total shape area in mm²), an LLM-written read on the state of the plate, the assembled time-lapse, the extracted colony outlines drawn over the dish, and an intensity chart across the run. Rows carry a freshness marker, so a plate that stopped reporting is obvious at a glance.\n\nThe final slides are per-plate time-lapses, each frame stamped with elapsed hours, showing a colony spreading across the dish. Every plate keeps its sample identifier (SMP-837C0C, SMP-9A8231) under its chamber, so a sequence always traces back to the dish it came from.\n\nThe web app that reads these captures — plates, snippets, shape boundaries, and time-series metrics — is under Software Projects.',
      tags: ['Aluminium Extrusion', 'Backlit Stage', 'Camera Rail', 'Raspberry Pi', 'Shape Detection', 'LLM Analysis'],
      img: 'assets/rd/sporescope-rig/rig-wide.jpg',
      links: [
        { label: 'SporeScope Web App', url: 'https://llama-with-thumbs.github.io/SporeScopeWeb/', primary: true },
        { label: 'GitHub', url: 'https://github.com/llama-with-thumbs/SporeScopeWeb' }
      ],
      gallery: [
        'assets/rd/sporescope-rig/rig-wide.jpg',
        'assets/rd/sporescope-rig/rig.jpg',
        'assets/rd/sporescope-rig/web-app.jpg',
        'assets/rd/sporescope-rig/plate-837C0C.gif',
        'assets/rd/sporescope-rig/plate-9A8231.gif'
      ]
    },
    'bio-chart-rig': {
      year: '2023',
      title: 'Bio Chart — Controlled-Environment Imaging Rig',
      desc: 'The physical side of Bio Chart — the controlled-environment chamber that produces the images the web app analyzes.\n\nEnclosing the cultures is the point: inside the box, lighting, framing, and conditions are held steady and independent of whatever the room is doing, so what changes between frames is the growth itself.\n\nA built enclosure with interior LED lighting at the top and stepped shelving that holds labeled culture jars in fixed positions, so every capture frames the same subjects from the same angle. The Raspberry Pi is mounted on a wooden plate on the outside wall with its camera ribbon passing through a cut window into the chamber — the compute stays outside the humid environment while the sensor looks in.\n\nEach chamber carries its own identity plate: a chamber ID (CHA-AFBEFC) and a static IP, matching the chamber entity in the data model so captures land against the right record.\n\nFixed geometry and lighting are what make the downstream analysis possible — mean channel intensities and extracted shape coordinates only mean something if frames stay comparable across weeks.\n\nEverything the rig captures lands in a purpose-built data model, shown in the carousel: Firestore holds Chambers → Plates → Snippets → Shapes, with each snippet carrying its raw-image path and mean blue/red/green channel intensities, while Firebase Storage mirrors the same hierarchy as chamber directories of plates, raw images, and GIFs. Document fields point across to the stored files, so a measurement can always be traced back to the frame it came from.\n\nThe interface built on top of it is the readout side: one row per flask, showing the latest frame, flask parameters (identifier, seeded culture, substrate, start date, elapsed time), a time-lapse still, and mean red/green/blue intensity plotted over the run. The clip after it shows the interactive side of that interface in use. The final three slides are the assembled time-lapses served by that interface — one per flask, each frame stamped with elapsed hours, so a multi-week run plays back in a few seconds.\n\nThe software that consumes this data lives under Software Projects.',
      tags: ['Controlled Environment', 'Woodworking', 'Raspberry Pi', 'Camera Module', 'Time-Lapse', 'Firestore', 'Data Model'],
      img: 'assets/rd/bio-chart-rig/rig-1.jpg',
      links: [
        { label: 'Bio Chart Web App', url: 'https://llama-with-thumbs.github.io/bio-chart-web/', primary: true },
        { label: 'GitHub', url: 'https://github.com/llama-with-thumbs/bio-chart-web' }
      ],
      gallery: [
        'assets/rd/bio-chart-rig/rig-1.jpg',
        'assets/rd/bio-chart-rig/rig-3.jpg',
        'assets/rd/bio-chart-rig/rig-2.jpg',
        'assets/rd/bio-chart-rig/data-model.png',
        'assets/rd/bio-chart-rig/web-interface.jpg',
        { video: 'assets/rd/bio-chart-rig/interface-demo.mp4', poster: 'assets/rd/bio-chart-rig/interface-demo-poster.jpg' },
        'assets/rd/bio-chart-rig/timelapse-a.gif',
        'assets/rd/bio-chart-rig/timelapse-b.gif',
        'assets/rd/bio-chart-rig/timelapse-c.gif'
      ]
    },
    'synchronicity-table': {
      year: 'In progress',
      title: 'Synchronicity Table',
      desc: 'An interactive sculpture system combining physical fabrication with embedded computing.\n\nThe build spans woodworking and assembly, a Raspberry Pi driving the logic, LCD integration into the table surface, custom software, and the geometry that defines the piece.\n\nBecause the layout is the design, I built a browser tool to work it out before cutting anything. Circles are placed on the table surface at real dimensions — each one labelled with its diameter in mm, the panel measured at 286 × 511 mm inside a Ø667 mm envelope — with controls for table depth, individual circle sizes, and locking positions once they are settled. The animation runs live at adjustable speed, so the flowing color fields are judged in motion rather than imagined, and tilt and rotation sliders swing the whole arrangement into perspective, including a grouped view of the sculpture as a body rather than a flat plan.\n\nThe second slide is that layout made real: the tabletop cut to the outline the tool produced, with every circle bored out at its planned diameter and position, wiring already routed underneath.\n\nWrite-up in progress — prototyping steps, fabrication photos, and notes on installation reliability coming.',
      tags: ['Fabrication', 'Raspberry Pi', 'LCD', 'Custom Software', 'Geometry', 'Design Tool'],
      img: 'assets/rd/synchronicity-table/design-app.jpg',
      links: [],
      gallery: [
        'assets/rd/synchronicity-table/design-app.jpg',
        'assets/rd/synchronicity-table/panel-cut.jpg'
      ]
    },
    'coffee-cone': {
      year: 'In progress',
      title: '3D-Printed Coffee Dosing Cone',
      desc: 'A dosing funnel printed in flexible filament that drops onto a 58 mm portafilter and catches every gram coming out of the grinder.\n\nThe part is deliberately plain: a straight-walled skirt sized to grip the basket rim, opening into a wider cone above it. Printing it flexible rather than rigid is what makes it work — the skirt stretches over the rim and holds by friction, seats without a lip or catch, and pops off one-handed. Grounds that would otherwise scatter across the counter end up in the basket.\n\nSimple to make, in use every morning. The staining in the photos is a few hundred shots of wear.\n\nWrite-up in progress — measurements, CAD iterations, fit testing, and print settings.',
      tags: ['CAD', '3D Printing', 'Flexible Filament', 'Design Iteration'],
      img: 'assets/rd/coffee-cone/cone.jpg',
      links: [],
      gallery: [
        'assets/rd/coffee-cone/cone.jpg',
        'assets/rd/coffee-cone/cone-on-portafilter.jpg'
      ]
    },
    'lasercutter': {
      year: 'Ongoing',
      title: 'Laser Cutting & Engraving',
      desc: 'An ongoing set of small parts cut and engraved on the laser — the kind of thing that takes ten minutes to draw and then quietly makes daily life work better.\n\nNumbered plates screwed to the edge of storage shelving turn a wall of boxes into addressable locations: 1.1, 2.1, 2.3, 3.2 — level and position, so anything can be put back where it belongs and found again. The plates are cut to a common outline with fixed screw holes, so a new one drops into the same jig and matches the rest.\n\nEngraved wooden clips carry what would otherwise be a strip of tape and a marker — HOT !!!, DO NOT EAT, EAT ME, TEA TIME — legible, reusable, and hard to ignore. They are engraved as a batch, clamped flat in a row so one job burns six clips at a time.\n\nWrite-up in progress — material and power settings per stock, the engraving font work, and the jig used to keep parts repeatable.',
      tags: ['Laser Cutting', 'Engraving', 'Vector Design', 'Plywood', 'Shop Fixtures'],
      img: 'assets/rd/lasercutter/collage.jpg',
      links: [],
      gallery: [
        'assets/rd/lasercutter/laser-4.jpg',
        'assets/rd/lasercutter/laser-3.jpg',
        'assets/rd/lasercutter/laser-2.jpg',
        'assets/rd/lasercutter/laser-1.jpg'
      ]
    },
    'plant-rig': {
      year: 'In progress',
      title: 'Plant Imaging Rig',
      desc: 'A wall-mounted station for photographing a plant the same way, over and over, as it grows.\n\nThe build is a single vertical rail carrying three things: a Raspberry Pi camera in a printed housing at the top, a diffused light column around it so the subject is lit identically in every frame regardless of the room, and a wooden platter below on a bearing, driven by a motor through an O-ring belt. The motor turns the pot between shots, so each capture session yields the plant from multiple angles instead of one fixed face.\n\nThe rail mounts to the wall on a bracket, keeping camera-to-subject distance and framing fixed across weeks — the same constraint that makes the Bio Chart chamber images comparable.\n\nThe last slide is a clip of an early prototype of the turning mechanism.\n\nWrite-up in progress — motor driver and step timing, camera housing iterations, capture scheduling, and the software that assembles the sequences.',
      tags: ['Raspberry Pi', 'Camera', 'Motor Control', 'Lighting', '3D Printing', 'Time-Lapse'],
      img: 'assets/rd/plant-rig/rig-wide.jpg',
      links: [],
      gallery: [
        'assets/rd/plant-rig/rig-wide.jpg',
        'assets/rd/plant-rig/rig.jpg',
        { video: 'assets/rd/plant-rig/prototype.mp4', poster: 'assets/rd/plant-rig/prototype-poster.jpg' }
      ]
    },
    'kiosk-display': {
      year: 'In progress',
      title: 'Waiting-Room Display / Kiosk',
      desc: 'An unattended information display built from an older computer and an external monitor, wall-mounted in portrait orientation on a plywood backer with the machine and cabling mounted behind the screen.\n\nThe interface is served from GitHub Pages, with automatic launch, scheduled refresh, and recovery after a restart or power loss — so it keeps showing the right thing without anyone tending it.\n\nFull write-up in progress.',
      tags: ['Kiosk Mode', 'GitHub Pages', 'Autostart', 'Recovery', 'Repurposed Hardware'],
      img: 'assets/rd/kiosk-display/install-wide.jpg',
      links: [],
      gallery: [
        'assets/rd/kiosk-display/install-wide.jpg',
        'assets/rd/kiosk-display/install.jpg'
      ]
    },
  };

  // ── Modal ──
  const modal = document.getElementById('modal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalHero = document.getElementById('modalHero');
  const modalMainImg = document.getElementById('modalMainImg');
  const modalYear = document.getElementById('modalYear');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTags = document.getElementById('modalTags');
  const modalLinks = document.getElementById('modalLinks');
  const modalGallery = document.getElementById('modalGallery');

  const hasProjectModal = modal && modalBackdrop && modalClose;

  // Media block at the very top of the modal — the gallery renders here, so the
  // carousel sits above the text rather than under it.
  const modalMedia = document.createElement('div');
  modalMedia.className = 'modal__media';
  if (modalHero && modalHero.parentNode) {
    modalHero.parentNode.insertBefore(modalMedia, modalHero);
  }

  // ── Modal gallery: single item, or a carousel when there's more than one ──
  let carousel = null;

  // A gallery entry is either an image path or { video, poster }
  function mediaTag(item, title) {
    if (typeof item === 'object' && item.video) {
      return `<video src="${item.video}"${item.poster ? ` poster="${item.poster}"` : ''} controls loop muted playsinline preload="none"></video>`;
    }
    return `<img src="${item}" alt="${title}" loading="lazy">`;
  }

  function renderGallery(images, title) {
    carousel = null;
    modalGallery.innerHTML = '';

    if (!images.length) {
      modalMedia.style.display = 'none';
      modalMedia.innerHTML = '';
      return;
    }

    modalMedia.style.display = '';

    if (images.length === 1) {
      modalMedia.innerHTML = mediaTag(images[0], title);
      return;
    }

    modalMedia.innerHTML = `
      <div class="carousel">
        <div class="carousel__viewport">
          <div class="carousel__track">
            ${images.map(item => `<div class="carousel__slide">${mediaTag(item, title)}</div>`).join('')}
          </div>
        </div>
        <button class="carousel__nav carousel__nav--prev" aria-label="Previous image">&larr;</button>
        <button class="carousel__nav carousel__nav--next" aria-label="Next image">&rarr;</button>
        <div class="carousel__dots">
          ${images.map((_, i) => `<button class="carousel__dot${i === 0 ? ' carousel__dot--active' : ''}" data-index="${i}" aria-label="Image ${i + 1}"></button>`).join('')}
        </div>
      </div>`;

    const track = modalMedia.querySelector('.carousel__track');
    const dots = Array.from(modalMedia.querySelectorAll('.carousel__dot'));
    carousel = { index: 0, count: images.length, track, dots };

    modalMedia.querySelector('.carousel__nav--prev').addEventListener('click', () => carouselStep(-1));
    modalMedia.querySelector('.carousel__nav--next').addEventListener('click', () => carouselStep(1));
    dots.forEach(dot => dot.addEventListener('click', () => carouselGo(Number(dot.dataset.index))));

    // Swipe on touch devices
    let startX = null;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) carouselStep(dx < 0 ? 1 : -1);
      startX = null;
    }, { passive: true });
  }

  function carouselGo(i) {
    if (!carousel) return;
    carousel.index = (i + carousel.count) % carousel.count;
    carousel.track.style.transform = `translateX(-${carousel.index * 100}%)`;
    carousel.dots.forEach((dot, n) => dot.classList.toggle('carousel__dot--active', n === carousel.index));
  }

  function carouselStep(delta) {
    if (carousel) carouselGo(carousel.index + delta);
  }

  function openModal(id) {
    const p = projects[id];
    if (!p) return;

    // Top media: the gallery carousel when there is one, otherwise the hero image
    modalMedia.style.setProperty('--hero-img', p.img ? `url('${p.img}')` : 'none');
    renderGallery(p.gallery, p.title);

    if (p.img && !p.gallery.length) {
      modalMainImg.src = p.img;
      modalMainImg.alt = p.title;
      modalHero.style.setProperty('--hero-img', `url('${p.img}')`);
      modalHero.style.display = '';
    } else {
      modalHero.style.display = 'none';
    }

    modalYear.textContent = p.year;
    modalTitle.textContent = p.title;
    modalDesc.innerHTML = p.desc.replace(/\n/g, '<br>');

    // Tags
    modalTags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');

    // Links
    modalLinks.innerHTML = p.links.map(l =>
      `<a href="${l.url}" target="_blank" rel="noopener" class="btn ${l.primary ? 'btn--primary' : 'btn--outline'}">${l.label}</a>`
    ).join('');

    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }

  if (hasProjectModal) {
    document.querySelectorAll('.card[data-project]').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(card.dataset.project);
      });
    });

    modalBackdrop.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (carousel && modal.classList.contains('modal--open')) {
        if (e.key === 'ArrowLeft') carouselStep(-1);
        else if (e.key === 'ArrowRight') carouselStep(1);
      }
    });
  }

  // ── Theme toggle ──
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  const saved = localStorage.getItem('theme');
  if (saved) {
    root.setAttribute('data-theme', saved);
  }

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = (current === 'light' || current === 'web1') ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ── Web 1.0 toggle ──
  const web1Toggle = document.getElementById('web1Toggle');
  let preWeb1Theme = null;

  web1Toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    if (current === 'web1') {
      const restore = preWeb1Theme || 'dark';
      root.setAttribute('data-theme', restore);
      localStorage.setItem('theme', restore);
      preWeb1Theme = null;
    } else {
      preWeb1Theme = current;
      root.setAttribute('data-theme', 'web1');
      localStorage.setItem('theme', 'web1');
    }
  });

  // ── Nav scroll state ──
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── Mobile menu toggle ──
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('nav__toggle--active');
    links.classList.toggle('nav__links--open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('nav__toggle--active');
      links.classList.remove('nav__links--open');
    });
  });

  // ── Scroll reveal ──
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));

  window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal').forEach(el => {
      el.classList.add('reveal--visible');
    });
  });

  // ── Contact form (EmailJS) ──
  // TODO: Replace these with your EmailJS credentials
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

  emailjs.init(EMAILJS_PUBLIC_KEY);

  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form__submit');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form__status';

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
      .then(() => {
        formStatus.textContent = 'Message sent successfully!';
        formStatus.classList.add('form__status--success');
        contactForm.reset();
      })
      .catch(() => {
        formStatus.textContent = 'Something went wrong. Please try again.';
        formStatus.classList.add('form__status--error');
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = 'Send Message';
      });
  });
})();
