import React, { Fragment } from "react";
import { List, Header } from "semantic-ui-react"

export default (props) => {
  const { attributes } = props

  return (
    <Fragment>
      <Header>Biography</Header>
      <List selection verticalAlign="middle">
        <List.Item>
          <List.Header>Full Name</List.Header>
          {attributes["full-name"]}
        </List.Item>
        <List.Item>
          <List.Header>Alter Egos</List.Header>
          {attributes["alter-egos"]}
        </List.Item>
        <List.Item>
          <List.Header>Aliases</List.Header>
          {attributes.aliases.join(", ")}
        </List.Item>
        <List.Item>
          <List.Header>Place of Birth</List.Header>
          {attributes["place-of-birth"]}
        </List.Item>
        <List.Item>
          <List.Header>First Appearance</List.Header>
          {attributes["first-appearance"]}
        </List.Item>
        <List.Item>
          <List.Header>First Appearance</List.Header>
          {attributes.publisher}
        </List.Item>
        <List.Item>
          <List.Header>Alignment</List.Header>
          {attributes.alignment}
        </List.Item>
      </List>
    </Fragment>
  );
};