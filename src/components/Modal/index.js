import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { idGenerator } from '../../shared';

import './index.css';

let a = 0;

const style = {
  marginRight: 20,
};


class Popup extends Component{
  render(){
    const { items, add, onValueChange , remove , closePop } = this.props;

      return(
        <div className="popUp">
          <MuiThemeProvider>
          {items.map(item => {
          return(
            <div
              id={item.id}

            >
              <SelectField
                floatingLabelText="Choose text"
                value={item.currentChoosen}
              >
                {item.value.map((el, index) => {
                  return (
                    <MenuItem
                      value={el.name}
                      onClick={() => onValueChange(item.id, el.name, 'text')}
                      primaryText={el.name}
                    />
                  )
                })}
              </SelectField>,

              <SelectField
                floatingLabelText="Choose number"
                value={item.currentNumber}
              >
                {item.number.map(num =>
                  <MenuItem
                    value={num}
                    primaryText={num}
                    onClick={() => onValueChange(item.id, num, 'number')}
                  />
                )}
              </SelectField>
              <button className="btn" onClick={() => remove(item.id)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          )
        })}
            <FloatingActionButton onClick={() => add("Twin", 1, a += 1)} mini={true} style={style}>
              <ContentAdd />
            </FloatingActionButton>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <RaisedButton label="Close" onClick={() => closePop()} primary={true} style={style} />
          </MuiThemeProvider>
        </div>
      );
  }
}

export default Popup;
