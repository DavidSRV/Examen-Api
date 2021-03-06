const express = require ('express');
const morgan  = require ('morgan');
const cors = require ('cors');
const app = express();
const port = ('3000');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(require('./Routers/Routers'))

app.listen(port, () => {
    console.log(`Corriendo por el puerto ${port}`)
})