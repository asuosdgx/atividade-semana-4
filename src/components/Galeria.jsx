import "./Galeria.css";
import Card from "./Card";
import imagem from "../assets/germs.jpg"
import imagem1 from "../assets/black.jpg"
import imagem2 from "../assets/dead.jpg"
import imagem3 from "../assets/misfits.jfif"

const discos = [
    {cod:0 , nome: "Lp The Germs - M.I.A Anthology", ano: "1991", estado: "Novo", origem:"Importado", preco: "R$ 259,90", img: imagem},
    {cod:1 , nome: "Lp Misfits - Walk Among Us", ano: "1981", estado: "Usado", origem:"Importado", preco: "R$ 239,80", img: imagem3},
    {cod:2 , nome: "Lp Black Flag - Slip It In", ano: "1984", estado: "Novo", origem:"Nacional",  preco: "R$ 289,90", img: imagem1 },
    {cod:3 , nome: "Lp Dead Kennedys - Plastic Surgery", ano: "1981", estado: "Novo", origem:"Importado",  preco: "R$ 219,90", img: imagem2},
];


function Galeria() {
    const cardsDiscos = discos.map((disco)=> {
        return <Card key = {disco.cod} nome= {disco.nome} ano={disco.ano} estado={disco.estado} origem= {disco.origem} preco={disco.preco} img = {disco.img}/>});
  return (
    <>
      <h1 className="tit">Produtos</h1>
      <section className="gallery">
      
        {cardsDiscos}
      </section>
    </>
  );
}

export default Galeria;
