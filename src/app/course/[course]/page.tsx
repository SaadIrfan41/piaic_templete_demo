import { courses } from '@/components/data'
import Image from 'next/image'
import { FC } from 'react'

interface pageProps {
  params: { course: string }
}
const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]

const page: FC<pageProps> = ({ params }) => {
  const course = courses.filter((course) => course.shortName === params.course)
  // console.log(course)
  return (
    <div className='relative bg-white py-16 sm:py-24'>
      <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8'>
        <div className='relative sm:py-16 lg:py-0'>
          <div
            aria-hidden='true'
            className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
          >
            <div className='absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72' />
            <svg
              className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
              width={404}
              height={392}
              fill='none'
              viewBox='0 0 404 392'
            >
              <defs>
                <pattern
                  id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
              />
            </svg>
          </div>
          <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20'>
            {/* Testimonial card*/}
            <div className='relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl'>
              <Image
                width={500}
                height={500}
                className='absolute inset-0 h-full w-full object-cover'
                src={course[0].imageUrl}
                alt='LOADING IMAGE'
              />
            </div>
          </div>
        </div>

        <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
          {/* Content area */}
          <div className='pt-12 sm:pt-16 lg:pt-20'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              {course[0].title}
            </h2>
            <div className='mt-6 space-y-6 text-gray-500'>
              <p className='text-lg leading-7'>{course[0].details}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto h-full w-full pt-10'>
        <h1 className='mt-4 text-center text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
          <span className=' bg-cyan-800 bg-clip-text text-transparent  underline sm:pb-5 lg:pb-0'>
            {course[0].title} Road Map
          </span>
        </h1>

        <div className='wrap relative h-full overflow-hidden p-10'>
          <div className='lg:border-2-2  lg:absolute lg:left-[50%] lg:h-full lg:border lg:border-gray-700 lg:border-opacity-20' />

          {course[0].courseTimeline.map((timeline, index) => (
            <div
              key={index}
              className={` lg:mb-8 lg:flex lg:w-full ${
                index % 2 == 0 ? 'lg:flex-row-reverse' : ''
              } lg:items-center lg:justify-between`}
            >
              <div className=' w-5/12'></div>
              <div className='z-20  flex items-center justify-center'>
                <h1 className='mx-auto h-8 w-8  rounded-full  bg-cyan-800 text-center text-lg font-semibold text-white shadow-xl '>
                  {index + 1}
                </h1>
              </div>
              <div className=' mb-5 w-full rounded-lg p-7 px-10 shadow-xl lg:w-5/12'>
                <p className='bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-lg font-medium leading-snug tracking-wide text-opacity-100 '>
                  {timeline.tag}
                </p>
                <h3 className='mb-3 text-xl font-bold text-black'>
                  {timeline.heading}
                </h3>
                <p className='text-sm font-semibold leading-snug tracking-[.1rem] text-opacity-100'>
                  {timeline.preview}
                </p>
              </div>
            </div>
          ))}

          {/* <div className='left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between'>
            <div className=' w-5/12'></div>
            <div className='z-20  flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl'>
              <h1 className='mx-auto text-lg font-semibold text-white'>2</h1>
            </div>
            <div className=' w-5/12 rounded-lg bg-red-400 px-6 py-4 shadow-xl'>
              <h3 className='mb-3 text-xl font-bold text-white'>Lorem Ipsum</h3>
              <p className='text-sm font-medium leading-snug tracking-wide text-white text-opacity-100'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default page
