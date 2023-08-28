'use client'
import { useState, useEffect, useContext } from "react";
import CreditButton from "./CreditButton";
import Link from "next/link";
import next from "next";
import { CreditsContext } from "../context/creditContext";

function ClientComponent({ userEmail }) {
    // const [userCredits, setUserCredits] = useState(0);
  
    // useEffect(() => {
    //   const fetchUserCredits = async () => {
    //     const response = await fetch(`http://localhost:3000/api/userData?email=${userEmail}`);
    //     const data = await response.json();
    //     setUserCredits(data.credits);
    //   };
  
    //   fetchUserCredits();
    // }, [userEmail]);

    const {state, dispatch} = useContext(CreditsContext)
  
    return (
        <div>
            {/* Aqui, você pode exibir a contagem de créditos. */}
            {/* <div>Créditos disponíveis: {userCredits}</div> */}
            <div>Créditos disponíveis: {state.credits}</div>

            {state.credits > 0 ? (
                <CreditButton email={userEmail} />
            ) : (
                <div>
                    {/* Botão para redirecionar para a página de compra de créditos */}
                    <Link href="/credits">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Comprar creditos
                    </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default ClientComponent;
