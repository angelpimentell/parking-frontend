import Button from '@mui/material/Button';

import Header from '../commons/Header';

function Main() {
    return (
        <>
            <Header />
            <div>
                <form>
                    <h1>MAIN PAGE</h1>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
                </form>
            </div>
        </>
    );
}

export default Main