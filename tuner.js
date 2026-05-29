const INSTRUMENTS = {
  'guitar-6': {
    label: 'Guitar', brand: 'GUITAR', page: 'guitar-6.html', family: 'guitar', courses: 6,
    tunings: [{ id: 'standard', label: 'Standard', strings: [
      { key: 'E', note: 'E2', freq: 82.41, hint: 'String 6' },
      { key: 'A', note: 'A2', freq: 110.00, hint: 'String 5' },
      { key: 'D', note: 'D3', freq: 146.83, hint: 'String 4' },
      { key: 'G', note: 'G3', freq: 196.00, hint: 'String 3' },
      { key: 'B', note: 'B3', freq: 246.94, hint: 'String 2' },
      { key: 'E', note: 'E4', freq: 329.63, hint: 'String 1' }
    ] }]
  },
  'guitar-7': {
    label: 'Guitar 7-string', brand: 'GUITAR', page: 'guitar-7.html', family: 'guitar', courses: 7,
    tunings: [{ id: 'standard', label: 'Standard', strings: [
      { key: 'B', note: 'B1', freq: 61.74, hint: 'String 7' },
      { key: 'E', note: 'E2', freq: 82.41, hint: 'String 6' },
      { key: 'A', note: 'A2', freq: 110.00, hint: 'String 5' },
      { key: 'D', note: 'D3', freq: 146.83, hint: 'String 4' },
      { key: 'G', note: 'G3', freq: 196.00, hint: 'String 3' },
      { key: 'B', note: 'B3', freq: 246.94, hint: 'String 2' },
      { key: 'E', note: 'E4', freq: 329.63, hint: 'String 1' }
    ] }]
  },
  'guitar-12': {
    label: 'Guitar 12-string', brand: 'GUITAR', page: 'guitar-12.html', family: 'guitar', courses: 12,
    tunings: [{ id: 'standard', label: 'Standard', strings: [
      { key: 'E', note: 'E2', freq: 82.41, hint: 'Course 6 low' },
      { key: 'E', note: 'E3', freq: 164.81, hint: 'Course 6 octave' },
      { key: 'A', note: 'A2', freq: 110.00, hint: 'Course 5 low' },
      { key: 'A', note: 'A3', freq: 220.00, hint: 'Course 5 octave' },
      { key: 'D', note: 'D3', freq: 146.83, hint: 'Course 4 low' },
      { key: 'D', note: 'D4', freq: 293.66, hint: 'Course 4 octave' },
      { key: 'G', note: 'G3', freq: 196.00, hint: 'Course 3 low' },
      { key: 'G', note: 'G4', freq: 392.00, hint: 'Course 3 octave' },
      { key: 'B', note: 'B3', freq: 246.94, hint: 'Course 2 pair' },
      { key: 'B', note: 'B3', freq: 246.94, hint: 'Course 2 pair' },
      { key: 'E', note: 'E4', freq: 329.63, hint: 'Course 1 pair' },
      { key: 'E', note: 'E4', freq: 329.63, hint: 'Course 1 pair' }
    ] }]
  },
  'bass-4': {
    label: 'Bass Guitar', brand: 'BASS', page: 'bass-4.html', family: 'bass', courses: 4,
    tunings: [{ id: 'standard', label: 'Standard', strings: [
      { key: 'E', note: 'E1', freq: 41.20, hint: 'String 4' },
      { key: 'A', note: 'A1', freq: 55.00, hint: 'String 3' },
      { key: 'D', note: 'D2', freq: 73.42, hint: 'String 2' },
      { key: 'G', note: 'G2', freq: 98.00, hint: 'String 1' }
    ] }]
  },
  'bass-5': {
    label: 'Bass Guitar 5-string', brand: 'BASS', page: 'bass-5.html', family: 'bass', courses: 5,
    tunings: [{ id: 'standard', label: 'Standard', strings: [
      { key: 'B', note: 'B0', freq: 30.87, hint: 'String 5' },
      { key: 'E', note: 'E1', freq: 41.20, hint: 'String 4' },
      { key: 'A', note: 'A1', freq: 55.00, hint: 'String 3' },
      { key: 'D', note: 'D2', freq: 73.42, hint: 'String 2' },
      { key: 'G', note: 'G2', freq: 98.00, hint: 'String 1' }
    ] }]
  },
  violin: {
    label: 'Violin/Fiddle', brand: 'VIOLIN', page: 'violin.html', family: 'violin', courses: 4,
    tunings: [{ id: 'standard', label: 'Standard', strings: [
      { key: 'G', note: 'G3', freq: 196.00, hint: 'String 4' },
      { key: 'D', note: 'D4', freq: 293.66, hint: 'String 3' },
      { key: 'A', note: 'A4', freq: 440.00, hint: 'String 2' },
      { key: 'E', note: 'E5', freq: 659.25, hint: 'String 1' }
    ] }]
  },
  viola: {
    label: 'Viola', brand: 'VIOLA', page: 'viola.html', family: 'violin', courses: 4,
    tunings: [{ id: 'standard', label: 'Standard', strings: [
      { key: 'C', note: 'C3', freq: 130.81, hint: 'String 4' },
      { key: 'G', note: 'G3', freq: 196.00, hint: 'String 3' },
      { key: 'D', note: 'D4', freq: 293.66, hint: 'String 2' },
      { key: 'A', note: 'A4', freq: 440.00, hint: 'String 1' }
    ] }]
  },
  cello: {
    label: 'Cello', brand: 'CELLO', page: 'cello.html', family: 'cello', courses: 4,
    tunings: [{ id: 'standard', label: 'Standard', strings: [
      { key: 'C', note: 'C2', freq: 65.41, hint: 'String 4' },
      { key: 'G', note: 'G2', freq: 98.00, hint: 'String 3' },
      { key: 'D', note: 'D3', freq: 146.83, hint: 'String 2' },
      { key: 'A', note: 'A3', freq: 220.00, hint: 'String 1' }
    ] }]
  },
  cavaquinho: {
    label: 'Cavaquinho', brand: 'CAVAQ', page: 'cavaquinho.html', family: 'small-guitar', courses: 4,
    tunings: [{ id: 'standard', label: 'DGBD', strings: [
      { key: 'D', note: 'D4', freq: 293.66, hint: 'String 4' },
      { key: 'G', note: 'G4', freq: 392.00, hint: 'String 3' },
      { key: 'B', note: 'B4', freq: 493.88, hint: 'String 2' },
      { key: 'D', note: 'D5', freq: 587.33, hint: 'String 1' }
    ] }]
  },
  mandolin: {
    label: 'Mandolin', brand: 'MANDO', page: 'mandolin.html', family: 'mandolin', courses: 8,
    tunings: [{ id: 'standard', label: 'Standard', strings: [
      { key: 'G', note: 'G3', freq: 196.00, hint: 'G course' },
      { key: 'G', note: 'G3', freq: 196.00, hint: 'G course' },
      { key: 'D', note: 'D4', freq: 293.66, hint: 'D course' },
      { key: 'D', note: 'D4', freq: 293.66, hint: 'D course' },
      { key: 'A', note: 'A4', freq: 440.00, hint: 'A course' },
      { key: 'A', note: 'A4', freq: 440.00, hint: 'A course' },
      { key: 'E', note: 'E5', freq: 659.25, hint: 'E course' },
      { key: 'E', note: 'E5', freq: 659.25, hint: 'E course' }
    ] }]
  },
  balalaika: {
    label: 'Balalaika', brand: 'BALA', page: 'balalaika.html', family: 'balalaika', courses: 3,
    tunings: [{ id: 'prima', label: 'Prima', strings: [
      { key: 'E', note: 'E4', freq: 329.63, hint: 'String 3' },
      { key: 'E', note: 'E4', freq: 329.63, hint: 'String 2' },
      { key: 'A', note: 'A4', freq: 440.00, hint: 'String 1' }
    ] }]
  },
  'banjo-4': {
    label: 'Banjo 4-string', brand: 'BANJO', page: 'banjo-4.html', family: 'banjo', courses: 4,
    tunings: [{ id: 'tenor', label: 'Tenor', strings: [
      { key: 'C', note: 'C3', freq: 130.81, hint: 'String 4' },
      { key: 'G', note: 'G3', freq: 196.00, hint: 'String 3' },
      { key: 'D', note: 'D4', freq: 293.66, hint: 'String 2' },
      { key: 'A', note: 'A4', freq: 440.00, hint: 'String 1' }
    ] }]
  },
  'banjo-5': {
    label: 'Banjo 5-string', brand: 'BANJO', page: 'banjo-5.html', family: 'banjo', courses: 5,
    tunings: [{ id: 'open-g', label: 'Open G', strings: [
      { key: 'g', note: 'G4', freq: 392.00, hint: '5th string' },
      { key: 'D', note: 'D3', freq: 146.83, hint: 'String 4' },
      { key: 'G', note: 'G3', freq: 196.00, hint: 'String 3' },
      { key: 'B', note: 'B3', freq: 246.94, hint: 'String 2' },
      { key: 'D', note: 'D4', freq: 293.66, hint: 'String 1' }
    ] }]
  }
};

