import { toast } from 'react-toastify'
import request from '../../server/index'
import '../Login/style.scss'
import Cookies from 'js-cookie'
import { TOKEN } from '../../constants'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const LoginPage = () => {
  const {setIsAuthenticated} =useContext(AuthContext)
  const login = async ()=>{
    try{
      let user = {
        username: 'dose',
        password:'1234567'
      }
      let {
        data:{token}
    } = await request.post('auth/login',user);
    Cookies.set( TOKEN ,token)
    setIsAuthenticated(true)
     }catch(err){
      toast.error('Error')
     }
    }
    return (
     <div className='form'>
       <h2 className='title'>Login</h2>
      <button className='btn'onClick={login}>Login</button>
     </div>
)
}

export default LoginPage