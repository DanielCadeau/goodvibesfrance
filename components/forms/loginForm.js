/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import Image from "next/image";
import Input from "../fields/input";
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
    return <form id="loginForm" className={ loginForm.container }>
        <div className={ loginForm.siteLogo }>
            <Image src={ "/assets/" + Settings.theme + "/Logo.png" } width={ 110 } height={ 80 }/>
        </div>
        { config.forms.login.map((field, key) => bindField(key, field)) }
        <div className={ loginForm.separator }>
            <p>{ Settings.translate["OR"] }</p>
        </div>
    </form>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default LoginForm;