import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Projects = () => (
  <VStack spacing={8} p={10}>
    <Heading as="h1" size="2xl">Projects</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Box>
        <Heading size="md">Project 1</Heading>
        <Text>Details about Project 1...</Text>
      </Box>
      <Box>
        <Heading size="md">Project 2</Heading>
        <Text>Details about Project 2...</Text>
      </Box>
    </SimpleGrid>
  </VStack>
);

export default Projects;