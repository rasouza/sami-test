import React, { Fragment } from "react";
import { List, Header } from "semantic-ui-react"

export default (props) => {
  const { attributes } = props

  return (
    <Fragment>
      <Header>Work</Header>
      <List selection verticalAlign="middle">
        <List.Item>
          <List.Header>Occupation</List.Header>
          {attributes.occupation}
        </List.Item>
        <List.Item>
          <List.Header>Base</List.Header>
          {attributes.base}
        </List.Item>
      </List>
    </Fragment>
  )
};