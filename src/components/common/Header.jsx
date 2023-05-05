function Header(props) {
    return (
        <>
            <header>
                <h1>HEADER</h1>
            </header>
            {props.children}
        </>
    );
}

export default Header