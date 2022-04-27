const { ROLE } = require('../table')

function canViewProject(user, products) {
  return (
    user.role === ROLE.ADMIN ||
    products.userId === user.id
  )
}

function scopedProjects(user, products) {
  if (user.role === ROLE.ADMIN) return products
  return products.filter(project => project.userId === user.id)
}

function canDeleteProject(user, products) {
  return products.userId === user.id
}

module.exports = {
  canViewProject,
  scopedProjects,
  canDeleteProject
}