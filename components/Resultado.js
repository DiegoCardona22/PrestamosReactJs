import React from 'react';

const Resultado = ({total, cantidad, plazo}) => (
    <div className='u-full-width resultado'>
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: ${cantidad}</p>
        <p>El plazo solicitado son: {plazo} meses</p>
        <p>Su pago mensual es: ${(total/plazo).toFixed(2)}</p>
        <p>El total a pagar es: ${total.toFixed(2)}</p>
    </div>
)

export default Resultado