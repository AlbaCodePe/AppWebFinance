import React, { useState } from 'react';
import { FaWallet, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../Operaciones css/EvaluacionInstrumentos.css';

function EvaluacionInstrumentos() {
  const [capital, setCapital] = useState('');
  const [tasaAnual, setTasaAnual] = useState('');
  const [resultado, setResultado] = useState(null);
  const navigate = useNavigate();

  const calcularTCEA = () => {
    if (capital === '' || tasaAnual === '') {
      alert("Por favor, ingrese todos los valores requeridos.");
      return;
    }

    const tcea = ((1 + tasaAnual / 100) ** 12 - 1) * 100;
    setResultado(tcea.toFixed(2));
  };

  return (
    <div className="evaluacion-instrumentos-container" style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
      {}
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: '#1f1f1f' }}>
        <div className="container d-flex justify-content-between align-items-center">
          {}
          <Link className="navbar-brand text-light d-flex align-items-center" to="/explorar-operaciones">
            <FaWallet size={30} color="#4caf50" style={{ marginRight: '10px' }} />
          </Link>

          {}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/home">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/explorar-operaciones">Explorar Operaciones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/historial">Historial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/facturacion">Facturación</Link>
              </li>
            </ul>
          </div>

          {}
          <Link to="/perfil" className="nav-link text-light d-flex align-items-center">
            <FaUserCircle size={30} color="#4caf50" />
          </Link>
        </div>
      </nav>

      {}
      <div className="container mt-5">
        <div className="card p-4" style={{ backgroundColor: '#1f1f1f', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)' }}>
          <h2 className="text-center mb-4" style={{ color: '#ffffff', fontWeight: 'bold' }}>Evaluación de Instrumentos Financieros</h2>
          <div className="form-group mt-4">
            <label style={{ color: '#b3b3b3' }}>Capital:</label>
            <input
              type="number"
              className="form-control"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              placeholder="Ingrese el capital"
            />
          </div>
          <div className="form-group mt-3">
            <label style={{ color: '#b3b3b3' }}>Tasa Anual (%):</label>
            <input
              type="number"
              className="form-control"
              value={tasaAnual}
              onChange={(e) => setTasaAnual(e.target.value)}
              placeholder="Ingrese la tasa anual"
            />
          </div>
          <button
            className="btn btn-success mt-4"
            style={{ width: '100%', backgroundColor: '#4caf50', border: 'none' }}
            onClick={calcularTCEA}
          >
            Calcular TCEA
          </button>
          {resultado && (
            <div className="resultado mt-4" style={{ color: '#4caf50', fontSize: '1.5em', textAlign: 'center' }}>
              TCEA: {resultado}%
            </div>
          )}
          <button
            className="btn btn-secondary mt-4"
            style={{ width: '100%', border: 'none' }}
            onClick={() => navigate('/explorar-operaciones')}
          >
            Volver a Explorar Operaciones
          </button>
        </div>
      </div>
    </div>
  );
}

export default EvaluacionInstrumentos;