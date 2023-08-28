import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhbWJhbmdAZ21haWwuY29tIiwiZXhwIjoxNjkzNTAxMzkwLCJpZCI6IjQwMGMyMTVhLWZkNmMtNDAzZi1iYjlhLWIzYjMwNGU1MjUzYyIsIm5hbWUiOiJDYXJvbGluZSBTdGV1YmVyIiwidXNlcm5hbWUiOiJiYW1iYW5nMTIzIn0.wBuWcLjXgX5IVvsql42OqD42JxYcd31fT74DVZyBpvM";

export default axios.create({
  // baseURL:  'https://jico-api.up.railway.app/user/register'
  baseURL: "http://localhost:8050",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
