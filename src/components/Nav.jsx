import {Link}   from 'react-router';

function Nav() {
    return (
        <nav>
            <Link to="/">Forside</Link> | <Link to="/about">Om</Link> | <Link to="/contact">Kontakt</Link>
        </nav>
    );
}

export default Nav;