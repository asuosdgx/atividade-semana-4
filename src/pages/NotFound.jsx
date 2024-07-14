import "./css_pages/NotFound.css"
import Footer from "./Footer"


function NotFound(){
    return(
        <>
        <h1 className="text-center tit-not">Página não encontrada</h1>
        <div className="box1">
        <img src="not.avif"></img>
        </div> 
        <section className="texxxt">
            <p >
                Estamos trabalhando para melhor atendê-lo. No momento a página não está disponível, atualize o navegador ou tente novamente mais tarde.
            </p>
            <a className="a-nf"href="#home">Voltar à página Inicial.</a>
        </section>       
        <Footer></Footer>
        </>

    )
}       

            
 export default NotFound