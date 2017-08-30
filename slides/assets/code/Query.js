import FriendBusiness from "../../business/friend";
import CatBusiness from "../../business/cat";
import DogBusiness from "../../business/dog";
import HatBusiness from "../../business/hat";

export default {
  Query: {
    allFriends(root, _, ctx) {
      return FriendBusiness.loadAll(ctx);
    },
    friend(root, args, ctx) {
      return FriendBusiness.load(ctx, args.id);
    },
    allCats(root, _, ctx) {
      return CatBusiness.loadAll(ctx);
    },
    cat(root, args, ctx) {
      return CatBusiness.load(ctx, args.id);
    },
    allDogs(root, _, ctx) {
      return DogBusiness.loadAll(ctx);
    },
    dog(root, args, ctx) {
      return DogBusiness.load(ctx, args.id);
    },
    allHats(root, _, ctx) {
      return HatBusiness.loadAll(ctx);
    },
    hat(root, args, ctx) {
      return HatBusiness.load(ctx, args.id);
    }
  }
};
