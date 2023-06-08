interface event {
  title: string;
  startDate: Date;
  endDate: Date;
}

export const appointments: event[] = [
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2023, 6, 7, 9, 30),
    endDate: new Date(2023, 6, 7, 11, 30),
  }, {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2023, 6, 7, 12, 0),
    endDate: new Date(2023, 6, 8, 13, 0),
  }, {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2023, 6, 10, 14, 30),
    endDate: new Date(2023, 6, 11, 15, 30),
  }, {
    title: 'Approve Personal Computer Upgrade Plan',
    startDate: new Date(2023, 6, 22, 10, 0),
    endDate: new Date(2023, 6, 23, 11, 0),
  }, {
    title: 'Final Budget Review',
    startDate: new Date(2023, 6, 24, 12, 0),
    endDate: new Date(2023, 6, 24, 13, 35),
  }
];
