import React from "react";
import { Card } from 'semantic-ui-react'

export default props => {
  const hero = props.hero

  return (
    <Card {...props} image={hero.image.url} description={hero.name} />
  );
}