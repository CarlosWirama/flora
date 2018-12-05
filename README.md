flora
=====================

A web catalog for my personal project; Using ReactJS with MobX, and Google Firebase as backend

Preview at https://flora-247.firebaseapp.com/


### Run

```
npm install
npm start
```

### Deploy Production
- change index.html script from `src="/bundle.js"` to `src="/dist/bundle.js"`
- open terminal:
	$ ./node_modules/.bin/webpack — config webpack.config.js
	$ sudo firebase deploy

(you may install and login to firebase first)
	$ npm install -g firebase-tools
	$ firebase login:ci --interactive

Browser should open automatically. Otherwise, navigate to the URL reported in the terminal

### Credits

* Boilerplate using [mobx-react-boilerplate](https://github.com/mobxjs/mobx-react-boilerplate)
