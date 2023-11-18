import { Router } from "express";
import ACL from "../middlewares/ACL";
import { admin, admins, allRoles, allUsers, user } from "database";

export const listingsRouter = Router({});

listingsRouter.patch("/:id", async (req, res) => {
  try {
    const { body, params, query } = req;
    console.log({ body, params, query });

    const ac = new ACL(admin.roles?.acl)
      .perform("users", 2)
      .perform("listings", 2)
      .validate();
    const {
      users: { can: usersAc },
      listings: { can: listingsAc },
    } = ac;
    console.log(1, usersAc, listingsAc);

    res.status(200).json({ user, ac });
  } catch (error) {
    res.status(500).json(error);
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
