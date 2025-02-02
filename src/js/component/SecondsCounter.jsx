import React, { useState, useEffect } from "react";

// Aquí la lógica del contador

// Aquí declaro en una variable el counter así como el estado de si el contador está funcionando o no

    const SecondsCounter = () => {
    const [counter, setCounter] = useState(0);
    const [counterStart, setCounterStart] = useState(false);
    const [reversedCounterStart, setReversedCounterStart] = useState(false);

// Aquí declaro que el contador está activo para que empiece nada mas recargar.

    useEffect(() => {
        setCounterStart(true);
    },[])

    useEffect(() => {
        let interval;
        if (counterStart == true && reversedCounterStart == false) {
            interval = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [counterStart]);

    useEffect(() => {
        let reversedInterval;
        if (reversedCounterStart == true && counterStart == false) {
            reversedInterval = setInterval(() => {
                setCounter(prevCounter => prevCounter - 1);
            }, 1000);
        }
        return () => clearInterval(reversedInterval);
    }, [reversedCounterStart, counterStart]);

    const pressStart = () => {
        setCounterStart(true);
        setReversedCounterStart(false)
    }
    const pressPause = () => {
        setCounterStart(false);
        setReversedCounterStart(false)
    }
    const pressReset = () => {
        setCounterStart(false);
        setReversedCounterStart(false)
        setCounter(0);
    };
    const pressReverse = () => {
    setReversedCounterStart(true);
    setCounterStart(false);
    } 

    return (
<div className="container mt-3">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header bg-dark text-white">
                    <h4 className="mb-0 text-center">Seconds Counter</h4>
                </div>
                <div className="card-body">
                    <div className="row text-center">
                        <div className="col-12">
                            <h3 id="seconds" className="display-4">{counter}</h3>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4 d-flex gap-2 justify-content-center">
    <button className="btn btn-success" onClick={pressStart}>Iniciar</button>
    <button className="btn btn-warning" onClick={pressPause}>Pausar</button>
    <button className="btn btn-danger" onClick={pressReset}>Reiniciar</button>
    <button className="btn btn-info" onClick={pressReverse}>Regresar</button>
  </div>
    </div>
</div>
    );
};

export default SecondsCounter;