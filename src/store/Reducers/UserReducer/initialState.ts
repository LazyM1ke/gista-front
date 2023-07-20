
interface UserState {
    name: string
    surname: string
    patronymic: string

    phone: string
    email: string
    password: string
}
const initialState: UserState = {
    name: '',
    email: '',
    password: "",
    patronymic: "",
    phone: "",
    surname: "",
}

export default initialState