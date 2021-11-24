import React from 'react';
import SingleImage from '../SingleImage';
import { ImageGridWrapper } from './imagegrid.styled';
import dataLocal from '../../data/images.json';

function ImageGrid() {
  const renderImages = () => {
    return dataLocal.images?.map((image) => (
      <SingleImage key={image.id} imgSrc={image.src} />
    ));
  };
  return <ImageGridWrapper>{renderImages()}</ImageGridWrapper>;
}

export default ImageGrid;
