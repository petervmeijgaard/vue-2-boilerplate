# vue-2-boilerplate
> A boilerplate for building medium to large Vue 2 single-page applications

This boilerplate is based on the Vue webpack template. Common topics are discussed in the VueJS
[docs](http://vuejs-templates.github.io/webpack). Make sure to read it!

## Usage
To get up and running run:
``` bash
$ yarn
$ yarn serve
```
Yes, that's it. Only two commands!

If you still think that's too much effort, you could also run:
``` bash
$ yarn && yarn serve
```
But yeah, this will basically do the same as `yarn`. If even this is too much of a deal, try creating an alias
and bind `yarn && yarn serve` to `yarn:serve`.

## Configuration ##
> Wait a minute, you just said that I only need to run `yarn`?
> What's this? Do I need to do more?

Yeah, to get up and running real quick, `yarn` is enough. But if you want to, let's say, connect to an external
API, there's a little bit more involved. You need to configure your application a bit more, explained below:

### Environment variables ###
In the root of the boilerplate is a predefined environment file. Copy the file and name it `.env` or a configuration
specific file like `.env.dev`. For more information, visit the
[docs](https://github.com/vuejs/vue-cli/blob/dev/docs/env.md).

## What's included ##
- `yarn serve`: first-in-class development experience.
- `yarn build`: production-ready build.
- `yarn unit`: start the Karma Test Runner.
- `yarn e2e`: start the Nightwatch Test Runner.
- `yarn lint`: lint the files using ESLint.

## Important Files ##
So there are two important files that need to be addressed:

### main.js ###
This file will load your single page application and bootstrap all the plugins that are used. It will also serve as the entry point which will be loaded and compiled using webpack.

### App.vue ###
The main Vue file. This file will load the page inside the `router-view`-component. It will check if the user is
authenticated and load the resources accordingly.

## Directory Structure ##
Inside the `src`-directory, are a couple of directories that need to be addressed:

### Assets ###
The assets that you want to use are placed inside this directory. This can be images, stylesheets, videos... you name
it.

### Components ###
Your components will be placed inside this directory. As you can see, this boilerplate comes already shipped with a
pre-made card component.

### Layouts ###
Your layout files will be placed inside this directory. When you are building a large single page application, you will
be using different layouts. For instance, your login-page or register-page will have a different layout than your
account-page.

The boilerplate comes out of the box with two layouts included. A minimal layout, used for the login and register page,
and a default layout, used for the home and account page.

### Locale ###
The Vue I18n plugin is used for localization. In the locale directory, you'll find an example for internalization. This
boilerplate comes with examples for English and Dutch out of the box, but feel free to add more!

### Mixins ###
The mixins you want to use with Vue will be placed inside this directory.

Inside the mixins directory is a `slot`-mixin. This mixin will add the `hasSlot()`-method to all the components it is
used in.

### Plugins ###
This boilerplate comes with a couple of plugins you can use.
It will load and configure:
 - axios
 - bootstrap
 - font-awesome
 - vue-i18n
 - vue-router
 - vuex
 - vuex-router-sync

Don't like one of those plugins? Just remove the file from the `plugins`-directory and remove the entry from the
`main.js`-file. Also, make sure to remove the package and dependencies from the `package.json`-file.

### Proxies ###
Proxies are used to perform AJAX-requests. This boilerplate comes with a base proxy which can be used to make performing
AJAX-requests fairly easy. Create a new proxy, for example, `UserProxy`, and extend the `Proxy`. This way you've got
access to the `all`, `find`, `update`, `create` and `destroy` methods. The boilerplate comes with an `AccountProxy` and
`AuthProxy` by default.

### Routes ###
In this directory, you can specify the routes that are used by this application. Vue Router loads the routes located in
this directory.

### Store ###
As mentioned before, Vuex is used as a single point of truth. To learn more about Vuex, visit the
[documentation](http://vuex.vuejs.org)

### Transformers ###
Transformers are used to transform the incoming and outgoing requests. If you have an API where you can retrieve posts
from, a post will look something like this:
``` JSON
{
  "id" : 1,
  "title" : "Hello World!",
  "content" : "Lorem Ipsum",
  "created_at" : "today"
}
```
However, it feels weird to use snake_cased variables inside your camelCased application. This is where transformers come
in. So given the previous example, using a transformer, it will look something like this:
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

### Views ###
The pages are placed inside this directory. By default it comes with an `Account/Index.vue`, `Home/Index.vue`,
`Login/Index.vue` and a `Register/Index.vue` page, but feel free to add more.

### Test ###
Both the Unit Tests and the End-2-End Tests are within the `test/` folder. Unit Tests should go inside the
`test/unit/specs` folder. E2e Tests should go inside the `test/e2e/specs` folder. You can read more about both tests on
the [Webpack Boilerplate Testing Session](http://vuejs-templates.github.io/webpack/unit.html).

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

Copyright (c) 2016 - 2020 Peter van Meijgaard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
