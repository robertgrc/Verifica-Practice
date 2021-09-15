import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container-footer">
                <div className="row">
                    <h1>CONTACTANOS</h1>
                    {/* Column1*/}
                    <div className="col">
                        <h4>DIRECCIÓN</h4>
                        <ul>
                            <li className="caja"> AV. BLANCO GALINDO ESQ PERU </li>
                            <li>SUPERMALL 3er Piso Of. Nro. 12.</li>
                            <li>Cochabamba, Bolivia</li>
                        </ul>
                    </div>
                    {/* Column2*/}
                    <div className="col">
                        <h4>TELÉFONO</h4>
                        <ul>
                            <li>67507188 - 72214511</li>
                        </ul>
                    </div>
                    {/* Column3*/}
                    <div className="col">
                        <h4>VERIFICA S.R.L.</h4>
                        <ul>
                            <li>Profesionales Expertos en 
                                Servicios de Verificación.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
