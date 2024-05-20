import styles from './Footer.module.css'
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

function Footer(){
    return(
        <div className={styles.footer} >
            <ul>
                <li><a href='https://www.instagram.com/lunates_z/?igsh=MWh4dDYxbjhncW45ag%3D%3D'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/luiz-gustavo-nates-caldato/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/LuizNates'><FaGithub size={30}/></a></li>
            </ul>
            <p>luizgunates@gmail.com</p>
            <p>Luiz Gustavo Nates Caldato © 2024</p>
        </div>
    )
}

export default Footer