import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = ({ items }) => {
  // Use the useQuery hook to fetch data from the server
  const result = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  });

  console.log(result);

  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
