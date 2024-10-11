import './App.css';
import {useState} from "react";

function App() {

  const[vetor, setVetor] = useState( ["Rian", "Marcos", "Larissa"]);
  const[aluno, setAluno] = useState ("");

  function adicionar()
  {
    setVetor([...vetor, aluno]);
    setAluno("");
  }

  return (
    <div>
      <h1>Aula 04 - Estudo de Vetores</h1>

      <div className='conteudo'>
        <h3>Entrada de dados</h3>
        <form>
          <p>
            Digite o nome do aluno <br />
            <input type="text" value={aluno} onChange= { (e) => setAluno(e.target.value)} />
          </p>

          <p>
            <button type='button' onClick={adicionar}>Adicionar o nome na Lista</button>
          </p>
        </form>


      </div>
      <div className='conteudo'>
      <h3>Lista de Alunos</h3>

      <ul>
        {vetor.map(nome => (<li>{nome}</li>) )}
      </ul>

    </div>
    </div>
  );
}

export default App;