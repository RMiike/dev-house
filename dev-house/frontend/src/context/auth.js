import React, { createContext, useContext } from 'react'

const AuthContext = createContext({
  signed: false,
  email: ''
})
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ signed: true, email: 'teste@teste.com' }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}