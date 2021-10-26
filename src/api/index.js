import Api from "./client";

export function fetchData(query) {
  return async (dispatch) => {
    try {
      dispatch({ type: "DATA_FETCH_REQUESTED" });
      const res = await Api.get(query);
      if (res.ok) {
        dispatch({ type: "DATA_FETCH_SUCCEEDED", data: res.data });
      }
    } catch (error) {
      dispatch({ type: "DATA_FETCH_FAILED" });
      console.error(error);
    }
  };
}
