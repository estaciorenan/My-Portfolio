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
        <body className='h-100v flex-row font-mono'>
          <aside className='w-2/12 h-screen bg-bg-aside float'>
            <Sidebar />
          </aside>
          <main className='fixed h-screen w-10/12 bg-bg-main float-right top-0 right-0'>
            <SwicthComponents />
          </main>
        </body>
      </AuthContext>
    </>
  )
}
export default App