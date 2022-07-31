import Layout from "../components/Layout";
export default ({ statusCode }) => {
    return (
        <Layout title="Error!!!">
            {statusCode ? `Could not load your data - Status code: ${statusCode}` : "Sorry, there was a problem loading the page."}
            <p>sorry your request cannot be serviced at this time.</p>
        </Layout>
    );
}
