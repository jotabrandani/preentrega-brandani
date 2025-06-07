import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ product }) => {
    const { addProductToCart, removeProductFromCart } = useContext(CartContext);

    return (
        <Box>
            <Button onClick={() => { addProductToCart(product) }}>Agregar Producto</Button>
            <Button ml={3} onClick={() => removeProductFromCart(product)}>
                Quitar Producto
            </Button>
        </Box>
    );
};

export default ItemCount;