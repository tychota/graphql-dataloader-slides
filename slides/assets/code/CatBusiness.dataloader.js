import DataLoader from "dataloader";
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

  // handle deprecated properties
  /** @deprecated */
  get name() {
    return this.surname;
  }

  // get the loaders for the request, in order to batch and cach the db calls
  static getLoaders() {
    // if we have the info, we cache it
    const primeLoaders = cats => {
      for (let cat of cats) {
        byId.prime(cat, cats);
      }
    };
    // create a loader by id
    const byId = new DataLoader(ids =>
      CatDataAccess.getByListofIds(ids)
    );
    return {
      byId,
      primeLoaders
    };
  }

  static viewerCanSee(viewer, role) {
    const canSee =
      isOwnedBy(viewer) ||
      isAdmin(role) ||
      isVet(role) ||
      isFriendOfOwner(viewer);
    if (!canSee)
      throw new Error(
        "Nope. No access for you. This cat is protected under special law."
      );
  }

  static async load({ user: viewer, roles, dataloaders }, id) {
    if (!id) return null;
    const data = await dataloaders.cat.byId.load(id);
    if (!data) return null;
    return new Cat(data, { viewer, roles });
  }

  static async loadAll({ user: viewer, roles, dataloaders }) {
    const data = await Cat.getAllVisibleFor(viewer, roles);
    dataloaders.cat.primeLoaders(data);
    return data.map(row => new Cat(row, viewer));
  }
}

export default Cat;
