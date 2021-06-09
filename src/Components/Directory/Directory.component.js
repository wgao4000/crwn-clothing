import React from 'react';
import Menuitem from '../menu-item/menu-item.component';
import './Directory.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {sectionItems} from '../../redux/directory/directory.selectors';
const Directory = ({sections}) => {
    const tt = (<div className="directory-menu">{sections.map(({id, ...remainingProperties}) => (<Menuitem  key = {id}  {...remainingProperties} />))
    }</div>);
    return tt;
}


const mapStateToProp = createStructuredSelector({
  sections: sectionItems
});
export default connect(mapStateToProp)(Directory);



