import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/users', JSON.stringify(formData),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.data); // Handle success or redirect to login page
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" placeholder="Username" name="username" value={username} onChange={e => onChange(e)} required />
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                <input type="password" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength="6" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
