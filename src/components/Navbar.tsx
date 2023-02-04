'use client'
import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navigation = [{ name: 'Available Programs' }]
const Navbar = () => {
  const path = usePathname()

  return (
    <Popover as='header' className='relative'>
      <div className={`${path !== '/' ? 'bg-gray-100' : 'bg-gray-900'} pt-6`}>
        <nav
          className='relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6'
          aria-label='Global'
        >
          <div className='flex flex-1 items-center'>
            <div className='flex w-full items-center justify-between lg:w-auto'>
              <Link href='/'>
                <span className='sr-only'>PIAIC</span>
                <Image
                  width={100}
                  height={100}
                  className='h-[100px] w-auto md:h-[100px]'
                  src='/PIAIC_LOGO.svg'
                  alt=''
                />
              </Link>
              <div className='-mr-2 flex items-center lg:hidden'>
                <Popover.Button className='focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  <Bars3Icon className='h-10 w-10' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='hidden space-x-8 md:ml-10 md:justify-center lg:flex'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`${
                    path !== '/' ? '/#courses-section' : '#courses-section'
                  }`}
                  className={`text-base font-medium   ${
                    path !== '/'
                      ? 'text-black after:bg-gray-700 '
                      : 'text-white after:bg-white hover:text-gray-300'
                  } relative after:absolute after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl  after:duration-300 hover:after:w-full `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-50 origin-top transform p-2 transition lg:hidden'
        >
          <div className='overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5'>
            <div className='flex items-center justify-between px-5 pt-4'>
              <div>
                <img className='h-8 w-auto' src='/PIAIC_LOGO.svg' alt='' />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='pt-5 pb-6'>
              <div className='space-y-1 px-2'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={`${
                      path !== '/' ? '/#courses-section' : '#courses-section'
                    }`}
                    className='block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar
