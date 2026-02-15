import { useState } from "react";
import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

function App() {


  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligencia artificial" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
      descricao: "Valorizando e impulsionando a participação feminina no desenvolvimento front-end."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Pixel & Code",
      descricao: "Meetup unindo design e desenvolvimento front-end para explorar tendências em UI."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_3.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Back-End Masters",
      descricao: "Performance e inovação no back-end, conectando especialistas e entusiastas."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_4.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Code to Core",
      descricao: "Workshop que explora a essência do back-end, escalabilidade e boas práticas."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_5.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Server Side Summit",
      descricao: "Evento dedicado a tecnologias e estratégias para desenvolvimento back-end."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_6.png",
      tema: temas[2],
      data: new Date(),
      titulo: "DevOps Evolution",
      descricao: "Congresso sobre automação, CI/CD, cultura DevOps, tendências e inovações."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_7.png",
      tema: temas[3],
      data: new Date(),
      titulo: "Deep Learning Days",
      descricao: "Imersão sobre IA, redes neurais e aprendizado profundo."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_8.png",
      tema: temas[3],
      data: new Date(),
      titulo: "IA na palma da mão",
      descricao: "Workshop IA em dispositivos móveis, aplicando a tecnologia em soluções acessíveis."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_9.png",
      tema: temas[3],
      data: new Date(),
      titulo: "IA Segura e Acessível",
      descricao: "Palestra sobre segurança e inclusão em soluções baseadas em inteligência artificial."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_10.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Data Pulse",
      descricao: "Congresso sobre dados nas decisões estratégicas, análise e inovações da ciência de dados."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_11.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Data Revolution",
      descricao: "Palestra sobre últimas tendências em big data, análise e inteligência empresarial."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_12.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Driven by Data",
      descricao: "Minicurso sobre como dados impulsionam decisões e inovações para o futuro."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_13.png",
      tema: temas[4],
      data: new Date(),
      titulo: "SQL Summit",
      descricao: "Ciclo de palestras com especialistas do universo dos bancos de dados SQL."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_14.png",
      tema: temas[5],
      data: new Date(),
      titulo: "SkyTech Summit",
      descricao: "Palestra sobre tendências em computação em nuvem, escalabilidade e infraestrutura."
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_15.png",
      tema: temas[5],
      data: new Date(),
      titulo: "Mundo Cloud",
      descricao: "Encontro de especialistas e entusiastas para discutir novidades da tecnologia cloud."
    }
  ])


  function adicionarEvento (evento) {
    // eventos.push(evento)
    // console.log(eventos)
    setEventos([...eventos, evento])
  }

  return (
    <main>
      <header>
        <img src="/Logo.png" alt="Logo do Tecboard" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento}/>

      <section className="container">
        {temas.map(function (tema) {
          if(!eventos.some(function (evento) {
            return evento.tema.id == tema.id
          })) {
            return null
          }
          
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="cards">
                {eventos.filter(function (evento){
                  return evento.tema.id == tema.id
                }).map(function (evento,indice) {
                return <CardEvento evento={evento} key={indice}/>
                })}
              </div>
            </section>
          );
        })}
      </section>
      <footer>
        <section className="rodape">
          <img src="/Logo.png" alt="Logo do Tecboard" />
          <p>Desenvolvido por Alura. Projeto fictício  sem fins comerciais.</p>
        </section>
      </footer>
    </main>
  );
}

export default App;
