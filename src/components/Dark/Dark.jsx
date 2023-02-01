import './Dark.css'

const Dark = ({ setTheme }) => {

    return <button onClick={() => setTheme('Light')}>Light</button>
}

export default Dark;