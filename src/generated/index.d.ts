
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
 * Model Municipality
 * 
 */
export type Municipality = $Result.DefaultSelection<Prisma.$MunicipalityPayload>
/**
 * Model MunicipalityImage
 * 
 */
export type MunicipalityImage = $Result.DefaultSelection<Prisma.$MunicipalityImagePayload>
/**
 * Model Highlight
 * 
 */
export type Highlight = $Result.DefaultSelection<Prisma.$HighlightPayload>
/**
 * Model HighlightImage
 * 
 */
export type HighlightImage = $Result.DefaultSelection<Prisma.$HighlightImagePayload>
/**
 * Model Attraction
 * 
 */
export type Attraction = $Result.DefaultSelection<Prisma.$AttractionPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventImage
 * 
 */
export type EventImage = $Result.DefaultSelection<Prisma.$EventImagePayload>
/**
 * Model Guide
 * 
 */
export type Guide = $Result.DefaultSelection<Prisma.$GuidePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>

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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.municipality`: Exposes CRUD operations for the **Municipality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Municipalities
    * const municipalities = await prisma.municipality.findMany()
    * ```
    */
  get municipality(): Prisma.MunicipalityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.municipalityImage`: Exposes CRUD operations for the **MunicipalityImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MunicipalityImages
    * const municipalityImages = await prisma.municipalityImage.findMany()
    * ```
    */
  get municipalityImage(): Prisma.MunicipalityImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highlight`: Exposes CRUD operations for the **Highlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Highlights
    * const highlights = await prisma.highlight.findMany()
    * ```
    */
  get highlight(): Prisma.HighlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highlightImage`: Exposes CRUD operations for the **HighlightImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HighlightImages
    * const highlightImages = await prisma.highlightImage.findMany()
    * ```
    */
  get highlightImage(): Prisma.HighlightImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attraction`: Exposes CRUD operations for the **Attraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attractions
    * const attractions = await prisma.attraction.findMany()
    * ```
    */
  get attraction(): Prisma.AttractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventImage`: Exposes CRUD operations for the **EventImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventImages
    * const eventImages = await prisma.eventImage.findMany()
    * ```
    */
  get eventImage(): Prisma.EventImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guide`: Exposes CRUD operations for the **Guide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guides
    * const guides = await prisma.guide.findMany()
    * ```
    */
  get guide(): Prisma.GuideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Municipality: 'Municipality',
    MunicipalityImage: 'MunicipalityImage',
    Highlight: 'Highlight',
    HighlightImage: 'HighlightImage',
    Attraction: 'Attraction',
    Event: 'Event',
    EventImage: 'EventImage',
    Guide: 'Guide',
    Post: 'Post'
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
      modelProps: "user" | "municipality" | "municipalityImage" | "highlight" | "highlightImage" | "attraction" | "event" | "eventImage" | "guide" | "post"
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
      Municipality: {
        payload: Prisma.$MunicipalityPayload<ExtArgs>
        fields: Prisma.MunicipalityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipalityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipalityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          findFirst: {
            args: Prisma.MunicipalityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipalityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          findMany: {
            args: Prisma.MunicipalityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>[]
          }
          create: {
            args: Prisma.MunicipalityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          createMany: {
            args: Prisma.MunicipalityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipalityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>[]
          }
          delete: {
            args: Prisma.MunicipalityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          update: {
            args: Prisma.MunicipalityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          deleteMany: {
            args: Prisma.MunicipalityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipalityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipalityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>[]
          }
          upsert: {
            args: Prisma.MunicipalityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityPayload>
          }
          aggregate: {
            args: Prisma.MunicipalityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipality>
          }
          groupBy: {
            args: Prisma.MunicipalityGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipalityCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityCountAggregateOutputType> | number
          }
        }
      }
      MunicipalityImage: {
        payload: Prisma.$MunicipalityImagePayload<ExtArgs>
        fields: Prisma.MunicipalityImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipalityImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipalityImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload>
          }
          findFirst: {
            args: Prisma.MunicipalityImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipalityImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload>
          }
          findMany: {
            args: Prisma.MunicipalityImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload>[]
          }
          create: {
            args: Prisma.MunicipalityImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload>
          }
          createMany: {
            args: Prisma.MunicipalityImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipalityImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload>[]
          }
          delete: {
            args: Prisma.MunicipalityImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload>
          }
          update: {
            args: Prisma.MunicipalityImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload>
          }
          deleteMany: {
            args: Prisma.MunicipalityImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipalityImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipalityImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload>[]
          }
          upsert: {
            args: Prisma.MunicipalityImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityImagePayload>
          }
          aggregate: {
            args: Prisma.MunicipalityImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipalityImage>
          }
          groupBy: {
            args: Prisma.MunicipalityImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipalityImageCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityImageCountAggregateOutputType> | number
          }
        }
      }
      Highlight: {
        payload: Prisma.$HighlightPayload<ExtArgs>
        fields: Prisma.HighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findFirst: {
            args: Prisma.HighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findMany: {
            args: Prisma.HighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          create: {
            args: Prisma.HighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          createMany: {
            args: Prisma.HighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HighlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          delete: {
            args: Prisma.HighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          update: {
            args: Prisma.HighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          deleteMany: {
            args: Prisma.HighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HighlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          upsert: {
            args: Prisma.HighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          aggregate: {
            args: Prisma.HighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlight>
          }
          groupBy: {
            args: Prisma.HighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.HighlightCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightCountAggregateOutputType> | number
          }
        }
      }
      HighlightImage: {
        payload: Prisma.$HighlightImagePayload<ExtArgs>
        fields: Prisma.HighlightImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighlightImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload>
          }
          findFirst: {
            args: Prisma.HighlightImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload>
          }
          findMany: {
            args: Prisma.HighlightImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload>[]
          }
          create: {
            args: Prisma.HighlightImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload>
          }
          createMany: {
            args: Prisma.HighlightImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HighlightImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload>[]
          }
          delete: {
            args: Prisma.HighlightImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload>
          }
          update: {
            args: Prisma.HighlightImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload>
          }
          deleteMany: {
            args: Prisma.HighlightImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HighlightImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload>[]
          }
          upsert: {
            args: Prisma.HighlightImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightImagePayload>
          }
          aggregate: {
            args: Prisma.HighlightImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlightImage>
          }
          groupBy: {
            args: Prisma.HighlightImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.HighlightImageCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightImageCountAggregateOutputType> | number
          }
        }
      }
      Attraction: {
        payload: Prisma.$AttractionPayload<ExtArgs>
        fields: Prisma.AttractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          findFirst: {
            args: Prisma.AttractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          findMany: {
            args: Prisma.AttractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>[]
          }
          create: {
            args: Prisma.AttractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          createMany: {
            args: Prisma.AttractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>[]
          }
          delete: {
            args: Prisma.AttractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          update: {
            args: Prisma.AttractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          deleteMany: {
            args: Prisma.AttractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>[]
          }
          upsert: {
            args: Prisma.AttractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttractionPayload>
          }
          aggregate: {
            args: Prisma.AttractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttraction>
          }
          groupBy: {
            args: Prisma.AttractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttractionCountArgs<ExtArgs>
            result: $Utils.Optional<AttractionCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventImage: {
        payload: Prisma.$EventImagePayload<ExtArgs>
        fields: Prisma.EventImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          findFirst: {
            args: Prisma.EventImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          findMany: {
            args: Prisma.EventImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>[]
          }
          create: {
            args: Prisma.EventImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          createMany: {
            args: Prisma.EventImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>[]
          }
          delete: {
            args: Prisma.EventImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          update: {
            args: Prisma.EventImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          deleteMany: {
            args: Prisma.EventImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>[]
          }
          upsert: {
            args: Prisma.EventImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          aggregate: {
            args: Prisma.EventImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventImage>
          }
          groupBy: {
            args: Prisma.EventImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventImageCountArgs<ExtArgs>
            result: $Utils.Optional<EventImageCountAggregateOutputType> | number
          }
        }
      }
      Guide: {
        payload: Prisma.$GuidePayload<ExtArgs>
        fields: Prisma.GuideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          findFirst: {
            args: Prisma.GuideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          findMany: {
            args: Prisma.GuideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>[]
          }
          create: {
            args: Prisma.GuideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          createMany: {
            args: Prisma.GuideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>[]
          }
          delete: {
            args: Prisma.GuideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          update: {
            args: Prisma.GuideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          deleteMany: {
            args: Prisma.GuideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>[]
          }
          upsert: {
            args: Prisma.GuideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          aggregate: {
            args: Prisma.GuideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuide>
          }
          groupBy: {
            args: Prisma.GuideGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuideGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuideCountArgs<ExtArgs>
            result: $Utils.Optional<GuideCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
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
    municipality?: MunicipalityOmit
    municipalityImage?: MunicipalityImageOmit
    highlight?: HighlightOmit
    highlightImage?: HighlightImageOmit
    attraction?: AttractionOmit
    event?: EventOmit
    eventImage?: EventImageOmit
    guide?: GuideOmit
    post?: PostOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type MunicipalityCountOutputType
   */

  export type MunicipalityCountOutputType = {
    users: number
    highlights: number
    attractions: number
    events: number
    guides: number
    images: number
  }

  export type MunicipalityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | MunicipalityCountOutputTypeCountUsersArgs
    highlights?: boolean | MunicipalityCountOutputTypeCountHighlightsArgs
    attractions?: boolean | MunicipalityCountOutputTypeCountAttractionsArgs
    events?: boolean | MunicipalityCountOutputTypeCountEventsArgs
    guides?: boolean | MunicipalityCountOutputTypeCountGuidesArgs
    images?: boolean | MunicipalityCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityCountOutputType
     */
    select?: MunicipalityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightWhereInput
  }

  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeCountAttractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttractionWhereInput
  }

  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeCountGuidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideWhereInput
  }

  /**
   * MunicipalityCountOutputType without action
   */
  export type MunicipalityCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipalityImageWhereInput
  }


  /**
   * Count Type HighlightCountOutputType
   */

  export type HighlightCountOutputType = {
    galleryImages: number
  }

  export type HighlightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleryImages?: boolean | HighlightCountOutputTypeCountGalleryImagesArgs
  }

  // Custom InputTypes
  /**
   * HighlightCountOutputType without action
   */
  export type HighlightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightCountOutputType
     */
    select?: HighlightCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HighlightCountOutputType without action
   */
  export type HighlightCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightImageWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    galleryImages: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleryImages?: boolean | EventCountOutputTypeCountGalleryImagesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountGalleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventImageWhereInput
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
    clerkId: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    email: number
    emailVerified: number
    password: number
    image: number
    municipalityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
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
    clerkId: string | null
    name: string | null
    email: string
    emailVerified: Date | null
    password: string | null
    image: string | null
    municipalityId: string | null
    createdAt: Date
    updatedAt: Date
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
    clerkId?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | User$municipalityArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | User$municipalityArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | User$municipalityArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "name" | "email" | "emailVerified" | "password" | "image" | "municipalityId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | User$municipalityArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | User$municipalityArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | User$municipalityArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      municipality: Prisma.$MunicipalityPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string | null
      name: string | null
      email: string
      emailVerified: Date | null
      password: string | null
      image: string | null
      municipalityId: string | null
      createdAt: Date
      updatedAt: Date
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
    municipality<T extends User$municipalityArgs<ExtArgs> = {}>(args?: Subset<T, User$municipalityArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly clerkId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly municipalityId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.municipality
   */
  export type User$municipalityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    where?: MunicipalityWhereInput
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
   * Model Municipality
   */

  export type AggregateMunicipality = {
    _count: MunicipalityCountAggregateOutputType | null
    _avg: MunicipalityAvgAggregateOutputType | null
    _sum: MunicipalitySumAggregateOutputType | null
    _min: MunicipalityMinAggregateOutputType | null
    _max: MunicipalityMaxAggregateOutputType | null
  }

  export type MunicipalityAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type MunicipalitySumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type MunicipalityMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    coatOfArms: string | null
    latitude: number | null
    longitude: number | null
    about: string | null
    slug: string | null
    ibgeCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MunicipalityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    coatOfArms: string | null
    latitude: number | null
    longitude: number | null
    about: string | null
    slug: string | null
    ibgeCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MunicipalityCountAggregateOutputType = {
    id: number
    name: number
    description: number
    coatOfArms: number
    latitude: number
    longitude: number
    about: number
    slug: number
    ibgeCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MunicipalityAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type MunicipalitySumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type MunicipalityMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coatOfArms?: true
    latitude?: true
    longitude?: true
    about?: true
    slug?: true
    ibgeCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MunicipalityMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coatOfArms?: true
    latitude?: true
    longitude?: true
    about?: true
    slug?: true
    ibgeCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MunicipalityCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coatOfArms?: true
    latitude?: true
    longitude?: true
    about?: true
    slug?: true
    ibgeCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MunicipalityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipality to aggregate.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Municipalities
    **/
    _count?: true | MunicipalityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MunicipalityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MunicipalitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipalityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipalityMaxAggregateInputType
  }

  export type GetMunicipalityAggregateType<T extends MunicipalityAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipality[P]>
      : GetScalarType<T[P], AggregateMunicipality[P]>
  }




  export type MunicipalityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipalityWhereInput
    orderBy?: MunicipalityOrderByWithAggregationInput | MunicipalityOrderByWithAggregationInput[]
    by: MunicipalityScalarFieldEnum[] | MunicipalityScalarFieldEnum
    having?: MunicipalityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipalityCountAggregateInputType | true
    _avg?: MunicipalityAvgAggregateInputType
    _sum?: MunicipalitySumAggregateInputType
    _min?: MunicipalityMinAggregateInputType
    _max?: MunicipalityMaxAggregateInputType
  }

  export type MunicipalityGroupByOutputType = {
    id: string
    name: string
    description: string | null
    coatOfArms: string | null
    latitude: number | null
    longitude: number | null
    about: string | null
    slug: string | null
    ibgeCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: MunicipalityCountAggregateOutputType | null
    _avg: MunicipalityAvgAggregateOutputType | null
    _sum: MunicipalitySumAggregateOutputType | null
    _min: MunicipalityMinAggregateOutputType | null
    _max: MunicipalityMaxAggregateOutputType | null
  }

  type GetMunicipalityGroupByPayload<T extends MunicipalityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipalityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipalityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipalityGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipalityGroupByOutputType[P]>
        }
      >
    >


  export type MunicipalitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coatOfArms?: boolean
    latitude?: boolean
    longitude?: boolean
    about?: boolean
    slug?: boolean
    ibgeCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Municipality$usersArgs<ExtArgs>
    highlights?: boolean | Municipality$highlightsArgs<ExtArgs>
    attractions?: boolean | Municipality$attractionsArgs<ExtArgs>
    events?: boolean | Municipality$eventsArgs<ExtArgs>
    guides?: boolean | Municipality$guidesArgs<ExtArgs>
    images?: boolean | Municipality$imagesArgs<ExtArgs>
    _count?: boolean | MunicipalityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipality"]>

  export type MunicipalitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coatOfArms?: boolean
    latitude?: boolean
    longitude?: boolean
    about?: boolean
    slug?: boolean
    ibgeCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["municipality"]>

  export type MunicipalitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coatOfArms?: boolean
    latitude?: boolean
    longitude?: boolean
    about?: boolean
    slug?: boolean
    ibgeCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["municipality"]>

  export type MunicipalitySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    coatOfArms?: boolean
    latitude?: boolean
    longitude?: boolean
    about?: boolean
    slug?: boolean
    ibgeCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MunicipalityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "coatOfArms" | "latitude" | "longitude" | "about" | "slug" | "ibgeCode" | "createdAt" | "updatedAt", ExtArgs["result"]["municipality"]>
  export type MunicipalityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Municipality$usersArgs<ExtArgs>
    highlights?: boolean | Municipality$highlightsArgs<ExtArgs>
    attractions?: boolean | Municipality$attractionsArgs<ExtArgs>
    events?: boolean | Municipality$eventsArgs<ExtArgs>
    guides?: boolean | Municipality$guidesArgs<ExtArgs>
    images?: boolean | Municipality$imagesArgs<ExtArgs>
    _count?: boolean | MunicipalityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MunicipalityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MunicipalityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MunicipalityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Municipality"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      highlights: Prisma.$HighlightPayload<ExtArgs>[]
      attractions: Prisma.$AttractionPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      guides: Prisma.$GuidePayload<ExtArgs>[]
      images: Prisma.$MunicipalityImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      coatOfArms: string | null
      latitude: number | null
      longitude: number | null
      about: string | null
      slug: string | null
      ibgeCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["municipality"]>
    composites: {}
  }

  type MunicipalityGetPayload<S extends boolean | null | undefined | MunicipalityDefaultArgs> = $Result.GetResult<Prisma.$MunicipalityPayload, S>

  type MunicipalityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipalityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipalityCountAggregateInputType | true
    }

  export interface MunicipalityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Municipality'], meta: { name: 'Municipality' } }
    /**
     * Find zero or one Municipality that matches the filter.
     * @param {MunicipalityFindUniqueArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipalityFindUniqueArgs>(args: SelectSubset<T, MunicipalityFindUniqueArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Municipality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipalityFindUniqueOrThrowArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipalityFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipalityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityFindFirstArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipalityFindFirstArgs>(args?: SelectSubset<T, MunicipalityFindFirstArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityFindFirstOrThrowArgs} args - Arguments to find a Municipality
     * @example
     * // Get one Municipality
     * const municipality = await prisma.municipality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipalityFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipalityFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Municipalities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Municipalities
     * const municipalities = await prisma.municipality.findMany()
     * 
     * // Get first 10 Municipalities
     * const municipalities = await prisma.municipality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const municipalityWithIdOnly = await prisma.municipality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MunicipalityFindManyArgs>(args?: SelectSubset<T, MunicipalityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Municipality.
     * @param {MunicipalityCreateArgs} args - Arguments to create a Municipality.
     * @example
     * // Create one Municipality
     * const Municipality = await prisma.municipality.create({
     *   data: {
     *     // ... data to create a Municipality
     *   }
     * })
     * 
     */
    create<T extends MunicipalityCreateArgs>(args: SelectSubset<T, MunicipalityCreateArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Municipalities.
     * @param {MunicipalityCreateManyArgs} args - Arguments to create many Municipalities.
     * @example
     * // Create many Municipalities
     * const municipality = await prisma.municipality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipalityCreateManyArgs>(args?: SelectSubset<T, MunicipalityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Municipalities and returns the data saved in the database.
     * @param {MunicipalityCreateManyAndReturnArgs} args - Arguments to create many Municipalities.
     * @example
     * // Create many Municipalities
     * const municipality = await prisma.municipality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Municipalities and only return the `id`
     * const municipalityWithIdOnly = await prisma.municipality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipalityCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipalityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Municipality.
     * @param {MunicipalityDeleteArgs} args - Arguments to delete one Municipality.
     * @example
     * // Delete one Municipality
     * const Municipality = await prisma.municipality.delete({
     *   where: {
     *     // ... filter to delete one Municipality
     *   }
     * })
     * 
     */
    delete<T extends MunicipalityDeleteArgs>(args: SelectSubset<T, MunicipalityDeleteArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Municipality.
     * @param {MunicipalityUpdateArgs} args - Arguments to update one Municipality.
     * @example
     * // Update one Municipality
     * const municipality = await prisma.municipality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipalityUpdateArgs>(args: SelectSubset<T, MunicipalityUpdateArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Municipalities.
     * @param {MunicipalityDeleteManyArgs} args - Arguments to filter Municipalities to delete.
     * @example
     * // Delete a few Municipalities
     * const { count } = await prisma.municipality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipalityDeleteManyArgs>(args?: SelectSubset<T, MunicipalityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Municipalities
     * const municipality = await prisma.municipality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipalityUpdateManyArgs>(args: SelectSubset<T, MunicipalityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipalities and returns the data updated in the database.
     * @param {MunicipalityUpdateManyAndReturnArgs} args - Arguments to update many Municipalities.
     * @example
     * // Update many Municipalities
     * const municipality = await prisma.municipality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Municipalities and only return the `id`
     * const municipalityWithIdOnly = await prisma.municipality.updateManyAndReturn({
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
    updateManyAndReturn<T extends MunicipalityUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipalityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Municipality.
     * @param {MunicipalityUpsertArgs} args - Arguments to update or create a Municipality.
     * @example
     * // Update or create a Municipality
     * const municipality = await prisma.municipality.upsert({
     *   create: {
     *     // ... data to create a Municipality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Municipality we want to update
     *   }
     * })
     */
    upsert<T extends MunicipalityUpsertArgs>(args: SelectSubset<T, MunicipalityUpsertArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Municipalities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityCountArgs} args - Arguments to filter Municipalities to count.
     * @example
     * // Count the number of Municipalities
     * const count = await prisma.municipality.count({
     *   where: {
     *     // ... the filter for the Municipalities we want to count
     *   }
     * })
    **/
    count<T extends MunicipalityCountArgs>(
      args?: Subset<T, MunicipalityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipalityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Municipality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MunicipalityAggregateArgs>(args: Subset<T, MunicipalityAggregateArgs>): Prisma.PrismaPromise<GetMunicipalityAggregateType<T>>

    /**
     * Group by Municipality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityGroupByArgs} args - Group by arguments.
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
      T extends MunicipalityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipalityGroupByArgs['orderBy'] }
        : { orderBy?: MunicipalityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MunicipalityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipalityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Municipality model
   */
  readonly fields: MunicipalityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Municipality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipalityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Municipality$usersArgs<ExtArgs> = {}>(args?: Subset<T, Municipality$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    highlights<T extends Municipality$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, Municipality$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attractions<T extends Municipality$attractionsArgs<ExtArgs> = {}>(args?: Subset<T, Municipality$attractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Municipality$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Municipality$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guides<T extends Municipality$guidesArgs<ExtArgs> = {}>(args?: Subset<T, Municipality$guidesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Municipality$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Municipality$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Municipality model
   */
  interface MunicipalityFieldRefs {
    readonly id: FieldRef<"Municipality", 'String'>
    readonly name: FieldRef<"Municipality", 'String'>
    readonly description: FieldRef<"Municipality", 'String'>
    readonly coatOfArms: FieldRef<"Municipality", 'String'>
    readonly latitude: FieldRef<"Municipality", 'Float'>
    readonly longitude: FieldRef<"Municipality", 'Float'>
    readonly about: FieldRef<"Municipality", 'String'>
    readonly slug: FieldRef<"Municipality", 'String'>
    readonly ibgeCode: FieldRef<"Municipality", 'String'>
    readonly createdAt: FieldRef<"Municipality", 'DateTime'>
    readonly updatedAt: FieldRef<"Municipality", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Municipality findUnique
   */
  export type MunicipalityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality findUniqueOrThrow
   */
  export type MunicipalityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality findFirst
   */
  export type MunicipalityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipalities.
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipalities.
     */
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Municipality findFirstOrThrow
   */
  export type MunicipalityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipality to fetch.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipalities.
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipalities.
     */
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Municipality findMany
   */
  export type MunicipalityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter, which Municipalities to fetch.
     */
    where?: MunicipalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipalities to fetch.
     */
    orderBy?: MunicipalityOrderByWithRelationInput | MunicipalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Municipalities.
     */
    cursor?: MunicipalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipalities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipalities.
     */
    skip?: number
    distinct?: MunicipalityScalarFieldEnum | MunicipalityScalarFieldEnum[]
  }

  /**
   * Municipality create
   */
  export type MunicipalityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * The data needed to create a Municipality.
     */
    data: XOR<MunicipalityCreateInput, MunicipalityUncheckedCreateInput>
  }

  /**
   * Municipality createMany
   */
  export type MunicipalityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Municipalities.
     */
    data: MunicipalityCreateManyInput | MunicipalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipality createManyAndReturn
   */
  export type MunicipalityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * The data used to create many Municipalities.
     */
    data: MunicipalityCreateManyInput | MunicipalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipality update
   */
  export type MunicipalityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * The data needed to update a Municipality.
     */
    data: XOR<MunicipalityUpdateInput, MunicipalityUncheckedUpdateInput>
    /**
     * Choose, which Municipality to update.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality updateMany
   */
  export type MunicipalityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Municipalities.
     */
    data: XOR<MunicipalityUpdateManyMutationInput, MunicipalityUncheckedUpdateManyInput>
    /**
     * Filter which Municipalities to update
     */
    where?: MunicipalityWhereInput
    /**
     * Limit how many Municipalities to update.
     */
    limit?: number
  }

  /**
   * Municipality updateManyAndReturn
   */
  export type MunicipalityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * The data used to update Municipalities.
     */
    data: XOR<MunicipalityUpdateManyMutationInput, MunicipalityUncheckedUpdateManyInput>
    /**
     * Filter which Municipalities to update
     */
    where?: MunicipalityWhereInput
    /**
     * Limit how many Municipalities to update.
     */
    limit?: number
  }

  /**
   * Municipality upsert
   */
  export type MunicipalityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * The filter to search for the Municipality to update in case it exists.
     */
    where: MunicipalityWhereUniqueInput
    /**
     * In case the Municipality found by the `where` argument doesn't exist, create a new Municipality with this data.
     */
    create: XOR<MunicipalityCreateInput, MunicipalityUncheckedCreateInput>
    /**
     * In case the Municipality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipalityUpdateInput, MunicipalityUncheckedUpdateInput>
  }

  /**
   * Municipality delete
   */
  export type MunicipalityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
    /**
     * Filter which Municipality to delete.
     */
    where: MunicipalityWhereUniqueInput
  }

  /**
   * Municipality deleteMany
   */
  export type MunicipalityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipalities to delete
     */
    where?: MunicipalityWhereInput
    /**
     * Limit how many Municipalities to delete.
     */
    limit?: number
  }

  /**
   * Municipality.users
   */
  export type Municipality$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Municipality.highlights
   */
  export type Municipality$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    where?: HighlightWhereInput
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    cursor?: HighlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Municipality.attractions
   */
  export type Municipality$attractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    where?: AttractionWhereInput
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    cursor?: AttractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Municipality.events
   */
  export type Municipality$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Municipality.guides
   */
  export type Municipality$guidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    where?: GuideWhereInput
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    cursor?: GuideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Municipality.images
   */
  export type Municipality$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    where?: MunicipalityImageWhereInput
    orderBy?: MunicipalityImageOrderByWithRelationInput | MunicipalityImageOrderByWithRelationInput[]
    cursor?: MunicipalityImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MunicipalityImageScalarFieldEnum | MunicipalityImageScalarFieldEnum[]
  }

  /**
   * Municipality without action
   */
  export type MunicipalityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipality
     */
    select?: MunicipalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipality
     */
    omit?: MunicipalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityInclude<ExtArgs> | null
  }


  /**
   * Model MunicipalityImage
   */

  export type AggregateMunicipalityImage = {
    _count: MunicipalityImageCountAggregateOutputType | null
    _min: MunicipalityImageMinAggregateOutputType | null
    _max: MunicipalityImageMaxAggregateOutputType | null
  }

  export type MunicipalityImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MunicipalityImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MunicipalityImageCountAggregateOutputType = {
    id: number
    url: number
    municipalityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MunicipalityImageMinAggregateInputType = {
    id?: true
    url?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MunicipalityImageMaxAggregateInputType = {
    id?: true
    url?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MunicipalityImageCountAggregateInputType = {
    id?: true
    url?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MunicipalityImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MunicipalityImage to aggregate.
     */
    where?: MunicipalityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalityImages to fetch.
     */
    orderBy?: MunicipalityImageOrderByWithRelationInput | MunicipalityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipalityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MunicipalityImages
    **/
    _count?: true | MunicipalityImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipalityImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipalityImageMaxAggregateInputType
  }

  export type GetMunicipalityImageAggregateType<T extends MunicipalityImageAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipalityImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipalityImage[P]>
      : GetScalarType<T[P], AggregateMunicipalityImage[P]>
  }




  export type MunicipalityImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipalityImageWhereInput
    orderBy?: MunicipalityImageOrderByWithAggregationInput | MunicipalityImageOrderByWithAggregationInput[]
    by: MunicipalityImageScalarFieldEnum[] | MunicipalityImageScalarFieldEnum
    having?: MunicipalityImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipalityImageCountAggregateInputType | true
    _min?: MunicipalityImageMinAggregateInputType
    _max?: MunicipalityImageMaxAggregateInputType
  }

  export type MunicipalityImageGroupByOutputType = {
    id: string
    url: string
    municipalityId: string
    createdAt: Date
    updatedAt: Date
    _count: MunicipalityImageCountAggregateOutputType | null
    _min: MunicipalityImageMinAggregateOutputType | null
    _max: MunicipalityImageMaxAggregateOutputType | null
  }

  type GetMunicipalityImageGroupByPayload<T extends MunicipalityImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipalityImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipalityImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipalityImageGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipalityImageGroupByOutputType[P]>
        }
      >
    >


  export type MunicipalityImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipalityImage"]>

  export type MunicipalityImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipalityImage"]>

  export type MunicipalityImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipalityImage"]>

  export type MunicipalityImageSelectScalar = {
    id?: boolean
    url?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MunicipalityImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "municipalityId" | "createdAt" | "updatedAt", ExtArgs["result"]["municipalityImage"]>
  export type MunicipalityImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type MunicipalityImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type MunicipalityImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }

  export type $MunicipalityImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MunicipalityImage"
    objects: {
      municipality: Prisma.$MunicipalityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      municipalityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["municipalityImage"]>
    composites: {}
  }

  type MunicipalityImageGetPayload<S extends boolean | null | undefined | MunicipalityImageDefaultArgs> = $Result.GetResult<Prisma.$MunicipalityImagePayload, S>

  type MunicipalityImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipalityImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipalityImageCountAggregateInputType | true
    }

  export interface MunicipalityImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MunicipalityImage'], meta: { name: 'MunicipalityImage' } }
    /**
     * Find zero or one MunicipalityImage that matches the filter.
     * @param {MunicipalityImageFindUniqueArgs} args - Arguments to find a MunicipalityImage
     * @example
     * // Get one MunicipalityImage
     * const municipalityImage = await prisma.municipalityImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipalityImageFindUniqueArgs>(args: SelectSubset<T, MunicipalityImageFindUniqueArgs<ExtArgs>>): Prisma__MunicipalityImageClient<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MunicipalityImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipalityImageFindUniqueOrThrowArgs} args - Arguments to find a MunicipalityImage
     * @example
     * // Get one MunicipalityImage
     * const municipalityImage = await prisma.municipalityImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipalityImageFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipalityImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipalityImageClient<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MunicipalityImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityImageFindFirstArgs} args - Arguments to find a MunicipalityImage
     * @example
     * // Get one MunicipalityImage
     * const municipalityImage = await prisma.municipalityImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipalityImageFindFirstArgs>(args?: SelectSubset<T, MunicipalityImageFindFirstArgs<ExtArgs>>): Prisma__MunicipalityImageClient<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MunicipalityImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityImageFindFirstOrThrowArgs} args - Arguments to find a MunicipalityImage
     * @example
     * // Get one MunicipalityImage
     * const municipalityImage = await prisma.municipalityImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipalityImageFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipalityImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipalityImageClient<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MunicipalityImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MunicipalityImages
     * const municipalityImages = await prisma.municipalityImage.findMany()
     * 
     * // Get first 10 MunicipalityImages
     * const municipalityImages = await prisma.municipalityImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const municipalityImageWithIdOnly = await prisma.municipalityImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MunicipalityImageFindManyArgs>(args?: SelectSubset<T, MunicipalityImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MunicipalityImage.
     * @param {MunicipalityImageCreateArgs} args - Arguments to create a MunicipalityImage.
     * @example
     * // Create one MunicipalityImage
     * const MunicipalityImage = await prisma.municipalityImage.create({
     *   data: {
     *     // ... data to create a MunicipalityImage
     *   }
     * })
     * 
     */
    create<T extends MunicipalityImageCreateArgs>(args: SelectSubset<T, MunicipalityImageCreateArgs<ExtArgs>>): Prisma__MunicipalityImageClient<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MunicipalityImages.
     * @param {MunicipalityImageCreateManyArgs} args - Arguments to create many MunicipalityImages.
     * @example
     * // Create many MunicipalityImages
     * const municipalityImage = await prisma.municipalityImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipalityImageCreateManyArgs>(args?: SelectSubset<T, MunicipalityImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MunicipalityImages and returns the data saved in the database.
     * @param {MunicipalityImageCreateManyAndReturnArgs} args - Arguments to create many MunicipalityImages.
     * @example
     * // Create many MunicipalityImages
     * const municipalityImage = await prisma.municipalityImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MunicipalityImages and only return the `id`
     * const municipalityImageWithIdOnly = await prisma.municipalityImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipalityImageCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipalityImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MunicipalityImage.
     * @param {MunicipalityImageDeleteArgs} args - Arguments to delete one MunicipalityImage.
     * @example
     * // Delete one MunicipalityImage
     * const MunicipalityImage = await prisma.municipalityImage.delete({
     *   where: {
     *     // ... filter to delete one MunicipalityImage
     *   }
     * })
     * 
     */
    delete<T extends MunicipalityImageDeleteArgs>(args: SelectSubset<T, MunicipalityImageDeleteArgs<ExtArgs>>): Prisma__MunicipalityImageClient<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MunicipalityImage.
     * @param {MunicipalityImageUpdateArgs} args - Arguments to update one MunicipalityImage.
     * @example
     * // Update one MunicipalityImage
     * const municipalityImage = await prisma.municipalityImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipalityImageUpdateArgs>(args: SelectSubset<T, MunicipalityImageUpdateArgs<ExtArgs>>): Prisma__MunicipalityImageClient<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MunicipalityImages.
     * @param {MunicipalityImageDeleteManyArgs} args - Arguments to filter MunicipalityImages to delete.
     * @example
     * // Delete a few MunicipalityImages
     * const { count } = await prisma.municipalityImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipalityImageDeleteManyArgs>(args?: SelectSubset<T, MunicipalityImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MunicipalityImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MunicipalityImages
     * const municipalityImage = await prisma.municipalityImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipalityImageUpdateManyArgs>(args: SelectSubset<T, MunicipalityImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MunicipalityImages and returns the data updated in the database.
     * @param {MunicipalityImageUpdateManyAndReturnArgs} args - Arguments to update many MunicipalityImages.
     * @example
     * // Update many MunicipalityImages
     * const municipalityImage = await prisma.municipalityImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MunicipalityImages and only return the `id`
     * const municipalityImageWithIdOnly = await prisma.municipalityImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends MunicipalityImageUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipalityImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MunicipalityImage.
     * @param {MunicipalityImageUpsertArgs} args - Arguments to update or create a MunicipalityImage.
     * @example
     * // Update or create a MunicipalityImage
     * const municipalityImage = await prisma.municipalityImage.upsert({
     *   create: {
     *     // ... data to create a MunicipalityImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MunicipalityImage we want to update
     *   }
     * })
     */
    upsert<T extends MunicipalityImageUpsertArgs>(args: SelectSubset<T, MunicipalityImageUpsertArgs<ExtArgs>>): Prisma__MunicipalityImageClient<$Result.GetResult<Prisma.$MunicipalityImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MunicipalityImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityImageCountArgs} args - Arguments to filter MunicipalityImages to count.
     * @example
     * // Count the number of MunicipalityImages
     * const count = await prisma.municipalityImage.count({
     *   where: {
     *     // ... the filter for the MunicipalityImages we want to count
     *   }
     * })
    **/
    count<T extends MunicipalityImageCountArgs>(
      args?: Subset<T, MunicipalityImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipalityImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MunicipalityImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MunicipalityImageAggregateArgs>(args: Subset<T, MunicipalityImageAggregateArgs>): Prisma.PrismaPromise<GetMunicipalityImageAggregateType<T>>

    /**
     * Group by MunicipalityImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityImageGroupByArgs} args - Group by arguments.
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
      T extends MunicipalityImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipalityImageGroupByArgs['orderBy'] }
        : { orderBy?: MunicipalityImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MunicipalityImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipalityImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MunicipalityImage model
   */
  readonly fields: MunicipalityImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MunicipalityImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipalityImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipality<T extends MunicipalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipalityDefaultArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MunicipalityImage model
   */
  interface MunicipalityImageFieldRefs {
    readonly id: FieldRef<"MunicipalityImage", 'String'>
    readonly url: FieldRef<"MunicipalityImage", 'String'>
    readonly municipalityId: FieldRef<"MunicipalityImage", 'String'>
    readonly createdAt: FieldRef<"MunicipalityImage", 'DateTime'>
    readonly updatedAt: FieldRef<"MunicipalityImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MunicipalityImage findUnique
   */
  export type MunicipalityImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityImage to fetch.
     */
    where: MunicipalityImageWhereUniqueInput
  }

  /**
   * MunicipalityImage findUniqueOrThrow
   */
  export type MunicipalityImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityImage to fetch.
     */
    where: MunicipalityImageWhereUniqueInput
  }

  /**
   * MunicipalityImage findFirst
   */
  export type MunicipalityImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityImage to fetch.
     */
    where?: MunicipalityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalityImages to fetch.
     */
    orderBy?: MunicipalityImageOrderByWithRelationInput | MunicipalityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MunicipalityImages.
     */
    cursor?: MunicipalityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MunicipalityImages.
     */
    distinct?: MunicipalityImageScalarFieldEnum | MunicipalityImageScalarFieldEnum[]
  }

  /**
   * MunicipalityImage findFirstOrThrow
   */
  export type MunicipalityImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityImage to fetch.
     */
    where?: MunicipalityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalityImages to fetch.
     */
    orderBy?: MunicipalityImageOrderByWithRelationInput | MunicipalityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MunicipalityImages.
     */
    cursor?: MunicipalityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalityImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MunicipalityImages.
     */
    distinct?: MunicipalityImageScalarFieldEnum | MunicipalityImageScalarFieldEnum[]
  }

  /**
   * MunicipalityImage findMany
   */
  export type MunicipalityImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityImages to fetch.
     */
    where?: MunicipalityImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalityImages to fetch.
     */
    orderBy?: MunicipalityImageOrderByWithRelationInput | MunicipalityImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MunicipalityImages.
     */
    cursor?: MunicipalityImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalityImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalityImages.
     */
    skip?: number
    distinct?: MunicipalityImageScalarFieldEnum | MunicipalityImageScalarFieldEnum[]
  }

  /**
   * MunicipalityImage create
   */
  export type MunicipalityImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    /**
     * The data needed to create a MunicipalityImage.
     */
    data: XOR<MunicipalityImageCreateInput, MunicipalityImageUncheckedCreateInput>
  }

  /**
   * MunicipalityImage createMany
   */
  export type MunicipalityImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MunicipalityImages.
     */
    data: MunicipalityImageCreateManyInput | MunicipalityImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MunicipalityImage createManyAndReturn
   */
  export type MunicipalityImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * The data used to create many MunicipalityImages.
     */
    data: MunicipalityImageCreateManyInput | MunicipalityImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MunicipalityImage update
   */
  export type MunicipalityImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    /**
     * The data needed to update a MunicipalityImage.
     */
    data: XOR<MunicipalityImageUpdateInput, MunicipalityImageUncheckedUpdateInput>
    /**
     * Choose, which MunicipalityImage to update.
     */
    where: MunicipalityImageWhereUniqueInput
  }

  /**
   * MunicipalityImage updateMany
   */
  export type MunicipalityImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MunicipalityImages.
     */
    data: XOR<MunicipalityImageUpdateManyMutationInput, MunicipalityImageUncheckedUpdateManyInput>
    /**
     * Filter which MunicipalityImages to update
     */
    where?: MunicipalityImageWhereInput
    /**
     * Limit how many MunicipalityImages to update.
     */
    limit?: number
  }

  /**
   * MunicipalityImage updateManyAndReturn
   */
  export type MunicipalityImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * The data used to update MunicipalityImages.
     */
    data: XOR<MunicipalityImageUpdateManyMutationInput, MunicipalityImageUncheckedUpdateManyInput>
    /**
     * Filter which MunicipalityImages to update
     */
    where?: MunicipalityImageWhereInput
    /**
     * Limit how many MunicipalityImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MunicipalityImage upsert
   */
  export type MunicipalityImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    /**
     * The filter to search for the MunicipalityImage to update in case it exists.
     */
    where: MunicipalityImageWhereUniqueInput
    /**
     * In case the MunicipalityImage found by the `where` argument doesn't exist, create a new MunicipalityImage with this data.
     */
    create: XOR<MunicipalityImageCreateInput, MunicipalityImageUncheckedCreateInput>
    /**
     * In case the MunicipalityImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipalityImageUpdateInput, MunicipalityImageUncheckedUpdateInput>
  }

  /**
   * MunicipalityImage delete
   */
  export type MunicipalityImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
    /**
     * Filter which MunicipalityImage to delete.
     */
    where: MunicipalityImageWhereUniqueInput
  }

  /**
   * MunicipalityImage deleteMany
   */
  export type MunicipalityImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MunicipalityImages to delete
     */
    where?: MunicipalityImageWhereInput
    /**
     * Limit how many MunicipalityImages to delete.
     */
    limit?: number
  }

  /**
   * MunicipalityImage without action
   */
  export type MunicipalityImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityImage
     */
    select?: MunicipalityImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityImage
     */
    omit?: MunicipalityImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityImageInclude<ExtArgs> | null
  }


  /**
   * Model Highlight
   */

  export type AggregateHighlight = {
    _count: HighlightCountAggregateOutputType | null
    _avg: HighlightAvgAggregateOutputType | null
    _sum: HighlightSumAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  export type HighlightAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HighlightSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HighlightMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    municipalityId: string | null
    createdAt: Date | null
  }

  export type HighlightMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    municipalityId: string | null
    createdAt: Date | null
  }

  export type HighlightCountAggregateOutputType = {
    id: number
    title: number
    description: number
    latitude: number
    longitude: number
    municipalityId: number
    createdAt: number
    _all: number
  }


  export type HighlightAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HighlightSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HighlightMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    municipalityId?: true
    createdAt?: true
  }

  export type HighlightMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    municipalityId?: true
    createdAt?: true
  }

  export type HighlightCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    municipalityId?: true
    createdAt?: true
    _all?: true
  }

  export type HighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlight to aggregate.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Highlights
    **/
    _count?: true | HighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HighlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HighlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightMaxAggregateInputType
  }

  export type GetHighlightAggregateType<T extends HighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlight[P]>
      : GetScalarType<T[P], AggregateHighlight[P]>
  }




  export type HighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightWhereInput
    orderBy?: HighlightOrderByWithAggregationInput | HighlightOrderByWithAggregationInput[]
    by: HighlightScalarFieldEnum[] | HighlightScalarFieldEnum
    having?: HighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightCountAggregateInputType | true
    _avg?: HighlightAvgAggregateInputType
    _sum?: HighlightSumAggregateInputType
    _min?: HighlightMinAggregateInputType
    _max?: HighlightMaxAggregateInputType
  }

  export type HighlightGroupByOutputType = {
    id: string
    title: string
    description: string | null
    latitude: number | null
    longitude: number | null
    municipalityId: string
    createdAt: Date
    _count: HighlightCountAggregateOutputType | null
    _avg: HighlightAvgAggregateOutputType | null
    _sum: HighlightSumAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  type GetHighlightGroupByPayload<T extends HighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightGroupByOutputType[P]>
        }
      >
    >


  export type HighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    galleryImages?: boolean | Highlight$galleryImagesArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
    _count?: boolean | HighlightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>

  export type HighlightSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    municipalityId?: boolean
    createdAt?: boolean
  }

  export type HighlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "latitude" | "longitude" | "municipalityId" | "createdAt", ExtArgs["result"]["highlight"]>
  export type HighlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleryImages?: boolean | Highlight$galleryImagesArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
    _count?: boolean | HighlightCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HighlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type HighlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }

  export type $HighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Highlight"
    objects: {
      galleryImages: Prisma.$HighlightImagePayload<ExtArgs>[]
      municipality: Prisma.$MunicipalityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      latitude: number | null
      longitude: number | null
      municipalityId: string
      createdAt: Date
    }, ExtArgs["result"]["highlight"]>
    composites: {}
  }

  type HighlightGetPayload<S extends boolean | null | undefined | HighlightDefaultArgs> = $Result.GetResult<Prisma.$HighlightPayload, S>

  type HighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HighlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighlightCountAggregateInputType | true
    }

  export interface HighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Highlight'], meta: { name: 'Highlight' } }
    /**
     * Find zero or one Highlight that matches the filter.
     * @param {HighlightFindUniqueArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighlightFindUniqueArgs>(args: SelectSubset<T, HighlightFindUniqueArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Highlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HighlightFindUniqueOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, HighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighlightFindFirstArgs>(args?: SelectSubset<T, HighlightFindFirstArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, HighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Highlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Highlights
     * const highlights = await prisma.highlight.findMany()
     * 
     * // Get first 10 Highlights
     * const highlights = await prisma.highlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightWithIdOnly = await prisma.highlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighlightFindManyArgs>(args?: SelectSubset<T, HighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Highlight.
     * @param {HighlightCreateArgs} args - Arguments to create a Highlight.
     * @example
     * // Create one Highlight
     * const Highlight = await prisma.highlight.create({
     *   data: {
     *     // ... data to create a Highlight
     *   }
     * })
     * 
     */
    create<T extends HighlightCreateArgs>(args: SelectSubset<T, HighlightCreateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Highlights.
     * @param {HighlightCreateManyArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlight = await prisma.highlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighlightCreateManyArgs>(args?: SelectSubset<T, HighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Highlights and returns the data saved in the database.
     * @param {HighlightCreateManyAndReturnArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlight = await prisma.highlight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Highlights and only return the `id`
     * const highlightWithIdOnly = await prisma.highlight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HighlightCreateManyAndReturnArgs>(args?: SelectSubset<T, HighlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Highlight.
     * @param {HighlightDeleteArgs} args - Arguments to delete one Highlight.
     * @example
     * // Delete one Highlight
     * const Highlight = await prisma.highlight.delete({
     *   where: {
     *     // ... filter to delete one Highlight
     *   }
     * })
     * 
     */
    delete<T extends HighlightDeleteArgs>(args: SelectSubset<T, HighlightDeleteArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Highlight.
     * @param {HighlightUpdateArgs} args - Arguments to update one Highlight.
     * @example
     * // Update one Highlight
     * const highlight = await prisma.highlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighlightUpdateArgs>(args: SelectSubset<T, HighlightUpdateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Highlights.
     * @param {HighlightDeleteManyArgs} args - Arguments to filter Highlights to delete.
     * @example
     * // Delete a few Highlights
     * const { count } = await prisma.highlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighlightDeleteManyArgs>(args?: SelectSubset<T, HighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Highlights
     * const highlight = await prisma.highlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighlightUpdateManyArgs>(args: SelectSubset<T, HighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights and returns the data updated in the database.
     * @param {HighlightUpdateManyAndReturnArgs} args - Arguments to update many Highlights.
     * @example
     * // Update many Highlights
     * const highlight = await prisma.highlight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Highlights and only return the `id`
     * const highlightWithIdOnly = await prisma.highlight.updateManyAndReturn({
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
    updateManyAndReturn<T extends HighlightUpdateManyAndReturnArgs>(args: SelectSubset<T, HighlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Highlight.
     * @param {HighlightUpsertArgs} args - Arguments to update or create a Highlight.
     * @example
     * // Update or create a Highlight
     * const highlight = await prisma.highlight.upsert({
     *   create: {
     *     // ... data to create a Highlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Highlight we want to update
     *   }
     * })
     */
    upsert<T extends HighlightUpsertArgs>(args: SelectSubset<T, HighlightUpsertArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightCountArgs} args - Arguments to filter Highlights to count.
     * @example
     * // Count the number of Highlights
     * const count = await prisma.highlight.count({
     *   where: {
     *     // ... the filter for the Highlights we want to count
     *   }
     * })
    **/
    count<T extends HighlightCountArgs>(
      args?: Subset<T, HighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HighlightAggregateArgs>(args: Subset<T, HighlightAggregateArgs>): Prisma.PrismaPromise<GetHighlightAggregateType<T>>

    /**
     * Group by Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightGroupByArgs} args - Group by arguments.
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
      T extends HighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightGroupByArgs['orderBy'] }
        : { orderBy?: HighlightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Highlight model
   */
  readonly fields: HighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Highlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    galleryImages<T extends Highlight$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, Highlight$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    municipality<T extends MunicipalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipalityDefaultArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Highlight model
   */
  interface HighlightFieldRefs {
    readonly id: FieldRef<"Highlight", 'String'>
    readonly title: FieldRef<"Highlight", 'String'>
    readonly description: FieldRef<"Highlight", 'String'>
    readonly latitude: FieldRef<"Highlight", 'Float'>
    readonly longitude: FieldRef<"Highlight", 'Float'>
    readonly municipalityId: FieldRef<"Highlight", 'String'>
    readonly createdAt: FieldRef<"Highlight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Highlight findUnique
   */
  export type HighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findUniqueOrThrow
   */
  export type HighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findFirst
   */
  export type HighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findFirstOrThrow
   */
  export type HighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findMany
   */
  export type HighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight create
   */
  export type HighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The data needed to create a Highlight.
     */
    data: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
  }

  /**
   * Highlight createMany
   */
  export type HighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Highlights.
     */
    data: HighlightCreateManyInput | HighlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Highlight createManyAndReturn
   */
  export type HighlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * The data used to create many Highlights.
     */
    data: HighlightCreateManyInput | HighlightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Highlight update
   */
  export type HighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The data needed to update a Highlight.
     */
    data: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
    /**
     * Choose, which Highlight to update.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight updateMany
   */
  export type HighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to update.
     */
    limit?: number
  }

  /**
   * Highlight updateManyAndReturn
   */
  export type HighlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Highlight upsert
   */
  export type HighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The filter to search for the Highlight to update in case it exists.
     */
    where: HighlightWhereUniqueInput
    /**
     * In case the Highlight found by the `where` argument doesn't exist, create a new Highlight with this data.
     */
    create: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
    /**
     * In case the Highlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
  }

  /**
   * Highlight delete
   */
  export type HighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter which Highlight to delete.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight deleteMany
   */
  export type HighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlights to delete
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to delete.
     */
    limit?: number
  }

  /**
   * Highlight.galleryImages
   */
  export type Highlight$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    where?: HighlightImageWhereInput
    orderBy?: HighlightImageOrderByWithRelationInput | HighlightImageOrderByWithRelationInput[]
    cursor?: HighlightImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightImageScalarFieldEnum | HighlightImageScalarFieldEnum[]
  }

  /**
   * Highlight without action
   */
  export type HighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
  }


  /**
   * Model HighlightImage
   */

  export type AggregateHighlightImage = {
    _count: HighlightImageCountAggregateOutputType | null
    _min: HighlightImageMinAggregateOutputType | null
    _max: HighlightImageMaxAggregateOutputType | null
  }

  export type HighlightImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    highlightId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HighlightImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    highlightId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HighlightImageCountAggregateOutputType = {
    id: number
    url: number
    highlightId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HighlightImageMinAggregateInputType = {
    id?: true
    url?: true
    highlightId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HighlightImageMaxAggregateInputType = {
    id?: true
    url?: true
    highlightId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HighlightImageCountAggregateInputType = {
    id?: true
    url?: true
    highlightId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HighlightImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighlightImage to aggregate.
     */
    where?: HighlightImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightImages to fetch.
     */
    orderBy?: HighlightImageOrderByWithRelationInput | HighlightImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HighlightImages
    **/
    _count?: true | HighlightImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightImageMaxAggregateInputType
  }

  export type GetHighlightImageAggregateType<T extends HighlightImageAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlightImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlightImage[P]>
      : GetScalarType<T[P], AggregateHighlightImage[P]>
  }




  export type HighlightImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightImageWhereInput
    orderBy?: HighlightImageOrderByWithAggregationInput | HighlightImageOrderByWithAggregationInput[]
    by: HighlightImageScalarFieldEnum[] | HighlightImageScalarFieldEnum
    having?: HighlightImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightImageCountAggregateInputType | true
    _min?: HighlightImageMinAggregateInputType
    _max?: HighlightImageMaxAggregateInputType
  }

  export type HighlightImageGroupByOutputType = {
    id: string
    url: string
    highlightId: string
    createdAt: Date
    updatedAt: Date
    _count: HighlightImageCountAggregateOutputType | null
    _min: HighlightImageMinAggregateOutputType | null
    _max: HighlightImageMaxAggregateOutputType | null
  }

  type GetHighlightImageGroupByPayload<T extends HighlightImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightImageGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightImageGroupByOutputType[P]>
        }
      >
    >


  export type HighlightImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    highlightId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlightImage"]>

  export type HighlightImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    highlightId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlightImage"]>

  export type HighlightImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    highlightId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlightImage"]>

  export type HighlightImageSelectScalar = {
    id?: boolean
    url?: boolean
    highlightId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HighlightImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "highlightId" | "createdAt" | "updatedAt", ExtArgs["result"]["highlightImage"]>
  export type HighlightImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
  }
  export type HighlightImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
  }
  export type HighlightImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
  }

  export type $HighlightImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HighlightImage"
    objects: {
      highlight: Prisma.$HighlightPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      highlightId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["highlightImage"]>
    composites: {}
  }

  type HighlightImageGetPayload<S extends boolean | null | undefined | HighlightImageDefaultArgs> = $Result.GetResult<Prisma.$HighlightImagePayload, S>

  type HighlightImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HighlightImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighlightImageCountAggregateInputType | true
    }

  export interface HighlightImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HighlightImage'], meta: { name: 'HighlightImage' } }
    /**
     * Find zero or one HighlightImage that matches the filter.
     * @param {HighlightImageFindUniqueArgs} args - Arguments to find a HighlightImage
     * @example
     * // Get one HighlightImage
     * const highlightImage = await prisma.highlightImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighlightImageFindUniqueArgs>(args: SelectSubset<T, HighlightImageFindUniqueArgs<ExtArgs>>): Prisma__HighlightImageClient<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HighlightImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HighlightImageFindUniqueOrThrowArgs} args - Arguments to find a HighlightImage
     * @example
     * // Get one HighlightImage
     * const highlightImage = await prisma.highlightImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighlightImageFindUniqueOrThrowArgs>(args: SelectSubset<T, HighlightImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighlightImageClient<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HighlightImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightImageFindFirstArgs} args - Arguments to find a HighlightImage
     * @example
     * // Get one HighlightImage
     * const highlightImage = await prisma.highlightImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighlightImageFindFirstArgs>(args?: SelectSubset<T, HighlightImageFindFirstArgs<ExtArgs>>): Prisma__HighlightImageClient<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HighlightImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightImageFindFirstOrThrowArgs} args - Arguments to find a HighlightImage
     * @example
     * // Get one HighlightImage
     * const highlightImage = await prisma.highlightImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighlightImageFindFirstOrThrowArgs>(args?: SelectSubset<T, HighlightImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighlightImageClient<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HighlightImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HighlightImages
     * const highlightImages = await prisma.highlightImage.findMany()
     * 
     * // Get first 10 HighlightImages
     * const highlightImages = await prisma.highlightImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightImageWithIdOnly = await prisma.highlightImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighlightImageFindManyArgs>(args?: SelectSubset<T, HighlightImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HighlightImage.
     * @param {HighlightImageCreateArgs} args - Arguments to create a HighlightImage.
     * @example
     * // Create one HighlightImage
     * const HighlightImage = await prisma.highlightImage.create({
     *   data: {
     *     // ... data to create a HighlightImage
     *   }
     * })
     * 
     */
    create<T extends HighlightImageCreateArgs>(args: SelectSubset<T, HighlightImageCreateArgs<ExtArgs>>): Prisma__HighlightImageClient<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HighlightImages.
     * @param {HighlightImageCreateManyArgs} args - Arguments to create many HighlightImages.
     * @example
     * // Create many HighlightImages
     * const highlightImage = await prisma.highlightImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighlightImageCreateManyArgs>(args?: SelectSubset<T, HighlightImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HighlightImages and returns the data saved in the database.
     * @param {HighlightImageCreateManyAndReturnArgs} args - Arguments to create many HighlightImages.
     * @example
     * // Create many HighlightImages
     * const highlightImage = await prisma.highlightImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HighlightImages and only return the `id`
     * const highlightImageWithIdOnly = await prisma.highlightImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HighlightImageCreateManyAndReturnArgs>(args?: SelectSubset<T, HighlightImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HighlightImage.
     * @param {HighlightImageDeleteArgs} args - Arguments to delete one HighlightImage.
     * @example
     * // Delete one HighlightImage
     * const HighlightImage = await prisma.highlightImage.delete({
     *   where: {
     *     // ... filter to delete one HighlightImage
     *   }
     * })
     * 
     */
    delete<T extends HighlightImageDeleteArgs>(args: SelectSubset<T, HighlightImageDeleteArgs<ExtArgs>>): Prisma__HighlightImageClient<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HighlightImage.
     * @param {HighlightImageUpdateArgs} args - Arguments to update one HighlightImage.
     * @example
     * // Update one HighlightImage
     * const highlightImage = await prisma.highlightImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighlightImageUpdateArgs>(args: SelectSubset<T, HighlightImageUpdateArgs<ExtArgs>>): Prisma__HighlightImageClient<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HighlightImages.
     * @param {HighlightImageDeleteManyArgs} args - Arguments to filter HighlightImages to delete.
     * @example
     * // Delete a few HighlightImages
     * const { count } = await prisma.highlightImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighlightImageDeleteManyArgs>(args?: SelectSubset<T, HighlightImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HighlightImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HighlightImages
     * const highlightImage = await prisma.highlightImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighlightImageUpdateManyArgs>(args: SelectSubset<T, HighlightImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HighlightImages and returns the data updated in the database.
     * @param {HighlightImageUpdateManyAndReturnArgs} args - Arguments to update many HighlightImages.
     * @example
     * // Update many HighlightImages
     * const highlightImage = await prisma.highlightImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HighlightImages and only return the `id`
     * const highlightImageWithIdOnly = await prisma.highlightImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends HighlightImageUpdateManyAndReturnArgs>(args: SelectSubset<T, HighlightImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HighlightImage.
     * @param {HighlightImageUpsertArgs} args - Arguments to update or create a HighlightImage.
     * @example
     * // Update or create a HighlightImage
     * const highlightImage = await prisma.highlightImage.upsert({
     *   create: {
     *     // ... data to create a HighlightImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HighlightImage we want to update
     *   }
     * })
     */
    upsert<T extends HighlightImageUpsertArgs>(args: SelectSubset<T, HighlightImageUpsertArgs<ExtArgs>>): Prisma__HighlightImageClient<$Result.GetResult<Prisma.$HighlightImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HighlightImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightImageCountArgs} args - Arguments to filter HighlightImages to count.
     * @example
     * // Count the number of HighlightImages
     * const count = await prisma.highlightImage.count({
     *   where: {
     *     // ... the filter for the HighlightImages we want to count
     *   }
     * })
    **/
    count<T extends HighlightImageCountArgs>(
      args?: Subset<T, HighlightImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HighlightImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HighlightImageAggregateArgs>(args: Subset<T, HighlightImageAggregateArgs>): Prisma.PrismaPromise<GetHighlightImageAggregateType<T>>

    /**
     * Group by HighlightImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightImageGroupByArgs} args - Group by arguments.
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
      T extends HighlightImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightImageGroupByArgs['orderBy'] }
        : { orderBy?: HighlightImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HighlightImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HighlightImage model
   */
  readonly fields: HighlightImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HighlightImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighlightImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    highlight<T extends HighlightDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HighlightDefaultArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HighlightImage model
   */
  interface HighlightImageFieldRefs {
    readonly id: FieldRef<"HighlightImage", 'String'>
    readonly url: FieldRef<"HighlightImage", 'String'>
    readonly highlightId: FieldRef<"HighlightImage", 'String'>
    readonly createdAt: FieldRef<"HighlightImage", 'DateTime'>
    readonly updatedAt: FieldRef<"HighlightImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HighlightImage findUnique
   */
  export type HighlightImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    /**
     * Filter, which HighlightImage to fetch.
     */
    where: HighlightImageWhereUniqueInput
  }

  /**
   * HighlightImage findUniqueOrThrow
   */
  export type HighlightImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    /**
     * Filter, which HighlightImage to fetch.
     */
    where: HighlightImageWhereUniqueInput
  }

  /**
   * HighlightImage findFirst
   */
  export type HighlightImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    /**
     * Filter, which HighlightImage to fetch.
     */
    where?: HighlightImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightImages to fetch.
     */
    orderBy?: HighlightImageOrderByWithRelationInput | HighlightImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighlightImages.
     */
    cursor?: HighlightImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighlightImages.
     */
    distinct?: HighlightImageScalarFieldEnum | HighlightImageScalarFieldEnum[]
  }

  /**
   * HighlightImage findFirstOrThrow
   */
  export type HighlightImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    /**
     * Filter, which HighlightImage to fetch.
     */
    where?: HighlightImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightImages to fetch.
     */
    orderBy?: HighlightImageOrderByWithRelationInput | HighlightImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighlightImages.
     */
    cursor?: HighlightImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighlightImages.
     */
    distinct?: HighlightImageScalarFieldEnum | HighlightImageScalarFieldEnum[]
  }

  /**
   * HighlightImage findMany
   */
  export type HighlightImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    /**
     * Filter, which HighlightImages to fetch.
     */
    where?: HighlightImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightImages to fetch.
     */
    orderBy?: HighlightImageOrderByWithRelationInput | HighlightImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HighlightImages.
     */
    cursor?: HighlightImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightImages.
     */
    skip?: number
    distinct?: HighlightImageScalarFieldEnum | HighlightImageScalarFieldEnum[]
  }

  /**
   * HighlightImage create
   */
  export type HighlightImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    /**
     * The data needed to create a HighlightImage.
     */
    data: XOR<HighlightImageCreateInput, HighlightImageUncheckedCreateInput>
  }

  /**
   * HighlightImage createMany
   */
  export type HighlightImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HighlightImages.
     */
    data: HighlightImageCreateManyInput | HighlightImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HighlightImage createManyAndReturn
   */
  export type HighlightImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * The data used to create many HighlightImages.
     */
    data: HighlightImageCreateManyInput | HighlightImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HighlightImage update
   */
  export type HighlightImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    /**
     * The data needed to update a HighlightImage.
     */
    data: XOR<HighlightImageUpdateInput, HighlightImageUncheckedUpdateInput>
    /**
     * Choose, which HighlightImage to update.
     */
    where: HighlightImageWhereUniqueInput
  }

  /**
   * HighlightImage updateMany
   */
  export type HighlightImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HighlightImages.
     */
    data: XOR<HighlightImageUpdateManyMutationInput, HighlightImageUncheckedUpdateManyInput>
    /**
     * Filter which HighlightImages to update
     */
    where?: HighlightImageWhereInput
    /**
     * Limit how many HighlightImages to update.
     */
    limit?: number
  }

  /**
   * HighlightImage updateManyAndReturn
   */
  export type HighlightImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * The data used to update HighlightImages.
     */
    data: XOR<HighlightImageUpdateManyMutationInput, HighlightImageUncheckedUpdateManyInput>
    /**
     * Filter which HighlightImages to update
     */
    where?: HighlightImageWhereInput
    /**
     * Limit how many HighlightImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HighlightImage upsert
   */
  export type HighlightImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    /**
     * The filter to search for the HighlightImage to update in case it exists.
     */
    where: HighlightImageWhereUniqueInput
    /**
     * In case the HighlightImage found by the `where` argument doesn't exist, create a new HighlightImage with this data.
     */
    create: XOR<HighlightImageCreateInput, HighlightImageUncheckedCreateInput>
    /**
     * In case the HighlightImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightImageUpdateInput, HighlightImageUncheckedUpdateInput>
  }

  /**
   * HighlightImage delete
   */
  export type HighlightImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
    /**
     * Filter which HighlightImage to delete.
     */
    where: HighlightImageWhereUniqueInput
  }

  /**
   * HighlightImage deleteMany
   */
  export type HighlightImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighlightImages to delete
     */
    where?: HighlightImageWhereInput
    /**
     * Limit how many HighlightImages to delete.
     */
    limit?: number
  }

  /**
   * HighlightImage without action
   */
  export type HighlightImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightImage
     */
    select?: HighlightImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightImage
     */
    omit?: HighlightImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightImageInclude<ExtArgs> | null
  }


  /**
   * Model Attraction
   */

  export type AggregateAttraction = {
    _count: AttractionCountAggregateOutputType | null
    _min: AttractionMinAggregateOutputType | null
    _max: AttractionMaxAggregateOutputType | null
  }

  export type AttractionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttractionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttractionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    municipalityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttractionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttractionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttractionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attraction to aggregate.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attractions
    **/
    _count?: true | AttractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttractionMaxAggregateInputType
  }

  export type GetAttractionAggregateType<T extends AttractionAggregateArgs> = {
        [P in keyof T & keyof AggregateAttraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttraction[P]>
      : GetScalarType<T[P], AggregateAttraction[P]>
  }




  export type AttractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttractionWhereInput
    orderBy?: AttractionOrderByWithAggregationInput | AttractionOrderByWithAggregationInput[]
    by: AttractionScalarFieldEnum[] | AttractionScalarFieldEnum
    having?: AttractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttractionCountAggregateInputType | true
    _min?: AttractionMinAggregateInputType
    _max?: AttractionMaxAggregateInputType
  }

  export type AttractionGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string | null
    municipalityId: string
    createdAt: Date
    updatedAt: Date
    _count: AttractionCountAggregateOutputType | null
    _min: AttractionMinAggregateOutputType | null
    _max: AttractionMaxAggregateOutputType | null
  }

  type GetAttractionGroupByPayload<T extends AttractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttractionGroupByOutputType[P]>
            : GetScalarType<T[P], AttractionGroupByOutputType[P]>
        }
      >
    >


  export type AttractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attraction"]>

  export type AttractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attraction"]>

  export type AttractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attraction"]>

  export type AttractionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "municipalityId" | "createdAt" | "updatedAt", ExtArgs["result"]["attraction"]>
  export type AttractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type AttractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type AttractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }

  export type $AttractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attraction"
    objects: {
      municipality: Prisma.$MunicipalityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string | null
      municipalityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attraction"]>
    composites: {}
  }

  type AttractionGetPayload<S extends boolean | null | undefined | AttractionDefaultArgs> = $Result.GetResult<Prisma.$AttractionPayload, S>

  type AttractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttractionCountAggregateInputType | true
    }

  export interface AttractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attraction'], meta: { name: 'Attraction' } }
    /**
     * Find zero or one Attraction that matches the filter.
     * @param {AttractionFindUniqueArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttractionFindUniqueArgs>(args: SelectSubset<T, AttractionFindUniqueArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttractionFindUniqueOrThrowArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttractionFindUniqueOrThrowArgs>(args: SelectSubset<T, AttractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionFindFirstArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttractionFindFirstArgs>(args?: SelectSubset<T, AttractionFindFirstArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionFindFirstOrThrowArgs} args - Arguments to find a Attraction
     * @example
     * // Get one Attraction
     * const attraction = await prisma.attraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttractionFindFirstOrThrowArgs>(args?: SelectSubset<T, AttractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attractions
     * const attractions = await prisma.attraction.findMany()
     * 
     * // Get first 10 Attractions
     * const attractions = await prisma.attraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attractionWithIdOnly = await prisma.attraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttractionFindManyArgs>(args?: SelectSubset<T, AttractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attraction.
     * @param {AttractionCreateArgs} args - Arguments to create a Attraction.
     * @example
     * // Create one Attraction
     * const Attraction = await prisma.attraction.create({
     *   data: {
     *     // ... data to create a Attraction
     *   }
     * })
     * 
     */
    create<T extends AttractionCreateArgs>(args: SelectSubset<T, AttractionCreateArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attractions.
     * @param {AttractionCreateManyArgs} args - Arguments to create many Attractions.
     * @example
     * // Create many Attractions
     * const attraction = await prisma.attraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttractionCreateManyArgs>(args?: SelectSubset<T, AttractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attractions and returns the data saved in the database.
     * @param {AttractionCreateManyAndReturnArgs} args - Arguments to create many Attractions.
     * @example
     * // Create many Attractions
     * const attraction = await prisma.attraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attractions and only return the `id`
     * const attractionWithIdOnly = await prisma.attraction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttractionCreateManyAndReturnArgs>(args?: SelectSubset<T, AttractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attraction.
     * @param {AttractionDeleteArgs} args - Arguments to delete one Attraction.
     * @example
     * // Delete one Attraction
     * const Attraction = await prisma.attraction.delete({
     *   where: {
     *     // ... filter to delete one Attraction
     *   }
     * })
     * 
     */
    delete<T extends AttractionDeleteArgs>(args: SelectSubset<T, AttractionDeleteArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attraction.
     * @param {AttractionUpdateArgs} args - Arguments to update one Attraction.
     * @example
     * // Update one Attraction
     * const attraction = await prisma.attraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttractionUpdateArgs>(args: SelectSubset<T, AttractionUpdateArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attractions.
     * @param {AttractionDeleteManyArgs} args - Arguments to filter Attractions to delete.
     * @example
     * // Delete a few Attractions
     * const { count } = await prisma.attraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttractionDeleteManyArgs>(args?: SelectSubset<T, AttractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attractions
     * const attraction = await prisma.attraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttractionUpdateManyArgs>(args: SelectSubset<T, AttractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attractions and returns the data updated in the database.
     * @param {AttractionUpdateManyAndReturnArgs} args - Arguments to update many Attractions.
     * @example
     * // Update many Attractions
     * const attraction = await prisma.attraction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attractions and only return the `id`
     * const attractionWithIdOnly = await prisma.attraction.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttractionUpdateManyAndReturnArgs>(args: SelectSubset<T, AttractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attraction.
     * @param {AttractionUpsertArgs} args - Arguments to update or create a Attraction.
     * @example
     * // Update or create a Attraction
     * const attraction = await prisma.attraction.upsert({
     *   create: {
     *     // ... data to create a Attraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attraction we want to update
     *   }
     * })
     */
    upsert<T extends AttractionUpsertArgs>(args: SelectSubset<T, AttractionUpsertArgs<ExtArgs>>): Prisma__AttractionClient<$Result.GetResult<Prisma.$AttractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionCountArgs} args - Arguments to filter Attractions to count.
     * @example
     * // Count the number of Attractions
     * const count = await prisma.attraction.count({
     *   where: {
     *     // ... the filter for the Attractions we want to count
     *   }
     * })
    **/
    count<T extends AttractionCountArgs>(
      args?: Subset<T, AttractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttractionAggregateArgs>(args: Subset<T, AttractionAggregateArgs>): Prisma.PrismaPromise<GetAttractionAggregateType<T>>

    /**
     * Group by Attraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttractionGroupByArgs} args - Group by arguments.
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
      T extends AttractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttractionGroupByArgs['orderBy'] }
        : { orderBy?: AttractionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attraction model
   */
  readonly fields: AttractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipality<T extends MunicipalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipalityDefaultArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attraction model
   */
  interface AttractionFieldRefs {
    readonly id: FieldRef<"Attraction", 'String'>
    readonly name: FieldRef<"Attraction", 'String'>
    readonly description: FieldRef<"Attraction", 'String'>
    readonly image: FieldRef<"Attraction", 'String'>
    readonly municipalityId: FieldRef<"Attraction", 'String'>
    readonly createdAt: FieldRef<"Attraction", 'DateTime'>
    readonly updatedAt: FieldRef<"Attraction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attraction findUnique
   */
  export type AttractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where: AttractionWhereUniqueInput
  }

  /**
   * Attraction findUniqueOrThrow
   */
  export type AttractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where: AttractionWhereUniqueInput
  }

  /**
   * Attraction findFirst
   */
  export type AttractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attractions.
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attractions.
     */
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Attraction findFirstOrThrow
   */
  export type AttractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attraction to fetch.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attractions.
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attractions.
     */
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Attraction findMany
   */
  export type AttractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter, which Attractions to fetch.
     */
    where?: AttractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attractions to fetch.
     */
    orderBy?: AttractionOrderByWithRelationInput | AttractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attractions.
     */
    cursor?: AttractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attractions.
     */
    skip?: number
    distinct?: AttractionScalarFieldEnum | AttractionScalarFieldEnum[]
  }

  /**
   * Attraction create
   */
  export type AttractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Attraction.
     */
    data: XOR<AttractionCreateInput, AttractionUncheckedCreateInput>
  }

  /**
   * Attraction createMany
   */
  export type AttractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attractions.
     */
    data: AttractionCreateManyInput | AttractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attraction createManyAndReturn
   */
  export type AttractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * The data used to create many Attractions.
     */
    data: AttractionCreateManyInput | AttractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attraction update
   */
  export type AttractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Attraction.
     */
    data: XOR<AttractionUpdateInput, AttractionUncheckedUpdateInput>
    /**
     * Choose, which Attraction to update.
     */
    where: AttractionWhereUniqueInput
  }

  /**
   * Attraction updateMany
   */
  export type AttractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attractions.
     */
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyInput>
    /**
     * Filter which Attractions to update
     */
    where?: AttractionWhereInput
    /**
     * Limit how many Attractions to update.
     */
    limit?: number
  }

  /**
   * Attraction updateManyAndReturn
   */
  export type AttractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * The data used to update Attractions.
     */
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyInput>
    /**
     * Filter which Attractions to update
     */
    where?: AttractionWhereInput
    /**
     * Limit how many Attractions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attraction upsert
   */
  export type AttractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Attraction to update in case it exists.
     */
    where: AttractionWhereUniqueInput
    /**
     * In case the Attraction found by the `where` argument doesn't exist, create a new Attraction with this data.
     */
    create: XOR<AttractionCreateInput, AttractionUncheckedCreateInput>
    /**
     * In case the Attraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttractionUpdateInput, AttractionUncheckedUpdateInput>
  }

  /**
   * Attraction delete
   */
  export type AttractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
    /**
     * Filter which Attraction to delete.
     */
    where: AttractionWhereUniqueInput
  }

  /**
   * Attraction deleteMany
   */
  export type AttractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attractions to delete
     */
    where?: AttractionWhereInput
    /**
     * Limit how many Attractions to delete.
     */
    limit?: number
  }

  /**
   * Attraction without action
   */
  export type AttractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attraction
     */
    select?: AttractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attraction
     */
    omit?: AttractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttractionInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    image: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    image: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    image: number
    municipalityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    image?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    image?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    image?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string
    date: Date
    image: string | null
    municipalityId: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    galleryImages?: boolean | Event$galleryImagesArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    image?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "image" | "municipalityId" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleryImages?: boolean | Event$galleryImagesArgs<ExtArgs>
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      galleryImages: Prisma.$EventImagePayload<ExtArgs>[]
      municipality: Prisma.$MunicipalityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      date: Date
      image: string | null
      municipalityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    galleryImages<T extends Event$galleryImagesArgs<ExtArgs> = {}>(args?: Subset<T, Event$galleryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    municipality<T extends MunicipalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipalityDefaultArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly image: FieldRef<"Event", 'String'>
    readonly municipalityId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.galleryImages
   */
  export type Event$galleryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    where?: EventImageWhereInput
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    cursor?: EventImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventImage
   */

  export type AggregateEventImage = {
    _count: EventImageCountAggregateOutputType | null
    _min: EventImageMinAggregateOutputType | null
    _max: EventImageMaxAggregateOutputType | null
  }

  export type EventImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventImageCountAggregateOutputType = {
    id: number
    url: number
    eventId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventImageMinAggregateInputType = {
    id?: true
    url?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventImageMaxAggregateInputType = {
    id?: true
    url?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventImageCountAggregateInputType = {
    id?: true
    url?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventImage to aggregate.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventImages
    **/
    _count?: true | EventImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventImageMaxAggregateInputType
  }

  export type GetEventImageAggregateType<T extends EventImageAggregateArgs> = {
        [P in keyof T & keyof AggregateEventImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventImage[P]>
      : GetScalarType<T[P], AggregateEventImage[P]>
  }




  export type EventImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventImageWhereInput
    orderBy?: EventImageOrderByWithAggregationInput | EventImageOrderByWithAggregationInput[]
    by: EventImageScalarFieldEnum[] | EventImageScalarFieldEnum
    having?: EventImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventImageCountAggregateInputType | true
    _min?: EventImageMinAggregateInputType
    _max?: EventImageMaxAggregateInputType
  }

  export type EventImageGroupByOutputType = {
    id: string
    url: string
    eventId: string
    createdAt: Date
    updatedAt: Date
    _count: EventImageCountAggregateOutputType | null
    _min: EventImageMinAggregateOutputType | null
    _max: EventImageMaxAggregateOutputType | null
  }

  type GetEventImageGroupByPayload<T extends EventImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventImageGroupByOutputType[P]>
            : GetScalarType<T[P], EventImageGroupByOutputType[P]>
        }
      >
    >


  export type EventImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventImage"]>

  export type EventImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventImage"]>

  export type EventImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventImage"]>

  export type EventImageSelectScalar = {
    id?: boolean
    url?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "eventId" | "createdAt" | "updatedAt", ExtArgs["result"]["eventImage"]>
  export type EventImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventImage"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      eventId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventImage"]>
    composites: {}
  }

  type EventImageGetPayload<S extends boolean | null | undefined | EventImageDefaultArgs> = $Result.GetResult<Prisma.$EventImagePayload, S>

  type EventImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventImageCountAggregateInputType | true
    }

  export interface EventImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventImage'], meta: { name: 'EventImage' } }
    /**
     * Find zero or one EventImage that matches the filter.
     * @param {EventImageFindUniqueArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventImageFindUniqueArgs>(args: SelectSubset<T, EventImageFindUniqueArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventImageFindUniqueOrThrowArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventImageFindUniqueOrThrowArgs>(args: SelectSubset<T, EventImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageFindFirstArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventImageFindFirstArgs>(args?: SelectSubset<T, EventImageFindFirstArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageFindFirstOrThrowArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventImageFindFirstOrThrowArgs>(args?: SelectSubset<T, EventImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventImages
     * const eventImages = await prisma.eventImage.findMany()
     * 
     * // Get first 10 EventImages
     * const eventImages = await prisma.eventImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventImageWithIdOnly = await prisma.eventImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventImageFindManyArgs>(args?: SelectSubset<T, EventImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventImage.
     * @param {EventImageCreateArgs} args - Arguments to create a EventImage.
     * @example
     * // Create one EventImage
     * const EventImage = await prisma.eventImage.create({
     *   data: {
     *     // ... data to create a EventImage
     *   }
     * })
     * 
     */
    create<T extends EventImageCreateArgs>(args: SelectSubset<T, EventImageCreateArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventImages.
     * @param {EventImageCreateManyArgs} args - Arguments to create many EventImages.
     * @example
     * // Create many EventImages
     * const eventImage = await prisma.eventImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventImageCreateManyArgs>(args?: SelectSubset<T, EventImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventImages and returns the data saved in the database.
     * @param {EventImageCreateManyAndReturnArgs} args - Arguments to create many EventImages.
     * @example
     * // Create many EventImages
     * const eventImage = await prisma.eventImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventImages and only return the `id`
     * const eventImageWithIdOnly = await prisma.eventImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventImageCreateManyAndReturnArgs>(args?: SelectSubset<T, EventImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventImage.
     * @param {EventImageDeleteArgs} args - Arguments to delete one EventImage.
     * @example
     * // Delete one EventImage
     * const EventImage = await prisma.eventImage.delete({
     *   where: {
     *     // ... filter to delete one EventImage
     *   }
     * })
     * 
     */
    delete<T extends EventImageDeleteArgs>(args: SelectSubset<T, EventImageDeleteArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventImage.
     * @param {EventImageUpdateArgs} args - Arguments to update one EventImage.
     * @example
     * // Update one EventImage
     * const eventImage = await prisma.eventImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventImageUpdateArgs>(args: SelectSubset<T, EventImageUpdateArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventImages.
     * @param {EventImageDeleteManyArgs} args - Arguments to filter EventImages to delete.
     * @example
     * // Delete a few EventImages
     * const { count } = await prisma.eventImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventImageDeleteManyArgs>(args?: SelectSubset<T, EventImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventImages
     * const eventImage = await prisma.eventImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventImageUpdateManyArgs>(args: SelectSubset<T, EventImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventImages and returns the data updated in the database.
     * @param {EventImageUpdateManyAndReturnArgs} args - Arguments to update many EventImages.
     * @example
     * // Update many EventImages
     * const eventImage = await prisma.eventImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventImages and only return the `id`
     * const eventImageWithIdOnly = await prisma.eventImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventImageUpdateManyAndReturnArgs>(args: SelectSubset<T, EventImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventImage.
     * @param {EventImageUpsertArgs} args - Arguments to update or create a EventImage.
     * @example
     * // Update or create a EventImage
     * const eventImage = await prisma.eventImage.upsert({
     *   create: {
     *     // ... data to create a EventImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventImage we want to update
     *   }
     * })
     */
    upsert<T extends EventImageUpsertArgs>(args: SelectSubset<T, EventImageUpsertArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageCountArgs} args - Arguments to filter EventImages to count.
     * @example
     * // Count the number of EventImages
     * const count = await prisma.eventImage.count({
     *   where: {
     *     // ... the filter for the EventImages we want to count
     *   }
     * })
    **/
    count<T extends EventImageCountArgs>(
      args?: Subset<T, EventImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventImageAggregateArgs>(args: Subset<T, EventImageAggregateArgs>): Prisma.PrismaPromise<GetEventImageAggregateType<T>>

    /**
     * Group by EventImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageGroupByArgs} args - Group by arguments.
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
      T extends EventImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventImageGroupByArgs['orderBy'] }
        : { orderBy?: EventImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventImage model
   */
  readonly fields: EventImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventImage model
   */
  interface EventImageFieldRefs {
    readonly id: FieldRef<"EventImage", 'String'>
    readonly url: FieldRef<"EventImage", 'String'>
    readonly eventId: FieldRef<"EventImage", 'String'>
    readonly createdAt: FieldRef<"EventImage", 'DateTime'>
    readonly updatedAt: FieldRef<"EventImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventImage findUnique
   */
  export type EventImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage findUniqueOrThrow
   */
  export type EventImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage findFirst
   */
  export type EventImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventImages.
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventImages.
     */
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * EventImage findFirstOrThrow
   */
  export type EventImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventImages.
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventImages.
     */
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * EventImage findMany
   */
  export type EventImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImages to fetch.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventImages.
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * EventImage create
   */
  export type EventImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * The data needed to create a EventImage.
     */
    data: XOR<EventImageCreateInput, EventImageUncheckedCreateInput>
  }

  /**
   * EventImage createMany
   */
  export type EventImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventImages.
     */
    data: EventImageCreateManyInput | EventImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventImage createManyAndReturn
   */
  export type EventImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * The data used to create many EventImages.
     */
    data: EventImageCreateManyInput | EventImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventImage update
   */
  export type EventImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * The data needed to update a EventImage.
     */
    data: XOR<EventImageUpdateInput, EventImageUncheckedUpdateInput>
    /**
     * Choose, which EventImage to update.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage updateMany
   */
  export type EventImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventImages.
     */
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyInput>
    /**
     * Filter which EventImages to update
     */
    where?: EventImageWhereInput
    /**
     * Limit how many EventImages to update.
     */
    limit?: number
  }

  /**
   * EventImage updateManyAndReturn
   */
  export type EventImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * The data used to update EventImages.
     */
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyInput>
    /**
     * Filter which EventImages to update
     */
    where?: EventImageWhereInput
    /**
     * Limit how many EventImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventImage upsert
   */
  export type EventImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * The filter to search for the EventImage to update in case it exists.
     */
    where: EventImageWhereUniqueInput
    /**
     * In case the EventImage found by the `where` argument doesn't exist, create a new EventImage with this data.
     */
    create: XOR<EventImageCreateInput, EventImageUncheckedCreateInput>
    /**
     * In case the EventImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventImageUpdateInput, EventImageUncheckedUpdateInput>
  }

  /**
   * EventImage delete
   */
  export type EventImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter which EventImage to delete.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage deleteMany
   */
  export type EventImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventImages to delete
     */
    where?: EventImageWhereInput
    /**
     * Limit how many EventImages to delete.
     */
    limit?: number
  }

  /**
   * EventImage without action
   */
  export type EventImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
  }


  /**
   * Model Guide
   */

  export type AggregateGuide = {
    _count: GuideCountAggregateOutputType | null
    _min: GuideMinAggregateOutputType | null
    _max: GuideMaxAggregateOutputType | null
  }

  export type GuideMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    description: string | null
    image: string | null
    email: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    description: string | null
    image: string | null
    email: string | null
    municipalityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    languages: number
    description: number
    image: number
    email: number
    municipalityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuideMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    description?: true
    image?: true
    email?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    description?: true
    image?: true
    email?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    languages?: true
    description?: true
    image?: true
    email?: true
    municipalityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guide to aggregate.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guides
    **/
    _count?: true | GuideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuideMaxAggregateInputType
  }

  export type GetGuideAggregateType<T extends GuideAggregateArgs> = {
        [P in keyof T & keyof AggregateGuide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuide[P]>
      : GetScalarType<T[P], AggregateGuide[P]>
  }




  export type GuideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideWhereInput
    orderBy?: GuideOrderByWithAggregationInput | GuideOrderByWithAggregationInput[]
    by: GuideScalarFieldEnum[] | GuideScalarFieldEnum
    having?: GuideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuideCountAggregateInputType | true
    _min?: GuideMinAggregateInputType
    _max?: GuideMaxAggregateInputType
  }

  export type GuideGroupByOutputType = {
    id: string
    name: string
    phone: string
    languages: string[]
    description: string | null
    image: string | null
    email: string | null
    municipalityId: string
    createdAt: Date
    updatedAt: Date
    _count: GuideCountAggregateOutputType | null
    _min: GuideMinAggregateOutputType | null
    _max: GuideMaxAggregateOutputType | null
  }

  type GetGuideGroupByPayload<T extends GuideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuideGroupByOutputType[P]>
            : GetScalarType<T[P], GuideGroupByOutputType[P]>
        }
      >
    >


  export type GuideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    languages?: boolean
    description?: boolean
    image?: boolean
    email?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guide"]>

  export type GuideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    languages?: boolean
    description?: boolean
    image?: boolean
    email?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guide"]>

  export type GuideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    languages?: boolean
    description?: boolean
    image?: boolean
    email?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guide"]>

  export type GuideSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    languages?: boolean
    description?: boolean
    image?: boolean
    email?: boolean
    municipalityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "languages" | "description" | "image" | "email" | "municipalityId" | "createdAt" | "updatedAt", ExtArgs["result"]["guide"]>
  export type GuideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type GuideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }
  export type GuideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipality?: boolean | MunicipalityDefaultArgs<ExtArgs>
  }

  export type $GuidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guide"
    objects: {
      municipality: Prisma.$MunicipalityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      languages: string[]
      description: string | null
      image: string | null
      email: string | null
      municipalityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guide"]>
    composites: {}
  }

  type GuideGetPayload<S extends boolean | null | undefined | GuideDefaultArgs> = $Result.GetResult<Prisma.$GuidePayload, S>

  type GuideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuideCountAggregateInputType | true
    }

  export interface GuideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guide'], meta: { name: 'Guide' } }
    /**
     * Find zero or one Guide that matches the filter.
     * @param {GuideFindUniqueArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuideFindUniqueArgs>(args: SelectSubset<T, GuideFindUniqueArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guide that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuideFindUniqueOrThrowArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuideFindUniqueOrThrowArgs>(args: SelectSubset<T, GuideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guide that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideFindFirstArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuideFindFirstArgs>(args?: SelectSubset<T, GuideFindFirstArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guide that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideFindFirstOrThrowArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuideFindFirstOrThrowArgs>(args?: SelectSubset<T, GuideFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guides
     * const guides = await prisma.guide.findMany()
     * 
     * // Get first 10 Guides
     * const guides = await prisma.guide.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guideWithIdOnly = await prisma.guide.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuideFindManyArgs>(args?: SelectSubset<T, GuideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guide.
     * @param {GuideCreateArgs} args - Arguments to create a Guide.
     * @example
     * // Create one Guide
     * const Guide = await prisma.guide.create({
     *   data: {
     *     // ... data to create a Guide
     *   }
     * })
     * 
     */
    create<T extends GuideCreateArgs>(args: SelectSubset<T, GuideCreateArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guides.
     * @param {GuideCreateManyArgs} args - Arguments to create many Guides.
     * @example
     * // Create many Guides
     * const guide = await prisma.guide.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuideCreateManyArgs>(args?: SelectSubset<T, GuideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guides and returns the data saved in the database.
     * @param {GuideCreateManyAndReturnArgs} args - Arguments to create many Guides.
     * @example
     * // Create many Guides
     * const guide = await prisma.guide.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guides and only return the `id`
     * const guideWithIdOnly = await prisma.guide.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuideCreateManyAndReturnArgs>(args?: SelectSubset<T, GuideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guide.
     * @param {GuideDeleteArgs} args - Arguments to delete one Guide.
     * @example
     * // Delete one Guide
     * const Guide = await prisma.guide.delete({
     *   where: {
     *     // ... filter to delete one Guide
     *   }
     * })
     * 
     */
    delete<T extends GuideDeleteArgs>(args: SelectSubset<T, GuideDeleteArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guide.
     * @param {GuideUpdateArgs} args - Arguments to update one Guide.
     * @example
     * // Update one Guide
     * const guide = await prisma.guide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuideUpdateArgs>(args: SelectSubset<T, GuideUpdateArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guides.
     * @param {GuideDeleteManyArgs} args - Arguments to filter Guides to delete.
     * @example
     * // Delete a few Guides
     * const { count } = await prisma.guide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuideDeleteManyArgs>(args?: SelectSubset<T, GuideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guides
     * const guide = await prisma.guide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuideUpdateManyArgs>(args: SelectSubset<T, GuideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guides and returns the data updated in the database.
     * @param {GuideUpdateManyAndReturnArgs} args - Arguments to update many Guides.
     * @example
     * // Update many Guides
     * const guide = await prisma.guide.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guides and only return the `id`
     * const guideWithIdOnly = await prisma.guide.updateManyAndReturn({
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
    updateManyAndReturn<T extends GuideUpdateManyAndReturnArgs>(args: SelectSubset<T, GuideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guide.
     * @param {GuideUpsertArgs} args - Arguments to update or create a Guide.
     * @example
     * // Update or create a Guide
     * const guide = await prisma.guide.upsert({
     *   create: {
     *     // ... data to create a Guide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guide we want to update
     *   }
     * })
     */
    upsert<T extends GuideUpsertArgs>(args: SelectSubset<T, GuideUpsertArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideCountArgs} args - Arguments to filter Guides to count.
     * @example
     * // Count the number of Guides
     * const count = await prisma.guide.count({
     *   where: {
     *     // ... the filter for the Guides we want to count
     *   }
     * })
    **/
    count<T extends GuideCountArgs>(
      args?: Subset<T, GuideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuideAggregateArgs>(args: Subset<T, GuideAggregateArgs>): Prisma.PrismaPromise<GetGuideAggregateType<T>>

    /**
     * Group by Guide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideGroupByArgs} args - Group by arguments.
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
      T extends GuideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuideGroupByArgs['orderBy'] }
        : { orderBy?: GuideGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guide model
   */
  readonly fields: GuideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipality<T extends MunicipalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipalityDefaultArgs<ExtArgs>>): Prisma__MunicipalityClient<$Result.GetResult<Prisma.$MunicipalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Guide model
   */
  interface GuideFieldRefs {
    readonly id: FieldRef<"Guide", 'String'>
    readonly name: FieldRef<"Guide", 'String'>
    readonly phone: FieldRef<"Guide", 'String'>
    readonly languages: FieldRef<"Guide", 'String[]'>
    readonly description: FieldRef<"Guide", 'String'>
    readonly image: FieldRef<"Guide", 'String'>
    readonly email: FieldRef<"Guide", 'String'>
    readonly municipalityId: FieldRef<"Guide", 'String'>
    readonly createdAt: FieldRef<"Guide", 'DateTime'>
    readonly updatedAt: FieldRef<"Guide", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guide findUnique
   */
  export type GuideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide findUniqueOrThrow
   */
  export type GuideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide findFirst
   */
  export type GuideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guides.
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guides.
     */
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Guide findFirstOrThrow
   */
  export type GuideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guides.
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guides.
     */
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Guide findMany
   */
  export type GuideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guides to fetch.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guides.
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Guide create
   */
  export type GuideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * The data needed to create a Guide.
     */
    data: XOR<GuideCreateInput, GuideUncheckedCreateInput>
  }

  /**
   * Guide createMany
   */
  export type GuideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guides.
     */
    data: GuideCreateManyInput | GuideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guide createManyAndReturn
   */
  export type GuideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * The data used to create many Guides.
     */
    data: GuideCreateManyInput | GuideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guide update
   */
  export type GuideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * The data needed to update a Guide.
     */
    data: XOR<GuideUpdateInput, GuideUncheckedUpdateInput>
    /**
     * Choose, which Guide to update.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide updateMany
   */
  export type GuideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guides.
     */
    data: XOR<GuideUpdateManyMutationInput, GuideUncheckedUpdateManyInput>
    /**
     * Filter which Guides to update
     */
    where?: GuideWhereInput
    /**
     * Limit how many Guides to update.
     */
    limit?: number
  }

  /**
   * Guide updateManyAndReturn
   */
  export type GuideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * The data used to update Guides.
     */
    data: XOR<GuideUpdateManyMutationInput, GuideUncheckedUpdateManyInput>
    /**
     * Filter which Guides to update
     */
    where?: GuideWhereInput
    /**
     * Limit how many Guides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guide upsert
   */
  export type GuideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * The filter to search for the Guide to update in case it exists.
     */
    where: GuideWhereUniqueInput
    /**
     * In case the Guide found by the `where` argument doesn't exist, create a new Guide with this data.
     */
    create: XOR<GuideCreateInput, GuideUncheckedCreateInput>
    /**
     * In case the Guide was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuideUpdateInput, GuideUncheckedUpdateInput>
  }

  /**
   * Guide delete
   */
  export type GuideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter which Guide to delete.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide deleteMany
   */
  export type GuideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guides to delete
     */
    where?: GuideWhereInput
    /**
     * Limit how many Guides to delete.
     */
    limit?: number
  }

  /**
   * Guide without action
   */
  export type GuideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    coverImage: string | null
    authorId: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    coverImage: string | null
    authorId: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    coverImage: number
    authorId: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    coverImage?: true
    authorId?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    coverImage?: true
    authorId?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    coverImage?: true
    authorId?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    content: string
    coverImage: string | null
    authorId: string
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    coverImage?: boolean
    authorId?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    coverImage?: boolean
    authorId?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    coverImage?: boolean
    authorId?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    coverImage?: boolean
    authorId?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "coverImage" | "authorId" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      coverImage: string | null
      authorId: string
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly coverImage: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
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
    clerkId: 'clerkId',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    image: 'image',
    municipalityId: 'municipalityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MunicipalityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    coatOfArms: 'coatOfArms',
    latitude: 'latitude',
    longitude: 'longitude',
    about: 'about',
    slug: 'slug',
    ibgeCode: 'ibgeCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MunicipalityScalarFieldEnum = (typeof MunicipalityScalarFieldEnum)[keyof typeof MunicipalityScalarFieldEnum]


  export const MunicipalityImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    municipalityId: 'municipalityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MunicipalityImageScalarFieldEnum = (typeof MunicipalityImageScalarFieldEnum)[keyof typeof MunicipalityImageScalarFieldEnum]


  export const HighlightScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    municipalityId: 'municipalityId',
    createdAt: 'createdAt'
  };

  export type HighlightScalarFieldEnum = (typeof HighlightScalarFieldEnum)[keyof typeof HighlightScalarFieldEnum]


  export const HighlightImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    highlightId: 'highlightId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HighlightImageScalarFieldEnum = (typeof HighlightImageScalarFieldEnum)[keyof typeof HighlightImageScalarFieldEnum]


  export const AttractionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    municipalityId: 'municipalityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttractionScalarFieldEnum = (typeof AttractionScalarFieldEnum)[keyof typeof AttractionScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    image: 'image',
    municipalityId: 'municipalityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    eventId: 'eventId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventImageScalarFieldEnum = (typeof EventImageScalarFieldEnum)[keyof typeof EventImageScalarFieldEnum]


  export const GuideScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    languages: 'languages',
    description: 'description',
    image: 'image',
    email: 'email',
    municipalityId: 'municipalityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuideScalarFieldEnum = (typeof GuideScalarFieldEnum)[keyof typeof GuideScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    coverImage: 'coverImage',
    authorId: 'authorId',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    municipalityId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    municipality?: XOR<MunicipalityNullableScalarRelationFilter, MunicipalityWhereInput> | null
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    municipalityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    municipality?: MunicipalityOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    municipalityId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    municipality?: XOR<MunicipalityNullableScalarRelationFilter, MunicipalityWhereInput> | null
    posts?: PostListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    municipalityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    municipalityId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MunicipalityWhereInput = {
    AND?: MunicipalityWhereInput | MunicipalityWhereInput[]
    OR?: MunicipalityWhereInput[]
    NOT?: MunicipalityWhereInput | MunicipalityWhereInput[]
    id?: StringFilter<"Municipality"> | string
    name?: StringFilter<"Municipality"> | string
    description?: StringNullableFilter<"Municipality"> | string | null
    coatOfArms?: StringNullableFilter<"Municipality"> | string | null
    latitude?: FloatNullableFilter<"Municipality"> | number | null
    longitude?: FloatNullableFilter<"Municipality"> | number | null
    about?: StringNullableFilter<"Municipality"> | string | null
    slug?: StringNullableFilter<"Municipality"> | string | null
    ibgeCode?: StringNullableFilter<"Municipality"> | string | null
    createdAt?: DateTimeFilter<"Municipality"> | Date | string
    updatedAt?: DateTimeFilter<"Municipality"> | Date | string
    users?: UserListRelationFilter
    highlights?: HighlightListRelationFilter
    attractions?: AttractionListRelationFilter
    events?: EventListRelationFilter
    guides?: GuideListRelationFilter
    images?: MunicipalityImageListRelationFilter
  }

  export type MunicipalityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coatOfArms?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    ibgeCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    highlights?: HighlightOrderByRelationAggregateInput
    attractions?: AttractionOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    guides?: GuideOrderByRelationAggregateInput
    images?: MunicipalityImageOrderByRelationAggregateInput
  }

  export type MunicipalityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    ibgeCode?: string
    AND?: MunicipalityWhereInput | MunicipalityWhereInput[]
    OR?: MunicipalityWhereInput[]
    NOT?: MunicipalityWhereInput | MunicipalityWhereInput[]
    name?: StringFilter<"Municipality"> | string
    description?: StringNullableFilter<"Municipality"> | string | null
    coatOfArms?: StringNullableFilter<"Municipality"> | string | null
    latitude?: FloatNullableFilter<"Municipality"> | number | null
    longitude?: FloatNullableFilter<"Municipality"> | number | null
    about?: StringNullableFilter<"Municipality"> | string | null
    createdAt?: DateTimeFilter<"Municipality"> | Date | string
    updatedAt?: DateTimeFilter<"Municipality"> | Date | string
    users?: UserListRelationFilter
    highlights?: HighlightListRelationFilter
    attractions?: AttractionListRelationFilter
    events?: EventListRelationFilter
    guides?: GuideListRelationFilter
    images?: MunicipalityImageListRelationFilter
  }, "id" | "slug" | "ibgeCode">

  export type MunicipalityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coatOfArms?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    ibgeCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MunicipalityCountOrderByAggregateInput
    _avg?: MunicipalityAvgOrderByAggregateInput
    _max?: MunicipalityMaxOrderByAggregateInput
    _min?: MunicipalityMinOrderByAggregateInput
    _sum?: MunicipalitySumOrderByAggregateInput
  }

  export type MunicipalityScalarWhereWithAggregatesInput = {
    AND?: MunicipalityScalarWhereWithAggregatesInput | MunicipalityScalarWhereWithAggregatesInput[]
    OR?: MunicipalityScalarWhereWithAggregatesInput[]
    NOT?: MunicipalityScalarWhereWithAggregatesInput | MunicipalityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Municipality"> | string
    name?: StringWithAggregatesFilter<"Municipality"> | string
    description?: StringNullableWithAggregatesFilter<"Municipality"> | string | null
    coatOfArms?: StringNullableWithAggregatesFilter<"Municipality"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Municipality"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Municipality"> | number | null
    about?: StringNullableWithAggregatesFilter<"Municipality"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Municipality"> | string | null
    ibgeCode?: StringNullableWithAggregatesFilter<"Municipality"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Municipality"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Municipality"> | Date | string
  }

  export type MunicipalityImageWhereInput = {
    AND?: MunicipalityImageWhereInput | MunicipalityImageWhereInput[]
    OR?: MunicipalityImageWhereInput[]
    NOT?: MunicipalityImageWhereInput | MunicipalityImageWhereInput[]
    id?: StringFilter<"MunicipalityImage"> | string
    url?: StringFilter<"MunicipalityImage"> | string
    municipalityId?: StringFilter<"MunicipalityImage"> | string
    createdAt?: DateTimeFilter<"MunicipalityImage"> | Date | string
    updatedAt?: DateTimeFilter<"MunicipalityImage"> | Date | string
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }

  export type MunicipalityImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    municipality?: MunicipalityOrderByWithRelationInput
  }

  export type MunicipalityImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MunicipalityImageWhereInput | MunicipalityImageWhereInput[]
    OR?: MunicipalityImageWhereInput[]
    NOT?: MunicipalityImageWhereInput | MunicipalityImageWhereInput[]
    url?: StringFilter<"MunicipalityImage"> | string
    municipalityId?: StringFilter<"MunicipalityImage"> | string
    createdAt?: DateTimeFilter<"MunicipalityImage"> | Date | string
    updatedAt?: DateTimeFilter<"MunicipalityImage"> | Date | string
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }, "id">

  export type MunicipalityImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MunicipalityImageCountOrderByAggregateInput
    _max?: MunicipalityImageMaxOrderByAggregateInput
    _min?: MunicipalityImageMinOrderByAggregateInput
  }

  export type MunicipalityImageScalarWhereWithAggregatesInput = {
    AND?: MunicipalityImageScalarWhereWithAggregatesInput | MunicipalityImageScalarWhereWithAggregatesInput[]
    OR?: MunicipalityImageScalarWhereWithAggregatesInput[]
    NOT?: MunicipalityImageScalarWhereWithAggregatesInput | MunicipalityImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MunicipalityImage"> | string
    url?: StringWithAggregatesFilter<"MunicipalityImage"> | string
    municipalityId?: StringWithAggregatesFilter<"MunicipalityImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MunicipalityImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MunicipalityImage"> | Date | string
  }

  export type HighlightWhereInput = {
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    id?: StringFilter<"Highlight"> | string
    title?: StringFilter<"Highlight"> | string
    description?: StringNullableFilter<"Highlight"> | string | null
    latitude?: FloatNullableFilter<"Highlight"> | number | null
    longitude?: FloatNullableFilter<"Highlight"> | number | null
    municipalityId?: StringFilter<"Highlight"> | string
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
    galleryImages?: HighlightImageListRelationFilter
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }

  export type HighlightOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    galleryImages?: HighlightImageOrderByRelationAggregateInput
    municipality?: MunicipalityOrderByWithRelationInput
  }

  export type HighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    title?: StringFilter<"Highlight"> | string
    description?: StringNullableFilter<"Highlight"> | string | null
    latitude?: FloatNullableFilter<"Highlight"> | number | null
    longitude?: FloatNullableFilter<"Highlight"> | number | null
    municipalityId?: StringFilter<"Highlight"> | string
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
    galleryImages?: HighlightImageListRelationFilter
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }, "id">

  export type HighlightOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    _count?: HighlightCountOrderByAggregateInput
    _avg?: HighlightAvgOrderByAggregateInput
    _max?: HighlightMaxOrderByAggregateInput
    _min?: HighlightMinOrderByAggregateInput
    _sum?: HighlightSumOrderByAggregateInput
  }

  export type HighlightScalarWhereWithAggregatesInput = {
    AND?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    OR?: HighlightScalarWhereWithAggregatesInput[]
    NOT?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Highlight"> | string
    title?: StringWithAggregatesFilter<"Highlight"> | string
    description?: StringNullableWithAggregatesFilter<"Highlight"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Highlight"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Highlight"> | number | null
    municipalityId?: StringWithAggregatesFilter<"Highlight"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Highlight"> | Date | string
  }

  export type HighlightImageWhereInput = {
    AND?: HighlightImageWhereInput | HighlightImageWhereInput[]
    OR?: HighlightImageWhereInput[]
    NOT?: HighlightImageWhereInput | HighlightImageWhereInput[]
    id?: StringFilter<"HighlightImage"> | string
    url?: StringFilter<"HighlightImage"> | string
    highlightId?: StringFilter<"HighlightImage"> | string
    createdAt?: DateTimeFilter<"HighlightImage"> | Date | string
    updatedAt?: DateTimeFilter<"HighlightImage"> | Date | string
    highlight?: XOR<HighlightScalarRelationFilter, HighlightWhereInput>
  }

  export type HighlightImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    highlightId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    highlight?: HighlightOrderByWithRelationInput
  }

  export type HighlightImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HighlightImageWhereInput | HighlightImageWhereInput[]
    OR?: HighlightImageWhereInput[]
    NOT?: HighlightImageWhereInput | HighlightImageWhereInput[]
    url?: StringFilter<"HighlightImage"> | string
    highlightId?: StringFilter<"HighlightImage"> | string
    createdAt?: DateTimeFilter<"HighlightImage"> | Date | string
    updatedAt?: DateTimeFilter<"HighlightImage"> | Date | string
    highlight?: XOR<HighlightScalarRelationFilter, HighlightWhereInput>
  }, "id">

  export type HighlightImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    highlightId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HighlightImageCountOrderByAggregateInput
    _max?: HighlightImageMaxOrderByAggregateInput
    _min?: HighlightImageMinOrderByAggregateInput
  }

  export type HighlightImageScalarWhereWithAggregatesInput = {
    AND?: HighlightImageScalarWhereWithAggregatesInput | HighlightImageScalarWhereWithAggregatesInput[]
    OR?: HighlightImageScalarWhereWithAggregatesInput[]
    NOT?: HighlightImageScalarWhereWithAggregatesInput | HighlightImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HighlightImage"> | string
    url?: StringWithAggregatesFilter<"HighlightImage"> | string
    highlightId?: StringWithAggregatesFilter<"HighlightImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HighlightImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HighlightImage"> | Date | string
  }

  export type AttractionWhereInput = {
    AND?: AttractionWhereInput | AttractionWhereInput[]
    OR?: AttractionWhereInput[]
    NOT?: AttractionWhereInput | AttractionWhereInput[]
    id?: StringFilter<"Attraction"> | string
    name?: StringFilter<"Attraction"> | string
    description?: StringFilter<"Attraction"> | string
    image?: StringNullableFilter<"Attraction"> | string | null
    municipalityId?: StringFilter<"Attraction"> | string
    createdAt?: DateTimeFilter<"Attraction"> | Date | string
    updatedAt?: DateTimeFilter<"Attraction"> | Date | string
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }

  export type AttractionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    municipality?: MunicipalityOrderByWithRelationInput
  }

  export type AttractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttractionWhereInput | AttractionWhereInput[]
    OR?: AttractionWhereInput[]
    NOT?: AttractionWhereInput | AttractionWhereInput[]
    name?: StringFilter<"Attraction"> | string
    description?: StringFilter<"Attraction"> | string
    image?: StringNullableFilter<"Attraction"> | string | null
    municipalityId?: StringFilter<"Attraction"> | string
    createdAt?: DateTimeFilter<"Attraction"> | Date | string
    updatedAt?: DateTimeFilter<"Attraction"> | Date | string
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }, "id">

  export type AttractionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttractionCountOrderByAggregateInput
    _max?: AttractionMaxOrderByAggregateInput
    _min?: AttractionMinOrderByAggregateInput
  }

  export type AttractionScalarWhereWithAggregatesInput = {
    AND?: AttractionScalarWhereWithAggregatesInput | AttractionScalarWhereWithAggregatesInput[]
    OR?: AttractionScalarWhereWithAggregatesInput[]
    NOT?: AttractionScalarWhereWithAggregatesInput | AttractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attraction"> | string
    name?: StringWithAggregatesFilter<"Attraction"> | string
    description?: StringWithAggregatesFilter<"Attraction"> | string
    image?: StringNullableWithAggregatesFilter<"Attraction"> | string | null
    municipalityId?: StringWithAggregatesFilter<"Attraction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attraction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attraction"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    image?: StringNullableFilter<"Event"> | string | null
    municipalityId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    galleryImages?: EventImageListRelationFilter
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    image?: SortOrderInput | SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    galleryImages?: EventImageOrderByRelationAggregateInput
    municipality?: MunicipalityOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    image?: StringNullableFilter<"Event"> | string | null
    municipalityId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    galleryImages?: EventImageListRelationFilter
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    image?: SortOrderInput | SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Event"> | string | null
    municipalityId?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventImageWhereInput = {
    AND?: EventImageWhereInput | EventImageWhereInput[]
    OR?: EventImageWhereInput[]
    NOT?: EventImageWhereInput | EventImageWhereInput[]
    id?: StringFilter<"EventImage"> | string
    url?: StringFilter<"EventImage"> | string
    eventId?: StringFilter<"EventImage"> | string
    createdAt?: DateTimeFilter<"EventImage"> | Date | string
    updatedAt?: DateTimeFilter<"EventImage"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventImageWhereInput | EventImageWhereInput[]
    OR?: EventImageWhereInput[]
    NOT?: EventImageWhereInput | EventImageWhereInput[]
    url?: StringFilter<"EventImage"> | string
    eventId?: StringFilter<"EventImage"> | string
    createdAt?: DateTimeFilter<"EventImage"> | Date | string
    updatedAt?: DateTimeFilter<"EventImage"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type EventImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventImageCountOrderByAggregateInput
    _max?: EventImageMaxOrderByAggregateInput
    _min?: EventImageMinOrderByAggregateInput
  }

  export type EventImageScalarWhereWithAggregatesInput = {
    AND?: EventImageScalarWhereWithAggregatesInput | EventImageScalarWhereWithAggregatesInput[]
    OR?: EventImageScalarWhereWithAggregatesInput[]
    NOT?: EventImageScalarWhereWithAggregatesInput | EventImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventImage"> | string
    url?: StringWithAggregatesFilter<"EventImage"> | string
    eventId?: StringWithAggregatesFilter<"EventImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventImage"> | Date | string
  }

  export type GuideWhereInput = {
    AND?: GuideWhereInput | GuideWhereInput[]
    OR?: GuideWhereInput[]
    NOT?: GuideWhereInput | GuideWhereInput[]
    id?: StringFilter<"Guide"> | string
    name?: StringFilter<"Guide"> | string
    phone?: StringFilter<"Guide"> | string
    languages?: StringNullableListFilter<"Guide">
    description?: StringNullableFilter<"Guide"> | string | null
    image?: StringNullableFilter<"Guide"> | string | null
    email?: StringNullableFilter<"Guide"> | string | null
    municipalityId?: StringFilter<"Guide"> | string
    createdAt?: DateTimeFilter<"Guide"> | Date | string
    updatedAt?: DateTimeFilter<"Guide"> | Date | string
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }

  export type GuideOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    languages?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    municipality?: MunicipalityOrderByWithRelationInput
  }

  export type GuideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuideWhereInput | GuideWhereInput[]
    OR?: GuideWhereInput[]
    NOT?: GuideWhereInput | GuideWhereInput[]
    name?: StringFilter<"Guide"> | string
    phone?: StringFilter<"Guide"> | string
    languages?: StringNullableListFilter<"Guide">
    description?: StringNullableFilter<"Guide"> | string | null
    image?: StringNullableFilter<"Guide"> | string | null
    email?: StringNullableFilter<"Guide"> | string | null
    municipalityId?: StringFilter<"Guide"> | string
    createdAt?: DateTimeFilter<"Guide"> | Date | string
    updatedAt?: DateTimeFilter<"Guide"> | Date | string
    municipality?: XOR<MunicipalityScalarRelationFilter, MunicipalityWhereInput>
  }, "id">

  export type GuideOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    languages?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuideCountOrderByAggregateInput
    _max?: GuideMaxOrderByAggregateInput
    _min?: GuideMinOrderByAggregateInput
  }

  export type GuideScalarWhereWithAggregatesInput = {
    AND?: GuideScalarWhereWithAggregatesInput | GuideScalarWhereWithAggregatesInput[]
    OR?: GuideScalarWhereWithAggregatesInput[]
    NOT?: GuideScalarWhereWithAggregatesInput | GuideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guide"> | string
    name?: StringWithAggregatesFilter<"Guide"> | string
    phone?: StringWithAggregatesFilter<"Guide"> | string
    languages?: StringNullableListFilter<"Guide">
    description?: StringNullableWithAggregatesFilter<"Guide"> | string | null
    image?: StringNullableWithAggregatesFilter<"Guide"> | string | null
    email?: StringNullableWithAggregatesFilter<"Guide"> | string | null
    municipalityId?: StringWithAggregatesFilter<"Guide"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Guide"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guide"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    coverImage?: StringNullableFilter<"Post"> | string | null
    authorId?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    authorId?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    coverImage?: StringNullableFilter<"Post"> | string | null
    authorId?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    authorId?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    coverImage?: StringNullableWithAggregatesFilter<"Post"> | string | null
    authorId?: StringWithAggregatesFilter<"Post"> | string
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId?: string | null
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    municipality?: MunicipalityCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId?: string | null
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    municipalityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    municipality?: MunicipalityUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId?: string | null
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    municipalityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityCreateInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionCreateNestedManyWithoutMunicipalityInput
    events?: EventCreateNestedManyWithoutMunicipalityInput
    guides?: GuideCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionUncheckedCreateNestedManyWithoutMunicipalityInput
    events?: EventUncheckedCreateNestedManyWithoutMunicipalityInput
    guides?: GuideUncheckedCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUpdateManyWithoutMunicipalityNestedInput
    events?: EventUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUncheckedUpdateManyWithoutMunicipalityNestedInput
    events?: EventUncheckedUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUncheckedUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MunicipalityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    municipality: MunicipalityCreateNestedOneWithoutImagesInput
  }

  export type MunicipalityImageUncheckedCreateInput = {
    id?: string
    url: string
    municipalityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MunicipalityImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    municipality?: MunicipalityUpdateOneRequiredWithoutImagesNestedInput
  }

  export type MunicipalityImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityImageCreateManyInput = {
    id?: string
    url: string
    municipalityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MunicipalityImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightCreateInput = {
    id?: string
    title: string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    galleryImages?: HighlightImageCreateNestedManyWithoutHighlightInput
    municipality: MunicipalityCreateNestedOneWithoutHighlightsInput
  }

  export type HighlightUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    municipalityId: string
    createdAt?: Date | string
    galleryImages?: HighlightImageUncheckedCreateNestedManyWithoutHighlightInput
  }

  export type HighlightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: HighlightImageUpdateManyWithoutHighlightNestedInput
    municipality?: MunicipalityUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type HighlightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: HighlightImageUncheckedUpdateManyWithoutHighlightNestedInput
  }

  export type HighlightCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    municipalityId: string
    createdAt?: Date | string
  }

  export type HighlightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    highlight: HighlightCreateNestedOneWithoutGalleryImagesInput
  }

  export type HighlightImageUncheckedCreateInput = {
    id?: string
    url: string
    highlightId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HighlightImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlight?: HighlightUpdateOneRequiredWithoutGalleryImagesNestedInput
  }

  export type HighlightImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    highlightId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightImageCreateManyInput = {
    id?: string
    url: string
    highlightId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HighlightImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    highlightId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    municipality: MunicipalityCreateNestedOneWithoutAttractionsInput
  }

  export type AttractionUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    municipalityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    municipality?: MunicipalityUpdateOneRequiredWithoutAttractionsNestedInput
  }

  export type AttractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionCreateManyInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    municipalityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: EventImageCreateNestedManyWithoutEventInput
    municipality: MunicipalityCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    image?: string | null
    municipalityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: EventImageUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: EventImageUpdateManyWithoutEventNestedInput
    municipality?: MunicipalityUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: EventImageUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    image?: string | null
    municipalityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutGalleryImagesInput
  }

  export type EventImageUncheckedCreateInput = {
    id?: string
    url: string
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutGalleryImagesNestedInput
  }

  export type EventImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageCreateManyInput = {
    id?: string
    url: string
    eventId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideCreateInput = {
    id?: string
    name: string
    phone: string
    languages?: GuideCreatelanguagesInput | string[]
    description?: string | null
    image?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    municipality: MunicipalityCreateNestedOneWithoutGuidesInput
  }

  export type GuideUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    languages?: GuideCreatelanguagesInput | string[]
    description?: string | null
    image?: string | null
    email?: string | null
    municipalityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    languages?: GuideUpdatelanguagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    municipality?: MunicipalityUpdateOneRequiredWithoutGuidesNestedInput
  }

  export type GuideUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    languages?: GuideUpdatelanguagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideCreateManyInput = {
    id?: string
    name: string
    phone: string
    languages?: GuideCreatelanguagesInput | string[]
    description?: string | null
    image?: string | null
    email?: string | null
    municipalityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    languages?: GuideUpdatelanguagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    languages?: GuideUpdatelanguagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    content: string
    coverImage?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    coverImage?: string | null
    authorId: string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    content: string
    coverImage?: string | null
    authorId: string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MunicipalityNullableScalarRelationFilter = {
    is?: MunicipalityWhereInput | null
    isNot?: MunicipalityWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type HighlightListRelationFilter = {
    every?: HighlightWhereInput
    some?: HighlightWhereInput
    none?: HighlightWhereInput
  }

  export type AttractionListRelationFilter = {
    every?: AttractionWhereInput
    some?: AttractionWhereInput
    none?: AttractionWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type GuideListRelationFilter = {
    every?: GuideWhereInput
    some?: GuideWhereInput
    none?: GuideWhereInput
  }

  export type MunicipalityImageListRelationFilter = {
    every?: MunicipalityImageWhereInput
    some?: MunicipalityImageWhereInput
    none?: MunicipalityImageWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HighlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MunicipalityImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MunicipalityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coatOfArms?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    about?: SortOrder
    slug?: SortOrder
    ibgeCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MunicipalityAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type MunicipalityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coatOfArms?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    about?: SortOrder
    slug?: SortOrder
    ibgeCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MunicipalityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coatOfArms?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    about?: SortOrder
    slug?: SortOrder
    ibgeCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MunicipalitySumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type MunicipalityScalarRelationFilter = {
    is?: MunicipalityWhereInput
    isNot?: MunicipalityWhereInput
  }

  export type MunicipalityImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MunicipalityImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MunicipalityImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HighlightImageListRelationFilter = {
    every?: HighlightImageWhereInput
    some?: HighlightImageWhereInput
    none?: HighlightImageWhereInput
  }

  export type HighlightImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HighlightCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HighlightScalarRelationFilter = {
    is?: HighlightWhereInput
    isNot?: HighlightWhereInput
  }

  export type HighlightImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    highlightId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HighlightImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    highlightId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HighlightImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    highlightId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttractionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttractionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttractionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventImageListRelationFilter = {
    every?: EventImageWhereInput
    some?: EventImageWhereInput
    none?: EventImageWhereInput
  }

  export type EventImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    image?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    image?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    image?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type GuideCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    languages?: SortOrder
    description?: SortOrder
    image?: SortOrder
    email?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    image?: SortOrder
    email?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    image?: SortOrder
    email?: SortOrder
    municipalityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    coverImage?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MunicipalityCreateNestedOneWithoutUsersInput = {
    create?: XOR<MunicipalityCreateWithoutUsersInput, MunicipalityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutUsersInput
    connect?: MunicipalityWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MunicipalityUpdateOneWithoutUsersNestedInput = {
    create?: XOR<MunicipalityCreateWithoutUsersInput, MunicipalityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutUsersInput
    upsert?: MunicipalityUpsertWithoutUsersInput
    disconnect?: MunicipalityWhereInput | boolean
    delete?: MunicipalityWhereInput | boolean
    connect?: MunicipalityWhereUniqueInput
    update?: XOR<XOR<MunicipalityUpdateToOneWithWhereWithoutUsersInput, MunicipalityUpdateWithoutUsersInput>, MunicipalityUncheckedUpdateWithoutUsersInput>
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<UserCreateWithoutMunicipalityInput, UserUncheckedCreateWithoutMunicipalityInput> | UserCreateWithoutMunicipalityInput[] | UserUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMunicipalityInput | UserCreateOrConnectWithoutMunicipalityInput[]
    createMany?: UserCreateManyMunicipalityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HighlightCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<HighlightCreateWithoutMunicipalityInput, HighlightUncheckedCreateWithoutMunicipalityInput> | HighlightCreateWithoutMunicipalityInput[] | HighlightUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutMunicipalityInput | HighlightCreateOrConnectWithoutMunicipalityInput[]
    createMany?: HighlightCreateManyMunicipalityInputEnvelope
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
  }

  export type AttractionCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<AttractionCreateWithoutMunicipalityInput, AttractionUncheckedCreateWithoutMunicipalityInput> | AttractionCreateWithoutMunicipalityInput[] | AttractionUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutMunicipalityInput | AttractionCreateOrConnectWithoutMunicipalityInput[]
    createMany?: AttractionCreateManyMunicipalityInputEnvelope
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<EventCreateWithoutMunicipalityInput, EventUncheckedCreateWithoutMunicipalityInput> | EventCreateWithoutMunicipalityInput[] | EventUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMunicipalityInput | EventCreateOrConnectWithoutMunicipalityInput[]
    createMany?: EventCreateManyMunicipalityInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type GuideCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<GuideCreateWithoutMunicipalityInput, GuideUncheckedCreateWithoutMunicipalityInput> | GuideCreateWithoutMunicipalityInput[] | GuideUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: GuideCreateOrConnectWithoutMunicipalityInput | GuideCreateOrConnectWithoutMunicipalityInput[]
    createMany?: GuideCreateManyMunicipalityInputEnvelope
    connect?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
  }

  export type MunicipalityImageCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<MunicipalityImageCreateWithoutMunicipalityInput, MunicipalityImageUncheckedCreateWithoutMunicipalityInput> | MunicipalityImageCreateWithoutMunicipalityInput[] | MunicipalityImageUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: MunicipalityImageCreateOrConnectWithoutMunicipalityInput | MunicipalityImageCreateOrConnectWithoutMunicipalityInput[]
    createMany?: MunicipalityImageCreateManyMunicipalityInputEnvelope
    connect?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<UserCreateWithoutMunicipalityInput, UserUncheckedCreateWithoutMunicipalityInput> | UserCreateWithoutMunicipalityInput[] | UserUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMunicipalityInput | UserCreateOrConnectWithoutMunicipalityInput[]
    createMany?: UserCreateManyMunicipalityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type HighlightUncheckedCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<HighlightCreateWithoutMunicipalityInput, HighlightUncheckedCreateWithoutMunicipalityInput> | HighlightCreateWithoutMunicipalityInput[] | HighlightUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutMunicipalityInput | HighlightCreateOrConnectWithoutMunicipalityInput[]
    createMany?: HighlightCreateManyMunicipalityInputEnvelope
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
  }

  export type AttractionUncheckedCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<AttractionCreateWithoutMunicipalityInput, AttractionUncheckedCreateWithoutMunicipalityInput> | AttractionCreateWithoutMunicipalityInput[] | AttractionUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutMunicipalityInput | AttractionCreateOrConnectWithoutMunicipalityInput[]
    createMany?: AttractionCreateManyMunicipalityInputEnvelope
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<EventCreateWithoutMunicipalityInput, EventUncheckedCreateWithoutMunicipalityInput> | EventCreateWithoutMunicipalityInput[] | EventUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMunicipalityInput | EventCreateOrConnectWithoutMunicipalityInput[]
    createMany?: EventCreateManyMunicipalityInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type GuideUncheckedCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<GuideCreateWithoutMunicipalityInput, GuideUncheckedCreateWithoutMunicipalityInput> | GuideCreateWithoutMunicipalityInput[] | GuideUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: GuideCreateOrConnectWithoutMunicipalityInput | GuideCreateOrConnectWithoutMunicipalityInput[]
    createMany?: GuideCreateManyMunicipalityInputEnvelope
    connect?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
  }

  export type MunicipalityImageUncheckedCreateNestedManyWithoutMunicipalityInput = {
    create?: XOR<MunicipalityImageCreateWithoutMunicipalityInput, MunicipalityImageUncheckedCreateWithoutMunicipalityInput> | MunicipalityImageCreateWithoutMunicipalityInput[] | MunicipalityImageUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: MunicipalityImageCreateOrConnectWithoutMunicipalityInput | MunicipalityImageCreateOrConnectWithoutMunicipalityInput[]
    createMany?: MunicipalityImageCreateManyMunicipalityInputEnvelope
    connect?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<UserCreateWithoutMunicipalityInput, UserUncheckedCreateWithoutMunicipalityInput> | UserCreateWithoutMunicipalityInput[] | UserUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMunicipalityInput | UserCreateOrConnectWithoutMunicipalityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMunicipalityInput | UserUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: UserCreateManyMunicipalityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMunicipalityInput | UserUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMunicipalityInput | UserUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HighlightUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<HighlightCreateWithoutMunicipalityInput, HighlightUncheckedCreateWithoutMunicipalityInput> | HighlightCreateWithoutMunicipalityInput[] | HighlightUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutMunicipalityInput | HighlightCreateOrConnectWithoutMunicipalityInput[]
    upsert?: HighlightUpsertWithWhereUniqueWithoutMunicipalityInput | HighlightUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: HighlightCreateManyMunicipalityInputEnvelope
    set?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    disconnect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    delete?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    update?: HighlightUpdateWithWhereUniqueWithoutMunicipalityInput | HighlightUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: HighlightUpdateManyWithWhereWithoutMunicipalityInput | HighlightUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
  }

  export type AttractionUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<AttractionCreateWithoutMunicipalityInput, AttractionUncheckedCreateWithoutMunicipalityInput> | AttractionCreateWithoutMunicipalityInput[] | AttractionUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutMunicipalityInput | AttractionCreateOrConnectWithoutMunicipalityInput[]
    upsert?: AttractionUpsertWithWhereUniqueWithoutMunicipalityInput | AttractionUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: AttractionCreateManyMunicipalityInputEnvelope
    set?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    disconnect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    delete?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    update?: AttractionUpdateWithWhereUniqueWithoutMunicipalityInput | AttractionUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: AttractionUpdateManyWithWhereWithoutMunicipalityInput | AttractionUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
  }

  export type EventUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<EventCreateWithoutMunicipalityInput, EventUncheckedCreateWithoutMunicipalityInput> | EventCreateWithoutMunicipalityInput[] | EventUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMunicipalityInput | EventCreateOrConnectWithoutMunicipalityInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutMunicipalityInput | EventUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: EventCreateManyMunicipalityInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutMunicipalityInput | EventUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: EventUpdateManyWithWhereWithoutMunicipalityInput | EventUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type GuideUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<GuideCreateWithoutMunicipalityInput, GuideUncheckedCreateWithoutMunicipalityInput> | GuideCreateWithoutMunicipalityInput[] | GuideUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: GuideCreateOrConnectWithoutMunicipalityInput | GuideCreateOrConnectWithoutMunicipalityInput[]
    upsert?: GuideUpsertWithWhereUniqueWithoutMunicipalityInput | GuideUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: GuideCreateManyMunicipalityInputEnvelope
    set?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
    disconnect?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
    delete?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
    connect?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
    update?: GuideUpdateWithWhereUniqueWithoutMunicipalityInput | GuideUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: GuideUpdateManyWithWhereWithoutMunicipalityInput | GuideUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: GuideScalarWhereInput | GuideScalarWhereInput[]
  }

  export type MunicipalityImageUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<MunicipalityImageCreateWithoutMunicipalityInput, MunicipalityImageUncheckedCreateWithoutMunicipalityInput> | MunicipalityImageCreateWithoutMunicipalityInput[] | MunicipalityImageUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: MunicipalityImageCreateOrConnectWithoutMunicipalityInput | MunicipalityImageCreateOrConnectWithoutMunicipalityInput[]
    upsert?: MunicipalityImageUpsertWithWhereUniqueWithoutMunicipalityInput | MunicipalityImageUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: MunicipalityImageCreateManyMunicipalityInputEnvelope
    set?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
    disconnect?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
    delete?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
    connect?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
    update?: MunicipalityImageUpdateWithWhereUniqueWithoutMunicipalityInput | MunicipalityImageUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: MunicipalityImageUpdateManyWithWhereWithoutMunicipalityInput | MunicipalityImageUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: MunicipalityImageScalarWhereInput | MunicipalityImageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<UserCreateWithoutMunicipalityInput, UserUncheckedCreateWithoutMunicipalityInput> | UserCreateWithoutMunicipalityInput[] | UserUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMunicipalityInput | UserCreateOrConnectWithoutMunicipalityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMunicipalityInput | UserUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: UserCreateManyMunicipalityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMunicipalityInput | UserUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMunicipalityInput | UserUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type HighlightUncheckedUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<HighlightCreateWithoutMunicipalityInput, HighlightUncheckedCreateWithoutMunicipalityInput> | HighlightCreateWithoutMunicipalityInput[] | HighlightUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: HighlightCreateOrConnectWithoutMunicipalityInput | HighlightCreateOrConnectWithoutMunicipalityInput[]
    upsert?: HighlightUpsertWithWhereUniqueWithoutMunicipalityInput | HighlightUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: HighlightCreateManyMunicipalityInputEnvelope
    set?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    disconnect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    delete?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    connect?: HighlightWhereUniqueInput | HighlightWhereUniqueInput[]
    update?: HighlightUpdateWithWhereUniqueWithoutMunicipalityInput | HighlightUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: HighlightUpdateManyWithWhereWithoutMunicipalityInput | HighlightUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
  }

  export type AttractionUncheckedUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<AttractionCreateWithoutMunicipalityInput, AttractionUncheckedCreateWithoutMunicipalityInput> | AttractionCreateWithoutMunicipalityInput[] | AttractionUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: AttractionCreateOrConnectWithoutMunicipalityInput | AttractionCreateOrConnectWithoutMunicipalityInput[]
    upsert?: AttractionUpsertWithWhereUniqueWithoutMunicipalityInput | AttractionUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: AttractionCreateManyMunicipalityInputEnvelope
    set?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    disconnect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    delete?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    connect?: AttractionWhereUniqueInput | AttractionWhereUniqueInput[]
    update?: AttractionUpdateWithWhereUniqueWithoutMunicipalityInput | AttractionUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: AttractionUpdateManyWithWhereWithoutMunicipalityInput | AttractionUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<EventCreateWithoutMunicipalityInput, EventUncheckedCreateWithoutMunicipalityInput> | EventCreateWithoutMunicipalityInput[] | EventUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMunicipalityInput | EventCreateOrConnectWithoutMunicipalityInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutMunicipalityInput | EventUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: EventCreateManyMunicipalityInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutMunicipalityInput | EventUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: EventUpdateManyWithWhereWithoutMunicipalityInput | EventUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type GuideUncheckedUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<GuideCreateWithoutMunicipalityInput, GuideUncheckedCreateWithoutMunicipalityInput> | GuideCreateWithoutMunicipalityInput[] | GuideUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: GuideCreateOrConnectWithoutMunicipalityInput | GuideCreateOrConnectWithoutMunicipalityInput[]
    upsert?: GuideUpsertWithWhereUniqueWithoutMunicipalityInput | GuideUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: GuideCreateManyMunicipalityInputEnvelope
    set?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
    disconnect?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
    delete?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
    connect?: GuideWhereUniqueInput | GuideWhereUniqueInput[]
    update?: GuideUpdateWithWhereUniqueWithoutMunicipalityInput | GuideUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: GuideUpdateManyWithWhereWithoutMunicipalityInput | GuideUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: GuideScalarWhereInput | GuideScalarWhereInput[]
  }

  export type MunicipalityImageUncheckedUpdateManyWithoutMunicipalityNestedInput = {
    create?: XOR<MunicipalityImageCreateWithoutMunicipalityInput, MunicipalityImageUncheckedCreateWithoutMunicipalityInput> | MunicipalityImageCreateWithoutMunicipalityInput[] | MunicipalityImageUncheckedCreateWithoutMunicipalityInput[]
    connectOrCreate?: MunicipalityImageCreateOrConnectWithoutMunicipalityInput | MunicipalityImageCreateOrConnectWithoutMunicipalityInput[]
    upsert?: MunicipalityImageUpsertWithWhereUniqueWithoutMunicipalityInput | MunicipalityImageUpsertWithWhereUniqueWithoutMunicipalityInput[]
    createMany?: MunicipalityImageCreateManyMunicipalityInputEnvelope
    set?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
    disconnect?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
    delete?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
    connect?: MunicipalityImageWhereUniqueInput | MunicipalityImageWhereUniqueInput[]
    update?: MunicipalityImageUpdateWithWhereUniqueWithoutMunicipalityInput | MunicipalityImageUpdateWithWhereUniqueWithoutMunicipalityInput[]
    updateMany?: MunicipalityImageUpdateManyWithWhereWithoutMunicipalityInput | MunicipalityImageUpdateManyWithWhereWithoutMunicipalityInput[]
    deleteMany?: MunicipalityImageScalarWhereInput | MunicipalityImageScalarWhereInput[]
  }

  export type MunicipalityCreateNestedOneWithoutImagesInput = {
    create?: XOR<MunicipalityCreateWithoutImagesInput, MunicipalityUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutImagesInput
    connect?: MunicipalityWhereUniqueInput
  }

  export type MunicipalityUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<MunicipalityCreateWithoutImagesInput, MunicipalityUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutImagesInput
    upsert?: MunicipalityUpsertWithoutImagesInput
    connect?: MunicipalityWhereUniqueInput
    update?: XOR<XOR<MunicipalityUpdateToOneWithWhereWithoutImagesInput, MunicipalityUpdateWithoutImagesInput>, MunicipalityUncheckedUpdateWithoutImagesInput>
  }

  export type HighlightImageCreateNestedManyWithoutHighlightInput = {
    create?: XOR<HighlightImageCreateWithoutHighlightInput, HighlightImageUncheckedCreateWithoutHighlightInput> | HighlightImageCreateWithoutHighlightInput[] | HighlightImageUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightImageCreateOrConnectWithoutHighlightInput | HighlightImageCreateOrConnectWithoutHighlightInput[]
    createMany?: HighlightImageCreateManyHighlightInputEnvelope
    connect?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
  }

  export type MunicipalityCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<MunicipalityCreateWithoutHighlightsInput, MunicipalityUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutHighlightsInput
    connect?: MunicipalityWhereUniqueInput
  }

  export type HighlightImageUncheckedCreateNestedManyWithoutHighlightInput = {
    create?: XOR<HighlightImageCreateWithoutHighlightInput, HighlightImageUncheckedCreateWithoutHighlightInput> | HighlightImageCreateWithoutHighlightInput[] | HighlightImageUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightImageCreateOrConnectWithoutHighlightInput | HighlightImageCreateOrConnectWithoutHighlightInput[]
    createMany?: HighlightImageCreateManyHighlightInputEnvelope
    connect?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
  }

  export type HighlightImageUpdateManyWithoutHighlightNestedInput = {
    create?: XOR<HighlightImageCreateWithoutHighlightInput, HighlightImageUncheckedCreateWithoutHighlightInput> | HighlightImageCreateWithoutHighlightInput[] | HighlightImageUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightImageCreateOrConnectWithoutHighlightInput | HighlightImageCreateOrConnectWithoutHighlightInput[]
    upsert?: HighlightImageUpsertWithWhereUniqueWithoutHighlightInput | HighlightImageUpsertWithWhereUniqueWithoutHighlightInput[]
    createMany?: HighlightImageCreateManyHighlightInputEnvelope
    set?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
    disconnect?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
    delete?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
    connect?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
    update?: HighlightImageUpdateWithWhereUniqueWithoutHighlightInput | HighlightImageUpdateWithWhereUniqueWithoutHighlightInput[]
    updateMany?: HighlightImageUpdateManyWithWhereWithoutHighlightInput | HighlightImageUpdateManyWithWhereWithoutHighlightInput[]
    deleteMany?: HighlightImageScalarWhereInput | HighlightImageScalarWhereInput[]
  }

  export type MunicipalityUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<MunicipalityCreateWithoutHighlightsInput, MunicipalityUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutHighlightsInput
    upsert?: MunicipalityUpsertWithoutHighlightsInput
    connect?: MunicipalityWhereUniqueInput
    update?: XOR<XOR<MunicipalityUpdateToOneWithWhereWithoutHighlightsInput, MunicipalityUpdateWithoutHighlightsInput>, MunicipalityUncheckedUpdateWithoutHighlightsInput>
  }

  export type HighlightImageUncheckedUpdateManyWithoutHighlightNestedInput = {
    create?: XOR<HighlightImageCreateWithoutHighlightInput, HighlightImageUncheckedCreateWithoutHighlightInput> | HighlightImageCreateWithoutHighlightInput[] | HighlightImageUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightImageCreateOrConnectWithoutHighlightInput | HighlightImageCreateOrConnectWithoutHighlightInput[]
    upsert?: HighlightImageUpsertWithWhereUniqueWithoutHighlightInput | HighlightImageUpsertWithWhereUniqueWithoutHighlightInput[]
    createMany?: HighlightImageCreateManyHighlightInputEnvelope
    set?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
    disconnect?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
    delete?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
    connect?: HighlightImageWhereUniqueInput | HighlightImageWhereUniqueInput[]
    update?: HighlightImageUpdateWithWhereUniqueWithoutHighlightInput | HighlightImageUpdateWithWhereUniqueWithoutHighlightInput[]
    updateMany?: HighlightImageUpdateManyWithWhereWithoutHighlightInput | HighlightImageUpdateManyWithWhereWithoutHighlightInput[]
    deleteMany?: HighlightImageScalarWhereInput | HighlightImageScalarWhereInput[]
  }

  export type HighlightCreateNestedOneWithoutGalleryImagesInput = {
    create?: XOR<HighlightCreateWithoutGalleryImagesInput, HighlightUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: HighlightCreateOrConnectWithoutGalleryImagesInput
    connect?: HighlightWhereUniqueInput
  }

  export type HighlightUpdateOneRequiredWithoutGalleryImagesNestedInput = {
    create?: XOR<HighlightCreateWithoutGalleryImagesInput, HighlightUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: HighlightCreateOrConnectWithoutGalleryImagesInput
    upsert?: HighlightUpsertWithoutGalleryImagesInput
    connect?: HighlightWhereUniqueInput
    update?: XOR<XOR<HighlightUpdateToOneWithWhereWithoutGalleryImagesInput, HighlightUpdateWithoutGalleryImagesInput>, HighlightUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type MunicipalityCreateNestedOneWithoutAttractionsInput = {
    create?: XOR<MunicipalityCreateWithoutAttractionsInput, MunicipalityUncheckedCreateWithoutAttractionsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutAttractionsInput
    connect?: MunicipalityWhereUniqueInput
  }

  export type MunicipalityUpdateOneRequiredWithoutAttractionsNestedInput = {
    create?: XOR<MunicipalityCreateWithoutAttractionsInput, MunicipalityUncheckedCreateWithoutAttractionsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutAttractionsInput
    upsert?: MunicipalityUpsertWithoutAttractionsInput
    connect?: MunicipalityWhereUniqueInput
    update?: XOR<XOR<MunicipalityUpdateToOneWithWhereWithoutAttractionsInput, MunicipalityUpdateWithoutAttractionsInput>, MunicipalityUncheckedUpdateWithoutAttractionsInput>
  }

  export type EventImageCreateNestedManyWithoutEventInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type MunicipalityCreateNestedOneWithoutEventsInput = {
    create?: XOR<MunicipalityCreateWithoutEventsInput, MunicipalityUncheckedCreateWithoutEventsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutEventsInput
    connect?: MunicipalityWhereUniqueInput
  }

  export type EventImageUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type EventImageUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutEventInput | EventImageUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutEventInput | EventImageUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutEventInput | EventImageUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type MunicipalityUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<MunicipalityCreateWithoutEventsInput, MunicipalityUncheckedCreateWithoutEventsInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutEventsInput
    upsert?: MunicipalityUpsertWithoutEventsInput
    connect?: MunicipalityWhereUniqueInput
    update?: XOR<XOR<MunicipalityUpdateToOneWithWhereWithoutEventsInput, MunicipalityUpdateWithoutEventsInput>, MunicipalityUncheckedUpdateWithoutEventsInput>
  }

  export type EventImageUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutEventInput | EventImageUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutEventInput | EventImageUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutEventInput | EventImageUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutGalleryImagesInput = {
    create?: XOR<EventCreateWithoutGalleryImagesInput, EventUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: EventCreateOrConnectWithoutGalleryImagesInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutGalleryImagesNestedInput = {
    create?: XOR<EventCreateWithoutGalleryImagesInput, EventUncheckedCreateWithoutGalleryImagesInput>
    connectOrCreate?: EventCreateOrConnectWithoutGalleryImagesInput
    upsert?: EventUpsertWithoutGalleryImagesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutGalleryImagesInput, EventUpdateWithoutGalleryImagesInput>, EventUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type GuideCreatelanguagesInput = {
    set: string[]
  }

  export type MunicipalityCreateNestedOneWithoutGuidesInput = {
    create?: XOR<MunicipalityCreateWithoutGuidesInput, MunicipalityUncheckedCreateWithoutGuidesInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutGuidesInput
    connect?: MunicipalityWhereUniqueInput
  }

  export type GuideUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MunicipalityUpdateOneRequiredWithoutGuidesNestedInput = {
    create?: XOR<MunicipalityCreateWithoutGuidesInput, MunicipalityUncheckedCreateWithoutGuidesInput>
    connectOrCreate?: MunicipalityCreateOrConnectWithoutGuidesInput
    upsert?: MunicipalityUpsertWithoutGuidesInput
    connect?: MunicipalityWhereUniqueInput
    update?: XOR<XOR<MunicipalityUpdateToOneWithWhereWithoutGuidesInput, MunicipalityUpdateWithoutGuidesInput>, MunicipalityUncheckedUpdateWithoutGuidesInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MunicipalityCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    highlights?: HighlightCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionCreateNestedManyWithoutMunicipalityInput
    events?: EventCreateNestedManyWithoutMunicipalityInput
    guides?: GuideCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    highlights?: HighlightUncheckedCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionUncheckedCreateNestedManyWithoutMunicipalityInput
    events?: EventUncheckedCreateNestedManyWithoutMunicipalityInput
    guides?: GuideUncheckedCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityCreateOrConnectWithoutUsersInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutUsersInput, MunicipalityUncheckedCreateWithoutUsersInput>
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    coverImage?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    coverImage?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type MunicipalityUpsertWithoutUsersInput = {
    update: XOR<MunicipalityUpdateWithoutUsersInput, MunicipalityUncheckedUpdateWithoutUsersInput>
    create: XOR<MunicipalityCreateWithoutUsersInput, MunicipalityUncheckedCreateWithoutUsersInput>
    where?: MunicipalityWhereInput
  }

  export type MunicipalityUpdateToOneWithWhereWithoutUsersInput = {
    where?: MunicipalityWhereInput
    data: XOR<MunicipalityUpdateWithoutUsersInput, MunicipalityUncheckedUpdateWithoutUsersInput>
  }

  export type MunicipalityUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: HighlightUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUpdateManyWithoutMunicipalityNestedInput
    events?: EventUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: HighlightUncheckedUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUncheckedUpdateManyWithoutMunicipalityNestedInput
    events?: EventUncheckedUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUncheckedUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    coverImage?: StringNullableFilter<"Post"> | string | null
    authorId?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type UserCreateWithoutMunicipalityInput = {
    id?: string
    clerkId?: string | null
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutMunicipalityInput = {
    id?: string
    clerkId?: string | null
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutMunicipalityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMunicipalityInput, UserUncheckedCreateWithoutMunicipalityInput>
  }

  export type UserCreateManyMunicipalityInputEnvelope = {
    data: UserCreateManyMunicipalityInput | UserCreateManyMunicipalityInput[]
    skipDuplicates?: boolean
  }

  export type HighlightCreateWithoutMunicipalityInput = {
    id?: string
    title: string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    galleryImages?: HighlightImageCreateNestedManyWithoutHighlightInput
  }

  export type HighlightUncheckedCreateWithoutMunicipalityInput = {
    id?: string
    title: string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    galleryImages?: HighlightImageUncheckedCreateNestedManyWithoutHighlightInput
  }

  export type HighlightCreateOrConnectWithoutMunicipalityInput = {
    where: HighlightWhereUniqueInput
    create: XOR<HighlightCreateWithoutMunicipalityInput, HighlightUncheckedCreateWithoutMunicipalityInput>
  }

  export type HighlightCreateManyMunicipalityInputEnvelope = {
    data: HighlightCreateManyMunicipalityInput | HighlightCreateManyMunicipalityInput[]
    skipDuplicates?: boolean
  }

  export type AttractionCreateWithoutMunicipalityInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttractionUncheckedCreateWithoutMunicipalityInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttractionCreateOrConnectWithoutMunicipalityInput = {
    where: AttractionWhereUniqueInput
    create: XOR<AttractionCreateWithoutMunicipalityInput, AttractionUncheckedCreateWithoutMunicipalityInput>
  }

  export type AttractionCreateManyMunicipalityInputEnvelope = {
    data: AttractionCreateManyMunicipalityInput | AttractionCreateManyMunicipalityInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutMunicipalityInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: EventImageCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutMunicipalityInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleryImages?: EventImageUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutMunicipalityInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutMunicipalityInput, EventUncheckedCreateWithoutMunicipalityInput>
  }

  export type EventCreateManyMunicipalityInputEnvelope = {
    data: EventCreateManyMunicipalityInput | EventCreateManyMunicipalityInput[]
    skipDuplicates?: boolean
  }

  export type GuideCreateWithoutMunicipalityInput = {
    id?: string
    name: string
    phone: string
    languages?: GuideCreatelanguagesInput | string[]
    description?: string | null
    image?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideUncheckedCreateWithoutMunicipalityInput = {
    id?: string
    name: string
    phone: string
    languages?: GuideCreatelanguagesInput | string[]
    description?: string | null
    image?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideCreateOrConnectWithoutMunicipalityInput = {
    where: GuideWhereUniqueInput
    create: XOR<GuideCreateWithoutMunicipalityInput, GuideUncheckedCreateWithoutMunicipalityInput>
  }

  export type GuideCreateManyMunicipalityInputEnvelope = {
    data: GuideCreateManyMunicipalityInput | GuideCreateManyMunicipalityInput[]
    skipDuplicates?: boolean
  }

  export type MunicipalityImageCreateWithoutMunicipalityInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MunicipalityImageUncheckedCreateWithoutMunicipalityInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MunicipalityImageCreateOrConnectWithoutMunicipalityInput = {
    where: MunicipalityImageWhereUniqueInput
    create: XOR<MunicipalityImageCreateWithoutMunicipalityInput, MunicipalityImageUncheckedCreateWithoutMunicipalityInput>
  }

  export type MunicipalityImageCreateManyMunicipalityInputEnvelope = {
    data: MunicipalityImageCreateManyMunicipalityInput | MunicipalityImageCreateManyMunicipalityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutMunicipalityInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMunicipalityInput, UserUncheckedUpdateWithoutMunicipalityInput>
    create: XOR<UserCreateWithoutMunicipalityInput, UserUncheckedCreateWithoutMunicipalityInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMunicipalityInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMunicipalityInput, UserUncheckedUpdateWithoutMunicipalityInput>
  }

  export type UserUpdateManyWithWhereWithoutMunicipalityInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutMunicipalityInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    municipalityId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type HighlightUpsertWithWhereUniqueWithoutMunicipalityInput = {
    where: HighlightWhereUniqueInput
    update: XOR<HighlightUpdateWithoutMunicipalityInput, HighlightUncheckedUpdateWithoutMunicipalityInput>
    create: XOR<HighlightCreateWithoutMunicipalityInput, HighlightUncheckedCreateWithoutMunicipalityInput>
  }

  export type HighlightUpdateWithWhereUniqueWithoutMunicipalityInput = {
    where: HighlightWhereUniqueInput
    data: XOR<HighlightUpdateWithoutMunicipalityInput, HighlightUncheckedUpdateWithoutMunicipalityInput>
  }

  export type HighlightUpdateManyWithWhereWithoutMunicipalityInput = {
    where: HighlightScalarWhereInput
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyWithoutMunicipalityInput>
  }

  export type HighlightScalarWhereInput = {
    AND?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
    OR?: HighlightScalarWhereInput[]
    NOT?: HighlightScalarWhereInput | HighlightScalarWhereInput[]
    id?: StringFilter<"Highlight"> | string
    title?: StringFilter<"Highlight"> | string
    description?: StringNullableFilter<"Highlight"> | string | null
    latitude?: FloatNullableFilter<"Highlight"> | number | null
    longitude?: FloatNullableFilter<"Highlight"> | number | null
    municipalityId?: StringFilter<"Highlight"> | string
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
  }

  export type AttractionUpsertWithWhereUniqueWithoutMunicipalityInput = {
    where: AttractionWhereUniqueInput
    update: XOR<AttractionUpdateWithoutMunicipalityInput, AttractionUncheckedUpdateWithoutMunicipalityInput>
    create: XOR<AttractionCreateWithoutMunicipalityInput, AttractionUncheckedCreateWithoutMunicipalityInput>
  }

  export type AttractionUpdateWithWhereUniqueWithoutMunicipalityInput = {
    where: AttractionWhereUniqueInput
    data: XOR<AttractionUpdateWithoutMunicipalityInput, AttractionUncheckedUpdateWithoutMunicipalityInput>
  }

  export type AttractionUpdateManyWithWhereWithoutMunicipalityInput = {
    where: AttractionScalarWhereInput
    data: XOR<AttractionUpdateManyMutationInput, AttractionUncheckedUpdateManyWithoutMunicipalityInput>
  }

  export type AttractionScalarWhereInput = {
    AND?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
    OR?: AttractionScalarWhereInput[]
    NOT?: AttractionScalarWhereInput | AttractionScalarWhereInput[]
    id?: StringFilter<"Attraction"> | string
    name?: StringFilter<"Attraction"> | string
    description?: StringFilter<"Attraction"> | string
    image?: StringNullableFilter<"Attraction"> | string | null
    municipalityId?: StringFilter<"Attraction"> | string
    createdAt?: DateTimeFilter<"Attraction"> | Date | string
    updatedAt?: DateTimeFilter<"Attraction"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutMunicipalityInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutMunicipalityInput, EventUncheckedUpdateWithoutMunicipalityInput>
    create: XOR<EventCreateWithoutMunicipalityInput, EventUncheckedCreateWithoutMunicipalityInput>
  }

  export type EventUpdateWithWhereUniqueWithoutMunicipalityInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutMunicipalityInput, EventUncheckedUpdateWithoutMunicipalityInput>
  }

  export type EventUpdateManyWithWhereWithoutMunicipalityInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutMunicipalityInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    image?: StringNullableFilter<"Event"> | string | null
    municipalityId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type GuideUpsertWithWhereUniqueWithoutMunicipalityInput = {
    where: GuideWhereUniqueInput
    update: XOR<GuideUpdateWithoutMunicipalityInput, GuideUncheckedUpdateWithoutMunicipalityInput>
    create: XOR<GuideCreateWithoutMunicipalityInput, GuideUncheckedCreateWithoutMunicipalityInput>
  }

  export type GuideUpdateWithWhereUniqueWithoutMunicipalityInput = {
    where: GuideWhereUniqueInput
    data: XOR<GuideUpdateWithoutMunicipalityInput, GuideUncheckedUpdateWithoutMunicipalityInput>
  }

  export type GuideUpdateManyWithWhereWithoutMunicipalityInput = {
    where: GuideScalarWhereInput
    data: XOR<GuideUpdateManyMutationInput, GuideUncheckedUpdateManyWithoutMunicipalityInput>
  }

  export type GuideScalarWhereInput = {
    AND?: GuideScalarWhereInput | GuideScalarWhereInput[]
    OR?: GuideScalarWhereInput[]
    NOT?: GuideScalarWhereInput | GuideScalarWhereInput[]
    id?: StringFilter<"Guide"> | string
    name?: StringFilter<"Guide"> | string
    phone?: StringFilter<"Guide"> | string
    languages?: StringNullableListFilter<"Guide">
    description?: StringNullableFilter<"Guide"> | string | null
    image?: StringNullableFilter<"Guide"> | string | null
    email?: StringNullableFilter<"Guide"> | string | null
    municipalityId?: StringFilter<"Guide"> | string
    createdAt?: DateTimeFilter<"Guide"> | Date | string
    updatedAt?: DateTimeFilter<"Guide"> | Date | string
  }

  export type MunicipalityImageUpsertWithWhereUniqueWithoutMunicipalityInput = {
    where: MunicipalityImageWhereUniqueInput
    update: XOR<MunicipalityImageUpdateWithoutMunicipalityInput, MunicipalityImageUncheckedUpdateWithoutMunicipalityInput>
    create: XOR<MunicipalityImageCreateWithoutMunicipalityInput, MunicipalityImageUncheckedCreateWithoutMunicipalityInput>
  }

  export type MunicipalityImageUpdateWithWhereUniqueWithoutMunicipalityInput = {
    where: MunicipalityImageWhereUniqueInput
    data: XOR<MunicipalityImageUpdateWithoutMunicipalityInput, MunicipalityImageUncheckedUpdateWithoutMunicipalityInput>
  }

  export type MunicipalityImageUpdateManyWithWhereWithoutMunicipalityInput = {
    where: MunicipalityImageScalarWhereInput
    data: XOR<MunicipalityImageUpdateManyMutationInput, MunicipalityImageUncheckedUpdateManyWithoutMunicipalityInput>
  }

  export type MunicipalityImageScalarWhereInput = {
    AND?: MunicipalityImageScalarWhereInput | MunicipalityImageScalarWhereInput[]
    OR?: MunicipalityImageScalarWhereInput[]
    NOT?: MunicipalityImageScalarWhereInput | MunicipalityImageScalarWhereInput[]
    id?: StringFilter<"MunicipalityImage"> | string
    url?: StringFilter<"MunicipalityImage"> | string
    municipalityId?: StringFilter<"MunicipalityImage"> | string
    createdAt?: DateTimeFilter<"MunicipalityImage"> | Date | string
    updatedAt?: DateTimeFilter<"MunicipalityImage"> | Date | string
  }

  export type MunicipalityCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionCreateNestedManyWithoutMunicipalityInput
    events?: EventCreateNestedManyWithoutMunicipalityInput
    guides?: GuideCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionUncheckedCreateNestedManyWithoutMunicipalityInput
    events?: EventUncheckedCreateNestedManyWithoutMunicipalityInput
    guides?: GuideUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityCreateOrConnectWithoutImagesInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutImagesInput, MunicipalityUncheckedCreateWithoutImagesInput>
  }

  export type MunicipalityUpsertWithoutImagesInput = {
    update: XOR<MunicipalityUpdateWithoutImagesInput, MunicipalityUncheckedUpdateWithoutImagesInput>
    create: XOR<MunicipalityCreateWithoutImagesInput, MunicipalityUncheckedCreateWithoutImagesInput>
    where?: MunicipalityWhereInput
  }

  export type MunicipalityUpdateToOneWithWhereWithoutImagesInput = {
    where?: MunicipalityWhereInput
    data: XOR<MunicipalityUpdateWithoutImagesInput, MunicipalityUncheckedUpdateWithoutImagesInput>
  }

  export type MunicipalityUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUpdateManyWithoutMunicipalityNestedInput
    events?: EventUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUncheckedUpdateManyWithoutMunicipalityNestedInput
    events?: EventUncheckedUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type HighlightImageCreateWithoutHighlightInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HighlightImageUncheckedCreateWithoutHighlightInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HighlightImageCreateOrConnectWithoutHighlightInput = {
    where: HighlightImageWhereUniqueInput
    create: XOR<HighlightImageCreateWithoutHighlightInput, HighlightImageUncheckedCreateWithoutHighlightInput>
  }

  export type HighlightImageCreateManyHighlightInputEnvelope = {
    data: HighlightImageCreateManyHighlightInput | HighlightImageCreateManyHighlightInput[]
    skipDuplicates?: boolean
  }

  export type MunicipalityCreateWithoutHighlightsInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionCreateNestedManyWithoutMunicipalityInput
    events?: EventCreateNestedManyWithoutMunicipalityInput
    guides?: GuideCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateWithoutHighlightsInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionUncheckedCreateNestedManyWithoutMunicipalityInput
    events?: EventUncheckedCreateNestedManyWithoutMunicipalityInput
    guides?: GuideUncheckedCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityCreateOrConnectWithoutHighlightsInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutHighlightsInput, MunicipalityUncheckedCreateWithoutHighlightsInput>
  }

  export type HighlightImageUpsertWithWhereUniqueWithoutHighlightInput = {
    where: HighlightImageWhereUniqueInput
    update: XOR<HighlightImageUpdateWithoutHighlightInput, HighlightImageUncheckedUpdateWithoutHighlightInput>
    create: XOR<HighlightImageCreateWithoutHighlightInput, HighlightImageUncheckedCreateWithoutHighlightInput>
  }

  export type HighlightImageUpdateWithWhereUniqueWithoutHighlightInput = {
    where: HighlightImageWhereUniqueInput
    data: XOR<HighlightImageUpdateWithoutHighlightInput, HighlightImageUncheckedUpdateWithoutHighlightInput>
  }

  export type HighlightImageUpdateManyWithWhereWithoutHighlightInput = {
    where: HighlightImageScalarWhereInput
    data: XOR<HighlightImageUpdateManyMutationInput, HighlightImageUncheckedUpdateManyWithoutHighlightInput>
  }

  export type HighlightImageScalarWhereInput = {
    AND?: HighlightImageScalarWhereInput | HighlightImageScalarWhereInput[]
    OR?: HighlightImageScalarWhereInput[]
    NOT?: HighlightImageScalarWhereInput | HighlightImageScalarWhereInput[]
    id?: StringFilter<"HighlightImage"> | string
    url?: StringFilter<"HighlightImage"> | string
    highlightId?: StringFilter<"HighlightImage"> | string
    createdAt?: DateTimeFilter<"HighlightImage"> | Date | string
    updatedAt?: DateTimeFilter<"HighlightImage"> | Date | string
  }

  export type MunicipalityUpsertWithoutHighlightsInput = {
    update: XOR<MunicipalityUpdateWithoutHighlightsInput, MunicipalityUncheckedUpdateWithoutHighlightsInput>
    create: XOR<MunicipalityCreateWithoutHighlightsInput, MunicipalityUncheckedCreateWithoutHighlightsInput>
    where?: MunicipalityWhereInput
  }

  export type MunicipalityUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: MunicipalityWhereInput
    data: XOR<MunicipalityUpdateWithoutHighlightsInput, MunicipalityUncheckedUpdateWithoutHighlightsInput>
  }

  export type MunicipalityUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUpdateManyWithoutMunicipalityNestedInput
    events?: EventUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateWithoutHighlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUncheckedUpdateManyWithoutMunicipalityNestedInput
    events?: EventUncheckedUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUncheckedUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type HighlightCreateWithoutGalleryImagesInput = {
    id?: string
    title: string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    municipality: MunicipalityCreateNestedOneWithoutHighlightsInput
  }

  export type HighlightUncheckedCreateWithoutGalleryImagesInput = {
    id?: string
    title: string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    municipalityId: string
    createdAt?: Date | string
  }

  export type HighlightCreateOrConnectWithoutGalleryImagesInput = {
    where: HighlightWhereUniqueInput
    create: XOR<HighlightCreateWithoutGalleryImagesInput, HighlightUncheckedCreateWithoutGalleryImagesInput>
  }

  export type HighlightUpsertWithoutGalleryImagesInput = {
    update: XOR<HighlightUpdateWithoutGalleryImagesInput, HighlightUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<HighlightCreateWithoutGalleryImagesInput, HighlightUncheckedCreateWithoutGalleryImagesInput>
    where?: HighlightWhereInput
  }

  export type HighlightUpdateToOneWithWhereWithoutGalleryImagesInput = {
    where?: HighlightWhereInput
    data: XOR<HighlightUpdateWithoutGalleryImagesInput, HighlightUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type HighlightUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    municipality?: MunicipalityUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type HighlightUncheckedUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityCreateWithoutAttractionsInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightCreateNestedManyWithoutMunicipalityInput
    events?: EventCreateNestedManyWithoutMunicipalityInput
    guides?: GuideCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateWithoutAttractionsInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutMunicipalityInput
    events?: EventUncheckedCreateNestedManyWithoutMunicipalityInput
    guides?: GuideUncheckedCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityCreateOrConnectWithoutAttractionsInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutAttractionsInput, MunicipalityUncheckedCreateWithoutAttractionsInput>
  }

  export type MunicipalityUpsertWithoutAttractionsInput = {
    update: XOR<MunicipalityUpdateWithoutAttractionsInput, MunicipalityUncheckedUpdateWithoutAttractionsInput>
    create: XOR<MunicipalityCreateWithoutAttractionsInput, MunicipalityUncheckedCreateWithoutAttractionsInput>
    where?: MunicipalityWhereInput
  }

  export type MunicipalityUpdateToOneWithWhereWithoutAttractionsInput = {
    where?: MunicipalityWhereInput
    data: XOR<MunicipalityUpdateWithoutAttractionsInput, MunicipalityUncheckedUpdateWithoutAttractionsInput>
  }

  export type MunicipalityUpdateWithoutAttractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUpdateManyWithoutMunicipalityNestedInput
    events?: EventUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateWithoutAttractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutMunicipalityNestedInput
    events?: EventUncheckedUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUncheckedUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type EventImageCreateWithoutEventInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageUncheckedCreateWithoutEventInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageCreateOrConnectWithoutEventInput = {
    where: EventImageWhereUniqueInput
    create: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput>
  }

  export type EventImageCreateManyEventInputEnvelope = {
    data: EventImageCreateManyEventInput | EventImageCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type MunicipalityCreateWithoutEventsInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionCreateNestedManyWithoutMunicipalityInput
    guides?: GuideCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionUncheckedCreateNestedManyWithoutMunicipalityInput
    guides?: GuideUncheckedCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityCreateOrConnectWithoutEventsInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutEventsInput, MunicipalityUncheckedCreateWithoutEventsInput>
  }

  export type EventImageUpsertWithWhereUniqueWithoutEventInput = {
    where: EventImageWhereUniqueInput
    update: XOR<EventImageUpdateWithoutEventInput, EventImageUncheckedUpdateWithoutEventInput>
    create: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput>
  }

  export type EventImageUpdateWithWhereUniqueWithoutEventInput = {
    where: EventImageWhereUniqueInput
    data: XOR<EventImageUpdateWithoutEventInput, EventImageUncheckedUpdateWithoutEventInput>
  }

  export type EventImageUpdateManyWithWhereWithoutEventInput = {
    where: EventImageScalarWhereInput
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyWithoutEventInput>
  }

  export type EventImageScalarWhereInput = {
    AND?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
    OR?: EventImageScalarWhereInput[]
    NOT?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
    id?: StringFilter<"EventImage"> | string
    url?: StringFilter<"EventImage"> | string
    eventId?: StringFilter<"EventImage"> | string
    createdAt?: DateTimeFilter<"EventImage"> | Date | string
    updatedAt?: DateTimeFilter<"EventImage"> | Date | string
  }

  export type MunicipalityUpsertWithoutEventsInput = {
    update: XOR<MunicipalityUpdateWithoutEventsInput, MunicipalityUncheckedUpdateWithoutEventsInput>
    create: XOR<MunicipalityCreateWithoutEventsInput, MunicipalityUncheckedCreateWithoutEventsInput>
    where?: MunicipalityWhereInput
  }

  export type MunicipalityUpdateToOneWithWhereWithoutEventsInput = {
    where?: MunicipalityWhereInput
    data: XOR<MunicipalityUpdateWithoutEventsInput, MunicipalityUncheckedUpdateWithoutEventsInput>
  }

  export type MunicipalityUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUncheckedUpdateManyWithoutMunicipalityNestedInput
    guides?: GuideUncheckedUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type EventCreateWithoutGalleryImagesInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    municipality: MunicipalityCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutGalleryImagesInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    image?: string | null
    municipalityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutGalleryImagesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutGalleryImagesInput, EventUncheckedCreateWithoutGalleryImagesInput>
  }

  export type EventUpsertWithoutGalleryImagesInput = {
    update: XOR<EventUpdateWithoutGalleryImagesInput, EventUncheckedUpdateWithoutGalleryImagesInput>
    create: XOR<EventCreateWithoutGalleryImagesInput, EventUncheckedCreateWithoutGalleryImagesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutGalleryImagesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutGalleryImagesInput, EventUncheckedUpdateWithoutGalleryImagesInput>
  }

  export type EventUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    municipality?: MunicipalityUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutGalleryImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityCreateWithoutGuidesInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionCreateNestedManyWithoutMunicipalityInput
    events?: EventCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityUncheckedCreateWithoutGuidesInput = {
    id?: string
    name: string
    description?: string | null
    coatOfArms?: string | null
    latitude?: number | null
    longitude?: number | null
    about?: string | null
    slug?: string | null
    ibgeCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutMunicipalityInput
    highlights?: HighlightUncheckedCreateNestedManyWithoutMunicipalityInput
    attractions?: AttractionUncheckedCreateNestedManyWithoutMunicipalityInput
    events?: EventUncheckedCreateNestedManyWithoutMunicipalityInput
    images?: MunicipalityImageUncheckedCreateNestedManyWithoutMunicipalityInput
  }

  export type MunicipalityCreateOrConnectWithoutGuidesInput = {
    where: MunicipalityWhereUniqueInput
    create: XOR<MunicipalityCreateWithoutGuidesInput, MunicipalityUncheckedCreateWithoutGuidesInput>
  }

  export type MunicipalityUpsertWithoutGuidesInput = {
    update: XOR<MunicipalityUpdateWithoutGuidesInput, MunicipalityUncheckedUpdateWithoutGuidesInput>
    create: XOR<MunicipalityCreateWithoutGuidesInput, MunicipalityUncheckedCreateWithoutGuidesInput>
    where?: MunicipalityWhereInput
  }

  export type MunicipalityUpdateToOneWithWhereWithoutGuidesInput = {
    where?: MunicipalityWhereInput
    data: XOR<MunicipalityUpdateWithoutGuidesInput, MunicipalityUncheckedUpdateWithoutGuidesInput>
  }

  export type MunicipalityUpdateWithoutGuidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUpdateManyWithoutMunicipalityNestedInput
    events?: EventUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUpdateManyWithoutMunicipalityNestedInput
  }

  export type MunicipalityUncheckedUpdateWithoutGuidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coatOfArms?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    ibgeCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutMunicipalityNestedInput
    highlights?: HighlightUncheckedUpdateManyWithoutMunicipalityNestedInput
    attractions?: AttractionUncheckedUpdateManyWithoutMunicipalityNestedInput
    events?: EventUncheckedUpdateManyWithoutMunicipalityNestedInput
    images?: MunicipalityImageUncheckedUpdateManyWithoutMunicipalityNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    clerkId?: string | null
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    municipality?: MunicipalityCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    clerkId?: string | null
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    municipalityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    municipality?: MunicipalityUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    municipalityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    coverImage?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyMunicipalityInput = {
    id?: string
    clerkId?: string | null
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HighlightCreateManyMunicipalityInput = {
    id?: string
    title: string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type AttractionCreateManyMunicipalityInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyMunicipalityInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideCreateManyMunicipalityInput = {
    id?: string
    name: string
    phone: string
    languages?: GuideCreatelanguagesInput | string[]
    description?: string | null
    image?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MunicipalityImageCreateManyMunicipalityInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: HighlightImageUpdateManyWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: HighlightImageUncheckedUpdateManyWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateManyWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionUncheckedUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttractionUncheckedUpdateManyWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: EventImageUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleryImages?: EventImageUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    languages?: GuideUpdatelanguagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideUncheckedUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    languages?: GuideUpdatelanguagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideUncheckedUpdateManyWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    languages?: GuideUpdatelanguagesInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityImageUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityImageUncheckedUpdateWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MunicipalityImageUncheckedUpdateManyWithoutMunicipalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightImageCreateManyHighlightInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HighlightImageUpdateWithoutHighlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightImageUncheckedUpdateWithoutHighlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightImageUncheckedUpdateManyWithoutHighlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageCreateManyEventInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventImageUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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