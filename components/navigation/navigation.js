/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import Link from "next/link";
import config from "../../config.json";
import translations from "../../translations.json";
import navigation from "./navigation.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Navigation */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const Navigation = ({ Preferences }) => {
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
                        <a>{ translations[Preferences.language][link.page] }</a>
                    </Link>
                </li>) }
            </ul>
        </div>
    </nav>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default Navigation;