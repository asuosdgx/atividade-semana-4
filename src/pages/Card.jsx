import "./css_pages/Card.css"
import { Button } from "react-bootstrap";


function Card(props){
    return(
            <article className="card-1">
            <h3 className="text-black">{props.nome}</h3>
            <img class = "capa-album"src={props.img}></img>
            <h4 className="text-black">{props.origem}</h4>
            <h4>{props.estado}</h4>
            <h4 className="text-black">{props.preco}</h4>
            <Button className="btn" variant="dark">Comprar</Button>

            </article>
    )
}
export default Card;