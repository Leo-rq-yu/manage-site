import React, { useState, useEffect } from 'react';
import type { BadgeProps } from 'antd';
import { Badge, Calendar, Popover, Button } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/lib/interface';

import { events } from './demo_data/data';

// const currentDate: Date = new Date();
// const date_str = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();

const getListData = (value: Dayjs) => {
	const event_data = events.filter((obj) => obj.date === value.date());
	return event_data || [];
};

const getMonthData = (value: Dayjs) => {
	if (value.month() === 8) {
		return 1394;
	}
};

export default function Calender() {
	const monthCellRender = (value: Dayjs) => {
		const num = getMonthData(value);
		return num ? (
			<div className="text-lg text-center">
				<section className='text-lg'>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	};

	const dateCellRender = (value: Dayjs) => {
		const listData = getListData(value);
		return (
			// <div className='w-full h-32 border border-slate-300 text-black text-center cursor-default'>
				// <h3>{value.date()}</h3>
				<ul className="list-none p-0 m-0">
					{listData.map((item) => (
						<li key={item.content}>
							<Popover className='w-full overflow-hidden text-xs text-ellipsis whitespace-nowrap z-10' content={item.content}>
								<button className='inline-block px-3 py-2 my-1 rounded bg-lime-600 hover:bg-lime-300 transition duration-300'> {item.type as BadgeProps['status']} </button>
							</ Popover>
						</li>
					))}
				</ul>
			//* </div> */}
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
	if (info.type === 'month') return monthCellRender(current);
	return info.originNode;
};

return <Calendar cellRender={cellRender} />;
};