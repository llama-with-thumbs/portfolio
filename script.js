(() => {
  'use strict';

  // ── Project data ──
  const projects = {
    'sememe': {
      year: '2026',
      title: 'Sememe',
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

  function openModal(id) {
    const p = projects[id];
    if (!p) return;

    // Hero image
    if (p.img) {
      modalMainImg.src = p.img;
      modalMainImg.alt = p.title;
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

    // Gallery
    modalGallery.innerHTML = p.gallery.map(src =>
      `<img src="${src}" alt="${p.title}" loading="lazy">`
    ).join('');

    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }

  // Card click handler
  document.querySelectorAll('.card[data-project]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(card.dataset.project);
    });
  });

  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

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
