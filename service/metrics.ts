import {useQuery} from "react-query";
import {LineMetric} from "./types";
import {getLineMetric} from "./fStatsApi";

export const useLineMetric = (projectId: number) => useQuery<LineMetric, Error>({
    queryKey: [`metricLine_${projectId}`],
    queryFn: () => getLineMetric(projectId).then(value => value)
})