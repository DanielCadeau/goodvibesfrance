/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import EnvironmentHandler from "../utilities/environmentHandler";
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Home */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const Home = ({ pageProps, Settings, Setters }) => {
    return <>
        <Head>
            <title>{ "Good Vibes France - " + Settings.translate["Home"] }</title>
        </Head>
        <div className="boxedContent">

        </div>
    </>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Props */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const getServerSideProps = async () => {
    const environmentHandler = new EnvironmentHandler(process.env);
    const prisma = new PrismaClient();
    await prisma.$connect();
    const object = { props: {} };
    object.props.environment = environmentHandler.getFirebase();
    try {
        const response = await prisma.settings.findFirst();
        object.props.data = response;
    } catch(error) {
        object.props.error = error.message;
    };
    return object;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
export default Home;
export { getServerSideProps };