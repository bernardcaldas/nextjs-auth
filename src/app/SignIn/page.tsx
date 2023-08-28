'use client'
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignInPage() {
  const {data : session} = useSession()
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-800">
      <div className="space-y-8 mx-auto max-w-lg py-12 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Sign in to your account</h1>
          <p className="text-lg text-gray-600 mt-2">
            to enjoy all of our cool 
            <span className="text-blue-400"> features </span>
            ✌️
          </p>
        </div>
        <div className="rounded-lg bg-white dark:bg-gray-700 shadow-lg p-8 space-y-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 bg-gray-100"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" id="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 bg-gray-100"/>
          </div>
          <div className="space-y-10">
            <div className="flex items-center justify-between space-x-4">
              <input type="checkbox" id="remember_me" className="rounded"/>
              <label htmlFor="remember_me" className="text-sm text-blue-400 hover:underline cursor-pointer">Forgot password?</label>
            </div>
            <button className="bg-blue-400 text-white hover:bg-blue-500 w-full py-2 rounded">Sign in</button>
            <p className="mt-4 mb-2 text-center font-semibold">Or sign in with</p>
            <div className="flex space-x-4">
              <button 
              className="border border-red-500 flex items-center justify-center w-36 sm:w-44 py-2 rounded text-red-500 space-x-2 hover:bg-red-100"
              onClick={()=> signIn('google')}
              >
                <FaGoogle className="w-4 h-4" />
                <span>Google</span>
              </button>
              <button className="border border-blue-500 flex items-center justify-center w-36 sm:w-44 py-2 rounded text-blue-500 space-x-2 hover:bg-blue-100">
                <FaFacebook className="w-4 h-4" />
                <span>Facebook</span>
              </button>
              <button className="border border-gray-500 flex items-center justify-center w-36 sm:w-44 py-2 rounded text-gray-500 space-x-2 hover:bg-gray-100">
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
