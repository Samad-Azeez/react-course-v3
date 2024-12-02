import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = () => {
  // Use the useQuery hook to fetch data with async/await
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      // Use await to fetch data
      const response = await customFetch.get('/');
      return response.data; // Ensure this matches the API response structure
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading....</p>;
  }

  if (isError) {
    // Safely access the error message
    const errorMessage = error?.response?.data || 'An error occurred';
    return <p style={{ marginTop: '1rem' }}>{errorMessage}</p>;
  }

  // Safely access taskList from the response
  const taskList = data?.taskList || [];

  return (
    <div className='items'>
      {taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
