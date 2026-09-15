# Horse-therapy software, copyright and reuse review — 15 September 2026

This note consolidates the discussion about third-party horse-therapy software/projects and how JoshHorses should learn from them without copying material that is not licensed for reuse.

## Projects reviewed

### LucianoWagner/CedicaProject

Public repository: https://github.com/LucianoWagner/CedicaProject

The project describes an institutional management system for CEDICA, an equine-assisted therapy organisation. Its architecture includes:

- private Flask + Jinja2 administration interface;
- Vue 3 public portal;
- PostgreSQL via SQLAlchemy;
- MinIO object storage;
- rider/client records;
- horse records;
- staff/team records;
- payments and charges;
- publications/articles;
- reports and dashboards;
- authentication, role-based permissions and Google OAuth.

The reviewed Vue router exposes Home, News and Contact routes.

No repository-level licence file was visible in the reviewed root. Individual dependencies or icons may carry licences, but those do not automatically license the complete repository.

### Angakess/horse-therapy-center

Public repository: https://github.com/Angakess/horse-therapy-center

This is another full-stack horse-therapy centre management system with:

- Flask administration application;
- Vue 3 public portal;
- PostgreSQL persistence;
- employee/team management;
- horse management;
- rider/client management;
- payments/charges;
- content/news;
- reporting/statistics.

Its public router also exposes Home, News and Contact routes. The production portal configuration points to a university-hosted backend, consistent with a deployed student/institutional project rather than a reusable library.

No repository-level licence file was visible in the reviewed root.

### hlasKonskehoSrdce archive

The uploaded RAR contained a small static responsive horse-services website with:

- `kone.html`;
- `styles.css`;
- `script.js`;
- local JPG/PNG/SVG image assets.

It is essentially a brochure site with navigation, hero/about/services/contact content and responsive styling. The JavaScript only toggles the mobile menu. There is no backend, database or authentication.

No licence notice was found in the inspected HTML/CSS/JavaScript, so the source and imagery should not be republished without permission.

## Copyright/reuse rule

Publicly viewable source code is still copyrighted unless a licence or explicit permission grants reuse. Therefore:

- reading, studying and comparing public repositories is fine;
- local evaluation is generally a separate question from redistribution;
- do not copy third-party source, templates, branding, text or images into JoshHorses without a suitable licence or permission;
- do not publicly redeploy an unlicensed third-party repository merely because its code is public;
- dependency-level licences do not automatically license the surrounding project;
- where an idea is useful, reimplement the underlying workflow or concept independently in original code.

This matches the repository-wide `COPYRIGHT-AND-PRIVACY.md` rule: link to legitimate originals, prefer summaries, and only mirror third-party material when redistribution rights are clear.

## Clean-room software explorer

A from-scratch interactive demo was created under `software-lab/` to explain the three reviewed projects without copying their source or images.

The explorer includes:

- project switching;
- clean-room public portal mocks;
- illustrative admin workflows;
- architecture diagrams;
- licence/copyright notes;
- links back to the original public GitHub repositories.

The demo uses synthetic data only and intentionally does not reproduce private or sensitive records.

## What JoshHorses can borrow as ideas

Useful product patterns that can be implemented independently include:

- clear separation between a public educational portal and private participant/admin information;
- horse profiles and welfare/workload records;
- participant/session records kept private rather than committed to public GitHub;
- structured session reflection and progress tracking;
- goals around anxiety, embodiment, boundaries and assertiveness;
- content/news/resource publishing;
- role-based access if a future multi-user practitioner version is ever built;
- reports that focus on participation, progress, horse workload and safety rather than making diagnostic claims about horse behaviour.

For the public JoshHorses app, the preferred emphasis remains participant education rather than institutional case-management: evidence, podcasts, welfare, session preparation, reflection and practical transfer into ordinary life.

## Related prior horse-therapy context

Earlier horse-therapy discussions already consolidated into this repository included:

- books and podcasts for equine-assisted psychotherapy/learning;
- a one-hour listening plan;
- anxiety, embodiment, boundaries and assertiveness as the main participant themes;
- the distinction between assertiveness and control;
- body → emotion → impulse → action as a session-awareness framework;
- avoiding over-interpretation of horse behaviour;
- horse welfare and agency as part of ethical practice;
- evidence described as promising but not definitive;
- privacy-safe handling of Gmail/Drive discoveries;
- Australian/Dubbo resources and practitioner-context links;
- historical AABAT/outdoor-therapy references to equine therapy and sector-wide resource mapping.

The repository should continue to treat experiential value, participant experience, practitioner claims and research findings as different kinds of evidence rather than blending them together.
