import React from 'react'
import { courses, footerNavigation } from './data'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gray-50' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-md px-4 pt-12 sm:max-w-7xl sm:px-6 lg:px-8 lg:pt-16'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <Image
              width={50}
              height={50}
              style={{ width: '80px', height: '80px' }}
              className='h-10'
              src='/PIAIC_LOGO.svg'
              alt='Company name'
            />
            <p className='text-base text-gray-500'>
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program&apos;s beginning. It resembles
              a cross between a corporate venture and an educational project.
            </p>
            <div className='flex space-x-6'>
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  rel='noreferrer'
                  target='_blank'
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
          <div className=' mt-7'>
            <div className=' flex'>
              <div>
                <h3 className='text-base font-medium text-gray-900'>Courses</h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {courses.map((course) => (
                    <li key={course.id}>
                      <Link
                        href={course.href}
                        className={`relative text-base  font-medium text-gray-500 
                              after:absolute after:left-0 after:-bottom-[5px] after:h-[3px] after:w-[0%] after:rounded-xl after:bg-gray-700  after:duration-300 hover:after:w-full `}
                      >
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 ml-3 md:mt-0'>
                <h3 className='text-base font-medium text-gray-900'>
                  PIAIC Helpline
                </h3>
                <p className='text-base text-gray-500 hover:text-gray-900'>
                  +92-308-2220203 (WhatsApp as well)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 border-t border-gray-200 py-8'>
          <p className='text-base text-gray-400 xl:text-center'>
            &copy; 2023 PIAIC, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
