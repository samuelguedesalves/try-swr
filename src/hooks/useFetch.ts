import useSWR from 'swr';

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const respose = await fetch(url);
    const data = await respose.json();

    return data;
  });

  return { data, error };
}