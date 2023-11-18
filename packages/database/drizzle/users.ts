import { _roles } from "./roles";

export const _users = [
  { id: 1, username: "suparadmin", roleId: 1 },
  { id: 2, username: "admin1", roleId: 2 },
  { id: 3, username: "admin2", roleId: 2 },
  { id: 4, username: "user1", roleId: 3 },
  { id: 5, username: "user2", roleId: 3 },
  { id: 6, username: "user3", roleId: 3 },
];

export const allUsers = _users;
export const superadmins = _users
  .filter((el) => el.roleId === 1)
  .map((el) => ({ ...el, roles: _roles.find((r) => r.id === el.roleId) }));
export const admins = _users
  .filter((el) => el.roleId === 2)
  .map((el) => ({ ...el, roles: _roles.find((r) => r.id === el.roleId) }));
export const users = _users
  .filter((el) => el.roleId === 3)
  .map((el) => ({ ...el, roles: _roles.find((r) => r.id === el.roleId) }));

export const superadmin = superadmins[0];
export const admin = admins[0];
export const user = users[0];
