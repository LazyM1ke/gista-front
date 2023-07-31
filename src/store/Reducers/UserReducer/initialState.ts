interface UserState {
  first_name: string;
  surname: string;
  last_name: string;
  phone: string;
  email: string;
}
const initialState: UserState = {
  first_name: "",
  email: "",
  last_name: "",
  phone: "",
  surname: "",
};

export default initialState;
