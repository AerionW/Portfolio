/* eslint-disable @next/next/no-img-element */
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <section id='links'>
    <div className='py-20'>
        <h1 className='links'>    
            Here are some of {' '}
            <span className='text-red-100'>my Profiles</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center py-4 gap-16 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link }) => (
                <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-#09090b'>
                               <img src='/bg.png' alt='bg-img'/>
                            </div>
                            <img
                                src={img }
                                alt={title}
                                className='z-10 Relative bottom-5'
                            />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>   
                            <div className='flex items-center'>   
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-red rounded-full bg-black lg:w-10 lg;h-10 w-8 h-8 flex justify-center items-center'
                                    style={{
                                        transform: `translateX(-${5 * index + 2}px)`,
                                    }}
                                    >
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    Check Live Site
                                </p>
                                <FaLocationArrow className='ms-3' color='Red'/>
                            </div>

                        </div>

                    </PinContainer>
                </div>
           ))}
        </div>
    </div>
    </section>
  )
} 

export default RecentProjects