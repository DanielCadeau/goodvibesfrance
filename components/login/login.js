/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Dependencies */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";
import LoginForm from "../forms/loginForm";
import login from "./login.module.css";
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Login */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const Login = ({ Settings, LoginState }) => {
    if(Settings.firebase && Settings.firebase.FIREBASE_API_KEY) {
        const googleProvider = new GoogleAuthProvider();
        const facebookProvider = new FacebookAuthProvider();
        const twitterProvider = new TwitterAuthProvider();
        const authentication = getAuth();
        const authenticationUtilities = {
            googleProvider: googleProvider,
            facebookProvider: facebookProvider,
            twitterProvider: twitterProvider,
            authentication: authentication,
            authenticationPopup: signInWithPopup
        };
        return <div id="login" className={ login.container + ((LoginState) ? " " + login.show : "") }>
            <LoginForm Settings={ Settings } Authentication={ authenticationUtilities }></LoginForm>
        </div>;
    };
    return <div id="login" className={ login.container + ((LoginState) ? " " + login.show : "") }>
    </div>;
};
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Exports */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
export default Login;