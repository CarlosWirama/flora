flora
=====================

A web catalog for my personal project; Using ReactJS with MobX, NodeJS with Express JS, and MongoDB with Mongoose


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

Browser should open automatically. Otherwise, navigate to the URL reported in the terminal

### Credits

* Boilerplate using [mobx-react-boilerplate](https://github.com/mobxjs/mobx-react-boilerplate)
