import CatDataAccess from "../db/cat";
import {
  isOwnedBy,
  isAdmin,
  isVet,
  isFriendOfOwner
} from "./utils/auth";

class Cat {
  constructor(data, { viewer, role }) {
    // assert the viewer is autorized to see this cat
    Cat.viewerCanSee(viewer, role);

    this.id = data.id;
    this.surname = data.surname;
    this.gender = data.gender;
    this.color = data.color;

    // scope some sensible properties
    if (isAdmin(role) || isVet(role) || isOwnedBy(viewer)) {
      this.idendificationNumber = data.identificationNumber;
    }
  }

  /** @deprecated */
  get name() {
    return this.surname;
  }

  static viewerCanSee(viewer, role) {
    const canSee =
      isOwnedBy(viewer) ||
      isAdmin(role) ||
      isVet(role) ||
      isFriendOfOwner(viewer);
    if (!canSee)
      throw new Error("Nope. This cat is under special juridiction.");
  }

  static async load({ user: viewer, roles }, id) {
    if (!id) return null;
    const data = await CatDataAccess.getById(id);
    if (!data) return null;
    return new Cat(data, { viewer, roles });
  }

  static async loadAll({ user: viewer, roles }) {
    const data = await Cat.getAllVisibleFor(viewer, roles);
    return data.map(row => new Cat(row, viewer));
  }
}

export default Cat;
