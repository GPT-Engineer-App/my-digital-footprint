import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Home = () => (
  <VStack spacing={8} p={10}>
    <Heading as="h1" size="2xl">Welcome!</Heading>
    <Text fontSize="xl">Discover the journey of a passionate developer.</Text>
  </VStack>
);

export default Home;