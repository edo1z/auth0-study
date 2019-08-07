import createAuth0Client from '@auth0/auth0-spa-js'

class AuthService {
  constructor() {
  }

  async init() {
    this.auth0 = await createAuth0Client({
      domain: process.env.VUE_APP_AUTH0_DOMAIN,
      client_id: process.env.VUE_APP_AUTH0_CLIENT_ID,
      redirect_uri: process.env.VUE_APP_AUTH0_REDIRECT_URI
    });
    await this.isLoggedIn();
  }

  async isLoggedIn() {
    this.loggedIn = await this.auth0.isAuthenticated();
    await this.getUser();
  }

  async getUser() {
    this.user = await this.auth0.getUser();
  }

  login(appState) {
    this.auth0.loginWithRedirect({appState: appState});
  }

  logout() {
    this.auth0.logout();
  }

  async callback() {
    const result = await this.auth0.handleRedirectCallback();
    await this.isLoggedIn();
    return result.appState;
  }
}

const service = new AuthService();
export default service;
