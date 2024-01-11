export type RootStackParamList = {
    Login: undefined;
    Projects: undefined;
    Project: {
        id: number
    } | undefined;
}

export interface Project {
    id: number,
    name: string
}

export interface ApiMessage {
    code: number;
    message: string;
}