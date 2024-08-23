export enum estadoPedidos{
    Creado = 'Creado', //cuando se crea el pedido
    Aceptado = 'Aceptado', //cuando se verifica que los items están disponibles
    Pagado = 'Pagado', //cuando se pagó el pedido
    Enviado = 'Enviado', //cuando se despachó el pedido pagado
    Entregado = 'Entregado', //cuando se entrega el pedido despachado
}