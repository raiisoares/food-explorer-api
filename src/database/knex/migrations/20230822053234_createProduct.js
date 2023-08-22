exports.up = knex => knex.schema.createTable("products", table => {
    table.increments("id");
    table.text("name");
    table.text("type");
    table.text("description");
    table.integer("price");
    table.text("avatar").default(null);

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable("notes");