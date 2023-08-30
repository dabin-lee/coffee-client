
import { Outlet } from 'react-router-dom'
import loginImg from '../assets/react.svg'

const LoginTemplate = () => {
    return (
        <div className='container'>
            <h2 className='tit-wrap'>로그인</h2>
            <img src={loginImg} alt="" />
            <Outlet></Outlet>
        </div>
    )
}

export default LoginTemplate