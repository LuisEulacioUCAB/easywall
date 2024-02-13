import {User} from "../user/user-types";
import {createContext} from "react";

export type DefaultValuesContextType = {
    user?: User;
};

const defaultValues = {
    user: undefined
}

export const Context = createContext<DefaultValuesContextType>(defaultValues)

export const {Provider} = Context;
