var fs = require('fs');

class CreateComponent {

  constructor(args) {
    console.log('Start create-component task');

    /*
     * Set root of project app
     */
    this.pathApp = args[1].substring(0, args[1].lastIndexOf('/')) + '/../../src/app';

    /*
     * Available component types
     */
     this.types = {
       'component': 'components',
       'page': 'pages'
     }

    /*
     * Parse args
     */
    args = args.splice(2);

    this.type = args[0];
    this.folder = this.types[args[0]];
    this.main = args[1];
    this.subs = args.splice(2);

    this.init();
  }

  init() {
    /*
     * Components root path
     */
    var path = `${this.pathApp}/${this.folder}/${this.main}/`;

    /*
     * Check if main directory doesn't exist yet.
     */
    if(fs.existsSync(path)) {
      console.warn(`ERROR: the folder "${this.folder}/${this.main}/" already exists`);
      return;
    }

    /*
     * Create components main directory and files.
     */
    this.createMain(path);

    /*
     * Create sub directories and files.
     */
    this.subs.forEach((sub, index) => {
      this.createSub(path, sub);
    });

    /*
     * Done!
     */
    console.log(`Done!`);
  }

  createMain(path) {
    console.log(`Create main component:`, this.main);

    /*
     * Create components root folder
     */
    fs.mkdirSync(path);

    /*
     * When component type is page make sure the main file is called index.
     */
    if(this.type == 'page') {
      fs.mkdirSync(`${path}/index`);
      this.makeFiles('index', `${path}/index`);
    }
    else {
      this.makeFiles(this.main, path);
    }
  }

  createSub(path, sub) {
    console.log(`Create sub component: ${sub}`);

    var subPath = path + sub;

    fs.mkdirSync(subPath);
    this.makeFiles(sub, subPath);
  }

  makeFiles(name, path) {
    ['html', 'js', 'vue'].forEach((ext, index, origin) => {
      /*
       * Get blueprint and replace variables.
       */
      var blueprint = fs.readFileSync(`${__dirname}/${this.type}.${ext}`, 'utf8');

      blueprint = blueprint.split('${main}').join(this.main);
      blueprint = blueprint.split('${name}').join(name);

      /*
       * Set destination of output file.
       */
      var destination = `${path}/${name}.${ext}`;

      /*
       * Copy blueprint to output file.
       */
      fs.writeFile(destination, blueprint, (err) => {
        if(err)
        {
          console.log('ERROR:', err);
        }
      });
    });
  }
}

new CreateComponent(process.argv)
