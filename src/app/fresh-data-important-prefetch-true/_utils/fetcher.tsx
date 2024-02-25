const Fetcher = async <T,>({
  fetchInitialData,
  getComponent,
}: {
  fetchInitialData: () => Promise<T>;
  getComponent: (data: T) => JSX.Element;
}) => {
  const posts = await fetchInitialData();
  return getComponent(posts);
};

export default Fetcher;
