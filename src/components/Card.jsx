import React from 'react';
import { PiNotepad } from "react-icons/pi"
import { RxCross2 } from "react-icons/rx"
import { motion } from "framer-motion"
import './card.css'

const Card = ({ cardsRef, id, title, desc, closeCard }) => {

  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.05 }}
      dragConstraints={cardsRef}
      className="card"
    >
      <div className="icons">
        <PiNotepad className='notepad' />
        <RxCross2 className='cross' onClick={() => closeCard(id)}/>
      </div>
      <h4 className="title" style={{ marginBottom: "5px", color: "#000" }}>{title}</h4>
      <p style={{ fontSize: "0.85rem" }}>{desc}</p>
    </motion.div>
  );
};

export default Card;