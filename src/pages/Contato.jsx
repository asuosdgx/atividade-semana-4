import Header from "./Header"
import { useForm } from "react-hook-form";
import "./css_pages/Contato.css"
import { Button } from "react-bootstrap";
import Footer from "./Footer";

function Contato(){
    const { register, handleSubmit, formState: {errors} } = useForm();
  
    function contatar(data) {
      console.log("Cadastro!");
      console.log(data);
    }
  
    return (
      <><Header></Header>
      <main className="mainly2">
            <form className="form-section forms" onSubmit={handleSubmit(contatar)}>
                <h1 className="text-center">Entre em Contato conosco:</h1>
                <hr />
                <div className="text-center form-area">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        className="form-control"
                        {...register("nome", { required: true, maxLength: 80 })} />
                    {errors.nome && <small className="invalid">Nome inválido</small>}
                </div>
                <div className="text-center form-area">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("email", { required: true })} />
                    {errors.email && <small className="invalid">Email inválido!</small>}
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center bttn-area">
                
                <label>
                    <textarea name="post-comment" placeholder="Deixe seu comentário"/>
                </label >
                    <Button variant="danger" className="mt-1 bttn" type="submit">
                        Enviar
                    </Button>
                </div>
            </form>
        </main>
        <Footer></Footer>
        </>
    );
  }
export default Contato