import axios from "axios";

const getUsuario = async (user_id) => {

    const response = await axios.get('https://verbose-orbit-q74j9xwx6wxqcxp4g-2025.app.github.dev/test/' + user_id, {
    });
    
    console.log(response)
    return response;
};
  
export default getUsuario;