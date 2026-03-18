
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Shelter
 * 
 */
export type Shelter = $Result.DefaultSelection<Prisma.$ShelterPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model PetMedia
 * 
 */
export type PetMedia = $Result.DefaultSelection<Prisma.$PetMediaPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model ApplicationDecision
 * 
 */
export type ApplicationDecision = $Result.DefaultSelection<Prisma.$ApplicationDecisionPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  STAFF: 'STAFF',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Species: {
  DOG: 'DOG',
  CAT: 'CAT',
  OTHER: 'OTHER'
};

export type Species = (typeof Species)[keyof typeof Species]


export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  UNKNOWN: 'UNKNOWN'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const Size: {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  XL: 'XL'
};

export type Size = (typeof Size)[keyof typeof Size]


export const MediaKind: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type MediaKind = (typeof MediaKind)[keyof typeof MediaKind]


export const PetStatus: {
  AVAILABLE: 'AVAILABLE',
  RESERVED: 'RESERVED',
  ADOPTED: 'ADOPTED',
  ARCHIVED: 'ARCHIVED'
};

export type PetStatus = (typeof PetStatus)[keyof typeof PetStatus]


export const ApplicationStatus: {
  SUBMITTED: 'SUBMITTED',
  IN_REVIEW: 'IN_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  WITHDRAWN: 'WITHDRAWN'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Species = $Enums.Species

export const Species: typeof $Enums.Species

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

export type Size = $Enums.Size

export const Size: typeof $Enums.Size

export type MediaKind = $Enums.MediaKind

export const MediaKind: typeof $Enums.MediaKind

export type PetStatus = $Enums.PetStatus

export const PetStatus: typeof $Enums.PetStatus

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shelter`: Exposes CRUD operations for the **Shelter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shelters
    * const shelters = await prisma.shelter.findMany()
    * ```
    */
  get shelter(): Prisma.ShelterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petMedia`: Exposes CRUD operations for the **PetMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PetMedias
    * const petMedias = await prisma.petMedia.findMany()
    * ```
    */
  get petMedia(): Prisma.PetMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationDecision`: Exposes CRUD operations for the **ApplicationDecision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationDecisions
    * const applicationDecisions = await prisma.applicationDecision.findMany()
    * ```
    */
  get applicationDecision(): Prisma.ApplicationDecisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Shelter: 'Shelter',
    Address: 'Address',
    Pet: 'Pet',
    PetMedia: 'PetMedia',
    Application: 'Application',
    ApplicationDecision: 'ApplicationDecision',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "shelter" | "address" | "pet" | "petMedia" | "application" | "applicationDecision" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Shelter: {
        payload: Prisma.$ShelterPayload<ExtArgs>
        fields: Prisma.ShelterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShelterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShelterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          findFirst: {
            args: Prisma.ShelterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShelterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          findMany: {
            args: Prisma.ShelterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>[]
          }
          create: {
            args: Prisma.ShelterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          createMany: {
            args: Prisma.ShelterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShelterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>[]
          }
          delete: {
            args: Prisma.ShelterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          update: {
            args: Prisma.ShelterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          deleteMany: {
            args: Prisma.ShelterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShelterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShelterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>[]
          }
          upsert: {
            args: Prisma.ShelterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelterPayload>
          }
          aggregate: {
            args: Prisma.ShelterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShelter>
          }
          groupBy: {
            args: Prisma.ShelterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShelterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShelterCountArgs<ExtArgs>
            result: $Utils.Optional<ShelterCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      PetMedia: {
        payload: Prisma.$PetMediaPayload<ExtArgs>
        fields: Prisma.PetMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload>
          }
          findFirst: {
            args: Prisma.PetMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload>
          }
          findMany: {
            args: Prisma.PetMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload>[]
          }
          create: {
            args: Prisma.PetMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload>
          }
          createMany: {
            args: Prisma.PetMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload>[]
          }
          delete: {
            args: Prisma.PetMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload>
          }
          update: {
            args: Prisma.PetMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload>
          }
          deleteMany: {
            args: Prisma.PetMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload>[]
          }
          upsert: {
            args: Prisma.PetMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetMediaPayload>
          }
          aggregate: {
            args: Prisma.PetMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetMedia>
          }
          groupBy: {
            args: Prisma.PetMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetMediaCountArgs<ExtArgs>
            result: $Utils.Optional<PetMediaCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      ApplicationDecision: {
        payload: Prisma.$ApplicationDecisionPayload<ExtArgs>
        fields: Prisma.ApplicationDecisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationDecisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationDecisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload>
          }
          findFirst: {
            args: Prisma.ApplicationDecisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationDecisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload>
          }
          findMany: {
            args: Prisma.ApplicationDecisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload>[]
          }
          create: {
            args: Prisma.ApplicationDecisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload>
          }
          createMany: {
            args: Prisma.ApplicationDecisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationDecisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDecisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload>
          }
          update: {
            args: Prisma.ApplicationDecisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDecisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationDecisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationDecisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationDecisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationDecisionPayload>
          }
          aggregate: {
            args: Prisma.ApplicationDecisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationDecision>
          }
          groupBy: {
            args: Prisma.ApplicationDecisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDecisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationDecisionCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationDecisionCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    shelter?: ShelterOmit
    address?: AddressOmit
    pet?: PetOmit
    petMedia?: PetMediaOmit
    application?: ApplicationOmit
    applicationDecision?: ApplicationDecisionOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applications: number
    reviewedApplications: number
    decisions: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    reviewedApplications?: boolean | UserCountOutputTypeCountReviewedApplicationsArgs
    decisions?: boolean | UserCountOutputTypeCountDecisionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewedApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDecisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDecisionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type ShelterCountOutputType
   */

  export type ShelterCountOutputType = {
    pets: number
    applications: number
    auditLogs: number
  }

  export type ShelterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | ShelterCountOutputTypeCountPetsArgs
    applications?: boolean | ShelterCountOutputTypeCountApplicationsArgs
    auditLogs?: boolean | ShelterCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterCountOutputType
     */
    select?: ShelterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }

  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    shelters: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelters?: boolean | AddressCountOutputTypeCountSheltersArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountSheltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelterWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    media: number
    applications: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | PetCountOutputTypeCountMediaArgs
    applications?: boolean | PetCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetMediaWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    decisions: number
    auditLogs: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decisions?: boolean | ApplicationCountOutputTypeCountDecisionsArgs
    auditLogs?: boolean | ApplicationCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountDecisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDecisionWhereInput
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    applications?: boolean | User$applicationsArgs<ExtArgs>
    reviewedApplications?: boolean | User$reviewedApplicationsArgs<ExtArgs>
    decisions?: boolean | User$decisionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | User$applicationsArgs<ExtArgs>
    reviewedApplications?: boolean | User$reviewedApplicationsArgs<ExtArgs>
    decisions?: boolean | User$decisionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      reviewedApplications: Prisma.$ApplicationPayload<ExtArgs>[]
      decisions: Prisma.$ApplicationDecisionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewedApplications<T extends User$reviewedApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewedApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    decisions<T extends User$decisionsArgs<ExtArgs> = {}>(args?: Subset<T, User$decisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.reviewedApplications
   */
  export type User$reviewedApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.decisions
   */
  export type User$decisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    where?: ApplicationDecisionWhereInput
    orderBy?: ApplicationDecisionOrderByWithRelationInput | ApplicationDecisionOrderByWithRelationInput[]
    cursor?: ApplicationDecisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationDecisionScalarFieldEnum | ApplicationDecisionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Shelter
   */

  export type AggregateShelter = {
    _count: ShelterCountAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  export type ShelterMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    website: string | null
    addressId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ShelterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    website: string | null
    addressId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ShelterCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    email: number
    phone: number
    website: number
    addressId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ShelterMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    website?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ShelterMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    website?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ShelterCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    website?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ShelterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelter to aggregate.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shelters
    **/
    _count?: true | ShelterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShelterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShelterMaxAggregateInputType
  }

  export type GetShelterAggregateType<T extends ShelterAggregateArgs> = {
        [P in keyof T & keyof AggregateShelter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShelter[P]>
      : GetScalarType<T[P], AggregateShelter[P]>
  }




  export type ShelterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelterWhereInput
    orderBy?: ShelterOrderByWithAggregationInput | ShelterOrderByWithAggregationInput[]
    by: ShelterScalarFieldEnum[] | ShelterScalarFieldEnum
    having?: ShelterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShelterCountAggregateInputType | true
    _min?: ShelterMinAggregateInputType
    _max?: ShelterMaxAggregateInputType
  }

  export type ShelterGroupByOutputType = {
    id: string
    name: string
    slug: string
    email: string | null
    phone: string | null
    website: string | null
    addressId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ShelterCountAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  type GetShelterGroupByPayload<T extends ShelterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShelterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShelterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShelterGroupByOutputType[P]>
            : GetScalarType<T[P], ShelterGroupByOutputType[P]>
        }
      >
    >


  export type ShelterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    address?: boolean | Shelter$addressArgs<ExtArgs>
    pets?: boolean | Shelter$petsArgs<ExtArgs>
    applications?: boolean | Shelter$applicationsArgs<ExtArgs>
    auditLogs?: boolean | Shelter$auditLogsArgs<ExtArgs>
    _count?: boolean | ShelterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type ShelterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    address?: boolean | Shelter$addressArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type ShelterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    address?: boolean | Shelter$addressArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type ShelterSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    website?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ShelterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "email" | "phone" | "website" | "addressId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["shelter"]>
  export type ShelterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Shelter$addressArgs<ExtArgs>
    pets?: boolean | Shelter$petsArgs<ExtArgs>
    applications?: boolean | Shelter$applicationsArgs<ExtArgs>
    auditLogs?: boolean | Shelter$auditLogsArgs<ExtArgs>
    _count?: boolean | ShelterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShelterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Shelter$addressArgs<ExtArgs>
  }
  export type ShelterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Shelter$addressArgs<ExtArgs>
  }

  export type $ShelterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shelter"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      pets: Prisma.$PetPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      email: string | null
      phone: string | null
      website: string | null
      addressId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["shelter"]>
    composites: {}
  }

  type ShelterGetPayload<S extends boolean | null | undefined | ShelterDefaultArgs> = $Result.GetResult<Prisma.$ShelterPayload, S>

  type ShelterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShelterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShelterCountAggregateInputType | true
    }

  export interface ShelterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shelter'], meta: { name: 'Shelter' } }
    /**
     * Find zero or one Shelter that matches the filter.
     * @param {ShelterFindUniqueArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShelterFindUniqueArgs>(args: SelectSubset<T, ShelterFindUniqueArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shelter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShelterFindUniqueOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShelterFindUniqueOrThrowArgs>(args: SelectSubset<T, ShelterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterFindFirstArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShelterFindFirstArgs>(args?: SelectSubset<T, ShelterFindFirstArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterFindFirstOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShelterFindFirstOrThrowArgs>(args?: SelectSubset<T, ShelterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shelters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shelters
     * const shelters = await prisma.shelter.findMany()
     * 
     * // Get first 10 Shelters
     * const shelters = await prisma.shelter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shelterWithIdOnly = await prisma.shelter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShelterFindManyArgs>(args?: SelectSubset<T, ShelterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shelter.
     * @param {ShelterCreateArgs} args - Arguments to create a Shelter.
     * @example
     * // Create one Shelter
     * const Shelter = await prisma.shelter.create({
     *   data: {
     *     // ... data to create a Shelter
     *   }
     * })
     * 
     */
    create<T extends ShelterCreateArgs>(args: SelectSubset<T, ShelterCreateArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shelters.
     * @param {ShelterCreateManyArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShelterCreateManyArgs>(args?: SelectSubset<T, ShelterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shelters and returns the data saved in the database.
     * @param {ShelterCreateManyAndReturnArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shelters and only return the `id`
     * const shelterWithIdOnly = await prisma.shelter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShelterCreateManyAndReturnArgs>(args?: SelectSubset<T, ShelterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shelter.
     * @param {ShelterDeleteArgs} args - Arguments to delete one Shelter.
     * @example
     * // Delete one Shelter
     * const Shelter = await prisma.shelter.delete({
     *   where: {
     *     // ... filter to delete one Shelter
     *   }
     * })
     * 
     */
    delete<T extends ShelterDeleteArgs>(args: SelectSubset<T, ShelterDeleteArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shelter.
     * @param {ShelterUpdateArgs} args - Arguments to update one Shelter.
     * @example
     * // Update one Shelter
     * const shelter = await prisma.shelter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShelterUpdateArgs>(args: SelectSubset<T, ShelterUpdateArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shelters.
     * @param {ShelterDeleteManyArgs} args - Arguments to filter Shelters to delete.
     * @example
     * // Delete a few Shelters
     * const { count } = await prisma.shelter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShelterDeleteManyArgs>(args?: SelectSubset<T, ShelterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShelterUpdateManyArgs>(args: SelectSubset<T, ShelterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters and returns the data updated in the database.
     * @param {ShelterUpdateManyAndReturnArgs} args - Arguments to update many Shelters.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shelters and only return the `id`
     * const shelterWithIdOnly = await prisma.shelter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShelterUpdateManyAndReturnArgs>(args: SelectSubset<T, ShelterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shelter.
     * @param {ShelterUpsertArgs} args - Arguments to update or create a Shelter.
     * @example
     * // Update or create a Shelter
     * const shelter = await prisma.shelter.upsert({
     *   create: {
     *     // ... data to create a Shelter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shelter we want to update
     *   }
     * })
     */
    upsert<T extends ShelterUpsertArgs>(args: SelectSubset<T, ShelterUpsertArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterCountArgs} args - Arguments to filter Shelters to count.
     * @example
     * // Count the number of Shelters
     * const count = await prisma.shelter.count({
     *   where: {
     *     // ... the filter for the Shelters we want to count
     *   }
     * })
    **/
    count<T extends ShelterCountArgs>(
      args?: Subset<T, ShelterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShelterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShelterAggregateArgs>(args: Subset<T, ShelterAggregateArgs>): Prisma.PrismaPromise<GetShelterAggregateType<T>>

    /**
     * Group by Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShelterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShelterGroupByArgs['orderBy'] }
        : { orderBy?: ShelterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShelterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShelterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shelter model
   */
  readonly fields: ShelterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shelter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShelterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Shelter$addressArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pets<T extends Shelter$petsArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Shelter$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Shelter$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Shelter$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shelter model
   */
  interface ShelterFieldRefs {
    readonly id: FieldRef<"Shelter", 'String'>
    readonly name: FieldRef<"Shelter", 'String'>
    readonly slug: FieldRef<"Shelter", 'String'>
    readonly email: FieldRef<"Shelter", 'String'>
    readonly phone: FieldRef<"Shelter", 'String'>
    readonly website: FieldRef<"Shelter", 'String'>
    readonly addressId: FieldRef<"Shelter", 'String'>
    readonly createdAt: FieldRef<"Shelter", 'DateTime'>
    readonly updatedAt: FieldRef<"Shelter", 'DateTime'>
    readonly deletedAt: FieldRef<"Shelter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shelter findUnique
   */
  export type ShelterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter findUniqueOrThrow
   */
  export type ShelterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter findFirst
   */
  export type ShelterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelters.
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Shelter findFirstOrThrow
   */
  export type ShelterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelter to fetch.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelters.
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Shelter findMany
   */
  export type ShelterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter, which Shelters to fetch.
     */
    where?: ShelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelters to fetch.
     */
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shelters.
     */
    cursor?: ShelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelters.
     */
    skip?: number
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Shelter create
   */
  export type ShelterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * The data needed to create a Shelter.
     */
    data: XOR<ShelterCreateInput, ShelterUncheckedCreateInput>
  }

  /**
   * Shelter createMany
   */
  export type ShelterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shelters.
     */
    data: ShelterCreateManyInput | ShelterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shelter createManyAndReturn
   */
  export type ShelterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * The data used to create many Shelters.
     */
    data: ShelterCreateManyInput | ShelterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelter update
   */
  export type ShelterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * The data needed to update a Shelter.
     */
    data: XOR<ShelterUpdateInput, ShelterUncheckedUpdateInput>
    /**
     * Choose, which Shelter to update.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter updateMany
   */
  export type ShelterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shelters.
     */
    data: XOR<ShelterUpdateManyMutationInput, ShelterUncheckedUpdateManyInput>
    /**
     * Filter which Shelters to update
     */
    where?: ShelterWhereInput
    /**
     * Limit how many Shelters to update.
     */
    limit?: number
  }

  /**
   * Shelter updateManyAndReturn
   */
  export type ShelterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * The data used to update Shelters.
     */
    data: XOR<ShelterUpdateManyMutationInput, ShelterUncheckedUpdateManyInput>
    /**
     * Filter which Shelters to update
     */
    where?: ShelterWhereInput
    /**
     * Limit how many Shelters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelter upsert
   */
  export type ShelterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * The filter to search for the Shelter to update in case it exists.
     */
    where: ShelterWhereUniqueInput
    /**
     * In case the Shelter found by the `where` argument doesn't exist, create a new Shelter with this data.
     */
    create: XOR<ShelterCreateInput, ShelterUncheckedCreateInput>
    /**
     * In case the Shelter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShelterUpdateInput, ShelterUncheckedUpdateInput>
  }

  /**
   * Shelter delete
   */
  export type ShelterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    /**
     * Filter which Shelter to delete.
     */
    where: ShelterWhereUniqueInput
  }

  /**
   * Shelter deleteMany
   */
  export type ShelterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelters to delete
     */
    where?: ShelterWhereInput
    /**
     * Limit how many Shelters to delete.
     */
    limit?: number
  }

  /**
   * Shelter.address
   */
  export type Shelter$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Shelter.pets
   */
  export type Shelter$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Shelter.applications
   */
  export type Shelter$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Shelter.auditLogs
   */
  export type Shelter$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Shelter without action
   */
  export type ShelterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    line1: string | null
    line2: string | null
    city: string | null
    state: string | null
    postal: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    line1: string | null
    line2: string | null
    city: string | null
    state: string | null
    postal: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    line1: number
    line2: number
    city: number
    state: number
    postal: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    line1?: true
    line2?: true
    city?: true
    state?: true
    postal?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    line1?: true
    line2?: true
    city?: true
    state?: true
    postal?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    line1?: true
    line2?: true
    city?: true
    state?: true
    postal?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    line1: string
    line2: string | null
    city: string
    state: string | null
    postal: string | null
    country: string
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    line1?: boolean
    line2?: boolean
    city?: boolean
    state?: boolean
    postal?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelters?: boolean | Address$sheltersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    line1?: boolean
    line2?: boolean
    city?: boolean
    state?: boolean
    postal?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    line1?: boolean
    line2?: boolean
    city?: boolean
    state?: boolean
    postal?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    line1?: boolean
    line2?: boolean
    city?: boolean
    state?: boolean
    postal?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "line1" | "line2" | "city" | "state" | "postal" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelters?: boolean | Address$sheltersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      shelters: Prisma.$ShelterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      line1: string
      line2: string | null
      city: string
      state: string | null
      postal: string | null
      country: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelters<T extends Address$sheltersArgs<ExtArgs> = {}>(args?: Subset<T, Address$sheltersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly line1: FieldRef<"Address", 'String'>
    readonly line2: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly postal: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.shelters
   */
  export type Address$sheltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    where?: ShelterWhereInput
    orderBy?: ShelterOrderByWithRelationInput | ShelterOrderByWithRelationInput[]
    cursor?: ShelterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    ageMonths: number | null
  }

  export type PetSumAggregateOutputType = {
    ageMonths: number | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    shelterId: string | null
    name: string | null
    species: $Enums.Species | null
    breed: string | null
    sex: $Enums.Sex | null
    size: $Enums.Size | null
    ageMonths: number | null
    color: string | null
    isNeutered: boolean | null
    isVaccinated: boolean | null
    status: $Enums.PetStatus | null
    description: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    shelterId: string | null
    name: string | null
    species: $Enums.Species | null
    breed: string | null
    sex: $Enums.Sex | null
    size: $Enums.Size | null
    ageMonths: number | null
    color: string | null
    isNeutered: boolean | null
    isVaccinated: boolean | null
    status: $Enums.PetStatus | null
    description: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    shelterId: number
    name: number
    species: number
    breed: number
    sex: number
    size: number
    ageMonths: number
    color: number
    isNeutered: number
    isVaccinated: number
    status: number
    description: number
    isPublished: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    ageMonths?: true
  }

  export type PetSumAggregateInputType = {
    ageMonths?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    shelterId?: true
    name?: true
    species?: true
    breed?: true
    sex?: true
    size?: true
    ageMonths?: true
    color?: true
    isNeutered?: true
    isVaccinated?: true
    status?: true
    description?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    shelterId?: true
    name?: true
    species?: true
    breed?: true
    sex?: true
    size?: true
    ageMonths?: true
    color?: true
    isNeutered?: true
    isVaccinated?: true
    status?: true
    description?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    shelterId?: true
    name?: true
    species?: true
    breed?: true
    sex?: true
    size?: true
    ageMonths?: true
    color?: true
    isNeutered?: true
    isVaccinated?: true
    status?: true
    description?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    shelterId: string
    name: string
    species: $Enums.Species
    breed: string | null
    sex: $Enums.Sex | null
    size: $Enums.Size | null
    ageMonths: number | null
    color: string | null
    isNeutered: boolean | null
    isVaccinated: boolean | null
    status: $Enums.PetStatus
    description: string | null
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    sex?: boolean
    size?: boolean
    ageMonths?: boolean
    color?: boolean
    isNeutered?: boolean
    isVaccinated?: boolean
    status?: boolean
    description?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    media?: boolean | Pet$mediaArgs<ExtArgs>
    applications?: boolean | Pet$applicationsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    sex?: boolean
    size?: boolean
    ageMonths?: boolean
    color?: boolean
    isNeutered?: boolean
    isVaccinated?: boolean
    status?: boolean
    description?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    sex?: boolean
    size?: boolean
    ageMonths?: boolean
    color?: boolean
    isNeutered?: boolean
    isVaccinated?: boolean
    status?: boolean
    description?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    shelterId?: boolean
    name?: boolean
    species?: boolean
    breed?: boolean
    sex?: boolean
    size?: boolean
    ageMonths?: boolean
    color?: boolean
    isNeutered?: boolean
    isVaccinated?: boolean
    status?: boolean
    description?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shelterId" | "name" | "species" | "breed" | "sex" | "size" | "ageMonths" | "color" | "isNeutered" | "isVaccinated" | "status" | "description" | "isPublished" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    media?: boolean | Pet$mediaArgs<ExtArgs>
    applications?: boolean | Pet$applicationsArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      shelter: Prisma.$ShelterPayload<ExtArgs>
      media: Prisma.$PetMediaPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shelterId: string
      name: string
      species: $Enums.Species
      breed: string | null
      sex: $Enums.Sex | null
      size: $Enums.Size | null
      ageMonths: number | null
      color: string | null
      isNeutered: boolean | null
      isVaccinated: boolean | null
      status: $Enums.PetStatus
      description: string | null
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelter<T extends ShelterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShelterDefaultArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Pet$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Pet$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Pet$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Pet$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly shelterId: FieldRef<"Pet", 'String'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly species: FieldRef<"Pet", 'Species'>
    readonly breed: FieldRef<"Pet", 'String'>
    readonly sex: FieldRef<"Pet", 'Sex'>
    readonly size: FieldRef<"Pet", 'Size'>
    readonly ageMonths: FieldRef<"Pet", 'Int'>
    readonly color: FieldRef<"Pet", 'String'>
    readonly isNeutered: FieldRef<"Pet", 'Boolean'>
    readonly isVaccinated: FieldRef<"Pet", 'Boolean'>
    readonly status: FieldRef<"Pet", 'PetStatus'>
    readonly description: FieldRef<"Pet", 'String'>
    readonly isPublished: FieldRef<"Pet", 'Boolean'>
    readonly createdAt: FieldRef<"Pet", 'DateTime'>
    readonly updatedAt: FieldRef<"Pet", 'DateTime'>
    readonly deletedAt: FieldRef<"Pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.media
   */
  export type Pet$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    where?: PetMediaWhereInput
    orderBy?: PetMediaOrderByWithRelationInput | PetMediaOrderByWithRelationInput[]
    cursor?: PetMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetMediaScalarFieldEnum | PetMediaScalarFieldEnum[]
  }

  /**
   * Pet.applications
   */
  export type Pet$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model PetMedia
   */

  export type AggregatePetMedia = {
    _count: PetMediaCountAggregateOutputType | null
    _avg: PetMediaAvgAggregateOutputType | null
    _sum: PetMediaSumAggregateOutputType | null
    _min: PetMediaMinAggregateOutputType | null
    _max: PetMediaMaxAggregateOutputType | null
  }

  export type PetMediaAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type PetMediaSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type PetMediaMinAggregateOutputType = {
    id: string | null
    petId: string | null
    url: string | null
    kind: $Enums.MediaKind | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type PetMediaMaxAggregateOutputType = {
    id: string | null
    petId: string | null
    url: string | null
    kind: $Enums.MediaKind | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type PetMediaCountAggregateOutputType = {
    id: number
    petId: number
    url: number
    kind: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type PetMediaAvgAggregateInputType = {
    sortOrder?: true
  }

  export type PetMediaSumAggregateInputType = {
    sortOrder?: true
  }

  export type PetMediaMinAggregateInputType = {
    id?: true
    petId?: true
    url?: true
    kind?: true
    sortOrder?: true
    createdAt?: true
  }

  export type PetMediaMaxAggregateInputType = {
    id?: true
    petId?: true
    url?: true
    kind?: true
    sortOrder?: true
    createdAt?: true
  }

  export type PetMediaCountAggregateInputType = {
    id?: true
    petId?: true
    url?: true
    kind?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type PetMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetMedia to aggregate.
     */
    where?: PetMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetMedias to fetch.
     */
    orderBy?: PetMediaOrderByWithRelationInput | PetMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PetMedias
    **/
    _count?: true | PetMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMediaMaxAggregateInputType
  }

  export type GetPetMediaAggregateType<T extends PetMediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePetMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetMedia[P]>
      : GetScalarType<T[P], AggregatePetMedia[P]>
  }




  export type PetMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetMediaWhereInput
    orderBy?: PetMediaOrderByWithAggregationInput | PetMediaOrderByWithAggregationInput[]
    by: PetMediaScalarFieldEnum[] | PetMediaScalarFieldEnum
    having?: PetMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetMediaCountAggregateInputType | true
    _avg?: PetMediaAvgAggregateInputType
    _sum?: PetMediaSumAggregateInputType
    _min?: PetMediaMinAggregateInputType
    _max?: PetMediaMaxAggregateInputType
  }

  export type PetMediaGroupByOutputType = {
    id: string
    petId: string
    url: string
    kind: $Enums.MediaKind
    sortOrder: number
    createdAt: Date
    _count: PetMediaCountAggregateOutputType | null
    _avg: PetMediaAvgAggregateOutputType | null
    _sum: PetMediaSumAggregateOutputType | null
    _min: PetMediaMinAggregateOutputType | null
    _max: PetMediaMaxAggregateOutputType | null
  }

  type GetPetMediaGroupByPayload<T extends PetMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetMediaGroupByOutputType[P]>
            : GetScalarType<T[P], PetMediaGroupByOutputType[P]>
        }
      >
    >


  export type PetMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petId?: boolean
    url?: boolean
    kind?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petMedia"]>

  export type PetMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petId?: boolean
    url?: boolean
    kind?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petMedia"]>

  export type PetMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    petId?: boolean
    url?: boolean
    kind?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petMedia"]>

  export type PetMediaSelectScalar = {
    id?: boolean
    petId?: boolean
    url?: boolean
    kind?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type PetMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "petId" | "url" | "kind" | "sortOrder" | "createdAt", ExtArgs["result"]["petMedia"]>
  export type PetMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type PetMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type PetMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $PetMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PetMedia"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      petId: string
      url: string
      kind: $Enums.MediaKind
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["petMedia"]>
    composites: {}
  }

  type PetMediaGetPayload<S extends boolean | null | undefined | PetMediaDefaultArgs> = $Result.GetResult<Prisma.$PetMediaPayload, S>

  type PetMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetMediaCountAggregateInputType | true
    }

  export interface PetMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PetMedia'], meta: { name: 'PetMedia' } }
    /**
     * Find zero or one PetMedia that matches the filter.
     * @param {PetMediaFindUniqueArgs} args - Arguments to find a PetMedia
     * @example
     * // Get one PetMedia
     * const petMedia = await prisma.petMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetMediaFindUniqueArgs>(args: SelectSubset<T, PetMediaFindUniqueArgs<ExtArgs>>): Prisma__PetMediaClient<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PetMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetMediaFindUniqueOrThrowArgs} args - Arguments to find a PetMedia
     * @example
     * // Get one PetMedia
     * const petMedia = await prisma.petMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, PetMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetMediaClient<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMediaFindFirstArgs} args - Arguments to find a PetMedia
     * @example
     * // Get one PetMedia
     * const petMedia = await prisma.petMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetMediaFindFirstArgs>(args?: SelectSubset<T, PetMediaFindFirstArgs<ExtArgs>>): Prisma__PetMediaClient<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PetMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMediaFindFirstOrThrowArgs} args - Arguments to find a PetMedia
     * @example
     * // Get one PetMedia
     * const petMedia = await prisma.petMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, PetMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetMediaClient<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PetMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PetMedias
     * const petMedias = await prisma.petMedia.findMany()
     * 
     * // Get first 10 PetMedias
     * const petMedias = await prisma.petMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petMediaWithIdOnly = await prisma.petMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetMediaFindManyArgs>(args?: SelectSubset<T, PetMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PetMedia.
     * @param {PetMediaCreateArgs} args - Arguments to create a PetMedia.
     * @example
     * // Create one PetMedia
     * const PetMedia = await prisma.petMedia.create({
     *   data: {
     *     // ... data to create a PetMedia
     *   }
     * })
     * 
     */
    create<T extends PetMediaCreateArgs>(args: SelectSubset<T, PetMediaCreateArgs<ExtArgs>>): Prisma__PetMediaClient<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PetMedias.
     * @param {PetMediaCreateManyArgs} args - Arguments to create many PetMedias.
     * @example
     * // Create many PetMedias
     * const petMedia = await prisma.petMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetMediaCreateManyArgs>(args?: SelectSubset<T, PetMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PetMedias and returns the data saved in the database.
     * @param {PetMediaCreateManyAndReturnArgs} args - Arguments to create many PetMedias.
     * @example
     * // Create many PetMedias
     * const petMedia = await prisma.petMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PetMedias and only return the `id`
     * const petMediaWithIdOnly = await prisma.petMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, PetMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PetMedia.
     * @param {PetMediaDeleteArgs} args - Arguments to delete one PetMedia.
     * @example
     * // Delete one PetMedia
     * const PetMedia = await prisma.petMedia.delete({
     *   where: {
     *     // ... filter to delete one PetMedia
     *   }
     * })
     * 
     */
    delete<T extends PetMediaDeleteArgs>(args: SelectSubset<T, PetMediaDeleteArgs<ExtArgs>>): Prisma__PetMediaClient<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PetMedia.
     * @param {PetMediaUpdateArgs} args - Arguments to update one PetMedia.
     * @example
     * // Update one PetMedia
     * const petMedia = await prisma.petMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetMediaUpdateArgs>(args: SelectSubset<T, PetMediaUpdateArgs<ExtArgs>>): Prisma__PetMediaClient<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PetMedias.
     * @param {PetMediaDeleteManyArgs} args - Arguments to filter PetMedias to delete.
     * @example
     * // Delete a few PetMedias
     * const { count } = await prisma.petMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetMediaDeleteManyArgs>(args?: SelectSubset<T, PetMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PetMedias
     * const petMedia = await prisma.petMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetMediaUpdateManyArgs>(args: SelectSubset<T, PetMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PetMedias and returns the data updated in the database.
     * @param {PetMediaUpdateManyAndReturnArgs} args - Arguments to update many PetMedias.
     * @example
     * // Update many PetMedias
     * const petMedia = await prisma.petMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PetMedias and only return the `id`
     * const petMediaWithIdOnly = await prisma.petMedia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, PetMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PetMedia.
     * @param {PetMediaUpsertArgs} args - Arguments to update or create a PetMedia.
     * @example
     * // Update or create a PetMedia
     * const petMedia = await prisma.petMedia.upsert({
     *   create: {
     *     // ... data to create a PetMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PetMedia we want to update
     *   }
     * })
     */
    upsert<T extends PetMediaUpsertArgs>(args: SelectSubset<T, PetMediaUpsertArgs<ExtArgs>>): Prisma__PetMediaClient<$Result.GetResult<Prisma.$PetMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PetMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMediaCountArgs} args - Arguments to filter PetMedias to count.
     * @example
     * // Count the number of PetMedias
     * const count = await prisma.petMedia.count({
     *   where: {
     *     // ... the filter for the PetMedias we want to count
     *   }
     * })
    **/
    count<T extends PetMediaCountArgs>(
      args?: Subset<T, PetMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PetMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetMediaAggregateArgs>(args: Subset<T, PetMediaAggregateArgs>): Prisma.PrismaPromise<GetPetMediaAggregateType<T>>

    /**
     * Group by PetMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetMediaGroupByArgs['orderBy'] }
        : { orderBy?: PetMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PetMedia model
   */
  readonly fields: PetMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PetMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PetMedia model
   */
  interface PetMediaFieldRefs {
    readonly id: FieldRef<"PetMedia", 'String'>
    readonly petId: FieldRef<"PetMedia", 'String'>
    readonly url: FieldRef<"PetMedia", 'String'>
    readonly kind: FieldRef<"PetMedia", 'MediaKind'>
    readonly sortOrder: FieldRef<"PetMedia", 'Int'>
    readonly createdAt: FieldRef<"PetMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PetMedia findUnique
   */
  export type PetMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    /**
     * Filter, which PetMedia to fetch.
     */
    where: PetMediaWhereUniqueInput
  }

  /**
   * PetMedia findUniqueOrThrow
   */
  export type PetMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    /**
     * Filter, which PetMedia to fetch.
     */
    where: PetMediaWhereUniqueInput
  }

  /**
   * PetMedia findFirst
   */
  export type PetMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    /**
     * Filter, which PetMedia to fetch.
     */
    where?: PetMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetMedias to fetch.
     */
    orderBy?: PetMediaOrderByWithRelationInput | PetMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetMedias.
     */
    cursor?: PetMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetMedias.
     */
    distinct?: PetMediaScalarFieldEnum | PetMediaScalarFieldEnum[]
  }

  /**
   * PetMedia findFirstOrThrow
   */
  export type PetMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    /**
     * Filter, which PetMedia to fetch.
     */
    where?: PetMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetMedias to fetch.
     */
    orderBy?: PetMediaOrderByWithRelationInput | PetMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PetMedias.
     */
    cursor?: PetMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PetMedias.
     */
    distinct?: PetMediaScalarFieldEnum | PetMediaScalarFieldEnum[]
  }

  /**
   * PetMedia findMany
   */
  export type PetMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    /**
     * Filter, which PetMedias to fetch.
     */
    where?: PetMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PetMedias to fetch.
     */
    orderBy?: PetMediaOrderByWithRelationInput | PetMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PetMedias.
     */
    cursor?: PetMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PetMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PetMedias.
     */
    skip?: number
    distinct?: PetMediaScalarFieldEnum | PetMediaScalarFieldEnum[]
  }

  /**
   * PetMedia create
   */
  export type PetMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a PetMedia.
     */
    data: XOR<PetMediaCreateInput, PetMediaUncheckedCreateInput>
  }

  /**
   * PetMedia createMany
   */
  export type PetMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PetMedias.
     */
    data: PetMediaCreateManyInput | PetMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PetMedia createManyAndReturn
   */
  export type PetMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * The data used to create many PetMedias.
     */
    data: PetMediaCreateManyInput | PetMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetMedia update
   */
  export type PetMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a PetMedia.
     */
    data: XOR<PetMediaUpdateInput, PetMediaUncheckedUpdateInput>
    /**
     * Choose, which PetMedia to update.
     */
    where: PetMediaWhereUniqueInput
  }

  /**
   * PetMedia updateMany
   */
  export type PetMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PetMedias.
     */
    data: XOR<PetMediaUpdateManyMutationInput, PetMediaUncheckedUpdateManyInput>
    /**
     * Filter which PetMedias to update
     */
    where?: PetMediaWhereInput
    /**
     * Limit how many PetMedias to update.
     */
    limit?: number
  }

  /**
   * PetMedia updateManyAndReturn
   */
  export type PetMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * The data used to update PetMedias.
     */
    data: XOR<PetMediaUpdateManyMutationInput, PetMediaUncheckedUpdateManyInput>
    /**
     * Filter which PetMedias to update
     */
    where?: PetMediaWhereInput
    /**
     * Limit how many PetMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PetMedia upsert
   */
  export type PetMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the PetMedia to update in case it exists.
     */
    where: PetMediaWhereUniqueInput
    /**
     * In case the PetMedia found by the `where` argument doesn't exist, create a new PetMedia with this data.
     */
    create: XOR<PetMediaCreateInput, PetMediaUncheckedCreateInput>
    /**
     * In case the PetMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetMediaUpdateInput, PetMediaUncheckedUpdateInput>
  }

  /**
   * PetMedia delete
   */
  export type PetMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
    /**
     * Filter which PetMedia to delete.
     */
    where: PetMediaWhereUniqueInput
  }

  /**
   * PetMedia deleteMany
   */
  export type PetMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PetMedias to delete
     */
    where?: PetMediaWhereInput
    /**
     * Limit how many PetMedias to delete.
     */
    limit?: number
  }

  /**
   * PetMedia without action
   */
  export type PetMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetMedia
     */
    select?: PetMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PetMedia
     */
    omit?: PetMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetMediaInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    petValue: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    petValue: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    shelterId: string | null
    petId: string | null
    userId: string | null
    applicantName: string | null
    applicantEmail: string | null
    applicantPhone: string | null
    applicantAddress: string | null
    message: string | null
    petValue: number | null
    status: $Enums.ApplicationStatus | null
    reviewedById: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    shelterId: string | null
    petId: string | null
    userId: string | null
    applicantName: string | null
    applicantEmail: string | null
    applicantPhone: string | null
    applicantAddress: string | null
    message: string | null
    petValue: number | null
    status: $Enums.ApplicationStatus | null
    reviewedById: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    shelterId: number
    petId: number
    userId: number
    applicantName: number
    applicantEmail: number
    applicantPhone: number
    applicantAddress: number
    message: number
    petValue: number
    status: number
    reviewedById: number
    reviewedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    petValue?: true
  }

  export type ApplicationSumAggregateInputType = {
    petValue?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    shelterId?: true
    petId?: true
    userId?: true
    applicantName?: true
    applicantEmail?: true
    applicantPhone?: true
    applicantAddress?: true
    message?: true
    petValue?: true
    status?: true
    reviewedById?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    shelterId?: true
    petId?: true
    userId?: true
    applicantName?: true
    applicantEmail?: true
    applicantPhone?: true
    applicantAddress?: true
    message?: true
    petValue?: true
    status?: true
    reviewedById?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    shelterId?: true
    petId?: true
    userId?: true
    applicantName?: true
    applicantEmail?: true
    applicantPhone?: true
    applicantAddress?: true
    message?: true
    petValue?: true
    status?: true
    reviewedById?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    shelterId: string
    petId: string
    userId: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone: string | null
    applicantAddress: string | null
    message: string | null
    petValue: number | null
    status: $Enums.ApplicationStatus
    reviewedById: string | null
    reviewedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    petId?: boolean
    userId?: boolean
    applicantName?: boolean
    applicantEmail?: boolean
    applicantPhone?: boolean
    applicantAddress?: boolean
    message?: boolean
    petValue?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    user?: boolean | Application$userArgs<ExtArgs>
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
    decisions?: boolean | Application$decisionsArgs<ExtArgs>
    auditLogs?: boolean | Application$auditLogsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    petId?: boolean
    userId?: boolean
    applicantName?: boolean
    applicantEmail?: boolean
    applicantPhone?: boolean
    applicantAddress?: boolean
    message?: boolean
    petValue?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    user?: boolean | Application$userArgs<ExtArgs>
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    petId?: boolean
    userId?: boolean
    applicantName?: boolean
    applicantEmail?: boolean
    applicantPhone?: boolean
    applicantAddress?: boolean
    message?: boolean
    petValue?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    user?: boolean | Application$userArgs<ExtArgs>
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    shelterId?: boolean
    petId?: boolean
    userId?: boolean
    applicantName?: boolean
    applicantEmail?: boolean
    applicantPhone?: boolean
    applicantAddress?: boolean
    message?: boolean
    petValue?: boolean
    status?: boolean
    reviewedById?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shelterId" | "petId" | "userId" | "applicantName" | "applicantEmail" | "applicantPhone" | "applicantAddress" | "message" | "petValue" | "status" | "reviewedById" | "reviewedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    user?: boolean | Application$userArgs<ExtArgs>
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
    decisions?: boolean | Application$decisionsArgs<ExtArgs>
    auditLogs?: boolean | Application$auditLogsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    user?: boolean | Application$userArgs<ExtArgs>
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | ShelterDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
    user?: boolean | Application$userArgs<ExtArgs>
    reviewedBy?: boolean | Application$reviewedByArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      shelter: Prisma.$ShelterPayload<ExtArgs>
      pet: Prisma.$PetPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      reviewedBy: Prisma.$UserPayload<ExtArgs> | null
      decisions: Prisma.$ApplicationDecisionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shelterId: string
      petId: string
      userId: string | null
      applicantName: string
      applicantEmail: string
      applicantPhone: string | null
      applicantAddress: string | null
      message: string | null
      petValue: number | null
      status: $Enums.ApplicationStatus
      reviewedById: string | null
      reviewedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelter<T extends ShelterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShelterDefaultArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Application$userArgs<ExtArgs> = {}>(args?: Subset<T, Application$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewedBy<T extends Application$reviewedByArgs<ExtArgs> = {}>(args?: Subset<T, Application$reviewedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    decisions<T extends Application$decisionsArgs<ExtArgs> = {}>(args?: Subset<T, Application$decisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Application$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Application$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly shelterId: FieldRef<"Application", 'String'>
    readonly petId: FieldRef<"Application", 'String'>
    readonly userId: FieldRef<"Application", 'String'>
    readonly applicantName: FieldRef<"Application", 'String'>
    readonly applicantEmail: FieldRef<"Application", 'String'>
    readonly applicantPhone: FieldRef<"Application", 'String'>
    readonly applicantAddress: FieldRef<"Application", 'String'>
    readonly message: FieldRef<"Application", 'String'>
    readonly petValue: FieldRef<"Application", 'Float'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly reviewedById: FieldRef<"Application", 'String'>
    readonly reviewedAt: FieldRef<"Application", 'DateTime'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
    readonly updatedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.user
   */
  export type Application$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Application.reviewedBy
   */
  export type Application$reviewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Application.decisions
   */
  export type Application$decisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    where?: ApplicationDecisionWhereInput
    orderBy?: ApplicationDecisionOrderByWithRelationInput | ApplicationDecisionOrderByWithRelationInput[]
    cursor?: ApplicationDecisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationDecisionScalarFieldEnum | ApplicationDecisionScalarFieldEnum[]
  }

  /**
   * Application.auditLogs
   */
  export type Application$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationDecision
   */

  export type AggregateApplicationDecision = {
    _count: ApplicationDecisionCountAggregateOutputType | null
    _min: ApplicationDecisionMinAggregateOutputType | null
    _max: ApplicationDecisionMaxAggregateOutputType | null
  }

  export type ApplicationDecisionMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    status: $Enums.ApplicationStatus | null
    note: string | null
    decidedById: string | null
    createdAt: Date | null
  }

  export type ApplicationDecisionMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    status: $Enums.ApplicationStatus | null
    note: string | null
    decidedById: string | null
    createdAt: Date | null
  }

  export type ApplicationDecisionCountAggregateOutputType = {
    id: number
    applicationId: number
    status: number
    note: number
    decidedById: number
    createdAt: number
    _all: number
  }


  export type ApplicationDecisionMinAggregateInputType = {
    id?: true
    applicationId?: true
    status?: true
    note?: true
    decidedById?: true
    createdAt?: true
  }

  export type ApplicationDecisionMaxAggregateInputType = {
    id?: true
    applicationId?: true
    status?: true
    note?: true
    decidedById?: true
    createdAt?: true
  }

  export type ApplicationDecisionCountAggregateInputType = {
    id?: true
    applicationId?: true
    status?: true
    note?: true
    decidedById?: true
    createdAt?: true
    _all?: true
  }

  export type ApplicationDecisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDecision to aggregate.
     */
    where?: ApplicationDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDecisions to fetch.
     */
    orderBy?: ApplicationDecisionOrderByWithRelationInput | ApplicationDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDecisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationDecisions
    **/
    _count?: true | ApplicationDecisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationDecisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationDecisionMaxAggregateInputType
  }

  export type GetApplicationDecisionAggregateType<T extends ApplicationDecisionAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationDecision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationDecision[P]>
      : GetScalarType<T[P], AggregateApplicationDecision[P]>
  }




  export type ApplicationDecisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationDecisionWhereInput
    orderBy?: ApplicationDecisionOrderByWithAggregationInput | ApplicationDecisionOrderByWithAggregationInput[]
    by: ApplicationDecisionScalarFieldEnum[] | ApplicationDecisionScalarFieldEnum
    having?: ApplicationDecisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationDecisionCountAggregateInputType | true
    _min?: ApplicationDecisionMinAggregateInputType
    _max?: ApplicationDecisionMaxAggregateInputType
  }

  export type ApplicationDecisionGroupByOutputType = {
    id: string
    applicationId: string
    status: $Enums.ApplicationStatus
    note: string | null
    decidedById: string | null
    createdAt: Date
    _count: ApplicationDecisionCountAggregateOutputType | null
    _min: ApplicationDecisionMinAggregateOutputType | null
    _max: ApplicationDecisionMaxAggregateOutputType | null
  }

  type GetApplicationDecisionGroupByPayload<T extends ApplicationDecisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationDecisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationDecisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationDecisionGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationDecisionGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationDecisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    status?: boolean
    note?: boolean
    decidedById?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    decidedBy?: boolean | ApplicationDecision$decidedByArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDecision"]>

  export type ApplicationDecisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    status?: boolean
    note?: boolean
    decidedById?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    decidedBy?: boolean | ApplicationDecision$decidedByArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDecision"]>

  export type ApplicationDecisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    status?: boolean
    note?: boolean
    decidedById?: boolean
    createdAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    decidedBy?: boolean | ApplicationDecision$decidedByArgs<ExtArgs>
  }, ExtArgs["result"]["applicationDecision"]>

  export type ApplicationDecisionSelectScalar = {
    id?: boolean
    applicationId?: boolean
    status?: boolean
    note?: boolean
    decidedById?: boolean
    createdAt?: boolean
  }

  export type ApplicationDecisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "status" | "note" | "decidedById" | "createdAt", ExtArgs["result"]["applicationDecision"]>
  export type ApplicationDecisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    decidedBy?: boolean | ApplicationDecision$decidedByArgs<ExtArgs>
  }
  export type ApplicationDecisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    decidedBy?: boolean | ApplicationDecision$decidedByArgs<ExtArgs>
  }
  export type ApplicationDecisionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    decidedBy?: boolean | ApplicationDecision$decidedByArgs<ExtArgs>
  }

  export type $ApplicationDecisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationDecision"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      decidedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      status: $Enums.ApplicationStatus
      note: string | null
      decidedById: string | null
      createdAt: Date
    }, ExtArgs["result"]["applicationDecision"]>
    composites: {}
  }

  type ApplicationDecisionGetPayload<S extends boolean | null | undefined | ApplicationDecisionDefaultArgs> = $Result.GetResult<Prisma.$ApplicationDecisionPayload, S>

  type ApplicationDecisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationDecisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationDecisionCountAggregateInputType | true
    }

  export interface ApplicationDecisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationDecision'], meta: { name: 'ApplicationDecision' } }
    /**
     * Find zero or one ApplicationDecision that matches the filter.
     * @param {ApplicationDecisionFindUniqueArgs} args - Arguments to find a ApplicationDecision
     * @example
     * // Get one ApplicationDecision
     * const applicationDecision = await prisma.applicationDecision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationDecisionFindUniqueArgs>(args: SelectSubset<T, ApplicationDecisionFindUniqueArgs<ExtArgs>>): Prisma__ApplicationDecisionClient<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationDecision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationDecisionFindUniqueOrThrowArgs} args - Arguments to find a ApplicationDecision
     * @example
     * // Get one ApplicationDecision
     * const applicationDecision = await prisma.applicationDecision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationDecisionFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationDecisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationDecisionClient<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationDecision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDecisionFindFirstArgs} args - Arguments to find a ApplicationDecision
     * @example
     * // Get one ApplicationDecision
     * const applicationDecision = await prisma.applicationDecision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationDecisionFindFirstArgs>(args?: SelectSubset<T, ApplicationDecisionFindFirstArgs<ExtArgs>>): Prisma__ApplicationDecisionClient<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationDecision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDecisionFindFirstOrThrowArgs} args - Arguments to find a ApplicationDecision
     * @example
     * // Get one ApplicationDecision
     * const applicationDecision = await prisma.applicationDecision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationDecisionFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationDecisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationDecisionClient<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationDecisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDecisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationDecisions
     * const applicationDecisions = await prisma.applicationDecision.findMany()
     * 
     * // Get first 10 ApplicationDecisions
     * const applicationDecisions = await prisma.applicationDecision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationDecisionWithIdOnly = await prisma.applicationDecision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationDecisionFindManyArgs>(args?: SelectSubset<T, ApplicationDecisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationDecision.
     * @param {ApplicationDecisionCreateArgs} args - Arguments to create a ApplicationDecision.
     * @example
     * // Create one ApplicationDecision
     * const ApplicationDecision = await prisma.applicationDecision.create({
     *   data: {
     *     // ... data to create a ApplicationDecision
     *   }
     * })
     * 
     */
    create<T extends ApplicationDecisionCreateArgs>(args: SelectSubset<T, ApplicationDecisionCreateArgs<ExtArgs>>): Prisma__ApplicationDecisionClient<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationDecisions.
     * @param {ApplicationDecisionCreateManyArgs} args - Arguments to create many ApplicationDecisions.
     * @example
     * // Create many ApplicationDecisions
     * const applicationDecision = await prisma.applicationDecision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationDecisionCreateManyArgs>(args?: SelectSubset<T, ApplicationDecisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationDecisions and returns the data saved in the database.
     * @param {ApplicationDecisionCreateManyAndReturnArgs} args - Arguments to create many ApplicationDecisions.
     * @example
     * // Create many ApplicationDecisions
     * const applicationDecision = await prisma.applicationDecision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationDecisions and only return the `id`
     * const applicationDecisionWithIdOnly = await prisma.applicationDecision.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationDecisionCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationDecisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationDecision.
     * @param {ApplicationDecisionDeleteArgs} args - Arguments to delete one ApplicationDecision.
     * @example
     * // Delete one ApplicationDecision
     * const ApplicationDecision = await prisma.applicationDecision.delete({
     *   where: {
     *     // ... filter to delete one ApplicationDecision
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDecisionDeleteArgs>(args: SelectSubset<T, ApplicationDecisionDeleteArgs<ExtArgs>>): Prisma__ApplicationDecisionClient<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationDecision.
     * @param {ApplicationDecisionUpdateArgs} args - Arguments to update one ApplicationDecision.
     * @example
     * // Update one ApplicationDecision
     * const applicationDecision = await prisma.applicationDecision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationDecisionUpdateArgs>(args: SelectSubset<T, ApplicationDecisionUpdateArgs<ExtArgs>>): Prisma__ApplicationDecisionClient<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationDecisions.
     * @param {ApplicationDecisionDeleteManyArgs} args - Arguments to filter ApplicationDecisions to delete.
     * @example
     * // Delete a few ApplicationDecisions
     * const { count } = await prisma.applicationDecision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDecisionDeleteManyArgs>(args?: SelectSubset<T, ApplicationDecisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationDecisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDecisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationDecisions
     * const applicationDecision = await prisma.applicationDecision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationDecisionUpdateManyArgs>(args: SelectSubset<T, ApplicationDecisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationDecisions and returns the data updated in the database.
     * @param {ApplicationDecisionUpdateManyAndReturnArgs} args - Arguments to update many ApplicationDecisions.
     * @example
     * // Update many ApplicationDecisions
     * const applicationDecision = await prisma.applicationDecision.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationDecisions and only return the `id`
     * const applicationDecisionWithIdOnly = await prisma.applicationDecision.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationDecisionUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationDecisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationDecision.
     * @param {ApplicationDecisionUpsertArgs} args - Arguments to update or create a ApplicationDecision.
     * @example
     * // Update or create a ApplicationDecision
     * const applicationDecision = await prisma.applicationDecision.upsert({
     *   create: {
     *     // ... data to create a ApplicationDecision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationDecision we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationDecisionUpsertArgs>(args: SelectSubset<T, ApplicationDecisionUpsertArgs<ExtArgs>>): Prisma__ApplicationDecisionClient<$Result.GetResult<Prisma.$ApplicationDecisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationDecisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDecisionCountArgs} args - Arguments to filter ApplicationDecisions to count.
     * @example
     * // Count the number of ApplicationDecisions
     * const count = await prisma.applicationDecision.count({
     *   where: {
     *     // ... the filter for the ApplicationDecisions we want to count
     *   }
     * })
    **/
    count<T extends ApplicationDecisionCountArgs>(
      args?: Subset<T, ApplicationDecisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationDecisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationDecision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDecisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationDecisionAggregateArgs>(args: Subset<T, ApplicationDecisionAggregateArgs>): Prisma.PrismaPromise<GetApplicationDecisionAggregateType<T>>

    /**
     * Group by ApplicationDecision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationDecisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationDecisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationDecisionGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationDecisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationDecisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationDecisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationDecision model
   */
  readonly fields: ApplicationDecisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationDecision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationDecisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    decidedBy<T extends ApplicationDecision$decidedByArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDecision$decidedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicationDecision model
   */
  interface ApplicationDecisionFieldRefs {
    readonly id: FieldRef<"ApplicationDecision", 'String'>
    readonly applicationId: FieldRef<"ApplicationDecision", 'String'>
    readonly status: FieldRef<"ApplicationDecision", 'ApplicationStatus'>
    readonly note: FieldRef<"ApplicationDecision", 'String'>
    readonly decidedById: FieldRef<"ApplicationDecision", 'String'>
    readonly createdAt: FieldRef<"ApplicationDecision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationDecision findUnique
   */
  export type ApplicationDecisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDecision to fetch.
     */
    where: ApplicationDecisionWhereUniqueInput
  }

  /**
   * ApplicationDecision findUniqueOrThrow
   */
  export type ApplicationDecisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDecision to fetch.
     */
    where: ApplicationDecisionWhereUniqueInput
  }

  /**
   * ApplicationDecision findFirst
   */
  export type ApplicationDecisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDecision to fetch.
     */
    where?: ApplicationDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDecisions to fetch.
     */
    orderBy?: ApplicationDecisionOrderByWithRelationInput | ApplicationDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDecisions.
     */
    cursor?: ApplicationDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDecisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDecisions.
     */
    distinct?: ApplicationDecisionScalarFieldEnum | ApplicationDecisionScalarFieldEnum[]
  }

  /**
   * ApplicationDecision findFirstOrThrow
   */
  export type ApplicationDecisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDecision to fetch.
     */
    where?: ApplicationDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDecisions to fetch.
     */
    orderBy?: ApplicationDecisionOrderByWithRelationInput | ApplicationDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationDecisions.
     */
    cursor?: ApplicationDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDecisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationDecisions.
     */
    distinct?: ApplicationDecisionScalarFieldEnum | ApplicationDecisionScalarFieldEnum[]
  }

  /**
   * ApplicationDecision findMany
   */
  export type ApplicationDecisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationDecisions to fetch.
     */
    where?: ApplicationDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationDecisions to fetch.
     */
    orderBy?: ApplicationDecisionOrderByWithRelationInput | ApplicationDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationDecisions.
     */
    cursor?: ApplicationDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationDecisions.
     */
    skip?: number
    distinct?: ApplicationDecisionScalarFieldEnum | ApplicationDecisionScalarFieldEnum[]
  }

  /**
   * ApplicationDecision create
   */
  export type ApplicationDecisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationDecision.
     */
    data: XOR<ApplicationDecisionCreateInput, ApplicationDecisionUncheckedCreateInput>
  }

  /**
   * ApplicationDecision createMany
   */
  export type ApplicationDecisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationDecisions.
     */
    data: ApplicationDecisionCreateManyInput | ApplicationDecisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationDecision createManyAndReturn
   */
  export type ApplicationDecisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationDecisions.
     */
    data: ApplicationDecisionCreateManyInput | ApplicationDecisionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationDecision update
   */
  export type ApplicationDecisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationDecision.
     */
    data: XOR<ApplicationDecisionUpdateInput, ApplicationDecisionUncheckedUpdateInput>
    /**
     * Choose, which ApplicationDecision to update.
     */
    where: ApplicationDecisionWhereUniqueInput
  }

  /**
   * ApplicationDecision updateMany
   */
  export type ApplicationDecisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationDecisions.
     */
    data: XOR<ApplicationDecisionUpdateManyMutationInput, ApplicationDecisionUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationDecisions to update
     */
    where?: ApplicationDecisionWhereInput
    /**
     * Limit how many ApplicationDecisions to update.
     */
    limit?: number
  }

  /**
   * ApplicationDecision updateManyAndReturn
   */
  export type ApplicationDecisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationDecisions.
     */
    data: XOR<ApplicationDecisionUpdateManyMutationInput, ApplicationDecisionUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationDecisions to update
     */
    where?: ApplicationDecisionWhereInput
    /**
     * Limit how many ApplicationDecisions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationDecision upsert
   */
  export type ApplicationDecisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationDecision to update in case it exists.
     */
    where: ApplicationDecisionWhereUniqueInput
    /**
     * In case the ApplicationDecision found by the `where` argument doesn't exist, create a new ApplicationDecision with this data.
     */
    create: XOR<ApplicationDecisionCreateInput, ApplicationDecisionUncheckedCreateInput>
    /**
     * In case the ApplicationDecision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationDecisionUpdateInput, ApplicationDecisionUncheckedUpdateInput>
  }

  /**
   * ApplicationDecision delete
   */
  export type ApplicationDecisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
    /**
     * Filter which ApplicationDecision to delete.
     */
    where: ApplicationDecisionWhereUniqueInput
  }

  /**
   * ApplicationDecision deleteMany
   */
  export type ApplicationDecisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationDecisions to delete
     */
    where?: ApplicationDecisionWhereInput
    /**
     * Limit how many ApplicationDecisions to delete.
     */
    limit?: number
  }

  /**
   * ApplicationDecision.decidedBy
   */
  export type ApplicationDecision$decidedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ApplicationDecision without action
   */
  export type ApplicationDecisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationDecision
     */
    select?: ApplicationDecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationDecision
     */
    omit?: ApplicationDecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationDecisionInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    shelterId: string | null
    actorId: string | null
    applicationId: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    shelterId: string | null
    actorId: string | null
    applicationId: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    shelterId: number
    actorId: number
    applicationId: number
    entityType: number
    entityId: number
    action: number
    before: number
    after: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    shelterId?: true
    actorId?: true
    applicationId?: true
    entityType?: true
    entityId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    shelterId?: true
    actorId?: true
    applicationId?: true
    entityType?: true
    entityId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    shelterId?: true
    actorId?: true
    applicationId?: true
    entityType?: true
    entityId?: true
    action?: true
    before?: true
    after?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    shelterId: string | null
    actorId: string | null
    applicationId: string | null
    entityType: string
    entityId: string
    action: string
    before: JsonValue | null
    after: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    actorId?: boolean
    applicationId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    shelter?: boolean | AuditLog$shelterArgs<ExtArgs>
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
    application?: boolean | AuditLog$applicationArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    actorId?: boolean
    applicationId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    shelter?: boolean | AuditLog$shelterArgs<ExtArgs>
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
    application?: boolean | AuditLog$applicationArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shelterId?: boolean
    actorId?: boolean
    applicationId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
    shelter?: boolean | AuditLog$shelterArgs<ExtArgs>
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
    application?: boolean | AuditLog$applicationArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    shelterId?: boolean
    actorId?: boolean
    applicationId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    before?: boolean
    after?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shelterId" | "actorId" | "applicationId" | "entityType" | "entityId" | "action" | "before" | "after" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | AuditLog$shelterArgs<ExtArgs>
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
    application?: boolean | AuditLog$applicationArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | AuditLog$shelterArgs<ExtArgs>
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
    application?: boolean | AuditLog$applicationArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shelter?: boolean | AuditLog$shelterArgs<ExtArgs>
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
    application?: boolean | AuditLog$applicationArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      shelter: Prisma.$ShelterPayload<ExtArgs> | null
      actor: Prisma.$UserPayload<ExtArgs> | null
      application: Prisma.$ApplicationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shelterId: string | null
      actorId: string | null
      applicationId: string | null
      entityType: string
      entityId: string
      action: string
      before: Prisma.JsonValue | null
      after: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shelter<T extends AuditLog$shelterArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$shelterArgs<ExtArgs>>): Prisma__ShelterClient<$Result.GetResult<Prisma.$ShelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    actor<T extends AuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    application<T extends AuditLog$applicationArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$applicationArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly shelterId: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly applicationId: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly before: FieldRef<"AuditLog", 'Json'>
    readonly after: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.shelter
   */
  export type AuditLog$shelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelter
     */
    select?: ShelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelter
     */
    omit?: ShelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelterInclude<ExtArgs> | null
    where?: ShelterWhereInput
  }

  /**
   * AuditLog.actor
   */
  export type AuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog.application
   */
  export type AuditLog$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShelterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    phone: 'phone',
    website: 'website',
    addressId: 'addressId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ShelterScalarFieldEnum = (typeof ShelterScalarFieldEnum)[keyof typeof ShelterScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    line1: 'line1',
    line2: 'line2',
    city: 'city',
    state: 'state',
    postal: 'postal',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    shelterId: 'shelterId',
    name: 'name',
    species: 'species',
    breed: 'breed',
    sex: 'sex',
    size: 'size',
    ageMonths: 'ageMonths',
    color: 'color',
    isNeutered: 'isNeutered',
    isVaccinated: 'isVaccinated',
    status: 'status',
    description: 'description',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const PetMediaScalarFieldEnum: {
    id: 'id',
    petId: 'petId',
    url: 'url',
    kind: 'kind',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type PetMediaScalarFieldEnum = (typeof PetMediaScalarFieldEnum)[keyof typeof PetMediaScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    shelterId: 'shelterId',
    petId: 'petId',
    userId: 'userId',
    applicantName: 'applicantName',
    applicantEmail: 'applicantEmail',
    applicantPhone: 'applicantPhone',
    applicantAddress: 'applicantAddress',
    message: 'message',
    petValue: 'petValue',
    status: 'status',
    reviewedById: 'reviewedById',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const ApplicationDecisionScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    status: 'status',
    note: 'note',
    decidedById: 'decidedById',
    createdAt: 'createdAt'
  };

  export type ApplicationDecisionScalarFieldEnum = (typeof ApplicationDecisionScalarFieldEnum)[keyof typeof ApplicationDecisionScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    shelterId: 'shelterId',
    actorId: 'actorId',
    applicationId: 'applicationId',
    entityType: 'entityType',
    entityId: 'entityId',
    action: 'action',
    before: 'before',
    after: 'after',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Species'
   */
  export type EnumSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Species'>
    


  /**
   * Reference to a field of type 'Species[]'
   */
  export type ListEnumSpeciesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Species[]'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Sex[]'
   */
  export type ListEnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex[]'>
    


  /**
   * Reference to a field of type 'Size'
   */
  export type EnumSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Size'>
    


  /**
   * Reference to a field of type 'Size[]'
   */
  export type ListEnumSizeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Size[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PetStatus'
   */
  export type EnumPetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetStatus'>
    


  /**
   * Reference to a field of type 'PetStatus[]'
   */
  export type ListEnumPetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetStatus[]'>
    


  /**
   * Reference to a field of type 'MediaKind'
   */
  export type EnumMediaKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaKind'>
    


  /**
   * Reference to a field of type 'MediaKind[]'
   */
  export type ListEnumMediaKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaKind[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    applications?: ApplicationListRelationFilter
    reviewedApplications?: ApplicationListRelationFilter
    decisions?: ApplicationDecisionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    applications?: ApplicationOrderByRelationAggregateInput
    reviewedApplications?: ApplicationOrderByRelationAggregateInput
    decisions?: ApplicationDecisionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    applications?: ApplicationListRelationFilter
    reviewedApplications?: ApplicationListRelationFilter
    decisions?: ApplicationDecisionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ShelterWhereInput = {
    AND?: ShelterWhereInput | ShelterWhereInput[]
    OR?: ShelterWhereInput[]
    NOT?: ShelterWhereInput | ShelterWhereInput[]
    id?: StringFilter<"Shelter"> | string
    name?: StringFilter<"Shelter"> | string
    slug?: StringFilter<"Shelter"> | string
    email?: StringNullableFilter<"Shelter"> | string | null
    phone?: StringNullableFilter<"Shelter"> | string | null
    website?: StringNullableFilter<"Shelter"> | string | null
    addressId?: StringNullableFilter<"Shelter"> | string | null
    createdAt?: DateTimeFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeFilter<"Shelter"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Shelter"> | Date | string | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    pets?: PetListRelationFilter
    applications?: ApplicationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type ShelterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    addressId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    address?: AddressOrderByWithRelationInput
    pets?: PetOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type ShelterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ShelterWhereInput | ShelterWhereInput[]
    OR?: ShelterWhereInput[]
    NOT?: ShelterWhereInput | ShelterWhereInput[]
    name?: StringFilter<"Shelter"> | string
    email?: StringNullableFilter<"Shelter"> | string | null
    phone?: StringNullableFilter<"Shelter"> | string | null
    website?: StringNullableFilter<"Shelter"> | string | null
    addressId?: StringNullableFilter<"Shelter"> | string | null
    createdAt?: DateTimeFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeFilter<"Shelter"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Shelter"> | Date | string | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    pets?: PetListRelationFilter
    applications?: ApplicationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "slug">

  export type ShelterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    addressId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ShelterCountOrderByAggregateInput
    _max?: ShelterMaxOrderByAggregateInput
    _min?: ShelterMinOrderByAggregateInput
  }

  export type ShelterScalarWhereWithAggregatesInput = {
    AND?: ShelterScalarWhereWithAggregatesInput | ShelterScalarWhereWithAggregatesInput[]
    OR?: ShelterScalarWhereWithAggregatesInput[]
    NOT?: ShelterScalarWhereWithAggregatesInput | ShelterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shelter"> | string
    name?: StringWithAggregatesFilter<"Shelter"> | string
    slug?: StringWithAggregatesFilter<"Shelter"> | string
    email?: StringNullableWithAggregatesFilter<"Shelter"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Shelter"> | string | null
    website?: StringNullableWithAggregatesFilter<"Shelter"> | string | null
    addressId?: StringNullableWithAggregatesFilter<"Shelter"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shelter"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Shelter"> | Date | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    line1?: StringFilter<"Address"> | string
    line2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    state?: StringNullableFilter<"Address"> | string | null
    postal?: StringNullableFilter<"Address"> | string | null
    country?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    shelters?: ShelterListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shelters?: ShelterOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    line1?: StringFilter<"Address"> | string
    line2?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    state?: StringNullableFilter<"Address"> | string | null
    postal?: StringNullableFilter<"Address"> | string | null
    country?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    shelters?: ShelterListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    line1?: StringWithAggregatesFilter<"Address"> | string
    line2?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    postal?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country?: StringWithAggregatesFilter<"Address"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    shelterId?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: EnumSpeciesFilter<"Pet"> | $Enums.Species
    breed?: StringNullableFilter<"Pet"> | string | null
    sex?: EnumSexNullableFilter<"Pet"> | $Enums.Sex | null
    size?: EnumSizeNullableFilter<"Pet"> | $Enums.Size | null
    ageMonths?: IntNullableFilter<"Pet"> | number | null
    color?: StringNullableFilter<"Pet"> | string | null
    isNeutered?: BoolNullableFilter<"Pet"> | boolean | null
    isVaccinated?: BoolNullableFilter<"Pet"> | boolean | null
    status?: EnumPetStatusFilter<"Pet"> | $Enums.PetStatus
    description?: StringNullableFilter<"Pet"> | string | null
    isPublished?: BoolFilter<"Pet"> | boolean
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
    media?: PetMediaListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    ageMonths?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    isNeutered?: SortOrderInput | SortOrder
    isVaccinated?: SortOrderInput | SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    shelter?: ShelterOrderByWithRelationInput
    media?: PetMediaOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    shelterId?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: EnumSpeciesFilter<"Pet"> | $Enums.Species
    breed?: StringNullableFilter<"Pet"> | string | null
    sex?: EnumSexNullableFilter<"Pet"> | $Enums.Sex | null
    size?: EnumSizeNullableFilter<"Pet"> | $Enums.Size | null
    ageMonths?: IntNullableFilter<"Pet"> | number | null
    color?: StringNullableFilter<"Pet"> | string | null
    isNeutered?: BoolNullableFilter<"Pet"> | boolean | null
    isVaccinated?: BoolNullableFilter<"Pet"> | boolean | null
    status?: EnumPetStatusFilter<"Pet"> | $Enums.PetStatus
    description?: StringNullableFilter<"Pet"> | string | null
    isPublished?: BoolFilter<"Pet"> | boolean
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
    media?: PetMediaListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    ageMonths?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    isNeutered?: SortOrderInput | SortOrder
    isVaccinated?: SortOrderInput | SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    shelterId?: StringWithAggregatesFilter<"Pet"> | string
    name?: StringWithAggregatesFilter<"Pet"> | string
    species?: EnumSpeciesWithAggregatesFilter<"Pet"> | $Enums.Species
    breed?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    sex?: EnumSexNullableWithAggregatesFilter<"Pet"> | $Enums.Sex | null
    size?: EnumSizeNullableWithAggregatesFilter<"Pet"> | $Enums.Size | null
    ageMonths?: IntNullableWithAggregatesFilter<"Pet"> | number | null
    color?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    isNeutered?: BoolNullableWithAggregatesFilter<"Pet"> | boolean | null
    isVaccinated?: BoolNullableWithAggregatesFilter<"Pet"> | boolean | null
    status?: EnumPetStatusWithAggregatesFilter<"Pet"> | $Enums.PetStatus
    description?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Pet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
  }

  export type PetMediaWhereInput = {
    AND?: PetMediaWhereInput | PetMediaWhereInput[]
    OR?: PetMediaWhereInput[]
    NOT?: PetMediaWhereInput | PetMediaWhereInput[]
    id?: StringFilter<"PetMedia"> | string
    petId?: StringFilter<"PetMedia"> | string
    url?: StringFilter<"PetMedia"> | string
    kind?: EnumMediaKindFilter<"PetMedia"> | $Enums.MediaKind
    sortOrder?: IntFilter<"PetMedia"> | number
    createdAt?: DateTimeFilter<"PetMedia"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type PetMediaOrderByWithRelationInput = {
    id?: SortOrder
    petId?: SortOrder
    url?: SortOrder
    kind?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    pet?: PetOrderByWithRelationInput
  }

  export type PetMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetMediaWhereInput | PetMediaWhereInput[]
    OR?: PetMediaWhereInput[]
    NOT?: PetMediaWhereInput | PetMediaWhereInput[]
    petId?: StringFilter<"PetMedia"> | string
    url?: StringFilter<"PetMedia"> | string
    kind?: EnumMediaKindFilter<"PetMedia"> | $Enums.MediaKind
    sortOrder?: IntFilter<"PetMedia"> | number
    createdAt?: DateTimeFilter<"PetMedia"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type PetMediaOrderByWithAggregationInput = {
    id?: SortOrder
    petId?: SortOrder
    url?: SortOrder
    kind?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: PetMediaCountOrderByAggregateInput
    _avg?: PetMediaAvgOrderByAggregateInput
    _max?: PetMediaMaxOrderByAggregateInput
    _min?: PetMediaMinOrderByAggregateInput
    _sum?: PetMediaSumOrderByAggregateInput
  }

  export type PetMediaScalarWhereWithAggregatesInput = {
    AND?: PetMediaScalarWhereWithAggregatesInput | PetMediaScalarWhereWithAggregatesInput[]
    OR?: PetMediaScalarWhereWithAggregatesInput[]
    NOT?: PetMediaScalarWhereWithAggregatesInput | PetMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PetMedia"> | string
    petId?: StringWithAggregatesFilter<"PetMedia"> | string
    url?: StringWithAggregatesFilter<"PetMedia"> | string
    kind?: EnumMediaKindWithAggregatesFilter<"PetMedia"> | $Enums.MediaKind
    sortOrder?: IntWithAggregatesFilter<"PetMedia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PetMedia"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: StringFilter<"Application"> | string
    shelterId?: StringFilter<"Application"> | string
    petId?: StringFilter<"Application"> | string
    userId?: StringNullableFilter<"Application"> | string | null
    applicantName?: StringFilter<"Application"> | string
    applicantEmail?: StringFilter<"Application"> | string
    applicantPhone?: StringNullableFilter<"Application"> | string | null
    applicantAddress?: StringNullableFilter<"Application"> | string | null
    message?: StringNullableFilter<"Application"> | string | null
    petValue?: FloatNullableFilter<"Application"> | number | null
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    reviewedById?: StringNullableFilter<"Application"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    decisions?: ApplicationDecisionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    petId?: SortOrder
    userId?: SortOrderInput | SortOrder
    applicantName?: SortOrder
    applicantEmail?: SortOrder
    applicantPhone?: SortOrderInput | SortOrder
    applicantAddress?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    petValue?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shelter?: ShelterOrderByWithRelationInput
    pet?: PetOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    reviewedBy?: UserOrderByWithRelationInput
    decisions?: ApplicationDecisionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    petId_applicantEmail_status?: ApplicationPetIdApplicantEmailStatusCompoundUniqueInput
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    shelterId?: StringFilter<"Application"> | string
    petId?: StringFilter<"Application"> | string
    userId?: StringNullableFilter<"Application"> | string | null
    applicantName?: StringFilter<"Application"> | string
    applicantEmail?: StringFilter<"Application"> | string
    applicantPhone?: StringNullableFilter<"Application"> | string | null
    applicantAddress?: StringNullableFilter<"Application"> | string | null
    message?: StringNullableFilter<"Application"> | string | null
    petValue?: FloatNullableFilter<"Application"> | number | null
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    reviewedById?: StringNullableFilter<"Application"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
    shelter?: XOR<ShelterScalarRelationFilter, ShelterWhereInput>
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    decisions?: ApplicationDecisionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "petId_applicantEmail_status">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    shelterId?: SortOrder
    petId?: SortOrder
    userId?: SortOrderInput | SortOrder
    applicantName?: SortOrder
    applicantEmail?: SortOrder
    applicantPhone?: SortOrderInput | SortOrder
    applicantAddress?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    petValue?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Application"> | string
    shelterId?: StringWithAggregatesFilter<"Application"> | string
    petId?: StringWithAggregatesFilter<"Application"> | string
    userId?: StringNullableWithAggregatesFilter<"Application"> | string | null
    applicantName?: StringWithAggregatesFilter<"Application"> | string
    applicantEmail?: StringWithAggregatesFilter<"Application"> | string
    applicantPhone?: StringNullableWithAggregatesFilter<"Application"> | string | null
    applicantAddress?: StringNullableWithAggregatesFilter<"Application"> | string | null
    message?: StringNullableWithAggregatesFilter<"Application"> | string | null
    petValue?: FloatNullableWithAggregatesFilter<"Application"> | number | null
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    reviewedById?: StringNullableWithAggregatesFilter<"Application"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type ApplicationDecisionWhereInput = {
    AND?: ApplicationDecisionWhereInput | ApplicationDecisionWhereInput[]
    OR?: ApplicationDecisionWhereInput[]
    NOT?: ApplicationDecisionWhereInput | ApplicationDecisionWhereInput[]
    id?: StringFilter<"ApplicationDecision"> | string
    applicationId?: StringFilter<"ApplicationDecision"> | string
    status?: EnumApplicationStatusFilter<"ApplicationDecision"> | $Enums.ApplicationStatus
    note?: StringNullableFilter<"ApplicationDecision"> | string | null
    decidedById?: StringNullableFilter<"ApplicationDecision"> | string | null
    createdAt?: DateTimeFilter<"ApplicationDecision"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    decidedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ApplicationDecisionOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    decidedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    decidedBy?: UserOrderByWithRelationInput
  }

  export type ApplicationDecisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationDecisionWhereInput | ApplicationDecisionWhereInput[]
    OR?: ApplicationDecisionWhereInput[]
    NOT?: ApplicationDecisionWhereInput | ApplicationDecisionWhereInput[]
    applicationId?: StringFilter<"ApplicationDecision"> | string
    status?: EnumApplicationStatusFilter<"ApplicationDecision"> | $Enums.ApplicationStatus
    note?: StringNullableFilter<"ApplicationDecision"> | string | null
    decidedById?: StringNullableFilter<"ApplicationDecision"> | string | null
    createdAt?: DateTimeFilter<"ApplicationDecision"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    decidedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ApplicationDecisionOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    decidedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApplicationDecisionCountOrderByAggregateInput
    _max?: ApplicationDecisionMaxOrderByAggregateInput
    _min?: ApplicationDecisionMinOrderByAggregateInput
  }

  export type ApplicationDecisionScalarWhereWithAggregatesInput = {
    AND?: ApplicationDecisionScalarWhereWithAggregatesInput | ApplicationDecisionScalarWhereWithAggregatesInput[]
    OR?: ApplicationDecisionScalarWhereWithAggregatesInput[]
    NOT?: ApplicationDecisionScalarWhereWithAggregatesInput | ApplicationDecisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApplicationDecision"> | string
    applicationId?: StringWithAggregatesFilter<"ApplicationDecision"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"ApplicationDecision"> | $Enums.ApplicationStatus
    note?: StringNullableWithAggregatesFilter<"ApplicationDecision"> | string | null
    decidedById?: StringNullableWithAggregatesFilter<"ApplicationDecision"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApplicationDecision"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    shelterId?: StringNullableFilter<"AuditLog"> | string | null
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    applicationId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    shelter?: XOR<ShelterNullableScalarRelationFilter, ShelterWhereInput> | null
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    application?: XOR<ApplicationNullableScalarRelationFilter, ApplicationWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    shelterId?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    applicationId?: SortOrderInput | SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    shelter?: ShelterOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
    application?: ApplicationOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    shelterId?: StringNullableFilter<"AuditLog"> | string | null
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    applicationId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    shelter?: XOR<ShelterNullableScalarRelationFilter, ShelterWhereInput> | null
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    application?: XOR<ApplicationNullableScalarRelationFilter, ApplicationWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    shelterId?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    applicationId?: SortOrderInput | SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    shelterId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    applicationId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    before?: JsonNullableWithAggregatesFilter<"AuditLog">
    after?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: ApplicationCreateNestedManyWithoutReviewedByInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutDecidedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: ApplicationUncheckedCreateNestedManyWithoutReviewedByInput
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutDecidedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: ApplicationUpdateManyWithoutReviewedByNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutDecidedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: ApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutDecidedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShelterCreateInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: AddressCreateNestedOneWithoutSheltersInput
    pets?: PetCreateNestedManyWithoutShelterInput
    applications?: ApplicationCreateNestedManyWithoutShelterInput
    auditLogs?: AuditLogCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    addressId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pets?: PetUncheckedCreateNestedManyWithoutShelterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutShelterInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneWithoutSheltersNestedInput
    pets?: PetUpdateManyWithoutShelterNestedInput
    applications?: ApplicationUpdateManyWithoutShelterNestedInput
    auditLogs?: AuditLogUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pets?: PetUncheckedUpdateManyWithoutShelterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutShelterNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type ShelterCreateManyInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    addressId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShelterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShelterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateInput = {
    id?: string
    line1: string
    line2?: string | null
    city: string
    state?: string | null
    postal?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shelters?: ShelterCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    line1: string
    line2?: string | null
    city: string
    state?: string | null
    postal?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shelters?: ShelterUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelters?: ShelterUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelters?: ShelterUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    line1: string
    line2?: string | null
    city: string
    state?: string | null
    postal?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateInput = {
    id?: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shelter: ShelterCreateNestedOneWithoutPetsInput
    media?: PetMediaCreateNestedManyWithoutPetInput
    applications?: ApplicationCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateInput = {
    id?: string
    shelterId: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PetMediaUncheckedCreateNestedManyWithoutPetInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shelter?: ShelterUpdateOneRequiredWithoutPetsNestedInput
    media?: PetMediaUpdateManyWithoutPetNestedInput
    applications?: ApplicationUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PetMediaUncheckedUpdateManyWithoutPetNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: string
    shelterId: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PetMediaCreateInput = {
    id?: string
    url: string
    kind?: $Enums.MediaKind
    sortOrder?: number
    createdAt?: Date | string
    pet: PetCreateNestedOneWithoutMediaInput
  }

  export type PetMediaUncheckedCreateInput = {
    id?: string
    petId: string
    url: string
    kind?: $Enums.MediaKind
    sortOrder?: number
    createdAt?: Date | string
  }

  export type PetMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    kind?: EnumMediaKindFieldUpdateOperationsInput | $Enums.MediaKind
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutMediaNestedInput
  }

  export type PetMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    kind?: EnumMediaKindFieldUpdateOperationsInput | $Enums.MediaKind
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetMediaCreateManyInput = {
    id?: string
    petId: string
    url: string
    kind?: $Enums.MediaKind
    sortOrder?: number
    createdAt?: Date | string
  }

  export type PetMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    kind?: EnumMediaKindFieldUpdateOperationsInput | $Enums.MediaKind
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    kind?: EnumMediaKindFieldUpdateOperationsInput | $Enums.MediaKind
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutApplicationsInput
    pet: PetCreateNestedOneWithoutApplicationsInput
    user?: UserCreateNestedOneWithoutApplicationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    shelterId: string
    petId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutApplicationsNestedInput
    pet?: PetUpdateOneRequiredWithoutApplicationsNestedInput
    user?: UserUpdateOneWithoutApplicationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    shelterId: string
    petId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDecisionCreateInput = {
    id?: string
    status: $Enums.ApplicationStatus
    note?: string | null
    createdAt?: Date | string
    application: ApplicationCreateNestedOneWithoutDecisionsInput
    decidedBy?: UserCreateNestedOneWithoutDecisionsInput
  }

  export type ApplicationDecisionUncheckedCreateInput = {
    id?: string
    applicationId: string
    status: $Enums.ApplicationStatus
    note?: string | null
    decidedById?: string | null
    createdAt?: Date | string
  }

  export type ApplicationDecisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutDecisionsNestedInput
    decidedBy?: UserUpdateOneWithoutDecisionsNestedInput
  }

  export type ApplicationDecisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    decidedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDecisionCreateManyInput = {
    id?: string
    applicationId: string
    status: $Enums.ApplicationStatus
    note?: string | null
    decidedById?: string | null
    createdAt?: Date | string
  }

  export type ApplicationDecisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDecisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    decidedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    shelter?: ShelterCreateNestedOneWithoutAuditLogsInput
    actor?: UserCreateNestedOneWithoutAuditLogsInput
    application?: ApplicationCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    shelterId?: string | null
    actorId?: string | null
    applicationId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneWithoutAuditLogsNestedInput
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
    application?: ApplicationUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    shelterId?: string | null
    actorId?: string | null
    applicationId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ApplicationDecisionListRelationFilter = {
    every?: ApplicationDecisionWhereInput
    some?: ApplicationDecisionWhereInput
    none?: ApplicationDecisionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationDecisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShelterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShelterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShelterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ShelterListRelationFilter = {
    every?: ShelterWhereInput
    some?: ShelterWhereInput
    none?: ShelterWhereInput
  }

  export type ShelterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesFilter<$PrismaModel> | $Enums.Species
  }

  export type EnumSexNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableFilter<$PrismaModel> | $Enums.Sex | null
  }

  export type EnumSizeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Size | EnumSizeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSizeNullableFilter<$PrismaModel> | $Enums.Size | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumPetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PetStatus | EnumPetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetStatusFilter<$PrismaModel> | $Enums.PetStatus
  }

  export type ShelterScalarRelationFilter = {
    is?: ShelterWhereInput
    isNot?: ShelterWhereInput
  }

  export type PetMediaListRelationFilter = {
    every?: PetMediaWhereInput
    some?: PetMediaWhereInput
    none?: PetMediaWhereInput
  }

  export type PetMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    sex?: SortOrder
    size?: SortOrder
    ageMonths?: SortOrder
    color?: SortOrder
    isNeutered?: SortOrder
    isVaccinated?: SortOrder
    status?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    ageMonths?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    sex?: SortOrder
    size?: SortOrder
    ageMonths?: SortOrder
    color?: SortOrder
    isNeutered?: SortOrder
    isVaccinated?: SortOrder
    status?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    name?: SortOrder
    species?: SortOrder
    breed?: SortOrder
    sex?: SortOrder
    size?: SortOrder
    ageMonths?: SortOrder
    color?: SortOrder
    isNeutered?: SortOrder
    isVaccinated?: SortOrder
    status?: SortOrder
    description?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    ageMonths?: SortOrder
  }

  export type EnumSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.Species
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeciesFilter<$PrismaModel>
    _max?: NestedEnumSpeciesFilter<$PrismaModel>
  }

  export type EnumSexNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sex | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexNullableFilter<$PrismaModel>
    _max?: NestedEnumSexNullableFilter<$PrismaModel>
  }

  export type EnumSizeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Size | EnumSizeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSizeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Size | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSizeNullableFilter<$PrismaModel>
    _max?: NestedEnumSizeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumPetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetStatus | EnumPetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetStatusWithAggregatesFilter<$PrismaModel> | $Enums.PetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetStatusFilter<$PrismaModel>
    _max?: NestedEnumPetStatusFilter<$PrismaModel>
  }

  export type EnumMediaKindFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaKind | EnumMediaKindFieldRefInput<$PrismaModel>
    in?: $Enums.MediaKind[] | ListEnumMediaKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaKind[] | ListEnumMediaKindFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaKindFilter<$PrismaModel> | $Enums.MediaKind
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PetScalarRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type PetMediaCountOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    url?: SortOrder
    kind?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PetMediaAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type PetMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    url?: SortOrder
    kind?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PetMediaMinOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
    url?: SortOrder
    kind?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type PetMediaSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumMediaKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaKind | EnumMediaKindFieldRefInput<$PrismaModel>
    in?: $Enums.MediaKind[] | ListEnumMediaKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaKind[] | ListEnumMediaKindFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaKindWithAggregatesFilter<$PrismaModel> | $Enums.MediaKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaKindFilter<$PrismaModel>
    _max?: NestedEnumMediaKindFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ApplicationPetIdApplicantEmailStatusCompoundUniqueInput = {
    petId: string
    applicantEmail: string
    status: $Enums.ApplicationStatus
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    petId?: SortOrder
    userId?: SortOrder
    applicantName?: SortOrder
    applicantEmail?: SortOrder
    applicantPhone?: SortOrder
    applicantAddress?: SortOrder
    message?: SortOrder
    petValue?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    petValue?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    petId?: SortOrder
    userId?: SortOrder
    applicantName?: SortOrder
    applicantEmail?: SortOrder
    applicantPhone?: SortOrder
    applicantAddress?: SortOrder
    message?: SortOrder
    petValue?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    petId?: SortOrder
    userId?: SortOrder
    applicantName?: SortOrder
    applicantEmail?: SortOrder
    applicantPhone?: SortOrder
    applicantAddress?: SortOrder
    message?: SortOrder
    petValue?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    petValue?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type ApplicationDecisionCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    decidedById?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationDecisionMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    decidedById?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationDecisionMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    decidedById?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ShelterNullableScalarRelationFilter = {
    is?: ShelterWhereInput | null
    isNot?: ShelterWhereInput | null
  }

  export type ApplicationNullableScalarRelationFilter = {
    is?: ApplicationWhereInput | null
    isNot?: ApplicationWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    actorId?: SortOrder
    applicationId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    before?: SortOrder
    after?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    actorId?: SortOrder
    applicationId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    shelterId?: SortOrder
    actorId?: SortOrder
    applicationId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput> | ApplicationCreateWithoutReviewedByInput[] | ApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewedByInput | ApplicationCreateOrConnectWithoutReviewedByInput[]
    createMany?: ApplicationCreateManyReviewedByInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationDecisionCreateNestedManyWithoutDecidedByInput = {
    create?: XOR<ApplicationDecisionCreateWithoutDecidedByInput, ApplicationDecisionUncheckedCreateWithoutDecidedByInput> | ApplicationDecisionCreateWithoutDecidedByInput[] | ApplicationDecisionUncheckedCreateWithoutDecidedByInput[]
    connectOrCreate?: ApplicationDecisionCreateOrConnectWithoutDecidedByInput | ApplicationDecisionCreateOrConnectWithoutDecidedByInput[]
    createMany?: ApplicationDecisionCreateManyDecidedByInputEnvelope
    connect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput> | ApplicationCreateWithoutReviewedByInput[] | ApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewedByInput | ApplicationCreateOrConnectWithoutReviewedByInput[]
    createMany?: ApplicationCreateManyReviewedByInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type ApplicationDecisionUncheckedCreateNestedManyWithoutDecidedByInput = {
    create?: XOR<ApplicationDecisionCreateWithoutDecidedByInput, ApplicationDecisionUncheckedCreateWithoutDecidedByInput> | ApplicationDecisionCreateWithoutDecidedByInput[] | ApplicationDecisionUncheckedCreateWithoutDecidedByInput[]
    connectOrCreate?: ApplicationDecisionCreateOrConnectWithoutDecidedByInput | ApplicationDecisionCreateOrConnectWithoutDecidedByInput[]
    createMany?: ApplicationDecisionCreateManyDecidedByInputEnvelope
    connect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput> | ApplicationCreateWithoutReviewedByInput[] | ApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewedByInput | ApplicationCreateOrConnectWithoutReviewedByInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutReviewedByInput | ApplicationUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: ApplicationCreateManyReviewedByInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutReviewedByInput | ApplicationUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutReviewedByInput | ApplicationUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationDecisionUpdateManyWithoutDecidedByNestedInput = {
    create?: XOR<ApplicationDecisionCreateWithoutDecidedByInput, ApplicationDecisionUncheckedCreateWithoutDecidedByInput> | ApplicationDecisionCreateWithoutDecidedByInput[] | ApplicationDecisionUncheckedCreateWithoutDecidedByInput[]
    connectOrCreate?: ApplicationDecisionCreateOrConnectWithoutDecidedByInput | ApplicationDecisionCreateOrConnectWithoutDecidedByInput[]
    upsert?: ApplicationDecisionUpsertWithWhereUniqueWithoutDecidedByInput | ApplicationDecisionUpsertWithWhereUniqueWithoutDecidedByInput[]
    createMany?: ApplicationDecisionCreateManyDecidedByInputEnvelope
    set?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    disconnect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    delete?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    connect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    update?: ApplicationDecisionUpdateWithWhereUniqueWithoutDecidedByInput | ApplicationDecisionUpdateWithWhereUniqueWithoutDecidedByInput[]
    updateMany?: ApplicationDecisionUpdateManyWithWhereWithoutDecidedByInput | ApplicationDecisionUpdateManyWithWhereWithoutDecidedByInput[]
    deleteMany?: ApplicationDecisionScalarWhereInput | ApplicationDecisionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput> | ApplicationCreateWithoutUserInput[] | ApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | ApplicationCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput | ApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationCreateManyUserInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutUserInput | ApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput | ApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput> | ApplicationCreateWithoutReviewedByInput[] | ApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutReviewedByInput | ApplicationCreateOrConnectWithoutReviewedByInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutReviewedByInput | ApplicationUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: ApplicationCreateManyReviewedByInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutReviewedByInput | ApplicationUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutReviewedByInput | ApplicationUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type ApplicationDecisionUncheckedUpdateManyWithoutDecidedByNestedInput = {
    create?: XOR<ApplicationDecisionCreateWithoutDecidedByInput, ApplicationDecisionUncheckedCreateWithoutDecidedByInput> | ApplicationDecisionCreateWithoutDecidedByInput[] | ApplicationDecisionUncheckedCreateWithoutDecidedByInput[]
    connectOrCreate?: ApplicationDecisionCreateOrConnectWithoutDecidedByInput | ApplicationDecisionCreateOrConnectWithoutDecidedByInput[]
    upsert?: ApplicationDecisionUpsertWithWhereUniqueWithoutDecidedByInput | ApplicationDecisionUpsertWithWhereUniqueWithoutDecidedByInput[]
    createMany?: ApplicationDecisionCreateManyDecidedByInputEnvelope
    set?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    disconnect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    delete?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    connect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    update?: ApplicationDecisionUpdateWithWhereUniqueWithoutDecidedByInput | ApplicationDecisionUpdateWithWhereUniqueWithoutDecidedByInput[]
    updateMany?: ApplicationDecisionUpdateManyWithWhereWithoutDecidedByInput | ApplicationDecisionUpdateManyWithWhereWithoutDecidedByInput[]
    deleteMany?: ApplicationDecisionScalarWhereInput | ApplicationDecisionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutSheltersInput = {
    create?: XOR<AddressCreateWithoutSheltersInput, AddressUncheckedCreateWithoutSheltersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutSheltersInput
    connect?: AddressWhereUniqueInput
  }

  export type PetCreateNestedManyWithoutShelterInput = {
    create?: XOR<PetCreateWithoutShelterInput, PetUncheckedCreateWithoutShelterInput> | PetCreateWithoutShelterInput[] | PetUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: PetCreateOrConnectWithoutShelterInput | PetCreateOrConnectWithoutShelterInput[]
    createMany?: PetCreateManyShelterInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutShelterInput = {
    create?: XOR<ApplicationCreateWithoutShelterInput, ApplicationUncheckedCreateWithoutShelterInput> | ApplicationCreateWithoutShelterInput[] | ApplicationUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutShelterInput | ApplicationCreateOrConnectWithoutShelterInput[]
    createMany?: ApplicationCreateManyShelterInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutShelterInput = {
    create?: XOR<AuditLogCreateWithoutShelterInput, AuditLogUncheckedCreateWithoutShelterInput> | AuditLogCreateWithoutShelterInput[] | AuditLogUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutShelterInput | AuditLogCreateOrConnectWithoutShelterInput[]
    createMany?: AuditLogCreateManyShelterInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutShelterInput = {
    create?: XOR<PetCreateWithoutShelterInput, PetUncheckedCreateWithoutShelterInput> | PetCreateWithoutShelterInput[] | PetUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: PetCreateOrConnectWithoutShelterInput | PetCreateOrConnectWithoutShelterInput[]
    createMany?: PetCreateManyShelterInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutShelterInput = {
    create?: XOR<ApplicationCreateWithoutShelterInput, ApplicationUncheckedCreateWithoutShelterInput> | ApplicationCreateWithoutShelterInput[] | ApplicationUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutShelterInput | ApplicationCreateOrConnectWithoutShelterInput[]
    createMany?: ApplicationCreateManyShelterInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutShelterInput = {
    create?: XOR<AuditLogCreateWithoutShelterInput, AuditLogUncheckedCreateWithoutShelterInput> | AuditLogCreateWithoutShelterInput[] | AuditLogUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutShelterInput | AuditLogCreateOrConnectWithoutShelterInput[]
    createMany?: AuditLogCreateManyShelterInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AddressUpdateOneWithoutSheltersNestedInput = {
    create?: XOR<AddressCreateWithoutSheltersInput, AddressUncheckedCreateWithoutSheltersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutSheltersInput
    upsert?: AddressUpsertWithoutSheltersInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutSheltersInput, AddressUpdateWithoutSheltersInput>, AddressUncheckedUpdateWithoutSheltersInput>
  }

  export type PetUpdateManyWithoutShelterNestedInput = {
    create?: XOR<PetCreateWithoutShelterInput, PetUncheckedCreateWithoutShelterInput> | PetCreateWithoutShelterInput[] | PetUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: PetCreateOrConnectWithoutShelterInput | PetCreateOrConnectWithoutShelterInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutShelterInput | PetUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: PetCreateManyShelterInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutShelterInput | PetUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: PetUpdateManyWithWhereWithoutShelterInput | PetUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutShelterNestedInput = {
    create?: XOR<ApplicationCreateWithoutShelterInput, ApplicationUncheckedCreateWithoutShelterInput> | ApplicationCreateWithoutShelterInput[] | ApplicationUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutShelterInput | ApplicationCreateOrConnectWithoutShelterInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutShelterInput | ApplicationUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: ApplicationCreateManyShelterInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutShelterInput | ApplicationUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutShelterInput | ApplicationUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutShelterNestedInput = {
    create?: XOR<AuditLogCreateWithoutShelterInput, AuditLogUncheckedCreateWithoutShelterInput> | AuditLogCreateWithoutShelterInput[] | AuditLogUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutShelterInput | AuditLogCreateOrConnectWithoutShelterInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutShelterInput | AuditLogUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: AuditLogCreateManyShelterInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutShelterInput | AuditLogUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutShelterInput | AuditLogUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<PetCreateWithoutShelterInput, PetUncheckedCreateWithoutShelterInput> | PetCreateWithoutShelterInput[] | PetUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: PetCreateOrConnectWithoutShelterInput | PetCreateOrConnectWithoutShelterInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutShelterInput | PetUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: PetCreateManyShelterInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutShelterInput | PetUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: PetUpdateManyWithWhereWithoutShelterInput | PetUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<ApplicationCreateWithoutShelterInput, ApplicationUncheckedCreateWithoutShelterInput> | ApplicationCreateWithoutShelterInput[] | ApplicationUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutShelterInput | ApplicationCreateOrConnectWithoutShelterInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutShelterInput | ApplicationUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: ApplicationCreateManyShelterInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutShelterInput | ApplicationUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutShelterInput | ApplicationUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<AuditLogCreateWithoutShelterInput, AuditLogUncheckedCreateWithoutShelterInput> | AuditLogCreateWithoutShelterInput[] | AuditLogUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutShelterInput | AuditLogCreateOrConnectWithoutShelterInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutShelterInput | AuditLogUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: AuditLogCreateManyShelterInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutShelterInput | AuditLogUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutShelterInput | AuditLogUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ShelterCreateNestedManyWithoutAddressInput = {
    create?: XOR<ShelterCreateWithoutAddressInput, ShelterUncheckedCreateWithoutAddressInput> | ShelterCreateWithoutAddressInput[] | ShelterUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ShelterCreateOrConnectWithoutAddressInput | ShelterCreateOrConnectWithoutAddressInput[]
    createMany?: ShelterCreateManyAddressInputEnvelope
    connect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
  }

  export type ShelterUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<ShelterCreateWithoutAddressInput, ShelterUncheckedCreateWithoutAddressInput> | ShelterCreateWithoutAddressInput[] | ShelterUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ShelterCreateOrConnectWithoutAddressInput | ShelterCreateOrConnectWithoutAddressInput[]
    createMany?: ShelterCreateManyAddressInputEnvelope
    connect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
  }

  export type ShelterUpdateManyWithoutAddressNestedInput = {
    create?: XOR<ShelterCreateWithoutAddressInput, ShelterUncheckedCreateWithoutAddressInput> | ShelterCreateWithoutAddressInput[] | ShelterUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ShelterCreateOrConnectWithoutAddressInput | ShelterCreateOrConnectWithoutAddressInput[]
    upsert?: ShelterUpsertWithWhereUniqueWithoutAddressInput | ShelterUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: ShelterCreateManyAddressInputEnvelope
    set?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    disconnect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    delete?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    connect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    update?: ShelterUpdateWithWhereUniqueWithoutAddressInput | ShelterUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: ShelterUpdateManyWithWhereWithoutAddressInput | ShelterUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: ShelterScalarWhereInput | ShelterScalarWhereInput[]
  }

  export type ShelterUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<ShelterCreateWithoutAddressInput, ShelterUncheckedCreateWithoutAddressInput> | ShelterCreateWithoutAddressInput[] | ShelterUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: ShelterCreateOrConnectWithoutAddressInput | ShelterCreateOrConnectWithoutAddressInput[]
    upsert?: ShelterUpsertWithWhereUniqueWithoutAddressInput | ShelterUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: ShelterCreateManyAddressInputEnvelope
    set?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    disconnect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    delete?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    connect?: ShelterWhereUniqueInput | ShelterWhereUniqueInput[]
    update?: ShelterUpdateWithWhereUniqueWithoutAddressInput | ShelterUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: ShelterUpdateManyWithWhereWithoutAddressInput | ShelterUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: ShelterScalarWhereInput | ShelterScalarWhereInput[]
  }

  export type ShelterCreateNestedOneWithoutPetsInput = {
    create?: XOR<ShelterCreateWithoutPetsInput, ShelterUncheckedCreateWithoutPetsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutPetsInput
    connect?: ShelterWhereUniqueInput
  }

  export type PetMediaCreateNestedManyWithoutPetInput = {
    create?: XOR<PetMediaCreateWithoutPetInput, PetMediaUncheckedCreateWithoutPetInput> | PetMediaCreateWithoutPetInput[] | PetMediaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: PetMediaCreateOrConnectWithoutPetInput | PetMediaCreateOrConnectWithoutPetInput[]
    createMany?: PetMediaCreateManyPetInputEnvelope
    connect?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutPetInput = {
    create?: XOR<ApplicationCreateWithoutPetInput, ApplicationUncheckedCreateWithoutPetInput> | ApplicationCreateWithoutPetInput[] | ApplicationUncheckedCreateWithoutPetInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPetInput | ApplicationCreateOrConnectWithoutPetInput[]
    createMany?: ApplicationCreateManyPetInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type PetMediaUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<PetMediaCreateWithoutPetInput, PetMediaUncheckedCreateWithoutPetInput> | PetMediaCreateWithoutPetInput[] | PetMediaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: PetMediaCreateOrConnectWithoutPetInput | PetMediaCreateOrConnectWithoutPetInput[]
    createMany?: PetMediaCreateManyPetInputEnvelope
    connect?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<ApplicationCreateWithoutPetInput, ApplicationUncheckedCreateWithoutPetInput> | ApplicationCreateWithoutPetInput[] | ApplicationUncheckedCreateWithoutPetInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPetInput | ApplicationCreateOrConnectWithoutPetInput[]
    createMany?: ApplicationCreateManyPetInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type EnumSpeciesFieldUpdateOperationsInput = {
    set?: $Enums.Species
  }

  export type NullableEnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex | null
  }

  export type NullableEnumSizeFieldUpdateOperationsInput = {
    set?: $Enums.Size | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumPetStatusFieldUpdateOperationsInput = {
    set?: $Enums.PetStatus
  }

  export type ShelterUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<ShelterCreateWithoutPetsInput, ShelterUncheckedCreateWithoutPetsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutPetsInput
    upsert?: ShelterUpsertWithoutPetsInput
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutPetsInput, ShelterUpdateWithoutPetsInput>, ShelterUncheckedUpdateWithoutPetsInput>
  }

  export type PetMediaUpdateManyWithoutPetNestedInput = {
    create?: XOR<PetMediaCreateWithoutPetInput, PetMediaUncheckedCreateWithoutPetInput> | PetMediaCreateWithoutPetInput[] | PetMediaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: PetMediaCreateOrConnectWithoutPetInput | PetMediaCreateOrConnectWithoutPetInput[]
    upsert?: PetMediaUpsertWithWhereUniqueWithoutPetInput | PetMediaUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: PetMediaCreateManyPetInputEnvelope
    set?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
    disconnect?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
    delete?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
    connect?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
    update?: PetMediaUpdateWithWhereUniqueWithoutPetInput | PetMediaUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: PetMediaUpdateManyWithWhereWithoutPetInput | PetMediaUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: PetMediaScalarWhereInput | PetMediaScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutPetNestedInput = {
    create?: XOR<ApplicationCreateWithoutPetInput, ApplicationUncheckedCreateWithoutPetInput> | ApplicationCreateWithoutPetInput[] | ApplicationUncheckedCreateWithoutPetInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPetInput | ApplicationCreateOrConnectWithoutPetInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutPetInput | ApplicationUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: ApplicationCreateManyPetInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutPetInput | ApplicationUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutPetInput | ApplicationUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type PetMediaUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<PetMediaCreateWithoutPetInput, PetMediaUncheckedCreateWithoutPetInput> | PetMediaCreateWithoutPetInput[] | PetMediaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: PetMediaCreateOrConnectWithoutPetInput | PetMediaCreateOrConnectWithoutPetInput[]
    upsert?: PetMediaUpsertWithWhereUniqueWithoutPetInput | PetMediaUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: PetMediaCreateManyPetInputEnvelope
    set?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
    disconnect?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
    delete?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
    connect?: PetMediaWhereUniqueInput | PetMediaWhereUniqueInput[]
    update?: PetMediaUpdateWithWhereUniqueWithoutPetInput | PetMediaUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: PetMediaUpdateManyWithWhereWithoutPetInput | PetMediaUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: PetMediaScalarWhereInput | PetMediaScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<ApplicationCreateWithoutPetInput, ApplicationUncheckedCreateWithoutPetInput> | ApplicationCreateWithoutPetInput[] | ApplicationUncheckedCreateWithoutPetInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPetInput | ApplicationCreateOrConnectWithoutPetInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutPetInput | ApplicationUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: ApplicationCreateManyPetInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutPetInput | ApplicationUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutPetInput | ApplicationUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutMediaInput = {
    create?: XOR<PetCreateWithoutMediaInput, PetUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PetCreateOrConnectWithoutMediaInput
    connect?: PetWhereUniqueInput
  }

  export type EnumMediaKindFieldUpdateOperationsInput = {
    set?: $Enums.MediaKind
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PetUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<PetCreateWithoutMediaInput, PetUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PetCreateOrConnectWithoutMediaInput
    upsert?: PetUpsertWithoutMediaInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutMediaInput, PetUpdateWithoutMediaInput>, PetUncheckedUpdateWithoutMediaInput>
  }

  export type ShelterCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ShelterCreateWithoutApplicationsInput, ShelterUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutApplicationsInput
    connect?: ShelterWhereUniqueInput
  }

  export type PetCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<PetCreateWithoutApplicationsInput, PetUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: PetCreateOrConnectWithoutApplicationsInput
    connect?: PetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewedApplicationsInput = {
    create?: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationDecisionCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationDecisionCreateWithoutApplicationInput, ApplicationDecisionUncheckedCreateWithoutApplicationInput> | ApplicationDecisionCreateWithoutApplicationInput[] | ApplicationDecisionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDecisionCreateOrConnectWithoutApplicationInput | ApplicationDecisionCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationDecisionCreateManyApplicationInputEnvelope
    connect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutApplicationInput = {
    create?: XOR<AuditLogCreateWithoutApplicationInput, AuditLogUncheckedCreateWithoutApplicationInput> | AuditLogCreateWithoutApplicationInput[] | AuditLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutApplicationInput | AuditLogCreateOrConnectWithoutApplicationInput[]
    createMany?: AuditLogCreateManyApplicationInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ApplicationDecisionUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationDecisionCreateWithoutApplicationInput, ApplicationDecisionUncheckedCreateWithoutApplicationInput> | ApplicationDecisionCreateWithoutApplicationInput[] | ApplicationDecisionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDecisionCreateOrConnectWithoutApplicationInput | ApplicationDecisionCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationDecisionCreateManyApplicationInputEnvelope
    connect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<AuditLogCreateWithoutApplicationInput, AuditLogUncheckedCreateWithoutApplicationInput> | AuditLogCreateWithoutApplicationInput[] | AuditLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutApplicationInput | AuditLogCreateOrConnectWithoutApplicationInput[]
    createMany?: AuditLogCreateManyApplicationInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type ShelterUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ShelterCreateWithoutApplicationsInput, ShelterUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutApplicationsInput
    upsert?: ShelterUpsertWithoutApplicationsInput
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutApplicationsInput, ShelterUpdateWithoutApplicationsInput>, ShelterUncheckedUpdateWithoutApplicationsInput>
  }

  export type PetUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<PetCreateWithoutApplicationsInput, PetUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: PetCreateOrConnectWithoutApplicationsInput
    upsert?: PetUpsertWithoutApplicationsInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutApplicationsInput, PetUpdateWithoutApplicationsInput>, PetUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneWithoutReviewedApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedApplicationsInput
    upsert?: UserUpsertWithoutReviewedApplicationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewedApplicationsInput, UserUpdateWithoutReviewedApplicationsInput>, UserUncheckedUpdateWithoutReviewedApplicationsInput>
  }

  export type ApplicationDecisionUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDecisionCreateWithoutApplicationInput, ApplicationDecisionUncheckedCreateWithoutApplicationInput> | ApplicationDecisionCreateWithoutApplicationInput[] | ApplicationDecisionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDecisionCreateOrConnectWithoutApplicationInput | ApplicationDecisionCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationDecisionUpsertWithWhereUniqueWithoutApplicationInput | ApplicationDecisionUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationDecisionCreateManyApplicationInputEnvelope
    set?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    disconnect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    delete?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    connect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    update?: ApplicationDecisionUpdateWithWhereUniqueWithoutApplicationInput | ApplicationDecisionUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationDecisionUpdateManyWithWhereWithoutApplicationInput | ApplicationDecisionUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationDecisionScalarWhereInput | ApplicationDecisionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<AuditLogCreateWithoutApplicationInput, AuditLogUncheckedCreateWithoutApplicationInput> | AuditLogCreateWithoutApplicationInput[] | AuditLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutApplicationInput | AuditLogCreateOrConnectWithoutApplicationInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutApplicationInput | AuditLogUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: AuditLogCreateManyApplicationInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutApplicationInput | AuditLogUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutApplicationInput | AuditLogUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApplicationDecisionUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationDecisionCreateWithoutApplicationInput, ApplicationDecisionUncheckedCreateWithoutApplicationInput> | ApplicationDecisionCreateWithoutApplicationInput[] | ApplicationDecisionUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationDecisionCreateOrConnectWithoutApplicationInput | ApplicationDecisionCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationDecisionUpsertWithWhereUniqueWithoutApplicationInput | ApplicationDecisionUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationDecisionCreateManyApplicationInputEnvelope
    set?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    disconnect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    delete?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    connect?: ApplicationDecisionWhereUniqueInput | ApplicationDecisionWhereUniqueInput[]
    update?: ApplicationDecisionUpdateWithWhereUniqueWithoutApplicationInput | ApplicationDecisionUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationDecisionUpdateManyWithWhereWithoutApplicationInput | ApplicationDecisionUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationDecisionScalarWhereInput | ApplicationDecisionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<AuditLogCreateWithoutApplicationInput, AuditLogUncheckedCreateWithoutApplicationInput> | AuditLogCreateWithoutApplicationInput[] | AuditLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutApplicationInput | AuditLogCreateOrConnectWithoutApplicationInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutApplicationInput | AuditLogUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: AuditLogCreateManyApplicationInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutApplicationInput | AuditLogUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutApplicationInput | AuditLogUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApplicationCreateNestedOneWithoutDecisionsInput = {
    create?: XOR<ApplicationCreateWithoutDecisionsInput, ApplicationUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDecisionsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDecisionsInput = {
    create?: XOR<UserCreateWithoutDecisionsInput, UserUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecisionsInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationUpdateOneRequiredWithoutDecisionsNestedInput = {
    create?: XOR<ApplicationCreateWithoutDecisionsInput, ApplicationUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutDecisionsInput
    upsert?: ApplicationUpsertWithoutDecisionsInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutDecisionsInput, ApplicationUpdateWithoutDecisionsInput>, ApplicationUncheckedUpdateWithoutDecisionsInput>
  }

  export type UserUpdateOneWithoutDecisionsNestedInput = {
    create?: XOR<UserCreateWithoutDecisionsInput, UserUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecisionsInput
    upsert?: UserUpsertWithoutDecisionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDecisionsInput, UserUpdateWithoutDecisionsInput>, UserUncheckedUpdateWithoutDecisionsInput>
  }

  export type ShelterCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ShelterCreateWithoutAuditLogsInput, ShelterUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutAuditLogsInput
    connect?: ShelterWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ApplicationCreateWithoutAuditLogsInput, ApplicationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAuditLogsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type ShelterUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<ShelterCreateWithoutAuditLogsInput, ShelterUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ShelterCreateOrConnectWithoutAuditLogsInput
    upsert?: ShelterUpsertWithoutAuditLogsInput
    disconnect?: ShelterWhereInput | boolean
    delete?: ShelterWhereInput | boolean
    connect?: ShelterWhereUniqueInput
    update?: XOR<XOR<ShelterUpdateToOneWithWhereWithoutAuditLogsInput, ShelterUpdateWithoutAuditLogsInput>, ShelterUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ApplicationUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<ApplicationCreateWithoutAuditLogsInput, ApplicationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAuditLogsInput
    upsert?: ApplicationUpsertWithoutAuditLogsInput
    disconnect?: ApplicationWhereInput | boolean
    delete?: ApplicationWhereInput | boolean
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutAuditLogsInput, ApplicationUpdateWithoutAuditLogsInput>, ApplicationUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesFilter<$PrismaModel> | $Enums.Species
  }

  export type NestedEnumSexNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableFilter<$PrismaModel> | $Enums.Sex | null
  }

  export type NestedEnumSizeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Size | EnumSizeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSizeNullableFilter<$PrismaModel> | $Enums.Size | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumPetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PetStatus | EnumPetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetStatusFilter<$PrismaModel> | $Enums.PetStatus
  }

  export type NestedEnumSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Species | EnumSpeciesFieldRefInput<$PrismaModel>
    in?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Species[] | ListEnumSpeciesFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.Species
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeciesFilter<$PrismaModel>
    _max?: NestedEnumSpeciesFilter<$PrismaModel>
  }

  export type NestedEnumSexNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sex | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexNullableFilter<$PrismaModel>
    _max?: NestedEnumSexNullableFilter<$PrismaModel>
  }

  export type NestedEnumSizeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Size | EnumSizeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Size[] | ListEnumSizeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSizeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Size | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSizeNullableFilter<$PrismaModel>
    _max?: NestedEnumSizeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumPetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetStatus | EnumPetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetStatus[] | ListEnumPetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetStatusWithAggregatesFilter<$PrismaModel> | $Enums.PetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetStatusFilter<$PrismaModel>
    _max?: NestedEnumPetStatusFilter<$PrismaModel>
  }

  export type NestedEnumMediaKindFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaKind | EnumMediaKindFieldRefInput<$PrismaModel>
    in?: $Enums.MediaKind[] | ListEnumMediaKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaKind[] | ListEnumMediaKindFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaKindFilter<$PrismaModel> | $Enums.MediaKind
  }

  export type NestedEnumMediaKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaKind | EnumMediaKindFieldRefInput<$PrismaModel>
    in?: $Enums.MediaKind[] | ListEnumMediaKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaKind[] | ListEnumMediaKindFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaKindWithAggregatesFilter<$PrismaModel> | $Enums.MediaKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaKindFilter<$PrismaModel>
    _max?: NestedEnumMediaKindFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ApplicationCreateWithoutUserInput = {
    id?: string
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutApplicationsInput
    pet: PetCreateNestedOneWithoutApplicationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutUserInput = {
    id?: string
    shelterId: string
    petId: string
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationCreateManyUserInputEnvelope = {
    data: ApplicationCreateManyUserInput | ApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutReviewedByInput = {
    id?: string
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutApplicationsInput
    pet: PetCreateNestedOneWithoutApplicationsInput
    user?: UserCreateNestedOneWithoutApplicationsInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutReviewedByInput = {
    id?: string
    shelterId: string
    petId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutReviewedByInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput>
  }

  export type ApplicationCreateManyReviewedByInputEnvelope = {
    data: ApplicationCreateManyReviewedByInput | ApplicationCreateManyReviewedByInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationDecisionCreateWithoutDecidedByInput = {
    id?: string
    status: $Enums.ApplicationStatus
    note?: string | null
    createdAt?: Date | string
    application: ApplicationCreateNestedOneWithoutDecisionsInput
  }

  export type ApplicationDecisionUncheckedCreateWithoutDecidedByInput = {
    id?: string
    applicationId: string
    status: $Enums.ApplicationStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type ApplicationDecisionCreateOrConnectWithoutDecidedByInput = {
    where: ApplicationDecisionWhereUniqueInput
    create: XOR<ApplicationDecisionCreateWithoutDecidedByInput, ApplicationDecisionUncheckedCreateWithoutDecidedByInput>
  }

  export type ApplicationDecisionCreateManyDecidedByInputEnvelope = {
    data: ApplicationDecisionCreateManyDecidedByInput | ApplicationDecisionCreateManyDecidedByInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    shelter?: ShelterCreateNestedOneWithoutAuditLogsInput
    application?: ApplicationCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    shelterId?: string | null
    applicationId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationCreateWithoutUserInput, ApplicationUncheckedCreateWithoutUserInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutUserInput, ApplicationUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: StringFilter<"Application"> | string
    shelterId?: StringFilter<"Application"> | string
    petId?: StringFilter<"Application"> | string
    userId?: StringNullableFilter<"Application"> | string | null
    applicantName?: StringFilter<"Application"> | string
    applicantEmail?: StringFilter<"Application"> | string
    applicantPhone?: StringNullableFilter<"Application"> | string | null
    applicantAddress?: StringNullableFilter<"Application"> | string | null
    message?: StringNullableFilter<"Application"> | string | null
    petValue?: FloatNullableFilter<"Application"> | number | null
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    reviewedById?: StringNullableFilter<"Application"> | string | null
    reviewedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    createdAt?: DateTimeFilter<"Application"> | Date | string
    updatedAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutReviewedByInput, ApplicationUncheckedUpdateWithoutReviewedByInput>
    create: XOR<ApplicationCreateWithoutReviewedByInput, ApplicationUncheckedCreateWithoutReviewedByInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutReviewedByInput, ApplicationUncheckedUpdateWithoutReviewedByInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutReviewedByInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutReviewedByInput>
  }

  export type ApplicationDecisionUpsertWithWhereUniqueWithoutDecidedByInput = {
    where: ApplicationDecisionWhereUniqueInput
    update: XOR<ApplicationDecisionUpdateWithoutDecidedByInput, ApplicationDecisionUncheckedUpdateWithoutDecidedByInput>
    create: XOR<ApplicationDecisionCreateWithoutDecidedByInput, ApplicationDecisionUncheckedCreateWithoutDecidedByInput>
  }

  export type ApplicationDecisionUpdateWithWhereUniqueWithoutDecidedByInput = {
    where: ApplicationDecisionWhereUniqueInput
    data: XOR<ApplicationDecisionUpdateWithoutDecidedByInput, ApplicationDecisionUncheckedUpdateWithoutDecidedByInput>
  }

  export type ApplicationDecisionUpdateManyWithWhereWithoutDecidedByInput = {
    where: ApplicationDecisionScalarWhereInput
    data: XOR<ApplicationDecisionUpdateManyMutationInput, ApplicationDecisionUncheckedUpdateManyWithoutDecidedByInput>
  }

  export type ApplicationDecisionScalarWhereInput = {
    AND?: ApplicationDecisionScalarWhereInput | ApplicationDecisionScalarWhereInput[]
    OR?: ApplicationDecisionScalarWhereInput[]
    NOT?: ApplicationDecisionScalarWhereInput | ApplicationDecisionScalarWhereInput[]
    id?: StringFilter<"ApplicationDecision"> | string
    applicationId?: StringFilter<"ApplicationDecision"> | string
    status?: EnumApplicationStatusFilter<"ApplicationDecision"> | $Enums.ApplicationStatus
    note?: StringNullableFilter<"ApplicationDecision"> | string | null
    decidedById?: StringNullableFilter<"ApplicationDecision"> | string | null
    createdAt?: DateTimeFilter<"ApplicationDecision"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    shelterId?: StringNullableFilter<"AuditLog"> | string | null
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    applicationId?: StringNullableFilter<"AuditLog"> | string | null
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AddressCreateWithoutSheltersInput = {
    id?: string
    line1: string
    line2?: string | null
    city: string
    state?: string | null
    postal?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutSheltersInput = {
    id?: string
    line1: string
    line2?: string | null
    city: string
    state?: string | null
    postal?: string | null
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutSheltersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutSheltersInput, AddressUncheckedCreateWithoutSheltersInput>
  }

  export type PetCreateWithoutShelterInput = {
    id?: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PetMediaCreateNestedManyWithoutPetInput
    applications?: ApplicationCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutShelterInput = {
    id?: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PetMediaUncheckedCreateNestedManyWithoutPetInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutShelterInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutShelterInput, PetUncheckedCreateWithoutShelterInput>
  }

  export type PetCreateManyShelterInputEnvelope = {
    data: PetCreateManyShelterInput | PetCreateManyShelterInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutShelterInput = {
    id?: string
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pet: PetCreateNestedOneWithoutApplicationsInput
    user?: UserCreateNestedOneWithoutApplicationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutShelterInput = {
    id?: string
    petId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutShelterInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutShelterInput, ApplicationUncheckedCreateWithoutShelterInput>
  }

  export type ApplicationCreateManyShelterInputEnvelope = {
    data: ApplicationCreateManyShelterInput | ApplicationCreateManyShelterInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutShelterInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutAuditLogsInput
    application?: ApplicationCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutShelterInput = {
    id?: string
    actorId?: string | null
    applicationId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutShelterInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutShelterInput, AuditLogUncheckedCreateWithoutShelterInput>
  }

  export type AuditLogCreateManyShelterInputEnvelope = {
    data: AuditLogCreateManyShelterInput | AuditLogCreateManyShelterInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutSheltersInput = {
    update: XOR<AddressUpdateWithoutSheltersInput, AddressUncheckedUpdateWithoutSheltersInput>
    create: XOR<AddressCreateWithoutSheltersInput, AddressUncheckedCreateWithoutSheltersInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutSheltersInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutSheltersInput, AddressUncheckedUpdateWithoutSheltersInput>
  }

  export type AddressUpdateWithoutSheltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutSheltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    line1?: StringFieldUpdateOperationsInput | string
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUpsertWithWhereUniqueWithoutShelterInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutShelterInput, PetUncheckedUpdateWithoutShelterInput>
    create: XOR<PetCreateWithoutShelterInput, PetUncheckedCreateWithoutShelterInput>
  }

  export type PetUpdateWithWhereUniqueWithoutShelterInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutShelterInput, PetUncheckedUpdateWithoutShelterInput>
  }

  export type PetUpdateManyWithWhereWithoutShelterInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutShelterInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: StringFilter<"Pet"> | string
    shelterId?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    species?: EnumSpeciesFilter<"Pet"> | $Enums.Species
    breed?: StringNullableFilter<"Pet"> | string | null
    sex?: EnumSexNullableFilter<"Pet"> | $Enums.Sex | null
    size?: EnumSizeNullableFilter<"Pet"> | $Enums.Size | null
    ageMonths?: IntNullableFilter<"Pet"> | number | null
    color?: StringNullableFilter<"Pet"> | string | null
    isNeutered?: BoolNullableFilter<"Pet"> | boolean | null
    isVaccinated?: BoolNullableFilter<"Pet"> | boolean | null
    status?: EnumPetStatusFilter<"Pet"> | $Enums.PetStatus
    description?: StringNullableFilter<"Pet"> | string | null
    isPublished?: BoolFilter<"Pet"> | boolean
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Pet"> | Date | string | null
  }

  export type ApplicationUpsertWithWhereUniqueWithoutShelterInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutShelterInput, ApplicationUncheckedUpdateWithoutShelterInput>
    create: XOR<ApplicationCreateWithoutShelterInput, ApplicationUncheckedCreateWithoutShelterInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutShelterInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutShelterInput, ApplicationUncheckedUpdateWithoutShelterInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutShelterInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutShelterInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutShelterInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutShelterInput, AuditLogUncheckedUpdateWithoutShelterInput>
    create: XOR<AuditLogCreateWithoutShelterInput, AuditLogUncheckedCreateWithoutShelterInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutShelterInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutShelterInput, AuditLogUncheckedUpdateWithoutShelterInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutShelterInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutShelterInput>
  }

  export type ShelterCreateWithoutAddressInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pets?: PetCreateNestedManyWithoutShelterInput
    applications?: ApplicationCreateNestedManyWithoutShelterInput
    auditLogs?: AuditLogCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutAddressInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pets?: PetUncheckedCreateNestedManyWithoutShelterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutShelterInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutAddressInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutAddressInput, ShelterUncheckedCreateWithoutAddressInput>
  }

  export type ShelterCreateManyAddressInputEnvelope = {
    data: ShelterCreateManyAddressInput | ShelterCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type ShelterUpsertWithWhereUniqueWithoutAddressInput = {
    where: ShelterWhereUniqueInput
    update: XOR<ShelterUpdateWithoutAddressInput, ShelterUncheckedUpdateWithoutAddressInput>
    create: XOR<ShelterCreateWithoutAddressInput, ShelterUncheckedCreateWithoutAddressInput>
  }

  export type ShelterUpdateWithWhereUniqueWithoutAddressInput = {
    where: ShelterWhereUniqueInput
    data: XOR<ShelterUpdateWithoutAddressInput, ShelterUncheckedUpdateWithoutAddressInput>
  }

  export type ShelterUpdateManyWithWhereWithoutAddressInput = {
    where: ShelterScalarWhereInput
    data: XOR<ShelterUpdateManyMutationInput, ShelterUncheckedUpdateManyWithoutAddressInput>
  }

  export type ShelterScalarWhereInput = {
    AND?: ShelterScalarWhereInput | ShelterScalarWhereInput[]
    OR?: ShelterScalarWhereInput[]
    NOT?: ShelterScalarWhereInput | ShelterScalarWhereInput[]
    id?: StringFilter<"Shelter"> | string
    name?: StringFilter<"Shelter"> | string
    slug?: StringFilter<"Shelter"> | string
    email?: StringNullableFilter<"Shelter"> | string | null
    phone?: StringNullableFilter<"Shelter"> | string | null
    website?: StringNullableFilter<"Shelter"> | string | null
    addressId?: StringNullableFilter<"Shelter"> | string | null
    createdAt?: DateTimeFilter<"Shelter"> | Date | string
    updatedAt?: DateTimeFilter<"Shelter"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Shelter"> | Date | string | null
  }

  export type ShelterCreateWithoutPetsInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: AddressCreateNestedOneWithoutSheltersInput
    applications?: ApplicationCreateNestedManyWithoutShelterInput
    auditLogs?: AuditLogCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutPetsInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    addressId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationUncheckedCreateNestedManyWithoutShelterInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutPetsInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutPetsInput, ShelterUncheckedCreateWithoutPetsInput>
  }

  export type PetMediaCreateWithoutPetInput = {
    id?: string
    url: string
    kind?: $Enums.MediaKind
    sortOrder?: number
    createdAt?: Date | string
  }

  export type PetMediaUncheckedCreateWithoutPetInput = {
    id?: string
    url: string
    kind?: $Enums.MediaKind
    sortOrder?: number
    createdAt?: Date | string
  }

  export type PetMediaCreateOrConnectWithoutPetInput = {
    where: PetMediaWhereUniqueInput
    create: XOR<PetMediaCreateWithoutPetInput, PetMediaUncheckedCreateWithoutPetInput>
  }

  export type PetMediaCreateManyPetInputEnvelope = {
    data: PetMediaCreateManyPetInput | PetMediaCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutPetInput = {
    id?: string
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutApplicationsInput
    user?: UserCreateNestedOneWithoutApplicationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutPetInput = {
    id?: string
    shelterId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutApplicationInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutPetInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutPetInput, ApplicationUncheckedCreateWithoutPetInput>
  }

  export type ApplicationCreateManyPetInputEnvelope = {
    data: ApplicationCreateManyPetInput | ApplicationCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type ShelterUpsertWithoutPetsInput = {
    update: XOR<ShelterUpdateWithoutPetsInput, ShelterUncheckedUpdateWithoutPetsInput>
    create: XOR<ShelterCreateWithoutPetsInput, ShelterUncheckedCreateWithoutPetsInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutPetsInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutPetsInput, ShelterUncheckedUpdateWithoutPetsInput>
  }

  export type ShelterUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneWithoutSheltersNestedInput
    applications?: ApplicationUpdateManyWithoutShelterNestedInput
    auditLogs?: AuditLogUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUncheckedUpdateManyWithoutShelterNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type PetMediaUpsertWithWhereUniqueWithoutPetInput = {
    where: PetMediaWhereUniqueInput
    update: XOR<PetMediaUpdateWithoutPetInput, PetMediaUncheckedUpdateWithoutPetInput>
    create: XOR<PetMediaCreateWithoutPetInput, PetMediaUncheckedCreateWithoutPetInput>
  }

  export type PetMediaUpdateWithWhereUniqueWithoutPetInput = {
    where: PetMediaWhereUniqueInput
    data: XOR<PetMediaUpdateWithoutPetInput, PetMediaUncheckedUpdateWithoutPetInput>
  }

  export type PetMediaUpdateManyWithWhereWithoutPetInput = {
    where: PetMediaScalarWhereInput
    data: XOR<PetMediaUpdateManyMutationInput, PetMediaUncheckedUpdateManyWithoutPetInput>
  }

  export type PetMediaScalarWhereInput = {
    AND?: PetMediaScalarWhereInput | PetMediaScalarWhereInput[]
    OR?: PetMediaScalarWhereInput[]
    NOT?: PetMediaScalarWhereInput | PetMediaScalarWhereInput[]
    id?: StringFilter<"PetMedia"> | string
    petId?: StringFilter<"PetMedia"> | string
    url?: StringFilter<"PetMedia"> | string
    kind?: EnumMediaKindFilter<"PetMedia"> | $Enums.MediaKind
    sortOrder?: IntFilter<"PetMedia"> | number
    createdAt?: DateTimeFilter<"PetMedia"> | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutPetInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutPetInput, ApplicationUncheckedUpdateWithoutPetInput>
    create: XOR<ApplicationCreateWithoutPetInput, ApplicationUncheckedCreateWithoutPetInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutPetInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutPetInput, ApplicationUncheckedUpdateWithoutPetInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutPetInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutPetInput>
  }

  export type PetCreateWithoutMediaInput = {
    id?: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shelter: ShelterCreateNestedOneWithoutPetsInput
    applications?: ApplicationCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutMediaInput = {
    id?: string
    shelterId: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutMediaInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutMediaInput, PetUncheckedCreateWithoutMediaInput>
  }

  export type PetUpsertWithoutMediaInput = {
    update: XOR<PetUpdateWithoutMediaInput, PetUncheckedUpdateWithoutMediaInput>
    create: XOR<PetCreateWithoutMediaInput, PetUncheckedCreateWithoutMediaInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutMediaInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutMediaInput, PetUncheckedUpdateWithoutMediaInput>
  }

  export type PetUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shelter?: ShelterUpdateOneRequiredWithoutPetsNestedInput
    applications?: ApplicationUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUncheckedUpdateManyWithoutPetNestedInput
  }

  export type ShelterCreateWithoutApplicationsInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: AddressCreateNestedOneWithoutSheltersInput
    pets?: PetCreateNestedManyWithoutShelterInput
    auditLogs?: AuditLogCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutApplicationsInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    addressId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pets?: PetUncheckedCreateNestedManyWithoutShelterInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutApplicationsInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutApplicationsInput, ShelterUncheckedCreateWithoutApplicationsInput>
  }

  export type PetCreateWithoutApplicationsInput = {
    id?: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shelter: ShelterCreateNestedOneWithoutPetsInput
    media?: PetMediaCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutApplicationsInput = {
    id?: string
    shelterId: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    media?: PetMediaUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutApplicationsInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutApplicationsInput, PetUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewedApplications?: ApplicationCreateNestedManyWithoutReviewedByInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutDecidedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviewedApplications?: ApplicationUncheckedCreateNestedManyWithoutReviewedByInput
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutDecidedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutReviewedApplicationsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationCreateNestedManyWithoutUserInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutDecidedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutReviewedApplicationsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutDecidedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutReviewedApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
  }

  export type ApplicationDecisionCreateWithoutApplicationInput = {
    id?: string
    status: $Enums.ApplicationStatus
    note?: string | null
    createdAt?: Date | string
    decidedBy?: UserCreateNestedOneWithoutDecisionsInput
  }

  export type ApplicationDecisionUncheckedCreateWithoutApplicationInput = {
    id?: string
    status: $Enums.ApplicationStatus
    note?: string | null
    decidedById?: string | null
    createdAt?: Date | string
  }

  export type ApplicationDecisionCreateOrConnectWithoutApplicationInput = {
    where: ApplicationDecisionWhereUniqueInput
    create: XOR<ApplicationDecisionCreateWithoutApplicationInput, ApplicationDecisionUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationDecisionCreateManyApplicationInputEnvelope = {
    data: ApplicationDecisionCreateManyApplicationInput | ApplicationDecisionCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutApplicationInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    shelter?: ShelterCreateNestedOneWithoutAuditLogsInput
    actor?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutApplicationInput = {
    id?: string
    shelterId?: string | null
    actorId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutApplicationInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutApplicationInput, AuditLogUncheckedCreateWithoutApplicationInput>
  }

  export type AuditLogCreateManyApplicationInputEnvelope = {
    data: AuditLogCreateManyApplicationInput | AuditLogCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ShelterUpsertWithoutApplicationsInput = {
    update: XOR<ShelterUpdateWithoutApplicationsInput, ShelterUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ShelterCreateWithoutApplicationsInput, ShelterUncheckedCreateWithoutApplicationsInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutApplicationsInput, ShelterUncheckedUpdateWithoutApplicationsInput>
  }

  export type ShelterUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneWithoutSheltersNestedInput
    pets?: PetUpdateManyWithoutShelterNestedInput
    auditLogs?: AuditLogUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pets?: PetUncheckedUpdateManyWithoutShelterNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type PetUpsertWithoutApplicationsInput = {
    update: XOR<PetUpdateWithoutApplicationsInput, PetUncheckedUpdateWithoutApplicationsInput>
    create: XOR<PetCreateWithoutApplicationsInput, PetUncheckedCreateWithoutApplicationsInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutApplicationsInput, PetUncheckedUpdateWithoutApplicationsInput>
  }

  export type PetUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shelter?: ShelterUpdateOneRequiredWithoutPetsNestedInput
    media?: PetMediaUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PetMediaUncheckedUpdateManyWithoutPetNestedInput
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedApplications?: ApplicationUpdateManyWithoutReviewedByNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutDecidedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedApplications?: ApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutDecidedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUpsertWithoutReviewedApplicationsInput = {
    update: XOR<UserUpdateWithoutReviewedApplicationsInput, UserUncheckedUpdateWithoutReviewedApplicationsInput>
    create: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewedApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewedApplicationsInput, UserUncheckedUpdateWithoutReviewedApplicationsInput>
  }

  export type UserUpdateWithoutReviewedApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutDecidedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewedApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutDecidedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ApplicationDecisionUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationDecisionWhereUniqueInput
    update: XOR<ApplicationDecisionUpdateWithoutApplicationInput, ApplicationDecisionUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationDecisionCreateWithoutApplicationInput, ApplicationDecisionUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationDecisionUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationDecisionWhereUniqueInput
    data: XOR<ApplicationDecisionUpdateWithoutApplicationInput, ApplicationDecisionUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationDecisionUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationDecisionScalarWhereInput
    data: XOR<ApplicationDecisionUpdateManyMutationInput, ApplicationDecisionUncheckedUpdateManyWithoutApplicationInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutApplicationInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutApplicationInput, AuditLogUncheckedUpdateWithoutApplicationInput>
    create: XOR<AuditLogCreateWithoutApplicationInput, AuditLogUncheckedCreateWithoutApplicationInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutApplicationInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutApplicationInput, AuditLogUncheckedUpdateWithoutApplicationInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutApplicationInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationCreateWithoutDecisionsInput = {
    id?: string
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutApplicationsInput
    pet: PetCreateNestedOneWithoutApplicationsInput
    user?: UserCreateNestedOneWithoutApplicationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
    auditLogs?: AuditLogCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutDecisionsInput = {
    id?: string
    shelterId: string
    petId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutDecisionsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutDecisionsInput, ApplicationUncheckedCreateWithoutDecisionsInput>
  }

  export type UserCreateWithoutDecisionsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: ApplicationCreateNestedManyWithoutReviewedByInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutDecisionsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: ApplicationUncheckedCreateNestedManyWithoutReviewedByInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutDecisionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDecisionsInput, UserUncheckedCreateWithoutDecisionsInput>
  }

  export type ApplicationUpsertWithoutDecisionsInput = {
    update: XOR<ApplicationUpdateWithoutDecisionsInput, ApplicationUncheckedUpdateWithoutDecisionsInput>
    create: XOR<ApplicationCreateWithoutDecisionsInput, ApplicationUncheckedCreateWithoutDecisionsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutDecisionsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutDecisionsInput, ApplicationUncheckedUpdateWithoutDecisionsInput>
  }

  export type ApplicationUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutApplicationsNestedInput
    pet?: PetUpdateOneRequiredWithoutApplicationsNestedInput
    user?: UserUpdateOneWithoutApplicationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
    auditLogs?: AuditLogUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type UserUpsertWithoutDecisionsInput = {
    update: XOR<UserUpdateWithoutDecisionsInput, UserUncheckedUpdateWithoutDecisionsInput>
    create: XOR<UserCreateWithoutDecisionsInput, UserUncheckedCreateWithoutDecisionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDecisionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDecisionsInput, UserUncheckedUpdateWithoutDecisionsInput>
  }

  export type UserUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: ApplicationUpdateManyWithoutReviewedByNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: ApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ShelterCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: AddressCreateNestedOneWithoutSheltersInput
    pets?: PetCreateNestedManyWithoutShelterInput
    applications?: ApplicationCreateNestedManyWithoutShelterInput
  }

  export type ShelterUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    addressId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pets?: PetUncheckedCreateNestedManyWithoutShelterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutShelterInput
  }

  export type ShelterCreateOrConnectWithoutAuditLogsInput = {
    where: ShelterWhereUniqueInput
    create: XOR<ShelterCreateWithoutAuditLogsInput, ShelterUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: ApplicationCreateNestedManyWithoutReviewedByInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutDecidedByInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    username: string
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applications?: ApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: ApplicationUncheckedCreateNestedManyWithoutReviewedByInput
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutDecidedByInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type ApplicationCreateWithoutAuditLogsInput = {
    id?: string
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shelter: ShelterCreateNestedOneWithoutApplicationsInput
    pet: PetCreateNestedOneWithoutApplicationsInput
    user?: UserCreateNestedOneWithoutApplicationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
    decisions?: ApplicationDecisionCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    shelterId: string
    petId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    decisions?: ApplicationDecisionUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutAuditLogsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutAuditLogsInput, ApplicationUncheckedCreateWithoutAuditLogsInput>
  }

  export type ShelterUpsertWithoutAuditLogsInput = {
    update: XOR<ShelterUpdateWithoutAuditLogsInput, ShelterUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ShelterCreateWithoutAuditLogsInput, ShelterUncheckedCreateWithoutAuditLogsInput>
    where?: ShelterWhereInput
  }

  export type ShelterUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ShelterWhereInput
    data: XOR<ShelterUpdateWithoutAuditLogsInput, ShelterUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ShelterUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneWithoutSheltersNestedInput
    pets?: PetUpdateManyWithoutShelterNestedInput
    applications?: ApplicationUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pets?: PetUncheckedUpdateManyWithoutShelterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: ApplicationUpdateManyWithoutReviewedByNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutDecidedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applications?: ApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: ApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutDecidedByNestedInput
  }

  export type ApplicationUpsertWithoutAuditLogsInput = {
    update: XOR<ApplicationUpdateWithoutAuditLogsInput, ApplicationUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ApplicationCreateWithoutAuditLogsInput, ApplicationUncheckedCreateWithoutAuditLogsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutAuditLogsInput, ApplicationUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ApplicationUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutApplicationsNestedInput
    pet?: PetUpdateOneRequiredWithoutApplicationsNestedInput
    user?: UserUpdateOneWithoutApplicationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyUserInput = {
    id?: string
    shelterId: string
    petId: string
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateManyReviewedByInput = {
    id?: string
    shelterId: string
    petId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationDecisionCreateManyDecidedByInput = {
    id?: string
    applicationId: string
    status: $Enums.ApplicationStatus
    note?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    shelterId?: string | null
    applicationId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ApplicationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutApplicationsNestedInput
    pet?: PetUpdateOneRequiredWithoutApplicationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutApplicationsNestedInput
    pet?: PetUpdateOneRequiredWithoutApplicationsNestedInput
    user?: UserUpdateOneWithoutApplicationsNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutReviewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDecisionUpdateWithoutDecidedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutDecisionsNestedInput
  }

  export type ApplicationDecisionUncheckedUpdateWithoutDecidedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDecisionUncheckedUpdateManyWithoutDecidedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneWithoutAuditLogsNestedInput
    application?: ApplicationUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateManyShelterInput = {
    id?: string
    name: string
    species: $Enums.Species
    breed?: string | null
    sex?: $Enums.Sex | null
    size?: $Enums.Size | null
    ageMonths?: number | null
    color?: string | null
    isNeutered?: boolean | null
    isVaccinated?: boolean | null
    status?: $Enums.PetStatus
    description?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApplicationCreateManyShelterInput = {
    id?: string
    petId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyShelterInput = {
    id?: string
    actorId?: string | null
    applicationId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PetUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PetMediaUpdateManyWithoutPetNestedInput
    applications?: ApplicationUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media?: PetMediaUncheckedUpdateManyWithoutPetNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    species?: EnumSpeciesFieldUpdateOperationsInput | $Enums.Species
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    size?: NullableEnumSizeFieldUpdateOperationsInput | $Enums.Size | null
    ageMonths?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    isNeutered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isVaccinated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumPetStatusFieldUpdateOperationsInput | $Enums.PetStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutApplicationsNestedInput
    user?: UserUpdateOneWithoutApplicationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    petId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
    application?: ApplicationUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutShelterInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    applicationId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelterCreateManyAddressInput = {
    id?: string
    name: string
    slug: string
    email?: string | null
    phone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShelterUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pets?: PetUpdateManyWithoutShelterNestedInput
    applications?: ApplicationUpdateManyWithoutShelterNestedInput
    auditLogs?: AuditLogUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pets?: PetUncheckedUpdateManyWithoutShelterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutShelterNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type ShelterUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PetMediaCreateManyPetInput = {
    id?: string
    url: string
    kind?: $Enums.MediaKind
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ApplicationCreateManyPetInput = {
    id?: string
    shelterId: string
    userId?: string | null
    applicantName: string
    applicantEmail: string
    applicantPhone?: string | null
    applicantAddress?: string | null
    message?: string | null
    petValue?: number | null
    status?: $Enums.ApplicationStatus
    reviewedById?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetMediaUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    kind?: EnumMediaKindFieldUpdateOperationsInput | $Enums.MediaKind
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetMediaUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    kind?: EnumMediaKindFieldUpdateOperationsInput | $Enums.MediaKind
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetMediaUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    kind?: EnumMediaKindFieldUpdateOperationsInput | $Enums.MediaKind
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneRequiredWithoutApplicationsNestedInput
    user?: UserUpdateOneWithoutApplicationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
    decisions?: ApplicationDecisionUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decisions?: ApplicationDecisionUncheckedUpdateManyWithoutApplicationNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    applicantName?: StringFieldUpdateOperationsInput | string
    applicantEmail?: StringFieldUpdateOperationsInput | string
    applicantPhone?: NullableStringFieldUpdateOperationsInput | string | null
    applicantAddress?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    petValue?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    reviewedById?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDecisionCreateManyApplicationInput = {
    id?: string
    status: $Enums.ApplicationStatus
    note?: string | null
    decidedById?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyApplicationInput = {
    id?: string
    shelterId?: string | null
    actorId?: string | null
    entityType: string
    entityId: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ApplicationDecisionUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedBy?: UserUpdateOneWithoutDecisionsNestedInput
  }

  export type ApplicationDecisionUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    decidedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationDecisionUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    decidedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelter?: ShelterUpdateOneWithoutAuditLogsNestedInput
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shelterId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}