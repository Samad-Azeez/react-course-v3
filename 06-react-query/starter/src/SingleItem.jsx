import { useEditTask, useDeleteTask } from './reactQueryHooks';

const SingleItem = ({ item }) => {
  const { mutate: editTask } = useEditTask();
  const { mutate: deleteTask } = useDeleteTask();

  const handleEdit = () => {
    editTask({ taskId: item.id, isDone: !item.isDone });
  };

  const handleDelete = () => {
    deleteTask(item.id);
  };

  return (
    <div className='single-item'>
      <input type='checkbox' checked={item.isDone} onChange={handleEdit} />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button className='btn remove-btn' type='button' onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};
export default SingleItem;
