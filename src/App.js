import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
