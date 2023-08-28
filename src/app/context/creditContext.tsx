"use client";

import React, { createContext, useReducer, Dispatch } from 'react';

type StateType = {
  credits: number;
};

type ActionType = {
  type: string;
  payload?: any;
};

const initialState: StateType = {
  credits: 0,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'SET_CREDITS':
      return { ...state, credits: action.payload };
    default:
      return state;
  }
};

export const CreditsContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const CreditsContextProvider = ({ children, initialCredits }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CreditsContext.Provider value={{ state, dispatch }}>
      {children}
    </CreditsContext.Provider>
  );
};
