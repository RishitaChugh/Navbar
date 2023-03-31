const Navbar = () => {
    return(
        <nav className="nav">
            <a href="/" className="site-title">INT 252</a>
            <ul>
                <li>
                    <a href="/pricing">Pricing</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/pricing">Dashboard</a>
                </li>
                <li>
                    <a href="/about">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;