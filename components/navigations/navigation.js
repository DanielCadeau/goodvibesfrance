/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import QuickSettingsMenu from "../menus/quickSettingsMenu";
import Button from "../buttons/button";
import config from "../../config.json";
import navigation from "./navigation.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Navigation */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const Navigation = ({ pageProps, Settings, Setters, LoginState }) => {
    const [ quickSettings, setQuickSettings ] = useState(false);
    const { route } = useRouter();
    useEffect(() => {
        var setActive = () => {
            const allLinks = document.querySelectorAll("a");
            allLinks?.forEach((link) => link.classList.remove("active"));
            const links = document.querySelectorAll("a[href='" + route + "']");
            links?.forEach((link) => link.classList.add("active"));
            return true
        }; setActive();
        return () => setActive = null;
    }, [ route ]);
    useEffect(() => {
        var closeQuickSettingsMenu = () => Settings.outOfRange.handle("#quickSettingsMenu", "#settingsButton", setQuickSettings);
        closeQuickSettingsMenu();
        return () => closeQuickSettingsMenu = null;
    }, []);
    const transferToChild = (event) => {
        const target = event.target.closest("li");
        const link = target?.querySelector("a");
        return link?.click();
    };
    const showLogin = () => Setters.login(!LoginState);
    const showQuickSettings = () => setQuickSettings(!quickSettings);
    return <nav className={ navigation.container + ((LoginState) ? " " + navigation.popupOpened : "") }>
        <div id="topBar" className={ navigation.topBar }>
            <div className={ navigation.logo }>
                <Link href={ "/" }>
                    <a>
                        <Image src={ "/assets/" + Settings.theme + "/Logo.png" } width={ 70 } height={ 40 }/>
                    </a>
                </Link>
            </div>
            <ul className={ navigation.menu }>
                { config.navigation.topBar.map((link, key) => <li key={ key } onClick={ transferToChild }>
                    <Link href={ Settings.translate[link.url] }>
                        <a>
                            <p>{ Settings.translate[link.page] }</p>
                        </a>
                    </Link>
                </li>) }
            </ul>
            <SearchBar Settings={ Settings }/>
            <div className={ navigation.userActionsBackground }></div>
            <div id="userActionsContainer" className={ navigation.userActionsContainer }>
                <Button Id={ "loginButton" } Text={ Settings.translate["Login"] } OnClick={ showLogin }/>
                <Button Id={ "settingsButton" } Type={ "callToActionWithIcon" } IconClass={ "fa-solid fa-cog" } OnClick={ showQuickSettings }/>
            </div>
            <QuickSettingsMenu Settings={ Settings } Setters={ Setters } State={ quickSettings }/>
        </div>
    </nav>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Search Bar */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const SearchBar = ({ Settings }) => {
    return <form className={ navigation.searchBarContainer }>
        <input type="search" placeholder={ Settings.translate["Search for an event"] }></input>
        <Button Type={ "callToActionWithIcon" } IconClass={ "fa-solid fa-magnifying-glass" } OnClick={ undefined }/>
    </form>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default Navigation;