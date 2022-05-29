import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Reg = (props) => {



    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState([]);

    const createUser = (e) => {
      e.preventDefault()

      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,

      }
      console.log(newUser);

      // POST to the DB with the obj
      axios.post("http://localhost:8000/api/users", newUser)
        .then(res => {
          console.log(res.data);
          console.log("User created");
          navigate("/users");
        })
        .catch(err => {
          // TODO: when errors come from Server!
          console.log("❌  ERROR");
          console.log("le error obj:", err);
          console.log(err.response.data.errors);

          // PLATFORM WAY
          const errorResponse = err.response.data.errors; 
          const errorArr = []; 
          for (const key of Object.keys(errorResponse)) { 
            errorArr.push(errorResponse[key].message)
          }
          // Set Errors
          setErrors(errorArr);
        })
    }

    return (
      <div>

      <p>{errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}</p>  

        <form onSubmit={createUser}>
          First name <input onChange={(e) => setFirstName(e.target.value)} value={firstName} /> <br />
          Last name <input onChange={(e) => setLastName(e.target.value)} value={lastName} /> <br />
          Email <input onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
          Password <input onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
          <button >Create User</button>
        </form>

      </div>
    )
  
}

export default Reg;