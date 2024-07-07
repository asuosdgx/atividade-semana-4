import "./Card.css"


function Card(props){
    return(
            <article className="card">
            <h2>{props.nome}</h2>
            <img class = "capa-album"src={props.img}></img>
            <h3>{props.origem}</h3>
            <h3>{props.estado}</h3>
            <h3>{props.preco}</h3>
            <button className="btn">Comprar</button>

            </article>
    )
}
export default Card;