//create libraries with useState nuxt
export const labraries = useState<string[]>(() => []);
// set libraries
export const setLabraries = (data: string[]): void => {
  labraries.value = data;
};
