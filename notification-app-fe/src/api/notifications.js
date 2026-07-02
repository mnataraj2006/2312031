import axios from "axios";
const BASE_URL="http://4.224.186.213/evaluation-service";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzEyMDMxQG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5NzcwMjMsImlhdCI6MTc4Mjk3NjEyMywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImU2ZDlkZjk3LTIzNTUtNDVjZi1hMzU0LTZlZGEzNjA2OWNkMSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5hdGFyYWogbSIsInN1YiI6ImM3ZmZkMjBhLTQxZjAtNDkzZC04MTMwLTk2YjVlYTc5NDJiNiJ9LCJlbWFpbCI6IjIzMTIwMzFAbmVjLmVkdS5pbiIsIm5hbWUiOiJuYXRhcmFqIG0iLCJyb2xsTm8iOiIyMzEyMDMxIiwiYWNjZXNzQ29kZSI6IkVSelV5eCIsImNsaWVudElEIjoiYzdmZmQyMGEtNDFmMC00OTNkLTgxMzAtOTZiNWVhNzk0MmI2IiwiY2xpZW50U2VjcmV0Ijoic2JkcEF6UFZ6WG5tQmdWSyJ9.oNf9P-5QcnAwCRsWNIAQPpwGxc6uVGlWQnGl6s1WR88";
export async function fetchNotifications(
  page=1,
  limit=10,
  notificationType=""
){
  try{
    const response=await axios.get(
      `${BASE_URL}/notifications`,
      {
        headers:{
          Authorization:`Bearer ${TOKEN}`
        },
        params:{
          page,
          limit,
          notification_type: notificationType
        }
      }
    );
    return response.data;
  }
  catch(error){
    throw error.response?.data || error;
  }
}