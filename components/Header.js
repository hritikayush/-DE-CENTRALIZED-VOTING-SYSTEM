import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (  //a nav-bar

        <Menu style={{ marginTop: '10px' }}>
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="italic flex flex-auto bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600">
                <Link route="/home">
                    <a className="pt-2 text-xl ml-3 mu-3 w-36 text-center font-semibold place-content-center italic pu-5 border-2 rounded-md border-zinc-200 shadow-md text-black Pastel bg-gradient-to-tr from-violet-500 to-orange-300  hover:from-pink-500 hover:to-yellow-500 hover:text-black" >
                        Home
                    </a>
                </Link>
                <Link route="/">
                    <a className="pt-2 text-xl ml-3 mu-3 w-36 text-center font-semibold place-content-center italic pu-5 border-2 rounded-md border-zinc-200 shadow-md text-black Pastel bg-gradient-to-tr from-violet-500 to-orange-300  hover:from-pink-500 hover:to-yellow-500 hover:text-black">

                        Logout
                    </a>
                </Link>
                <Menu.Menu position="right">
                
                    <Link route="/home">
                        <a className="pt-2 text-xl ml-2 mr-3 mu-3 font-semibold place-content-center italic pu-5 border-2 rounded-md border-zinc-200 shadow-md text-black Pastel bg-gradient-to-tr from-violet-500 to-orange-300  hover:from-pink-500 hover:to-yellow-500 hover:text-black">
                            Ongoing Events !
                        </a>
                    </Link>
                    <Link route="/events/new">
                        <a className="text-5xl text-center w-20 mr-3 mu-2 font-semibold place-content-center italic pu-2 border-2 rounded-md border-zinc-200 shadow-md text-black Pastel bg-gradient-to-tr from-violet-500 to-orange-300  hover:from-pink-500 hover:to-yellow-500 hover:text-black">
                            +
                        </a>
                    </Link>
                </Menu.Menu>
            </div>
        </Menu>
    );
};