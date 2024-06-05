import styles from './ButtonA.module.css'

function ButtonA({text, link}){
    return(
        <div>
            <a href={link}>
            <button> 
                <span>Conecte-se comigo!</span>
            </button>
            </a>
        </div>
    )
}

export default ButtonA