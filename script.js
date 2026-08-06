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

    // ── Art (art.html) ──
    'synthtember': {
      year: 'Sep 11 – Nov 13, 2026',
      title: 'Synth-tember: A Synthesis of Art + Science',
      desc: 'A group exhibition at New Alliance Gallery bringing together artists working where art and science meet.\n\nI am one of the exhibiting artists, showing alongside more than forty others across the run of the show.',
      tags: ['Group Exhibition', 'New Alliance Gallery', 'Art + Science'],
      img: 'assets/art/synthtember.jpg',
      links: [],
      gallery: [
        { src: 'assets/art/synthtember.jpg', caption: 'Show promo — Synth-tember: A Synthesis of Art + Science, 9/11 – 11/13 at New Alliance Gallery.' },
        { src: 'assets/art/synthtember-artists.jpg', caption: 'The full list of exhibiting artists.' }
      ]
    },
    'sun-figure': {
      year: 'Wedding commission',
      title: 'Giant Puppet',
      desc: 'A giant sun-faced puppet with outstretched hands, built as a wedding decoration.\n\nIt worked as the backdrop for the ceremony stage, and its fabric wings doubled as curtains — people could walk in and out through them.',
      tags: ['Puppet', 'Sculpture', 'Installation', 'Event Design'],
      img: 'assets/art/wedding-backdrop.jpg',
      links: [],
      gallery: [
        { src: 'assets/art/wedding-backdrop.jpg', caption: 'The puppet standing at the ceremony site, arms spread with the fabric hung between them.' },
        { src: 'assets/art/puppet-ceremony.jpg', caption: 'In use during the ceremony — the couple framed by the gold face above and the open hands to either side.' }
      ]
    },

    'helmet': {
      year: 'Workshop work',
      title: 'Napoleonic Helmets & Shakos',
      desc: 'Uniform headwear of the Napoleonic period, made in a workshop producing reproductions of period uniform and equipment.\n\nEach piece pulls together several trades at once — raised and embossed brass, cast and chased fittings, nickel plate work, felt and cloth bodies, leather peaks bound in metal, fur turbans, and horsehair manes and plumes.\n\nI worked at the shop for about a year.',
      tags: ['Brass Work', 'Metalwork', 'Historical Reproduction', 'Leather', 'Craft'],
      img: 'assets/art/helmet-collage.jpg',
      links: [],
      gallery: [
        { src: 'assets/art/helmet.jpg', caption: 'Brass helmet — polished skull, embossed comb, scale chinstrap and rosette boss, fur turban, black horsehair mane and plume.' },
        { src: 'assets/art/helmet-3.jpg', caption: 'The same pattern in an officer version, with a leopard-skin turban and gilt fittings.' },
        { src: 'assets/art/helmet-2.jpg', caption: 'Czapka with a crimson cloth body and a gilt sunburst plate carrying the crowned N.' },
        { src: 'assets/art/helmet-4.jpg', caption: 'Red shako with a silver eagle plate numbered 3, tricolour cockade and white band.' }
      ]
    },
    'iron-gates': {
      year: 'Saint Petersburg',
      title: 'Wrought Iron Gates — Restoration',
      desc: 'Gates leading into the inner garden of an old house in Saint Petersburg, restored in the forge.\n\nOnly the right leaf survived. We copied it to rebuild the missing left one — matching the scrollwork, the fleur ornaments, and the circular К monogram so the pair reads as original.\n\nI worked as a blacksmith for about two years during my last years of college; this was one of the restoration jobs from that time.',
      tags: ['Blacksmithing', 'Wrought Iron', 'Restoration', 'Forging', 'Ornamental Metalwork'],
      img: 'assets/art/gates-1.jpg',
      links: [],
      gallery: [
        { src: 'assets/art/gates-1.jpg', caption: 'The finished pair in the archway — the left leaf rebuilt from the surviving right one, down to the scrollwork crown and К monogram.' },
        { src: 'assets/art/gates-2.jpg', caption: 'Open, seen from the street: Кузнечный переулок — Blacksmith Lane.' }
      ]
    },

    // ── R&D projects (rd.html) ──
    // Photos: drop images into assets/rd/<project>/ and list them in `gallery`.
    'sporescope-rig': {
      year: '2025',
      title: 'SporeScope — Imaging Rig',
      desc: '<h4>Motivation</h4><p>Designed to automate long-term monitoring of fungal growth and evaluate whether simple, low-cost backlit imaging is sufficient to distinguish healthy mycelium from contamination without specialized optics.</p><h4>Engineering decisions</h4><ul><li>Built from modular aluminum extrusion to maintain stable camera-to-sample geometry during multi-week experiments.</li><li>Camera distance was intentionally increased beyond the minimum focus distance to reduce lens distortion while maintaining adequate resolution.</li><li>Uniform edge-lit LED panel provides repeatable shadow-based imaging across the entire plate.</li><li>A laser-cut plate holder seats each dish in a numbered position, preventing slipping and making remounting repeatable between runs.</li><li>Settled on a 30-minute capture interval — frequent enough to follow growth, without wasting cloud storage in the AWS S3 database.</li></ul><h4>Challenges</h4><ul><li>High humidity caused condensation on agar plates, introducing image noise and reducing measurement reliability.</li><li>Maintaining sub-pixel positional repeatability was essential because image analysis compares the same pixels over time.</li></ul><h4>Results</h4><ul><li>Raspberry Pi 4 + Camera Module 3 capture time-series images automatically.</li><li>Images are analyzed using both traditional image-processing techniques and an LLM, whose contamination assessments are compared with quantitative measurements.</li></ul>',
      tags: ['Aluminum Extrusion', 'Raspberry Pi', 'Backlit Imaging', 'Biological Imaging', 'Shape Detection'],
      swTags: ['Python', 'React', 'TypeScript', 'Firebase', 'LLM Analysis'],
      img: 'assets/rd/sporescope-rig/rig-wide.jpg',
      links: [
        { label: 'SporeScope Web App', url: 'https://llama-with-thumbs.github.io/SporeScopeWeb/', primary: true },
        { label: 'GitHub', url: 'https://github.com/llama-with-thumbs/SporeScopeWeb' }
      ],
      gallery: [
        { src: 'assets/rd/sporescope-rig/rig-wide.jpg', caption: '2020 extrusion frame with a backlit stage below and the overhead camera under the top plate.' },
        { src: 'assets/rd/sporescope-rig/plate-holder.jpg', caption: 'Laser-cut plate holder on the backlit stage — six numbered seats stop the dishes sliding and let them be remounted in the same positions run after run.' },
        { src: 'assets/rd/sporescope-rig/capture-regions.jpg', caption: 'Raw overhead frame from the Raspberry Pi camera — red circles mark the six plate positions cropped out of every capture and sent on for analysis.' },
        { src: 'assets/rd/sporescope-rig/snippet-837C0C.png', caption: 'One plate cropped out of that frame and stored as its own record in the database — plate SMP-837C0C, the same dish assembled into the time-lapse below.' },
        { src: 'assets/rd/sporescope-rig/web-app.jpg', caption: 'Web app: one live row per plate — current frame, culture profile, GPT analysis, extracted colony outlines, and intensity over the run.' },
        { src: 'assets/rd/sporescope-rig/plate-837C0C.gif', caption: 'Plate SMP-837C0C — captured frames assembled into a time-lapse, stamped with elapsed hours.' },
        { src: 'assets/rd/sporescope-rig/plate-9A8231.gif', caption: 'Plate SMP-9A8231 — a colony spreading across the dish over the run.' }
      ]
    },
    'bio-chart-rig': {
      year: '2023',
      title: 'Bio Chart — Sensor & Imaging Chamber',
      desc: '<h4>Motivation</h4><p>Developed as a self-contained chamber for long-term observation of mycelium growing inside a closed environment, reducing the need for manual inspection.</p><h4>Features</h4><ul><li>Raspberry Pi-based imaging station captures photographs every 30 minutes.</li><li>Images are uploaded automatically and processed into an interactive web interface with time-lapse GIF generation.</li><li>RGB color metrics are tracked over time to identify growth trends and detect contamination.</li><li>The system is designed to notify the user via email or SMS when predefined conditions indicate abnormal growth.</li></ul><h4>Engineering decisions</h4><ul><li>Fully enclosed chamber minimizes environmental disturbance.</li><li>Integrated lighting ensures repeatable imaging conditions across long experiments.</li></ul>',
      tags: ['Raspberry Pi', 'Microcontrollers', 'Sensors', 'Image Capture', 'Data Acquisition', 'Biological Monitoring'],
      swTags: ['Python', 'React', 'TypeScript', 'Firestore', 'AWS EC2'],
      img: 'assets/rd/bio-chart-rig/rig-1.jpg',
      links: [
        { label: 'Bio Chart Web App', url: 'https://llama-with-thumbs.github.io/bio-chart-web/', primary: true },
        { label: 'GitHub', url: 'https://github.com/llama-with-thumbs/bio-chart-web' }
      ],
      gallery: [
        { src: 'assets/rd/bio-chart-rig/rig-1.jpg', caption: 'Chamber open with the interior LED lighting on; the Raspberry Pi sits outside on the wall, camera ribbon passing through a cut window.' },
        { src: 'assets/rd/bio-chart-rig/rig-2.jpg', caption: 'Closed, with the chamber ID and static IP on the front plate.' },
        { src: 'assets/rd/bio-chart-rig/capture-regions.jpg', caption: 'Raw full-size frame from the Pi camera — every jar carries its flask ID on the lid, and the red rectangle marks the region cropped out of each capture and stored as that flask\'s own record.' },
        { src: 'assets/rd/bio-chart-rig/capture-a.jpg', caption: 'What the camera produces: one flask cropped out of a capture and stored as its own record — mycelium spreading through the grain. Frames like this feed the color-intensity analysis and assemble into the time-lapses below.' },
        { src: 'assets/rd/bio-chart-rig/data-model.png', caption: 'Data model: Firestore holds chambers → plates → snippets → shapes; Firebase Storage mirrors the same hierarchy for the files.' },
        { src: 'assets/rd/bio-chart-rig/web-interface.jpg', caption: 'Web interface: one row per flask — latest frame, flask parameters, time-lapse still, and mean red/green/blue intensity over the run.' },
        { video: 'assets/rd/bio-chart-rig/interface-demo.mp4', poster: 'assets/rd/bio-chart-rig/interface-demo-poster.jpg', caption: 'Interacting with the live interface.' },
        { src: 'assets/rd/bio-chart-rig/timelapse-a.gif', caption: 'Flask time-lapse — each frame stamped with elapsed hours.' },
        { src: 'assets/rd/bio-chart-rig/timelapse-b.gif', caption: 'A second flask over the same run.' },
        { src: 'assets/rd/bio-chart-rig/timelapse-c.gif', caption: 'A third flask; weeks of growth play back in seconds.' },
        { src: 'assets/rd/bio-chart-rig/timelapse-flower.gif', caption: 'The same rig pointed at something else entirely: a lily opening and collapsing over 92 hours, 367 captures at a fixed camera position. Nothing about the setup changes — only the subject.' }
      ]
    },
    'synchronicity-table': {
      year: 'In progress',
      title: 'Shared Signal',
      desc: '<h4>Motivation</h4><p>Developed for an interactive gallery installation where animated light patterns are displayed through hundreds of precisely positioned openings in a tabletop. The project required both a custom physical display system and software tools for rapid design iteration.</p><h4>Engineering decisions</h4><ul><li>Chose a Raspberry Pi 5 to drive a high-resolution LCD display with smooth real-time animation while keeping the hardware compact enough to integrate directly behind the tabletop.</li><li>Mounted the Raspberry Pi directly to the display to minimize footprint, simplify cable management, and keep the installation self-contained while maintaining physical access for maintenance.</li><li>The installation runs locally during exhibition without requiring an Internet connection. Content is developed on a web-based interface, deployed to the Raspberry Pi, and executed entirely from local storage.</li></ul><h4>Design software</h4><ul><li>Developed a custom interactive design application after determining that traditional CAD software was too slow for iterative visual exploration.</li><li>The application automatically generates and updates hundreds of circular cutouts while providing immediate rendered previews from multiple viewing angles, allowing rapid experimentation with layout and animation before fabrication.</li></ul><h4>Technologies</h4><p>Raspberry Pi 5 • LCD Display • JavaScript • SVG • HTML/CSS • GitHub Pages • SSH</p>',
      tags: ['Fabrication', 'Raspberry Pi', 'LCD', 'Geometry'],
      swTags: ['JavaScript', 'SVG', 'Browser Tool'],
      img: 'assets/rd/synchronicity-table/design-app.jpg',
      links: [],
      gallery: [
        { src: 'assets/rd/synchronicity-table/design-app.jpg', caption: 'The layout tool: circles at real dimensions with live animation, tilt and rotation preview, and CSV export of coordinates.' },
        { src: 'assets/rd/synchronicity-table/panel-cut.jpg', caption: 'The tabletop cut to that outline, every circle bored at its planned diameter, wiring routed underneath.' }
      ]
    },
    'coffee-cone': {
      year: 'Finished · in use',
      title: '3D-Printed Coffee Dosing Cone',
      desc: '<h4>Motivation</h4><p>Designed after finding commercial metal dosing funnels inconvenient for daily use.</p><h4>Iteration</h4><ul><li>Multiple versions explored height, taper angle, flexibility, and material selection.</li><li>Final design uses TPU for a secure friction fit and easier one-handed removal.</li><li>Used daily, providing continuous real-world validation.</li></ul>',
      tags: ['CAD', '3D Printing', 'TPU', 'Functional Design'],
      img: 'assets/rd/coffee-cone/cone.jpg',
      links: [],
      gallery: [
        { src: 'assets/rd/coffee-cone/cone.jpg', caption: 'The cone printed in flexible TPU, stained from daily use.' },
        { src: 'assets/rd/coffee-cone/cone-on-portafilter.jpg', caption: 'Seated on the 58 mm portafilter, gripping the basket rim by friction.' }
      ]
    },
    'lasercutter': {
      year: 'Ongoing',
      title: 'Laser Cutting & Engraving',
      desc: '<h4>Motivation</h4><p>A collection of small practical tools, labels, fixtures, and organizers created to solve everyday workflow problems around the house and workshop.</p><h4>Philosophy</h4><p>Rather than temporary labels or tape, laser engraving creates durable markings that remain readable throughout the lifetime of the object.</p>',
      tags: ['Laser Cutting', 'Engraving', 'Plywood', 'Shop Fixtures'],
      swTags: ['Inkscape', 'Vector Design'],
      img: 'assets/rd/lasercutter/collage.jpg',
      links: [],
      gallery: [
        { src: 'assets/rd/lasercutter/workshop.jpg', caption: 'The machine in my home workshop — CO₂ laser on a desk with the water chiller underneath, extraction ducted out, and sheet stock stored below.' },
        { src: 'assets/rd/lasercutter/laser-4.jpg', caption: 'Clips engraved as a batch — HOT !!!, TEA TIME, EAT ME — clamped flat in a row for one job.' },
        { src: 'assets/rd/lasercutter/laser-3.jpg', caption: 'Finished clips in use as labelled markers.' },
        { src: 'assets/rd/lasercutter/laser-2.jpg', caption: 'Shelf location plates 2.1 and 1.1, screwed to the shelf edge.' },
        { src: 'assets/rd/lasercutter/laser-1.jpg', caption: 'Plates 2.3 and 3.2 — level and position, so a box goes back where it belongs.' },
        { src: 'assets/rd/lasercutter/shelf-label.jpg', caption: 'Engraved name plate marking what a storage shelf holds.' }
      ]
    },
    'plant-rig': {
      year: 'In progress',
      title: 'Plant Imaging Rig',
      desc: '<h4>Motivation</h4><p>Designed to create an affordable system for capturing long-term plant growth from multiple viewing angles, enabling reconstruction of animated 3D models of slow biological processes. Unlike conventional photogrammetry systems that rely on many synchronized cameras, this approach uses a single rotating camera to reduce cost while supporting experiments lasting days or weeks.</p><h4>Engineering decisions</h4><ul><li>A rotating platform was designed to position the plant accurately for repeatable multi-angle imaging.</li><li>The platter indexes 15° every five minutes and captures a frame at each stop, so a full 360° revolution — 24 angles of the plant — completes every two hours.</li><li>The turntable was machined on a lathe to ensure concentricity, perpendicularity, and smooth rotation, minimizing positional errors during image capture.</li><li>A bearing-supported platform reduces friction and improves rotational stability.</li><li>A spring-loaded belt tensioning mechanism maintains consistent belt tension while minimizing load on the low-torque motor, allowing reliable unattended operation over long periods.</li><li>A custom light diffuser mounted near the camera provides soft, repeatable illumination while reducing harsh reflections.</li></ul><h4>Challenges</h4><ul><li>Finding the correct balance between belt tension and motor torque required multiple iterations.</li><li>The rotating platform needed to remain both precisely concentric and perpendicular to the rotation axis to prevent changes in belt tension and unwanted vibration.</li><li>Long-duration experiments demanded reliable mechanical performance with minimal maintenance.</li></ul><h4>Technologies</h4><p>Raspberry Pi • Camera Module • Belt Drive • Custom Turntable • Bearings • Spring Tensioner • Mechanical Design • Lathe Machining • Python</p>',
      tags: ['Raspberry Pi', 'Camera', 'Motor Control', 'Lighting', '3D Printing'],
      swTags: ['Python', 'Capture Scheduling', 'Time-Lapse'],
      img: 'assets/rd/plant-rig/rig-wide.jpg',
      links: [],
      gallery: [
        { src: 'assets/rd/plant-rig/rig-wide.jpg', caption: 'Camera housing and diffused light column at the top, motorised platter below carrying the pot.' },
        { src: 'assets/rd/plant-rig/rig-lights-off.jpg', caption: 'Lights off: the camera housing, the extrusion arm carrying the platter, and the belt running to the motor pulley.' },
        { src: 'assets/rd/plant-rig/belt-drive.jpg', caption: 'The drive seen from the front: the motor pulley at the rail, a spring-loaded idler on each side, and the belt running down in a V to the platter below.' },
        { src: 'assets/rd/plant-rig/belt-tensioner.jpg', caption: 'Spring-loaded idler pulleys press against the drive belt, keeping it under constant tension.' },
        { src: 'assets/rd/plant-rig/platter.jpg', caption: 'The platter: a lightweight stand with timing belt bonded around the rim to give the drive belt grip, riding on bearings for smooth rotation over many repetitions.' },
        { video: 'assets/rd/plant-rig/prototype.mp4', poster: 'assets/rd/plant-rig/prototype-poster.jpg', caption: 'Early prototype of the turning mechanism.' }
      ]
    },
    'kiosk-display': {
      year: 'In progress',
      title: 'Waiting-Room Display / Kiosk',
      desc: 'An unattended information display built from an older computer and an external monitor, wall-mounted in portrait orientation on a plywood backer with the machine and cabling mounted behind the screen.\n\nThe interface is served from GitHub Pages, with automatic launch, scheduled refresh, and recovery after a restart or power loss — so it keeps showing the right thing without anyone tending it.\n\nFull write-up in progress.',
      tags: ['Repurposed Hardware', 'Kiosk Mode', 'Wall Mount'],
      swTags: ['GitHub Pages', 'HTML/CSS', 'JavaScript', 'Autostart', 'Recovery'],
      img: 'assets/rd/kiosk-display/install-wide.jpg',
      links: [],
      gallery: [
        { src: 'assets/rd/kiosk-display/install-wide.jpg', caption: 'Installed in portrait on a plywood backer, machine and cabling mounted behind the screen.' },
        { src: 'assets/rd/kiosk-display/install.jpg', caption: 'Closer view of the mount and the display running unattended.' }
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

  // A gallery entry is an image path, or { src | video, poster, caption }
  function mediaTag(item, title) {
    if (typeof item === 'object' && item.video) {
      return `<video src="${item.video}"${item.poster ? ` poster="${item.poster}"` : ''} controls loop muted playsinline preload="none"></video>`;
    }
    const src = typeof item === 'object' ? item.src : item;
    return `<img src="${src}" alt="${title}" loading="lazy">`;
  }

  function captionTag(item) {
    const caption = typeof item === 'object' ? item.caption : null;
    return caption ? `<figcaption class="carousel__caption">${caption}</figcaption>` : '';
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
      modalMedia.innerHTML = `<figure class="carousel__slide">${mediaTag(images[0], title)}${captionTag(images[0])}</figure>`;
      return;
    }

    modalMedia.innerHTML = `
      <div class="carousel">
        <div class="carousel__viewport">
          <div class="carousel__track">
            ${images.map(item => `<figure class="carousel__slide">${mediaTag(item, title)}${captionTag(item)}</figure>`).join('')}
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

    // Tags — hardware first, then software tags in their own colour
    modalTags.innerHTML = p.tags.map(t => `<span>${t}</span>`).join('') +
      (p.swTags || []).map(t => `<span class="tag--sw">${t}</span>`).join('');

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
    // Project cards and art gallery tiles both open the modal
    document.querySelectorAll('[data-project]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(el.dataset.project);
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
