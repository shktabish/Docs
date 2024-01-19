import Card from './components/Card'
import Modal from './components/Modal'
import { BsPlusLg } from "react-icons/bs"
import { useRef, useState, useEffect } from 'react'
import { motion } from "framer-motion"
 
function App() {
  const cardsRef = useRef()
  const [showModal, setShowModal] = useState(false)
  const [info, setInfo] = useState([])
  const [idCount, setIdCount] = useState(0);

  const closeModal = () => setShowModal(false)

  const addCard = (title, desc) => {
    setInfo([...info, {
      id: idCount,
      title: title,
      desc: desc
    }])

    setIdCount(prevId => prevId + 1)
  }

  const closeCard = (idToBeDeleted) => {
    setInfo(prevInfo => prevInfo.filter((card) => card.id !== idToBeDeleted));
  }
  
  useEffect(() => {
    const storedInfo = JSON.parse(window.localStorage.getItem('notes'));
    const storedIdCount = JSON.parse(window.localStorage.getItem('idCount'));
  
    setInfo(storedInfo || []);
    setIdCount(storedIdCount || 0);
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(info));
  }, [info]);
  
  useEffect(() => {
    window.localStorage.setItem('idCount', JSON.stringify(idCount));
  }, [idCount]);

  return (
    <div className="App" ref={cardsRef}>
      <div className='nav'>Document</div>
      <div className='main'>
        Docs
      </div>
      <div className="cardsContainer" ref={cardsRef}>
        {info.map(info => 
          <Card key={info.id} id={info.id} title={info.title} desc={info.desc} closeCard={closeCard}/>  
        )}
      </div>
      {showModal && <Modal closeModal={closeModal} addCard={addCard}/>}
      <motion.div 
        whileHover={{scale:1.05}} 
        whileTap={{scale:0.9}}
        onClick={() => setShowModal(true)} 
        className="add">
        <BsPlusLg className='addBtn'/>
      </motion.div>
    </div>
  )
}

export default App;
