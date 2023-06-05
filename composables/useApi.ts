export const useApi = async (endpoint: string, payload?: any) => {
  const baseUrl = useRuntimeConfig().public.baseUrl;
  const { data, error } = await useFetch(baseUrl + endpoint, payload);
  if (data.value) {
    return { data: data.value, error: null };
  } else {
    return Promise.reject(error.value);
  }
};
