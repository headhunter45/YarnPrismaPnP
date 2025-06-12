
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ActorScalarFieldEnum = {
  actor_id: 'actor_id',
  first_name: 'first_name',
  last_name: 'last_name',
  last_update: 'last_update'
};

exports.Prisma.AddressScalarFieldEnum = {
  address_id: 'address_id',
  address: 'address',
  address2: 'address2',
  district: 'district',
  city_id: 'city_id',
  postal_code: 'postal_code',
  phone: 'phone',
  last_update: 'last_update'
};

exports.Prisma.CategoryScalarFieldEnum = {
  category_id: 'category_id',
  name: 'name',
  last_update: 'last_update'
};

exports.Prisma.CityScalarFieldEnum = {
  city_id: 'city_id',
  city: 'city',
  country_id: 'country_id',
  last_update: 'last_update'
};

exports.Prisma.CountryScalarFieldEnum = {
  country_id: 'country_id',
  country: 'country',
  last_update: 'last_update'
};

exports.Prisma.CustomerScalarFieldEnum = {
  customer_id: 'customer_id',
  store_id: 'store_id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  address_id: 'address_id',
  active: 'active',
  create_date: 'create_date',
  last_update: 'last_update'
};

exports.Prisma.FilmScalarFieldEnum = {
  film_id: 'film_id',
  title: 'title',
  description: 'description',
  release_year: 'release_year',
  language_id: 'language_id',
  original_language_id: 'original_language_id',
  rental_duration: 'rental_duration',
  rental_rate: 'rental_rate',
  length: 'length',
  replacement_cost: 'replacement_cost',
  rating: 'rating',
  special_features: 'special_features',
  last_update: 'last_update'
};

exports.Prisma.Film_actorScalarFieldEnum = {
  actor_id: 'actor_id',
  film_id: 'film_id',
  last_update: 'last_update'
};

exports.Prisma.Film_categoryScalarFieldEnum = {
  film_id: 'film_id',
  category_id: 'category_id',
  last_update: 'last_update'
};

exports.Prisma.Film_textScalarFieldEnum = {
  film_id: 'film_id',
  title: 'title',
  description: 'description'
};

exports.Prisma.InventoryScalarFieldEnum = {
  inventory_id: 'inventory_id',
  film_id: 'film_id',
  store_id: 'store_id',
  last_update: 'last_update'
};

exports.Prisma.LanguageScalarFieldEnum = {
  language_id: 'language_id',
  name: 'name',
  last_update: 'last_update'
};

exports.Prisma.PaymentScalarFieldEnum = {
  payment_id: 'payment_id',
  customer_id: 'customer_id',
  staff_id: 'staff_id',
  rental_id: 'rental_id',
  amount: 'amount',
  payment_date: 'payment_date',
  last_update: 'last_update'
};

exports.Prisma.RentalScalarFieldEnum = {
  rental_id: 'rental_id',
  rental_date: 'rental_date',
  inventory_id: 'inventory_id',
  customer_id: 'customer_id',
  return_date: 'return_date',
  staff_id: 'staff_id',
  last_update: 'last_update'
};

exports.Prisma.StaffScalarFieldEnum = {
  staff_id: 'staff_id',
  first_name: 'first_name',
  last_name: 'last_name',
  address_id: 'address_id',
  picture: 'picture',
  email: 'email',
  store_id: 'store_id',
  active: 'active',
  username: 'username',
  password: 'password',
  last_update: 'last_update'
};

