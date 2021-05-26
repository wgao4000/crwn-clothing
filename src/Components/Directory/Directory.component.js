import React, {Component} from 'react';
import {sections} from './sections';
import Menuitem from '../menu-item/menu-item.component';
import './Directory.scss';
class Directory extends Component {
  constructor(){
    super();
    this.state = {
      sections: sections
    };
  }
  render(){
    const tt = (<div className="directory-menu">{this.state.sections.map(({id, ...remainingProperties}) => (<Menuitem  key = {id}  {...remainingProperties} />))
    }</div>);
    return tt;
  }
}

export default Directory;



