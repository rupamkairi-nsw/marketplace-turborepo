/**
read = 1
create = 2
update = 3
delete = 4
 */

export const _roles = [
  { id: 1, acl: { users: 4, listings: 4 } },
  { id: 2, acl: { users: 1, listings: 3 } },
  { id: 3, acl: { users: 1, listings: 1 } },
];

export const allRoles = [..._roles];
