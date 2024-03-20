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
        <div class="container">
            <h2 class="mt-5">Register</h2>
            <form onSubmit={e => onSubmit(e)} class="mt-3">
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Username" name="username" value={username} onChange={e => onChange(e)} required />
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} minLength="6" required />
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>

    );
};

export default Register;
