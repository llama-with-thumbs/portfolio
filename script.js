(() => {
  'use strict';

  // ── Project data ──
  const projects = {
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
      gallery: []
    },
    'hot-springs': {
      year: '2025',
      title: 'Hot Springs Finder',
      desc: 'An interactive, browser-based map application showcasing thermal springs across the United States. Rebuilt data from the original NCEI dataset (decommissioned May 2025) and now freely available as an open-source tool.\n\nFeatures include search with autocomplete, temperature filtering via dual-handle slider with °F/°C conversion, category filters (Boiling, Hot, Warm), collapsible legend, map layer toggle (Default/Satellite), and fully responsive design. Static site architecture with no backend needed.',
      tags: ['Leaflet.js', 'JavaScript', 'HTML/CSS', 'GitHub Pages'],
      img: 'assets/hot-springs-finder/thumbnail.png',
      links: [
        { label: 'Live Demo', url: 'https://hotspringfinder.com/', primary: true }
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
      desc: 'A company website for Best Home Health Care, Inc. — a home health care provider operating in Needham and Lawrence, MA. The site introduces community services including Group Adult Foster Care (GAFC) and Adult Foster Care (AFC), highlights company values, and enables job applicants to submit forms.\n\nFeatures include application forms with Formik/Yup validation, email routing via EmailJS/Nodemailer, site-wide search powered by Fuse.js, and multilingual support (Spanish, Portuguese, Russian) via Google Translate widget.',
      tags: ['React', 'Bootstrap', 'Formik', 'Yup', 'EmailJS', 'Fuse.js'],
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
    'more-projects': {
      year: 'Various',
      title: 'More Projects',
      desc: 'A collection of additional projects spanning mobile and web development:\n\n• MusicTutor — Expo/React Native mobile app with Node/Express backend and OpenAI integration for music education.\n• Ziz — Flask-based local accounting and household management tool.\n• Budget Math / Budget TSX — React/TypeScript budgeting interface for personal finance tracking.\n• Timely-Notify — Calendar-driven notification web app using Python FastAPI backend and Leaflet-based map UI.',
      tags: ['React Native', 'Flask', 'FastAPI', 'TypeScript', 'Node.js', 'OpenAI'],
      img: null,
      links: [],
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
      img: null,
      links: [],
      gallery: []
    },
    'calculator': {
      year: '2020',
      title: 'Calculator',
      desc: 'Functional calculator application with full keyboard support, clean minimal UI, and standard arithmetic operations. Built with vanilla JavaScript focusing on event handling and state management.',
      tags: ['JavaScript', 'HTML/CSS'],
      img: null,
      links: [],
      gallery: []
    },
    'english-cards': {
      year: '2021',
      title: 'English Cards',
      desc: 'Flashcard-based vocabulary learning application with smooth flip animations, category selection, and progress tracking. Designed to help users learn English vocabulary through interactive card-matching exercises.',
      tags: ['JavaScript', 'CSS Animations'],
      img: null,
      links: [],
      gallery: []
    },
    'virtual-keyboard': {
      year: '2020',
      title: 'Virtual Keyboard',
      desc: 'On-screen virtual keyboard with multilingual support and key press animations. Features multiple language layouts, visual key press feedback, and full text input functionality.',
      tags: ['JavaScript', 'DOM Events', 'CSS'],
      img: null,
      links: [],
      gallery: []
    },
    'coup': {
      year: '2021',
      title: 'Coup Online',
      desc: 'Online multiplayer adaptation of the popular Coup board game. Features real-time gameplay with WebSocket connections, game room management, and turn-based action resolution.',
      tags: ['Node.js', 'Socket.IO', 'JavaScript'],
      img: null,
      links: [],
      gallery: []
    },
    'aws': {
      year: 'Ongoing',
      title: 'AWS Infrastructure',
      desc: 'Cloud infrastructure experiments and deployments including EC2 instance setup, Application Load Balancer configuration, IAM policy management, SSM session management, and Dockerized Apache Fuseki triple store deployments.',
      tags: ['AWS', 'Docker', 'EC2', 'IAM', 'ALB'],
      img: null,
      links: [],
      gallery: []
    },
    'sheets': {
      year: 'Ongoing',
      title: 'Google Sheets Automation',
      desc: 'Workflow automation solutions using JavaScript and Google Apps Script for spreadsheet-driven business processes. Automates repetitive tasks, data processing, and reporting within Google Workspace environments.',
      tags: ['Apps Script', 'JavaScript', 'Google Workspace'],
      img: null,
      links: [],
      gallery: []
    }
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
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
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
})();
