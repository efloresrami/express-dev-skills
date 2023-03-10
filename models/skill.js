const skills = [
  {id: 125223, skill: 'JavaScript', done: true},
  {id: 127904, skill: 'Python', done: false},
  {id: 139608, skill: 'Data Structure and Algorithms', done: false}
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}
