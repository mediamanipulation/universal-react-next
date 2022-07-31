import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ slug, title }) => (
    <li>
        <Link href={`/post?title=${title}`} as={`/${slug}`}>
            <a>{title}</a>
        </Link>
    </li>
)


const Blog = () => {
    return (
        <Layout title="Blog">
            <ul>
                <PostLink slug="react-post" title="React Post" />
                <PostLink slug="javascript-post" title="Javascript Post" />
                <PostLink slug="next-post" title="Next Post" />
            </ul>
        </Layout>
    );
}

export default Blog;


