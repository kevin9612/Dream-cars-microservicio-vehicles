const expressConfig = require('./config/ExpressConfig');
const mongoConfig = require('./config/MongoConfig');
const morgan = require('morgan');
const app = expressConfig.getApp();
const mongoApp = mongoConfig.getMongoApp();
//require routes
const vehicleRoutes = require('./routes/VehicleRouter');

mongoApp.connect(mongoConfig.getMongoUrlDatabaseConection(), { useNewUrlParser: true })
    .then(db => console.log('Db conected'))
    .catch(err => console.log('error a la hora de conectarme ' + err));

//Settings
app.set('port', expressConfig.getPort());

// middleware
app.use(morgan('dev'));
app.use(expressConfig.getUrlEncode());

//BodyParser
app.use(expressConfig.getBodyParserJson());
app.use(expressConfig.getBodyParserEncoder());

// routes
app.use('/', vehicleRoutes);

app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto ' + expressConfig.getPort());
});