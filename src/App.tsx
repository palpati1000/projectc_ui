import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import apiClient from "./API/apiClient";

function App() {
    const [count, setCount] = useState(0);
    const [backendMessage, setBackendMessage] = useState("");

    const handleAPIButtonClick = async () => {
        const apiResponse = await apiClient.get("/hello");
        setBackendMessage(apiResponse.data.message);
    };

    return (
        <>
        </>
    );
}

export default App;
