import {createContext} from "react";
import {User} from "../types/generated";


export type DefaultValuesContextType = {
    user?: User;
};


const defaultValues = {
    user: undefined
}

export const Context = createContext<DefaultValuesContextType>(defaultValues);

export const { Provider } = Context;


