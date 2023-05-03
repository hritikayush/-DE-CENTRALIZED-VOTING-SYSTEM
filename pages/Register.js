/*
<div>
                    <h3>Submissions:</h3>
                    <ul>
                        {this.state.submissions.map((submission, index) => (
                            <li key={index}>{submission.email} - {submission.password}</li>
                        ))}
                    </ul>
                </div>
*/

import React from "react"
import { Component } from "react"
import { render } from "react-dom"
import factory from '../ethereum/factory';
import {Card} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';
import { submissions } from './submissions.js';
import { Router } from '../routes';

class Register extends Component{
    state = {
        submissions: [],
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        this.setState(prevState => ({
            submissions: [...prevState.submissions, data],
        }));
        submissions.set(data.email, data.password); 
        Router.pushRoute(`/`);
    }

    render(){
        return (
            <div className="h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 text-white">
                <script src="https://cdn.tailwindcss.com"></script>
                <div className="h-1/5">
                <h2 className="text-5xl text-center flex justify-center m-auto">Register</h2>
                </div>
                <div className="h-1/5 text-2xl items-center mx-auto text-center">
                <form onSubmit={this.handleSubmit}>
                <input className="m-1 text-black" type="text" name="email" placeholder="Email"></input>
                <input className="m-1 text-black" type="password" name="password" placeholder="Password"></input>
                <input className="m-1 border-2 border-solid rounded-lg px-2 py-1 border-zinc-200 shadow-md text-black Pastel bg-gradient-to-tr from-violet-500 to-orange-300  hover:from-pink-500 hover:to-yellow-500 hover:text-black" type="submit"></input>
                </form>              
                </div>

            </div>    
        )
    };
    
}
export default Register;