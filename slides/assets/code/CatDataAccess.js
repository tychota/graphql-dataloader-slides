import db from "..";

class CatDataAccess {
  static async getById(id: string) {
    return await db
      .first()
      .table("Cat")
      .where("id", id);
  }
  static async getBySurname(surname) {
    return await db
      .first()
      .table("Cat")
      .where("surname", surname);
  }
  static async getByFuzzySurname(surname, proximity = 2) {
    return await db
      .first()
      .table("Cat")
      .whereRaw(
        "LEVENSHTEIN(LOWER(cat.surname), ?) < ? " +
          "OR DMETAPHONE(cat.surname) = DMETAPHONE(?)",
        surname,
        proximity,
        surname
      );
  }
  static async getAll() {
    return await db.select().table("Cat");
  }
  static async getByListofIds(ids) {
    return await db
      .select()
      .table("Cat")
      .whereIn("id", ids);
  }
}

export default CatDataAccess;
