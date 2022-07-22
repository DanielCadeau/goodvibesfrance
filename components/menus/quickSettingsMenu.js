/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import quickSettingsMenu from "./quickSettingsMenu.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Quick Settings Menu */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const QuickSettingsMenu = ({ Settings, Setters, State }) => {
    const switchLanguage = (event) => Setters.language(event.target.value);
    const switchTheme = (event) => Setters.theme(event.target.value);
    return <div id="quickSettingsMenu" className={ quickSettingsMenu.container + ((State) ? " " + quickSettingsMenu.show : "") }>
        <select onChange={ switchLanguage }>
            <option value="french">{ Settings.translate["French"] }</option>
            <option value="english">{ Settings.translate["English"] }</option>
        </select>
        <select onChange={ switchTheme }>
            <option value="light">{ Settings.translate["Light"] }</option>
            <option value="dark">{ Settings.translate["Dark"] }</option>
        </select>
    </div>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default QuickSettingsMenu;