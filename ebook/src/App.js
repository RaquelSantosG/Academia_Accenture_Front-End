import './main.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [nomeLivro, setNomeLivro] = useState("")
  const [nomeAutor, setNomeAutor] = useState("")
  const [ano, setAno] = useState(0)
  const [livros, setLivros] = useState([]);
  
  const handleSaveBook = (e) => {
       e.preventDefault()
      const data = {
        id: uuidv4(),
        nomeLivro,
        nomeAutor,
        ano
      }
      setLivros(state => [...state, data])
  }

  return (

    <div className="register-container">
      <div className="content">
        <section>
        <h1>Cadastro de Livros</h1>
            <h3>Cadastro!</h3>
            <div className='scrollable-tbody'>
            <table>
            <thead>
              <tr>
                <h4>Nome do Livro </h4>
                <input 
                placeholder="Nome do Livro"
                value={nomeLivro}
                onChange={ e => setNomeLivro(e.target.value)}
                />
                <h4>Nome do Autor </h4>
                <input 
                placeholder="Nome do Autor"
                value={nomeAutor}
                onChange={ e => setNomeAutor(e.target.value)}
                />
                <h4>Ano de Publicação </h4>
                <input 
                placeholder="Ano de Publicação"
                value={ano}
                onChange={ e => setAno(e.target.value)}
                />
              </tr>
            </thead>
            <tbody>
            {livros.map((elemento) => (
              <tr>
                <td>{elemento.nomeLivro}</td>
                <td>{elemento.nomeAutor}</td>
                <td>{elemento.ano}</td>
              </tr>
            ))}
            </tbody>
            </table>
            </div>
          </section>
        <section>
          <form onSubmit={handleSaveBook}>


      <button className="button" type="submit">Cadastrar</button>
      </form>
        </section>
      </div>
    </div>
  );
}

export default App;