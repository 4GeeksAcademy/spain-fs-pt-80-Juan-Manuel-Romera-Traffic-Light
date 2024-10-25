import React, { useState } from "react";

const Home = () => {
	
    const [color, setColor] = useState(null);

    return (
        <div className="traffic-light">
            <div
                onClick={() => setColor("rojo")}
                className={`light red ${color === "rojo" ? "iluminado" : ""}`}
            />
            <div
                onClick={() => setColor("amarillo")}
                className={`light yellow ${color === "amarillo" ? "iluminado" : ""}`}
            />
            <div
                onClick={() => setColor("verde")}
                className={`light green ${color === "verde" ? "iluminado" : ""}`}
            />
        </div>
    );
};

export default Home;
