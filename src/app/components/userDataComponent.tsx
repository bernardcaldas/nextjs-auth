// UserDataComponent.js
'use client';

function UserDataComponent({ userData }) {
  if (!userData) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dados do Usuário</h1>
      <p><strong>Nome:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Créditos:</strong> {userData.credits}</p>
      <p><strong>Total de Visitas:</strong> {userData.totalVisits}</p>
    </div>
  );
}

export default UserDataComponent;
