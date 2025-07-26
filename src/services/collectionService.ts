import useSWR from 'swr';
import { RecordModel } from 'pocketbase';

import { pb } from '@/lib/pocketbase';

const fetchCollection = async (collectionName: string): Promise<RecordModel[]> => {
  return await pb.collection(collectionName).getFullList();
}

export const useGetCollection = (collectionName: string) => {
  const { data, isLoading, error } = useSWR<RecordModel[]>(
    collectionName,
    fetchCollection
  );

  return {
    data,
    error,
    isLoading
  }
}