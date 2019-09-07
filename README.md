# Rutas API CRM

## Rutas Clientes
Crear nuevos clientes, mostrar clientes, actualizar y eliminar
### Mostrrar todos los clientes : GET
```bash
localhost:5000/clientes # : trae todos los clientes 
```

### Crear nuevo cliente : POST
Cada cliente tiene: nombre, apellido, empresa, email y telefono
```bash
localhost:5000/clientes # crea nuevo cliente
```

### Mostrar un cliente en especifico mediante su id : GET
idCliente = id del cliente que quieres mostrar
```bash
localhost:5000/clientes:idCliente # crea nuevo cliente
```

### Actuallizar un cliente en especifico mediante su id : PUT
```bash
localhost:5000/clientes:idCliente # actualizar cliente
```


### Eliminar un cliente en especifico mediante su id : DELETE
```bash
localhost:5000/clientes:idCliente # eliminar cliente
```

