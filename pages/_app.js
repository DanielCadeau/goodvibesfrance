/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import Navigation from "../components/navigations/navigation";
import Login from "../components/login/login";
import config from "../config.json";
import translations from "../translations.json";
import "../public/stylesheets/root.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* App */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const App = ({ Component, pageProps }) => {
    const { data } = pageProps;
    const [ language, setLanguage ] = useState(data.language);
    const [ theme, setTheme ] = useState(data.theme);
    const [ login, setLogin ] = useState(false);
    const settings = useMemo(() => {
        return { language: language, theme: theme, translate: translations[language] };
    }, [ language, theme ]);
    useEffect(() => {
        var applySettings = () => {
            const html = document.querySelector("html");
            html.setAttribute("lang", language);
            document.body.setAttribute("data-theme", theme);
            return { html: html, body: document.body };
        }; applySettings();
        return () => applySettings = null;
    }, [ language, theme ]);
    const setters = { language: setLanguage, theme: setTheme, login: setLogin };
    const { href, integrity, crossOrigin, referrerPolicy } = config.resources.fontawesome;
    // console.log("Page properties :", pageProps);
    // console.log("Settings :", settings);
    // console.log("Setters :", setters);
    if(language && theme) {
        return <>
            <Head>
                <link rel="icon" href={ "/assets/" + theme + "/Icon.png" }/>
                <link rel="stylesheet" href={ href } integrity={ integrity } crossOrigin={ crossOrigin } referrerPolicy={ referrerPolicy }/>
            </Head>
            <div id="root">
                <Navigation Settings={ settings } Setters={ setters } LoginState={ login }></Navigation>
                <Login Settings={ settings } LoginState={ login }></Login>
                <div id="app">
                    <Component { ...pageProps } Settings={ settings } Setters={ setters }/>
                </div>
            </div>
        </>;
    };
    return <></>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
export default App;