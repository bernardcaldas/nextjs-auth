'use client'
import { useContext } from "react";
import { CreditsContext } from "../context/creditContext";

function CreditCardsComponent({ email }) {
  const {dispatch} = useContext(CreditsContext)

  async function handleAddCredits(amount) {
    try {
      const response = await fetch('/api/addCredits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          creditsToAdd: amount,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Créditos adicionados com sucesso:", data);
        dispatch({ type: 'SET_CREDITS', payload: data.credits });
      } else {
        console.error("Erro ao adicionar créditos:", data.message);
      }

    } catch (error) {
      console.error("Erro na chamada de API:", error);
    }
  }

  return (
    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-16 lg:space-y-0 justify-center">
    {/* Cartão para 5 créditos */}
    <div className="flex flex-col p-6 max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">5 Créditos</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Perfeito para testar nossos recursos!</p>
        <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$5</span>
        </div>
        <button onClick={() => handleAddCredits(5)}>
            <span className="cursor-pointer text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Comprar</span>
        </button>
    </div>
  
    {/* Cartão para 10 créditos */}
    <div className="flex flex-col p-6 max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">10 Créditos</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Ideal para uso moderado.</p>
        <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$9</span>
        </div>
        <button onClick={() => handleAddCredits(10)}>
            <span className="cursor-pointer text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Comprar</span>
        </button>
    </div>
  
    {/* Cartão para 15 créditos */}
    <div className="flex flex-col p-6 max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">15 Créditos</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Para quem precisa de mais ações!</p>
        <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$13</span>
        </div>
        <button onClick={() => handleAddCredits(15)}>
            <span className="cursor-pointer text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Comprar</span>
        </button>
    </div>
  </div>
  
  );
}

export default CreditCardsComponent;
