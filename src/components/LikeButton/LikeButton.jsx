import './LikeButton.css'
import { useEffect, useState } from 'react';




const LikeButton = () => {
    const [counter, setCounter] = useState(0)

    const colors = ['purple','blue','green','yellow','orange','red']
    const color = colors[Math.floor(Math.random() * 5)]
    
    return <button className={color} onClick={() => setCounter(prev => prev+1)}>{counter} Likes</button>
}

export default LikeButton