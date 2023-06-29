import React, { useState, useEffect, useRef } from 'react';
import { Badge, Calendar, Popover, Col, Row, Select, Button } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import type { CellRenderInfo } from 'rc-picker/lib/interface';

import { event } from './demo_data/data';

// const currentDate: Date = new Date();
// const date_str = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();

const selectColor = (department: number): string => {
	switch (department) {
		case (1):
			return 'inline-block px-3 py-2 my-1 rounded bg-red-500 hover:bg-red-400 transition duration-300'
		case (2):
			return 'inline-block px-3 py-2 my-1 rounded bg-cyan-500 hover:bg-cyan-400 transition duration-300'
		case (3):
			return 'inline-block px-3 py-2 my-1 rounded bg-green-500 hover:bg-green-400 transition duration-300'
		case (4):
			return 'inline-block px-3 py-2 my-1 rounded bg-purple-500 hover:bg-purple-300 transition duration-300'
		case (5):
			return 'inline-block px-3 py-2 my-1 rounded bg-yellow-500 hover:bg-yellow-300 transition duration-300'
		case (6):
			return 'inline-block px-3 py-2 my-1 rounded bg-blue-500 hover:bg-blue-300 transition duration-300'
		case (7):
			return 'inline-block px-3 py-2 my-1 rounded bg-orange-500 hover:bg-orange-400 transition duration-300'
		default:
			return ''
	}
}

interface ChildComponentProps {
	openModal1: (title: string, content: string) => void,
	buttons: event[]
}

dayjs.extend(dayLocaleData);

export default function Calender({ openModal1, buttons }: ChildComponentProps ) {

	const showModal = (title: string, content: string) => {
		openModal1(title, content);
	};

	const getListData = (value: Dayjs) => {
		const event_data = buttons.filter((obj) => obj.date === value.date());
		return event_data || [];
	};

	const dateCellRender = (value: Dayjs) => {
		const listData = getListData(value);
		return (
			<ul className="list-none p-0 m-0">
				{listData.map((item, index) => (
					<li key={index}>
						<Popover className='w-full overflow-hidden text-xs text-ellipsis whitespace-nowrap animate-fade animate-once animate-delay-1000' title={item.title} content={item.content}>
							<button className={selectColor(item.department)} onClick={() => showModal(item.title, item.content)}> {item.title} </button>
						</ Popover>
					</li>
				))}
			</ul>
		);
	};

	// 	const fullCellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
	// 		if (info.type === 'date') return dateCellRender(current);
	// 		if (info.type === 'month') return monthCellRender(current);
	// 		return info.originNode;
	// 	};

	// 	return <Calendar fullCellRender={fullCellRender} />;
	// };

	const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
		if (info.type === 'date') return dateCellRender(current);
		return info.originNode;
	};

	return <Calendar
		cellRender={cellRender}
		headerRender={({ value, type, onChange, onTypeChange }) => {
			const start = 0;
			const end = 12;
			const monthOptions = [];

			let current = value.clone();
			const localeData = value.localeData();
			const months = [];
			for (let i = 0; i < 12; i++) {
				current = current.month(i);
				months.push(localeData.monthsShort(current));
			}

			for (let i = start; i < end; i++) {
				monthOptions.push(
					<Select.Option key={i} value={i} className="month-item">
						{months[i]}
					</Select.Option>,
				);
			}

			const year = value.year();
			const month = value.month();
			const options = [];
			for (let i = year - 10; i < year + 10; i += 1) {
				options.push(
					<Select.Option key={i} value={i} className="year-item">
						{i}
					</Select.Option>,
				);
			}
			return (
				<div style={{ padding: 8 }}>
					<Row gutter={8} justify={'space-between'}>
						<div>
							<Badge color='red' text='Department 1' className='mr-2' />
							<Badge color='cyan' text='Department 2' className='mr-2' />
							<Badge color='green' text='Department 3' className='mr-2' />
							<Badge color='purple' text='Department 4' className='mr-2' />
							<Badge color='yellow' text='Department 5' className='mr-2' />
							<Badge color='blue' text='General' className='mr-2' />
							<Badge color='orange' text='Board' className='mr-2' />
						</div>
						<Row>
							<Col>
								<Select
									size="small"
									className="my-year-select"
									value={year}
									onChange={(newYear) => {
										const now = value.clone().year(newYear);
										onChange(now);
									}}
								>
									{options}
								</Select>
							</Col>
							<Col>
								<Select
									size="small"
									value={month}
									onChange={(newMonth) => {
										const now = value.clone().month(newMonth);
										onChange(now);
									}}
								>
									{monthOptions}
								</Select>
							</Col>
						</Row>
					</Row>
				</div>
			);
		}} />;
};