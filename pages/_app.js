/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import OutOfRangeHandler from "../utilities/outOfRangeHandler";
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
    const [ language, setLanguage ] = useState(data.language || "french");
    const [ theme, setTheme ] = useState(data.theme || "light");
    const [ login, setLogin ] = useState(false);
    const Settings = useMemo(() => {
        return { language: language,
            theme: theme,
            translate: translations[language],
            outOfRange: new OutOfRangeHandler()
        };
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
    useEffect(() => {
        var closeLoginForm = () => Settings.outOfRange.handle("#login", "#loginButton", setLogin);
        closeLoginForm();
        return () => closeLoginForm = null;
    }, []);
    const setters = { language: setLanguage, theme: setTheme, login: setLogin };
    const { href, integrity, crossOrigin, referrerPolicy } = config.resources.fontawesome;
    if(language && theme) {
        return <>
            <Head>
                <link rel="icon" href={ "/assets/" + theme + "/Icon.png" }/>
                <link rel="stylesheet" href={ href } integrity={ integrity } crossOrigin={ crossOrigin } referrerPolicy={ referrerPolicy }/>
            </Head>
            <div id="root">
                <Navigation Settings={ Settings } Setters={ setters } LoginState={ login }></Navigation>
                <Login Settings={ Settings } LoginState={ login }></Login>
                <div id="app">
                    <Component { ...pageProps } Settings={ Settings } Setters={ setters }/>
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