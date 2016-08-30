const ComponentCreator = require('./component');
const PageCreator = require('./page');
const clc = require('cli-color');

class FileScaffolder {
  constructor(args) {
    this.validTypes = [
      'page',
      'component',
    ];
    this.type = args[2];
    this.name = args[3];


    if (this.validate()) {
      this.init();
    }
  }

  validate() {
    let isValid = true;

    if (!this.type) {
      console.log(clc.red('You need to specify a type.'));
      isValid = false;
    }

    if (!this.name && isValid) {
      console.log(clc.red('You need to specify a name.'));
      isValid = false;
    }

    if (!this.validTypes.includes(this.type) && isValid) {
      console.log(clc.red('Wrong type given.'));
      isValid = false;
    }

    return isValid;
  }

  init() {
    if (this.type === 'component') {
      const componentCreator = new ComponentCreator(this.name);
      componentCreator.make();
    } else if (this.type === 'page') {
      const pageCreator = new PageCreator(this.name);
      pageCreator.make();
    }
  }
}

new FileScaffolder(process.argv);
