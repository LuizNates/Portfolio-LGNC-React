import styles from './Presentation.module.css'
import ButtonA from '../Elementos/ButtonA'
import me from '../../Image/me/fotoperfil.jpeg'
import { useEffect, useState } from 'react'

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['Luiz Gustavo Nates Caldato!', 'Desenvolvedor Front-End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    },[text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)


        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(true);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div className={styles.presentation} id='Presentation'>
            <div id='boasVindas' className={styles.boasVindas}>
                <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
                <h1>Olá, eu sou {text}</h1>
                <p>
                Sou apaixonado por programação.<br/>
                Como desenvolvedor Full-Stack, eu tenho o compromisso de desenvolver<br/>
                sites bem trabalhados, responsivos e interativos para os negócios.<br/>
                Meus projetos já mostraram muito das minhas habilidades, mas estou<br/>
                sempre em busca de novos desafios para me superar.
                </p>

                <ButtonA link='https://www.linkedin.com/in/luiz-gustavo-nates-caldato/' text='Conecte-se comigo!'/>

            </div>
            
            <div id='foto' className={styles.foto}>
                <img src={me}/>
            </div>
        </div>
    )
}

export default Presentation