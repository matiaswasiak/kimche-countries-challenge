import { createContext, useMemo, useReducer } from "react";

export const searchCountriesContext = createContext();

const searchCountriesReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "GET_COUNTRY":
      return {
        ...state,
        searchCountry: payload,
      };

    default:
      return state;
  }
};

export const SearchCountriesProvider = ({ children }) => {
  const initialState = {
    searchCountry: "",
  };

  const [state, dispatch] = useReducer(searchCountriesReducer, initialState);

  const searchContext = useMemo(
    () => ({
      setCountry: (payload) => {
        dispatch({ type: "GET_COUNTRY", payload });
      },
    }),
    []
  );

  return (
    <searchCountriesContext.Provider
      value={{
        searchCountry: state.searchCountry,
        setCountry: searchContext.setCountry,
      }}
    >
      {children}
    </searchCountriesContext.Provider>
  );
};
