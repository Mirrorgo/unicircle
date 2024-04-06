const requestUrl = (url: string, useMock: boolean = false) => {
  const mockUrl = "https://mock.apifox.com/m1/4275689-3917637-default";
  if (!useMock) {
    // return `/api${url}`;
    return `http://67.219.111.154:8081${url}`;
  } else {
    return mockUrl + url;
  }
};

export { requestUrl };
