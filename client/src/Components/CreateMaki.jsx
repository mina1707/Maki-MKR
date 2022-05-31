import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import NavBar from './NavBar';
import MainStyles from './CreateMaki.module.css';
import { Button } from 'react-bootstrap';


const CreateMaki = (props) => {

    const [ingredients, setIngredients] = useState([])
    const [selectedIngredients, setSelectedIngredients] = useState([])
    const [selectedIngredientIdx, setSelectedIngredientIdx] = useState("")
    const [makis, setMakis] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:8000/api/ingredients")
            .then(res => {
                console.log(res.data);
                setIngredients(res.data);
            })
            .catch(err => console.log(err))
    }, [])


    const handleNewIngredientSubmit = (event) => {
        event.preventDefault();
        if (!selectedIngredientIdx) {
            return;
        }

        setSelectedIngredients([...selectedIngredients, ingredients[selectedIngredientIdx]]);
        setSelectedIngredientIdx("");
    }

    //CREATE MAKIS

    const CreateMaki = () => {
        const maki = {
            numberOfMaki: 0,
            ingredients: selectedIngredients,
            price: 5.99
        }
        setMakis(prevMakis => [...prevMakis, maki])
        setSelectedIngredients([])
    }

    // Function to increment count by 1
    const incrementCount = () => {
        // Update state with incremented value
        setCartCount(cartCount + 1);
    };


    //DELETE

    const handleIngredientDelete = ingredient => {
        setSelectedIngredients(selectedIngredients.filter(item => item._id !== ingredient._id))
    }

    //Whatever i HAVE IN STATE DO NOT NEEED TO BE PASSED.
    const handleRandom =() =>{
        const rand = Math.floor(Math.random() * ingredients.length)
        setSelectedIngredients([...selectedIngredients, ingredients[rand]]);
        console.log(ingredients[rand]);
        console.log(rand);
        
      }




    return (
        <div>
            <NavBar makiCount={makis.length} />
            <div className= {MainStyles.makimodif}>
            <img width="60px" height="60px" src ="146833-200.png" alt="makipic"/>
            <h1 style={{color:"orange", textShadow: "2px 2px #fa8900"}} className={MainStyles.makitittle}>Create your rolls </h1>
            <img width="60px" height="60px" src ="146833-200.png" alt="makipic"/>
            </div>

            <div className={MainStyles.wrapper}>
                <div className={MainStyles.columnLeft}>
                    <h3>Ingredient picker</h3>
                    <div className={MainStyles.columnLeftDetail}>


                        <select onChange={(e) => setSelectedIngredientIdx(e.target.value)}>
                            <option value="">Select your ingredients</option>
                            {
                                ingredients.map((ingredient, idx) => {
                                    return (

                                        <option value={idx} key={ingredient._id}>{ingredient.name} - $ 2.99</option>

                                    )
                                }
                                )
                            }
                        </select>


                        <Button style={{ padding: "12px 30px" }} variant="secondary" onClick={handleNewIngredientSubmit}> + ingredient </Button>
                        <Button onClick={handleRandom} variant="secondary" style={{ padding: "12px 50px" }}> random</Button>
                    </div>
                </div>

                <div className={MainStyles.columnRight}>
                    <h3>Ingredients added to your roll:</h3>
                    <div className={MainStyles.box}>
                        {
                            selectedIngredients.map((ingredient, idx) => {
                                return (
                                    <div key={idx} className={MainStyles.ingredientAlignment}>
                                        <h4>{ingredient.name}</h4>
                                        <Button variant="danger" onClick={(e) => { handleIngredientDelete(ingredient) }}><FaTrashAlt /></Button>
                                    </div>
                                )
                            }
                            )

                        }

                    </div>

                    <div className={MainStyles.buttonStyle}>

                    <Button style={{ padding: "12px 50px" }} variant="secondary" onClick={(e) => { CreateMaki(); incrementCount() }}>Create maki roll</Button>
                    <Link  to='/makis/cart' state={{ Makis: makis }} ><Button style={{ padding: "12px 50px" }} variant="secondary">Go to cart</Button></Link>

                    </div>

                </div>







            </div>



        </div>
    )
}

export default CreateMaki