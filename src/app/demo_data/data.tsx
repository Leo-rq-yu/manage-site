interface event {
  date: number;
  type: string;
  content: string;
}

export const events: event[] = [
  { date: 8, type: 'Website Re-Design Plan',content: 'This is usual event.'},
  { date: 8, type: 'success', content: 'This is usual event.' },
  { date: 10, type: 'warning', content: 'This is warning event.' },
  { date: 10, type: 'success', content: 'This is usual event.' },
  { date: 10, type: 'error', content: 'This is error event.' },
  { date: 15, type: 'warning', content: 'This is warning event' },
  { date: 15, type: 'success', content: 'This is very long usual event。。....' },
  { date: 15, type: 'error', content: 'This is error event 1.' },
  { date: 15, type: 'error', content: 'This is error event 2.' },
  { date: 15, type: 'error', content: 'This is error event 3.' },
  { date: 15, type: 'error', content: 'This is error event 4.' },
];
