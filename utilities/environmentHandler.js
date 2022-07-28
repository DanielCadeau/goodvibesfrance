/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Environment Handler */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
class EnvironmentHandler {
    constructor(environment) {
        this.environment = environment;
    };
    getFirebase() {
        return {
            FIREBASE_API_KEY: this.environment?.FIREBASE_API_KEY,
            FIREBASE_AUTH_DOMAIN: this.environment?.FIREBASE_AUTH_DOMAIN,
            FIREBASE_PROJECT_ID: this.environment?.FIREBASE_PROJECT_ID,
            FIREBASE_STORAGE_BUCKET: this.environment?.FIREBASE_STORAGE_BUCKET,
            FIREBASE_MESSAGING_SENDER_ID: this.environment?.FIREBASE_MESSAGING_SENDER_ID,
            FIREBASE_APP_ID: this.environment?.FIREBASE_APP_ID,
            FIREBASE_MEASUREMENT_ID: this.environment?.FIREBASE_MEASUREMENT_ID
        };
    };
};
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------------- */
module.exports = EnvironmentHandler;