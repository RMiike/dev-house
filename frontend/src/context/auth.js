import React, { useState, createContext, useContext, useEffect } from 'react'
import axios from '../services/api'
import { useHistory } from 'react-router-dom'
import { AsyncStorage } from 'AsyncStorage'

const AuthContext = createContext({
  signed: false,
  email: '',
  handleLogin: () => { },
  handleLogout: () => { },
  deletHouse: () => {},
  loading: false,
  id: '',
  cadastrarCasa: ()=>{},
  editarCasa: ()=>{}
})

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null)
  const [id, setId] = useState()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    async function loadStorageData() {
      setLoading(true)
      const storagedId = await AsyncStorage.getItem('@devhouse-id', id)
      const storagedUser = await AsyncStorage.getItem('@devhouse-user', email)

      if (storagedUser) {
        setId(storagedId)
        setEmail(storagedUser)
        //history.replace('/dashboard')
      }
      setLoading(false)
    }
    loadStorageData()
  }, [])

  async function deletHouse(house_id) {
    const config = { headers: { user_id: id } }
    try {
      await axios.delete(`houses?id=${house_id}`, config)
    } catch (e) {
      alert('Erro ao tentar deletar o caso. Tente novamente')
    }
  }

  async function editarCasa(selectedFile, form, location ) {
    try{
     const formData = new FormData();
     formData.append( 
       "thumbnail",
       selectedFile,
       selectedFile.name
     );
     formData.append('description',form.description)
     formData.append('location',form.location)
     formData.append('price',form.price)
     formData.append('status',form.status)
     formData.append('user_id',id)
     await axios.put(location, formData, form,{
       headers:{
          'accept': 'application/json',
          'accept': 'image/*',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
       }
     })
     history.replace('/dashboard')
     }catch(e){
       alert('Campos obrigatórios')
     }
   }

  async function cadastrarCasa(selectedFile, form ) {
   try{
    const formData = new FormData();
    formData.append( 
      "thumbnail",
      selectedFile,
      selectedFile.name
    );
    formData.append('description',form.description)
    formData.append('location',form.location)
    formData.append('price',form.price)
    formData.append('status',form.status)
    formData.append('user_id',id)
    await axios.post('houses', formData, form,{
      headers:{
         'accept': 'application/json',
         'accept': 'image/*',
         'Accept-Language': 'en-US,en;q=0.8',
         'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    })
    history.replace('/dashboard')
    }catch(e){
      alert('Campos obrigatórios')
    }
  }

  async function handleLogin(email, senha) {

    const user = await axios.get(`sessions?email=${email}`).catch((e) => { if (e) alert('User not found!') })
    if (user) {
      setId(user.data._id)
      setEmail(user)
      await AsyncStorage.setItem('@devhouse-id', id)
      await AsyncStorage.setItem('@devhouse-user', email)
      history.replace('/dashboard')
    }
  }


  function handleLogout() {
    setEmail(null)
    localStorage.clear()
    history.replace('/')
  }

  return (
    <AuthContext.Provider value={{ signed: !!email, cadastrarCasa, email, handleLogin, loading, handleLogout, id, deletHouse, editarCasa }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}