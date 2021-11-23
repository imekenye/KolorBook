import { createApi } from 'unsplash-js';

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export const getPhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: 'color colorful art',
    perPage: 6,
  });
  const unsplashResults = photos?.response?.results;
  return unsplashResults && unsplashResults;
};
