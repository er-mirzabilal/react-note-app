import { NOTE__MIN_LENGTH, NOTE__MAX_LENGTH } from "./constants";
import { NoteErrorType, NoteType } from "./types";

export const noteValidation = (data: NoteType) => {
  return new Promise((res, rej) => {
    const error: NoteErrorType = {};
    if (!data.title) error.title = "Note title must not be empty";
    if (data.note.length < NOTE__MIN_LENGTH)
      error.note = "Note lenght should b greater than" + " " + NOTE__MIN_LENGTH;
    else if (data.note.length > NOTE__MAX_LENGTH)
      error.note = "Note lenght should b less than" + " " + NOTE__MAX_LENGTH;
    if (Object.keys(error).length) rej(error);
    res(true);
  });
};
