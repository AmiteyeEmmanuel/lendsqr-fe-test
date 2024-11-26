import { Assets } from '../../assets'
import LoginForm from './login-form'

const Login: React.FC = () => {
  const { PabloSignIn, SignInLogo } = Assets
  
  return (
    <div className="login">
        <div className='login-left'>
            <img src={SignInLogo} alt='logo' className='logo-image' />
        <div className="login-image">
             <img src={PabloSignIn}/>
        </div>

        </div>
        <div className='login-right'>
             <LoginForm />
        </div>
    </div>
  )
}
export default Login