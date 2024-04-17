// Complete the Index page component for an ecommerce store specializing in art products
import { Box, Flex, Grid, Heading, Image, Text, Button } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Handcrafted Necklace",
    price: "$35.00",
    image: "https://images.unsplash.com/photo-1638256049271-5dc96baf7ffe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMG5lY2tsYWNlfGVufDB8fHx8MTcxMzM1MTc4M3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Elegant Bangles",
    price: "$20.00",
    image: "https://images.unsplash.com/photo-1547697875-a99fe8f08327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmFuZ2xlc3xlbnwwfHx8fDE3MTMzNTE3ODN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Knitted Scarf",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1581282241923-50649ab8bb91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwc2NhcmZ8ZW58MHx8fHwxNzEzMzUxNzgzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Crocheted Hat",
    price: "$30.00",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcm9jaGV0ZWQlMjBoYXR8ZW58MHx8fHwxNzEzMzUxNzg0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Artistic Creations Shop</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={5}>
              <Text fontWeight="bold" fontSize="xl">
                {product.name}
              </Text>
              <Text fontSize="lg" color="gray.600">
                {product.price}
              </Text>
              <Flex align="center" justify="space-between" mt={3}>
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal" size="sm">
                  Add to Cart
                </Button>
                <Button colorScheme="pink" size="sm">
                  <FaHeart />
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
