const fs = require('fs');

class CreateComponent {

  constructor(args) {
    console.log('Start create-component task');

    /*
     * Set root of project app
     */
    this.pathApp = `${args[1].substring(0, args[1].lastIndexOf('/'))}/../../src/app`;

    /*
     * Available component types
     */
    this.types = {
      component: 'components',
      page: 'pages',
    };

    /*
     * Parse args
     */
    args = args.splice(2);

    this.type = args[0];
    this.folder = this.types[args[0]];
    this.main = args[1];
    this.subs = args.splice(2);

    /*
     * Some basic error handling and provide tips.
     */

    // Type undefined
    if (typeof (this.types[args[0]]) === 'undefined') {
      console.log(
        `ERROR: You didn't specify whether you want to create a "page" or "component" \n`
      );
      console.log(
        `Example for creating a dropdown component: \n npm run create component dropdown \n\n`
      );
      console.log(`Example for creating a blog page: \n npm run create page blog`);
      return;
    }

    // Name undefined
    if (typeof (this.main) === 'undefined') {
      console.log(`ERROR: You didn't specify a name for your ${this.type} \n`);
      console.log(`Example: npm run create ${this.type} name-of-your-component`);
      return;
    }

    this.init();
  }

  init() {
    /*
     * Components root path
     */
    let path = `${this.pathApp}/${this.folder}/${this.main}/`;

    /*
     * Check if main directory doesn't exist yet.
     */
    if (fs.existsSync(path)) {
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
    this.subs.forEach((sub) => {
      this.createSub(path, sub);
    });

    /*
     * Done!
     */
    console.log('Done!');
  }

  createMain(path) {
    console.log('Create main component:', this.main);


    /*
     * When component type is page make sure the main file is called index.
     */
    if (this.type === 'page') {
      const page = this.main.split('.');
      if (page.length === 1) {
        fs.mkdirSync(`${path}/index`);
        this.makeFiles('index', `${path}/index`);
      } else {
        path = `${this.pathApp}/${this.folder}/${page[0]}/`;
        if (!fs.existsSync(path)){
          fs.mkdirSync(path);
        }
        fs.mkdirSync(`${path}/${page[1]}`);
        this.makeFiles('index', `${path}/${page[1]}`);
      }
    } else {
      /*
       * Create components root folder
       */
      fs.mkdirSync(path);

      this.makeFiles(this.main, path);
    }
  }

  createSub(path, sub) {
    console.log(`Create sub component: ${sub}`);

    const subPath = path + sub;

    fs.mkdirSync(subPath);
    this.makeFiles(sub, subPath);
  }

  makeFiles(name, path) {
    ['html', 'js', 'vue'].forEach((ext) => {
      /*
       * Get blueprint and replace variables.
       */
      let blueprint = fs.readFileSync(`${__dirname}/${this.type}.${ext}`, 'utf8');

      blueprint = blueprint.split('${main}').join(this.main);
      blueprint = blueprint.split('${name}').join(name);

      /*
       * Set destination of output file.
       */
      const destination = `${path}/${name}.${ext}`;

      /*
       * Copy blueprint to output file.
       */
      fs.writeFile(destination, blueprint, (err) => {
        if (err) {
          console.log('ERROR:', err);
        }
      });
    });
  }
}

new CreateComponent(process.argv);
