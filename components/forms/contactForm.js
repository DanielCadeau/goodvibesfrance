/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import Image from "next/image";
import Link from "next/link";
import Input from "../fields/input";
import Textarea from "../fields/textarea";
import Button from "../buttons/button";
import config from "../../config.json";
import contactForm from "./contactForm.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Contact Form */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const ContactForm = ({ Settings }) => {
    const bindField = (key, field) => {
        if(field.type === "textarea") {
            return <Textarea key={ key } Settings={ Settings } Field={ field }/>;
        } else if(field.type === "select") {
            return null;
        };
        return <Input key={ key } Settings={ Settings } Field={ field }/>;
    };
    return <form id="contactForm" className={ contactForm.container } onSubmit={ (e) => e.preventDefault() }>
        { config.forms.contact.map((field, key) => bindField(key, field)) }
    </form>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default ContactForm;