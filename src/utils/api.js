import axios from "axios";

export const tweetSearch = async (profile) => {
  const url = `/twitter/user/search?username=${profile}`;
  const { data } = await axios.get(url);
  return data;
};
