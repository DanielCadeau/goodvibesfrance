/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
import Head from "next/head";
import { PrismaClient } from "@prisma/client";
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Contact Us */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const ContactUs = ({ props, Settings, Setters }) => {
    return <>
        <Head>
            <title>{ "Good Vibes France - " + Settings.translate["Contact Us"] }</title>
        </Head>
        <div className="boxedContent">

        </div>
    </>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Props */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const getServerSideProps = async () => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const object = { props: {} };
    try {
        const response = await prisma.settings.findFirst();
        object.props.data = response;
        object.props.environment = process.env;
    } catch(error) {
        object.props.error = error.message;
        object.props.environment = process.env;
    };
    return object;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
export default ContactUs;
export { getServerSideProps };