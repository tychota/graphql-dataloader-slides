import BamerBusiness from "../../business/bamer";
import BookBusiness from "../../business/book";

export default {
  Query: {
    allBamers(root, _, ctx) {
      return BamerBusiness.loadAll(ctx);
    },
    bamer(root, args, ctx) {
      return BamerBusiness.load(ctx, args.id);
    },
    allBooks(root, _, ctx) {
      return BookBusiness.loadAll(ctx);
    },
    book(root, args, ctx) {
      return BookBusiness.load(ctx, args.id);
    }
  }
};
