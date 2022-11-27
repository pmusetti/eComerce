import { toast } from 'react-toastify';

export const itemAddedNotify = () => toast.success('Producto agregado al carrito!', {
    position: "top-right",
    autoClose: 2000,
    theme: "colored",
});
export  const noStockNotify = () => toast.error('No hay stock disonible!', {
    position: "top-right",
    autoClose: 2000,
    theme: "colored",
});

export const errorNotify = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 2000,
    theme: "colored"
});

export default {
itemAddedNotify,
noStockNotify,
errorNotify,
}
