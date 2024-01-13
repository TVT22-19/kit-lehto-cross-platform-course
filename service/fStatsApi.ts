import {ApiMessage, AuthToken, PieMetric, Project, User} from "./types";

const hostUrl = "https://api.fstats.dev/v2"

export const getUserProjects = async (userId: number): Promise<Project[]> => {
    const response = await fetch(`${hostUrl}/users/${userId}/projects`)

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as Project[]
}

export const login = async (user: User): Promise<AuthToken> => {
    const response = await fetch(`${hostUrl}/auth/login`, {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(user)
    })

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as AuthToken
}

export const getPieMetric = async (projectId: number): Promise<PieMetric> => {
    const response = await fetch(`${hostUrl}/metrics/${projectId}/pie`)

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as PieMetric
}