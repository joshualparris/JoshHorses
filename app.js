const episodes = [
  {id:'5wGPapGp6mo71b4FYA3wBO',cat:'Introduction',duration:'45 min',title:'Horse Assisted Therapy with Jane Faulkner — Part 1',show:'Mental Health',text:'Australian equine-assisted therapist Jane Faulkner on grounding, present-moment awareness and what horse-assisted therapy can look like.'},
  {id:'3wCSMgGdENUvoTlOY9YKMt',cat:'Trauma',duration:'34 min',title:'Horses for healing: lessons from equine therapy',show:'Mastering Change',text:'Trauma-informed counsellor and equine therapist Rianne Sibma-de Vries on presence, healing and horse-assisted work.'},
  {id:'23LJ06VD7CrZzutHT1SAb0',cat:'Relationships',duration:'50 min',title:'Healing trauma & showing up authentically via equine therapy',show:'Blush',text:'Courtney Clifford discusses trauma, attachment, intuition and relationships through equine therapy.'},
  {id:'1onSXutVQdYDVC4HlTUaGl',cat:'Trauma',duration:'36 min',title:'Finding Healing in Horses with Dr. Rebecca Bailey',show:'Veterinary Compassion Project',text:'A trauma therapist discusses horses, complex trauma and connection.'},
  {id:'3GyriK95G8BiUjKhqaeCvA',cat:'Neurodiversity',duration:'1 h 39',title:'Your Brain, Your Way — Dr. Chantel Prat',show:'Equine Assisted World',text:'Neuroscience, neurodiversity, curiosity and healing in an equine-assisted context.'},
  {id:'5HgzKKSysUN1UzeUsP5EHz',cat:'Trauma',duration:'42 min',title:'Straight from the Horse’s Mouth — Benefits of Equine Therapy',show:'Wellness Warrior',text:'LCSW Debbie Cunningham discusses using equine therapy in trauma treatment.'},
  {id:'7qVry7mesO5arLHdlBPyj4',cat:'Attachment',duration:'42 min',title:'Dr. Dana Kasper and Keith Shaw',show:'Mental Healthy',text:'Pediatric trauma, attachment theory and equine-assisted psychotherapy.'},
  {id:'4h4BWaud6wI2t2Ekef9HDp',cat:'Anxiety',duration:'2 h 12',title:'Curiosity Over Fear — Building Resilience in Horses and Humans',show:'Equine Assisted World',text:'Kira Julius on fear, resilience, curiosity and equine-assisted practice.'},
  {id:'0FQwVFlFAU1FuUfk7dS5Pj',cat:'Nervous system',duration:'52 min',title:'Polyvagal Theory, Equine Therapy & Trauma Recovery',show:'The Infinite Approach',text:'Dr. Rebecca Bailey on autonomic regulation, connection and trauma recovery.'},
  {id:'2yN7DOfg9ZQidRWQMdslyw',cat:'PTSD',duration:'48 min',title:'Harnessing Healing: Equine Therapy & Mental Wellness',show:'E11evate',text:'A conversation about equine-assisted therapy, PTSD and mental wellness.'},
  {id:'7h760P0KUxsg3DOxwTSAQa',cat:'Practice',duration:'2 h 18',title:'Joell Dunlap — Square Peg Foundation',show:'Equine Assisted World',text:'A deep look at a pioneering equine-assisted program and what thoughtful practice can look like.'},
  {id:'63ZQsvqD2MqwRfLS08Jtc1',cat:'Trauma-informed',duration:'1 h 22',title:'Joyful Horsemanship Through a Trauma-Informed Lens',show:'Sovereign Horse',text:'Trauma-informed horsemanship and the subtleties of safety, choice and relationship.'},
  {id:'6fbs3SpXAtQo9SCvOSNski',cat:'Learning',duration:'37 min',title:'Professional Animal-Assisted Wellness Therapy Program',show:'Rhodes Wellness Podcast',text:'Carla Webb on equine-facilitated learning, wellness and professional practice.'},
  {id:'4jWaISYMPIYTAJ9Ru8hj6v',cat:'Evidence',duration:'50 min',title:'Science behind equine-assisted learning & mental health',show:'Horse Power',text:'Shannon Knapp on research, mental health, HeartMath claims and the importance of scope of practice.'},
  {id:'1Ro2BaUCDGNuS7jctksmR7',cat:'Self-awareness',duration:'1 h 25',title:'The Wisdom of Horses: Healing, Self Love & Sovereignty',show:'Self Love Podcast',text:'Australian equine-assisted therapist Noni Boon on self-awareness, personal change and horses.'},
  {id:'6lyfieL25pLG3vilBOxavd',cat:'Introduction',duration:'26 min',title:'Healing with horses',show:'The Conversation',text:'A concise discussion with women using horses in physical and mental-health work.'},
  {id:'47rJ52lwBSxvUC7CC5TZrX',cat:'Experiential',duration:'56 min',title:'The Healing Power of Animals: Equine Therapy',show:'HEAL with Kelly',text:'Kate Neligan discusses equine therapy alongside spiritual-psychology ideas. Treat stronger energetic claims as personal or model-based rather than settled science.'},
  {id:'2MWpBfQ6UnI90lTVEwdi8I',cat:'Programs',duration:'54 min',title:'Kingman’s Healing Hooves',show:'Horses in the Morning',text:'An equine-assisted therapy nonprofit supporting veterans, cancer survivors and others.'},
  {id:'05kJfYDSI8S6jmKBl0yp63',cat:'Connection',duration:'1 h 56',title:'Warwick Schiller on Attunement, Connection & Trust',show:'Equine Assisted World',text:'Attunement, connection, trust and nervous-system-aware horsemanship.'},
  {id:'3ug9FRDuFC8oG8ZJBQ6jjN',cat:'Australia',duration:'1 h 38',title:'Heather Lucass',show:'The Journey On Podcast',text:'Brisbane psychotherapist Heather Lucass on creating safe space for healing in the presence of horses.'},
  {id:'3IhCmHFNJLrmcVv1hcwWLX',cat:'Connection',duration:'1 h 44',title:'Warwick Schiller — Attuned Horsemanship',show:'Equine Assisted World',text:'A longer discussion of attunement and what people can learn about themselves through horses.'},
  {id:'0yRVWxonKdGxEHILVBxKdG',cat:'Relationships',duration:'2 h 12',title:'Kim Barthel — Relationship Matters',show:'Equine Assisted World',text:'Neuroscience, safety, trauma and the power of relationships.'},
  {id:'0aIJPnCQAHCiHESsEpUNih',cat:'Body awareness',duration:'2 h',title:'Mary Wanless on Rider Biomechanics, Flow & Feel',show:'Equine Assisted World',text:'More horsemanship-adjacent, but useful for body awareness, feel and embodied attention.'},
  {id:'4tLu6sNdGk0xFFuGi3NSZu',cat:'Nervous system',duration:'1 h 28',title:'Understanding the Power of the Nervous System — Warwick Schiller',show:'Holistic Horsemanship & Husbandry',text:'Nervous-system regulation, emotional awareness and the shift from correcting behaviour to understanding it.'},
  {id:'5DmetZvAMl1FWqZGSvXEVB',cat:'PTSD',duration:'47 min',title:'Nature’s Healers — The Transformative Power of Horses',show:'Hometown Hero Outdoors',text:'Sally Mixon discusses equine work with military personnel and first responders experiencing PTSD, trauma, anxiety and depression.'}
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

const featured = document.querySelector('.featured-player');
const featuredTitle = featured.querySelector('h3');
const featuredText = featured.querySelector('p');
const featuredIframe = featured.querySelector('iframe');
const featuredOpen = featured.querySelector('.button.primary');
const featuredEpisodeLink = featured.querySelector('.text-link');
let currentEpisode = 0;

function spotifyUrl(ep){ return `https://open.spotify.com/episode/${ep.id}`; }
function playEpisode(index, scroll = true) {
  currentEpisode = index;
  const ep = episodes[index];
  featuredTitle.textContent = ep.title;
  featuredText.textContent = `${ep.duration} · ${ep.show}. ${ep.text}`;
  featuredIframe.title = `Spotify episode: ${ep.title}`;
  featuredIframe.src = `https://open.spotify.com/embed/episode/${ep.id}?theme=0`;
  featuredOpen.href = spotifyUrl(ep);
  featuredEpisodeLink.href = spotifyUrl(ep);
  if (scroll) document.getElementById('listen').scrollIntoView({behavior:'smooth', block:'start'});
  document.querySelectorAll('.podcast-card').forEach((card,i)=>card.classList.toggle('playing', i===index));
}

function differentEpisode(){
  let next = currentEpisode;
  while (next === currentEpisode && episodes.length > 1) next = Math.floor(Math.random()*episodes.length);
  playEpisode(next, false);
}

const podcastGrid = document.getElementById('podcastGrid');
podcastGrid.insertAdjacentHTML('beforebegin', `
  <div class="podcast-bank-head">
    <button class="button shuffle" id="shufflePodcast">🎧 Listen to different horse therapy podcast</button>
    <div class="podcast-tools">
      <input id="podcastSearch" class="search" type="search" placeholder="Search 25 episodes…" aria-label="Search podcast episodes">
      <select id="podcastFilter" aria-label="Filter podcast episodes"><option>All topics</option></select>
    </div>
  </div>
  <p class="podcast-count" id="podcastCount"></p>
`);

const podcastSearch = document.getElementById('podcastSearch');
const podcastFilter = document.getElementById('podcastFilter');
const podcastCount = document.getElementById('podcastCount');
const episodeCats = [...new Set(episodes.map(e=>e.cat))].sort();
podcastFilter.insertAdjacentHTML('beforeend', episodeCats.map(c=>`<option>${c}</option>`).join(''));

document.getElementById('shufflePodcast').addEventListener('click', differentEpisode);

function renderPodcasts(){
  const q = podcastSearch.value.trim().toLowerCase();
  const cat = podcastFilter.value;
  const visible = episodes.map((ep,index)=>({...ep,index})).filter(ep=>{
    const matchCat = cat==='All topics' || ep.cat===cat;
    const matchQ = !q || `${ep.title} ${ep.show} ${ep.text} ${ep.cat}`.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  podcastCount.textContent = `${visible.length} directly playable episode${visible.length===1?'':'s'}`;
  podcastGrid.innerHTML = visible.map(ep=>`
    <article class="podcast-card ${ep.index===currentEpisode?'playing':''}">
      <div class="meta">${ep.cat} · ${ep.duration}</div>
      <h3>${ep.title}</h3>
      <p><strong>${ep.show}</strong><br>${ep.text}</p>
      <div class="podcast-actions">
        <button class="play-here" data-episode="${ep.index}">▶ Play here</button>
        <a href="${spotifyUrl(ep)}" target="_blank" rel="noopener">Open Spotify ↗</a>
      </div>
    </article>
  `).join('');
}
podcastGrid.addEventListener('click',e=>{
  const btn=e.target.closest('.play-here');
  if(btn) playEpisode(Number(btn.dataset.episode));
});
podcastSearch.addEventListener('input',renderPodcasts);
podcastFilter.addEventListener('change',renderPodcasts);
renderPodcasts();

const resourceGrid = document.getElementById('resourceGrid');
const resourceSearch = document.getElementById('resourceSearch');
const filterRow = document.getElementById('filterRow');
let activeFilter = 'All';
const categories = ['All', ...new Set(resources.map(r => r.cat))];
filterRow.innerHTML = categories.map(cat => `<button class="filter ${cat === 'All' ? 'active' : ''}" data-cat="${cat}">${cat}</button>`).join('');
function renderResources() {
  const q = resourceSearch.value.trim().toLowerCase();
  const visible = resources.filter(r => (activeFilter === 'All' || r.cat === activeFilter) && (!q || `${r.cat} ${r.title} ${r.text}`.toLowerCase().includes(q)));
  resourceGrid.innerHTML = visible.length ? visible.map(r => `<a class="resource-card" href="${r.href}" target="_blank" rel="noopener"><span class="tag">${r.cat}</span><h3>${r.title}</h3><p>${r.text}</p><span class="arrow">Open resource ↗</span></a>`).join('') : '<p class="muted">No resources match that search.</p>';
}
filterRow.addEventListener('click', event => { const button=event.target.closest('.filter'); if(!button)return; activeFilter=button.dataset.cat; document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===button)); renderResources(); });
resourceSearch.addEventListener('input',renderResources);
renderResources();

const menuBtn=document.getElementById('menuBtn');
const mobileNav=document.getElementById('mobileNav');
menuBtn.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
mobileNav.addEventListener('click',e=>{if(e.target.matches('a')){mobileNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}});
