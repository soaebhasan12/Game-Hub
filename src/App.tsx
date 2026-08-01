import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
               "main"`,
        lg: `"nav nav"
             "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      templateRows="60px 1fr"
      h="100vh"
      gap={2}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="coral" color="black" p={4}>
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="gold" color="black" p={4}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;