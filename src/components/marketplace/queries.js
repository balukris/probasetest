import axios from 'axios';

const fetchMarketplacedata = async () => {
  const result = await axios.get('http://localhost:4000/marketplace');
  return result;
};

export default fetchMarketplacedata;
