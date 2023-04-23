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
                    <button>Register ticket</button>
                    <button>Register ticket plan</button>
                </form>
            </div>
        </>
    );
}

export default Main