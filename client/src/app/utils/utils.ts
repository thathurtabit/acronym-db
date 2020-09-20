import { IAcronym } from '../models/acronyms.types';

export function sortAcronymData(data: IAcronym[]): IAcronym[] {
  if (!data || data.length < 2) {
    return data;
  }
  const sortedData = [...data];

  return sortedData?.sort((a, b) => {
    const textA = a?.name?.toUpperCase();
    const textB = b?.name?.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
}
