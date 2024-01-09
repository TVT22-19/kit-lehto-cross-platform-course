import {Dispatch} from "react";
import {Student} from "../types";

export interface RowProps {
    student: Student,
    selectedId: number,
    select: Dispatch<number>
}