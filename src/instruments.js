const strings = (items) => items.map(([key, note, freq, hint]) => ({ key, note, freq, hint }));

export const instruments = {
  'guitar-6': {
    label: 'Guitar', short: 'Guitar', brand: 'GUITAR', family: 'guitar', shape: 'guitar', order: 1,
    tuning: 'Standard', summary: 'E A D G B E', strings: strings([
      ['E', 'E2', 82.41, 'String 6'], ['A', 'A2', 110.00, 'String 5'], ['D', 'D3', 146.83, 'String 4'],
      ['G', 'G3', 196.00, 'String 3'], ['B', 'B3', 246.94, 'String 2'], ['E', 'E4', 329.63, 'String 1']
    ])
  },
  'guitar-7': {
    label: 'Guitar 7-string', short: 'Guitar 7-string', brand: 'GUITAR', family: 'guitar', shape: 'guitar', order: 2,
    tuning: 'Standard', summary: 'B E A D G B E', strings: strings([
      ['B', 'B1', 61.74, 'String 7'], ['E', 'E2', 82.41, 'String 6'], ['A', 'A2', 110.00, 'String 5'], ['D', 'D3', 146.83, 'String 4'],
      ['G', 'G3', 196.00, 'String 3'], ['B', 'B3', 246.94, 'String 2'], ['E', 'E4', 329.63, 'String 1']
    ])
  },
  'guitar-12': {
    label: 'Guitar 12-string', short: 'Guitar 12-string', brand: 'GUITAR', family: 'guitar', shape: 'guitar', order: 3,
    tuning: 'Standard', summary: 'paired courses', strings: strings([
      ['E', 'E2', 82.41, 'Course 6 low'], ['E', 'E3', 164.81, 'Course 6 octave'], ['A', 'A2', 110.00, 'Course 5 low'], ['A', 'A3', 220.00, 'Course 5 octave'],
      ['D', 'D3', 146.83, 'Course 4 low'], ['D', 'D4', 293.66, 'Course 4 octave'], ['G', 'G3', 196.00, 'Course 3 low'], ['G', 'G4', 392.00, 'Course 3 octave'],
      ['B', 'B3', 246.94, 'Course 2 pair'], ['B', 'B3', 246.94, 'Course 2 pair'], ['E', 'E4', 329.63, 'Course 1 pair'], ['E', 'E4', 329.63, 'Course 1 pair']
    ])
  },
  'bass-4': {
    label: 'Bass Guitar', short: 'Bass Guitar', brand: 'BASS', family: 'bass', shape: 'bass', order: 4,
    tuning: 'Standard', summary: 'E A D G', strings: strings([
      ['E', 'E1', 41.20, 'String 4'], ['A', 'A1', 55.00, 'String 3'], ['D', 'D2', 73.42, 'String 2'], ['G', 'G2', 98.00, 'String 1']
    ])
  },
  'bass-5': {
    label: 'Bass Guitar 5-string', short: 'Bass 5-string', brand: 'BASS', family: 'bass', shape: 'bass', order: 5,
    tuning: 'Standard', summary: 'B E A D G', strings: strings([
      ['B', 'B0', 30.87, 'String 5'], ['E', 'E1', 41.20, 'String 4'], ['A', 'A1', 55.00, 'String 3'], ['D', 'D2', 73.42, 'String 2'], ['G', 'G2', 98.00, 'String 1']
    ])
  },
  ukulele: {
    label: 'Ukulele', short: 'Ukulele', brand: 'UKULELE', family: 'small', shape: 'cavaquinho', order: 6,
    tuning: 'High G', summary: 'G C E A', strings: strings([
      ['G', 'G4', 392.00, 'String 4, High G'], ['C', 'C4', 261.63, 'String 3'], ['E', 'E4', 329.63, 'String 2'], ['A', 'A4', 440.00, 'String 1']
    ])
  },
  violin: {
    label: 'Violin/Fiddle', short: 'Violin/Fiddle', brand: 'VIOLIN', family: 'violin', shape: 'violin', order: 7,
    tuning: 'Standard', summary: 'G D A E', strings: strings([
      ['G', 'G3', 196.00, 'String 4'], ['D', 'D4', 293.66, 'String 3'], ['A', 'A4', 440.00, 'String 2'], ['E', 'E5', 659.25, 'String 1']
    ])
  },
  viola: {
    label: 'Viola', short: 'Viola', brand: 'VIOLA', family: 'violin', shape: 'violin', order: 8,
    tuning: 'Standard', summary: 'C G D A', strings: strings([
      ['C', 'C3', 130.81, 'String 4'], ['G', 'G3', 196.00, 'String 3'], ['D', 'D4', 293.66, 'String 2'], ['A', 'A4', 440.00, 'String 1']
    ])
  },
  cello: {
    label: 'Cello', short: 'Cello', brand: 'CELLO', family: 'cello', shape: 'violin', order: 9,
    tuning: 'Standard', summary: 'C G D A', strings: strings([
      ['C', 'C2', 65.41, 'String 4'], ['G', 'G2', 98.00, 'String 3'], ['D', 'D3', 146.83, 'String 2'], ['A', 'A3', 220.00, 'String 1']
    ])
  },
  cavaquinho: {
    label: 'Cavaquinho', short: 'Cavaquinho', brand: 'CAVAQ', family: 'small', shape: 'cavaquinho', order: 10,
    tuning: 'DGBD', summary: 'D G B D', strings: strings([
      ['D', 'D4', 293.66, 'String 4'], ['G', 'G4', 392.00, 'String 3'], ['B', 'B4', 493.88, 'String 2'], ['D', 'D5', 587.33, 'String 1']
    ])
  },
  mandolin: {
    label: 'Mandolin', short: 'Mandolin', brand: 'MANDO', family: 'mandolin', shape: 'mandolin', order: 11,
    tuning: 'Standard', summary: 'G G D D A A E E', strings: strings([
      ['G', 'G3', 196.00, 'G course'], ['G', 'G3', 196.00, 'G course'], ['D', 'D4', 293.66, 'D course'], ['D', 'D4', 293.66, 'D course'],
      ['A', 'A4', 440.00, 'A course'], ['A', 'A4', 440.00, 'A course'], ['E', 'E5', 659.25, 'E course'], ['E', 'E5', 659.25, 'E course']
    ])
  },
  balalaika: {
    label: 'Balalaika', short: 'Balalaika', brand: 'BALA', family: 'balalaika', shape: 'balalaika', order: 12,
    tuning: 'Prima', summary: 'E E A', strings: strings([
      ['E', 'E4', 329.63, 'String 3'], ['E', 'E4', 329.63, 'String 2'], ['A', 'A4', 440.00, 'String 1']
    ])
  },
  'banjo-4': {
    label: 'Banjo 4-string', short: 'Banjo', brand: 'BANJO', family: 'banjo', shape: 'banjo', order: 13,
    tuning: 'Tenor', summary: '4-string', strings: strings([
      ['C', 'C3', 130.81, 'String 4'], ['G', 'G3', 196.00, 'String 3'], ['D', 'D4', 293.66, 'String 2'], ['A', 'A4', 440.00, 'String 1']
    ])
  },
  'banjo-5': {
    label: 'Banjo 5-string', short: 'Banjo', brand: 'BANJO', family: 'banjo', shape: 'banjo', order: 14,
    tuning: 'Open G', summary: '5-string', strings: strings([
      ['g', 'G4', 392.00, '5th string'], ['D', 'D3', 146.83, 'String 4'], ['G', 'G3', 196.00, 'String 3'], ['B', 'B3', 246.94, 'String 2'], ['D', 'D4', 293.66, 'String 1']
    ])
  }
};

export const instrumentList = Object.entries(instruments)
  .map(([id, instrument]) => ({ id, ...instrument }))
  .sort((a, b) => a.order - b.order);
