export interface event {
  month: number;
  date: number;
  department: number;
  access: 'public'|'private'|'board';
  title: string;
  content: string;
}

export const events: event[] = [
  { month: 6, date: 8, department: 1, access: 'private', title: '部门日常例会',content: '活动部每周例会，时间是....'},
  { month: 6, date: 8, department: 2, access: 'public', title: '团建', content: 'CESA集体团建' },
  { month: 6, date: 10, department: 2, access: 'public', title: '宣传推文发出', content: '赞助商的推文发出' },
  { month: 6, date: 10, department: 3, access: 'public', title: '新生接机报名截止', content: '新生接机报名截止，数据收集...' },
  { month: 6, date: 10, department: 4, access: 'board', title: 'XXXX', content: 'XXXXXXXXX' },
  { month: 6, date: 15, department: 5, access: 'private', title: '部门日常例会', content: '财务部例会，链接....' },
  { month: 6, date: 15, department: 1, access: 'board', title: '委员会会议', content: '会议链接...' },
  { month: 6, date: 15, department: 3, access: 'private', title: '和赞助商谈判', content: '和XX赞助商探勘，XXX参加...' },
  { month: 6, date: 15, department: 7, access: 'private', title: '探店推文设计', content: 'XXX和XXX参与这次探店加记录...' },
  { month: 6, date: 15, department: 5, access: 'private', title: '活动策划', content: 'XXX负责主题策划，XXX负责对接...' },
  { month: 6, date: 15, department: 3, access: 'public', title: 'XXXXX', content: 'XXXXXXXXXX' },
];
