const podcasts = [
  {
    meta: '54 min · best for anxiety + boundaries',
    title: 'Recovery Lab #143 — Healing Without Words',
    text: 'Stephanie Hathorne discusses anxiety, panic, boundaries, trust, regulation, trauma and equine-assisted psychotherapy.',
    href: 'https://open.spotify.com/show/30WFJaTIti7LF3Hkblt8q8',
    cta: 'Open Recovery Lab on Spotify'
  },
  {
    meta: 'Dedicated equine-assisted show',
    title: 'Equine Assisted World — Rupert Isaacson',
    text: 'A whole podcast devoted to equine-assisted practice. Look for the Mark Rashid & Crissi McDonald episode on softness, structure and anxiety.',
    href: 'https://open.spotify.com/show/3yDAMxxOmbLpzIwwQZKY6a',
    cta: 'Open Equine Assisted World'
  },
  {
    meta: 'Australian · research + practice',
    title: 'Animal Therapies Ltd Podcast',
    text: 'Australian episodes include equine-assisted therapy for children, First Nations equine-assisted learning and wider animal-assisted practice.',
    href: 'https://open.spotify.com/show/3PjJHOdL1tnD3UTTneTLrG',
    cta: 'Open Animal Therapies Ltd'
  },
  {
    meta: '26 min · research explainer',
    title: 'Horses & Humans Research Foundation explained',
    text: 'A short interview with HHRF CEO Pebbles Turbeville about what equine-assisted research can—and cannot—tell us.',
    href: 'https://open.spotify.com/show/22NURd6BdcwdUoqOmz4h5j',
    cta: 'Open Conversations Beyond the Barn'
  },
  {
    meta: '23 min · Australian research',
    title: 'Horses lead the way in helping children heal from trauma',
    text: 'Animal Therapies Ltd interviews researcher Morgyn Stacy about Australian practitioners, regulation and the evidence around children’s mental health.',
    href: 'https://open.spotify.com/show/3PjJHOdL1tnD3UTTneTLrG',
    cta: 'Find episode on Spotify'
  },
  {
    meta: '26 min · Australian First Nations program',
    title: 'Yawardani Jan-ga equine-assisted learning',
    text: 'An Aboriginal-led equine-assisted learning program in the Kimberley, discussed through the Animal Therapies Ltd podcast.',
    href: 'https://open.spotify.com/show/3PjJHOdL1tnD3UTTneTLrG',
    cta: 'Open podcast'
  }
];

