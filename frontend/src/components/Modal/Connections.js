import React, { Fragment } from "react";
import { List, Header } from "semantic-ui-react"

export default (props) => {
  const { attributes } = props

  return (
    <Fragment>
      <Header>Connections</Header>
      <List selection verticalAlign="middle">
        <List.Item>
          <List.Header>Group Affiliation</List.Header>
          {attributes['group-affiliation']}
        </List.Item>
        <List.Item>
          <List.Header>Relative</List.Header>
          {attributes.relatives}
        </List.Item>
      </List>
    </Fragment>
  )
};