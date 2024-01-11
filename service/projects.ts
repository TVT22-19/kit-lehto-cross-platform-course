import {getUserProjects} from "./fStatsApi";
import {Project} from "../types";
import {useQuery} from "react-query";

export const useUserProjects = (userId: number) => useQuery<Project[], Error>({
    queryKey: [`userProjects_${userId}`],
    queryFn: () => getUserProjects(userId).then(data => data)
})