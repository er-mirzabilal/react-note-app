import { generateId } from "./common";

export const NOTE__MIN_LENGTH = 10;
export const INITIAL_NOTE = {
    id: generateId(),
    title: 'New Note',
    note: ""
}