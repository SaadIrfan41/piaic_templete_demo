import Link from 'next/link'
import React from 'react'
import { courses } from './data'
import Image from 'next/image'

const CourseSeection = () => {
  return (
    <div
      id='courses-section'
      className='relative bg-white py-16 sm:py-24 lg:py-16'
    >
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-lg font-semibold text-cyan-600'>Popular Courses</h2>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Our Avaliable Top Courses
        </p>

        <div className='relative'>
          <div className='mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8'>
            {courses.map((course) => (
              <div
                key={course.id}
                className='flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-300 hover:scale-105'
              >
                <div className='flex-shrink-0'>
                  <Image
                    height={500}
                    width={500}
                    quality={100}
                    className='h-48 w-full object-cover'
                    src={course.imageUrl}
                    alt='LOADING IMAGE'
                  />
                </div>
                <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-cyan-600'>
                      <Link href={course.href} className='hover:underline'>
                        {course.shortName}
                      </Link>
                    </p>
                    <Link href={course.href} className='mt-2 block'>
                      <p className='text-xl font-semibold text-gray-900'>
                        {course.title}
                      </p>
                      <p className='tranc mt-3 text-base text-gray-500'>
                        {course.preview}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSeection
