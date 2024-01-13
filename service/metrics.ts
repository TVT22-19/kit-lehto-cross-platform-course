import {useQuery} from "react-query";
import {PieMetric} from "./types";
import {getPieMetric} from "./fStatsApi";

export const usePieMetric = (projectId: number) => useQuery<PieMetric, Error>({
    queryKey: [`metricPie_${projectId}`],
    queryFn: () => getPieMetric(projectId)
})