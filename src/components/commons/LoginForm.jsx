import { useContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
            </form>
        </div>
    );
}

export default LoginForm