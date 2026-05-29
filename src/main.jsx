import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { instrumentList, instruments } from './instruments.js';
import './styles.css';

const METER_RANGE_CENTS = 100;
const METER_TRAVEL_PERCENT = 48;
const TICK_STEP_CENTS = 5;
const METER_FADE_CENTS = 50;
const MIN_INPUT_RMS = 0.0009;
const YIN_THRESHOLD = 0.24;
const MAX_YIN_VALUE = 0.58;
const PITCH_WINDOW = 3;
const PREAMP_GAIN = 2.2;
const SUSTAIN_HOLD_MS = 2600;
const CHIME_COOLDOWN_MS = 1400;
const TRAIL_SPEED_PX_PER_MS = 0.024;
const TRAIL_NOTE_LENGTH = 20;
const TRAIL_MERGE_CENTS = 5;
const TRAIL_COLORS = { green: '#80dd00', yellow: '#ffd24a', red: '#ff4d3f' };

function centsOff(frequency, target) { return 1200 * Math.log2(frequency / target); }
function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
function meterPosition(cents) { return 50 + clamp(cents, -METER_RANGE_CENTS, METER_RANGE_CENTS) * (METER_TRAVEL_PERCENT / METER_RANGE_CENTS); }
function pointerColorForCents(cents) { return Math.abs(cents) <= 5 ? 'var(--green)' : Math.abs(cents) <= 15 ? 'var(--yellow)' : 'var(--red)'; }
function trailColorForCents(cents) { return Math.abs(cents) <= 5 ? TRAIL_COLORS.green : Math.abs(cents) <= 15 ? TRAIL_COLORS.yellow : TRAIL_COLORS.red; }
const LAYOUTS = {
  'guitar-6': [
    ['left', 2], ['left', 1], ['left', 0], ['right', 0], ['right', 1], ['right', 2]
  ],
  'guitar-7': [
    ['left', 2], ['left', 1], ['left', 0], ['right', 0], ['right', 1], ['right', 2], ['right', 3]
  ],
  'guitar-12': [
    ['left', 5], ['left', 4], ['left', 3], ['left', 2], ['left', 1], ['left', 0],
    ['right', 0], ['right', 1], ['right', 2], ['right', 3], ['right', 4], ['right', 5]
  ],
  'bass-4': [
    ['left', 3], ['left', 2], ['left', 1], ['left', 0]
  ],
  'bass-5': [
    ['left', 2], ['left', 1], ['left', 0], ['right', 0], ['right', 1]
  ],
  ukulele: [
    ['left', 1], ['left', 0], ['right', 0], ['right', 1]
  ],
  violin: [
    ['left', 1], ['left', 0], ['right', 0], ['right', 1]
  ],
  viola: [
    ['left', 1], ['left', 0], ['right', 0], ['right', 1]
  ],
  cello: [
    ['left', 1], ['left', 0], ['right', 0], ['right', 1]
  ],
  cavaquinho: [
    ['left', 1], ['left', 0], ['right', 0], ['right', 1]
  ],
  mandolin: [
    ['left', 3], ['left', 2], ['left', 1], ['left', 0], ['right', 0], ['right', 1], ['right', 2], ['right', 3]
  ],
  balalaika: [
    ['left', 0], ['left', 1], ['left', 2]
  ],
  'banjo-4': [
    ['left', 1], ['left', 0], ['right', 0], ['right', 1]
  ],
  'banjo-5': [
    ['left', 0], ['left', 1], ['left', 2], ['right', 0], ['right', 1]
  ]
};

