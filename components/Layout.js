// Layout component for the app
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => {

    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


export default function Layout({ children, title }) {
    return (
        <div className='root'>
            <Head>
                <title>mediamanipulation</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Nav />
            <Header> header</Header>
            <h1>{title}</h1>
            {children}

            <Footer> footer</Footer>
            <style jsx>{`
                .root {
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-height: 10vh;
                }

            `}</style>
        </div>
    );
}

