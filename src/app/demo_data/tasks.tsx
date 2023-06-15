export interface task {
	month: number;
  date: number;
	department: number;
  access: 'public'|'private'|'board';
  title: string;
  content: string;
}

export const tasks: task[] = [
  { month:6, date: 8, department: 1, access: 'private', title: '新生接机策划',content: '策划案链接....<br />主负责人.....，其他策划人员....'},
  { month:6, date: 15, department: 3, access: 'public', title: '转专业大会志愿者', content: '志愿者报名链接...' },
  { month:6, date: 10, department: 2, access: 'public', title: '赞助推文转发', content: '将赞助商推文转发并且保存24小时之后截图上传.....' },
  { month:6, date: 20, department: 4, access: 'private', title: '小红书更新', content: '每周更新社团日常，本周主题.....' },
  { month:6, date: 24, department: 7, access: 'private', title: 'Github运维', content: '功能实现' },
];
