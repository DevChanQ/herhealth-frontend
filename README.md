# HerHealth · Cycle Tracker

A Vue 3 implementation of the supplied **Cycle Tracker Mobile.html** design, using Vite and locally bundled, licensed fonts. The seven application screens are native Vue components, including the original SVG charts and heatmaps; no embedded HTML frames or React runtime are used.

## Development

Requires Node.js 20.19+ or 22.12+ (verified with Node 24).

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
npm test
```

Browser tests use Chromium at `/usr/bin/chromium`. Override `CHROMIUM_PATH` for another installed Chromium executable. Playwright starts the Vite server automatically if needed.

## Implemented workflows

- Patterns: three/six/all recorded cycles, trend visibility filters, cycle table, and links to detailed heatmaps and overlap charts. All time currently has the same six demo cycles as the six-cycle view.
- Cycle: month and day selection, today navigation, period/symptom/emotion logging, diary entries, mood and favourites. Calendar edits persist in this browser's local storage under `herhealth-cycle-log-v1`.
- GP summary: solution selection, medication addition/removal, daily-life impact and notes, generated summary, optional sample NHS data, native share/clipboard, text download and browser print/save as PDF. Questionnaire answers remain in memory while navigating and reset on reload.
- Guidance: supplied information and support links, plus interactive reminder preferences. Preferences are for demonstration; notifications are not scheduled.
- Hash routes: `#patterns`, `#calendar`, `#questions`, `#summary`, `#symptoms`, `#overlaps`, `#guidance`; browser back/forward supported.

The charts, guidance and historical cycle information are supplied **sample data**. New calendar entries do not recalculate historical insights. NHS sync, clinician delivery, prescriptions, accounts and a backend are not connected. Sharing is an explicit browser action; the app never automatically sends health information. The PDF action opens the browser print dialog; choose “Save as PDF”.

Font licenses supplied with the design are retained in `public/fonts/LICENSE.txt`.
