/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import QuickSettingsMenu from "../menus/quickSettingsMenu";
import config from "../../config.json";
import navigation from "./navigation.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Navigation */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const Navigation = ({ Settings, Setters, LoginState }) => {
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
    const transferToChild = (event) => {
        const target = event.target.closest("li");
        const link = target?.querySelector("a");
        return link?.click();
    };
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
            <SearchBar Settings={ Settings }></SearchBar>
            <div className={ navigation.userActionsBackground }></div>
            <div id="userActionsContainer" className={ navigation.userActionsContainer }>
                <button data-button="callToAction" onClick={ () => Setters.login(!LoginState) }>{ Settings.translate["Login"] }</button>
                <button data-button="callToActionWithIcon" onClick={ () => setQuickSettings(!quickSettings) }>
                    <i className="fa-solid fa-cog"></i>
                </button>
            </div>
            <QuickSettingsMenu Settings={ Settings } Setters={ Setters } State={ quickSettings }></QuickSettingsMenu>
        </div>
    </nav>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Search Bar */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const SearchBar = ({ Settings }) => {
    return <form className={ navigation.searchBarContainer }>
        <input type="search" placeholder={ Settings.translate["Search for an event"] }></input>
        <button className="searchButton" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default Navigation;