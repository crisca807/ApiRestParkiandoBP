const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://crisca807:1034777256millos@parkiandowebserver.miucq83.mongodb.net/?retryWrites=true&w=majority&appName=parkiandowebserver';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch((err) => console.error('Error al conectar con MongoDB Atlas', err));
