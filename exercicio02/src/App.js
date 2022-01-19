//
import React, { Component } from 'react';
import './main.css';

class Input extends Component {
  constructor(props){
    super(props);

    this.state = { value: ""}

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (e) {
    this.setState({
      value: e.target.value
    })
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  
  render() {
    return (
      <div className={this.props.className}>
        <label className='label' 
        htmlFor={this.props.id}>{this.props.title}:</label>

        <input 
          id={this.props.id} 
          name={this.props.nome} 
          value={this.props.value}
          onChange={this.handleInput}
          type="text"/>

      </div>
    )
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = { value: ""}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({
      value: "Aula 02"
    })
  }  

  render() {
    return (
      <div className='container'>
        <form tag="formulario" className='formulario'>
          <fieldset>
            <Input title="Nome" id="nome" value={this.state.value} nome="nome" className="input" />
            <Input title="Endereço" id="endereco" className="input"/>
            
            <div className='button-container'>
              <button type="button" onClick={this.handleChange}>Enviar</button>
            </div>

          </fieldset>
        </form>
      </div>
    );
  }

}

export default App;

