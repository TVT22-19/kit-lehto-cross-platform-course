import {getUserProjects} from "./fStatsApi";
import {useQuery} from "react-query";
import {Project} from "./types";

export const useUserProjects = (userId: number) => useQuery<Project[], Error>({
    queryKey: [`userProjects_${userId}`],
    queryFn: () => getUserProjects(userId).then(data => data)
})