INSTRUMENTS.guitar = INSTRUMENTS['guitar-6'];
INSTRUMENTS.bass = INSTRUMENTS['bass-4'];
INSTRUMENTS.ukulele = { label: 'Ukulele', brand: 'UKULELE', page: 'ukulele.html', family: 'small-guitar', courses: 4, accent: '#80dd00', tunings: [
  { id: 'high-g', label: 'High G', strings: [
    { key: 'G', note: 'G4', freq: 392.00, hint: 'String 4, High G' },
    { key: 'C', note: 'C4', freq: 261.63, hint: 'String 3' },
    { key: 'E', note: 'E4', freq: 329.63, hint: 'String 2' },
    { key: 'A', note: 'A4', freq: 440.00, hint: 'String 1' }
  ] },
  { id: 'low-g', label: 'Low G', strings: [
    { key: 'G', note: 'G3', freq: 196.00, hint: 'String 4, Low G' },
    { key: 'C', note: 'C4', freq: 261.63, hint: 'String 3' },
    { key: 'E', note: 'E4', freq: 329.63, hint: 'String 2' },
    { key: 'A', note: 'A4', freq: 440.00, hint: 'String 1' }
  ] }
] };
INSTRUMENTS['double-bass'] = { label: 'Double Bass', brand: 'BASS', page: 'double-bass.html', family: 'cello', courses: 4, tunings: [{ id: 'standard', label: 'Standard', strings: [
  { key: 'E', note: 'E1', freq: 41.20, hint: 'String 4' },
  { key: 'A', note: 'A1', freq: 55.00, hint: 'String 3' },
  { key: 'D', note: 'D2', freq: 73.42, hint: 'String 2' },
  { key: 'G', note: 'G2', freq: 98.00, hint: 'String 1' }
] }] };
INSTRUMENTS.bouzouki = { label: 'Bouzouki', brand: 'BOUZ', page: 'bouzouki.html', family: 'mandolin', courses: 8, tunings: [{ id: 'irish', label: 'GDAD', strings: [
  { key: 'G', note: 'G2', freq: 98.00, hint: 'G course' },
  { key: 'G', note: 'G2', freq: 98.00, hint: 'G course' },
  { key: 'D', note: 'D3', freq: 146.83, hint: 'D course' },
  { key: 'D', note: 'D3', freq: 146.83, hint: 'D course' },
  { key: 'A', note: 'A3', freq: 220.00, hint: 'A course' },
  { key: 'A', note: 'A3', freq: 220.00, hint: 'A course' },
  { key: 'D', note: 'D4', freq: 293.66, hint: 'D course' },
  { key: 'D', note: 'D4', freq: 293.66, hint: 'D course' }
] }] };
INSTRUMENTS.charango = { label: 'Charango', brand: 'CHAR', page: 'charango.html', family: 'small-guitar', courses: 10, tunings: [{ id: 'standard', label: 'GCEAE', strings: [
  { key: 'G', note: 'G4', freq: 392.00, hint: 'G course' },
  { key: 'G', note: 'G4', freq: 392.00, hint: 'G course' },
  { key: 'C', note: 'C5', freq: 523.25, hint: 'C course' },
  { key: 'C', note: 'C5', freq: 523.25, hint: 'C course' },
  { key: 'E', note: 'E5', freq: 659.25, hint: 'E course' },
  { key: 'E', note: 'E4', freq: 329.63, hint: 'E course' },
  { key: 'A', note: 'A4', freq: 440.00, hint: 'A course' },
  { key: 'A', note: 'A4', freq: 440.00, hint: 'A course' },
  { key: 'E', note: 'E5', freq: 659.25, hint: 'E course' },
  { key: 'E', note: 'E5', freq: 659.25, hint: 'E course' }
] }] };

