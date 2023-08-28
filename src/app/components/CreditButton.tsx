// CreditButton.js
'use client';
import { useContext } from "react";
import { CreditsContext } from "../context/creditContext";

function CreditButton({ email }) {
  const {dispatch} = useContext(CreditsContext)
    const handleClick = async () => {
        const response = await fetch('/api/teste', { // Note que estou usando o endpoint '/api/teste', que foi o que você mencionou anteriormente
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email })
        });
      
        if (response.ok) {
          const result = await response.json();
          console.log("Créditos atualizados:", result.credits);
          // Atualizar o contexto
          dispatch({ type: 'SET_CREDITS', payload: result.credits });
        } else {
          console.error(`Erro na atualização dos créditos. Status: ${response.status}`);
          try {
            const errorData = await response.json();
            console.error(errorData.message);
          } catch (parseError) {
            console.error("Erro ao analisar a resposta da API.");
          }
        }
    };
      
    return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            onClick={handleClick}>Usar crédito</button>;
}

export default CreditButton;
