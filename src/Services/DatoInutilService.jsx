import axios from "axios";

const BASE_URL_DATO_INUTIL = "https://uselessfacts.jsph.pl"

class DatoInutilService {
    getDato(){
        return axios.get(`${BASE_URL_DATO_INUTIL}/api/v2/facts/random?language=en`)
    }
}

export default new DatoInutilService()