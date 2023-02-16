import { useQuery } from '@tanstack/react-query';
import { contentApi, ContentDto, ContentType } from 'api';

export const useContentQuery = <T>(name: ContentType) => {
  const queryResult = useQuery({
    queryKey: ['getContentNam', name],
    queryFn: () => contentApi.getContentByName({ name }),
  });
  const jsonStructure = queryResult.data?.data?.content?.structure;
  const clone: Omit<ContentDto, 'structure'> & { structure: T } =
    structuredClone(queryResult.data?.data?.content);

  if (jsonStructure) {
    clone.structure = JSON.parse(jsonStructure) as T;
  }

  return {
    ...queryResult,
    data: clone,
  };
};
