/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
import Head from "next/head";
import { useEffect, useState } from "react";
import Navigation from "../components/navigation/navigation";
import "../public/stylesheets/root.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* App */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
const App = ({ Component, pageProps }) => {
    const [ language, setLanguage ] = useState("fr");
    const [ theme, setTheme ] = useState("light");
    const  preferences = { language: language, theme: theme };
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
        </Head>
        <div id="root">
            <Navigation Preferences={ preferences }></Navigation>
            <Component { ...pageProps } Preferences={ preferences }/>
        </div>
    </>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
export default App;