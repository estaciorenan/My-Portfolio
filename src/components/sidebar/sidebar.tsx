'use client';
import React from 'react';
import { useContext } from 'react';
import { Context } from '@/contexts/auth';
import Link from 'next/link';
import Fontawesome from '../fontawesome/fontawesome';

const Sidebar = () => {

    const { page, setPage, themeDark } = useContext(Context)

    return (
        <>
            <div className='flex flex-col h-100v justify-between'>

                <div className='text-center font-bold sans text-slate-50 mt-5 text-2xl'>
                    <h1>PORTFOLIO</h1>
                </div>

                <div className='flex justify-center' >
                    <img src={'/media/perfil.png'} alt="Imagem de perfil" className='w-2/4 border-2 rounded-full ' />
                </div>

                <div className='text-center  mt-1 text-slate-50 text-lg'>
                    <h1>Estácio Renan</h1>
                    <h3>Full-Stack Jr</h3>
                </div>

                <div className='mt-2'>
                    <ul className="flex flex-row justify-center gap-4 ">
                        <li>
                            <Link href={'https://www.linkedin.com/in/estaciorenandesousarodrigues/'} target="_blank" className='cursor-pointer'>
                                <img src={'media/social-light/linkedin.webp'} width={40} alt="Linkedin" />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://github.com/estaciorenan'} target="_blank" className='cursor-pointer'>
                                <img src={'/media/social-light/github.png'} width={40} alt="Github" />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://wa.link/q12jf9'} target="_blank" className='cursor-pointer'>
                                <img src={'/media/social-light/whatsapp.png'} width={40} alt="Whatsapp" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='flex-col text-center mt-4'>
                    <ul >
                        <li onClick={() => setPage(1)}>
                            <div className='text-slate-50 cursor-pointer p-2 pb-2 pt-2  hover:bg-sky-700 font-bold hover:animate-bounce'>
                                ABOUT ME
                            </div>
                        </li>
                        <li onClick={() => setPage(2)}>
                            <div className='text-slate-50 cursor-pointer p-2 pb-2 pt-2   hover:bg-sky-700 font-bold hover:animate-bounce'>
                                WORKS
                            </div>
                        </li>
                        <li onClick={() => setPage(3)}>
                            <div className='text-slate-50 cursor-pointer p-2 pb-2 pt-2  hover:bg-sky-700 font-bold hover:animate-bounce'>
                                PROJECTS
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='flex-col text-center mt-4'>
                    <ul >
                        <li onClick={() => setPage(1)}>
                            <a href="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQJY6J2s_T27QAAAAYhEQD7QbgMF-6b3-UoSVfFZa97Pg3COPxC4AHmJ_Smh40ZI5MtE-MoCbY3yAtPdxQqPqdpAL90Bwx8ms2BSFSkOb3Pu_NF8daTyNPRo-u3ejjDX4SLmUaR2MAAfjnbWcFaNk49QcdiuKPQ9vW3abQICPyd9jcMxRv2DSVd6A-DztVSHg_ADhquXgSGOmZE-jJyYV42VOr20tk7Bs9ty8m_7Iru7VnQGwSag7MfFKB-0cHLpv83SmAMuh1lN3xk1q6_aC7Y2wTdkOLDwRM4Y3NeryJnkFPiCRn4I6xJIvQbfTB69hj9aDRwWqsa9h_61XY-hrBPZLQn7LZc_SzWg4zz3ktMoBY7uKl8D1Nf47ONXLxO3ENc90QAVWid_5LUI6njGJiQnFFdIR1NlH47M4kQ7bnPyy9hnaLiUkGhY105Zi6UwOD-6c7FW-XpUleWxSCuJOH6LNrgHqQuM0_IbjwWjRowhXPiJPCD-rw9vngrvVin7bNgf0wY0mNDF4KhR-2HdypjPgmLcTzAg1gFgcF8iJBOAN6TC9PF4GbhkPhP5qIy4xKY_CA&x-ambry-um-filename=Profile.pdf" download>
                                <div className='border-2 text-slate-50 cursor-pointer p-2 m-2  rounded-xl font-bold hover:text-sky-600 hover:border-sky-600 animate-pulse'>
                                    RESUME  <Fontawesome classe="fa-solid fa-cloud-arrow-down" />

                                </div>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className='text-center text-slate-50 mb-2 text-xs'>
                    © 2023 – All rights reserved <br /> Desenvolvido por Estácio Renan
                </div>
            </div>
        </>
    )
}
export default Sidebar;