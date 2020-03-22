const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');

const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use(
	'/graphql',
	graphqlHttp({
		schema: graphQlSchema,
		rootValue: graphQlResolvers,
		graphiql: true,
	})
);

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}
	next();
});

mongoose
	.connect(
		`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localcluster-iyds9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
	)
	.then(() => {
		app.listen(3000);
	})
	.catch(err => {
		console.log(err);
	});

	////////////////////////////////
	// Image Upload to server
	const Storage = multer.diskStorage({
		destination(req, file, callback) {
		  callback(null, './images');
		},
		filename(req, file, callback) {
		  callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
		},
	  });
	  
	  const upload = multer({ storage: Storage });
	  
	  app.get('/', (req, res) => {
		res.status(200).send('You can post to /api/upload.');
	  });
	  
	  app.post('/api/upload', upload.array('photo', 3), (req, res) => {
		console.log('file', req.files);
		console.log('body', req.body);
		res.status(200).json({
		  message: 'success!',
		});
	  });
	  
	  app.listen(3000, () => {
		console.log('App running on http://localhost:3000');
	  });
