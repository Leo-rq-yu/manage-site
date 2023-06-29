export interface event {
  id: number;
  month: number;
  date: number;
  department: number;
  access: 'public'|'private'|'board';
  title: string;
  content: string;
}

export const events: event[] = [
  { id: 161616, month: 6, date: 8, department: 1, access: 'private', title: 'Private event',content: 'Time and link to the event'},
  { id: 262626, month: 6, date: 8, department: 2, access: 'public', title: 'Department event', content: 'All staff' },
  { id: 363636, month: 6, date: 10, department: 2, access: 'public', title: 'Publication', content: 'Source...' },
  { id: 464646, month: 6, date: 10, department: 3, access: 'public', title: 'Public event', content: 'Time and link to the event' },
  { id: 565656, month: 6, date: 10, department: 4, access: 'board', title: 'XXXX', content: 'XXXXXXXXX' },
  { id: 666666, month: 6, date: 15, department: 5, access: 'private', title: 'Meeting', content: 'Zoom link' },
  { id: 767676, month: 6, date: 15, department: 1, access: 'board', title: 'Board meeting', content: 'Zoom link' },
  { id: 868686, month: 6, date: 15, department: 3, access: 'private', title: 'Another meeting', content: 'Zoom link' },
  { id: 969696, month: 6, date: 15, department: 7, access: 'private', title: 'Still meeting', content: 'XXX will join' },
  { id: 171717, month: 6, date: 15, department: 5, access: 'private', title: "Report", content: 'Room XXXXX' },
  { id: 272727, month: 6, date: 15, department: 3, access: 'public', title: 'XXXXX', content: 'XXXXXXXXXX' },
];
