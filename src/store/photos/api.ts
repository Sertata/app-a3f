import { IPhotos } from "../../interfaces/photos/IPhotos";

export const getPhotosApi = async (albumId: number): Promise<IPhotos[]> => {
  const photos = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
  )
    .then((response) => response.json())
    .then((data) => data);

  return photos;
};
