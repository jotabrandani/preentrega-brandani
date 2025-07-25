import {
    Box,
    Heading,
    Alert,
    AlertIcon,
    VStack,
    Flex,
    Text,
    HStack,
    IconButton,
    Spacer,
    Divider,
    Image,
    Button,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const navigate = useNavigate();

    const {
        cart: cartState,
        deleteProductFromCart,
        addProductToCart,
        removeProductFromCart,
        getTotalPrice
    } = useContext(CartContext);


    const total = getTotalPrice();

    const handleDeleteItem = (itemId) => {
        deleteProductFromCart(itemId);
    };

    return (
        <Box p={6} maxW="800px" mx="auto" h={"90vh"}>
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                Detalle del Carrito
            </Heading>

            {cartState.length === 0 ? (
                <Alert status="info" borderRadius="md">
                    <AlertIcon />
                    Tu carrito está vacío.
                </Alert>
            ) : (
                <VStack spacing={4} align="stretch">
                    {cartState.map((item) => (
                        <Flex
                            key={item.id}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                            alignItems="center"
                            boxShadow="sm"
                        >
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                boxSize="100px"
                                objectFit="cover"
                                borderRadius="md"
                                mr={4}
                            />
                            <Box flex="1">
                                <Text fontSize="xl" fontWeight="bold">
                                    {item.title}
                                </Text>
                                <HStack spacing={4} mt={2}>
                                    <Text>Precio: ${Number(item.price).toFixed(2)}</Text>
                                    <HStack>
                                        <IconButton
                                            aria-label="Disminuir cantidad"
                                            icon={<MinusIcon />}
                                            size="sm"
                                            onClick={() => removeProductFromCart(item)}
                                            isDisabled={item.quantity === 1}
                                        />
                                        <Text>{item.quantity}</Text>
                                        <IconButton
                                            aria-label="Aumentar cantidad"
                                            icon={<AddIcon />}
                                            size="sm"
                                            onClick={() => addProductToCart(item)}
                                            isDisabled={item.quantity >= item.stock}
                                        />
                                    </HStack>
                                </HStack>
                            </Box>
                            <Spacer />
                            <HStack>
                                <Text fontWeight="bold">
                                    Subtotal: ${(Number(item.price) * item.quantity).toFixed(2)}
                                </Text>
                                <IconButton
                                    aria-label="Eliminar producto"
                                    icon={<DeleteIcon />}
                                    colorScheme="red"
                                    variant="outline"
                                    onClick={() => handleDeleteItem(item.id)}
                                />
                            </HStack>
                        </Flex>
                    ))}
                    <Divider />
                    <Flex alignItems="center">
                        <Text fontSize="2xl" fontWeight="bold">
                            Total: ${total.toFixed(2)}
                        </Text>
                        <Spacer />
                    </Flex>
                </VStack>
            )}
            <Button
                marginTop={"20px"}
                variant={"outline"}
                colorScheme="primary"
                onClick={() => navigate("/checkout")}
            >
                Finalizar compra
            </Button>
        </Box>
    );
};

export default Cart;