const instrumentId = document.body.dataset.instrument || new URLSearchParams(location.search).get('instrument') || 'ukulele';
const instrument = INSTRUMENTS[instrumentId] || INSTRUMENTS.ukulele;
document.body.classList.add(`instrument-${instrumentId}`);
if (instrument.family) document.body.classList.add(`family-${instrument.family}`);
document.title = `${instrument.label} Tuner`;
document.documentElement.style.setProperty('--green', instrument.accent || '#80dd00');

const tuningSwitch = document.querySelector('#tuningSwitch');
const stringButtonsHost = document.querySelector('#stringButtons');
const instrumentTitle = document.querySelector('#instrumentTitle');
const tuningTitle = document.querySelector('#tuningTitle');
const brandText = document.querySelector('#brandText');
const noteName = document.querySelector('#noteName');
const targetText = document.querySelector('#targetText');
const freqText = document.querySelector('#freqText');
const centsText = document.querySelector('#centsText');
const direction = document.querySelector('#direction');
const needle = document.querySelector('#needle');
const readout = document.querySelector('.readout');
const tuneIcon = document.querySelector('#tuneIcon');
const levelBars = [...document.querySelectorAll('.volume-signal span')];
const scaleTicks = document.querySelector('#scaleTicks');
const pitchTrail = document.querySelector('#pitchTrail');
const trailContext = pitchTrail.getContext('2d');
const headstock = document.querySelector('.headstock');

