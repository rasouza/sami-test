import React from "react";
import { Modal, Image, Grid } from 'semantic-ui-react'
import HeroCard from '../Card'
import PowerStats from './PowerStats'
import Biography from './Biography'
import Appearance from './Appearance'
import Work from './Work'
import Connections from './Connections'

export default props => {
  const { hero } = props
  return (
    <Modal {...props} trigger={<HeroCard hero={hero} />}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={hero.image.url} />
        <Modal.Description>
          <Grid columns={2}>
            <Grid.Column>
              <PowerStats attributes={hero.powerstats} />
            </Grid.Column>
            <Grid.Column>
              <Biography attributes={hero.biography} />
            </Grid.Column>
          </Grid>

          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Appearance attributes={hero.appearance} />
              </Grid.Column>
              <Grid.Column>
                <Connections attributes={hero.connections} />
              </Grid.Column>
              <Grid.Column>
                <Work attributes={hero.work} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

