'use client';

import { useState, Fragment, MouseEvent, useEffect, useRef } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import parse from 'html-react-parser';

import Calender from './calender';
import Board from './board';

import { task, tasks } from './demo_data/tasks';
import { event, events } from './demo_data/data';

import type { DatePickerProps } from 'antd';
import { Button, Modal, message, Tag, DatePicker } from 'antd';
import dayjs from 'dayjs';

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

class eventObj implements event {
	id: number;
	month: number;
	date: number;
	department: number;
	access: 'public'|'private'|'board';
	title: string;
	content: string;

	constructor(id: number, month: number, date: number, department: number, access: 'public'|'private'|'board', title: string, content: string) {
		this.id = id;
		this.month = month;
		this.date = date;
		this.department = department;
		this.access = access;
		this.title = title;
		this.content = content;
	}
};

export default function Home() {
  const [buttons, setButtons] = useState<event[]>([]);
  const [cards, setCards] = useState<task[]>([]);
  const effectRan = useRef(false);
  const [Modal1Visible, setModal1Visible] = useState(false);
  const [Modal2Visible, setModal2Visible] = useState(false);
  const [modal2Loading, setModal2Loading] = useState(false);
  const [Modal3Visible, setModal3Visible] = useState(false);
  const [modal3Loading, setModal3Loading] = useState(false);
  const [eventItem, setEventItem] = useState({ title: '', content: '' });
  const [newEvent, setNewEvent] = useState<eventObj | null>(null);
  const [taskItem, setTaskItem] = useState({ title: '', content: '', department: 0, id: 0 });

  const showModal1 = (title: string, content: string) => {
    setModal1Visible(true);
    setEventItem({ title, content });
  };

  const showModal2 = (title: string, content: string, department: number, id: number) => {
    setModal2Visible(true);
    setTaskItem({ title, content, department, id });
  };

  const showAddEvent = (task: task) => {
    setNewEvent(new eventObj(task.id, task.month, task.date, task.department, task.access, task.title, task.content));
    setModal3Visible(true);
  }

  const onChange: DatePickerProps['onChange'] = (value, dateString) => {
    const parsedDate = dayjs(dateString);
    const month = parsedDate.month() + 1;
    const date = parsedDate.date();

    setNewEvent(prevNewEvent => ({...prevNewEvent!, month, date}));
  };

  const handleCompleteTask = (id: number) => {
    setModal2Loading(true);
    setTimeout(() => {
      setModal2Loading(false);
      setModal2Visible(false);
    }, 2000);
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, completed: true } : card
      )
    );
    message.success('Task completed!');
    setTimeout(() => {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
      setTaskItem({ title: '', content: '', department: 0, id: 0 });
    }, 3000);
  };

  const handleCreateEvent = () => {
    setModal3Loading(true);
    setTimeout(() => {
      setModal3Loading(false);
      setModal3Visible(false);
    }, 2000);
    setButtons((prevButtons) => [...prevButtons, newEvent!]);
    message.success('Event created!');
    setTimeout(() => {
      setNewEvent(null);
    }, 3000);
  };

  useEffect(() => {
    // Simulate fetching data from a database
    const fetchData = async () => {
      // Replace this with your actual API call

      // Simulate network delay
      setTimeout(() => {
				setButtons(events);
			}, 1000);
      setTimeout(() => {
        setCards(tasks);
      }, 1000);
    };
    if (effectRan.current === false) {
      fetchData();
      console.log("fetch data!");
    }
    return () => {
      setCards([]);
      effectRan.current = true;
    }
  }, []);

  return (
    <main className="h-11/12">
      <div className="flex flex-row flex-wrap justify-start w-screen h-full px-6 bg-white">
        <div className="flex flex-col flex-wrap justify-start h-full w-3/5 py-4">
          <h1 className='font-sans text-3xl text-center text-black'> Calender </h1>
          <div className='px-10'>
            <Calender openModal1={showModal1} buttons={buttons}/>
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-start h-full w-2/5 py-4 px-2">
          <h1 className='font-sans text-3xl text-center text-black'> Task Board </h1>
          <div className='py-6 w-full'>
            <Board openModal2={showModal2} cards={cards} createEvent={showAddEvent}/>
          </div>
        </div>
        <Modal
          centered
          title={eventItem.title}
          open={Modal1Visible}
          onCancel={() => setModal1Visible(false)}
          footer={[
            <Button key="back" onClick={() => setModal1Visible(false)}>
              OK
            </Button>
          ]}
        >
          <p>{eventItem.content}</p>
        </Modal>
        <Modal
          centered
          width={750}
          bodyStyle={{ height: '500px', overflowY: 'scroll' }}
          title={
            <div className='flex flex-row'>
              <p className='mr-6'> {taskItem.title} </p> <Tag color={selectColor(taskItem.department)}>{selectDept(taskItem.department)}</Tag>
            </div>
          }
          open={Modal2Visible}
          onCancel={() => setModal2Visible(false)}
          footer={[
            <Button key="back" onClick={() => setModal2Visible(false)}>
              Return
            </Button>,
            <Button key="okay" className='bg-blue-500 hover:bg-white' onClick={() => setModal2Visible(false)}>
              OK
            </Button>,
            <Button key="complete" className='bg-blue-500 hover:bg-white' loading={modal2Loading} onClick={() => handleCompleteTask(taskItem.id)}>
              Complete
            </Button>
          ]}
        >
          <span>{parse(taskItem.content)}</span>
        </Modal>
        <Modal
          centered
          title={"Select the date and month"}
          open={Modal3Visible}
          onCancel={() => setModal3Visible(false)}
          footer={[
            <Button key="back" onClick={() => setModal3Visible(false)}>
              Return
            </Button>,
            <Button key="complete" className='bg-blue-500 hover:bg-white' loading={modal3Loading} onClick={() => handleCreateEvent()}>
              Add Event
            </Button>
          ]}
        >
          <DatePicker onChange={onChange} />
        </Modal>
      </div>

    </main>
  )
}
