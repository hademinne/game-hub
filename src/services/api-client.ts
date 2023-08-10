import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b5f11e73d264ddb9da9986bacbb56c9",
  },
});
