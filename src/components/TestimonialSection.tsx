import Image from 'next/image'
import React from 'react'

const TestimonialSection = () => {
  return (
    <div className='bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 pt-5 lg:relative lg:z-10 lg:pb-0'>
      <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8'>
        <div className='relative lg:-my-8'>
          <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0'>
            <div className='aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl bg-white bg-opacity-30 shadow-xl lg:h-full'>
              <Image
                fill={true}
                className='rounded-xl object-cover lg:h-full lg:w-full'
                src='/zia.png'
                alt='SIR ZIA IMAGE LOADING'
              />
            </div>
          </div>
        </div>
        <div className='mt-12 lg:col-span-2 lg:m-0 lg:pl-8'>
          <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20'>
            <div>
              <svg
                className='h-12 w-12 text-white opacity-25'
                fill='currentColor'
                viewBox='0 0 32 32'
                aria-hidden='true'
              >
                <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
              </svg>
              <p className='mt-6 text-xl font-medium text-white'>
                The internet is without a doubt the most important technological
                development in human history. Web3, 3D Metaverse, AI, IoT,
                Cloud, and Edge technologies expand the internet as we know it
                by introducing novel features and advancements. Metaverse will
                make use of all aspects of modern technology, including 3D, VR,
                AR, AI, blockchain, cloud and edge computing, voice computing,
                ambient computing, and more.
              </p>
            </div>
            <footer className='mt-6'>
              <p className='text-base font-medium text-white'>ZIA KHAN</p>
              <p className='text-base font-medium text-cyan-100'>
                CEO at PanaCloud
              </p>
              <p className='text-base font-medium text-cyan-100'>
                COO at PIAIC
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
