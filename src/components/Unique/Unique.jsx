import './Unique.css'

const Unique = ({theme, setTheme}) => {
    
  
    // return <button onClick={theme === 'Light' ? setTheme('Dark') : setTheme('Light')}>{text==='Light' ? 'Dark' : 'Light'}</button>
     return <button onClick={() => theme === 'Light' ? setTheme('Dark') : setTheme('Light')}>{theme}</button>
}

export default Unique;