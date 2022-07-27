/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Input */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const Input = ({ Settings, Field }) => {
    const { id, type, name, label, placeholder, defaultValue, required } = Field;
    const evalLabel = Settings.translate[label] || undefined;
    // const evalPlaceholder = Settings.translate[placeholder] || undefined;
    const evalDefaultValue = ((type === "submit") ? Settings.translate[defaultValue] : defaultValue) || undefined;
    const evalRequired = required || undefined;
    const handleInputValue = (event) => {
        const target = event.target;
        const value = target.value;
        if(value.trim().length > 0) {
            target.closest(".fieldContainer").classList.add("filled");
            return target.classList.add("filled");
        };
        target.closest(".fieldContainer").classList.remove("filled");
        return target.classList.remove("filled");
    };
    return <div className={ "fieldContainer" + ((type === "submit") ? " submitField" : "") }>
        <div className="field">
            { /* Placeholder is disabled for the moment */ }
            <input id={ id } type={ type } name={ name } value={ evalDefaultValue } required={ evalRequired } onInput={ handleInputValue }/>
            { (evalLabel) ? <div className="labelContainer">
                <label htmlFor={ id }>{ evalLabel }</label>
            </div> : null }
        </div>
    </div>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default Input;