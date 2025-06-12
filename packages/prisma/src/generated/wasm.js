
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
