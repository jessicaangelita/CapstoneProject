import axios from "axios";

export default axios.create({
  // baseURL:  'https://jico-api.up.railway.app/user/register'
  baseURL: "http://localhost:8050",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkdHJhMzM0QGZlbWFpbC5jb20iLCJleHAiOjE2OTM0OTg4NzYsImlkIjoiOTQwODAxNzgtMGQ3ZS00MWNjLThjYTgtMTIxMDZkMTYwNjE5IiwibmFtZSI6IkFkaW51Z3JhaGEgRGhhcm1hcHV0cmEiLCJ1c2VybmFtZSI6ImFkdHJhdXNlcjQzIn0.rm1KoEN2RpyRoYGY5PKaFKms6Gr2iN0sCp4VoHi88iI"
  },
});
