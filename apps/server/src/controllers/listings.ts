import { Router } from "express";
import { prisma } from "database";
import { acl_roles_policies, acl_roles } from "../acl.constants";
import { ACL } from "../middlewares";

export const listingsRouter = Router({});

listingsRouter.get("/", async (req, res) => {
  try {
    let listings = await prisma.listings.findMany();
    res.status(200).json({ listings });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

listingsRouter.patch("/:id", async (req, res) => {
  try {
    const { body, params, query } = req;
    console.log({ body, params, query });

    let listing = await prisma.listings.findFirst({
      where: { id: +params.id },
    });

    let users = await prisma.users.findMany();
    users = users.map((user) => ({
      ...user,
      acl_roles: acl_roles.find((el) => el.id === user.acl_roleId),
    }));

    res.status(200).json({ listing, users });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// ACL = Access Control Layer (actually List)
/**
{ resource: score }[] Array of Mapping. Where each Item is resource to scores
Let's see
Scores are Defined for each performace/action
read = 1
create = 2
update = 3
delete = 4
{ user: 2 } can not perform update, delete
 */

/**
Similarly each action must need some minimum(or, sufficient) score to perform
const can = ACL(roles)
              .perform(users, 3)
              .perform(listings, 3)
              .perform(addresses, 3) 
              ... so forth you can chain
can = { can: true, users: {can: false, message: "Forbidden"}, listings: {can: true}, addresses: {can: true} }

but with this approach comes a problem of 
Defining Scores of Actions might get harder over time than we think.
 */
