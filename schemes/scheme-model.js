const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  addSteps,
  update,
  updateSteps,
  remove,
};
function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}
//not accurate, just using placeholders
function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .select("steps.id AS id", "step_number", "scheme_name", "instructions")
    .where({ scheme_id: id });
}

function addSteps(id) {}
function update() {}
function updateSteps() {}
function remove() {}
