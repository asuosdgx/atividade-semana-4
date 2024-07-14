import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "./Header";
import Footer from "./Footer";
import "./css_pages/Cadastro.css"


function Cadastro() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  function cadastrar(data) {
    console.log("Cadastro!");
    console.log(data);
  }

  return (
    <><Header></Header>
    <main className="mainly1">
          <form className="form-section forms" onSubmit={handleSubmit(cadastrar)}>
              <h1 className="text-center">Cadastro</h1>
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
              <div className="text-center">
                  <label htmlFor="nome">Data de Nascimento</label>
                  <input
                      type="date"
                      id="date"
                      className="form-control"
                      {...register("nome", { required: true, min: 1991})} />
                  {errors.nome && <small className="invalid">Selecione uma data</small>}
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

              <div className="text-center form-area">
                  <label htmlFor="senha">Senha</label>
                  <input
                      type="password"
                      id="senha"
                      className="form-control"
                      {...register("senha", { required: true, minLength: 6 })} />
                  {errors.senha && <small className="invalid">Senha inválida!</small>}
              </div>
              <div className="text-center form-area">
                  <label htmlFor="senha"><i>Concordo com os termos de Usuário.</i></label>
                  <input
                      type="checkbox"
                      id="check"
                      {...register("check", { required: true })} />
                  {errors.senha && <small className="invalid">Os termos são obrigatórios!</small>}
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center bttn-area">
                  <Button variant="dark" className="mt-1 bttn" type="submit">
                      Cadastrar
                  </Button>
                  <Button variant="danger" className="mt-1 bttn" type="button">
                      Entrar com o Google
                  </Button>
              </div>
          </form>
      </main>
      <Footer></Footer>
      </>
  );
}

export default Cadastro;