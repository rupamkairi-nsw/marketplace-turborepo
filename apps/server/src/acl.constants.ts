import { prisma } from "database";
import type { ACL_Roles_Policies, ACL_Roles } from "database";

export let acl_roles_policies: ACL_Roles_Policies[];
export let acl_roles: ACL_Roles[];

(async () => {
  acl_roles_policies = await prisma.acl_roles_policies.findMany();
  acl_roles = await prisma.acl_roles.findMany();
})();

// export const acl_roles_policies = await prisma.acl_roles_policies.findMany();
// export const acl_roles = await prisma.acl_roles.findMany();
