const BaseCreator = require('./../Creator');
const fs = require('fs');
const clc = require('cli-color');

class PageCreator extends BaseCreator {
  constructor(name) {
    super(name, 'pages');

    this.pageSegments = this.getPageSegments(name);

    this.path = this.getPath();
    this.filename = this.getFilename();
  }

  getPageSegments(name) {
    let segments = name.split('.');

    if (segments.length === 1) {
      segments = [segments[0], 'index'];
    }

    return segments;
  }

  getPath() {
    return `pages/${this.pageSegments[0]}/${this.pageSegments[1]}`;
  }

  getFilename() {
    return this.pageSegments[1];
  }

  make() {
    this.fullPath = `${this.appPath}/${this.path}`;
    this.createPaths();
    this.createFiles();
  }

  createFiles() {
    let successful = true;

    ['html', 'js', 'vue'].forEach((ext) => {
      /*
       * Get blueprint and replace variables.
       */
      let blueprint = fs.readFileSync(`${__dirname}/template/template.${ext}`, 'utf8');

      const name = this.pageSegments[0].charAt(0).toUpperCase() + this.pageSegments[0].slice(1);
      const sub = this.pageSegments[1].charAt(0).toUpperCase() + this.pageSegments[1].slice(1);

      blueprint = blueprint.split('${name}').join(name);
      blueprint = blueprint.split('${sub}').join(sub);

      /*
       * Set destination of output file.
       */
      const destination = `${this.fullPath}/${this.filename}.${ext}`;

      /*
       * Copy blueprint to output file.
       */
      fs.writeFile(destination, blueprint, (err) => {
        if (err) {
          successful = false;
          console.log(clc.red('Whoops!', err));
        }
      });
    });
    if (successful) {
      console.log(clc.green('Page created successfully!'));
    }
  }
}

module.exports = PageCreator;
