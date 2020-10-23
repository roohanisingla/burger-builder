import React, { Component } from 'react';
import Aux from '../../hoc/hoc';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        showSidedrawer: false
    }
    sidedrawerClosed = ()=>{
        this.setState({showSidedrawer: false})
    }
    drawerToggleClicked = ()=>{
        this.setState((prevState)=>{
            return {showSidedrawer: !prevState.showSidedrawer}
        })
    }
    render(){
        return (
            <Aux>
            <Toolbar drawerToggleClicked={this.drawerToggleClicked}/>
            <Sidedrawer open={this.state.showSidedrawer} closed={this.sidedrawerClosed}/>
            <main className="Content">{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;