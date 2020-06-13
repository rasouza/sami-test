import React, { useEffect } from 'react'
import { Container, Header, Grid, Card } from "semantic-ui-react";
import { useSelector, useDispatch } from 'react-redux'
import ModalHero from '../../components/Modal'
import { getAllHeroesThunk } from '../../redux/heroesSlice'


export default props => {
  const heroes = useSelector((state) => state.heroes);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllHeroesThunk());
  }, []);

  return (
    <Container text>
      <Header as="h1" dividing>
        Heroes App
      </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column floated="left" width={2}>
            {/* <Search /> */}
          </Grid.Column>
        </Grid.Row>
        <Card.Group itemsPerRow={5}>
          {heroes.map((hero) => (
            <ModalHero key={hero.id} hero={hero} />
          ))}
        </Card.Group>
      </Grid>
    </Container>
  );
}