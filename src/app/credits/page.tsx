
import Link from 'next/link';
import UserDataServerComponent from '../components/userProfile';
import UserDataComponent from '../components/userDataComponent';
import { useEffect, useState } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import CreditCardsComponent from '../components/CreditCardsComponent';
import UserProfile from '../components/userProfile';
import { Session } from 'inspector';


async function getData(){
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const res = await fetch(`http://localhost:3000/api/userData?email=${userEmail}`);
  return await res.json()
  //const data: UserData = await res.json();
}

async function addCredits(email, creditsToAdd) {
  try {
    const response = await fetch('/api/addCredits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, creditsToAdd: creditsToAdd })
    });

    const data = await response.json();
    if (response.ok) {
      // Atualizar o componente ou redirecionar o usuário, conforme necessário
      console.log("Créditos adicionados com sucesso!", data);
    } else {
      console.error("Erro ao adicionar créditos:", data.message);
    }
  } catch (error) {
    console.error("Erro ao fazer a requisição:", error);
  }
}
  

  
export default async function BuyCredits(){
  

   const userData = await getData()


  return (


    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Olá <span className='text-blue-600'>{userData.name}</span> Compre mais créditos</h2>
          <UserProfile/>
          
          
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Escolha a quantidade de créditos que deseja adicionar à sua conta.</p>
        </div>
        <CreditCardsComponent email={userData.email}/>
        
        </div>
      
    </section>
  );
}

