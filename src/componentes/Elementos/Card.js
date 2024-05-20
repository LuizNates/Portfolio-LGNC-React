import styles from './Card.module.css'
import {useState} from 'react'

function Card({img,title,tech,description,site}){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className={styles.card}>
            <a href={site} onMouseEnter={InfoOn}>
                <img src={img}/>
            </a>
            
             {info === true &&(
                <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong> {tech}</p>
                <p>{description}</p>
                </section>
             )}   

            
        </div>
    )

}

export default Card