class ComponentCreator {
  constructor(name) {
    this.name = name;
  }

  make() {
    console.log(`Creating ${this.name}`);
  }
}

module.exports = ComponentCreator;
