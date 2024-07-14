import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import "./css_pages/Login.css";
import Header from "./Header";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function entrar(data) {
    console.log("Login!");
    console.log(data);
  }

  return (
    <>
      <Header></Header>
      <main className="mainly lgn">
        <form className="form-section forms" onSubmit={handleSubmit(entrar)}>
          <h1 className="text-center">Login</h1>
          <hr />
          <div className="text-center form-area">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", { required: "Email Obrigatório", min: 6 })}
            />
            {errors.email && <small className="invalid">Email inválido!</small>}
          </div>
          <div className="text-center form-area">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              className="form-control"
              {...register("senha", {
                required: "A senha é obrigatória",
                minLength: { value: 6, message: "Mínimo de 6 caracteres." },
              })}
            />
            {errors.senha && (
              <small className="invalid">{errors.senha.message}</small>
            )}
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center bttn-area">
            <Button variant="dark" className="mt-1 " type="submit">
              Entrar
            </Button>
            <Button variant="warning" className="mt-1" type="button">
              Esqueci a senha
            </Button>
          </div>
        </form>
      </main>

      <Footer className="fixed-bottom"></Footer>
    </>
  );
}

export default Login;
