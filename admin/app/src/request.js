import axios from "axios";

export const sendRequest = async ({
  route,
  body,
  method = "GET",
  token = "",
}) => {

  try {
    const response = await axios.request({
      url: `http://localhost:8000/api/${route}`,
      method,
      data: body,
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
