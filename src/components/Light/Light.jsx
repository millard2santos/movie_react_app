import './Light.css'

const Light = ({setTheme}) => {
   
    return <button onClick={() => setTheme('Dark')}>Dark</button>
}

export default Light;