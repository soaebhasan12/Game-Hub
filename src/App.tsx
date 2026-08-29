import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

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
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main" bg="gold" color="black" p={4}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