function normalizeStringIds(strings, instrumentId) {
  const counts = {};
  const layout = LAYOUTS[instrumentId] || [];
  const maxRow = Math.max(0, ...layout.map((item) => item?.[1] || 0));
  const custom = {
    ukulele: { buttonTopBase: 68, buttonSpacing: 114, pegTopBase: 88, pegSpacing: 118 },
    'bass-4': { buttonTopBase: 58, buttonSpacing: 72, pegTopBase: 64, pegSpacing: 58 },
    balalaika: { buttonTopBase: 88, buttonSpacing: 58, pegTopBase: 74, pegSpacing: 58 },
    violin: { buttonTopBase: 116, buttonSpacing: 62, pegTopBase: 80, pegSpacing: 48 },
    viola: { buttonTopBase: 116, buttonSpacing: 62, pegTopBase: 80, pegSpacing: 48 },
    cello: { buttonTopBase: 116, buttonSpacing: 62, pegTopBase: 80, pegSpacing: 48 }
  }[instrumentId] || {};
  const buttonSpacing = custom.buttonSpacing ?? (strings.length >= 10 ? 36 : strings.length >= 7 ? 52 : strings.length >= 5 ? 70 : strings.length <= 3 ? 58 : 96);
  const buttonTopBase = custom.buttonTopBase ?? (strings.length <= 3 ? 110 : strings.length >= 10 ? 48 : strings.length >= 7 ? 56 : strings.length >= 5 ? 78 : 76);
  const pegSpacing = custom.pegSpacing ?? (strings.length >= 10 ? 29 : strings.length >= 7 ? 39 : strings.length >= 5 ? 48 : strings.length <= 3 ? 58 : 56);
  const pegTopBase = custom.pegTopBase ?? (strings.length <= 3 ? 90 : strings.length >= 10 ? 50 : strings.length >= 7 ? 58 : strings.length >= 5 ? 72 : 72);
  return strings.map((item, index) => {
    counts[item.note] = (counts[item.note] || 0) + 1;
    const [side, row] = layout[index] || [index % 2 === 0 ? 'left' : 'right', Math.floor(index / 2)];
    return {
      ...item,
      id: `${item.note}-${counts[item.note]}`,
      buttonLayout: {
        side,
        row,
        maxRow,
        buttonTop: buttonTopBase + row * buttonSpacing,
        pegTop: pegTopBase + row * pegSpacing
      }
    };
  });
}
function hashToId() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  return hash.startsWith('tuner/') ? hash.slice(6) : '';
}
function goHome() { window.location.hash = '/'; }
function goTuner(id) { window.location.hash = `/tuner/${id}`; }
function openInstrument(id) {
  if (id === 'ukulele') {
    window.location.href = './ukulele.html';
    return;
  }
  goTuner(id);
}

