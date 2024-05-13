import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <VStack spacing={8} p={10}>
    <Heading as="h1" size="2xl">About Me</Heading>
    <Text fontSize="xl">I am a software developer with a passion for building scalable and efficient applications. With a background in computer science, I have developed a strong foundation in coding and problem solving.</Text>
  </VStack>
);

export default About;