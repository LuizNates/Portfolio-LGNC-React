import ButtonB from '../Elementos/ButtonB'
import styles from './Projects.module.css'
import Card from '../Elementos/Card'
import dncweather from '../../Image/projects/dncweather.png'
import ccxpdnc from '../../Image/projects/ccxpdnc.png'
import portfolio2 from '../../Image/projects/portfolio2.png'
import bootcampdnc from '../../Image/projects/bootcampdnc.png'
import lpdnc from '../../Image/projects/lpdnc.svg'


function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Card
                img={dncweather}
                title="Dnc Weather"
                tech="HTML, CSS, JS"
                description="Projeto Full-Stack realizado para fixação do conteudo de consumo de API"
                repo="https://github.com/LuizNates/pagina-dnc-api"
                site="https://desafio-dnc-api-ln.netlify.app"
            />
            <Card
                img={ccxpdnc}
                title="CCXP DNC"
                tech="HTML, CSS, JS"
                description="Projeto Full-Stack realizado para fixação do conteudo de JavaScript"
                repo="https://github.com/LuizNates/CCXP-DNC"
                site="https://ccxp-dnc-ln.netlify.app"
            />
            <Card
                img={portfolio2}
                title="Portfólio Antigo"
                tech="HTML e CSS"
                description="Projeto para treino de conteúdo HTML e CSS"
                repo="https://github.com/LuizNates/portfolio-luiznates"
                site="https://luiznatesportflio.netlify.app"
            />
            <Card
                img={bootcampdnc}
                title="Bootcamp DNC"
                tech="HTML e CSS"
                description="Projeto para treino de conteúdo HTML e CSS"
                repo="https://github.com/LuizNates/Bootcamp-DNC"
                site="https://bootcampdncluiznates.netlify.app"
            />
            <Card
                img={lpdnc}
                title="Landing Page - DNC"
                tech="HTML e CSS"
                description="Projeto para treino de conteúdo HTML e CSS"
                repo="https://github.com/LuizNates/projeto-landing-page"
                site="https://projeto-teste-dnc-ln.netlify.app"
            />
        </div>
    )
}

export default  Projects