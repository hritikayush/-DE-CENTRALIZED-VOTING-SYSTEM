//this would contain the common elements that would be displayed accross all the pages

import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from'next/head';    //Head is a component which can be auto used with another component
// className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
export default props  =>{
    return(
        <div>
            <Head>
            <link async
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                />
            </Head>
            <Header/>
            {props.children}
        </div>
    );
};