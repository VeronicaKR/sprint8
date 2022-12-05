

export const Logout = ({setIsLoged}) => {
    
    const out = () => {
      
      setIsLoged(false)  
    }
    


  return (
    <button onClick={out}>
        EXIT
    </button>
  )
}
