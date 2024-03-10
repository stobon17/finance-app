import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/login', formData);
            console.log(res.data); // Handle success or redirect to dashboard
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={e => onSubmit(e)}>
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength="6" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
