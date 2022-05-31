export const LoginContext = createContext()

const AuthContext = ({childen, nome})=>{

    const {user, setUser} = useState(null)

    return(

        <LoginContext.Provider value={
            {'nome': nome ?? 'Zezim da Silva',
            'autenticado': user != null ,
            'user': user}
         }>

    
         {Children}
         
         </LoginContext.Provider>
    


    )


}

Export default AuthContext