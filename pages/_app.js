/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
import Head from "next/head";
import { useEffect, useState } from "react";
import Navigation from "../components/navigations/navigation";
import Login from "../components/login/login";
import "../public/stylesheets/root.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* App */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const App = ({ Component, pageProps }) => {
    const [ language, setLanguage ] = useState("fr");
    const [ theme, setTheme ] = useState("light");
    const [ toggleLoginForm, setToggleLoginForm ] = useState(false);
    const  settings = {
        language: language,
        setLanguage: setLanguage,
        theme: theme,
        setTheme: setTheme,
        loginFormState: toggleLoginForm,
        setLoginFormState: setToggleLoginForm
    };
    useEffect(() => {
        var applyLanguage = () => {
            const html = document.querySelector("html");
            html.setAttribute("lang", language);
        }; applyLanguage();
        return () => applyLanguage = null;
    }, [ language ] );
    useEffect(() => {
        var applyTheme = () => {
            const body = document.body;
            body?.setAttribute("data-theme", theme);
        }; applyTheme();
        return () => applyTheme = null;
    }, [ theme ]);
    return <>
        <Head>
            <link rel="icon" href={ "/assets/" + theme + "/Icon.png" }/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        </Head>
        <div id="root">
            <Navigation Settings={ settings }></Navigation>
            { (toggleLoginForm) ? <Login Settings={ settings }></Login> : null }
            <div id="app">
                <Component { ...pageProps } Settings={ settings }/>
            </div>
        </div>
    </>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
export default App;