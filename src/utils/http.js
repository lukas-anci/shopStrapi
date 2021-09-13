import axios from 'axios';

export const postData = async (dataToSend, urlEnd) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_STRAPI_URL}/${urlEnd}`,
      {
        identifier: dataToSend.email,
        password: dataToSend.password,
      }
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
