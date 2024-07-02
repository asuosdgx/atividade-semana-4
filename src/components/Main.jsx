import "./Main.css";

function Main() {
  const link =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5LCj9V2Rez6F6Cmqo6fu-hVASVmHMINa4XWFh717z3MiiIxiXEgWcH39rnDc0eiNPc-cPFOT7tw4zWLM4_90Sia5VboGyfCKlOJmYAepc1nDXp9EUeOlFcnpz98ftSIYAlbF9J86S-f0/s1600/cd-black-sabbath-sabotage-digipack-D_NQ_NP_614111-MLB20498784866_112015-F.jpg";
  const link2 =
    "https://mundovinyl.com.br/wp-content/uploads/2021/02/back-3.jpg";
  return (
    <>
      <>
        <section className="principal">
          <img className="capa" src={link} alt="capa-album"></img>
          <img src={link2} alt="contra-capa-album"></img>
        </section>
        <section>
          <p>
            A casa estava caindo para o Black Sabbath no meio da década de 1970
            – e não era por causa dos volumes ensurdecedores dos shows abalando
            as estruturas. A banda responsável pela popularização do heavy metal
            no mundo havia descoberto um esquema enorme de falcatruas sendo
            feitas por seu empresário até então, Patrick Meehan. Tentavam,
            então, arrumar a bagunça. A batalha para se verem livres de seu
            contrato com Meehan foi tão pública e espinhosa a ponto do vocalista
            Ozzy Osbourne ser servido uma intimação judicial durante um show do
            grupo, dando início a dois anos de brigas em tribunal. Mesmo assim,
            em meio a todo esse caos, o Sabbath conseguiu produzir um disco que
            conseguia voltar às raízes do que fez a banda despontar sem abrir
            mão da experimentação sonora dos álbuns anteriores. Essa é a
            história de “Sabotage”, seu sexto trabalho – e considerado por
            muitos o último “clássico” da formação original.
          </p>

          <h2>No estúdio</h2>

          <p>
            Quando finalmente entrou no estúdio para gravar o que seria seu
            sexto disco, o Black Sabbath tinha em mente um retorno à
            simplicidade de seus quatro primeiros lançamentos. “Sabbath Bloody
            Sabbath”, apesar de ser bem recebido por público e – pela primeira
            vez na carreira – crítica, havia apontado para um caminho mais
            complexo, influenciado por rock progressivo, o qual a banda não
            tinha mais interesse. O problema para esse objetivo se apresentou na
            forma da batalha judicial da banda com Patrick Meehan – ou melhor,
            de Patrick Meehan com a banda. O Sabbath agora estava sendo
            processado pelo empresário ladrão por quebra de contrato. Eram
            servidos intimações para comparecer ao tribunal quase diariamente. A
            situação acabou influenciando a sonoridade do disco. Estressados e
            furiosos, os integrantes descontavam todas suas frustrações na
            música, criando algumas das canções mais pesadas da banda até então,
            a exemplo de “Hole in the Sky” e “Symptom of the Universe” – esta
            última, citada por várias fontes como uma das primeiras composições
            de thrash metal da história. Até mesmo momentos mais experimentais,
            como “Megalomania”, soavam viscerais no fim das contas. Uma dessas
            faixas fazia referência direta à presença de advogados no estúdio:
            “The Writ”. A letra da canção foi escrita por Osbourne – algo
            incomum, uma vez que o baixista Geezer Butler era o principal
            letrista do Sabbath – e é uma desopilação sem dó de tudo atravessado
            na garganta do vocalista. Sonicamente, “Sabotage” continua as ideias
            estabelecidas em “Vol. 4” (1972), um dos maiores sucessos do Black
            Sabbath. Mantém alguns experimentos presentes em “Sabbath Bloody
            Sabbath”, mas sem abrir mão do peso e da assinatura sonora que
            consagrou o grupo anos antes. Lançado em julho de 1975, acabaria
            sendo o último sucesso criativo do grupo com Ozzy na formação.
            Atingiu o 7º lugar nas paradas do Reino Unido e 28º nos EUA,
            ganhando disco de prata e ouro, respectivamente.
          </p>
        </section>
      </>
      <article>
        <ol className="lista">
          <h2>Faixas: </h2>

          <li>Hole in the Sky</li>
          <li>Don't Start (too late)</li>
          <li>Symptom of the Universe</li>
          <li>Megalomania</li>
          <li>Thrill of it All </li>
          <li>Superztar</li>
          <li>Am I Going Insane</li>
          <li>The Writ</li>
        </ol>
      </article>
    </>
  );
}
export default Main;
