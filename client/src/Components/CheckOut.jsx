import React, { useState, useEffect, useNavigate } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import styles from './CheckOut.module.css'
import NavBar from './NavBar';

const CheckOut = (props) => {

    // const navigate = useNavigate();

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [cvv, setCvv] = useState("")


    //Errors

   


    const [errors, setErrors] = useState({});


    const createUser = (e) => {
        e.preventDefault()
        console.log("dfsdfsfsdf")
        const newUser = {
            name: name,
            address: address,
            city: city,
            state:state,
            zipCode: zipCode,
            cardNumber: cardNumber,
            cvv:cvv,
            
        }
        console.log(newUser);

        // POST to the DB with the obj
        axios.post("http://localhost:8000/api/users", newUser)
            .then(res => {
                console.log(res.data);
                console.log("CLIENT SUCCESS!!!!");
                
            })
            .catch(err => {
                // TODO: when errors come from Server!
                console.log("❌ CLient ERROR");
                console.log("le error obj:", err);
                console.log(err.response.data.errors);

                // PLATFORM WAY
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data                
                // Set Errors
                setErrors(errorResponse);
            })
            
    }



    return (
        <div>
            <NavBar />
            <h1>Payment Information</h1>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                
                    <Form onSubmit={createUser}>
                        { errors.name ? <p style ={{color:"red"}}>{errors.name.message}</p>: <></>}       
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name"  onChange={(e) => setName(e.target.value)} value={name} />
                        </Form.Group>

                        { errors.address ? <p style ={{color:"red"}}>{errors.address.message}</p>: <></>}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter adress"  onChange={(e) => setAddress(e.target.value)} value={address} />

                        </Form.Group>

                        { errors.city ? <p style ={{color:"red"}}>{errors.city.message}</p>: <></>}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} value={city} />
                        </Form.Group>

                        { errors.state ? <p style ={{color:"red"}}>{errors.state.message}</p>: <></>}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>State</Form.Label>
                            <Form.Select type="tex" placeholder="Enter state" onChange={(e) => setState(e.target.value)} value={state}>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>

                            </Form.Select>

                        </Form.Group>

                        { errors.zipCode ? <p style ={{color:"red"}}>{errors.zipCode.message}</p>: <></>}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter zip code" onChange={(e) => setZipCode(e.target.value)} value={zipCode} />
                        </Form.Group>


                        { errors.cardNumber ? <p style ={{color:"red"}}>{errors.cardNumber.message}</p>: <></>}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Card number</Form.Label>
                            <Form.Control type="text" placeholder="Enter a valid card number" onChange={(e) => setCardNumber(e.target.value)} value={cardNumber} />
                        </Form.Group>


                        { errors.cvv ? <p style ={{color:"red"}}>{errors.cvv.message}</p>: <></>}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>CVV (3 digits)</Form.Label>
                            <Form.Control type="password" placeholder="" onChange={(e) => setCvv(e.target.value)} value={cvv}/>
                        </Form.Group>


                        
                            <Button variant="secondary" type="submit">
                            Submit paymeny </Button>
                       
                    </Form>
                    <Link to="/makis"><Button style={{ padding: "5px 37px", margin: "5px" }} className={styles.buttonmodify} variant="danger" >Start over</Button></Link>
                </div>


            </div>







        </div>
    )
}

export default CheckOut