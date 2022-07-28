/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import Header from "../../components/headers/header";
import ContactForm from "../../components/forms/contactForm";
import config from "../../config.json";
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Contact Us */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const ContactUs = ({ props, Settings, Setters }) => {
    return <>
        <Head>
            <title>{ "Good Vibes France - " + Settings.translate["Contact Us"] }</title>
        </Head>
        <div className="boxedContent">
            <Header Text={ Settings.translate["Contact us by email"] }/>
            <ContactForm Settings={ Settings }></ContactForm>
            <div className="coFounders">
                { config.team.map((field, key) => <div key={ key } className="teamMember">
                    
                </div>) }
            </div>
        </div>
    </>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Props */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const getServerSideProps = async (context) => {
    const prisma = new PrismaClient();
    await prisma.$connect();
    const object = { props: {} };
    object.props.environment = {
        EMAILJS_SERVICE_ID: process.env?.EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: process.env?.EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY: process.env?.EMAILJS_PUBLIC_KEY
    };
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
export default ContactUs;
export { getServerSideProps };