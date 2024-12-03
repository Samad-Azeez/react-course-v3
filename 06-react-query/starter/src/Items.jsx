import SingleItem from './SingleItem';
import { useFetchTasks } from './reactQueryHooks';

const Items = () => {
  const { isLoading, data, error, isError } = useFetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading....</p>;
  }

  if (isError) {
    const errorMessage = error?.response?.data || 'An error occurred';
    return <p style={{ marginTop: '1rem' }}>{errorMessage}</p>;
  }

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
