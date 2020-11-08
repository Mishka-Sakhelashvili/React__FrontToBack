import React, { useState } from 'react';
import { connect } from "react-redux";

import Aux from '../Auxx/Auxx';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {

    const [ showSideDrawer, setShowSideDrawer ] = useState(false);

    const sideDrawerClosedHandler = () => { setShowSideDrawer(false); };

    const sideDrawerToggleHandler = () => { setShowSideDrawer( !showSideDrawer ); };

    return (
        <Aux>
            <Toolbar 
                isAuth={props.iaAuthenticated} 
                drawerToggleClicked={sideDrawerToggleHandler} 
            />
            <SideDrawer
                isAuth={props.iaAuthenticated} 
                open={showSideDrawer}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        iaAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps)(Layout);