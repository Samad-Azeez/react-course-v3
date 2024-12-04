import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './Context';

// Unsplash API configuration
// Note: In production, API keys should be stored in environment variables
const url =
  'https://api.unsplash.com/search/photos?client_id=5r2HvWXNssCLvnpxFQeaU_pZwbxMRw1FZ6wQXu5ElFw';

const Gallery = () => {
  // Get current search term from global context
  const { searchValue } = useGlobalContext();

  // React Query hook for handling API requests
  // Will automatically refetch when searchValue changes
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['images', searchValue], // Cache key based on search term
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchValue}`);
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.data;
    },
  });

  // Show loading state while fetching data
  if (isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  // Show error state if request fails
  if (isError) {
    return (
      <section className='image-container'>
        <h4>Error: {error.message || 'Something went wrong...'}</h4>
      </section>
    );
  }

  // Extract image results from response
  // Use empty array as fallback if data is undefined
  const results = data?.results || [];

  // Show message if no images found for search term
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No images found...</h4>
      </section>
    );
  }

  // Render grid of images
  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular;
        const { id, alt_description } = item;

        return <img src={url} key={id} alt={alt_description} className='img' />;
      })}
    </section>
  );
};

export default Gallery;
