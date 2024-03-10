export const textIntroduce =
  "You will experience programming language lessons from our courses, interact with our best instructors, and best of all, all knowledge is free, so contact us and take the opportunity at your fingertips";

export const navItem = ["home", "learning", "introduce", "contact", "discussion", "game"];

export const roleUser = (role) => {
  let result = "";

  switch (role) {
    case "R1":
      result = "ADMIN";
      break;
    case "R2":
      result = "STUDENT";
      break;
    default:
      break;
  }
  return result;
};

export const genders = ["male", "female", "other"];
