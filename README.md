# Instrument Tuner

A lightweight React single-page tuner for ukulele and other string instruments. The app uses one routed page for the home screen and 14 instrument tuner views with real-time microphone pitch detection, a cents meter, pitch trail notes, and an in-tune chime.

## Live Site

Use it here: [https://magic-bunny.github.io/ukelele-helper/](https://magic-bunny.github.io/ukelele-helper/)

![Instrument Tuner screenshot](docs/screenshot.png)

## Supported Instruments

- Guitar
- Guitar 7-string
- Guitar 12-string
- Bass Guitar
- Bass Guitar 5-string
- Ukulele
- Violin/Fiddle
- Viola
- Cello
- Cavaquinho
- Mandolin
- Balalaika
- Banjo 4-string
- Banjo 5-string

## Features

- React single-page app with hash routes for GitHub Pages
- Separate tuner view per instrument without separate duplicated HTML pages
- Real-time microphone pitch detection using the Web Audio API
- Automatic string matching for each instrument tuning
- Manual target lock by tapping a string button
- Visual cents meter with flat/sharp guidance
- Downward scrolling pitch trail notes
- In-tune check icon and short chime
- Input level indicator
- Mobile-first responsive interface

## Usage

1. Open the [live site](https://magic-bunny.github.io/ukelele-helper/).
2. Choose an instrument from the home page.
3. Allow microphone access when prompted.
4. Play one open string at a time.
5. Follow the meter and text guidance:
   - `Flat`: tighten the string.
   - `Sharp`: loosen the string.
   - `In tune`: the string is within the target range.
6. Tap a string button to lock the tuner to that target. Tap it again to return to automatic matching.

## Local Development

```bash
npm install
npm run dev
```

Build for GitHub Pages:

```bash
npm run build
```

## Browser Notes

- Works best in modern Chromium, Safari, and Firefox browsers.
- Microphone permission is required.
- HTTPS or `localhost` may be required for microphone access.
- For the most stable reading, tune in a quiet room and play one string clearly.

## Project Structure

```text
.
├── docs/
│   └── screenshot.png  # Site screenshot for README
├── public/             # Compatibility redirects for old instrument URLs
├── src/
│   ├── instruments.js  # Instrument tunings and display metadata
│   ├── main.jsx        # React app, tuner logic, and hash routes
│   └── styles.css      # App styling and instrument drawings
├── index.html          # Vite entry point
├── ukulele.html        # Preserved legacy stable ukulele page
└── README.md           # Project documentation
```

## License

No license has been specified yet.
