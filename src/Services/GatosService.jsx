import axios from "axios";

const BASE_URL_DATOS_GATOS = "https://meowfacts.herokuapp.com"

class GatosService {
    getDatosGatos(cantidad){
        return axios.get(`${BASE_URL_DATOS_GATOS}/?count=${cantidad}&&lang=esp-es`)
    }
}

export default new GatosService()