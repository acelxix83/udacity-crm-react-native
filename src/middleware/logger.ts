import { Middleware } from "redux";

export const loggerMiddleware: Middleware =
  (store) => (next) => (action: any) => {
    console.group(`Action: ${action.type}`);

    console.log("Previous State:", store.getState());
    console.log("Action:", action);

    const result = next(action);

    console.log("Next State:", store.getState());
    console.groupEnd();

    return result;
  };
