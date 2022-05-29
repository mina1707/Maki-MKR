import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import styles from './Cart.module.css';
import NavBar from './NavBar';
import { Button } from 'react-bootstrap';



const Cart = () => {


    const location = useLocation()
    const { Makis } = location.state

    const [tax, setTax] = useState("")
    const [totalTotalPrice, setTotalTotalPrice] = useState("")

    console.log(Makis)

    useEffect (()=> {

       Makis.forEach((maki, idx) => {

        maki.totalPrice = maki.price + maki.ingredients.reduce((totalPrice, ingredient) => totalPrice + ingredient.price, 0)
       

       })

       
       setTotalTotalPrice(Makis.reduce((totalTotalPrice, maki )=> totalTotalPrice + maki.totalPrice,0));

       setTax(totalTotalPrice * 0.1);

    },[Makis])

    return (

        <>
            <NavBar />
            <div className= {styles.makimodif}>
            {/* <img width="60px" height="60px" src ="146833-200.png" alt="makipic"/> */}
            <h1  className={styles.makitittle}>Maki MKR </h1>
            </div>
  
            <div className={styles.body}>
                <h1 className={styles.textAlignment}>Your makis </h1>
                <div className={styles.container} >
                    {
                        Makis.map((maki, idx) => {

                            return (
                                <div >
                                    <div className={styles.eachRoll}>
                                        <div key={idx}>
                                            <h2>Roll {idx + 1}</h2>

                                            {
                                                maki.ingredients.map((ingredient, idx) => {
                                                    return (
                                                        <p>{ingredient.name} </p>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div>
                                            <p>{maki.totalPrice}</p>
                                        </div>
                                    </div>
                                    <hr />

                                </div>
                            )

                        })

                    }
                    <div className={styles.footer}>
                        <h5 className={styles.textmodifytwo} >Delivery fee: 4.50</h5>
                        <h5 className={styles.textmodifytwo} >Service fee: 1.90</h5>
                        <h5 className={styles.textmodifytwo} >Tax: 1.90</h5>



                        <h2 className={styles.textmodifytwo}>Total: {totalTotalPrice + tax + 4.50 + 1.90}</h2>

                    </div>

                </div>

                <div className={styles.alignment}>
                <Link to="/makis"><Button style={{ padding: "12px 60px" }} className={styles.buttonmodify} variant="danger" >Start over</Button></Link>
                <Link to="/checkout"><Button style={{ padding: "12px 60px" }} className={styles.buttonmodify} variant="secondary" >Check out</Button></Link>
                </div>

            </div>
        </>
    )
}

export default Cart


