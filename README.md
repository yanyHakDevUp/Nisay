# ស្រលាញ់គេម្នាក់ឯងដែរមែន? 💗

A premium, romantic Khmer music player built with **pure HTML5, CSS3, and vanilla ES6 JavaScript** — no frameworks. Glassmorphism UI, floating hearts, twinkling stars, a spinning album disc, a live Web Audio equalizer, and a real-time **karaoke lyric system** that highlights each line in sync with the song's timeline, just like YouTube Music / Spotify.

## ✨ Features

- Play / Pause, Previous, Next, Shuffle, Repeat
- Draggable seek bar with buffered-progress indicator
- Volume slider + mute toggle
- Current time / total duration display
- Spinning circular album cover with a glowing gradient ring (spins while playing, stops when paused)
- Live equalizer bars around the album art, driven by the **Web Audio API**
- Karaoke-style lyric system: one line at a time, auto-synced to `audio.currentTime`, with a gradient "wipe" fill animation that sweeps across the current line as it's sung — faded preview of the previous/next line above and below
- `.lrc` lyric file support with a built-in parser (`[mm:ss.xx]` timestamps), plus an in-code fallback lyric array so the demo still works if the file can't be fetched (e.g. opening `index.html` straight from disk in a browser that blocks local `fetch`)
- Floating heart particles, twinkling star field, animated gradient background, soft glow blur effects
- Fully responsive (mobile + desktop), keyboard shortcuts (space = play/pause, ← / → = seek), graceful fallbacks if the audio or cover file is missing
- Structured playlist array in `script.js` — add more songs in seconds

## 📁 Project structure

```
khmer-love-song-player/
│
├── index.html          # Markup / structure
├── style.css            # Romantic glassmorphism design system
├── script.js             # Player logic, LRC parser, karaoke sync, visualizer
│
├── assets/
│   ├── cover.jpg         # Album artwork (placeholder included — replace with your own)
│   ├── song.mp3           # Audio track (placeholder SILENT track included — replace with your own)
│   └── lyrics.lrc          # Karaoke lyric timestamps
│
└── README.md
```

## 🚀 Getting started

1. **Replace the placeholder assets** in `assets/`:
   - `song.mp3` — your actual song (the included file is a silent placeholder just so the player works out of the box).
   - `cover.jpg` — your actual album art (a generated placeholder is included).
   - `lyrics.lrc` — already filled in with the full Khmer love song lyric, timed to match the placeholder track's length. Adjust timestamps to match your real audio.

2. **Open the site.**
   - Easiest: just double-click `index.html`. Most browsers will play the audio fine this way.
   - Recommended: serve it with a tiny local server so `fetch()` of `lyrics.lrc` and the Web Audio API work everywhere without restriction:
     ```bash
     # from inside khmer-love-song-player/
     python3 -m http.server 8000
     # then open http://localhost:8000
     ```

3. Press **Play** 💗 — the album art starts spinning, the equalizer reacts to the music, and the lyrics change line by line in sync with the timeline.

## 🎤 How the karaoke sync works

`script.js` compares `audio.currentTime` against an array of `{ time, text }` lyric objects on every `timeupdate` tick:

```js
const lyrics = [
  { time: 0,  text: "អូនឮទេមេឃរលឹមនេះមើលទៅហាក់ស្រស់ថ្លា" },
  { time: 8,  text: "យើងអបសោបគ្នាក្រោមពន្លឺដារា" },
  { time: 15, text: "អូនញញឹមមេត្រាយើងចរចាក្តីស្នេហ៍ពិត" },
];
```

It finds the last lyric whose `time` has already passed, displays it as the current line (with faded previews of the line before and after), and animates a gradient "wipe" across the text based on how far along we are toward the *next* line's timestamp — the same sweeping highlight effect you see in YouTube Music karaoke.

This same array can be loaded automatically from a `.lrc` file. The built-in parser reads lines like:

```
[00:08.00]យើងអបសោបគ្នា ក្រោមពន្លឺដារា
```

...and converts `mm:ss.xx` into seconds, sorts everything by time, and hands it to the same sync engine.

## 🎵 Adding more songs

Open `script.js` and extend the `playlist` array at the top of the file:

```js
const playlist = [
  {
    title: 'My Baby 💗',
    artist: 'Khmer Romantic Song',
    cover: 'assets/cover.jpg',
    src: 'assets/song.mp3',
    lrc: 'assets/lyrics.lrc',
  },
  {
    title: 'Your Next Song',
    artist: 'Artist Name',
    cover: 'assets/cover2.jpg',
    src: 'assets/song2.mp3',
    lrc: 'assets/lyrics2.lrc',
  },
];
```

Next / Previous / Shuffle / Repeat already work across the whole list — nothing else to change.

## 🎨 Customizing the design

All colors, fonts, and spacing are defined as CSS custom properties at the top of `style.css`:

```css
:root{
  --bg-deep:#150720;      /* background */
  --rose:#ff6fa8;          /* primary accent */
  --violet:#a855f7;         /* secondary accent */
  --gold:#ffd76a;            /* karaoke highlight */
  --font-khmer-display:'Moul','Battambang',serif;
  --font-khmer-body:'Battambang','Khmer OS',sans-serif;
}
```

Change these values to re-theme the whole player in seconds.

## 🧩 Browser notes

- The equalizer uses the **Web Audio API** (`AudioContext` + `AnalyserNode`). It initializes on the first Play tap (required by browser autoplay policy) and gracefully falls back to a gentle ambient pulse animation if it can't attach.
- If `lyrics.lrc` can't be fetched (some browsers restrict `fetch()` over the `file://` protocol), the player automatically uses the identical lyric data embedded directly in `script.js`, so karaoke sync still works.

Made with 💗 for someone special.
