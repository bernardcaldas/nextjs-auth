'use client'

import { CacheProvider } from '@chakra-ui/next-js'
//import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
//import { CreditsContextProvider } from './context/creditContext'


export function Providers({ 
    children,
    session
  }: { 
  children: React.ReactNode,
  session: any 
  }) {
  return (
    <CacheProvider>
      
          <SessionProvider>
          {children}
          </SessionProvider>
      
        
    </CacheProvider>
  )
}