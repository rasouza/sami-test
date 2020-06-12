import React from "react";
import { Card, Image } from 'semantic-ui-react'

export default props => {
  const hero = props.hero

  return (
    <Card>
      <Image src={hero.image.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{hero.name}</Card.Header>
      </Card.Content>
    </Card>
  );
}