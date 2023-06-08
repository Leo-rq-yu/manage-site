'use client';

import { useState, Fragment, MouseEvent } from 'react'
import Image from 'next/image'
import Router from 'next/router'

import Calender from './calender';

export default function Home() {

  return (
    <main className="min-h-screen">
      <div className="flex flex-row flex-wrap justify-start w-screen h-screen px-6">
        <div className="flex flex-col flex-wrap justify-start w-3/5 py-4">
          <h1 className='font-sans text-3xl text-center text-black'> Calender </h1>
          <div className='overflow-y-auto'>
            <Calender />
          </div>

        </div>
      </div>

    </main>
  )
}
