import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'semantic-ui-react'
import { getHero } from '../../redux/heroesSlice'


export default props => {
  const hero = useSelector(state => state.heroes)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(hero)
  })
  return (
    <Card/>
  )
}