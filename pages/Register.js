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
        Router.pushRoute(`/Login`);
    }

    render(){
        return (
            <Layout>
            <div className="h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 text-white">
                <div className="h-1/5">
                <h2 className="text-5xl text-center flex justify-center m-auto">Register</h2>
                </div>
                <div className="h-1/5 text-2xl items-center mx-auto text-center">
                <form onSubmit={this.handleSubmit}>
                <input className="m-1 text-black" type="text" name="email" placeholder="Email"></input>
                <input className="m-1 text-black" type="password" name="password" placeholder="Password"></input>
                <input className="m-1" type="submit"></input>
                </form>              
                </div>
                
            </div>
            </Layout>    
        )
    };
    
}
export default Register;