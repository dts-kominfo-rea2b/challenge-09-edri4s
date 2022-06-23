// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({ data }) => {
    return (
        <div style={{ display: 'flex', padding: 40 }}>
            <img src={data.photo} alt={data.photo}></img>
            <p className='article'>
                {data.name}
                <br />
                {data.phone}
                <br />
                {data.email}
            </p>

        </div >
    )
}

export default Contact;