const resources = [
  { cat:'Evidence', title:'2025 systematic review — PTSD, anxiety & mood', text:'31 eligible studies; useful current overview of both positive signals and methodological limitations.', href:'https://pmc.ncbi.nlm.nih.gov/articles/PMC12410245/' },
  { cat:'Evidence', title:'Project Stride — social anxiety pilot RCT', text:'Small randomised pilot combining equine-assisted activities with CBT.', href:'https://pubmed.ncbi.nlm.nih.gov/26386749/' },
  { cat:'Evidence', title:'Adult trauma / psychotherapy systematic review', text:'2020 review of psychodynamic equine-assisted psychotherapy in traumatisation/personality difficulties.', href:'https://pmc.ncbi.nlm.nih.gov/articles/PMC7460234/' },
  { cat:'Standards', title:'EAGALA — model, research and ethics', text:'Ground-based model resources plus research and Code of Ethics.', href:'https://www.eagala.org/equine-therapy-research/' },
  { cat:'Standards', title:'PATH International standards', text:'Standards, terminology, safety, contraindications and mental-health/learning pathways.', href:'https://pathintl.org/resources/standards-manual/' },
  { cat:'Welfare', title:'IAHAIO equine welfare guidelines', text:'International care, training and welfare guidance for horses in equine-assisted services.', href:'https://iahaio.org/iahaio-international-guidelines-on-care-training-and-welfare-requirements-for-equines-in-equine-assisted-services/' },
  { cat:'Welfare', title:'PATH — Five Domains for EAS horses', text:'A practical welfare model covering nutrition, environment, health, behavioural interactions and mental state.', href:'https://pathintl.org/resources/applying-the-five-domains-to-enhance-wellbeing-of-equine-assisted-service-horses/' },
  { cat:'Australia', title:'Equine & Animal Assisted Psychotherapy Institute', text:'Australian training, ethics and practitioner resources founded by Meg Kirby.', href:'https://www.equinepsychotherapy.net.au/' },
  { cat:'Australia', title:'PACFA specialist-course accreditation', text:'Check current recognition of specialist psychotherapy training in Australia.', href:'https://pacfa.org.au/portal/portal/Training-and-Careers/Accreditation/Specialist-Courses.aspx' },
  { cat:'Australia', title:'Bendigo Health equine-assisted learning', text:'A public-health example of unmounted horse interaction used in carer wellbeing programs.', href:'https://www.bendigohealth.org.au/css/events/' },
  { cat:'Dubbo', title:'Arrow Equine Assisted Therapy & Counselling', text:'A publicly listed Dubbo equine-assisted psychotherapy/learning and counselling service.', href:'https://www.arrowequinetherapy.com.au/' },
  { cat:'Books', title:'The Clinical Practice of Equine-Assisted Therapy', text:'Leif Hallberg — broad clinical reference spanning evidence, ethics, scope, competencies and horse welfare.', href:'https://www.routledge.com/The-Clinical-Practice-of-Equine-Assisted-Therapy-Including-Horses-in-Human/Hallberg/p/book/9781138674622' },
  { cat:'Books', title:'How Change Happens in Equine-Assisted Interventions', text:'Esposito & Fournier — mechanisms of change, experience, meaning and psychotherapy.', href:'https://www.routledge.com/How-Change-Happens-in-Equine-Assisted-Interventions-A-Theory-of-Horses-Humans-and-Psychotherapy/Esposito-Fournier/p/book/9780367538507' },
  { cat:'Books', title:'An Introduction to Equine Assisted Psychotherapy', text:'Meg Kirby — accessible Australian framework for relational equine-assisted psychotherapy.', href:'https://megkirby.com.au/an-introduction-to-equine-assisted-psychotherapy/' },
  { cat:'JoshHorses', title:'Full evidence and standards notes', text:'The detailed repo version with caveats, terminology, studies and professional standards.', href:'https://github.com/joshualparris/JoshHorses/blob/main/resources/evidence-and-standards.md' },
  { cat:'JoshHorses', title:'Research bibliography', text:'Compact research index with the key papers and direct links.', href:'https://github.com/joshualparris/JoshHorses/blob/main/resources/research-bibliography.md' },
  { cat:'JoshHorses', title:'Horse welfare and safety notes', text:'Welfare research, Five Domains, IAHAIO, RSPCA Australia and participant safety principles.', href:'https://github.com/joshualparris/JoshHorses/blob/main/resources/horse-welfare-and-safety.md' }
];

const podcastGrid = document.getElementById('podcastGrid');
podcastGrid.innerHTML = podcasts.map(p => `
  <article class="podcast-card">
    <div class="meta">${p.meta}</div>
    <h3>${p.title}</h3>
    <p>${p.text}</p>
    <a href="${p.href}" target="_blank" rel="noopener">▶ ${p.cta}</a>
  </article>
`).join('');

const resourceGrid = document.getElementById('resourceGrid');
const resourceSearch = document.getElementById('resourceSearch');
const filterRow = document.getElementById('filterRow');
let activeFilter = 'All';
const categories = ['All', ...new Set(resources.map(r => r.cat))];

filterRow.innerHTML = categories.map(cat => `<button class="filter ${cat === 'All' ? 'active' : ''}" data-cat="${cat}">${cat}</button>`).join('');

function renderResources() {
  const q = resourceSearch.value.trim().toLowerCase();
  const visible = resources.filter(r => {
    const matchesCat = activeFilter === 'All' || r.cat === activeFilter;
    const matchesQuery = !q || `${r.cat} ${r.title} ${r.text}`.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });
  resourceGrid.innerHTML = visible.length ? visible.map(r => `
    <a class="resource-card" href="${r.href}" target="_blank" rel="noopener">
      <span class="tag">${r.cat}</span>
      <h3>${r.title}</h3>
      <p>${r.text}</p>
      <span class="arrow">Open resource ↗</span>
    </a>
  `).join('') : '<p class="muted">No resources match that search.</p>';
}

filterRow.addEventListener('click', (event) => {
  const button = event.target.closest('.filter');
  if (!button) return;
  activeFilter = button.dataset.cat;
  document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b === button));
  renderResources();
});
resourceSearch.addEventListener('input', renderResources);
renderResources();

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
mobileNav.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    mobileNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
