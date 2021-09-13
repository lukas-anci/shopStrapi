import axios from 'axios';

export const postData = async (
  dataToSend,
  urlEnd,
  register = false,
  token = null
) => {
  const loginObj = {
    identifier: dataToSend.email,
    password: dataToSend.password,
  };
  const registerObj = {
    username: dataToSend.email,
    email: dataToSend.email,
    password: dataToSend.password,
  };

  const dataToBeSent = register ? registerObj : loginObj;

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`,
      dataToBeSent
      //   {
      //     headers: {
      //       Authorization: 'Bearer token',
      //     },
      //   }
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
