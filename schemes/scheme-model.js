const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  // addSteps,
  update,
  // updateSteps,
  remove,
};
function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}
//needs work
function add(schemeData) {
  return db("schemes").insert(schemeData);
}

function update(id, changes) {
  return db("schemes").where({ id }).update(changes);
}

function remove(id) {
  return db("schemes").where({ id }).del();
}
//steps functions
function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .select("steps.id AS id", "step_number", "scheme_name", "instructions")
    .where({ scheme_id: id });
}

// function updateSteps(id) {
//   return db("steps")
//     .where({ id })
//     .update(req.body)
//     .then((step) => {
//       if (step) {
//         res.json({ updated: step });
//       } else {
//         res.status(404).json({ message: "invalid ID" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "error updating steps", err });
//     });
// }

// function addSteps(id) {
//   return db("steps").where({ id }.insert(req.body));
// }
