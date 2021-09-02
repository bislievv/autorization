const initialState = {
  name: localStorage.getItem("name"),
  signinUp: false,
  signinIn: false,
  error: null,
  token: localStorage.getItem("token"),
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "application/signup/pending":
      return {
        ...state,
        signinUp: true,
        error: null,
      };
    case "application/signup/fullfilled":
      return {
        ...state,
        signinUp: false,
      };
    case "application/signup/rejected":
      return {
        ...state,
        signinUp: false,
        error: action.error,
      };
    case "application/signin/pending":
      return {
        ...state,
        signinIn: true,
        error: null,
      };
    case "application/signin/fullfilled":
      return {
        ...state,
        signinIn: false,
        token: action.payload.token,
        name: action.payload.login,
      };
    case "application/signin/rejected":
      return {
        ...state,
        signinIn: false,
        error: action.error,
      };
    case "application/logout/fullfilled":
      return {
        ...state,
        token: null,
        name: null,
      };

    default:
      return state;
  }
}

export const createUser = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });

    const response = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: "application/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signup/fullfilled", payload: json });
    }
  };
};

export const auth = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signin/pending" });

    const response = await fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    if (json.error) {
      dispatch({ type: "application/signin/rejected", error: json.error });
    } else {
      dispatch({
        type: "application/signin/fullfilled",
        payload: { json, login },
      });
      localStorage.setItem("token", json.token);
      localStorage.setItem("name", login);
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: "application/logout/fullfilled" });
    localStorage.clear();
  };
};
