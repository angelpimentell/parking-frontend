import Button from '@mui/material/Button';

import Header from './Header';

function Main() {
    function registerTickerSubmit(e) {
        alert('registerTickerSubmit')
    }

    return (
        <>
            <Header />
            <div>
                <form>
                    <h1>PARKING</h1>
                    <Button onClick={registerTickerSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Register ticket</Button>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Register ticket plan</Button>
                </form>
            </div>
        </>
    );
}

export default Main