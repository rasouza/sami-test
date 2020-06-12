import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'semantic-ui-react'
import { getHero } from '../../redux/heroesApi'


export default props => {
  const hero = useSelector(state => state.heroes)
  const dispatch = useDispatch()

  useEffect(() => {
    getHero(1)
  })
  return (
    <Card/>
  )
}