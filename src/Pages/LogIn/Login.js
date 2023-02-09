import login from './login.module.css'
import Navbar from '../../Components/Navbar/Navbar'


const Login = () => {

    return (
        <div className={login.mainComponent}>
            <Navbar />
            <h1> Iam LogIin PAge</h1>
        </div>
    )
}
export default Login