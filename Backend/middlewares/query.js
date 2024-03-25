function ProcessQuery(query) {
    let whereClause = {};

    if (query.is_active !== undefined) {
      const is_active = query.is_active === "true" ? 1 : 0;
      whereClause.is_active = is_active;
    }

    if (query.is_mainstory !== undefined) {
      const is_mainstory = parseInt(query.is_mainstory);
      if (!isNaN(is_mainstory)) {
        whereClause.is_mainstory = is_mainstory;
      }
    }

    if (query.withoutZero !== undefined && query.withoutZero == "0") {
      whereClause.is_mainstory = { [Sequelize.Op.ne]: 0 };
    }

    if (query.sort_by === "is_mainstory") {
      orderClause.push(["is_mainstory", "ASC"]);
    }

    if (query.id !== undefined) {
        whereClause.id = query.id;
    }
}