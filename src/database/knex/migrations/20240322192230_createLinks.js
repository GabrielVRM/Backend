
exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("url").notNullable();

    table.integer("note_id").references("id").inTable("notes").onDelete("cascade")

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("modified_at").default(knex.fn.now());
    
    })
    
    exports.down = knex.schema.dropTable("notes")