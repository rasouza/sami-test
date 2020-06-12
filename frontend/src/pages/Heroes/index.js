import React from 'react'
import { Container, Header, Grid } from "semantic-ui-react";
import Modal from '../../components/Modal'
import Card from '../../components/Card'

export default props => (
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
        <Modal trigger={<Card id={1} />} />
      </Grid.Column>
    </Grid>
  </Container>
)