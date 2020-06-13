import React, { Fragment } from "react";
import { List, Header } from "semantic-ui-react"

export default (props) => {
  const { attributes } = props

  return (
    <Fragment>
      <Header>Power Stats</Header>
      <List selection verticalAlign="middle">
        <List.Item>
          <List.Header>Intelligence</List.Header>
          {attributes.intelligence}
        </List.Item>
        <List.Item>
          <List.Header>Strength</List.Header>
          {attributes.strength}
        </List.Item>
        <List.Item>
          <List.Header>Speed</List.Header>
          {attributes.speed}
        </List.Item>
        <List.Item>
          <List.Header>Durability</List.Header>
          {attributes.durability}
        </List.Item>
        <List.Item>
          <List.Header>Power</List.Header>
          {attributes.power}
        </List.Item>
        <List.Item>
          <List.Header>Combat</List.Header>
          {attributes.combat}
        </List.Item>
      </List>
    </Fragment>
  )
};