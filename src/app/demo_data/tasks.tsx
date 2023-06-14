export interface task {
	month: number;
  date: number;
	department: number;
  title: string;
  content: string;
}

export const tasks: task[] = [
  { month:6, date: 8, department: 1, title: 'Website Re-Design Plan',content: 'This is usual event.'},
  { month:6, date: 10, department: 2, title: 'warning', content: 'This is warning event.' },
  { month:6, date: 15, department: 3, title: 'warning', content: 'This is warning event' },
  { month:6, date: 20, department: 4, title: 'success', content: 'This is very long usual event。。....' },
];
