const ComponentCreator = require('./component');
const PageCreator = require('./page');

class FileScaffolder {
  constructor(args) {
    this.validTypes = [
      'page',
      'component',
    ];
    this.type = args[2];
    this.name = args[3];

    const isValid = this.validate();

    if (isValid) {
      this.init();
    }
  }

  validate() {
    let isValid = true;

    if (!this.type) {
      console.log('You need to specify a type.');
      isValid = false;
    }

    if (!this.name) {
      console.log('You need to specify a name.');
      isValid = false;
    }

    if (!this.validTypes.includes(this.type)) {
      console.log('Wrong type given');
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
