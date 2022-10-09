import { courses } from "../../../data";

export default (req, res, next) => {
  const filterServices = courses.filter((ser) => ser.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(filterServices);
  } else {
    res.status(404).json({ message: "Invalid method" });
  }
};
