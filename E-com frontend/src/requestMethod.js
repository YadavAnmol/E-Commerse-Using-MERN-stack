import axios from "axios"

const BASE_URL="http://localhost:5000/user/api"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWE5ZGJhZDgzNWZlYzRhNGE2Njc3MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcyMjI4MCwiZXhwIjoxNjg4OTgxNDgwfQ.dxY9nY1OabRnHfQN0jqjka7fFDFZaK1N7JxdVi25tn4"

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});
