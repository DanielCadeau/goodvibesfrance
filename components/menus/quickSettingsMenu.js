/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { useEffect } from "react";
// import config from "../../config.json";
import translations from "../../translations.json";
import quickSettingsMenu from "./quickSettingsMenu.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Quick Settings Menu */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const QuickSettingsMenu = ({ Preferences, State }) => {
    const switchLanguage = (event) => Preferences.setLanguage(event.target.value);
    const switchTheme = (event) => Preferences.setTheme(event.target.value);
    return <div id="quickSettingsMenu" className={ quickSettingsMenu.container + ((State) ? " " + quickSettingsMenu.show : "") }>
        <select onChange={ switchLanguage }>
            <option value="fr">{ translations[Preferences.language]["French"] }</option>
            <option value="en">{ translations[Preferences.language]["English"] }</option>
        </select>
        <select onChange={ switchTheme }>
            <option value="light">{ translations[Preferences.language]["Light"] }</option>
            <option value="dark">{ translations[Preferences.language]["Dark"] }</option>
        </select>
    </div>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default QuickSettingsMenu;