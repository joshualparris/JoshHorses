const projects = {
  cedica: {
    name: 'CEDICA Project',
    subtitle: 'Institutional management system for an equine-assisted therapy organisation',
    summary: 'A two-part system: a private Flask/Jinja administration application plus a Vue public portal. The backend manages riders, horses, staff, finances, publications, reports, authentication and stored documents.',
    licence: 'No repository-level licence file was visible in the reviewed root. Some individual dependencies/icons carry their own licences, but that does not license the whole repository.',
    chips: ['Flask', 'Jinja2', 'PostgreSQL', 'SQLAlchemy', 'MinIO', 'Vue 3', 'Vite', 'Google OAuth'],
    routes: ['Home', 'News', 'Contact'],
    modules: ['Riders', 'Horses', 'Team', 'Finance', 'Content', 'Reports'],
    architecture: [
      ['Public portal', 'Vue 3 + Vite'],
      ['REST calls', 'Axios / API'],
      ['Admin app', 'Flask + Jinja'],
      ['Domain layer', 'SQLAlchemy models'],
      ['Data + files', 'PostgreSQL + MinIO']
    ],
    note: 'The repository also describes role-based access and Google OAuth for the private administration side.'
  },
  angakess: {
    name: 'Horse Therapy Center',
    subtitle: 'Earlier full-stack management system with public and staff-facing apps',
    summary: 'The repository is also split into a private Flask administration system and a Vue public portal. Admin functionality covers staff, horses, riders/clients, payments/charges, reports and content; the public side offers home, news and contact routes.',
    licence: 'No repository-level licence file or licence text was found in the reviewed repository. Treat the source as copyrighted unless the authors grant permission.',
    chips: ['Flask', 'SQLAlchemy', 'Marshmallow', 'Bootstrap', 'Chart.js', 'Vue 3', 'Vite', 'PostgreSQL'],
    routes: ['Home', 'News', 'Contact'],
    modules: ['Riders', 'Horses', 'Team', 'Finance', 'Content', 'Reports'],
    architecture: [
      ['Public portal', 'Vue 3 + Vite'],
      ['API requests', 'Axios'],
      ['Admin app', 'Flask'],
      ['Business logic', 'Python modules'],
      ['Database', 'PostgreSQL']
    ],
    note: 'Its production portal configuration points to a university-hosted backend, suggesting it was built as a deployed student/institutional project rather than a reusable software library.'
  },
  czech: {
    name: 'hlasKonskehoSrdce archive',
    subtitle: 'A small responsive horse-services brochure website',
    summary: 'The uploaded RAR contains a single HTML page, one stylesheet, a tiny JavaScript menu toggle, a logo and horse imagery. The page has navigation, a hero image, an About section, a four-image Services gallery and Contact details.',
    licence: 'The archive itself contains no licence notice in the HTML, CSS or JavaScript reviewed. Because the ownership and image rights are unknown, this explorer does not republish the archive assets.',
    chips: ['HTML', 'CSS', 'Vanilla JS', 'Responsive menu', 'Static images'],
    routes: ['Home', 'About', 'Services', 'Contact'],
    modules: ['Page structure', 'Navigation', 'Gallery', 'Contact'],
    architecture: [
      ['Browser', 'Single HTML file'],
      ['Styling', 'styles.css'],
      ['Interaction', 'script.js'],
      ['Assets', 'Local JPG/PNG/SVG']
    ],
    note: 'There is no backend, database or login. JavaScript only toggles the mobile navigation menu.'
  }
};

const sampleRows = {
  Riders: [
    ['Alex R.', 'Therapeutic riding', 'Active'],
    ['Sam K.', 'Groundwork', 'Review'],
    ['Casey M.', 'Intro session', 'Active']
  ],
  Horses: [
    ['Willow', 'Therapy horse', 'Available'],
    ['Scout', 'Therapy horse', 'Rest day'],
    ['Marlow', 'Training', 'Available']
  ],
  Team: [
    ['Jordan', 'Therapist', 'Active'],
    ['Taylor', 'Equine lead', 'Active'],
    ['Morgan', 'Admin', 'Active']
  ],
  Finance: [
    ['Session fees', '$1,240', 'Current'],
    ['Scholarships', '$480', 'Allocated'],
    ['Expenses', '$720', 'Recorded']
  ],
  Content: [
    ['Spring program', 'News', 'Published'],
    ['Volunteer intake', 'Notice', 'Draft'],
    ['Open day', 'Event', 'Published']
  ],
  Reports: [
    ['Rider participation', 'Monthly', 'Ready'],
    ['Horse workload', 'Weekly', 'Ready'],
    ['Income / expenses', 'Monthly', 'Ready']
  ],
  'Page structure': [
    ['Navigation', 'Anchor links', 'Ready'],
    ['Hero section', 'Large image', 'Ready'],
    ['Sections', 'About + services', 'Ready']
  ],
  Navigation: [
    ['Desktop links', 'Inline', 'Visible'],
    ['Mobile menu', 'Hamburger', 'Toggle'],
    ['Anchor jumps', 'Same page', 'Ready']
  ],
  Gallery: [
    ['Service 1', 'Image tile', 'Visible'],
    ['Service 2', 'Image tile', 'Visible'],
    ['Service 3', 'Image tile', 'Visible']
  ],
  Contact: [
    ['Phone', 'Placeholder', 'Visible'],
    ['Email', 'Placeholder', 'Visible'],
    ['Address', 'Placeholder', 'Visible']
  ]
};

let activeProject = 'cedica';
let activeRoute = 'Home';
let activeModule = 'Riders';

