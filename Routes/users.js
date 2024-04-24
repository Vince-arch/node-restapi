import  express  from "express";
const router = express.Router();

//Mock database
const users =[
    {first_name: 'John',
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
    }
]

//Getting list of users from database
router.get('/', (req, res)=>{
    res.send(users)
})

export default router;