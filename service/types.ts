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

export interface PieMetric {
    project: Project;
    metric_pie: MinecraftData;
}

export interface MinecraftData {
    minecraft_version: DataValue;
    online_mode: DataValue;
    mod_version: DataValue;
    os: DataValue;
    location: DataValue;
    fabric_api_version: DataValue;
}

export interface DataValue {
    [value: string]: number;
}