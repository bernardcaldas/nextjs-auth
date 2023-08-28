'use client'
import { useContext, useEffect, useState } from 'react';
import { PiSignIn, PiSignOutBold } from "react-icons/pi";
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { CreditsContext } from '../context/creditContext';

const Links = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' }
];





export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {data: session} = useSession()
  const {state} = useContext(CreditsContext)
  // const [credits, setCredits] = useState('')
 
  // const fetchCredits = async () => {
  //   if (session?.user?.email) {
  //     const response = await fetch(`http://localhost:3000/api/userData?email=${session.user.email}`);
  //     const data = await response.json();
  //     setCredits(data.credits);
  //   }
  // };

  // // // Aqui, chame a função diretamente.
  // // fetchCredits();

  // // Use um useEffect para obter os créditos quando o componente é montado:
  // useEffect(() => {
  //   const intervalId = setInterval(fetchCredits, 1000); // atualiza a cada 1 segundos
  //   return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  // }, [session]);

  return (
    
    <div className="bg-gray-100 dark:bg-gray-900 px-4 py-4">
      <div className="flex items-center justify-between">
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
        <div className="flex items-center space-x-8">
          <Link href={'/'}>
            <span>Logo</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            {Links.map((link) => (
              <Link key={link.label} href={link.href}>
                {/* <a className="px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">{link.label}</a> */}
                <div>{link.label}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          {session ? (
            <>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-4 flex items-center"
                onClick={() => signOut()}>
                <PiSignOutBold className="mr-2" />
                Sair
              </button>
              {/* <img className="w-8 h-8 rounded-full" src={`${session.user?.image}`} alt="user" />
              <span className="mr-4 text-black">
                creditos: {credits}
              </span> */}
              <Link href='/credits'>
              <div className="relative inline-block">
                <img className="w-8 h-8 rounded-full" src={`${session.user?.image}`} alt="user" />
                <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full text-xs px-2 py-1 transform translate-x-1/2 -translate-y-1/2">
                  {state.credits}
                </span>
              </div>
              </Link>

            </>
          ) : (
            <Link href="/SignIn">
              <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                <PiSignIn className="mr-2" />
                SignIn
              </button>
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 md:hidden">
          {Links.map((link) => (
            <Link key={link.label} href={link.href}>
              <a className="block px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">{link.label}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
