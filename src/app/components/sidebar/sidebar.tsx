'use client';
import React from 'react';
import { useContext } from 'react';
import { Context } from '@/app/contexts/auth';
import Link from 'next/link';
import Fontawesome from '../fontawesome/fontawesome';

const Sidebar = () => {

    const { page, setPage, themeDark } = useContext(Context)

    return (
        <>
            <div className='flex flex-col h-100v justify-between'>

                <div className='text-center font-bold sans text-slate-50 mt-5 text-2xl' id='start-sidebar'>
                    <h1>PORTFOLIO</h1>
                </div>

                <div className='flex justify-center' >
                    <img src={'/media/perfil.png'} alt="Imagem de perfil" className='w-2/4 border-2 rounded-full ' />
                </div>

                <div className='text-center mt-1 text-slate-50 text-lg'>
                    <h1>Estácio Renan</h1>
                    <h3>Front End</h3>
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
                            <a href="#skill">
                                <div className='text-slate-50 cursor-pointer p-2 pb-2 pt-2  hover:bg-sky-700 font-bold '>
                                    ABOUT ME
                                </div>
                            </a>
                        </li>
                        <li onClick={() => setPage(2)}>
                            <a href="#works">
                                <div className='text-slate-50 cursor-pointer p-2 pb-2 pt-2   hover:bg-sky-700 font-bold '>
                                    WORKS
                                </div>
                            </a>
                        </li>
                        <li onClick={() => setPage(3)}>
                            <a href="#projects">
                                <div className='text-slate-50 cursor-pointer p-2 pb-2 pt-2  hover:bg-sky-700 font-bold '>
                                    PROJECTS
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='flex-col text-center mt-4'>
                    <ul >
                        <li onClick={() => setPage(1)}>
                            <a href="/media/resume.pdf"
                                 target='_blank'>
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
            </div >
        </>
    )
}
export default Sidebar;