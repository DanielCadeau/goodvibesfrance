/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import Image from "next/image";
import Link from "next/link";
import Input from "../fields/input";
import Button from "../buttons/button";
import config from "../../config.json";
import loginForm from "./loginForm.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Login Form */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const LoginForm = ({ Settings }) => {
    const bindField = (key, field) => {
        if(field.type === "textarea") {
            return null;
        } else if(field.type === "select") {
            return null;
        };
        return <Input key={ key } Settings={ Settings } Field={ field }/>
    };
    const googleAuth = () => null;
    const facebookAuth = () => null;
    const twitchAuth = () => null;
    return <form id="loginForm" className={ loginForm.container } onSubmit={ (e) => e.preventDefault() }>
        <div className={ loginForm.siteLogo }>
            <Image src={ "/assets/" + Settings.theme + "/Logo.png" } width={ 110 } height={ 80 }/>
        </div>
        { config.forms.login.map((field, key) => bindField(key, field)) }
        <div className={ loginForm.separator }>
            <p>{ Settings.translate["OR"] }</p>
        </div>
        <div className={ loginForm.externalAuth }>
            <Button Type={ "callToActionWithIcon" } IconClass={ "fa-brands fa-google" } OnClick={ googleAuth }/>
            <Button Type={ "callToActionWithIcon" } IconClass={ "fa-brands fa-facebook" } OnClick={ facebookAuth }/>
            <Button Type={ "callToActionWithIcon" } IconClass={ "fa-brands fa-twitch" } OnClick={ twitchAuth }/>
        </div>
        <Link href={ Settings.translate["/signup"] }>
            <a className={ loginForm.registerLink }>
                <p>{ Settings.translate["I don't have any account."] }</p>
            </a>
        </Link>
    </form>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default LoginForm;