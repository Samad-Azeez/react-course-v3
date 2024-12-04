import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Unsplash API endpoint with API key
const url =
  'https://api.unsplash.com/search/photos?client_id=5r2HvWXNssCLvnpxFQeaU_pZwbxMRw1FZ6wQXu5ElFw&query=cat';

const Gallery = () => {
  // Fetch images using React Query
  const response = useQuery({
    queryKey: ['images'],
    queryFn: () => axios.get(url),
  });

  // Display loading state
  if (response.isLoading) {
    return (
      <section className='image-container '>
        <h4>Loading...</h4>
      </section>
    );
  }

  // Handle error state
  if (response.isError) {
    console.log(response.error);
    return (
      <section className='image-container '>
        <h4>There was an error...</h4>
      </section>
    );
  }

  // Extract results from response
  const results = response.data?.data?.results || [];

  // Handle empty results
  if (results.length < 1) {
    return (
      <section className='image-container '>
        <h4>No images found...</h4>
      </section>
    );
  }

  // Render image gallery
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
