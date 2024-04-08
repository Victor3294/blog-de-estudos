import { useRef, useState } from "react";
import PostHeader from "../../../components/PostHeader";
import SimpleCard from "../../../components/SimpleCard";

function UncontrolledComponent() {
 const inputRef = useRef();
 function submitUncontrolledClass(e) {
  e.preventDefault();
  window.alert(
   "Você enviou o formulario da turma: " + inputRef?.current?.value
  );
 }
 return (
  <form onSubmit={(e) => submitUncontrolledClass(e)}>
   <input type="text" ref={inputRef} name="uncontrolled-class" />
   <button type="submit">enviar</button>
  </form>
 );
}

function ControlledComponent() {
 const [controledClass, setControledClass] = useState("");
 function submitControlledClass(e) {
  e.preventDefault();
  window.alert("Você enviou o formulario da turma: " + controledClass);
 }
 return (
  <form onSubmit={(e) => submitControlledClass(e)}>
   <input
    type="text"
    value={controledClass}
    onChange={(e) => {
     setControledClass(e.target.value);
     console.log("Alterando o valor do estado para: " + e.target.value);
    }}
    name="controlled-class"
   />
   <button type="submit">Enviar</button>
  </form>
 );
}

function ControlledVsUncontrolledComponents() {
 return (
  <div>
   <PostHeader
    title="Componentes controlados e não controlados"
    description="Controlados dependem da mudança de um estado enquanto os não controlados não dependem"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Componentes controlados</h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
      <span>
       São componentes controlados por recursos fornecidos pelo React
      </span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>Adicione</li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Componentes não controlados</h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
      <span>
       São componentes onde suas informações estão presentes somente no DOM e
       essas informações são resgatadas por meio de referencias
      </span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>...</li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Componente não controlado</h2>
      <UncontrolledComponent />
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Componente controlado</h2>
      <ControlledComponent />
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default ControlledVsUncontrolledComponents;
