interface UserState {
  first_name: string;
  surname: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
}
const initialState: UserState = {
  first_name: "",
  email: "",
  password: "",
  last_name: "",
  phone: "",
  surname: "",
};

export default initialState;
