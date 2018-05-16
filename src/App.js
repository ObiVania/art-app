import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './styles/App.css';
import {values, numbers} from './__mock__/';
import Popup from './components/Modal';

const style = {
  margin: 12,
};

class App extends Component {

  state = {
    items: [],
    modalIsOpen: false,
  };

  onValueChange = (id, value, type) => {

    this.state.items.map(it => {
      let boolCheck = id === it.id;

      if (type === 'text') {
        if (boolCheck) {
          it.currentChoosen = value;
          this.setState(state => ({...state, items: state.items}));
        }

        this.setState(state => state);
      } else {
        if(boolCheck) {
          it.currentNumber = value;
          this.setState(state => ({...state, items: state.items}));
        }

        this.setState(state => state)
      }
    })
  }

  add = (name, number, id) => {
    this.setState((state) => ({
      items: [
        ...state.items,
        {
          value: values,
          number: numbers,
          currentChoosen: name,
          currentNumber: number,
          id: id,
        }
      ]
    }))
  }

  closePop = () =>{
   this.setState({
     items: [],
     modalIsOpen: false,
    });
  }

  remove = (id) => {
      // console.log(id , "work")
      const updatedItems = this.state.items.filter(er =>{
        return er.id !== id;
      })

      this.setState({
        ...this.state,
        items: updatedItems,
      })
  }

  open = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  render() {
    return(
      <div>
        <MuiThemeProvider>
          <RaisedButton label={this.state.modalIsOpen ? "Save" : "Open"} primary={true} onClick={() => this.open()} style={style} />
        </MuiThemeProvider>
        {this.state.modalIsOpen ? <Popup items={this.state.items} add={this.add} onValueChange={this.onValueChange} remove={this.remove} closePop={this.closePop}/> : ""}
      </div>
    );
  }
}

export default App;
