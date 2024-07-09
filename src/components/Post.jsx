import "./Post.css"
import { useState } from "react"


function Post() {
    const [estado, setEstado] = useState(false);
   

    function handleCurtir(click) {
        if (estado === false) {
            setEstado(true)
            alert("Post Curtido!")

        }
        else if (estado === true) {
            setEstado(false)
            alert("Post descurtido!")
        }
    }
    return (
        <>
            <section className="card-1">
                <h1 className="tit-post">Home Office é a modalidade oficial de trabalho no mundo!</h1>
                <p className="p-post">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus non, consequuntur earum quasi reprehenderit deserunt reiciendis nemo voluptates perferendis! Quo animi maxime quia sunt, suscipit totam possimus nulla est in dolorem alias nisi eligendi, fugiat soluta dignissimos facere maiores laboriosam qui autem eaque deserunt hic necessitatibus tempore doloremque. Aut sit aperiam debitis rem harum, doloremque itaque atque tempore nulla ipsa blanditiis laborum consequuntur iusto incidunt quaerat asperiores a impedit enim! Ab, corrupti atque et ex consequatur architecto recusandae dolorem accusamus magnam suscipit soluta facilis necessitatibus labore ullam praesentium earum fugit laudantium inventore libero autem. Voluptas cupiditate perferendis corrupti eveniet rem ratione dolorem a omnis at praesentium doloribus, recusandae iste? Quidem minima, molestiae cumque illo sit autem perspiciatis reprehenderit labore itaque vero, magni sapiente veniam laboriosam ratione dicta, quaerat unde doloribus! Quis, magnam placeat libero perspiciatis aperiam nulla eligendi laborum quod dolorum recusandae laudantium repellendus doloremque sit fuga beatae ea voluptatibus quibusdam unde omnis accusamus sunt. Soluta itaque culpa tempora ea, impedit optio sint omnis, dolore dolorem similique, quaerat odio molestiae in a! Veniam eum culpa corporis obcaecati impedit placeat ipsa deleniti in ad nam illo, blanditiis sint atque error quae consequatur repudiandae! Inventore perspiciatis, suscipit enim numquam harum iste dicta!
                </p>
                {estado ? <button className="curtido" onClick={handleCurtir}>❤</button> : <button className="curtir" onClick={handleCurtir}>🤍</button>}
            </section></>
    )
}
export default Post