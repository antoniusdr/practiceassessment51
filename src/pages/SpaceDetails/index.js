import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Space from "../../components/Space";
import StoryCarousel from "../../components/StoryCarousel";
import Container from "react-bootstrap/Container";
import { fetchSpaceById } from "../../store/spaceDetails/actions";
import { selectSpaceDetails } from "../../store/spaceDetails/selectors";

export default function SpaceDetails() {
  const { id } = useParams();
  const space = useSelector(selectSpaceDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);

  return (
    <>
      <Space
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      <Container>
        <StoryCarousel space={space} />
      </Container>
    </>
  );
}
