import {login} from "./fStatsApi";
import {AuthToken, User} from "./types";
import {useMutation} from "react-query";

export const useLogin = () => useMutation<AuthToken, Error, User>({
    mutationKey: ["login"],
    mutationFn: (user: User) => login(user).then(data => data)
})