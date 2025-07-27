import useSWR from 'swr';
import { RecordModel } from 'pocketbase';

import { pb } from '@/lib/pocketbase';

const fetchCollection = async (collectionName: string): Promise<RecordModel[]> => {
  return await pb.collection(collectionName).getFullList();
}

const fetchSingleRecord = async (collectionName: string): Promise<RecordModel> => {
  return await pb.collection(collectionName).getFirstListItem('');
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

export const useGetSingleRecord = (collectionName: string) => {
  const { data, isLoading, error } = useSWR<RecordModel>(
    collectionName,
    fetchSingleRecord
  );

  return {
    data,
    error,
    isLoading
  }
}