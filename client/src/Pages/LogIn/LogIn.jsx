import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./logIn.css";

const LogIn = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            if (!email || !password) {
                toast.error("Please fill all the fields.");
                return;
            }

            const response = await axios.post("http://localhost:8000/login", {
                email,
                password
            });

            if (response.data === "exist") {
                history("/business", { state: { id: email } });
            } else if (response.data === "notexist") {
                toast.error("User hasn't signed up.");
            }

        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while submitting the form.");
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="log-container">
                <div className="container">
                    <div className="login">
                        <h1>Login</h1>
                        <form onSubmit={submit}>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            <button type="submit">Login</button>
                        </form>
                        <br />
                        <p>OR</p>
                        <br />
                        <Link to="/business">Business Tools</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;
