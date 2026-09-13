# Podcast Integration TODO

**Decision:** Add / continue.
**Topic bank:** equine-assisted therapy, horse behaviour, anxiety, assertiveness, emotional regulation, trauma-informed practice.

## TODO
- [ ] Maintain a curated bank of about 25 high-quality Spotify podcast episodes.
- [ ] Add a collapsed bottom dock: **🎧 Listen to a different horse-therapy podcast**.
- [ ] One tap should choose/load another episode, remember the current/recent episodes in `localStorage`, and avoid immediate repeats.
- [ ] Use Spotify embed/deep links, but do not assume browser autoplay will be permitted.
- [ ] Show title, show name, duration/topic tags, and an **Open in Spotify** action.
- [ ] Keep the episode list data-driven and easy to refresh without changing UI code.
- [ ] Make the dock mobile-friendly, keyboard accessible, and screen-reader labelled.
- [ ] Add tests for episode selection, persistence, empty/broken entries, and mobile layout.
- [ ] Prefer evidence-based and practitioner-quality material; avoid magical claims about horses diagnosing people.

## Shared direction
This should follow the reusable **Josh Podcast Dock** pattern used across Josh's apps, while remaining fully usable as a standalone app.
