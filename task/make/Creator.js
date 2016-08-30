require('shelljs/global');
const fs = require('fs');

class Creator {
  constructor(name, baseDirectory) {
    /**
     * The path to the app-directory
     *
     * @type {string}
     */
    this.appPath = 'src/app';

    /**
     * The name of the item
     */
    this.name = name;

    /**
     * The base directory
     */
    this.baseDirectory = baseDirectory;

    /**
     * The path that needs to be created
     *
     * @type {string}
     */
    this.path = `${this.baseDirectory}/${this.name}`;

    /**
     * The filename
     */
    this.filename = name;
  }

  createPaths() {
    mkdir('-p', this.fullPath);
  }
}

module.exports = Creator;
