/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "../fields/input";
import Textarea from "../fields/textarea";
import Button from "../buttons/button";
import config from "../../config.json";
import contactForm from "./contactForm.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Contact Form */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const ContactForm = ({ pageProps, Settings }) => {
    const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } = pageProps.environment;
    const form = useRef();
    const bindField = (key, field) => {
        if(field.type === "textarea") {
            return <Textarea key={ key } Settings={ Settings } Field={ field }/>;
        } else if(field.type === "select") {
            return null;
        };
        return <Input key={ key } Settings={ Settings } Field={ field }/>;
    };
    const sendMail = async (event) => {
        event.preventDefault();
        const sendStatus = await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY);
        const response = await sendStatus;
        console.log(response);
        return response;
    };
    return <form id="contactForm" className={ contactForm.container } ref={ form } onSubmit={ sendMail }>
        { config.forms.contact.map((field, key) => bindField(key, field)) }
    </form>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default ContactForm;