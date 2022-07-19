/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import config from "../../config.json";
import translations from "../../translations.json";
import navigation from "./navigation.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Navigation */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const Navigation = ({ Preferences }) => {
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
    return <nav className={ navigation.container }>
        <div id="topBar" className={ navigation.topBar }>
            <div className={ navigation.logo }>
                <Link href={ "/" }>
                    <a>
                        <img src={ "./assets/" + Preferences.theme + "/Logo.png" }/>
                    </a>
                </Link>
            </div>
            <ul className={ navigation.menu }>
                { config.navigation.topBar.map((link, key) => <li key={ key } onClick={ transferToChild }>
                    <Link href={ translations[Preferences.language][link.url] }>
                        <a>
                            <p>{ translations[Preferences.language][link.page] }</p>
                        </a>
                    </Link>
                </li>) }
            </ul>
            <SearchBar Preferences={ Preferences }></SearchBar>
            <div id="userActionsContainer" className={ navigation.userActionsContainer }>
                <button data-button="callToAction">{ translations[Preferences.language]["Login"] }</button>
            </div>
        </div>
    </nav>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Search Bar */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const SearchBar = ({ Preferences }) => {
    return <form className={ navigation.searchBarContainer }>
        <input type="search" placeholder={ translations[Preferences.language]["Search for an event"] }></input>
        <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    </form>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default Navigation;