import { MsalAuthProvider, LoginType } from "react-aad-msal";
const tenant = "rakole.onmicrosoft.com";
const signInPolicy = "B2C_1_reactsignup";
const applicationID = "2af3af4d-47c8-4ae5-bc09-8821d8d755a9";
const reactRedirectUri = "http://localhost:3000";
const tenantSubdomain = tenant.split(".")[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;
// Msal Configurations
const signInConfig = {
    auth: {
        authority: signInAuthority,
        clientId: applicationID,
        /*redirectUri: reactRedirectUri,*/
        validateAuthority: false
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
    }
};
// Authentication Parameters
const authenticationParameters = {
    scopes: [
        "https://graph.microsoft.com/Directory.Read.All",
        "https://rakole.onmicrosoft.com/api/user_impersonation"
    ]
};
// Options
const options = {
    loginType: LoginType.Redirect,
    tokenRefreshUri: window.location.origin + "/auth.html"
};
export const signInAuthProvider = new MsalAuthProvider(
    signInConfig,
    authenticationParameters,
    options
);