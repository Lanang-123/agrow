import React from 'react'

function Footer() {
  return (
    <footer class="bg-teal-600 dark:bg-gray-900">
    <div class="container p-6 mx-auto">
        <div class="lg:flex">
            <div class="w-full -mx-6 lg:w-2/5">
                <div class="px-6">
                    <a href="#">
                        <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                    </a>

                    <p class="max-w-sm mt-2 text-white dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                    <div class="flex mt-6 -mx-2">
                        <a href="#" class="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Instagram">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.56 6H18C18.55 6 19 6.45 19 7V17C19 17.55 18.55 18 18 18H6C5.45 18 5 17.55 5 17V7C5 6.45 5.45 6 6 6H6.44C7.03 6 7.57 6.22 8 6.56C8.33 6.82 8.62 7.14 8.83 7.56C9.58 9.02 10.98 10 12.5 10C14.02 10 15.42 9.02 16.17 7.56C16.38 7.14 16.67 6.82 17 6.56C17.43 6.22 17.97 6 18.56 6H19ZM17 8.5C16.45 8.5 16 8.95 16 9.5C16 10.05 16.45 10.5 17 10.5C17.55 10.5 18 10.05 18 9.5C18 8.95 17.55 8.5 17 8.5ZM12 14C10.13 14 8.67 12.54 8.67 10.67C8.67 9.73 9 8.87 9.5 8.17C9.83 7.67 10.33 7.33 11 7.14C11.33 7.07 11.67 7 12 7C12.33 7 12.67 7.07 13 7.14C13.67 7.33 14.17 7.67 14.5 8.17C15 8.87 15.33 9.73 15.33 10.67C15.33 12.54 13.87 14 12 14Z" fill="currentColor"/>
                            </svg>
                        </a>

                    
                        <a href="#"
                            class="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                            aria-label="Facebook">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </a>
                    
                        <a href="#" class="mx-2 text-white transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="TikTok">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.42 16.65C16.33 16.77 16.19 16.84 16.04 16.84C15.89 16.84 15.74 16.78 15.65 16.67L14.77 15.77C14.71 15.71 14.67 15.65 14.67 15.59C14.67 15.53 14.71 15.47 14.77 15.42C15.47 14.75 15.91 13.89 15.91 12.98C15.91 11.55 14.76 10.4 13.33 10.4C11.91 10.4 10.76 11.55 10.76 12.98V13.05C10.76 13.15 10.67 13.23 10.57 13.23H8.71C8.61 13.23 8.53 13.15 8.53 13.05V10.47C8.53 10.37 8.61 10.29 8.71 10.29H10.57C10.67 10.29 10.76 10.37 10.76 10.47V10.66C10.76 10.75 10.67 10.84 10.57 10.84H9.14C9.04 10.84 8.96 10.92 8.96 11.01V13.05C8.96 13.15 8.87 13.23 8.77 13.23H7.95C7.85 13.23 7.76 13.15 7.76 13.05V10.47C7.76 10.37 7.85 10.29 7.95 10.29H8.77C8.87 10.29 8.96 10.37 8.96 10.47V10.66C8.96 10.75 8.87 10.84 8.77 10.84H7.34C7.24 10.84 7.15 10.92 7.15 11.01V15.96C7.15 16.05 7.24 16.13 7.34 16.13H8.77C8.87 16.13 8.96 16.21 8.96 16.3V16.5C8.96 16.6 8.87 16.68 8.77 16.68H7.95C7.85 16.68 7.76 16.76 7.76 16.86V17.03C7.76 17.13 7.85 17.21 7.95 17.21H10.43C10.53 17.21 10.61 17.13 10.61 17.03V16.89C10.61 16.79 10.7 16.71 10.8 16.71H11.3C11.4 16.71 11.49 16.79 11.49 16.89V17.03C11.49 17.13 11.58 17.21 11.68 17.21H14.17C14.27 17.21 14.35 17.13 14.35 17.03V16.89C14.35 16.79 14.44 16.71 14.54 16.71H15.06C15.16 16.71 15.24 16.79 15.24 16.89V17.03C15.24 17.13 15.33 17.21 15.43 17.21H17.89C17.98 17.21 18.06 17.13 18.06 17.03V16.83C18.06 16.73 17.98 16.65 17.89 16.65H16.42Z" fill="currentColor"/>
                            </svg>
                        </a>



                    </div>
                </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:flex-1">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 class="text-white font-bold uppercase dark:text-white">About</h3>
                        <a href="#" class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">Company</a>
                        <a href="#" class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">community</a>
                        <a href="#" class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">Careers</a>
                    </div>

                    <div>
                        <h3 class="text-white font-bold uppercase dark:text-white">Blog</h3>
                        <a href="#" class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">Tec</a>
                        <a href="#" class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">Music</a>
                        <a href="#" class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">Videos</a>
                    </div>

                    <div>
                        <h3 class="text-white font-bold uppercase dark:text-white">Products</h3>
                        <a href="#" class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">Mega cloud</a>
                        <a href="#" class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">Aperion UI</a>
                        <a href="#" class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">Meraki UI</a>
                    </div>

                    <div>
                        <h3 class="text-white font-bold uppercase dark:text-white">Contact</h3>
                        <span class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                        <span class="block mt-2 text-sm text-white dark:text-gray-400 hover:underline">example@email.com</span>
                    </div>
                </div>
            </div>
        </div>

        <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
            <p class="text-center text-white dark:text-gray-400">© AGROW 2024</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
