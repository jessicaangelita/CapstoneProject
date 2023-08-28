import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkdHJhMzM0QGZlbWFpbC5jb20iLCJleHAiOjE2OTM1MDk3MzMsImlkIjoiNmM2NTZiNWYtZWViNy00YzdkLWE2YTAtMWJjMGE0NmYwOGU1IiwibmFtZSI6IkFkaW51Z3JhaGEgRGhhcm1hcHV0cmEiLCJ1c2VybmFtZSI6ImFkdHJhdXNlcjQzIn0.vey1mwTWg6oVqWAdrI6Hl-1iYq5wxPF6R_Y-kUx5sxM";

export default axios.create({
  // baseURL:  'https://jico-api.up.railway.app/user/register'
  baseURL: "http://localhost:8050",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
