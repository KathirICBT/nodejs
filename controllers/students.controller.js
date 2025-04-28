export const StudentIndex = (req, res) => {
  res.send("Get All Students");
};

export const StudentCreate = (req, res) => {
  // create the student info
  console.log(req.body);

  return res.json(req.body);
};

export const StudentUpdate = (req, res) => {
  res.send("Update a student");
};

export const StudentDelete = (req, res) => {
  res.send("Delete a Student");
};
