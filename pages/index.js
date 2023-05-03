import {Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';
import {Register} from './Register';
import { submissions } from './submissions.js';
import { Router } from '../routes';
import React,{Component} from "react";

class Login extends Component{
    state={
            error:'',
        };
    handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(submissions);
        console.log(email);
        if (submissions.has(email) && email.endsWith("@kiit.ac.in") && submissions.get(email) === password) {
            Router.pushRoute(`/home`);
        } else {
            console.log("Invalid UserName Password");
            this.setState({error:"Invalid login !!"});
        }
    }
    
    render(){
        return (
            
            <div className="h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 text-white">
                <script src="https://cdn.tailwindcss.com"></script>
                <div className="h-1/5">
                <h2 className="text-5xl text-center flex justify-center m-auto"> Log In</h2>
                </div>
                <div className="h-1/5 text-2xl items-center mx-auto text-center">
                <form onSubmit={this.handleSubmit}>
                <input className="m-1 text-black" type="text" name="email" placeholder="Email"></input>
                <input className="m-1 text-black" type="password" name="password" placeholder="Password"></input>
                <input className="m-1 border-2 border-solid rounded-lg px-2 py-1 border-zinc-200 shadow-md text-black Pastel bg-gradient-to-tr from-violet-500 to-orange-300  hover:from-pink-500 hover:to-yellow-500 hover:text-black" type="submit"></input>
                </form>
                <div className="text-3xl p-5 h-8 italic">
                <p className='text-2xl m-2'>
                        Click Here to Create a new Account
                    </p>
                <Link route="/Register">
                    
                    <a className="mt-2 text-center font-semibold place-content-center italic border-2 rounded-md border-zinc-200 shadow-md text-black Pastel bg-gradient-to-tr from-violet-500 to-orange-300  hover:from-pink-500 hover:to-yellow-500 hover:text-black">
                        Register
                    </a>
                </Link>
                </div>
                <div className='flex justify-center mb-9'>
                <p className='absolute bottom-1/2 '>{this.state.error}</p>
                </div>
                    
                </div>
                
            </div>
        )
    };
    
}
export default Login;