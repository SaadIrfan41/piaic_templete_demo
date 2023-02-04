import { ChevronRightIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'

import CourseSeection from '@/components/CourseSection'
import TestimonialSection from '@/components/TestimonialSection'

const Home = () => {
  return (
    <div className='bg-white'>
      <div className='relative overflow-hidden'>
        <main>
          <div className='bg-gray-900 pt-10 sm:pt-6  lg:overflow-hidden lg:pt-8 lg:pb-14'>
            <div className='mx-auto max-w-7xl lg:px-8'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div className='mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0'>
                  <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                    <Image
                      width={500}
                      height={500}
                      className='h-[300px] w-full object-contain sm:w-auto md:h-[500px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-[700px] lg:w-auto lg:max-w-none'
                      src='/president.png'
                      alt=''
                    />
                  </div>
                </div>
                <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left'>
                  <div className='lg:py-24'>
                    <a
                      href='https://portal.piaic.org/'
                      rel='noreferrer'
                      target='_blank'
                      className=' hidden  items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:inline-flex lg:text-sm xl:text-base'
                    >
                      <span className='rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-sm font-semibold leading-5 text-white'>
                        Admission&apos;s are OPEN
                      </span>
                      <span className='ml-4 text-sm'>Start Learning</span>
                      <ChevronRightIcon
                        className='ml-2 h-5 w-5 text-gray-500'
                        aria-hidden='true'
                      />
                    </a>
                    <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                      <span className='block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text  text-transparent sm:pb-5 lg:pb-0'>
                        PIAIC
                      </span>
                      <span className='block pb-3 xl:text-5xl'>
                        Education For The Future
                      </span>
                    </h1>
                    <p className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl '>
                      In this brand-new type of curriculum, students will learn
                      how to make money and boost exports in the classroom and
                      will begin doing so within six months of the
                      program&apos;s beginning. It resembles a cross between a
                      corporate venture and an educational project.
                    </p>
                    <div className='mt-10 sm:mt-12'>
                      <form
                        action='#'
                        className='sm:mx-auto sm:max-w-xl lg:mx-0'
                      >
                        <div className='sm:flex'>
                          <div className='min-w-0 flex-1'>
                            <label htmlFor='email' className='sr-only'>
                              Email address
                            </label>
                            <input
                              id='email'
                              type='email'
                              placeholder='Enter your email'
                              className='block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900'
                            />
                          </div>
                          <div className='mt-3 pb-3 sm:mt-0 sm:ml-3'>
                            <a
                              href='https://portal.piaic.org/'
                              rel='noreferrer'
                              target='_blank'
                              className='block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900'
                            >
                              Get Started Now
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COURSE section  */}
          <CourseSeection />

          {/* Testimonial section */}
          <TestimonialSection />

          {/* Strategic Partners Section */}

          <div className=' mt-12 bg-opacity-25'>
            <div className='mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8'>
              <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
                <h2 className='mx-auto max-w-md text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left'>
                  Strategic Partners
                </h2>
                <div className='mt-8 flow-root self-center lg:mt-0'>
                  <div className='-mt-4 -ml-8 flex flex-wrap  lg:-ml-4'>
                    <div className='mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0'>
                      <Image
                        style={{ width: '100px', height: 'auto' }}
                        width={100}
                        height={100}
                        className='h-12 w-12'
                        src='/panacloud_Logo.png'
                        alt='Panacloud Logo'
                      />
                    </div>
                    <div className='mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0'>
                      <Image
                        width={100}
                        height={100}
                        style={{ width: 'auto', height: 'auto' }}
                        className='h-12'
                        src='/saylani_Logo.png'
                        alt='Saylani Logo'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
