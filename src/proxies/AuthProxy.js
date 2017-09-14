import Proxy from './Proxy';

class AuthProxy extends Proxy {
  /**
   * The constructor for the ArtistProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('oauth', parameters);
  }

  /**
   * Method used to login.
   *
   * @param {String} username The username.
   * @param {String} password The password.
   *
   * @returns {Promise} The result in a promise.
   */
  login({ username, password }) {
    const data = {
      username,
      password,
      client_id: process.env.API_CLIENT_ID,
      client_secret: process.env.API_CLIENT_SECRET,
      grant_type: 'password',
      scope: '',
    };

    return this.submit('post', `${this.endpoint}/token`, data);
  }

  /**
   * Method used to register the user.
   *
   * @param {Object} data The register data.
   *
   * @returns {Promise} The result in a promise.
   */
  register(data) {
    return this.submit('post', `${this.endpoint}/register`, data);
  }
}

export default AuthProxy;
