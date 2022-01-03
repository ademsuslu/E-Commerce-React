import React,{useState,useEffect} from 'react'
import { motion } from "framer-motion"


const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
 
        const results = await response.json();
        console.log(results)
        setProducts(results)
    
    },[])
    return (
      <div className="Container">
        <div className="ProductAll">  
            <div className="enter"></div>
            <div 
           
            
            className="Products">
                {
                    products.map((product)=>{
                        const {id,category,image,price} = product;
                        const variants = {
                            visible:{
                                opacity:1,
                                scale:1,
                                transition: {
                                    delay:.5,
                                    type: 'spring',
                                    bounce: 0.25
                                }
                              
                            },
                            hidden:{
                             opacity:0,
                             scale:0
                            }}
                           
                        return <>
                            <div key={id}>
                                
                                <motion.img src={image}  
                                initial="hidden"
                                animate={products.length > 0 && "visible"}
                                variants={variants}
                               
                                
                                />
                                <div className="desc">
                                   <h4>{category}</h4>
                                    <h4>******</h4>
                                    <p>${price}</p>
                                    <motion.button
                                    
                                    
                                    animate={{
                                        scale: [0, 1.2, 1.5, 1.2, 1],
                                        borderRadius:["5px","10px"]
                                    }}
                                    transition={{
                                        delay:1,
                                    }}
                                    >Add to cart</motion.button>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default Products
