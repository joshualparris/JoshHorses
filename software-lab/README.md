# Horse Therapy Software Explorer

This folder contains a **clean-room, original interactive explanation** of three horse-related software/web projects reviewed for JoshHorses:

- `LucianoWagner/CedicaProject`
- `Angakess/horse-therapy-center`
- the uploaded `hlasKonskehoSrdce.rar` static website archive

## Copyright approach

Neither GitHub repository showed a repository-level licence file in the reviewed root. The uploaded archive also contained no licence notice in the HTML, CSS or JavaScript inspected.

For that reason this demo does **not** copy source code, templates, text, branding or images from those projects. It only demonstrates architecture and workflow ideas in newly written HTML/CSS/JavaScript.

Publicly visible source code is normally still protected by copyright unless a licence or explicit permission grants reuse. Dependency-level licences or an icon's licence do not automatically license an entire repository.

## What the demo shows

### CEDICA Project

The reviewed README describes a multi-tier system with:

- Flask + Jinja2 private administration UI
- Vue 3 public portal
- PostgreSQL + SQLAlchemy
- MinIO object storage
- rider/client records
- horse records
- staff/team records
- payments and charges
- publications/articles
- reports and dashboards
- authentication, role-based permissions and Google OAuth

The public Vue router exposes Home, Contact and News routes.

### Horse Therapy Center

The reviewed README describes:

- Flask administration application
- Vue 3 public portal
- employee management
- horse management
- payment management
- client management
- statistics/reporting
- public news and contact functionality
- PostgreSQL persistence

Its public Vue router also exposes Home, Contact and News routes.

### hlasKonskehoSrdce archive

The uploaded RAR was inspected directly. It contains:

- `kone.html`
- `styles.css`
- `script.js`
- JPG/PNG/SVG image assets

It is a static responsive brochure-style site. The JavaScript only toggles the mobile navigation menu; there is no backend, database or authentication.

## Purpose

This is for learning, comparison and prototyping. It is not legal advice and it is not a redistributed copy of any of the reviewed projects.