const projectCard = document.querySelector('#projectCard');
const routeTabs = document.querySelector('#routeTabs');
const moduleTabs = document.querySelector('#moduleTabs');
const portalDemo = document.querySelector('#portalDemo');
const adminDemo = document.querySelector('#adminDemo');
const architectureFlow = document.querySelector('#architectureFlow');
const architectureNote = document.querySelector('#architectureNote');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderProject() {
  const p = projects[activeProject];
  projectCard.innerHTML = `
    <div class="project-top">
      <div>
        <div class="eyebrow">Reviewed project</div>
        <h2>${escapeHtml(p.name)}</h2>
        <p><strong>${escapeHtml(p.subtitle)}</strong></p>
        <p>${escapeHtml(p.summary)}</p>
        <div class="chips">${p.chips.map(chip => `<span class="chip">${escapeHtml(chip)}</span>`).join('')}</div>
      </div>
      <div class="factbox">
        <strong>Licence / copyright status</strong>
        <span>${escapeHtml(p.licence)}</span>
      </div>
    </div>`;

  activeRoute = p.routes[0];
  activeModule = p.modules[0];
  renderRouteTabs();
  renderModuleTabs();
  renderPortal();
  renderAdmin();
  renderArchitecture();
}

function renderRouteTabs() {
  const p = projects[activeProject];
  routeTabs.innerHTML = p.routes.map(route => `
    <button class="${route === activeRoute ? 'active' : ''}" data-route="${escapeHtml(route)}">${escapeHtml(route)}</button>
  `).join('');
  routeTabs.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      activeRoute = button.dataset.route;
      renderRouteTabs();
      renderPortal();
    });
  });
}

function renderModuleTabs() {
  const p = projects[activeProject];
  moduleTabs.innerHTML = p.modules.map(module => `
    <button class="${module === activeModule ? 'active' : ''}" data-module="${escapeHtml(module)}">${escapeHtml(module)}</button>
  `).join('');
  moduleTabs.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      activeModule = button.dataset.module;
      renderModuleTabs();
      renderAdmin();
    });
  });
}

function renderPortal() {
  const p = projects[activeProject];
  const projectLabel = activeProject === 'czech' ? 'Horse services' : 'Equine-assisted services';
  let body = '';

  if (activeRoute === 'Home') {
    body = `
      <div class="hero-block">
        <span class="eyebrow">Welcome</span>
        <h3>${escapeHtml(projectLabel)}</h3>
        <span>A calm public-facing landing page for visitors.</span>
      </div>
      <div class="card-row">
        <div class="mini-card"><strong>What we do</strong><span>Programs, services and organisation information.</span></div>
        <div class="mini-card"><strong>Latest</strong><span>News, notices or service updates.</span></div>
      </div>`;
  } else if (activeRoute === 'News') {
    body = `
      <div class="mini-card"><strong>Program update</strong><span>Example article card loaded from the organisation's content system.</span></div>
      <div class="mini-card" style="margin-top:.7rem"><strong>Community day</strong><span>Another example public post.</span></div>`;
  } else if (activeRoute === 'Contact') {
    body = `
      <div class="mini-card"><strong>Contact the centre</strong><span>This clean-room demo does not submit or store anything.</span></div>
      <div class="form-row">
        <div class="fake-input">Name</div>
        <div class="fake-input">Email</div>
        <div class="fake-input">Message</div>
      </div>
      <button class="cta" type="button">Demo only</button>`;
  } else if (activeRoute === 'About') {
    body = `
      <div class="hero-block"><span class="eyebrow">About</span><h3>Who we are</h3><span>Static descriptive content about the service.</span></div>`;
  } else if (activeRoute === 'Services') {
    body = `
      <div class="card-row">
        <div class="mini-card"><strong>Service one</strong><span>Image-led service tile.</span></div>
        <div class="mini-card"><strong>Service two</strong><span>Image-led service tile.</span></div>
        <div class="mini-card"><strong>Service three</strong><span>Image-led service tile.</span></div>
        <div class="mini-card"><strong>Service four</strong><span>Image-led service tile.</span></div>
      </div>`;
  }

  portalDemo.innerHTML = `
    <div class="phone-top"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(activeRoute)}</span></div>
    <div class="phone-content">${body}</div>`;
}

function renderAdmin() {
  const rows = sampleRows[activeModule] || [];
  const metrics = activeProject === 'czech'
    ? [['1', 'HTML page'], ['1', 'CSS file'], ['1', 'JS file']]
    : [['24', 'active records'], ['6', 'modules'], ['3', 'reports due']];

  adminDemo.innerHTML = `
    <div class="metric-grid">
      ${metrics.map(([value,label]) => `<div class="metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join('')}
    </div>
    <div class="table">
      <div class="row head"><span>${escapeHtml(activeModule)}</span><span>Type</span><span>Status</span></div>
      ${rows.map(row => `<div class="row"><span>${escapeHtml(row[0])}</span><span>${escapeHtml(row[1])}</span><span><span class="pill">${escapeHtml(row[2])}</span></span></div>`).join('')}
    </div>
    <p class="small">Illustrative data only. This reproduces the workflow concept, not the original UI or database.</p>`;
}

function renderArchitecture() {
  const p = projects[activeProject];
  architectureFlow.innerHTML = p.architecture.map((node, index) => {
    const card = `<div class="node"><strong>${escapeHtml(node[0])}</strong><span>${escapeHtml(node[1])}</span></div>`;
    return index === p.architecture.length - 1 ? card : `${card}<div class="arrow">→</div>`;
  }).join('');
  architectureNote.textContent = p.note;
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    activeProject = tab.dataset.project;
    renderProject();
  });
});

renderProject();