function useHashRoute() {
  const [route, setRoute] = useState(hashToId());
  useEffect(() => {
    const onHash = () => setRoute(hashToId());
    window.addEventListener('hashchange', onHash);
    onHash();
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

function Home() {
  return (
    <main className="home">
      <nav className="topbar" aria-label="Project links">
        <div className="brand"><span className="brand-mark">t</span><span>instrument tuna</span></div>
        <a className="github" href="https://github.com/magic-bunny/ukelele-helper" target="_blank" rel="noreferrer" aria-label="Open project on GitHub"><GitHubIcon /></a>
      </nav>
      <header className="hero">
        <h1>Choose your tuner</h1>
        <p>Choose an instrument and tune one open string at a time.</p>
      </header>
      <section className="instrument-grid" aria-label="Choose an instrument">
        {instrumentList.map((instrument) => <InstrumentCard key={instrument.id} instrument={instrument} />)}
      </section>
    </main>
  );
}

function InstrumentCard({ instrument }) {
  return (
    <button className={`instrument-card shape-${instrument.shape}`} onClick={() => openInstrument(instrument.id)}>
      <InstrumentThumb instrument={instrument} />
      <h2>{instrument.short}</h2>
      <small>{instrument.summary}</small>
    </button>
  );
}

function InstrumentThumb({ instrument }) {
  return (
    <span className="art" style={{ '--strings': instrument.strings.length }}>
      <i className="neck" /><i className="head" /><i className="strings" />
    </span>
  );
}

function Tuner({ id }) {
  const instrument = instruments[id] || instruments['guitar-6'];
  const strings = useMemo(() => normalizeStringIds(instrument.strings, id), [instrument, id]);
  const [manualString, setManualString] = useState(null);
  const [reading, setReading] = useState(null);
  const [status, setStatus] = useState('Play an open string');
  const [level, setLevel] = useState(0);
  const [trailNotes, setTrailNotes] = useState([]);
  const [activeTick, setActiveTick] = useState(null);
  const canvasRef = useRef(null);
  const scaleRef = useRef(null);
  const audioRef = useRef({});

  const targetFor = (frequency) => {
    if (manualString) return strings.find((item) => item.id === manualString) || strings[0];
    return strings.reduce((best, item) => {
      const distance = Math.abs(centsOff(frequency, item.freq));
      return distance < best.distance ? { item, distance } : best;
    }, { item: strings[0], distance: Infinity }).item;
  };

  useEffect(() => {
    document.title = `${instrument.label} Tuner`;
    document.documentElement.style.setProperty('--green', '#80dd00');
    setManualString(null);
    setReading(null);
    setTrailNotes([]);
    setActiveTick(null);
    setStatus('Play an open string');
  }, [instrument]);

  useEffect(() => {
    const state = audioRef.current;
    state.recentPitches = [];
    state.lastGoodPitchAt = 0;
    state.tuneChimeArmed = true;
    state.lastChimeAt = 0;
    state.lastChimeTarget = null;
    state.lastTrailFrameAt = 0;
    state.trailNotes = [];
    state.manualString = manualString;
    state.strings = strings;
    state.targetFor = targetFor;
  });

  useEffect(() => {
    let disposed = false;
    const state = audioRef.current;
    state.strings = strings;
    state.targetFor = targetFor;
    const freqs = strings.map((item) => item.freq);
    state.minFrequency = Math.max(25, Math.min(...freqs) * 0.72);
    state.maxFrequency = Math.max(...freqs) * 1.32;

    const getRms = (samples) => Math.sqrt(samples.reduce((sum, sample) => sum + sample * sample, 0) / samples.length);
    const stablePitch = (pitch) => {
      state.recentPitches.push(pitch);
      if (state.recentPitches.length > PITCH_WINDOW) state.recentPitches.shift();
      return [...state.recentPitches].sort((a, b) => a - b)[Math.floor(state.recentPitches.length / 2)];
    };
    const detectPitch = (samples, sampleRate, rms) => {
      if (rms < MIN_INPUT_RMS) return null;
      const minLag = Math.floor(sampleRate / state.maxFrequency);
      const maxLag = Math.floor(sampleRate / state.minFrequency);
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
        if (yin[lag] < bestValue) { bestValue = yin[lag]; bestLag = lag; }
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
      return sampleRate / (bestLag + clamp(shift, -1, 1));
    };
    const playTuneChime = (target, now) => {
      if (!state.audioContext || now - state.lastChimeAt < CHIME_COOLDOWN_MS) return;
      const start = state.audioContext.currentTime;
      const master = state.audioContext.createGain();
      const notes = [target.freq * 2, target.freq * 3].map((freq) => clamp(freq, 520, 1760));
      master.gain.setValueAtTime(0.0001, start);
      master.gain.exponentialRampToValueAtTime(0.055, start + 0.018);
      master.gain.exponentialRampToValueAtTime(0.0001, start + 0.24);
      master.connect(state.audioContext.destination);
      notes.forEach((freq, index) => {
        const oscillator = state.audioContext.createOscillator();
        const voice = state.audioContext.createGain();
        oscillator.type = index === 0 ? 'sine' : 'triangle';
        oscillator.frequency.setValueAtTime(freq, start);
        voice.gain.setValueAtTime(index === 0 ? 0.72 : 0.32, start);
        oscillator.connect(voice); voice.connect(master);
        oscillator.start(start + index * 0.035);
        oscillator.stop(start + 0.26 + index * 0.035);
      });
      window.setTimeout(() => master.disconnect(), 420);
      state.lastChimeAt = now;
      state.lastChimeTarget = target.note;
    };
    const addTrailNote = (cents, color) => {
      const bucket = clamp(Math.round(cents / TRAIL_MERGE_CENTS) * TRAIL_MERGE_CENTS, -METER_RANGE_CENTS, METER_RANGE_CENTS);
      const scaleRect = scaleRef.current?.getBoundingClientRect();
      const canvasRect = canvasRef.current?.getBoundingClientRect();
      const startY = scaleRect && canvasRect ? scaleRect.top - canvasRect.top + scaleRect.height / 2 : 134;
      const x = meterPosition(bucket);
      state.trailNotes = state.trailNotes.filter((note) => note.bucket !== bucket || note.y > startY + 18);
      state.trailNotes.push({ bucket, x, y: startY, color, alpha: 0.78 });
      setTrailNotes([...state.trailNotes]);
    };
    const loop = () => {
      const now = performance.now();
      const delta = state.lastTrailFrameAt ? clamp((now - state.lastTrailFrameAt) * TRAIL_SPEED_PX_PER_MS, 0, 2.6) : 0;
      state.lastTrailFrameAt = now;
      if (delta > 0) {
        state.trailNotes = state.trailNotes.map((note) => ({ ...note, y: note.y + delta })).filter((note) => note.y < window.innerHeight + 30);
        setTrailNotes([...state.trailNotes]);
      }
      state.analyser.getFloatTimeDomainData(state.buffer);
      const rms = getRms(state.buffer);
      setLevel(clamp((rms / 0.045) * 100, 0, 100));
      const pitch = detectPitch(state.buffer, state.audioContext.sampleRate, rms);
      if (pitch) {
        const smoothed = stablePitch(pitch);
        const target = state.targetFor(smoothed);
        const cents = centsOff(smoothed, target.freq);
        if (Math.abs(cents) <= METER_RANGE_CENTS) {
          const limited = clamp(cents, -METER_RANGE_CENTS, METER_RANGE_CENTS);
          const isInTune = Math.abs(cents) <= 5;
          const isNear = Math.abs(cents) <= 15;
          const isFar = Math.abs(cents) > METER_FADE_CENTS;
          if (target.note !== state.lastChimeTarget) state.tuneChimeArmed = true;
          setReading({ frequency: smoothed, target, cents, position: meterPosition(limited), color: pointerColorForCents(cents), isInTune });
          setActiveTick(clamp(Math.round(limited / TICK_STEP_CENTS) * TICK_STEP_CENTS, -METER_RANGE_CENTS, METER_RANGE_CENTS));
          state.lastGoodPitchAt = now;
          addTrailNote(cents, trailColorForCents(cents));
          if (isInTune) {
            if (state.tuneChimeArmed) { playTuneChime(target, now); state.tuneChimeArmed = false; }
            setStatus('In tune');
          } else {
            if (Math.abs(cents) > 9) state.tuneChimeArmed = true;
            setStatus(cents < 0 ? (isFar ? 'Very flat, tighten the string' : isNear ? 'A little flat, tighten gently' : 'Flat, tighten the string') : (isFar ? 'Very sharp, loosen the string' : isNear ? 'A little sharp, loosen gently' : 'Sharp, loosen the string'));
          }
        } else {
          state.recentPitches = [];
          setStatus('Play an open string');
          setReading(null); setActiveTick(null);
        }
      } else if (rms >= MIN_INPUT_RMS) {
        state.recentPitches = [];
        if (state.lastGoodPitchAt && now - state.lastGoodPitchAt < SUSTAIN_HOLD_MS) setStatus('Sustain fading, pluck again');
        else { setStatus('Signal found, play a clearer note'); setReading(null); setActiveTick(null); }
      } else if (state.lastGoodPitchAt && now - state.lastGoodPitchAt < SUSTAIN_HOLD_MS) {
        setStatus('Quiet input, move closer or pluck louder');
      } else {
        setReading(null); setActiveTick(null);
      }
      state.rafId = requestAnimationFrame(loop);
    };
    const startMic = async () => {
      if (disposed || state.mediaStream) return;
      if (!navigator.mediaDevices?.getUserMedia) { setStatus('This browser does not support microphone input'); return; }
      try {
        state.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
        state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (state.audioContext.state === 'suspended') await state.audioContext.resume();
        state.sourceNode = state.audioContext.createMediaStreamSource(state.mediaStream);
        state.gainNode = state.audioContext.createGain();
        state.gainNode.gain.value = PREAMP_GAIN;
        state.analyser = state.audioContext.createAnalyser();
        state.analyser.fftSize = state.minFrequency < 120 ? 16384 : 8192;
        state.analyser.smoothingTimeConstant = 0;
        state.buffer = new Float32Array(state.analyser.fftSize);
        state.sourceNode.connect(state.gainNode);
        state.gainNode.connect(state.analyser);
        loop();
      } catch (error) {
        state.mediaStream = null;
        setStatus(error.name === 'NotAllowedError' ? 'Microphone blocked, click anywhere to retry' : 'Microphone unavailable, use localhost or HTTPS');
      }
    };
    const stopMic = () => {
      cancelAnimationFrame(state.rafId);
      state.mediaStream?.getTracks().forEach((track) => track.stop());
      state.mediaStream = null;
      state.sourceNode = null;
      state.gainNode = null;
      state.recentPitches = [];
      state.lastGoodPitchAt = 0;
      setLevel(0);
    };
    const onPointer = () => { if (!state.mediaStream) startMic(); };
    const onVisibility = () => { if (document.hidden) stopMic(); else startMic(); };
    document.addEventListener('pointerdown', onPointer, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    startMic();
    return () => {
      disposed = true;
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('visibilitychange', onVisibility);
      stopMic();
    };
  }, [instrument, strings, manualString]);

  const activeTargetId = reading?.target?.id || manualString || strings[0].id;
  const pointer = reading || { position: 50, color: 'var(--green)', isInTune: false };
  const target = reading?.target || strings.find((item) => item.id === manualString) || strings[0];

  return (
    <main className={`phone family-${instrument.family} instrument-${id}`}>
      <div className="stage">
        <canvas className="pitch-trail" ref={canvasRef} aria-hidden="true" />
        <PitchTrail notes={trailNotes} />
        <header className="tuner-header" aria-label="Tuner navigation">
          <button className="back-link" onClick={goHome} aria-label="Back to instrument list">‹</button>
          <div className="brand-lockup" aria-hidden="true"><span className="logo-mark">t</span><span>instrument tuna</span></div>
          <div className="page-title"><strong>{instrument.label}</strong><span>{instrument.tuning}</span></div>
          <a className="github-link" href="https://github.com/magic-bunny/ukelele-helper" target="_blank" rel="noreferrer" aria-label="Open project on GitHub"><GitHubIcon /></a>
        </header>
        <div className="tuning-switch"><button className="active">{instrument.tuning}</button></div>
        <section className="meter-zone" aria-live="polite">
          <div className="center-line" style={{ left: `${pointer.position}%`, '--needle-color': pointer.color }} aria-hidden="true" />
          <div className="tuner-scale" aria-hidden="true" ref={scaleRef}>
            <div className={`readout ${pointer.isInTune ? 'in-tune' : ''}`} style={{ left: `${pointer.position}%`, '--needle-color': pointer.color }} />
            <ScaleTicks activeTick={activeTick} />
            <div className="scale-labels"><span style={{ left: '25%' }}>-50</span><span style={{ left: '50%' }}>0</span><span style={{ left: '75%' }}>+50</span></div>
          </div>
          <span className="flat">♭</span><span className="sharp">♯</span>
        </section>
        <section className="headstock-scene" aria-label="Instrument strings">
          <div id="stringButtons">
            {strings.map((string, index) => <NoteButton key={string.id} string={string} index={index} count={strings.length} active={activeTargetId === string.id} onClick={() => setManualString(manualString === string.id ? null : string.id)} />)}
          </div>
          <InstrumentVisual instrument={instrument} strings={strings} />
        </section>
        <section className="bottom-panel" aria-live="polite">
          <div className="bottom-status">
            <strong>{target.key}</strong>
            <span>Target {target.note} · {target.freq.toFixed(2)} Hz</span><br />
            <span>{reading ? `${reading.frequency.toFixed(2)} Hz` : '-- Hz'}</span> · <span><b>{reading ? `${reading.cents > 0 ? '+' : ''}${reading.cents.toFixed(1)}` : '0'}</b> cents</span><br />
            <span>{status}</span>
          </div>
        </section>
        <div className="volume-signal" aria-label="Input level" title="Input level">{[1,2,3,4].map((n) => <span key={n} className={level >= n * 25 - 10 ? 'active' : ''} />)}</div>
      </div>
    </main>
  );
}

function ScaleTicks({ activeTick }) {
  const ticks = [];
  for (let cents = -METER_RANGE_CENTS; cents <= METER_RANGE_CENTS; cents += TICK_STEP_CENTS) {
    const distance = Math.abs(cents) / METER_RANGE_CENTS;
    const opacity = cents === 0 ? 1 : 0.06 + (1 - Math.pow(distance, 1.65)) * 0.64;
    let className = 'minor';
    if (cents % 25 === 0) className = 'mid';
    if (cents % 50 === 0) className = 'major';
    if (cents === 0) className = 'zero';
    if (activeTick === cents) className += ' active-tick';
    ticks.push(<span key={cents} className={className} style={{ left: `${meterPosition(cents)}%`, opacity }} />);
  }
  return <div className="scale-ticks">{ticks}</div>;
}

function NoteButton({ string, index, count, active, onClick }) {
  const layout = string.buttonLayout || fallbackLayout(index, count);
  const side = layout.side;
  const top = layout.buttonTop;
  return <button className={`note-button note-${side} ${active ? 'active' : ''}`} style={{ top }} onClick={onClick}><span>{string.key}</span></button>;
}

function InstrumentVisual({ instrument, strings }) {
  return (
    <>
      <div className="instrument-body" aria-hidden="true"><div className="body-shine" /><div className="soundhole" /><div className="tailpiece" /></div>
      <div className="headstock" aria-hidden="true" data-strings={strings.length}>
        <div className="wood" /><div className="brand-text">{instrument.brand}</div><div className="nut" /><div className="fretboard" />
        {strings.map((string, index) => {
          const x = strings.length <= 1 ? 50 : 16 + (68 / (strings.length - 1)) * index;
          const layout = string.buttonLayout || fallbackLayout(index, strings.length);
          const side = layout.side;
          const top = layout.pegTop;
          const weight = strings.length >= 10 ? 1 : index < strings.length / 2 ? 2.1 : 1.35;
          return <React.Fragment key={string.id}><div className="string" style={{ '--x': `${x}%`, '--string-weight': `${weight}px` }} /><div className={`peg peg-${side}`} style={{ top }} /></React.Fragment>;
        })}
      </div>
    </>
  );
}

function fallbackLayout(index, count) {
  const row = Math.floor(index / 2);
  const rows = Math.ceil(count / 2);
  const buttonTop = count >= 10 ? 42 + row * 42 : count >= 7 ? 42 + row * 56 : count >= 5 ? 50 + row * 72 : count <= 3 ? 86 + row * 120 : 58 + row * 96;
  const pegTop = 54 + row * (rows > 5 ? 32 : rows > 4 ? 38 : 56);
  return { side: index % 2 === 0 ? 'left' : 'right', buttonTop, pegTop };
}

function PitchTrail({ notes }) {
  return <div className="pitch-note-layer" aria-hidden="true">{notes.map((note, index) => <span key={`${note.bucket}-${index}`} className="trail-note" style={{ left: `${note.x}%`, top: note.y, '--note-color': note.color, opacity: note.alpha }} />)}</div>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" /></svg>;
}

function App() {
  const routeId = useHashRoute();
  useEffect(() => {
    if (routeId === 'ukulele') window.location.replace('./ukulele.html');
  }, [routeId]);
  if (routeId === 'ukulele') return null;
  return routeId && instruments[routeId] ? <Tuner id={routeId} /> : <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
