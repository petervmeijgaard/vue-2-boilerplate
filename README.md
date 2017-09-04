# vue-2-boilerplate
> A boilerplate for building medium to large Vue 2 single page applications

This boilerplate is based on the Vue webpack template.
Common topics are discussed in the VueJS [docs](http://vuejs-templates.github.io/webpack). Make sure to read it!

## Usage
To get up and running run:
``` bash
$ npm install
$ npm run dev
```
Yes, that's it. Only two commands!

If you still think that's too much effort, you could also run:
``` bash
$ npm i && npm run dev
```
But yeah, this will basically do the same as `npm install`.
If even this is too much of a deal, try creating an alias and bind `npm install && npm run dev` to `npmid`.

## Configuration ##
> Wait a minute, you just said that I only need to run npm install?
> What's this? I need to do more?

Yeah, to get up and running real quick, `npm install` is enough.
But if you want to, let's say, connect to an external API, there's a little bit more involved.
You need to configure your application a bit more, explained below:

### Config files ###
Inside the `config/*.env.js`-files, you can configure your environment variables.
Out of the box the applications comes bundled with AJAX-support.
The only thing you need to do is change `API_LOCATION` environment variable.
If you want to use OAuth 2, you can set the `API_CLIENT_ID` and `API_CLIENT_SECRET` here as well.

Are you in dev-mode and want to use different values than your production mode?
No problem! Just copy the config from the `prod.env.js`-file and paste them in the `dev.env.js`-file.
Edit the values and you're good to go!

For more information, visit the [docs](http://vuejs-templates.github.io/webpack/env.html).

## What's included ##
- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

- `npm run unit`: start the Karma Test Runner.
  - Unit Tests are provided by Karma, Mocha, Chai and Sinon-Chai.
  - The testing files should be place under **test/unit/specs**.
  - Make sure every test file ends in `.spec.js`

- `npm run e2e`: start the Nightwatch Test Runner.
  - End to End (e2e) Tests are provided by Nightwatch, Selenium and PhantomJS.
  - The testing files should be place under **test/e2e/specs**.

## Other tools ##
### Scaffolding ###
For quickly scaffolding components, pages, layouts and more, install the [Vueture CLI tool](https://github.com/vueture/vueture-cli).
``` bash
$ npm install -g vueture-cli
```

## Important Files ##
So there are two important files that needs to be addressed:

### main.js ###
This file will load your single page application and bootstrap all the plugins that are used.
It will also serve as the entry point which will be loaded and compiled using webpack.

### app/index.vue ###
The main Vue file.
This file will load the page inside the `router-view`-component.
It will check if the user is authenticated and load the resources accordingly.

## Directory Structure ##
Inside the `src`-directory, are a couple directories that needs to be addressed:

### Components ###
Your components will be placed inside this directory.
As you can see, this boilerplate comes already shipped with a pre-made card component.

### Layouts ###
Your layout files will be placed inside this directory.
When you are building a large single page application, you will be using different layouts.
For instance, your login-page or register-page will have a different layout than your account-page.

The boilerplate comes out of the box with two layouts included.
A minimal layout, used for the login and register page, and a default layout, used for the home and account page.

### Mixins ###
The mixins you want to use with Vue will be placed inside this directory.

Inside the mixins directory is a `slot`-mixin.
This mixin will add the `hasSlot()`-method to all the components it is used in.

### Pages ###
The pages are placed inside this directory.
By default it comes with an `account/index.vue`, `home/index.vue`, `login/index.vue` and a `register/index.vue` page,
but feel free to add more.

### Plugins ###
This boilerplate comes with a couple of plugins you can use.
It will load and configure:
 - vue
 - vue-router
 - vue-i18n
 - vuex
 - vuex-router-sync
 - axios
 - bootstrap
 - font-awesome

Don't like one of those plugins?
Just remove the file from the `plugins`-directory and remove the entry from the `main.js`-file.
Also make sure to remove the package and dependencies from the `package.json`-file.

### Proxies ###
Proxies are used to perform AJAX-requests.
This boilerplate comes with a base proxy which can be used to make performing AJAX-requests fairly easy.
Create a new proxy, for example `UserProxy`, and extend the `Proxy`.
This way you've got access to the `all`, `find`, `update`, `create` and `destroy` methods.
The boilerplate comes with an `AccountProxy` and `AuthProxy` by default.

### Routes ###
In this directory you can specify the routes that are used by this application.
VueRouter loads the routes located in this directory.

### Store ###
As mentioned before, Vuex is used as a single point of truth.
To learn more about Vuex, visit the [documentation](http://vuex.vuejs.org)

### Transformers ###
Transformers are used to transform the incoming and outgoing requests.
If you have an API where you can retrieve posts from, a post wil look something like this:
``` JSON
{
  "id" : 1,
  "title" : "Hello World!",
  "content" : "Lorem Ipsum",
  "created_at" : "today"
}
```
However, it feels weird to use snake_cased variables inside your camelCased application.
This is where transformers come in.
So given the previous example, using a transformer, it will look something like this:
``` JSON
{
  "id" : 1,
  "title" : "Hello World!",
  "content" : "Lorem Ipsum",
  "createdAt" : "today"
}
```

### Utils ###
Here you can place handy utils you want to use inside your application.

### Test ###
Both the Unit Tests and the End-2-End Tests are within the `test/` folder.
Unit Tests should go inside the `test/unit/specs` folder.
E2e Tests should go inside the `test/e2e/specs` folder.
You can read more about both test on the [Webpack Boilerplate Testing Session](http://vuejs-templates.github.io/webpack/unit.html).

## Got questions or improvements? ##
Feel free to hit me up on:
 - [Gitter](https://gitter.im/petervmeijgaard)
 - [GitHub](https://github.com/petervmeijgaard)
 - [Twitter](https://twitter.com/petervmeijgaard)

Or create an [issue](https://github.com/petervmeijgaard/vue-2-boilerplate/issues)

## Fork It And Make Your Own ##
What are you waiting for?!
Make something awesome!

## License ##
The MIT License (MIT)

Copyright (c) 2016 - 2017 Peter van Meijgaard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
