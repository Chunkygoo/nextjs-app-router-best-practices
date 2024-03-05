const Fetcher = async <T,>({
  fetchInitialData,
  getComponent,
}: {
  fetchInitialData: () => Promise<T>;
  getComponent: (data: T) => JSX.Element;
}) => {
  const data = await fetchInitialData();
  return getComponent(data);
};

export default Fetcher;
