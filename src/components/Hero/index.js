import React from 'react';
import Image from 'next/image';
import {
  HeroText,
  HeroWrapper,
  HeroTitle,
  HeroSubTitle,
  HeroGrid,
  HeroImage,
} from './hero.styled';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroText>
        <HeroTitle>Kolor Book</HeroTitle>
        <HeroSubTitle>web application</HeroSubTitle>
      </HeroText>
      <HeroGrid>
        <HeroImage className="image01">
          <Image
            layout="fill"
            objectFit="cover"
            alt=""
            src="/static/heroimage01.png"
          />
        </HeroImage>
        <HeroImage className="image02">
          <Image
            layout="fill"
            objectFit="cover"
            alt=""
            src="/static/heroimage02.png"
          />
        </HeroImage>
        <HeroImage className="image03">
          <Image
            layout="fill"
            objectFit="cover"
            alt=""
            src="/static/heroimage03.png"
          />
        </HeroImage>
        <HeroImage className="image04">
          <Image
            layout="fill"
            objectFit="cover"
            alt=""
            src="/static/heroimage04.png"
          />
        </HeroImage>
        <HeroImage className="image05">
          <Image
            layout="fill"
            objectFit="cover"
            alt=""
            src="/static/heroimage05.png"
          />
        </HeroImage>
      </HeroGrid>
    </HeroWrapper>
  );
};

export default Hero;
