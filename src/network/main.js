import axios from "axios";
const host = "http://localhost:8080";
let getMainUrl = {
  async TouchList() {
    let page = parseInt(Math.random() * 1600);
    console.log(page);
    let httpUrl = `${host}/api/rtimu?page=${page}`;
    let res = await axios.get(httpUrl);
    return res.data;
  },
};
export default getMainUrl;
