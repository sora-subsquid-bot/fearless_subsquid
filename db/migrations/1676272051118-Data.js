module.exports = class Data1676272051118 {
    name = 'Data1676272051118'

    async up(db) {
        await db.query(`CREATE TABLE "collator" ("id" character varying NOT NULL, "bond" numeric, "apr24h" numeric, CONSTRAINT "PK_2c92edad8b66a47d923ff5abe31" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "delegator" ("id" character varying NOT NULL, CONSTRAINT "PK_a8359cef2656d4ecf83c3c20aa5" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "round_nomination" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "round_id" character varying, "collator_id" character varying, "nominator_id" character varying, CONSTRAINT "PK_4acdd00bb258e4dbddabdfccbc5" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d7d08e5d9792cc89033806e86e" ON "round_nomination" ("round_id") `)
        await db.query(`CREATE INDEX "IDX_1519f7f925dfa2b757b2658cc5" ON "round_nomination" ("collator_id") `)
        await db.query(`CREATE INDEX "IDX_2bb575e4b61cd624612d103d16" ON "round_nomination" ("nominator_id") `)
        await db.query(`CREATE TABLE "round_nominator" ("id" character varying NOT NULL, "bond" numeric NOT NULL, "collators_count" integer NOT NULL, "round_id" character varying, "staker_id" character varying, CONSTRAINT "PK_198962b34d30551579fc4fc9d1c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_51c3d9f8e416a26186881e95cc" ON "round_nominator" ("round_id") `)
        await db.query(`CREATE INDEX "IDX_5fe0aad37b6dfe8988f555262c" ON "round_nominator" ("staker_id") `)
        await db.query(`CREATE TABLE "round" ("id" character varying NOT NULL, "index" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "started_at" integer NOT NULL, "ended_at" integer, "collators_count" integer NOT NULL, "total" numeric NOT NULL, CONSTRAINT "PK_34bd959f3f4a90eb86e4ae24d2d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "round_collator" ("id" character varying NOT NULL, "own_bond" numeric NOT NULL, "total_bond" numeric NOT NULL, "reward_amount" numeric, "apr" numeric, "apr_techn_numerator" numeric, "apr_techn_denominator" numeric, "nominators_count" integer, "round_id" character varying, "staker_id" character varying, "collator_id" character varying, CONSTRAINT "PK_32b73164cfc62741feb236d9895" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e6cfb8c046cfcdaffb6f40e1bf" ON "round_collator" ("round_id") `)
        await db.query(`CREATE INDEX "IDX_361329a0fdaf8f4f7e860639bd" ON "round_collator" ("staker_id") `)
        await db.query(`CREATE INDEX "IDX_9802aafb81c1ece7c4976e0180" ON "round_collator" ("collator_id") `)
        await db.query(`CREATE TABLE "reward" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE, "block_number" integer, "extrinsic_hash" text, "account_id" text NOT NULL, "amount" numeric, "round" integer, "staker_id" character varying, CONSTRAINT "PK_a90ea606c229e380fb341838036" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4b93a54e522c1bc423507342ec" ON "reward" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_51b4a3885904fbbc1296944ca4" ON "reward" ("extrinsic_hash") `)
        await db.query(`CREATE INDEX "IDX_4a8843fdb7840bfd00f8e4f7b3" ON "reward" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_d244ddc409b7278fcd1e8e54da" ON "reward" ("staker_id") `)
        await db.query(`CREATE TABLE "staker" ("id" character varying NOT NULL, "stash_id" text, "role" text, "active_bond" numeric NOT NULL, "total_reward" numeric NOT NULL, "apr24h" numeric, CONSTRAINT "PK_13561f691b22038cfa606fe1161" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_828b14269265a736e4fef52ce2" ON "staker" ("stash_id") `)
        await db.query(`CREATE TABLE "history_element" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "type" integer NOT NULL, "amount" numeric NOT NULL, "staker_id" character varying, "delegator_id" character varying, "collator_id" character varying, "round_id" character varying, CONSTRAINT "PK_b10b09ee684b794e1ca6dc2470c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5badec2bf06d27de5704d02ec7" ON "history_element" ("staker_id") `)
        await db.query(`CREATE INDEX "IDX_484227de657c4097c91cf5474d" ON "history_element" ("delegator_id") `)
        await db.query(`CREATE INDEX "IDX_b5498fcc1d93521fc152e30170" ON "history_element" ("collator_id") `)
        await db.query(`CREATE INDEX "IDX_21cdbf57bbe105ab629dee805c" ON "history_element" ("round_id") `)
        await db.query(`ALTER TABLE "round_nomination" ADD CONSTRAINT "FK_d7d08e5d9792cc89033806e86ed" FOREIGN KEY ("round_id") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "round_nomination" ADD CONSTRAINT "FK_1519f7f925dfa2b757b2658cc5f" FOREIGN KEY ("collator_id") REFERENCES "round_collator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "round_nomination" ADD CONSTRAINT "FK_2bb575e4b61cd624612d103d16e" FOREIGN KEY ("nominator_id") REFERENCES "round_nominator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "round_nominator" ADD CONSTRAINT "FK_51c3d9f8e416a26186881e95ccf" FOREIGN KEY ("round_id") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "round_nominator" ADD CONSTRAINT "FK_5fe0aad37b6dfe8988f555262c9" FOREIGN KEY ("staker_id") REFERENCES "staker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "round_collator" ADD CONSTRAINT "FK_e6cfb8c046cfcdaffb6f40e1bff" FOREIGN KEY ("round_id") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "round_collator" ADD CONSTRAINT "FK_361329a0fdaf8f4f7e860639bdb" FOREIGN KEY ("staker_id") REFERENCES "staker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "round_collator" ADD CONSTRAINT "FK_9802aafb81c1ece7c4976e01800" FOREIGN KEY ("collator_id") REFERENCES "collator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "reward" ADD CONSTRAINT "FK_d244ddc409b7278fcd1e8e54da5" FOREIGN KEY ("staker_id") REFERENCES "staker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "history_element" ADD CONSTRAINT "FK_5badec2bf06d27de5704d02ec76" FOREIGN KEY ("staker_id") REFERENCES "staker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "history_element" ADD CONSTRAINT "FK_484227de657c4097c91cf5474db" FOREIGN KEY ("delegator_id") REFERENCES "delegator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "history_element" ADD CONSTRAINT "FK_b5498fcc1d93521fc152e301702" FOREIGN KEY ("collator_id") REFERENCES "collator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "history_element" ADD CONSTRAINT "FK_21cdbf57bbe105ab629dee805c0" FOREIGN KEY ("round_id") REFERENCES "round"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "collator"`)
        await db.query(`DROP TABLE "delegator"`)
        await db.query(`DROP TABLE "round_nomination"`)
        await db.query(`DROP INDEX "public"."IDX_d7d08e5d9792cc89033806e86e"`)
        await db.query(`DROP INDEX "public"."IDX_1519f7f925dfa2b757b2658cc5"`)
        await db.query(`DROP INDEX "public"."IDX_2bb575e4b61cd624612d103d16"`)
        await db.query(`DROP TABLE "round_nominator"`)
        await db.query(`DROP INDEX "public"."IDX_51c3d9f8e416a26186881e95cc"`)
        await db.query(`DROP INDEX "public"."IDX_5fe0aad37b6dfe8988f555262c"`)
        await db.query(`DROP TABLE "round"`)
        await db.query(`DROP TABLE "round_collator"`)
        await db.query(`DROP INDEX "public"."IDX_e6cfb8c046cfcdaffb6f40e1bf"`)
        await db.query(`DROP INDEX "public"."IDX_361329a0fdaf8f4f7e860639bd"`)
        await db.query(`DROP INDEX "public"."IDX_9802aafb81c1ece7c4976e0180"`)
        await db.query(`DROP TABLE "reward"`)
        await db.query(`DROP INDEX "public"."IDX_4b93a54e522c1bc423507342ec"`)
        await db.query(`DROP INDEX "public"."IDX_51b4a3885904fbbc1296944ca4"`)
        await db.query(`DROP INDEX "public"."IDX_4a8843fdb7840bfd00f8e4f7b3"`)
        await db.query(`DROP INDEX "public"."IDX_d244ddc409b7278fcd1e8e54da"`)
        await db.query(`DROP TABLE "staker"`)
        await db.query(`DROP INDEX "public"."IDX_828b14269265a736e4fef52ce2"`)
        await db.query(`DROP TABLE "history_element"`)
        await db.query(`DROP INDEX "public"."IDX_5badec2bf06d27de5704d02ec7"`)
        await db.query(`DROP INDEX "public"."IDX_484227de657c4097c91cf5474d"`)
        await db.query(`DROP INDEX "public"."IDX_b5498fcc1d93521fc152e30170"`)
        await db.query(`DROP INDEX "public"."IDX_21cdbf57bbe105ab629dee805c"`)
        await db.query(`ALTER TABLE "round_nomination" DROP CONSTRAINT "FK_d7d08e5d9792cc89033806e86ed"`)
        await db.query(`ALTER TABLE "round_nomination" DROP CONSTRAINT "FK_1519f7f925dfa2b757b2658cc5f"`)
        await db.query(`ALTER TABLE "round_nomination" DROP CONSTRAINT "FK_2bb575e4b61cd624612d103d16e"`)
        await db.query(`ALTER TABLE "round_nominator" DROP CONSTRAINT "FK_51c3d9f8e416a26186881e95ccf"`)
        await db.query(`ALTER TABLE "round_nominator" DROP CONSTRAINT "FK_5fe0aad37b6dfe8988f555262c9"`)
        await db.query(`ALTER TABLE "round_collator" DROP CONSTRAINT "FK_e6cfb8c046cfcdaffb6f40e1bff"`)
        await db.query(`ALTER TABLE "round_collator" DROP CONSTRAINT "FK_361329a0fdaf8f4f7e860639bdb"`)
        await db.query(`ALTER TABLE "round_collator" DROP CONSTRAINT "FK_9802aafb81c1ece7c4976e01800"`)
        await db.query(`ALTER TABLE "reward" DROP CONSTRAINT "FK_d244ddc409b7278fcd1e8e54da5"`)
        await db.query(`ALTER TABLE "history_element" DROP CONSTRAINT "FK_5badec2bf06d27de5704d02ec76"`)
        await db.query(`ALTER TABLE "history_element" DROP CONSTRAINT "FK_484227de657c4097c91cf5474db"`)
        await db.query(`ALTER TABLE "history_element" DROP CONSTRAINT "FK_b5498fcc1d93521fc152e301702"`)
        await db.query(`ALTER TABLE "history_element" DROP CONSTRAINT "FK_21cdbf57bbe105ab629dee805c0"`)
    }
}
