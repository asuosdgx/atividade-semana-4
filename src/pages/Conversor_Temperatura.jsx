import { useState } from "react";
import "./Conversor.css"


function Conversor_Temperatura() {
    const [celsius, setCelsius] = useState(0);
    const [fah, setFah] = useState(0);

    function handleGraus(evento) {
        const input = evento.target;
        const valor = input.value;
        setCelsius(valor);
    }
        function handleCalcular() {
            const resultado = (celsius*1.8) + 32
            setFah(resultado);
        }


        return (
            <section className="conversor">
                <h1>Conversor de Temperatura</h1>
                <input
                    type="number"
                    placeholder="Digite a temperatura em Celsius °: "
                    onChange={handleGraus}
                />
                <br></br>
                <button onClick={handleCalcular}>Calcular</button>
                <h4>A temperatura em Fahrenheit é: {fah}</h4>
            </section>
        )
    }


export default Conversor_Temperatura