let audioContext;
let analyser;
let sourceNode;
let gainNode;
let mediaStream;
let rafId;
let buffer;
let manualString = null;
let tuningIndex = 0;
let stringSet = instrument.tunings[0].strings;
let stringCards = [];
let recentPitches = [];
let lastGoodPitchAt = 0;
let tuneChimeArmed = true;
let lastChimeAt = 0;
let lastChimeTarget = null;
let lastValidPitchAt = 0;
let lastTrailFrameAt = 0;
let lastRms = 0;
let activeTrailSegment = null;
let trailNotes = [];
let trailWidth = 0;
let trailHeight = 0;
let trailDpr = 1;
let minFrequency = 120;
let maxFrequency = 720;
const MIN_INPUT_RMS = 0.0009;
const YIN_THRESHOLD = 0.24;
const MAX_YIN_VALUE = 0.58;
const PITCH_WINDOW = 3;
const METER_RANGE_CENTS = 100;
const METER_FADE_CENTS = 50;
const METER_TRAVEL_PERCENT = 48;
const TICK_STEP_CENTS = 5;
const PREAMP_GAIN = 2.2;
const SUSTAIN_HOLD_MS = 2600;
const CHIME_COOLDOWN_MS = 1400;
const TRAIL_SPEED_PX_PER_MS = 0.024;
const TRAIL_NOTE_LENGTH = 20;
const TRAIL_MERGE_CENTS = 5;
const TRAIL_COLORS = { green: '#80dd00', yellow: '#ffd24a', red: '#ff4d3f' };
let tickMarks = [];

