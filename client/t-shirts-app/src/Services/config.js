const AxiosConfig = {
    baseURL: 'https://t-store.deta.dev/',
    timeout: 10000,
    headers: {'authorization': `Bearer ${localStorage.getItem('token') ?? ''}`}
  };
  
  export default AxiosConfig;