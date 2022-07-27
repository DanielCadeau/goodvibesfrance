/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Textarea */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const Textarea = ({ Settings, Field }) => {
    const { id, name, label, placeholder, defaultValue, required } = Field;
    const evalLabel = Settings.translate[label] || undefined;
    // const evalPlaceholder = Settings.translate[placeholder] || undefined;
    const evalDefaultValue = defaultValue || undefined;
    const evalRequired = required || undefined;
    const handleTextareaValue = (event) => {
        const target = event.target;
        const value = target.value;
        if(value.trim().length > 0) {
            target.closest(".fieldContainer").classList.add("filled");
            return target.classList.add("filled");
        };
        target.closest(".fieldContainer").classList.remove("filled");
        return target.classList.remove("filled");
    };
    return <div className="fieldContainer">
        <div className="field">
            { /* Placeholder is disabled for the moment */ }
            <textarea id={ id } name={ name } value={ evalDefaultValue } required={ evalRequired } onInput={ handleTextareaValue }/>
            { (evalLabel) ? <div className="labelContainer">
                <label htmlFor={ id }>{ evalLabel }</label>
            </div> : null }
        </div>
    </div>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default Textarea;