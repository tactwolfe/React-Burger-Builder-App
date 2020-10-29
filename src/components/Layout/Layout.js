import React,{Component} from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showsideDrawer : false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showsideDrawer:false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) =>{
            return { showsideDrawer : !prevState.showsideDrawer};
        })
    }

    render () {
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showsideDrawer} closed={this.SideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
        </Aux>
        );
    }
}

export default Layout;