function centsOff(frequency, target) {
  return 1200 * Math.log2(frequency / target);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function meterPosition(cents) {
  const limited = clamp(cents, -METER_RANGE_CENTS, METER_RANGE_CENTS);
  return 50 + limited * (METER_TRAVEL_PERCENT / METER_RANGE_CENTS);
}

function updateFrequencyBounds() {
  const freqs = instrument.tunings.flatMap((tuning) => tuning.strings.map((item) => item.freq));
  minFrequency = Math.max(40, Math.min(...freqs) * 0.72);
  maxFrequency = Math.max(...freqs) * 1.32;
}

function buildScaleTicks() {
  const fragment = document.createDocumentFragment();
  for (let cents = -METER_RANGE_CENTS; cents <= METER_RANGE_CENTS; cents += TICK_STEP_CENTS) {
    const tick = document.createElement('span');
    const distance = Math.abs(cents) / METER_RANGE_CENTS;
    const opacity = 0.06 + (1 - Math.pow(distance, 1.65)) * 0.64;
    tick.dataset.cents = String(cents);
    tick.className = 'minor';
    if (cents % 25 === 0) tick.className = 'mid';
    if (cents % 50 === 0) tick.className = 'major';
    if (cents === 0) tick.className = 'zero';
    tick.style.left = `${meterPosition(cents)}%`;
    tick.style.opacity = cents === 0 ? '1' : opacity.toFixed(2);
    fragment.append(tick);
  }
  scaleTicks.replaceChildren(fragment);
  tickMarks = [...scaleTicks.querySelectorAll('span')];
}

function highlightTick(cents) {
  const nearest = clamp(Math.round(cents / TICK_STEP_CENTS) * TICK_STEP_CENTS, -METER_RANGE_CENTS, METER_RANGE_CENTS);
  tickMarks.forEach((tick) => tick.classList.toggle('active-tick', Number(tick.dataset.cents) === nearest));
}

function clearTickHighlight() {
  tickMarks.forEach((tick) => tick.classList.remove('active-tick'));
}

function hasRecentReading() {
  return lastGoodPitchAt && performance.now() - lastGoodPitchAt < SUSTAIN_HOLD_MS;
}

function holdRecentReading(message) {
  if (!hasRecentReading()) return false;
  direction.textContent = message;
  return true;
}

function setPointer(position, color) {
  const left = `${position}%`;
  needle.style.left = left;
  readout.style.left = left;
  document.documentElement.style.setProperty('--needle-color', color);
}

function clearPointerState() {
  setPointer(50, 'var(--green)');
  tuneIcon.classList.remove('in-tune');
  clearTickHighlight();
}

function playTuneChime(target, now) {
  if (!audioContext || now - lastChimeAt < CHIME_COOLDOWN_MS) return;
  const start = audioContext.currentTime;
  const master = audioContext.createGain();
  const notes = [target.freq * 2, target.freq * 3].map((freq) => clamp(freq, 520, 1760));
  master.gain.setValueAtTime(0.0001, start);
  master.gain.exponentialRampToValueAtTime(0.055, start + 0.018);
  master.gain.exponentialRampToValueAtTime(0.0001, start + 0.24);
  master.connect(audioContext.destination);
  notes.forEach((freq, index) => {
    const oscillator = audioContext.createOscillator();
    const voice = audioContext.createGain();
    oscillator.type = index === 0 ? 'sine' : 'triangle';
    oscillator.frequency.setValueAtTime(freq, start);
    voice.gain.setValueAtTime(index === 0 ? 0.72 : 0.32, start);
    oscillator.connect(voice);
    voice.connect(master);
    oscillator.start(start + index * 0.035);
    oscillator.stop(start + 0.26 + index * 0.035);
    oscillator.addEventListener('ended', () => {
      oscillator.disconnect();
      voice.disconnect();
    });
  });
  window.setTimeout(() => master.disconnect(), 420);
  lastChimeAt = now;
  lastChimeTarget = target.note;
}

function resizePitchTrail() {
  const rect = pitchTrail.getBoundingClientRect();
  const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
  const nextWidth = Math.max(1, Math.round(rect.width * nextDpr));
  const nextHeight = Math.max(1, Math.round(rect.height * nextDpr));
  if (nextWidth === trailWidth && nextHeight === trailHeight && nextDpr === trailDpr) return;
  trailDpr = nextDpr;
  trailWidth = nextWidth;
  trailHeight = nextHeight;
  pitchTrail.width = trailWidth;
  pitchTrail.height = trailHeight;
  trailContext.setTransform(trailDpr, 0, 0, trailDpr, 0, 0);
  trailContext.clearRect(0, 0, rect.width, rect.height);
}

function scrollPitchTrail(now) {
  if (!trailWidth || !trailHeight) resizePitchTrail();
  if (!lastTrailFrameAt) {
    lastTrailFrameAt = now;
    return;
  }
  const delta = clamp((now - lastTrailFrameAt) * TRAIL_SPEED_PX_PER_MS, 0, 2.6);
  lastTrailFrameAt = now;
  if (delta <= 0) return;
  trailNotes.forEach((note) => { note.y += delta; });
  trailNotes = trailNotes.filter((note) => note.y < pitchTrail.clientHeight + 24);
  renderPitchTrail();
}

function trailStartY() {
  const stageRect = pitchTrail.getBoundingClientRect();
  const scaleRect = scaleTicks.getBoundingClientRect();
  return scaleRect.top - stageRect.top + scaleRect.height / 2;
}

function drawTrailLine(x, y, color, length, alpha = 0.84) {
  const tailLength = length * 1.9;
  const gradient = trailContext.createLinearGradient(x, y - tailLength, x, y + length / 2);
  gradient.addColorStop(0, 'rgba(128, 221, 0, 0)');
  gradient.addColorStop(0.62, color);
  gradient.addColorStop(1, color);
  trailContext.save();
  trailContext.lineCap = 'round';
  trailContext.strokeStyle = gradient;
  trailContext.shadowColor = color;
  trailContext.shadowBlur = 12;
  trailContext.globalAlpha = alpha;
  trailContext.lineWidth = 2;
  trailContext.beginPath();
  trailContext.moveTo(x, y - tailLength);
  trailContext.lineTo(x, y + length / 2);
  trailContext.stroke();
  trailContext.globalAlpha = alpha * 0.24;
  trailContext.lineWidth = 4;
  trailContext.beginPath();
  trailContext.moveTo(x, y - tailLength);
  trailContext.lineTo(x, y + length / 2);
  trailContext.stroke();
  trailContext.restore();
}

function renderPitchTrail() {
  if (!trailWidth || !trailHeight) resizePitchTrail();
  const rect = pitchTrail.getBoundingClientRect();
  trailContext.clearRect(0, 0, rect.width, rect.height);
  trailNotes.forEach((note) => drawTrailLine(note.x, note.y, note.color, TRAIL_NOTE_LENGTH, note.alpha));
}

function trailXForCents(cents) {
  if (!trailWidth || !trailHeight) resizePitchTrail();
  const rect = pitchTrail.getBoundingClientRect();
  return rect.width * (meterPosition(cents) / 100);
}

function quantizedTrailCents(cents) {
  return clamp(Math.round(cents / TRAIL_MERGE_CENTS) * TRAIL_MERGE_CENTS, -METER_RANGE_CENTS, METER_RANGE_CENTS);
}

function updateTrailSegment(frequency, cents, color, rms, now) {
  const bucket = quantizedTrailCents(cents);
  const target = getSelectedTarget(frequency);
  const existingNote = trailNotes.find((note) => note.targetKey === target.key && note.bucket === bucket);
  if (existingNote) {
    existingNote.color = color;
    existingNote.alpha = Math.min(0.9, existingNote.alpha + 0.02);
    existingNote.updatedAt = now;
    activeTrailSegment = existingNote;
  } else {
    activeTrailSegment = {
      targetKey: target.key,
      bucket,
      x: trailXForCents(bucket),
      y: trailStartY(),
      color,
      startedAt: now,
      lastDrawAt: now,
      updatedAt: now,
      length: TRAIL_NOTE_LENGTH,
      alpha: 0.72
    };
    trailNotes.push(activeTrailSegment);
  }
  activeTrailSegment.lastDrawAt = now;
  lastValidPitchAt = now;
  renderPitchTrail();
}

function getSelectedTarget(frequency) {
  if (manualString) return stringSet.find((item) => item.id === manualString);
  return stringSet.reduce((best, item) => {
    const distance = Math.abs(centsOff(frequency, item.freq));
    return distance < best.distance ? { item, distance } : best;
  }, { item: stringSet[0], distance: Infinity }).item;
}

function isNearInstrumentString(frequency) {
  const target = getSelectedTarget(frequency);
  return Math.abs(centsOff(frequency, target.freq)) <= METER_RANGE_CENTS;
}

function setActiveString(id) {
  stringCards.forEach((card) => card.classList.toggle('active', card.dataset.string === id));
}

function layoutStringButton(button, index, count) {
  const row = Math.floor(index / 2);
  const top = count >= 10 ? 42 + row * 42 : count >= 7 ? 42 + row * 56 : count >= 5 ? 50 + row * 72 : count <= 3 ? 86 + row * 120 : 58 + row * 96;
  button.style.top = `${top}px`;
  button.style.transform = '';
  if (index % 2 === 0) {
    button.style.left = '0';
    button.style.right = 'auto';
  } else {
    button.style.right = '0';
    button.style.left = 'auto';
  }
}

function normalizeStringIds(strings) {
  const counts = {};
  return strings.map((item) => {
    counts[item.note] = (counts[item.note] || 0) + 1;
    return { ...item, id: `${item.note}-${counts[item.note]}` };
  });
}

function buildStringButtons() {
  stringSet = normalizeStringIds(instrument.tunings[tuningIndex].strings);
  stringButtonsHost.replaceChildren();
  stringSet.forEach((item, index) => {
    const button = document.createElement('button');
    button.className = 'note-button';
    button.dataset.string = item.id;
    button.type = 'button';
    button.innerHTML = `<span>${item.key}</span><small>${item.freq.toFixed(2)} Hz</small><span class="hint">${item.hint}</span>`;
    layoutStringButton(button, index, stringSet.length);
    button.addEventListener('click', () => {
      manualString = manualString === item.id ? null : item.id;
      if (manualString) {
        const target = stringSet.find((candidate) => candidate.id === manualString);
        tuneChimeArmed = true;
        setActiveString(target.id);
        noteName.textContent = target.key;
        clearPointerState();
        targetText.textContent = `Target ${target.note} · ${target.freq.toFixed(2)} Hz`;
        direction.textContent = `${target.key} locked`;
      } else {
        direction.textContent = 'Auto string matching';
      }
    });
    stringButtonsHost.append(button);
  });
  stringCards = [...stringButtonsHost.querySelectorAll('.note-button')];
  setActiveString(stringSet[0].id);
  renderInstrumentVisual();
}

function renderInstrumentVisual() {
  if (!headstock) return;
  const count = stringSet.length;
  headstock.dataset.strings = String(count);
  headstock.querySelectorAll('.string, .peg').forEach((node) => node.remove());
  const spacing = count <= 1 ? 0 : 68 / (count - 1);
  for (let index = 0; index < count; index += 1) {
    const x = 16 + spacing * index;
    const string = document.createElement('div');
    string.className = 'string';
    string.style.setProperty('--x', `${x}%`);
    string.style.setProperty('--string-weight', `${count >= 10 ? 1 : index < count / 2 ? 2.1 : 1.35}px`);
    headstock.append(string);

    const peg = document.createElement('div');
    const side = index % 2 === 0 ? 'left' : 'right';
    const row = Math.floor(index / 2);
    const rows = Math.ceil(count / 2);
    const top = 54 + row * (rows > 5 ? 32 : rows > 4 ? 38 : 56);
    peg.className = `peg peg-${side}`;
    peg.style.top = `${top}px`;
    headstock.append(peg);
  }
}

function buildTuningSwitch() {
  tuningSwitch.replaceChildren();
  instrument.tunings.forEach((tuning, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = tuning.label;
    button.classList.toggle('active', index === tuningIndex);
    button.addEventListener('click', () => updateTuning(index));
    tuningSwitch.append(button);
  });
  if (instrument.tunings.length === 1) tuningSwitch.classList.add('single');
}

function updateTuning(index) {
  tuningIndex = index;
  manualString = null;
  buildTuningSwitch();
  buildStringButtons();
  if (instrumentTitle) instrumentTitle.textContent = instrument.label;
  if (tuningTitle) tuningTitle.textContent = instrument.tunings[tuningIndex].label;
  targetText.textContent = `${instrument.label} · ${instrument.tunings[tuningIndex].label}`;
  direction.textContent = 'Play an open string';
  tuneChimeArmed = true;
  clearPointerState();
}

function pointerColorForCents(cents) {
  if (Math.abs(cents) <= 5) return 'var(--green)';
  if (Math.abs(cents) <= 15) return 'var(--yellow)';
  return 'var(--red)';
}

function trailColorForCents(cents) {
  if (Math.abs(cents) <= 5) return TRAIL_COLORS.green;
  if (Math.abs(cents) <= 15) return TRAIL_COLORS.yellow;
  return TRAIL_COLORS.red;
}

function updateReadout(frequency) {
  const target = getSelectedTarget(frequency);
  const cents = centsOff(frequency, target.freq);
  const limited = clamp(cents, -METER_RANGE_CENTS, METER_RANGE_CENTS);
  const isInTune = Math.abs(cents) <= 5;
  const isNear = Math.abs(cents) <= 15;
  const isFar = Math.abs(cents) > METER_FADE_CENTS;
  const pointerColor = pointerColorForCents(cents);
  const pointerPosition = meterPosition(limited);
  if (target.note !== lastChimeTarget) tuneChimeArmed = true;
  setActiveString(target.id);
  noteName.textContent = target.key;
  targetText.textContent = `Target ${target.note} · ${target.freq.toFixed(2)} Hz`;
  freqText.textContent = `${frequency.toFixed(2)} Hz`;
  centsText.textContent = `${cents > 0 ? '+' : ''}${cents.toFixed(1)}`;
  setPointer(pointerPosition, pointerColor);
  tuneIcon.classList.toggle('in-tune', isInTune);
  highlightTick(limited);
  lastGoodPitchAt = performance.now();
  if (isInTune) {
    if (tuneChimeArmed) {
      playTuneChime(target, performance.now());
      tuneChimeArmed = false;
    }
    direction.textContent = 'In tune';
  } else {
    if (Math.abs(cents) > 9) tuneChimeArmed = true;
    direction.textContent = cents < 0
      ? isFar ? 'Very flat, tighten the string' : isNear ? 'A little flat, tighten gently' : 'Flat, tighten the string'
      : isFar ? 'Very sharp, loosen the string' : isNear ? 'A little sharp, loosen gently' : 'Sharp, loosen the string';
  }
}

function getRms(samples) {
  let rms = 0;
  for (let i = 0; i < samples.length; i += 1) rms += samples[i] * samples[i];
  return Math.sqrt(rms / samples.length);
}

function updateLevel(rms) {
  const percent = clamp((rms / 0.045) * 100, 0, 100);
  const activeBars = Math.ceil(percent / 25);
  levelBars.forEach((bar, index) => bar.classList.toggle('active', index < activeBars));
}

function detectPitch(samples, sampleRate, rms) {
  if (rms < MIN_INPUT_RMS) return null;
  const minLag = Math.floor(sampleRate / maxFrequency);
  const maxLag = Math.floor(sampleRate / minFrequency);
  const yin = new Float32Array(maxLag + 1);
  let runningSum = 0;
  for (let lag = 1; lag <= maxLag; lag += 1) {
    let difference = 0;
    for (let i = 0; i < samples.length - maxLag; i += 1) {
      const delta = samples[i] - samples[i + lag];
      difference += delta * delta;
    }
    runningSum += difference;
    yin[lag] = runningSum === 0 ? 1 : difference * lag / runningSum;
  }
  let bestLag = -1;
  let bestValue = Infinity;
  for (let lag = minLag; lag <= maxLag; lag += 1) {
    if (yin[lag] < bestValue) {
      bestValue = yin[lag];
      bestLag = lag;
    }
    if (yin[lag] < YIN_THRESHOLD) {
      while (lag + 1 <= maxLag && yin[lag + 1] < yin[lag]) lag += 1;
      bestLag = lag;
      bestValue = yin[lag];
      break;
    }
  }
  if (bestLag < 0 || bestValue > MAX_YIN_VALUE) return null;
  const prev = yin[bestLag - 1] ?? yin[bestLag];
  const curr = yin[bestLag];
  const next = yin[bestLag + 1] ?? yin[bestLag];
  const denominator = 2 * (2 * curr - prev - next);
  const shift = denominator ? (next - prev) / denominator : 0;
  const refinedLag = bestLag + clamp(shift, -1, 1);
  return sampleRate / refinedLag;
}

function stablePitch(pitch) {
  recentPitches.push(pitch);
  if (recentPitches.length > PITCH_WINDOW) recentPitches.shift();
  const sorted = [...recentPitches].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function loop() {
  const now = performance.now();
  scrollPitchTrail(now);
  analyser.getFloatTimeDomainData(buffer);
  const rms = getRms(buffer);
  updateLevel(rms);
  const pitch = detectPitch(buffer, audioContext.sampleRate, rms);
  if (pitch) {
    const smoothedPitch = stablePitch(pitch);
    if (isNearInstrumentString(smoothedPitch)) {
      updateReadout(smoothedPitch);
      const target = getSelectedTarget(smoothedPitch);
      const cents = centsOff(smoothedPitch, target.freq);
      updateTrailSegment(smoothedPitch, cents, trailColorForCents(cents), rms, now);
    } else {
      direction.textContent = 'Play an open string';
      clearPointerState();
      recentPitches = [];
      activeTrailSegment = null;
    }
  } else if (rms >= MIN_INPUT_RMS) {
    recentPitches = [];
    activeTrailSegment = null;
    if (!holdRecentReading('Sustain fading, pluck again')) {
      direction.textContent = 'Signal found, play a clearer note';
      clearPointerState();
    }
  } else {
    recentPitches = [];
    activeTrailSegment = null;
    if (!holdRecentReading('Quiet input, move closer or pluck louder')) clearPointerState();
  }
  lastRms = rms;
  rafId = requestAnimationFrame(loop);
}

async function startMic() {
  if (mediaStream) return;
  if (!navigator.mediaDevices?.getUserMedia) {
    direction.textContent = 'This browser does not support microphone input';
    return;
  }
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
    });
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') await audioContext.resume();
    sourceNode = audioContext.createMediaStreamSource(mediaStream);
    gainNode = audioContext.createGain();
    gainNode.gain.value = PREAMP_GAIN;
    analyser = audioContext.createAnalyser();
    analyser.fftSize = minFrequency < 120 ? 16384 : 8192;
    analyser.smoothingTimeConstant = 0;
    buffer = new Float32Array(analyser.fftSize);
    sourceNode.connect(gainNode);
    gainNode.connect(analyser);
    loop();
  } catch (error) {
    mediaStream = null;
    direction.textContent = error.name === 'NotAllowedError'
      ? 'Microphone blocked, click anywhere to retry'
      : 'Microphone unavailable, use localhost or HTTPS';
  }
}

function stopMic() {
  if (!mediaStream) return;
  cancelAnimationFrame(rafId);
  mediaStream.getTracks().forEach((track) => track.stop());
  mediaStream = null;
  sourceNode = null;
  gainNode = null;
  recentPitches = [];
  lastGoodPitchAt = 0;
  lastValidPitchAt = 0;
  tuneChimeArmed = true;
  activeTrailSegment = null;
  trailNotes = [];
  direction.textContent = 'Play an open string';
  clearPointerState();
  updateLevel(0);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopMic();
  else startMic();
});

document.addEventListener('pointerdown', () => {
  if (!mediaStream) startMic();
}, { passive: true });

window.addEventListener('resize', resizePitchTrail);

brandText.textContent = instrument.brand || instrument.label.toUpperCase();
updateFrequencyBounds();
buildScaleTicks();
buildTuningSwitch();
buildStringButtons();
updateTuning(0);
resizePitchTrail();
startMic();
