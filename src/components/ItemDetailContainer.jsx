import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import ItemCount from "./ItemCount";

const ItemDetailContainer = ({ product }) => {
    console.log(product);
    return (
        <Container maxW={"7xl"}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
            >
                <Flex>
                    {product.images ? (
                        <Image
                            rounded={"md"}
                            alt={"product image"}
                            src={product.images[0]}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={{ base: "100%", sm: "400px", lg: "500px" }}
                        />
                    ) : null}
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={"header"}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                            marginBottom={10}
                        >
                            {product.title}
                        </Heading>
                        <Text
                            color={useColorModeValue("gray.900", "gray.400")}
                            fontWeight={400}
                            fontSize={"3xl"}
                        >
                            ${product.price}
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={"column"}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue("gray.200", "gray.600")}
                            />
                        }
                    >
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue("gray.500", "gray.400")}
                                fontSize={"2xl"}
                                fontWeight={"300"}
                            >
                                {product.description}
                            </Text>
                        </VStack>
                        {/* <Box>
                            <Text
                                fontSize={{ base: "16px", lg: "18px" }}
                                color={useColorModeValue("yellow.500", "yellow.300")}
                                fontWeight={"500"}
                                textTransform={"uppercase"}
                                mb={"4"}
                            >
                                Product Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Between lugs:
                                    </Text>{" "}
                                    20 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Bracelet:
                                    </Text>{" "}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Case:
                                    </Text>{" "}
                                    Steel
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Case diameter:
                                    </Text>{" "}
                                    42 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Dial color:
                                    </Text>{" "}
                                    Black
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Crystal:
                                    </Text>{" "}
                                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                                    treatment inside
                                </ListItem>
                                <ListItem>
                                    <Text as={"span"} fontWeight={"bold"}>
                                        Water resistance:
                                    </Text>{" "}
                                    5 bar (50 metres / 167 feet){" "}
                                </ListItem>
                            </List>
                        </Box> */}
                    </Stack>

                    <ItemCount product={product} />

                    <Stack direction="row" alignItems="center" justifyContent={"center"}>
                        <MdLocalShipping />
                        <Text>Se envía en 2 o 3 días hábiles</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    );
};

export default ItemDetailContainer;