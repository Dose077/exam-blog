import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import Cookies from "js-cookie";
import { TOKEN } from "../../constants";

const AccountPage = () => {
  const { setIsAuthenticated} = useContext(AuthContext);
  const logout = () =>{
    setIsAuthenticated(false)
    Cookies.remove(TOKEN)
  }
  return (
    <div>
      <h2>AccountPage</h2>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AccountPage