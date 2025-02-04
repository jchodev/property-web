import React, { createContext, useContext } from 'react';
import { ApiService } from '../network/ApiService';

const ApiContext = createContext<ApiService | null>(null);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const apiService = ApiService.getInstance();
  
  return (
    <ApiContext.Provider value={apiService}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiService = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiService must be used within an ApiProvider');
  }
  return context;
};