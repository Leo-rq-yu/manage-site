import React, { useState, useEffect } from 'react';
import { Card, Badge } from 'antd';

import { task, tasks } from './demo_data/tasks';

export default function Board() {
	const [cards, setCards] = useState<task[]>([]);

	useEffect(() => {
		// Simulate fetching data from a database
		const fetchData = async () => {
			// Replace this with your actual API call

			// Simulate network delay
			setTimeout(() => {
				setCards(tasks);
			}, 1000);
		};
		fetchData();
	}, []);

	// const determineDelay = (index: number):string => {
	// 	const delay_time = index+1;
	// 	return 'my-6 w-full shadow-md shadow-slate-400 animate-fade-left animate-once animate-delay-[' + delay_time.toString()+'s] animate-duration-[' + delay_time.toString()+'s]'; 
	// }

	const selectColor = (department: number):string => {
		switch (department) {
			case (1):
				return 'red'
			case (2):
				return 'cyan'
			case (3):
				return 'green'
			case (4):
				return 'purple'
			case (5):
				return 'volcano'
			case (6):
				return 'magenta'
			case (7):
				return 'orange'
			default:
				return ''
		}
	}

	const selectDept = (department: number):string => {
		switch (department) {
			case (1):
				return '活动部'
			case (2):
				return '学术部'
			case (3):
				return '外联部'
			case (4):
				return '宣传部'
			case (5):
				return '人事部'
			case (6):
				return '财务部'
			case (7):
				return '技术部'
			default:
				return ''
		}
	}

	return (
		<div className='flex flex-col justify-around'>
			{cards.map((card, index) => (
				<Badge.Ribbon text={selectDept(card.department)} color={selectColor(card.department)}>
					<Card hoverable key={index} title={card.title} bordered={true} className={'my-6 w-full shadow-md shadow-slate-400 animate-fade-left animate-once animate-delay-1000'}>
						<p>{card.content}</p>
					</Card>
				</Badge.Ribbon>
			))}
		</div>
	);
};