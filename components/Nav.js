import Link from 'next/link';
import Btn from './Btn';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand">Home</a>
            </Link>
            <Link href="/about">
                <a className="navbar-brand">About</a>
            </Link>
            <Link href="/programming">
                <a className="navbar-brand">Programming</a>
            </Link>
            <Link href="/art">
                <a className="navbar-brand">Art</a>
            </Link>
            <Link href="/blog">
                <a className="navbar-brand">Blog</a>
            </Link>
            <Btn />

            <style jsx>{`

                .navbar{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    padding: 1em;
                    font-size:1.2em;
                    background: indigo
                }
               .navbar a {
                    color: darkgrey;
                    text-decoration: none;

                }
                .navbar a:hover {
                font-weight: bold;
                color: lightgrey;
                }
                /* .navbar-brand{
                    font-size: 1.5em;
                } */
            `}</style>
        </nav>
    );
}
export default Nav;