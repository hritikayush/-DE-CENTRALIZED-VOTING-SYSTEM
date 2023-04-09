import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from '../routes';

export default () =>{
    return (  //a nav-bar
        <Menu style={{ marginTop:'10px' }}>
            <Link route = "/">
            <a className="item">
                Event voting System !
            </a>
            </Link>
            <Menu.Menu position="right">
            <Link route = "/">
            <a className="item">
                Ongoing Events !
            </a>
            </Link>
            <Link route = "/events/new">
            <a className="item">
                +
            </a>
            </Link>
            </Menu.Menu>
        </Menu>
    );
};