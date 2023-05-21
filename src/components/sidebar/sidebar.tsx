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

                <div className='text-center text-slate-50 mt-5 text-2xl'>
                    <h1>PORTFOLIO</h1>
                </div>

                <div className='flex justify-center' >
                    <img src={'/media/perfil.png'} alt="Imagem de perfil" className='w-3/4' />
                </div>

                <div className='text-center  mt-1 text-slate-50 text-xl'>
                    <h1>Estácio Renan</h1>
                    <h3>Full-Stack Jr</h3>
                </div>

                <div className='mt-2'>
                    <ul className="flex flex-row justify-center gap-4 ">
                        <li>
                            <Link href={'https://www.linkedin.com/in/estaciorenandesousarodrigues/'} target="_blank" className='cursor-pointer'>
                                <img src={'media/social-light/linkedin.webp'} width={50} alt="Linkedin" />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://github.com/estaciorenan'} target="_blank" className='cursor-pointer'>
                                <img src={'/media/social-light/github.png'} width={50} alt="Github" />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://wa.link/q12jf9'} target="_blank" className='cursor-pointer'>
                                <img src={'/media/social-light/whatsapp.png'} width={50} alt="Whatsapp" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='flex-col text-center mt-4'>
                    <ul >
                        <li onClick={() => setPage(1)}>
                            <div className='text-slate-50 cursor-pointer p-2 pb-2 pt-2  hover:bg-sky-700 font-bold'>
                                ABOUT ME
                            </div>
                        </li>
                        <li onClick={() => setPage(2)}>
                            <div className='text-slate-50 cursor-pointer p-2 pb-2 pt-2   hover:bg-sky-700 font-bold'>
                                WORKS
                            </div>
                        </li>
                        <li onClick={() => setPage(3)}>
                            <div className='text-slate-50 cursor-pointer p-2 pb-2 pt-2  hover:bg-sky-700 font-bold'>
                                PROJECTS
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='flex-col text-center mt-4'>
                    <ul >
                        <li onClick={() => setPage(1)}>
                            <a href="/media/resume.pdf" download>
                                <div className='bg-nav-list text-slate-50 cursor-pointer p-2 m-2  hover:bg-sky-700 rounded-xl font-bold'>
                                    RESUME  <Fontawesome classe="fa-solid fa-cloud-arrow-down" />

                                </div>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className='text-center text-slate-50 mb-2 text-sm'>
                    © 2023 – All rights reserved <br /> Desenvolvido por Estácio Renan
                </div>
            </div>
        </>
    )
}
export default Sidebar;