//'use client'
import * as React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
//import UserProfile from '../components/userProfile';
import { Toast } from '../components/Toast';
import CreditButton from '../components/CreditButton';
import UserDataComponent from '../components/userDataComponent';
import ClientComponent from '../components/ClientComponentDashboard';

const statData = [
  {
    label: 'Weekly downloads',
    score: '3.2M'
  },
  {
    label: 'Stars on GitHub',
    score: '77k'
  },
  {
    label: 'Contributors',
    score: '2.4k'
  },
  {
    label: 'Followers on Twitter',
    score: '17k'
  }
];

const planList = [
  'Customer obsessed. We put our customers front & center.',
  'Transparency. Most of our work is public.',
  'Freedom. We work from anywhere in the world.',
  'Autonomy. We want to create a safe, high-trust team.',
  'Excellence. We are aiming high, and we know it.'
];


export default async function BrandStats () {
  
  // async function handleClickCredits() {
  //   const session = await getServerSession(authOptions);
  //   const userEmail = session?.user?.email;
  
  //   // Fetch the current user data first
  //   const response = await fetch(`http://localhost:3000/api/userData?email=${userEmail}`);
  //   const data = await response.json();
  //   const currentCredits = data.credits;
  
  //   // Calculate new credits
  //   const newCredits = currentCredits - 1;
  
  //   // Update credits in the database
  //   await fetch('http://localhost:3000/api/userData/updateCredits', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       email: userEmail,
  //       newCredits: newCredits
  //     })
  //   });
  
  //   // Refresh the component to reflect changes
  //   // This can be done in various ways, such as local state or re-fetching the data
  //   // depending on your app's structure and requirements
  // }
  

  
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
    
    if (!session) redirect("/SignIn");

    return(

    <div className="container mx-auto px-4 sm:px-10 py-4 sm:py-10">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
            <div className="space-y-4">
            <h1 className="text-2xl font-bold">Our ultimate goal, Welcome {session.user?.name} ! </h1>
            <p className="text-md text-gray-400 max-w-lg">
                We aim high trying to design the most effective and efficient tool for building UIs, for
                developers and designers. ChakraUI started back in 2019, to unify React. Since then,
                we've become a community of over 2M developers from every corner of the world.
            </p>


            <div className="space-y-2">
                <p className="text-md text-gray-400">We plan on doing all that cultivating our values:</p>
                <div>
                  
                  <ClientComponent userEmail={session.user?.email} />
                </div>
                
                {planList.map((data, index) => (
                <div key={index} className="flex items-center space-x-2 text-md">
                    <AiFillCheckCircle className="w-4 h-4 text-blue-400" />
                    <span>{data}</span>
                </div>
                ))}
            </div>
            </div>
            <div className="pt-8 md:pt-0 md:pl-10">
            <div className="grid grid-cols-2 gap-5">
                {statData.map((data, index) => (
                <div
                    key={index}
                    className="flex flex-col space-y-2 pl-3 py-1 pr-1 border-l-2 border-blue-400"
                >
                    <span className="text-2xl font-bold text-blue-400">{data.score}</span>
                    <span className="text-md">{data.label}</span>
                    
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    )
}



