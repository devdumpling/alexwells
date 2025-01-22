import { createSchema, createTableSchema, type Row } from "@rocicorp/zero";

const userSchema = createTableSchema({
	tableName: "user",
	columns: {
		id: { type: "string" },
		name: { type: "string" },
	},
	primaryKey: ["id"],
});

const messageSchema = createTableSchema({
	tableName: "message",
	columns: {
		id: { type: "string" },
		senderID: { type: "string" },
		body: { type: "string" },
		timestamp: { type: "number" },
	},
	primaryKey: ["id"],
	relationships: {
		sender: {
			sourceField: "senderID",
			destSchema: userSchema,
			destField: "id",
		},
	},
});

export const schema = createSchema({
	version: 1,
	tables: {
		user: userSchema,
		message: messageSchema,
	},
});

export type Schema = typeof schema;
export type Message = Row<typeof messageSchema>;
export type User = Row<typeof schema.tables.user>;
