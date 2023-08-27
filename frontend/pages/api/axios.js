import axios from "axios";

export default axios.create({
  // baseURL:  'https://jico-api.up.railway.app/user/register'
  baseURL: "http://localhost:8050",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphamFuZ0BlbWFpbC5jb20iLCJleHAiOjE2OTM0MTY0NDMsImlkIjoiMWJhZDY2YWEtM2MzZS00ODZkLWIwY2MtNzg2MjQwODg5OTVjIiwibmFtZSI6IkFkaW51Z3JhaGEgRGhhcm1hcHV0cmEiLCJ1c2VybmFtZSI6ImphamFuZ2phbmcifQ.aYSB0Gu5tHS-Mue0l8g7zePUqDrkvRs8P7cWqvQvkzE"
  },
});
