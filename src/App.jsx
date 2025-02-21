import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from "react"
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header"


function App() {
    return (
        <div className="container">
            <Header/>
            <NavigationBar/>
        </div>

    )
}

export default App
