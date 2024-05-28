import Image from "next/image";
import Dagang from "../public/assets/images/dagang2.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="relative">
      <Image
        src={Dagang}
        className="absolute inset-0 md:object-cover object-center w-full h-full"
        alt="Dagang"
      />  
      <div className="relative bg-opacity-75 bg-teal-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a lazy dog
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-xl">
                  Silahkan bergabung dengan kami !
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                     Nama Lengkap
                    </label>
                    <input
                      placeholder="Masukkan nama lengkap"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input
                      placeholder="Masukkan email"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      placeholder="Masukkan password Anda"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-600 focus:shadow-outline focus:outline-none"
                    >
                      Daftar
                    </button>
                  </div>
                  <p className="text-xs text-center text-gray-600 sm:text-sm">
                    Kemanan data dan privasi kami jamin !
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* // About */}
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-700 uppercase rounded-full bg-teal-accent-400">
            AGROW
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-teal-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Semua</span>
          </span>{' '}
          Fitur - fitur unggulan <b className="text-teal-600">AGROW</b>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>


      <div className="grid md:max-w-sm gap-5 mb-8 lg:grid-cols-3 mx-auto lg:max-w-full">
        <div className="md:max-w-xs w-full p-6 rounded-md shadow-md hover:shadow-teal-200 bg-white dark:text-gray-900">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2">
            <span className="block text-xs text-teal-500 font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
          </div>
          <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        </div>
        <div className="max-w-xs p-6 rounded-md shadow-md hover:shadow-teal-200 bg-white dark:text-gray-900">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2">
            <span className="block text-xs text-teal-500 font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
          </div>
          <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        </div>
        <div className="max-w-xs p-6 rounded-md shadow-md hover:shadow-teal-200 bg-white dark:text-gray-900">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
          <div className="mt-6 mb-2">
            <span className="block text-xs text-teal-500 font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
            <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
          </div>
          <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        </div>
      </div>



    </div>


    {/* Jargon */}
    <div class="w-full banner-image bg-blend-soft-light h-[24rem] relative">
      <div className="w-full absolute bg-teal-600 bg-opacity-50 h-full">
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-white md:text-6xl">Build your new <span class="text-teal-400">Saas</span> Project</h1>
                <button class="md:w-full max-w-md px-5 py-2 md:px-8 md:py-3 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-teal-600 rounded-md lg:w-auto hover:bg-teal-500 focus:outline-none focus:bg-teal-500">Start project</button>
            </div>
        </div>
      </div>
    </div>


    {/* Produk */}
    
    <div class="w-full md:py-12 md:px-32 p-4 bg-white">
        <div class="md:flex md:items-end flex-col md:flex-row justify-between mb-12 header">
          <div class="title">
              <p class="mb-4 text-4xl font-bold text-teal-600">
                  Product Market
              </p>
              <p class="md:text-2xl text-md font-light text-gray-400">
                  All article are verified by 2 experts and valdiate by the CTO
              </p>
          </div>
          <div class="md:text-end block mt-8 md:mt-0">
                <Link href="/market" class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                      Lihat Semua
                </Link>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-full md:w-full">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/1.jpg" class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-indigo-500 text-md">
                            Video
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            Work at home
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            Work at home, remote, is the new age of the job, every person can work at home....
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="relative block">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>  
            <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-full md:w-full">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/2.jpg" class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-indigo-500 text-md">
                            Oui
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="relative block">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-full md:w-full">
                <a href="#" class="block w-full h-full">
                    <img alt="blog photo" src="/images/blog/3.jpg" class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-indigo-500 text-md">
                            Oui
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            test
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            The new supercar is here, 543 cv and 140 000$ !!
                        </p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="relative block">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div class="flex flex-col justify-between ml-4 text-sm">
                                <p class="text-gray-800 dark:text-white">
                                    Jean Jacques
                                </p>
                                <p class="text-gray-400 dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    {/* Education */}
    <div class="w-full md:py-12 md:px-32 p-4 bg-white">
        <div class="md:flex md:items-end flex-col md:flex-row justify-between mb-12 header">
          <div class="title">
              <p class="mb-4 text-4xl font-bold text-teal-600">
                  Education for Grow
              </p>
              <p class="md:text-2xl text-md font-light text-gray-400">
                  All article are verified by 2 experts and valdiate by the CTO
              </p>
          </div>
          <div class="md:text-end block mt-8 md:mt-0">
                <Link href="/market" class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                      Lihat Semua
                </Link>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-full md:w-full">
                <Link href="#" class="block w-full h-full">
                    <Image alt="blog photo" src={Dagang} class="object-cover w-full max-h-40"/>
                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                        <p class="font-medium text-teal-500 text-md">
                            Pengetahuan
                        </p>
                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                            Edukasi Tanaman Segar
                        </p>
                        <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            Work at home, remote, is the new age of the job, every person can work at home....
                        </p>
                        <div class="flex items-center justify-center mt-4 border-2 border-teal-500 p-1 rounded-lg hover:bg-teal-500">
                            <h3 className="text-center font-semibold hover:text-white">Detail</h3>
                        </div>
                    </div>
                </Link>
            </div> 
             
        </div>
    </div>


    </>
  );
}
