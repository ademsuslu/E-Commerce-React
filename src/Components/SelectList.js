import React from 'react'
import { motion } from "framer-motion"

const SelectList = () => {
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
    return (
        <div className="select" >
             <motion.ul 
              initial="hidden"
              animate={5 > 0 && "visible"}
              variants={variants}
             
             className="select-list">
                <li className="nav"><a href="#">T-Shirts</a></li>
                <li className="nav"><a href="#">Hoodies</a></li>
                <li className="nav"><a href="#">Posters</a></li>
                <li className="nav"><a href="#">Albüms</a></li>
                <li className="nav"><a href="#"><img className="ıcon" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/344/external-shopping-cart-shopping-those-icons-lineal-color-those-icons.png" alt="" /></a></li>
            </motion.ul>
        </div>
    )
}

export default SelectList
