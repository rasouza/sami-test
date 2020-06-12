import React from "react";
import { Modal, Image, List, Header } from 'semantic-ui-react'

export default props => {
  return (
    <Modal trigger={props.trigger}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='/logo192.png' />
        <Modal.Description>
          <Header>Power Stats</Header>
          <List animated verticalAlign='middle'>
            <List.Item><strong>Stat:</strong>10</List.Item>
          </List>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

