import './modal.css'
import { motion } from "framer-motion"

const Modal = ({ closeModal, addCard }) => {

    const handleAddCard = () => {
        const title = document.getElementById("title").value;
        const desc = document.getElementById("desc").value;

        if(title.trim() !== '' && desc.trim() !== '') {
            addCard(title, desc)
        }

        closeModal()
    }


  return (
    <div className="inputContainer">
        <label>Title</label>
        <input type="text" placeholder='Title' id="title" />
        <label>Description</label>
        <div className='txtAreaCon'>
            <textarea type="text" placeholder='Enter your notes' id="desc" />
        </div>
        <div className='btns'>
            <motion.div 
                whileHover={{scale:1.05}} 
                whileTap={{scale:0.9}} 
                className="addNotes" 
                onClick={handleAddCard}>
                    Add Notes
            </motion.div>
            <motion.div 
                whileHover={{scale:1.05}} 
                whileTap={{scale:0.9}} 
                className="cancel"
                onClick={closeModal}>
                    Cancel
            </motion.div>
        </div>
    </div>
  )
}

export default Modal