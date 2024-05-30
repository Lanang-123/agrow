import React from 'react'
import Image from 'next/image'
import Dagang from '../../public/assets/images/banner.jpg'

function About() {
  return (
    <div>
      <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full mb-12">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  AGROW
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-teal-700 sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <Image
            src={Dagang}
            className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
            alt="jhjh"
          />
        </div>
      </div>


      <div className='px-4 md:py-20 py-12 bg-teal-100'>
        <div class="mb-8 text-center">
          <h2 class="text-base font-semibold tracking-wide text-teal-900 uppercase">
            AGROW
          </h2>
          <p class="mt-2 md:text-4xl text-2xl font-extrabold leading-8 tracking-tight text-teal-700 dark:text-white sm:text-4xl">
            Mengapa memilih AGROW ?
          </p>
        </div>
        <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
          <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg shadow-teal-100 sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-teal-500 rounded-md">
                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                  </path>
                </svg>
              </div>
            </div>
            <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
              Website Design
            </h3>
            <p class="py-4 text-gray-500 text-md dark:text-gray-300">
              Encompassing today’s website design technology to integrated and build solutions relevant to your business.
            </p>
          </div>
          <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg shadow-teal-100 sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-teal-500 rounded-md">
                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                  </path>
                </svg>
              </div>
            </div>
            <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
              Branding
            </h3>
            <p class="py-4 text-gray-500 text-md dark:text-gray-300">
              Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
            </p>
          </div>
          <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg shadow-teal-100 sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-teal-500 rounded-md">
                <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                  </path>
                </svg>
              </div>
            </div>
            <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
              SEO Marketing
            </h3>
            <p class="py-4 text-gray-500 text-md dark:text-gray-300">
              Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full banner-image bg-blend-soft-light md:h-[24rem] h-[12rem] relative md:mb-0 mb-8">
        <div className="w-full absolute bg-teal-600 bg-opacity-50 h-full">
          <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
              <h1 class="text-2xl font-semibold text-white md:text-6xl">Build your new <span class="text-teal-400">Saas</span> Project</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-24 mb-24">
        <div class="relative">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p class="text-base font-semibold leading-6 text-teal-900 uppercase">
                AGROW
              </p>
              <h4 class="mt-2 text-2xl font-extrabold leading-8 text-teal-700 sm:text-3xl sm:leading-9">
                Interactivity between team members is the key of the success.
              </h4>
              <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
              </p>
              <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Live modifications
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Data tracker
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      24/24 support
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Free tips to improve work time
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
              <div class="relative space-y-4">
                <div class="flex items-end justify-center space-x-4 lg:justify-start">
                  <Image class="w-32 rounded-lg shadow-lg md:w-56" width="200" src={Dagang} alt="1" />
                  <Image class="w-40 rounded-lg shadow-lg md:w-64" width="260" src={Dagang} alt="2" />
                </div>
                <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                  <Image class="w-24 rounded-lg shadow-lg md:w-40" width="170" src={Dagang} alt="3" />
                  <Image class="w-32 rounded-lg shadow-lg md:w-56" width="200" src={Dagang} alt="4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
