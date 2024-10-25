import axios from "axios";

// const api = axios.create({
//   baseURL: "",
// });
export const googleAuth = async (code) => {
  try {
    console.log("code Here", code);

    let abc = await axios.post(
      `http://localhost:4000/api/v1/user/login/google?credentials=${code}`
    );
    console.log("abc", abc);
  } catch (error) {
    console.log(error);
  }
};
