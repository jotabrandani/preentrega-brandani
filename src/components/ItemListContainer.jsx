import { useEffect, useState } from "react";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { getAllProducts } from "../services/products.service";

const ItemCard = ({image, title, description, price}) => {
    return(
        <Box width={'300px'} borderWidth={'1px'} borderRadius={'lg'} color={'black'} transition="transform0.3s, box-shadow 0.3s" _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}>
            <Image alt= {title} src={image} width={'100%'} objectFit={'contain'} widdth={'100%'} />
            <Box padding={4}>
                <Heading size={'md'} marginBottom={3}>
                    {title}
                </Heading>
                <Text noOfLines={4} marginBottom={2} color='gray.600'>
                    {description}
                </Text>
                <Text fontSize={'18px'}>
                    ${price}
                </Text>
                
            </Box>
        </Box>
    )
}


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
        
    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data.products)})
    }, []);

    return (
        <Box width={'100%'} overflowX={'hidden'} p={4}>
            <SimpleGrid columns={{ sm: 2, md:3, lg: 6 }} spacing={4} width={'100%'} >
            {products.map(product => {
                return (
                    <ItemCard
                        key={product.id}
                        image={product.thumbnail} 
                        title={product.title} 
                        description={product.description} 
                        price={product.price} 
                    />
                )
            })}
        </SimpleGrid>
    </Box>

    )
    
};

export default ItemListContainer;