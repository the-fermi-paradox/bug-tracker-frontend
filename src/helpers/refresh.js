const refresh = async (uri, refreshFunc) => {
  const payload = await fetch(uri);
  const json = await payload.json();
  refreshFunc(json);
};

export default refresh;
