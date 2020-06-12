import React from "react";
import { Card, Image } from 'semantic-ui-react'

export default props => {
  const hero = props.hero

  return (
    <Card image={hero.image.url} description={hero.name} />
  );
}