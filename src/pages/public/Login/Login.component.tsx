import { autorizeURL } from 'services'




export const Login = () => {
    return (
        <a
            href={autorizeURL}
        >Login</a>
    )
}

export default Login