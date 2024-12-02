import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = ({ items }) => {
  // Use the useQuery hook to fetch data from the server
  const { isLoading, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  });

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading....</p>;
  }

  // Extract the taskList from the data object
  const taskList = data.data.taskList;
  console.log(taskList);

  return (
    <div className='items'>
      {taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
