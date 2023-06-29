import React, { useState, useEffect, useRef } from 'react';
import { Carousel, Card, Badge, Empty } from 'antd';
import { RightOutlined, LeftOutlined, EditOutlined, PlusOutlined, CheckCircleFilled } from '@ant-design/icons';
import parse from 'html-react-parser';

import { task } from './demo_data/tasks';

const selectColor = (department: number): string => {
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
			return 'yellow'
		case (6):
			return 'blue'
		case (7):
			return 'orange'
		default:
			return ''
	}
}

const selectDept = (department: number): string => {
	switch (department) {
		case (1):
			return 'Department 1'
		case (2):
			return 'Department 2'
		case (3):
			return 'Department 3'
		case (4):
			return 'Department 4'
		case (5):
			return 'Department 5'
		case (6):
			return 'Department 6'
		case (7):
			return 'Department 7'
		default:
			return ''
	}
}


interface ChildComponentProps {
	openModal2: (title: string, content: string, department: number, id: number) => void,
	createEvent: (task: task) => void,
	cards: task[]
}

export default function Board({ openModal2, createEvent, cards }: ChildComponentProps) {
	const carouselRef = useRef<any>(null);

	const pageSize = 3; // Number of cards to display on each page

	const showModal = (title: string, content: string, department: number, id: number) => {
		openModal2(title, content, department, id);
	};

	const renderCarouselPages = () => {
		// if (!cards) return <Empty description='No Task'/>


		const pages = [];

		for (let i = 0; i < cards.length; i += pageSize) {
			const pageCards = cards.slice(i, i + pageSize);
			const page = (
				<div key={i} className=''>
					{pageCards.map((card, index) => (
						<Badge.Ribbon key={index} text={selectDept(card.department)} color={selectColor(card.department)} className='mr-9 animate-fade-left animate-delay-1000'>
							<Card hoverable
								title={card.title}
								bordered={true}
								className={`my-6 mx-6 w-11/12 shadow-md shadow-slate-400 ${card.completed ? 'animate-delay-1000 animate-jump-out animate-once' : 'animate-fade-left animate-delay-1000'}`}
								actions={[
									card.completed ? <CheckCircleFilled key='complete' className='text-green-500' /> : <EditOutlined key="edit" onClick={() => showModal(card.title, card.content, card.department, card.id)} />,
									<PlusOutlined key="add" onClick={() => createEvent(card)} />,
								]}
							>
								<p>{parse(card.content)}</p>
							</Card>
						</Badge.Ribbon>
					))}
				</div>
			);

			pages.push(page);
		}

		return pages;
	};

	// const renderDots = () => {
	// 	return 
	// }

	return cards.length > 0 ? (
		<div>
			<Carousel ref={carouselRef} dotPosition='top' draggable dots={false} >
				{renderCarouselPages()}
			</Carousel>
			<div className='w-full flex flex-row justify-center self-bottom animate-fade animate-delay-1000'>
				<button className='px-4 py-2 rounded-l-2xl border-solid border-slate-400 border' onClick={() => { carouselRef.current?.prev(); }}> <LeftOutlined style={{ fontSize: '2rem' }} /> </button>
				<button className='px-4 py-2 rounded-r-2xl border-solid border-slate-400 border' onClick={() => { carouselRef.current?.next(); }}> <RightOutlined style={{ fontSize: '2rem' }} /> </button>
			</div>
		</div>

	) : (
		<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className='px-10 py-72 rounded-lg text-2xl font-sans' description="All Tasks Complete" />
	);
};
