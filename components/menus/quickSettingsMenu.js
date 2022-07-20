/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import translations from "../../translations.json";
import quickSettingsMenu from "./quickSettingsMenu.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Quick Settings Menu */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const QuickSettingsMenu = ({ Settings, State }) => {
    const switchLanguage = (event) => Settings.setLanguage(event.target.value);
    const switchTheme = (event) => Settings.setTheme(event.target.value);
    return <div id="quickSettingsMenu" className={ quickSettingsMenu.container + ((State) ? " " + quickSettingsMenu.show : "") }>
        <select onChange={ switchLanguage }>
            <option value="fr">{ translations[Settings.language]["French"] }</option>
            <option value="en">{ translations[Settings.language]["English"] }</option>
        </select>
        <select onChange={ switchTheme }>
            <option value="light">{ translations[Settings.language]["Light"] }</option>
            <option value="dark">{ translations[Settings.language]["Dark"] }</option>
        </select>
    </div>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default QuickSettingsMenu;