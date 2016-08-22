const BaseCreator = require('./../Creator');

class PageCreator extends BaseCreator {
  constructor(name) {
    super(name, 'pages');

    this.path = this.getPath();
    this.filename = this.getFilename();
  }

  getPath() {
    const pageSegments = this.name.split('.');

    if (pageSegments.length === 1) {
      return `pages/${pageSegments[0]}/index`;
    }

    return `pages/${pageSegments[0]}/${pageSegments[1]}`;
  }

  getFilename() {
    const pageSegments = this.name.split('.');

    if (pageSegments.length === 1) {
      return 'index';
    }

    return pageSegments[1];
  }
}

module.exports = PageCreator;
