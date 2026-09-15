# Software patterns worth learning from

JoshHorses is primarily a participant-facing educational resource, not a clinic-management system. Still, reviewing other horse-therapy software surfaced useful patterns that can be reimplemented independently without copying unlicensed code.

## Public portal patterns

Useful public-facing features include:

- clear Home / Resources / Contact style navigation;
- a news or resource stream;
- mobile-first layouts;
- concise service explanations;
- strong separation between public education and private participant information.

## Private/admin patterns

Institutional systems commonly need:

- participant or rider records;
- horse profiles and workload/welfare notes;
- staff/team records;
- session records;
- payments/charges;
- content management;
- reports and dashboards;
- role-based permissions;
- document storage.

For JoshHorses, any future private functionality should keep completed therapy/session notes out of the public repository. Blank templates and general educational material can remain public.

## JoshHorses-specific product direction

The best fit for this project is a participant companion built around:

- pre-session grounding/orienting;
- one intention for the session;
- body → emotion → impulse → action reflection;
- anxiety and assertiveness practice;
- distinguishing clarity from force;
- respecting both participant and horse boundaries;
- brief post-session reflection;
- one real-life transfer action;
- optional private progress tracking over time;
- evidence and horse-welfare references nearby, without overstating what horse behaviour means.

## Copyright boundary

The reviewed third-party projects did not show repository-level licences in the roots inspected. Their public source can be studied, but JoshHorses should not copy or publicly redeploy that code, branding, templates, text or imagery without permission.

The `software-lab/` demo therefore uses original code and synthetic content to explain architecture/workflows only.

See also:

- `../archive/software-and-copyright-review-2026-09-15.md`
- `../COPYRIGHT-AND-PRIVACY.md`
- `../software-lab/README.md`
