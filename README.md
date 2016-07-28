# webpack-ready
A full, ready to go, webpack and react project starter

### Motivation
Whenever I started a new project I always repeated the same steps over and over.
So I decided to put together a quick project starter for rapid bootstraping.

## Usage

```bash
$ git clone https://github.com/andrei-cacio/webpack-ready
$ mv webpack-ready my-awesome-new-project # Optional: rename the project folder
$ cd my-awesome-new-project
$ git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git
$ npm install
$ npm start
```
Open in your favourite browser (Chrome) this url: [localhost:8080](http://localhost:8080)

Open the folder in your favourite text editor/IDE.

Happy coding :coffee:!

## Features
- React support (with hot module replace support)
- ESnext (ES2015, ES2016, etc.) support (powered by [babel](https://babeljs.io/))
- TDD support (with [mocha](http://mochajs.org) and [chai](http://chaijs.com))
- Test coverage support (powered by [istanbul/nyc](https://github.com/istanbuljs/nyc))
- Code linting support (powerd by [eslint](http://eslint.org))
- Module bundler (powered by [webpack](https://webpack.github.io/))

## NPM scripts

`npm start` - opens a dev server on [localhost:8080](http://localhost:8080)

`npm t` - runs the test suite

`npm run cover` - prints the test coverage output table

`npm run build` - builds the project

`npm run build:prod` - builds the project for production

`npm run lint` - lints the source code

# License
The MIT License (MIT)

Copyright (c) 2016 Andrei Cacio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