exports.Prisma.StoreScalarFieldEnum = {
  store_id: 'store_id',
  manager_staff_id: 'manager_staff_id',
  address_id: 'address_id',
  last_update: 'last_update'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.film_rating = exports.$Enums.film_rating = {
  G: 'G',
  PG: 'PG',
  PG_13: 'PG_13',
  R: 'R',
  NC_17: 'NC_17'
};

exports.Prisma.ModelName = {
  actor: 'actor',
  address: 'address',
  category: 'category',
  city: 'city',
  country: 'country',
  customer: 'customer',
  film: 'film',
  film_actor: 'film_actor',
  film_category: 'film_category',
  film_text: 'film_text',
  inventory: 'inventory',
  language: 'language',
  payment: 'payment',
  rental: 'rental',
  staff: 'staff',
  store: 'store'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/tom/Projects/tapper/packages/prisma/src/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "fullTextIndex"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.10.2",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  previewFeatures = [\"fullTextIndex\"]\n  output   = \"../src/generated\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nenum film_rating {\n  G\n  PG\n  PG_13\n  R\n  NC_17\n}\n\nmodel actor {\n  actor_id    Int          @id @default(autoincrement()) @db.UnsignedSmallInt\n  first_name  String       @db.VarChar(45)\n  last_name   String       @db.VarChar(45)\n  last_update DateTime     @default(now()) @db.Timestamp(0)\n  film_actor  film_actor[]\n\n  @@index([last_name], map: \"idx_actor_last_name\")\n}\n\nmodel address {\n  address_id  Int        @id @default(autoincrement()) @db.UnsignedSmallInt\n  address     String     @db.VarChar(50)\n  address2    String?    @db.VarChar(50)\n  district    String     @db.VarChar(20)\n  city_id     Int        @db.UnsignedSmallInt\n  postal_code String?    @db.VarChar(10)\n  phone       String     @db.VarChar(20)\n  last_update DateTime   @default(now()) @db.Timestamp(0)\n  city        city       @relation(fields: [city_id], references: [city_id], map: \"fk_address_city\")\n  customer    customer[]\n  staff       staff[]\n  store       store[]\n\n  @@index([city_id], map: \"idx_fk_city_id\")\n}\n\nmodel category {\n  category_id   Int             @id @default(autoincrement()) @db.UnsignedTinyInt\n  name          String          @db.VarChar(25)\n  last_update   DateTime        @default(now()) @db.Timestamp(0)\n  film_category film_category[]\n\n  @@map(\"category\")\n}\n\nmodel city {\n  city_id     Int       @id @default(autoincrement()) @db.UnsignedSmallInt\n  city        String    @db.VarChar(50)\n  country_id  Int       @db.UnsignedSmallInt\n  last_update DateTime  @default(now()) @db.Timestamp(0)\n  address     address[]\n  country     country   @relation(fields: [country_id], references: [country_id], map: \"fk_city_country\")\n\n  @@index([country_id], map: \"idx_fk_country_id\")\n}\n\nmodel country {\n  country_id  Int      @id @default(autoincrement()) @db.UnsignedSmallInt\n  country     String   @db.VarChar(50)\n  last_update DateTime @default(now()) @db.Timestamp(0)\n  city        city[]\n}\n\nmodel customer {\n  customer_id Int       @id @default(autoincrement()) @db.UnsignedSmallInt\n  store_id    Int       @db.UnsignedTinyInt\n  first_name  String    @db.VarChar(45)\n  last_name   String    @db.VarChar(45)\n  email       String?   @db.VarChar(50)\n  address_id  Int       @db.UnsignedSmallInt\n  active      Boolean   @default(true)\n  create_date DateTime  @db.DateTime(0)\n  last_update DateTime? @default(now()) @db.Timestamp(0)\n  address     address   @relation(fields: [address_id], references: [address_id], map: \"fk_customer_address\")\n  store       store     @relation(fields: [store_id], references: [store_id], map: \"fk_customer_store\")\n  payment     payment[]\n  rental      rental[]\n\n  @@index([address_id], map: \"idx_fk_address_id\")\n  @@index([store_id], map: \"idx_fk_store_id\")\n  @@index([last_name], map: \"idx_last_name\")\n}\n\nmodel film {\n  film_id                                      Int             @id @default(autoincrement()) @db.UnsignedSmallInt\n  title                                        String          @db.VarChar(128)\n  description                                  String?         @db.Text\n  release_year                                 Int?            @db.Year\n  language_id                                  Int             @db.UnsignedTinyInt\n  original_language_id                         Int?            @db.UnsignedTinyInt\n  rental_duration                              Int             @default(3) @db.UnsignedTinyInt\n  rental_rate                                  Decimal         @default(4.99) @db.Decimal(4, 2)\n  length                                       Int?            @db.UnsignedSmallInt\n  replacement_cost                             Decimal         @default(19.99) @db.Decimal(5, 2)\n  rating                                       film_rating?    @default(G)\n  special_features                             String?\n  last_update                                  DateTime        @default(now()) @db.Timestamp(0)\n  language_film_language_idTolanguage          language        @relation(\"film_language_idTolanguage\", fields: [language_id], references: [language_id], map: \"fk_film_language\")\n  language_film_original_language_idTolanguage language?       @relation(\"film_original_language_idTolanguage\", fields: [original_language_id], references: [language_id], onDelete: Restrict, map: \"fk_film_language_original\")\n  film_actor                                   film_actor[]\n  film_category                                film_category[]\n  inventory                                    inventory[]\n\n  @@index([language_id], map: \"idx_fk_language_id\")\n  @@index([original_language_id], map: \"idx_fk_original_language_id\")\n  @@index([title], map: \"idx_title\")\n}\n\nmodel film_actor {\n  actor_id    Int      @db.UnsignedSmallInt\n  film_id     Int      @db.UnsignedSmallInt\n  last_update DateTime @default(now()) @db.Timestamp(0)\n  actor       actor    @relation(fields: [actor_id], references: [actor_id], map: \"fk_film_actor_actor\")\n  film        film     @relation(fields: [film_id], references: [film_id], map: \"fk_film_actor_film\")\n\n  @@id([actor_id, film_id])\n  @@index([film_id], map: \"idx_fk_film_id\")\n}\n\nmodel film_category {\n  film_id     Int      @db.UnsignedSmallInt\n  category_id Int      @db.UnsignedTinyInt\n  last_update DateTime @default(now()) @db.Timestamp(0)\n  category    category @relation(fields: [category_id], references: [category_id], map: \"fk_film_category_category\")\n  film        film     @relation(fields: [film_id], references: [film_id], map: \"fk_film_category_film\")\n\n  @@id([film_id, category_id])\n  @@index([category_id], map: \"fk_film_category_category\")\n}\n\nmodel film_text {\n  film_id     Int     @id @db.UnsignedSmallInt\n  title       String  @db.VarChar(255)\n  description String? @db.Text\n}\n\nmodel inventory {\n  inventory_id Int      @id @default(autoincrement()) @db.UnsignedMediumInt\n  film_id      Int      @db.UnsignedSmallInt\n  store_id     Int      @db.UnsignedTinyInt\n  last_update  DateTime @default(now()) @db.Timestamp(0)\n  film         film     @relation(fields: [film_id], references: [film_id], map: \"fk_inventory_film\")\n  store        store    @relation(fields: [store_id], references: [store_id], map: \"fk_inventory_store\")\n  rental       rental[]\n\n  @@index([film_id], map: \"idx_fk_film_id\")\n  @@index([store_id, film_id], map: \"idx_store_id_film_id\")\n}\n\nmodel language {\n  language_id                              Int      @id @default(autoincrement()) @db.UnsignedTinyInt\n  name                                     String   @db.Char(20)\n  last_update                              DateTime @default(now()) @db.Timestamp(0)\n  film_film_language_idTolanguage          film[]   @relation(\"film_language_idTolanguage\")\n  film_film_original_language_idTolanguage film[]   @relation(\"film_original_language_idTolanguage\")\n}\n\nmodel payment {\n  payment_id   Int       @id @default(autoincrement()) @db.UnsignedSmallInt\n  customer_id  Int       @db.UnsignedSmallInt\n  staff_id     Int       @db.UnsignedTinyInt\n  rental_id    Int?\n  amount       Decimal   @db.Decimal(5, 2)\n  payment_date DateTime  @db.DateTime(0)\n  last_update  DateTime? @default(now()) @db.Timestamp(0)\n  customer     customer  @relation(fields: [customer_id], references: [customer_id], map: \"fk_payment_customer\")\n  rental       rental?   @relation(fields: [rental_id], references: [rental_id], map: \"fk_payment_rental\")\n  staff        staff     @relation(fields: [staff_id], references: [staff_id], map: \"fk_payment_staff\")\n\n  @@index([rental_id], map: \"fk_payment_rental\")\n  @@index([customer_id], map: \"idx_fk_customer_id\")\n  @@index([staff_id], map: \"idx_fk_staff_id\")\n}\n\nmodel rental {\n  rental_id    Int       @id @default(autoincrement())\n  rental_date  DateTime  @db.DateTime(0)\n  inventory_id Int       @db.UnsignedMediumInt\n  customer_id  Int       @db.UnsignedSmallInt\n  return_date  DateTime? @db.DateTime(0)\n  staff_id     Int       @db.UnsignedTinyInt\n  last_update  DateTime  @default(now()) @db.Timestamp(0)\n  payment      payment[]\n  customer     customer  @relation(fields: [customer_id], references: [customer_id], map: \"fk_rental_customer\")\n  inventory    inventory @relation(fields: [inventory_id], references: [inventory_id], map: \"fk_rental_inventory\")\n  staff        staff     @relation(fields: [staff_id], references: [staff_id], map: \"fk_rental_staff\")\n\n  @@unique([rental_date, inventory_id, customer_id], map: \"rental_date\")\n  @@index([customer_id], map: \"idx_fk_customer_id\")\n  @@index([inventory_id], map: \"idx_fk_inventory_id\")\n  @@index([staff_id], map: \"idx_fk_staff_id\")\n}\n\nmodel staff {\n  staff_id                            Int       @id @default(autoincrement()) @db.UnsignedTinyInt\n  first_name                          String    @db.VarChar(45)\n  last_name                           String    @db.VarChar(45)\n  address_id                          Int       @db.UnsignedSmallInt\n  picture                             Bytes?    @db.Blob\n  email                               String?   @db.VarChar(50)\n  store_id                            Int       @db.UnsignedTinyInt\n  active                              Boolean   @default(true)\n  username                            String    @db.VarChar(16)\n  password                            String?   @db.VarChar(40)\n  last_update                         DateTime  @default(now()) @db.Timestamp(0)\n  payment                             payment[]\n  rental                              rental[]\n  address                             address   @relation(fields: [address_id], references: [address_id], map: \"fk_staff_address\")\n  store_staff_store_idTostore         store     @relation(\"staff_store_idTostore\", fields: [store_id], references: [store_id], map: \"fk_staff_store\")\n  store_store_manager_staff_idTostaff store?    @relation(\"store_manager_staff_idTostaff\")\n\n  @@index([address_id], map: \"idx_fk_address_id\")\n  @@index([store_id], map: \"idx_fk_store_id\")\n}\n\nmodel store {\n  store_id                            Int         @id @default(autoincrement()) @db.UnsignedTinyInt\n  manager_staff_id                    Int         @unique(map: \"idx_unique_manager\") @db.UnsignedTinyInt\n  address_id                          Int         @db.UnsignedSmallInt\n  last_update                         DateTime    @default(now()) @db.Timestamp(0)\n  customer                            customer[]\n  inventory                           inventory[]\n  staff_staff_store_idTostore         staff[]     @relation(\"staff_store_idTostore\")\n  address                             address     @relation(fields: [address_id], references: [address_id], map: \"fk_store_address\")\n  staff_store_manager_staff_idTostaff staff       @relation(\"store_manager_staff_idTostaff\", fields: [manager_staff_id], references: [staff_id], map: \"fk_store_staff\")\n\n  @@index([address_id], map: \"idx_fk_address_id\")\n}\n",
  "inlineSchemaHash": "ef7d063cd643548bba919008f1a7328fe986114fa80814b5611b2ab28b4f88e9",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"actor\":{\"dbName\":null,\"fields\":[{\"name\":\"actor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_actor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film_actor\",\"relationName\":\"actorTofilm_actor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"address\":{\"dbName\":null,\"fields\":[{\"name\":\"address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"district\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postal_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"city\",\"relationName\":\"addressTocity\",\"relationFromFields\":[\"city_id\"],\"relationToFields\":[\"city_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"relationName\":\"addressTocustomer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"addressTostaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"addressTostore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"category\":{\"dbName\":\"category\",\"fields\":[{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_category\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film_category\",\"relationName\":\"categoryTofilm_category\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"city\":{\"dbName\":null,\"fields\":[{\"name\":\"city_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"address\",\"relationName\":\"addressTocity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"country\",\"relationName\":\"cityTocountry\",\"relationFromFields\":[\"country_id\"],\"relationToFields\":[\"country_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"country\":{\"dbName\":null,\"fields\":[{\"name\":\"country_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"city\",\"relationName\":\"cityTocountry\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"customer\":{\"dbName\":null,\"fields\":[{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"create_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"address\",\"relationName\":\"addressTocustomer\",\"relationFromFields\":[\"address_id\"],\"relationToFields\":[\"address_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"customerTostore\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"store_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payment\",\"relationName\":\"customerTopayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rental\",\"relationName\":\"customerTorental\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"film\":{\"dbName\":null,\"fields\":[{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"release_year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"original_language_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental_duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":4.99,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"replacement_cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":19.990000000000002,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"film_rating\",\"default\":\"G\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"special_features\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language_film_language_idTolanguage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"language\",\"relationName\":\"film_language_idTolanguage\",\"relationFromFields\":[\"language_id\"],\"relationToFields\":[\"language_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language_film_original_language_idTolanguage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"language\",\"relationName\":\"film_original_language_idTolanguage\",\"relationFromFields\":[\"original_language_id\"],\"relationToFields\":[\"language_id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_actor\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film_actor\",\"relationName\":\"filmTofilm_actor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_category\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film_category\",\"relationName\":\"filmTofilm_category\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"inventory\",\"relationName\":\"filmToinventory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"film_actor\":{\"dbName\":null,\"fields\":[{\"name\":\"actor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"actor\",\"relationName\":\"actorTofilm_actor\",\"relationFromFields\":[\"actor_id\"],\"relationToFields\":[\"actor_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"filmTofilm_actor\",\"relationFromFields\":[\"film_id\"],\"relationToFields\":[\"film_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"actor_id\",\"film_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"film_category\":{\"dbName\":null,\"fields\":[{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"category\",\"relationName\":\"categoryTofilm_category\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"filmTofilm_category\",\"relationFromFields\":[\"film_id\"],\"relationToFields\":[\"film_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"film_id\",\"category_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"film_text\":{\"dbName\":null,\"fields\":[{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"inventory\":{\"dbName\":null,\"fields\":[{\"name\":\"inventory_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"filmToinventory\",\"relationFromFields\":[\"film_id\"],\"relationToFields\":[\"film_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"inventoryTostore\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"store_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rental\",\"relationName\":\"inventoryTorental\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"language\":{\"dbName\":null,\"fields\":[{\"name\":\"language_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_film_language_idTolanguage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"film_language_idTolanguage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"film_film_original_language_idTolanguage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"film\",\"relationName\":\"film_original_language_idTolanguage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"payment\":{\"dbName\":null,\"fields\":[{\"name\":\"payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"relationName\":\"customerTopayment\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"customer_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rental\",\"relationName\":\"paymentTorental\",\"relationFromFields\":[\"rental_id\"],\"relationToFields\":[\"rental_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"paymentTostaff\",\"relationFromFields\":[\"staff_id\"],\"relationToFields\":[\"staff_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"rental\":{\"dbName\":null,\"fields\":[{\"name\":\"rental_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"return_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payment\",\"relationName\":\"paymentTorental\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"relationName\":\"customerTorental\",\"relationFromFields\":[\"customer_id\"],\"relationToFields\":[\"customer_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"inventory\",\"relationName\":\"inventoryTorental\",\"relationFromFields\":[\"inventory_id\"],\"relationToFields\":[\"inventory_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"rentalTostaff\",\"relationFromFields\":[\"staff_id\"],\"relationToFields\":[\"staff_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"rental_date\",\"inventory_id\",\"customer_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"rental_date\",\"inventory_id\",\"customer_id\"]}],\"isGenerated\":false},\"staff\":{\"dbName\":null,\"fields\":[{\"name\":\"staff_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"picture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payment\",\"relationName\":\"paymentTostaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rental\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rental\",\"relationName\":\"rentalTostaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"address\",\"relationName\":\"addressTostaff\",\"relationFromFields\":[\"address_id\"],\"relationToFields\":[\"address_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_staff_store_idTostore\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"staff_store_idTostore\",\"relationFromFields\":[\"store_id\"],\"relationToFields\":[\"store_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store_store_manager_staff_idTostaff\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"store\",\"relationName\":\"store_manager_staff_idTostaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"store\":{\"dbName\":null,\"fields\":[{\"name\":\"store_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager_staff_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"customer\",\"relationName\":\"customerTostore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inventory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"inventory\",\"relationName\":\"inventoryTostore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_staff_store_idTostore\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"staff_store_idTostore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"address\",\"relationName\":\"addressTostore\",\"relationFromFields\":[\"address_id\"],\"relationToFields\":[\"address_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_store_manager_staff_idTostaff\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"staff\",\"relationName\":\"store_manager_staff_idTostaff\",\"relationFromFields\":[\"manager_staff_id\"],\"relationToFields\":[\"staff_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"film_rating\":{\"values\":[{\"name\":\"G\",\"dbName\":null},{\"name\":\"PG\",\"dbName\":null},{\"name\":\"PG_13\",\"dbName\":null},{\"name\":\"R\",\"dbName\":null},{\"name\":\"NC_17\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

