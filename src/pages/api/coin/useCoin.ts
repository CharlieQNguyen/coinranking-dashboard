import { useQuery } from "@tanstack/react-query";
import { coinAxios } from "./axios";

const getCoin = async () => (await coinAxios.get("/coins")).data;

export const useCoin = () => useQuery(["coin"], getCoin)