const BaseCreator = require('./../Creator');
const fs = require('fs');
const clc = require('cli-color');

class ComponentCreator extends BaseCreator {
  constructor(name) {
    super(name, 'components');
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

      blueprint = blueprint.split('${name}').join(this.name);

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
      console.log(clc.green('Component created successfully!'));
    }
  }
}

module.exports = ComponentCreator;
