import { useContext } from 'react'

import { GeneralContext } from '../../contexts/GeneralContext';


function LoginForm() {
    const { setIsLogged } = useContext(GeneralContext)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLogged(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'placeholder='Username'/>
                <input type='password'placeholder='Password'/>
                <button>Sign up</button>
            </form>
        </div>
    );
}

export default LoginForm