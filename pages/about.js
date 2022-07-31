import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";
import { Component } from "react";

export default class About extends Component {
    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/mediamanipulation");
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();

        return { user: data, statusCode };
    }

    render() {
        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />;
        }

        return (
            <Layout title="About">
                <p>{user.login}</p>
                <img src={user.avatar_url} alt="Reed" height="200px" />
            </Layout>
        );
    }
}

// import { Component } from "react";
// import Layout from "../components/Layout";
// import fetch from 'isomorphic-unfetch';
// import Error from "./_error";
// class About extends Component {

//     static async getInitialProps({ req }) {
//         const res = await fetch('https://api.github.com/users/mediamanipulation')
//         const statusCode = res.statusCode > 200 ? 200 : res.status;
//         const data = await res.json();
//         return { user: data, statusCode };
//     }
//     render() {
//         const { user, statusCode } = this.props;

//         if (statusCode > 200) {
//             return <Error statusCode={statusCode} />;
//         }

//         // console.log(user);
//         return (
//             <Layout title='About'>
//                 <p>{user.login}</p>
//                 <img
//                     src={user.avatar_url}
//                     alt={user.login}
//                     style={{ width: '200px' }}
//                 />
//             </Layout>
//         );
//     }
// }
// export default About;