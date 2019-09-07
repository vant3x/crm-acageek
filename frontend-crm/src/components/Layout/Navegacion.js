import React from 'react';

const Navegacion = () => {
    return (
        <aside className="sidebar col-3">   
            <h2>Administración</h2>
            <nav className="navegacion">
                <a href="index.html" className="clientes"><i class="fas fa-users"></i> Clientes</a>
                <a href="productos.html" className="productos"><i class="fas fa-boxes"></i> Productos</a>
                <a href="pedidos.html" className="pedidos"><i class="fas fa-book"></i> Pedidos</a>
            </nav>
        </aside>
    )
}

export default Navegacion;