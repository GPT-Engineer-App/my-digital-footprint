import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";

const Contact = () => (
  <VStack spacing={8} p={10}>
    <Heading as="h1" size="2xl">Contact</Heading>
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input placeholder="Your Name" />
      <FormLabel>Email</FormLabel>
      <Input placeholder="Your Email" />
      <FormLabel>Message</FormLabel>
      <Textarea placeholder="Your Message" />
      <Button mt={4} colorScheme="blue">Send Message</Button>
    </FormControl>
  </VStack>
);

export default Contact;