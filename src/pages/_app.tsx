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
        <Sidebar />
        <SwicthComponents />
      </AuthContext>
    </>
  )
}
export default dynamic(() => Promise.resolve(App), { ssr: false })