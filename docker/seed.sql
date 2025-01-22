CREATE DATABASE zstart;
CREATE DATABASE zstart_cvr;
CREATE DATABASE zstart_cdb;

\c zstart;

CREATE TABLE "user" (
  "id" VARCHAR PRIMARY KEY,
  "name" VARCHAR NOT NULL
);

CREATE TABLE "message" (
  "id" VARCHAR PRIMARY KEY,
  "senderID" VARCHAR REFERENCES "user"(id),
  "body" VARCHAR NOT NULL,
  "timestamp" TIMESTAMP not null
);

INSERT INTO "user" ("id", "name") VALUES ('1', 'Alex');
INSERT INTO "user" ("id", "name") VALUES ('2', 'Devon');
INSERT INTO "user" ("id", "name") VALUES ('3', 'Lily');
