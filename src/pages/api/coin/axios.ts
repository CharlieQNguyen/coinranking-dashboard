import axios from "axios"

export const coinAxios = axios.create({
  baseURL: "https://api.coinranking.com/v2/metadata"
})