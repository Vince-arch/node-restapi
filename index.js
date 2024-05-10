import express from 'express';
import bodyParser from 'body-parser'
import userRoutes from './Routes/users.js'
import  {v4 as uuidv4} from 'uuid';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRoutes)

app.get('/', (req, res) =>{
    res.send('HELLO FROM HOMEPAGE')
})


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));