import express from "express";
import bodyParser from "body-parser";
import routes from './Routes/users.js'

const app = express();
const PORT = 5000;

app.use('/users', routes)
app.use(bodyParser.json());

app.get('/', (req,res)  => {
    console.log('[GET ROUTE]')
    res.send('Hello from homepage')
})


app.listen(PORT, () => console.log(`Server listening on port: http://localhost:${PORT}`));

