export interface event {
  month: number;
  date: number;
  department: number;
  access: 'public'|'private'|'board';
  title: string;
  content: string;
}

export const events: event[] = [
  { month: 6, date: 8, department: 1, access: 'private', title: 'Private event',content: 'Time and link to the event'},
  { month: 6, date: 8, department: 2, access: 'public', title: 'Department event', content: 'All staff' },
  { month: 6, date: 10, department: 2, access: 'public', title: 'Publication', content: 'Source...' },
  { month: 6, date: 10, department: 3, access: 'public', title: 'Public event', content: 'Time and link to the event' },
  { month: 6, date: 10, department: 4, access: 'board', title: 'XXXX', content: 'XXXXXXXXX' },
  { month: 6, date: 15, department: 5, access: 'private', title: 'Meeting', content: 'Zoom link' },
  { month: 6, date: 15, department: 1, access: 'board', title: 'Board meeting', content: 'Zoom link' },
  { month: 6, date: 15, department: 3, access: 'private', title: 'Another meeting', content: 'Zoom link' },
  { month: 6, date: 15, department: 7, access: 'private', title: 'Still meeting', content: 'XXX will join' },
  { month: 6, date: 15, department: 5, access: 'private', title: "Report", content: 'Room XXXXX' },
  { month: 6, date: 15, department: 3, access: 'public', title: 'XXXXX', content: 'XXXXXXXXXX' },
];
