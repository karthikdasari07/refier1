import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Navbar/Card';
import data from './components/data';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import './App.css';

export default function App() {

 const cards = data.map(item => {
        return (
            <Card 
                title={item.title}
                subt={item.subt}
                jobt={item.jobt}
                jobe={item.jobe}
                desc={item.desc}
                location={item.location}
                type={item.type}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Card1 /> <Card2 />{cards} 
            
        </div>
    )
}


