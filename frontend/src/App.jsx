import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/form/Form";
import Users from "./components/users/Users";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="wrapper">
                <Form />
                <Users />
            </div>
        </>
    );
}

export default App;
