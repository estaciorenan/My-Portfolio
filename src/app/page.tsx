'use client';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '@/components/sidebar/sidebar';
import SwicthComponents from '@/components/switch/switch';
import { AuthContext } from '@/contexts/auth';
import { Context } from '@/contexts/auth';
import { useContext } from 'react';
import dynamic from 'next/dynamic';

const App = ({ Component, pageProps }: AppProps) => {
  const { themeDark, page } = useContext(Context)


  return (
    <>
      <AuthContext>
        <body >
          <div className='
          xl:grid lg:grid md:flex sm:flex xs:flex
          xl:grid-cols-12 lg:grid-cols-12 md:w-full sm:w-full xs:w-full
          '>
            <div className='
            xl:grid lg:grid md:flex sm:flex xs:flex
            xl:col-span-2 lg:col-span-3 md:w-full sm:w-full xs:w-full
            bg-bg-aside'
            >
              <Sidebar />
            </div>
            <div className='
            xl:grid lg:grid md:flex sm:flex xs:flex
            xl:col-span-10 lg:col-span-9 md:w-full sm:w-full xs:w-full
            bg-bg-main '
            >
              <SwicthComponents />
            </div>
          </div>
        </body>
      </AuthContext>
    </>
  )
}
export default dynamic(() => Promise.resolve(App), { ssr: false })