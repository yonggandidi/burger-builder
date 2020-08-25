import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';
import { withRouter } from 'react-router-dom'

const logo = (props) => (
    <div onClick={() => props.history.push('/')} className={classes.Logo} style={{ height: props.height }}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default withRouter(logo);