import { prisma } from "database";
import { Router } from "express";
import { acl_roles } from "../acl.constants";
import { decodeXAuthHeaders } from "../middlewares";

export const meRouter = Router();

meRouter.post("/", async (req, res) => {
  try {
    const _user = await prisma.users.findFirst({
      // where: { userId: "suparadmin" },
      // where: { userId: "admin" },
      where: { userId: "user" },
    });
    if (!_user) return res.sendStatus(404);
    const user = {
      ..._user,
      acl_roles: acl_roles.find((el) => el.id === _user.acl_roleId),
    };
    const auth = { id: user.id, acl_roles: user.acl_roles };
    res.cookie("X-Auth", JSON.stringify(auth));
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

meRouter.get("/", decodeXAuthHeaders, async (req, res) => {
  try {
    return res.status(200).json({ user: req.xauth });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
