import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';

// Hook for fetching tasks
export const useFetchTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const response = await customFetch.get('/');
      return response.data;
    },
  });
};

// Hook for creating a new task
export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Task added');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
};

// Hook for editing a task
export const useEditTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Task updated');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
};

// Hook for deleting a task
export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId) => customFetch.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Task deleted');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
};
