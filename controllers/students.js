import { v4 as uuidv4 } from "uuid";

let students = [
  {
    id: "1",
    name: "islam",
    age: 26,
    location: "alexandria",
  },
  {
    id: "2",
    name: "depp",
    age: 100,
    location: "not found place",
  },
];

export const getStudent = (req, res) => {
  const id = req.params.id;
  const student = students.find((student) => student.id === id);
  if (student) {
    res.json(student);
  }
  res.send("STUDENT NOT FOUND!");
};

export const getStudents = (req, res) => {
  res.json(students);
};

export const deletestudent = (req, res) => {
  const id = req.params.id;
  const student = students.filter((student) => student.id !== id);
  res.json(student);
  console.log(student);
  console.log(`student with id ${id} has been deleted`);
};

export const addstudent = (req, res) => {
  const student = req.body;
  const studendtwithId = { ...student, id: uuidv4() };
  students.push(studendtwithId);
  res.send(`the student with ${req.body.name} has been added`);
};

export const updatestudent = (req, res) => {
  const id = req.params.id;
  const { name, location } = req.body;
  let student = students.find((student) => student.id === id);
  if (name) {
    student.name = name;
  }
  if (location) {
    student.location = location;
  }
  res.send("student with id" + id + "has been updated");
};
