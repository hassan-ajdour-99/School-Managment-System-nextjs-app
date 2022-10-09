import { courses } from "../../../data";

export default (req, res, next) => {
  if (req.method === "GET") {
    res.status(200).json(courses);
  } else {
    res.status(404).json({ message: "Invalid method" });
  }
};
