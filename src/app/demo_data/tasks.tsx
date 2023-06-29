export interface task {
  id: number;
	month: number;
  date: number;
	department: number;
  access: 'public'|'private'|'board';
  title: string;
  content: string;
  completed?: boolean;
}

export const tasks: task[] = [
  { id: 171717, month:6, date: 8, department: 1, access: 'private', title: 'Sign contract',content: 'Cooperator:...<br />Person in charge:....'},
  { id: 272727, month:6, date: 15, department: 3, access: 'public', title: 'Volunteer registration', content: 'Registration Link: ' },
  { id: 373737, month:6, date: 10, department: 2, access: 'public', title: 'Reply email', content: 'Who sent me this one?' },
  { id: 474747, month:6, date: 20, department: 4, access: 'private', title: 'Meet with boss', content: 'Time and Room' },
  { id: 575757, month:6, date: 24, department: 7, access: 'private', title: 'Push to Github', content: 'Fix bug!' },
];
