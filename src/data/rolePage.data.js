import roleList from './role.data'
const roleIdI = ['001', '002', '003','004']
const packageI = roleList.filter(i => roleIdI.indexOf(i.id) > -1)

export {
  packageI
}