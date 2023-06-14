'use client';

import { useState, Fragment, MouseEvent } from 'react'
import Image from 'next/image'
import Router from 'next/router'

import Calender from './calender';
import Board from './board';

export default function Home() {

  return (
    <main className="h-auto">
      <div className="flex flex-row flex-wrap justify-start w-full h-full px-6 bg-white">
        <div className="flex flex-col flex-wrap justify-start w-3/5 py-4">
          <h1 className='font-sans text-3xl text-center text-black'> Calender </h1>
          <div className='px-10'>
            <Calender />
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-start w-2/5 py-4">
          <h1 className='font-sans text-3xl text-center text-black'> Task Board </h1>
          <div className='px-10 py-6'>
            <Board />
          </div>
        </div>
      </div>

    </main>
  )
}
