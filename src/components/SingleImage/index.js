import React from 'react';
import Image from 'next/image';
import { SingleImageWrapper } from './singleimage.styled';
import { useColor } from '../../hooks/useColor';
import { useRouter } from 'next/router';

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

function SingleImage({ imgSrc = '/static/image01.jpeg' }) {
  const [colors, getColors] = useColor();

  const router = useRouter();

  const handleImageClick = (src) => {
    getColors(src);
    router.push('/colorbook');
  };

  console.log(colors);
  return (
    <SingleImageWrapper onClick={() => handleImageClick(imgSrc)}>
      <Image
        alt=""
        src={imgSrc}
        placeholder="blur"
        blurDataURL={rgbDataURL(237, 181, 6)}
        layout="fill"
        objectFit="cover"
      />
    </SingleImageWrapper>
  );
}

export default SingleImage;
