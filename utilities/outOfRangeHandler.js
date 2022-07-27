/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Out Of Range Handler */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
class OutOfRangeHandler {
    constructor() {};
    handle(container, button, callback) {
        return document.addEventListener("click", (event) => {
            const target = event.target;
            const loginForm = target.closest(container);
            const loginButton = target.closest(button);
            return (loginForm || loginButton) ? null : callback(false);
        });
    };
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
module.exports = OutOfRangeHandler;