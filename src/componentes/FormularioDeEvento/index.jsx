import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import "./formulario-de-evento.estilos.css";

export function FormularioDeEvento({ temas }) {
  function aoFormSubmetido(formData) {
    console.log("Tá na hora de criar um novo evento!", formData);
    const evento = {
      capa: formData.get("capa"),
      tema: temas.find(function (item) {
        return item.id == formData.get("tema");
      }),
      data: new Date(formData.get("dataDoEvento")),
      titulo: formData.get("nome"),
    };
    console.log("Esse é o evento: ", evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            name="nome"
            placeholder="Summer dev hits"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual a url da imagem?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            name="capa"
            placeholder="Https://...."
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataDoEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataDoEvento" name="dataDoEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="TemaDoEvento">Tema do evento</Label>
          <ListaSuspensa
            id="TemaDoEvento"
            itens={temas}
            name="tema"
          ></ListaSuspensa>
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar Evento</Botao>
      </div>
    </form>
  );
}
