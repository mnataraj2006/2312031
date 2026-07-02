import axios from "axios";
const Logapi="http://4.224.186.213/evaluation-service/logs";
export async function log(
  stack,
  level,
  packageName,
  message,
  token
) {
  try{
    const response=await axios.post(
      Logapi,
      {
        stack,
        level,
        package:packageName,
        message,
      },
      {
        headers:{
          Authorization:`Bearer ${token}`,
          "Content-Type":"application/json",
        },
      }
    );
    return response.data;
  }catch (error){
  }
}