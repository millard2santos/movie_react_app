import { useState } from 'react';
import Dark from '../Dark/Dark.jsx';
import Light from '../Light/Light.jsx';
import Unique from '../Unique/Unique.jsx';
import './ColorTheme.css'

const ColorTheme = () => {

    const [theme, setTheme] = useState('Light')
    
    




    return (
        <div className={'container '+ theme}>
            <h1>GammaTech School</h1>
            <p>Estudiante : Millard</p>
            <p>Aula: 3</p>
            <Unique theme={theme} setTheme={setTheme}/>
        </div>
    )
}

export default ColorTheme;