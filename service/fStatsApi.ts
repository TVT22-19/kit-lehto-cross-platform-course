import {ApiMessage, Project} from "../types";

const hostUrl = "https://api.fstats.dev/v2"

export const getUserProjects = async (userId: number): Promise<Project[]> => {
    const response = await fetch(`${hostUrl}/users/${userId}/projects`)

    if (response.status !== 200) throw new Error((await response.json() as ApiMessage).message)

    return await response.json() as Project[]
}