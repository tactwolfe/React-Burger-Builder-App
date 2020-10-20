
//navigation items component (hold  all the nav items)

import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavgationItem/NavgationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active={true} > Burger Builder</NavigationItem>
        <NavigationItem link="/" > Checkout</NavigationItem>
    </ul>
);

export default navigationItems;