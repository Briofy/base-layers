export const useApi = async (endpoint: string, payload?: any) => {
  const baseUrl = useRuntimeConfig().public.baseUrl;
  return await useFetch(baseUrl + endpoint, payload);
};
