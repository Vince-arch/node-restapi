import  express  from "express";
import { v4 as uuidv4}  from 'uuid' ;

const router = express.Router();


//Mock database
const users =[
   /* {first_name: 'John',
    last_name: "Doe",
    email:"johndoe@example.com"
    },
    {first_name: 'Mary',
    last_name: "wambui",
    email:"marywambui@example.com"
    },
    {first_name: 'Tom',
    last_name: "Kimani",
    email:"tomkimani@example.com"
    }*/
]

// Adding users to our mock database
router.post('/', (req, res) =>{
    const user = req.body;

    users.push({...user, id: uuidv4()})
    res.send(`${user.first_name} has been added`)
})

//Getting list of users from database
/*router.get('/', (req, res)=>{
    res.send(users)
})*/

export default router;