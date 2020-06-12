import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card, Image, Placeholder } from 'semantic-ui-react'
import { getHeroThunk } from '../../redux/heroesSlice'


export default props => {
  const heroes = useSelector(state => state.heroes)
  const loading = useSelector(state => state.heroesLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroThunk(1))
  }, [])
  return (
    <Card>
      {loading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
        <Image src="/logo192.png" wrapped ui={false} />
      )}
      <Card.Content>
        <Card.Header>
          {loading ? (
            <Placeholder>
              <Placeholder.Paragraph>
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          ) : (
            "name"
          )}
        </Card.Header>
      </Card.Content>
    </Card>
  );
}