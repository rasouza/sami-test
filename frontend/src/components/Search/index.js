import React from "react";
import { Input } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash-fp";
import { searchHeroThunk, clearResult } from "../../redux/heroesSlice";

export default props => {
  const loading = useSelector(state => state.heroes.loading)
  const dispatch = useDispatch()
  const handleSearch= (e, { value }) => {
    if (value.length === 0) {
      dispatch(clearResult())
    }
    else if (value.length >= 2) {
      dispatch(searchHeroThunk(value));
    }
  };

  return (
    <Input loading={loading} placeholder="Search..." onChange={debounce(300, handleSearch)}/>
  )
}