const mkdirp = require('mkdirp');

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

  make() {
    this.createPaths();

    console.dir(this);
  }

  createPaths() {
    mkdirp(`${this.appPath}/${this.path}`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('pow!');
      }
    });
  }
}

module.exports = Creator;
