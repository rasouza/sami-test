import React, { useEffect } from 'react'
import { Container, Header, Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../../components/Modal'
import Card from '../../components/Card'
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
        <Grid.Column width={6}>
          {heroes.map(hero => 
            <Modal trigger={
              <Card hero={hero} />
            } />
          )}
        </Grid.Column>
      </Grid>
    </Container>
  )
}