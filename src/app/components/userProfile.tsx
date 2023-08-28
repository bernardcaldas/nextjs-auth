'use client'
import { useContext, useState } from "react"
import { CreditsContext } from "../context/creditContext"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default function UserProfile(){
  const {state} = useContext(CreditsContext)

  // async function getData(){
  //     const session = await getServerSession(authOptions);
  //     const userEmail = session?.user?.email;
  //     const res = await fetch(`http://localhost:3000/api/userData?email=${userEmail}`);
  //     return await res.json()
  //     //const data: UserData = await res.json();
  //   }

  //   const userData = await getData()

  return(
    <div>
            <h1>Dados do Usuário</h1>
            {/* <p><strong>Nome:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p> */}
            <p><strong>Créditos:</strong> {state.credits}</p>
            {/* <p><strong>Total de Visitas:</strong> {userData.totalVisits}</p> */}
            
            {/* Aqui vão os cards e a interatividade para a aquisição de créditos */}
          </div>
  )
}