import React, { useEffect, useContext } from 'react';
import SingleImage from '../SingleImage';
import { ImageGridWrapper } from './imagegrid.styled';
import data from '../../data/images.json';

function ImageGrid() {
  return (
    <ImageGridWrapper>
      {data &&
        data.images?.map((image) => (
          <SingleImage key={image.id} imgSrc={image.src} />
        ))}
    </ImageGridWrapper>
  );
}

export default ImageGrid;
