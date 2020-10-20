import React from 'react';
import Aux from '../../hoc/hoc';
import './Layout.css'
const layout = (props) => (
    <Aux>
    <div>toolbar, sdebar, backdrop</div>
    <main className="Content">{props.children}</main>
    </Aux>
)

export default layout;