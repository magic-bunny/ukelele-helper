# Ukulele Helper

A lightweight, single-page ukulele tuner that runs directly in the browser. It listens through the microphone, detects the pitch of an open string, and shows whether the string is flat, sharp, or in tune.

## Live Site

Use it here: [https://magic-bunny.github.io/ukelele-helper/](https://magic-bunny.github.io/ukelele-helper/)

![Ukulele Helper screenshot](docs/screenshot.png)

## Features

- Real-time microphone pitch detection using the Web Audio API
- Automatic string matching for standard ukulele tuning
- High G and Low G mode switching
- Manual target lock for C, G, E, and A strings
- Visual cents meter with flat/sharp guidance
- Input level indicator
- Mobile-first responsive interface
- No build step and no external dependencies

## Tuning Targets

| String | High G Mode | Low G Mode |
| --- | --- | --- |
| G | G4 / 392.00 Hz | G3 / 196.00 Hz |
| C | C4 / 261.63 Hz | C4 / 261.63 Hz |
| E | E4 / 329.63 Hz | E4 / 329.63 Hz |
| A | A4 / 440.00 Hz | A4 / 440.00 Hz |

## Usage

1. Open the [live site](https://magic-bunny.github.io/ukelele-helper/) or `index.html` in a browser.
2. Allow microphone access when prompted.
3. Play one open string at a time.
4. Follow the meter and text guidance:
   - `Flat`: tighten the string.
   - `Sharp`: loosen the string.
   - `In tune`: the string is within the target range.
5. Tap a string button to lock the tuner to that target. Tap it again to return to automatic matching.
6. Use the High G / Low G switch for the G string setup on your instrument.

## Local Development

Because microphone access usually requires a secure context, run the page from `localhost` instead of opening the file directly if your browser blocks the microphone.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
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
├── index.html          # App markup, styles, and JavaScript
└── README.md           # Project documentation
```

## License

No license has been specified yet.
