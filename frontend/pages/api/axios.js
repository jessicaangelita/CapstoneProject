import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkdHJhMzM0QGZlbWFpbC5jb20iLCJleHAiOjE2OTM1MDY1NTUsImlkIjoiNmM2NTZiNWYtZWViNy00YzdkLWE2YTAtMWJjMGE0NmYwOGU1IiwibmFtZSI6IkFkaW51Z3JhaGEgRGhhcm1hcHV0cmEiLCJ1c2VybmFtZSI6ImFkdHJhdXNlcjQzIn0.jXLbHBtusjo3X_3MyRqfkzXD-8Wsz3riB0IrmjRJZwE";

export default axios.create({
  // baseURL:  'https://jico-api.up.railway.app/user/register'
  baseURL: "http://localhost:8050",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
