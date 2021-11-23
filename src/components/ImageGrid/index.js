import React, { useEffect, useContext } from 'react';
import SingleImage from '../SingleImage';
import { ImageGridWrapper } from './imagegrid.styled';
import dataLocal from '../../data/images.json';
import { useQuery } from 'react-query';
import { getPhotos } from '../../services/getPhotos';

function ImageGrid() {
  const renderImages = () => {
    // if (data) {
    //   return data.map((image) => (
    //     <SingleImage key={image.id} imgSrc={image.urls['small']} />
    //   ));
    // } else if (error) {
    //   return dataLocal.images?.map((image) => (
    //     <SingleImage key={image.id} imgSrc={image.urls['small']} />
    //   ));
    // }

    return dataLocal.images?.map((image) => (
      <SingleImage key={image.id} imgSrc={image.src} />
    ));
  };
  return <ImageGridWrapper>{renderImages()}</ImageGridWrapper>;
}

export default ImageGrid;
