'use client';
import Image from 'next/image';
import React from 'react';
import { Menu } from '@headlessui/react';
import { MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home({ suggestions = [], setKeyword }) {
  return (
    <main className='container mx-auto'>
      <div className='grid grid-flow-row navbar bg-base-100 mb-10'>
        <a className='btn-lg btn-ghost normal-case text-xl'>드롭다운 키보드 이벤트</a>
        <div>@headlessui/react 메뉴 드롭다운 </div>
      </div>

      <search-suggestion className='relative'>
        <Menu>
          <Menu.Button className='btn btn-lg'>열기</Menu.Button>
          <Menu.Items
            tabIndex={0}
            className='dropdown-content absolute z-[3] border rounded-xl shadow-sm bg-base-100 left-0 right-0'
          >
            <Menu.Item className='flex rounded-xl items-center'>
              {({ active }) => (
                <Link className={`${active && 'bg-gray-200'}`} href=''>
                  <div className='px-2 items-center'>
                    <MapPinIcon className='w-4 md:w-6 text-gray-300' />
                  </div>
                  <div className='flex flex-col p-1'>
                    <div className='text-lg md:text-xl'> s.text </div>
                    <div className='text-sm md:text-base md:text-md text-gray-400'>
                      s.description
                    </div>
                  </div>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item className='flex rounded-xl items-center'>
              {({ active }) => (
                <Link className={`${active && 'bg-gray-200'}`} href=''>
                  <div className='px-2 items-center'>
                    <MapPinIcon className='w-4 md:w-6 text-gray-300' />
                  </div>
                  <div className='flex flex-col p-1'>
                    <div className='text-lg md:text-xl'> s.text </div>
                    <div className='text-sm md:text-base md:text-md text-gray-400'>
                      s.description
                    </div>
                  </div>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item className='flex rounded-xl items-center'>
              {({ active }) => (
                <Link className={`${active && 'bg-gray-200'}`} href=''>
                  <div className='px-2 items-center'>
                    <MapPinIcon className='w-4 md:w-6 text-gray-300' />
                  </div>
                  <div className='flex flex-col p-1'>
                    <div className='text-lg md:text-xl'> s.text </div>
                    <div className='text-sm md:text-base md:text-md text-gray-400'>
                      s.description
                    </div>
                  </div>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item className='flex p-1 rounded-xl items-center'>
              {({ active }) => (
                <Link className={`${active && 'bg-gray-200'}`} href=''>
                  <div className='px-2 items-center'>
                    <MapPinIcon className='w-4 md:w-6 text-gray-300' />
                  </div>
                  <div className='flex flex-col p-1'>
                    <div className='text-lg md:text-xl'> s.text </div>
                    <div className='text-sm md:text-base md:text-md text-gray-400'>
                      s.description
                    </div>
                  </div>
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </search-suggestion>
    </main>
  );
}
