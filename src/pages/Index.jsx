import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Home</Tab>
          <Tab>About Me</Tab>
          <Tab>Projects</Tab>
          <Tab>Contact</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Home />
          </TabPanel>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <Contact />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Index;