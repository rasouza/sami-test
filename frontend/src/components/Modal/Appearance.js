import React, { Fragment } from "react";
import { List, Header } from "semantic-ui-react"

export default (props) => {
  const { attributes } = props

  return (
    <Fragment>
      <Header>Appearance</Header>
      <List selection verticalAlign="middle">
        <List.Item>
          <List.Header>Gender</List.Header>
          {attributes.gender}
        </List.Item>
        <List.Item>
          <List.Header>Race</List.Header>
          {attributes.race}
        </List.Item>
        <List.Item>
          <List.Header>Height</List.Header>
          {attributes.height.join(', ')}
        </List.Item>
        <List.Item>
          <List.Header>Weight</List.Header>
          {attributes.weight.join(', ')}
        </List.Item>
        <List.Item>
          <List.Header>Eye Color</List.Header>
          {attributes['eye-color']}
        </List.Item>
        <List.Item>
          <List.Header>Hair Color</List.Header>
          {attributes['hair-color']}
        </List.Item>
      </List>
    </Fragment>
  );
};