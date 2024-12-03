import { useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';

const SingleItem = ({ item }) => {
  // Initialize the query client
  const queryClient = useQueryClient();

  // Define the mutation for editing a task
  const { mutate: editTask } = useMutation({
    mutationFn: (taskId) => {
      // Send a PATCH request to update the task's isDone status
      return customFetch.patch(`/${taskId}`, { isDone: !item.isDone });
    },
    onSuccess: () => {
      // Invalidate the 'tasks' query to refetch the updated tasks
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      // Show a success toast message
      toast.success('Task updated');
    },
    onError: (error) => {
      // Display an error toast message
      toast.error(error.response.data.msg);
    },
  });

  // Define the mutation for deleting a task
  const { mutate: deleteTask } = useMutation({
    mutationFn: (taskId) => {
      // Send a DELETE request to update the task's isDone status
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      // Invalidate the 'tasks' query to refetch the updated tasks
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      // Show a success toast message
      toast.success('Task deleted');
    },
    onError: (error) => {
      // Display an error toast message
      toast.error(error.response.data.msg);
    },
  });

  // Handle the edit action by calling the editTask mutation
  const handleEdit = () => {
    editTask(item.id);
  };

  // Handle the delete action by calling the deleteTask mutation
  const handleDelete = () => {
    deleteTask(item.id);
  };

  return (
    <div className='single-item'>
      {/* Checkbox to toggle the task's isDone status */}
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
