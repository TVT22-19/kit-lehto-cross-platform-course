export interface Project {
    id: number,
    name: string
}

export interface ApiMessage {
    code: number;
    message: string;
}

export interface User {
    id?: number;
    username: string;
    password: string;
}

export interface AuthToken {
    token: string;
}

export interface LineMetric {
    project: Project;
    metric_line: DataValue;
}

export interface DataValue {
    [value: string]: number;
}