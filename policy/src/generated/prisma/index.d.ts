
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Policy
 */

export type Policy = {
  id: string
  createdAt: Date
  updatedAt: Date
  version: number
  quoteId: string
  startDate: Date
  policyNumber: string
  status: PolicyStatus
  isDeleted: boolean
}

/**
 * Model PolicyTransaction
 */

export type PolicyTransaction = {
  id: string
  createdAt: Date
  updatedAt: Date
  version: number
  policyId: string
  name: string
}

/**
 * Model PolicyDetails
 */

export type PolicyDetails = {
  id: number
  createdAt: Date
  updatedAt: Date
  version: number
  policyId: string
  name: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const PolicyStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INVALID: 'INVALID',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Policies
 * const policies = await prisma.policy.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Policies
   * const policies = await prisma.policy.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>;

      /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<GlobalReject>;

  /**
   * `prisma.policyTransaction`: Exposes CRUD operations for the **PolicyTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolicyTransactions
    * const policyTransactions = await prisma.policyTransaction.findMany()
    * ```
    */
  get policyTransaction(): Prisma.PolicyTransactionDelegate<GlobalReject>;

  /**
   * `prisma.policyDetails`: Exposes CRUD operations for the **PolicyDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolicyDetails
    * const policyDetails = await prisma.policyDetails.findMany()
    * ```
    */
  get policyDetails(): Prisma.PolicyDetailsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 3.3.0
   * Query Engine version: 33838b0f78f1fe9052cf9a00e9761c9dc097a63c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Policy: 'Policy',
    PolicyTransaction: 'PolicyTransaction',
    PolicyDetails: 'PolicyDetails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PolicyCountOutputType
   */


  export type PolicyCountOutputType = {
    transactions: number
    details: number
  }

  export type PolicyCountOutputTypeSelect = {
    transactions?: boolean
    details?: boolean
  }

  export type PolicyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PolicyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PolicyCountOutputType
    : S extends undefined
    ? never
    : S extends PolicyCountOutputTypeArgs
    ?'include' extends U
    ? PolicyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PolicyCountOutputType ?PolicyCountOutputType [P]
  : 
     never
  } 
    : PolicyCountOutputType
  : PolicyCountOutputType




  // Custom InputTypes

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PolicyCountOutputType
     * 
    **/
    select?: PolicyCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Policy
   */


  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    version: number | null
  }

  export type PolicySumAggregateOutputType = {
    version: number | null
  }

  export type PolicyMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    version: number | null
    quoteId: string | null
    startDate: Date | null
    policyNumber: string | null
    status: PolicyStatus | null
    isDeleted: boolean | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    version: number | null
    quoteId: string | null
    startDate: Date | null
    policyNumber: string | null
    status: PolicyStatus | null
    isDeleted: boolean | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    version: number
    quoteId: number
    startDate: number
    policyNumber: number
    status: number
    isDeleted: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    version?: true
  }

  export type PolicySumAggregateInputType = {
    version?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    quoteId?: true
    startDate?: true
    policyNumber?: true
    status?: true
    isDeleted?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    quoteId?: true
    startDate?: true
    policyNumber?: true
    status?: true
    isDeleted?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    quoteId?: true
    startDate?: true
    policyNumber?: true
    status?: true
    isDeleted?: true
    _all?: true
  }

  export type PolicyAggregateArgs = {
    /**
     * Filter which Policy to aggregate.
     * 
    **/
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }


    
    
  export type PolicyGroupByArgs = {
    where?: PolicyWhereInput
    orderBy?: Enumerable<PolicyOrderByWithAggregationInput>
    by: Array<PolicyScalarFieldEnum>
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }


  export type PolicyGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    version: number
    quoteId: string
    startDate: Date
    policyNumber: string
    status: PolicyStatus
    isDeleted: boolean
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Promise<
    Array<
      PickArray<PolicyGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PolicyGroupByOutputType[P]> 
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      > 
    >


  export type PolicySelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    version?: boolean
    quoteId?: boolean
    startDate?: boolean
    policyNumber?: boolean
    status?: boolean
    isDeleted?: boolean
    transactions?: boolean | PolicyTransactionFindManyArgs
    details?: boolean | PolicyDetailsFindManyArgs
    _count?: boolean | PolicyCountOutputTypeArgs
  }

  export type PolicyInclude = {
    transactions?: boolean | PolicyTransactionFindManyArgs
    details?: boolean | PolicyDetailsFindManyArgs
    _count?: boolean | PolicyCountOutputTypeArgs
  }

  export type PolicyGetPayload<
    S extends boolean | null | undefined | PolicyArgs,
    U = keyof S
      > = S extends true
        ? Policy
    : S extends undefined
    ? never
    : S extends PolicyArgs | PolicyFindManyArgs
    ?'include' extends U
    ? Policy  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'transactions'
        ? Array < PolicyTransactionGetPayload<S['include'][P]>>  :
        P extends 'details'
        ? Array < PolicyDetailsGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PolicyCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Policy ?Policy [P]
  : 
          P extends 'transactions'
        ? Array < PolicyTransactionGetPayload<S['select'][P]>>  :
        P extends 'details'
        ? Array < PolicyDetailsGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PolicyCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Policy
  : Policy


  type PolicyCountArgs = Merge<
    Omit<PolicyFindManyArgs, 'select' | 'include'> & {
      select?: PolicyCountAggregateInputType | true
    }
  >

  export interface PolicyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PolicyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PolicyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Policy'> extends True ? CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>> : CheckSelect<T, Prisma__PolicyClient<Policy | null >, Prisma__PolicyClient<PolicyGetPayload<T> | null >>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PolicyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PolicyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Policy'> extends True ? CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>> : CheckSelect<T, Prisma__PolicyClient<Policy | null >, Prisma__PolicyClient<PolicyGetPayload<T> | null >>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PolicyFindManyArgs>(
      args?: SelectSubset<T, PolicyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Policy>>, PrismaPromise<Array<PolicyGetPayload<T>>>>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
    **/
    create<T extends PolicyCreateArgs>(
      args: SelectSubset<T, PolicyCreateArgs>
    ): CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>>

    /**
     * Create many Policies.
     *     @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     *     @example
     *     // Create many Policies
     *     const policy = await prisma.policy.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PolicyCreateManyArgs>(
      args?: SelectSubset<T, PolicyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
    **/
    delete<T extends PolicyDeleteArgs>(
      args: SelectSubset<T, PolicyDeleteArgs>
    ): CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PolicyUpdateArgs>(
      args: SelectSubset<T, PolicyUpdateArgs>
    ): CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PolicyDeleteManyArgs>(
      args?: SelectSubset<T, PolicyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PolicyUpdateManyArgs>(
      args: SelectSubset<T, PolicyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
    **/
    upsert<T extends PolicyUpsertArgs>(
      args: SelectSubset<T, PolicyUpsertArgs>
    ): CheckSelect<T, Prisma__PolicyClient<Policy>, Prisma__PolicyClient<PolicyGetPayload<T>>>

    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
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
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PolicyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    transactions<T extends PolicyTransactionFindManyArgs = {}>(args?: Subset<T, PolicyTransactionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PolicyTransaction>>, PrismaPromise<Array<PolicyTransactionGetPayload<T>>>>;

    details<T extends PolicyDetailsFindManyArgs = {}>(args?: Subset<T, PolicyDetailsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PolicyDetails>>, PrismaPromise<Array<PolicyDetailsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * Throw an Error if a Policy can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Policy to fetch.
     * 
    **/
    where: PolicyWhereUniqueInput
  }


  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * Throw an Error if a Policy can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Policy to fetch.
     * 
    **/
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     * 
    **/
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     * 
    **/
    distinct?: Enumerable<PolicyScalarFieldEnum>
  }


  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * Filter, which Policies to fetch.
     * 
    **/
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     * 
    **/
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PolicyScalarFieldEnum>
  }


  /**
   * Policy create
   */
  export type PolicyCreateArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * The data needed to create a Policy.
     * 
    **/
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }


  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs = {
    data: Enumerable<PolicyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Policy update
   */
  export type PolicyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * The data needed to update a Policy.
     * 
    **/
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     * 
    **/
    where: PolicyWhereUniqueInput
  }


  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs = {
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    where?: PolicyWhereInput
  }


  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * The filter to search for the Policy to update in case it exists.
     * 
    **/
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     * 
    **/
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }


  /**
   * Policy delete
   */
  export type PolicyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
    /**
     * Filter which Policy to delete.
     * 
    **/
    where: PolicyWhereUniqueInput
  }


  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs = {
    where?: PolicyWhereInput
  }


  /**
   * Policy without action
   */
  export type PolicyArgs = {
    /**
     * Select specific fields to fetch from the Policy
     * 
    **/
    select?: PolicySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyInclude | null
  }



  /**
   * Model PolicyTransaction
   */


  export type AggregatePolicyTransaction = {
    _count: PolicyTransactionCountAggregateOutputType | null
    _avg: PolicyTransactionAvgAggregateOutputType | null
    _sum: PolicyTransactionSumAggregateOutputType | null
    _min: PolicyTransactionMinAggregateOutputType | null
    _max: PolicyTransactionMaxAggregateOutputType | null
  }

  export type PolicyTransactionAvgAggregateOutputType = {
    version: number | null
  }

  export type PolicyTransactionSumAggregateOutputType = {
    version: number | null
  }

  export type PolicyTransactionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    version: number | null
    policyId: string | null
    name: string | null
  }

  export type PolicyTransactionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    version: number | null
    policyId: string | null
    name: string | null
  }

  export type PolicyTransactionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    version: number
    policyId: number
    name: number
    _all: number
  }


  export type PolicyTransactionAvgAggregateInputType = {
    version?: true
  }

  export type PolicyTransactionSumAggregateInputType = {
    version?: true
  }

  export type PolicyTransactionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    policyId?: true
    name?: true
  }

  export type PolicyTransactionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    policyId?: true
    name?: true
  }

  export type PolicyTransactionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    policyId?: true
    name?: true
    _all?: true
  }

  export type PolicyTransactionAggregateArgs = {
    /**
     * Filter which PolicyTransaction to aggregate.
     * 
    **/
    where?: PolicyTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTransactions to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyTransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PolicyTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTransactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTransactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolicyTransactions
    **/
    _count?: true | PolicyTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicyTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyTransactionMaxAggregateInputType
  }

  export type GetPolicyTransactionAggregateType<T extends PolicyTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicyTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicyTransaction[P]>
      : GetScalarType<T[P], AggregatePolicyTransaction[P]>
  }


    
    
  export type PolicyTransactionGroupByArgs = {
    where?: PolicyTransactionWhereInput
    orderBy?: Enumerable<PolicyTransactionOrderByWithAggregationInput>
    by: Array<PolicyTransactionScalarFieldEnum>
    having?: PolicyTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyTransactionCountAggregateInputType | true
    _avg?: PolicyTransactionAvgAggregateInputType
    _sum?: PolicyTransactionSumAggregateInputType
    _min?: PolicyTransactionMinAggregateInputType
    _max?: PolicyTransactionMaxAggregateInputType
  }


  export type PolicyTransactionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    version: number
    policyId: string
    name: string
    _count: PolicyTransactionCountAggregateOutputType | null
    _avg: PolicyTransactionAvgAggregateOutputType | null
    _sum: PolicyTransactionSumAggregateOutputType | null
    _min: PolicyTransactionMinAggregateOutputType | null
    _max: PolicyTransactionMaxAggregateOutputType | null
  }

  type GetPolicyTransactionGroupByPayload<T extends PolicyTransactionGroupByArgs> = Promise<
    Array<
      PickArray<PolicyTransactionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PolicyTransactionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PolicyTransactionGroupByOutputType[P]> 
            : GetScalarType<T[P], PolicyTransactionGroupByOutputType[P]>
        }
      > 
    >


  export type PolicyTransactionSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    version?: boolean
    policy?: boolean | PolicyArgs
    policyId?: boolean
    name?: boolean
  }

  export type PolicyTransactionInclude = {
    policy?: boolean | PolicyArgs
  }

  export type PolicyTransactionGetPayload<
    S extends boolean | null | undefined | PolicyTransactionArgs,
    U = keyof S
      > = S extends true
        ? PolicyTransaction
    : S extends undefined
    ? never
    : S extends PolicyTransactionArgs | PolicyTransactionFindManyArgs
    ?'include' extends U
    ? PolicyTransaction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'policy'
        ? PolicyGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PolicyTransaction ?PolicyTransaction [P]
  : 
          P extends 'policy'
        ? PolicyGetPayload<S['select'][P]> : never
  } 
    : PolicyTransaction
  : PolicyTransaction


  type PolicyTransactionCountArgs = Merge<
    Omit<PolicyTransactionFindManyArgs, 'select' | 'include'> & {
      select?: PolicyTransactionCountAggregateInputType | true
    }
  >

  export interface PolicyTransactionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PolicyTransaction that matches the filter.
     * @param {PolicyTransactionFindUniqueArgs} args - Arguments to find a PolicyTransaction
     * @example
     * // Get one PolicyTransaction
     * const policyTransaction = await prisma.policyTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PolicyTransactionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PolicyTransactionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PolicyTransaction'> extends True ? CheckSelect<T, Prisma__PolicyTransactionClient<PolicyTransaction>, Prisma__PolicyTransactionClient<PolicyTransactionGetPayload<T>>> : CheckSelect<T, Prisma__PolicyTransactionClient<PolicyTransaction | null >, Prisma__PolicyTransactionClient<PolicyTransactionGetPayload<T> | null >>

    /**
     * Find the first PolicyTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTransactionFindFirstArgs} args - Arguments to find a PolicyTransaction
     * @example
     * // Get one PolicyTransaction
     * const policyTransaction = await prisma.policyTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PolicyTransactionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PolicyTransactionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PolicyTransaction'> extends True ? CheckSelect<T, Prisma__PolicyTransactionClient<PolicyTransaction>, Prisma__PolicyTransactionClient<PolicyTransactionGetPayload<T>>> : CheckSelect<T, Prisma__PolicyTransactionClient<PolicyTransaction | null >, Prisma__PolicyTransactionClient<PolicyTransactionGetPayload<T> | null >>

    /**
     * Find zero or more PolicyTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolicyTransactions
     * const policyTransactions = await prisma.policyTransaction.findMany()
     * 
     * // Get first 10 PolicyTransactions
     * const policyTransactions = await prisma.policyTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyTransactionWithIdOnly = await prisma.policyTransaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PolicyTransactionFindManyArgs>(
      args?: SelectSubset<T, PolicyTransactionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PolicyTransaction>>, PrismaPromise<Array<PolicyTransactionGetPayload<T>>>>

    /**
     * Create a PolicyTransaction.
     * @param {PolicyTransactionCreateArgs} args - Arguments to create a PolicyTransaction.
     * @example
     * // Create one PolicyTransaction
     * const PolicyTransaction = await prisma.policyTransaction.create({
     *   data: {
     *     // ... data to create a PolicyTransaction
     *   }
     * })
     * 
    **/
    create<T extends PolicyTransactionCreateArgs>(
      args: SelectSubset<T, PolicyTransactionCreateArgs>
    ): CheckSelect<T, Prisma__PolicyTransactionClient<PolicyTransaction>, Prisma__PolicyTransactionClient<PolicyTransactionGetPayload<T>>>

    /**
     * Create many PolicyTransactions.
     *     @param {PolicyTransactionCreateManyArgs} args - Arguments to create many PolicyTransactions.
     *     @example
     *     // Create many PolicyTransactions
     *     const policyTransaction = await prisma.policyTransaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PolicyTransactionCreateManyArgs>(
      args?: SelectSubset<T, PolicyTransactionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PolicyTransaction.
     * @param {PolicyTransactionDeleteArgs} args - Arguments to delete one PolicyTransaction.
     * @example
     * // Delete one PolicyTransaction
     * const PolicyTransaction = await prisma.policyTransaction.delete({
     *   where: {
     *     // ... filter to delete one PolicyTransaction
     *   }
     * })
     * 
    **/
    delete<T extends PolicyTransactionDeleteArgs>(
      args: SelectSubset<T, PolicyTransactionDeleteArgs>
    ): CheckSelect<T, Prisma__PolicyTransactionClient<PolicyTransaction>, Prisma__PolicyTransactionClient<PolicyTransactionGetPayload<T>>>

    /**
     * Update one PolicyTransaction.
     * @param {PolicyTransactionUpdateArgs} args - Arguments to update one PolicyTransaction.
     * @example
     * // Update one PolicyTransaction
     * const policyTransaction = await prisma.policyTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PolicyTransactionUpdateArgs>(
      args: SelectSubset<T, PolicyTransactionUpdateArgs>
    ): CheckSelect<T, Prisma__PolicyTransactionClient<PolicyTransaction>, Prisma__PolicyTransactionClient<PolicyTransactionGetPayload<T>>>

    /**
     * Delete zero or more PolicyTransactions.
     * @param {PolicyTransactionDeleteManyArgs} args - Arguments to filter PolicyTransactions to delete.
     * @example
     * // Delete a few PolicyTransactions
     * const { count } = await prisma.policyTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PolicyTransactionDeleteManyArgs>(
      args?: SelectSubset<T, PolicyTransactionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolicyTransactions
     * const policyTransaction = await prisma.policyTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PolicyTransactionUpdateManyArgs>(
      args: SelectSubset<T, PolicyTransactionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PolicyTransaction.
     * @param {PolicyTransactionUpsertArgs} args - Arguments to update or create a PolicyTransaction.
     * @example
     * // Update or create a PolicyTransaction
     * const policyTransaction = await prisma.policyTransaction.upsert({
     *   create: {
     *     // ... data to create a PolicyTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolicyTransaction we want to update
     *   }
     * })
    **/
    upsert<T extends PolicyTransactionUpsertArgs>(
      args: SelectSubset<T, PolicyTransactionUpsertArgs>
    ): CheckSelect<T, Prisma__PolicyTransactionClient<PolicyTransaction>, Prisma__PolicyTransactionClient<PolicyTransactionGetPayload<T>>>

    /**
     * Count the number of PolicyTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTransactionCountArgs} args - Arguments to filter PolicyTransactions to count.
     * @example
     * // Count the number of PolicyTransactions
     * const count = await prisma.policyTransaction.count({
     *   where: {
     *     // ... the filter for the PolicyTransactions we want to count
     *   }
     * })
    **/
    count<T extends PolicyTransactionCountArgs>(
      args?: Subset<T, PolicyTransactionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolicyTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyTransactionAggregateArgs>(args: Subset<T, PolicyTransactionAggregateArgs>): PrismaPromise<GetPolicyTransactionAggregateType<T>>

    /**
     * Group by PolicyTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTransactionGroupByArgs} args - Group by arguments.
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
      T extends PolicyTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PolicyTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PolicyTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyTransactionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolicyTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PolicyTransactionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    policy<T extends PolicyArgs = {}>(args?: Subset<T, PolicyArgs>): CheckSelect<T, Prisma__PolicyClient<Policy | null >, Prisma__PolicyClient<PolicyGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PolicyTransaction findUnique
   */
  export type PolicyTransactionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PolicyTransaction
     * 
    **/
    select?: PolicyTransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyTransactionInclude | null
    /**
     * Throw an Error if a PolicyTransaction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PolicyTransaction to fetch.
     * 
    **/
    where: PolicyTransactionWhereUniqueInput
  }


  /**
   * PolicyTransaction findFirst
   */
  export type PolicyTransactionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PolicyTransaction
     * 
    **/
    select?: PolicyTransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyTransactionInclude | null
    /**
     * Throw an Error if a PolicyTransaction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PolicyTransaction to fetch.
     * 
    **/
    where?: PolicyTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTransactions to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyTransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyTransactions.
     * 
    **/
    cursor?: PolicyTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTransactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTransactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyTransactions.
     * 
    **/
    distinct?: Enumerable<PolicyTransactionScalarFieldEnum>
  }


  /**
   * PolicyTransaction findMany
   */
  export type PolicyTransactionFindManyArgs = {
    /**
     * Select specific fields to fetch from the PolicyTransaction
     * 
    **/
    select?: PolicyTransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyTransactionInclude | null
    /**
     * Filter, which PolicyTransactions to fetch.
     * 
    **/
    where?: PolicyTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTransactions to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyTransactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolicyTransactions.
     * 
    **/
    cursor?: PolicyTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTransactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTransactions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PolicyTransactionScalarFieldEnum>
  }


  /**
   * PolicyTransaction create
   */
  export type PolicyTransactionCreateArgs = {
    /**
     * Select specific fields to fetch from the PolicyTransaction
     * 
    **/
    select?: PolicyTransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyTransactionInclude | null
    /**
     * The data needed to create a PolicyTransaction.
     * 
    **/
    data: XOR<PolicyTransactionCreateInput, PolicyTransactionUncheckedCreateInput>
  }


  /**
   * PolicyTransaction createMany
   */
  export type PolicyTransactionCreateManyArgs = {
    data: Enumerable<PolicyTransactionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PolicyTransaction update
   */
  export type PolicyTransactionUpdateArgs = {
    /**
     * Select specific fields to fetch from the PolicyTransaction
     * 
    **/
    select?: PolicyTransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyTransactionInclude | null
    /**
     * The data needed to update a PolicyTransaction.
     * 
    **/
    data: XOR<PolicyTransactionUpdateInput, PolicyTransactionUncheckedUpdateInput>
    /**
     * Choose, which PolicyTransaction to update.
     * 
    **/
    where: PolicyTransactionWhereUniqueInput
  }


  /**
   * PolicyTransaction updateMany
   */
  export type PolicyTransactionUpdateManyArgs = {
    data: XOR<PolicyTransactionUpdateManyMutationInput, PolicyTransactionUncheckedUpdateManyInput>
    where?: PolicyTransactionWhereInput
  }


  /**
   * PolicyTransaction upsert
   */
  export type PolicyTransactionUpsertArgs = {
    /**
     * Select specific fields to fetch from the PolicyTransaction
     * 
    **/
    select?: PolicyTransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyTransactionInclude | null
    /**
     * The filter to search for the PolicyTransaction to update in case it exists.
     * 
    **/
    where: PolicyTransactionWhereUniqueInput
    /**
     * In case the PolicyTransaction found by the `where` argument doesn't exist, create a new PolicyTransaction with this data.
     * 
    **/
    create: XOR<PolicyTransactionCreateInput, PolicyTransactionUncheckedCreateInput>
    /**
     * In case the PolicyTransaction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PolicyTransactionUpdateInput, PolicyTransactionUncheckedUpdateInput>
  }


  /**
   * PolicyTransaction delete
   */
  export type PolicyTransactionDeleteArgs = {
    /**
     * Select specific fields to fetch from the PolicyTransaction
     * 
    **/
    select?: PolicyTransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyTransactionInclude | null
    /**
     * Filter which PolicyTransaction to delete.
     * 
    **/
    where: PolicyTransactionWhereUniqueInput
  }


  /**
   * PolicyTransaction deleteMany
   */
  export type PolicyTransactionDeleteManyArgs = {
    where?: PolicyTransactionWhereInput
  }


  /**
   * PolicyTransaction without action
   */
  export type PolicyTransactionArgs = {
    /**
     * Select specific fields to fetch from the PolicyTransaction
     * 
    **/
    select?: PolicyTransactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyTransactionInclude | null
  }



  /**
   * Model PolicyDetails
   */


  export type AggregatePolicyDetails = {
    _count: PolicyDetailsCountAggregateOutputType | null
    _avg: PolicyDetailsAvgAggregateOutputType | null
    _sum: PolicyDetailsSumAggregateOutputType | null
    _min: PolicyDetailsMinAggregateOutputType | null
    _max: PolicyDetailsMaxAggregateOutputType | null
  }

  export type PolicyDetailsAvgAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type PolicyDetailsSumAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type PolicyDetailsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    version: number | null
    policyId: string | null
    name: string | null
  }

  export type PolicyDetailsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    version: number | null
    policyId: string | null
    name: string | null
  }

  export type PolicyDetailsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    version: number
    policyId: number
    name: number
    _all: number
  }


  export type PolicyDetailsAvgAggregateInputType = {
    id?: true
    version?: true
  }

  export type PolicyDetailsSumAggregateInputType = {
    id?: true
    version?: true
  }

  export type PolicyDetailsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    policyId?: true
    name?: true
  }

  export type PolicyDetailsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    policyId?: true
    name?: true
  }

  export type PolicyDetailsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    policyId?: true
    name?: true
    _all?: true
  }

  export type PolicyDetailsAggregateArgs = {
    /**
     * Filter which PolicyDetails to aggregate.
     * 
    **/
    where?: PolicyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyDetailsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PolicyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolicyDetails
    **/
    _count?: true | PolicyDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicyDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyDetailsMaxAggregateInputType
  }

  export type GetPolicyDetailsAggregateType<T extends PolicyDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicyDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicyDetails[P]>
      : GetScalarType<T[P], AggregatePolicyDetails[P]>
  }


    
    
  export type PolicyDetailsGroupByArgs = {
    where?: PolicyDetailsWhereInput
    orderBy?: Enumerable<PolicyDetailsOrderByWithAggregationInput>
    by: Array<PolicyDetailsScalarFieldEnum>
    having?: PolicyDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyDetailsCountAggregateInputType | true
    _avg?: PolicyDetailsAvgAggregateInputType
    _sum?: PolicyDetailsSumAggregateInputType
    _min?: PolicyDetailsMinAggregateInputType
    _max?: PolicyDetailsMaxAggregateInputType
  }


  export type PolicyDetailsGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    version: number
    policyId: string
    name: string
    _count: PolicyDetailsCountAggregateOutputType | null
    _avg: PolicyDetailsAvgAggregateOutputType | null
    _sum: PolicyDetailsSumAggregateOutputType | null
    _min: PolicyDetailsMinAggregateOutputType | null
    _max: PolicyDetailsMaxAggregateOutputType | null
  }

  type GetPolicyDetailsGroupByPayload<T extends PolicyDetailsGroupByArgs> = Promise<
    Array<
      PickArray<PolicyDetailsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PolicyDetailsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PolicyDetailsGroupByOutputType[P]> 
            : GetScalarType<T[P], PolicyDetailsGroupByOutputType[P]>
        }
      > 
    >


  export type PolicyDetailsSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    version?: boolean
    policy?: boolean | PolicyArgs
    policyId?: boolean
    name?: boolean
  }

  export type PolicyDetailsInclude = {
    policy?: boolean | PolicyArgs
  }

  export type PolicyDetailsGetPayload<
    S extends boolean | null | undefined | PolicyDetailsArgs,
    U = keyof S
      > = S extends true
        ? PolicyDetails
    : S extends undefined
    ? never
    : S extends PolicyDetailsArgs | PolicyDetailsFindManyArgs
    ?'include' extends U
    ? PolicyDetails  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'policy'
        ? PolicyGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PolicyDetails ?PolicyDetails [P]
  : 
          P extends 'policy'
        ? PolicyGetPayload<S['select'][P]> : never
  } 
    : PolicyDetails
  : PolicyDetails


  type PolicyDetailsCountArgs = Merge<
    Omit<PolicyDetailsFindManyArgs, 'select' | 'include'> & {
      select?: PolicyDetailsCountAggregateInputType | true
    }
  >

  export interface PolicyDetailsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PolicyDetails that matches the filter.
     * @param {PolicyDetailsFindUniqueArgs} args - Arguments to find a PolicyDetails
     * @example
     * // Get one PolicyDetails
     * const policyDetails = await prisma.policyDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PolicyDetailsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PolicyDetailsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PolicyDetails'> extends True ? CheckSelect<T, Prisma__PolicyDetailsClient<PolicyDetails>, Prisma__PolicyDetailsClient<PolicyDetailsGetPayload<T>>> : CheckSelect<T, Prisma__PolicyDetailsClient<PolicyDetails | null >, Prisma__PolicyDetailsClient<PolicyDetailsGetPayload<T> | null >>

    /**
     * Find the first PolicyDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDetailsFindFirstArgs} args - Arguments to find a PolicyDetails
     * @example
     * // Get one PolicyDetails
     * const policyDetails = await prisma.policyDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PolicyDetailsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PolicyDetailsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PolicyDetails'> extends True ? CheckSelect<T, Prisma__PolicyDetailsClient<PolicyDetails>, Prisma__PolicyDetailsClient<PolicyDetailsGetPayload<T>>> : CheckSelect<T, Prisma__PolicyDetailsClient<PolicyDetails | null >, Prisma__PolicyDetailsClient<PolicyDetailsGetPayload<T> | null >>

    /**
     * Find zero or more PolicyDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolicyDetails
     * const policyDetails = await prisma.policyDetails.findMany()
     * 
     * // Get first 10 PolicyDetails
     * const policyDetails = await prisma.policyDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyDetailsWithIdOnly = await prisma.policyDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PolicyDetailsFindManyArgs>(
      args?: SelectSubset<T, PolicyDetailsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PolicyDetails>>, PrismaPromise<Array<PolicyDetailsGetPayload<T>>>>

    /**
     * Create a PolicyDetails.
     * @param {PolicyDetailsCreateArgs} args - Arguments to create a PolicyDetails.
     * @example
     * // Create one PolicyDetails
     * const PolicyDetails = await prisma.policyDetails.create({
     *   data: {
     *     // ... data to create a PolicyDetails
     *   }
     * })
     * 
    **/
    create<T extends PolicyDetailsCreateArgs>(
      args: SelectSubset<T, PolicyDetailsCreateArgs>
    ): CheckSelect<T, Prisma__PolicyDetailsClient<PolicyDetails>, Prisma__PolicyDetailsClient<PolicyDetailsGetPayload<T>>>

    /**
     * Create many PolicyDetails.
     *     @param {PolicyDetailsCreateManyArgs} args - Arguments to create many PolicyDetails.
     *     @example
     *     // Create many PolicyDetails
     *     const policyDetails = await prisma.policyDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PolicyDetailsCreateManyArgs>(
      args?: SelectSubset<T, PolicyDetailsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PolicyDetails.
     * @param {PolicyDetailsDeleteArgs} args - Arguments to delete one PolicyDetails.
     * @example
     * // Delete one PolicyDetails
     * const PolicyDetails = await prisma.policyDetails.delete({
     *   where: {
     *     // ... filter to delete one PolicyDetails
     *   }
     * })
     * 
    **/
    delete<T extends PolicyDetailsDeleteArgs>(
      args: SelectSubset<T, PolicyDetailsDeleteArgs>
    ): CheckSelect<T, Prisma__PolicyDetailsClient<PolicyDetails>, Prisma__PolicyDetailsClient<PolicyDetailsGetPayload<T>>>

    /**
     * Update one PolicyDetails.
     * @param {PolicyDetailsUpdateArgs} args - Arguments to update one PolicyDetails.
     * @example
     * // Update one PolicyDetails
     * const policyDetails = await prisma.policyDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PolicyDetailsUpdateArgs>(
      args: SelectSubset<T, PolicyDetailsUpdateArgs>
    ): CheckSelect<T, Prisma__PolicyDetailsClient<PolicyDetails>, Prisma__PolicyDetailsClient<PolicyDetailsGetPayload<T>>>

    /**
     * Delete zero or more PolicyDetails.
     * @param {PolicyDetailsDeleteManyArgs} args - Arguments to filter PolicyDetails to delete.
     * @example
     * // Delete a few PolicyDetails
     * const { count } = await prisma.policyDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PolicyDetailsDeleteManyArgs>(
      args?: SelectSubset<T, PolicyDetailsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolicyDetails
     * const policyDetails = await prisma.policyDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PolicyDetailsUpdateManyArgs>(
      args: SelectSubset<T, PolicyDetailsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PolicyDetails.
     * @param {PolicyDetailsUpsertArgs} args - Arguments to update or create a PolicyDetails.
     * @example
     * // Update or create a PolicyDetails
     * const policyDetails = await prisma.policyDetails.upsert({
     *   create: {
     *     // ... data to create a PolicyDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolicyDetails we want to update
     *   }
     * })
    **/
    upsert<T extends PolicyDetailsUpsertArgs>(
      args: SelectSubset<T, PolicyDetailsUpsertArgs>
    ): CheckSelect<T, Prisma__PolicyDetailsClient<PolicyDetails>, Prisma__PolicyDetailsClient<PolicyDetailsGetPayload<T>>>

    /**
     * Count the number of PolicyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDetailsCountArgs} args - Arguments to filter PolicyDetails to count.
     * @example
     * // Count the number of PolicyDetails
     * const count = await prisma.policyDetails.count({
     *   where: {
     *     // ... the filter for the PolicyDetails we want to count
     *   }
     * })
    **/
    count<T extends PolicyDetailsCountArgs>(
      args?: Subset<T, PolicyDetailsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolicyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyDetailsAggregateArgs>(args: Subset<T, PolicyDetailsAggregateArgs>): PrismaPromise<GetPolicyDetailsAggregateType<T>>

    /**
     * Group by PolicyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyDetailsGroupByArgs} args - Group by arguments.
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
      T extends PolicyDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyDetailsGroupByArgs['orderBy'] }
        : { orderBy?: PolicyDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PolicyDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyDetailsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolicyDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PolicyDetailsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    policy<T extends PolicyArgs = {}>(args?: Subset<T, PolicyArgs>): CheckSelect<T, Prisma__PolicyClient<Policy | null >, Prisma__PolicyClient<PolicyGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PolicyDetails findUnique
   */
  export type PolicyDetailsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PolicyDetails
     * 
    **/
    select?: PolicyDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyDetailsInclude | null
    /**
     * Throw an Error if a PolicyDetails can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PolicyDetails to fetch.
     * 
    **/
    where: PolicyDetailsWhereUniqueInput
  }


  /**
   * PolicyDetails findFirst
   */
  export type PolicyDetailsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PolicyDetails
     * 
    **/
    select?: PolicyDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyDetailsInclude | null
    /**
     * Throw an Error if a PolicyDetails can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PolicyDetails to fetch.
     * 
    **/
    where?: PolicyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyDetailsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyDetails.
     * 
    **/
    cursor?: PolicyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyDetails.
     * 
    **/
    distinct?: Enumerable<PolicyDetailsScalarFieldEnum>
  }


  /**
   * PolicyDetails findMany
   */
  export type PolicyDetailsFindManyArgs = {
    /**
     * Select specific fields to fetch from the PolicyDetails
     * 
    **/
    select?: PolicyDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyDetailsInclude | null
    /**
     * Filter, which PolicyDetails to fetch.
     * 
    **/
    where?: PolicyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<PolicyDetailsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolicyDetails.
     * 
    **/
    cursor?: PolicyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyDetails.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PolicyDetailsScalarFieldEnum>
  }


  /**
   * PolicyDetails create
   */
  export type PolicyDetailsCreateArgs = {
    /**
     * Select specific fields to fetch from the PolicyDetails
     * 
    **/
    select?: PolicyDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyDetailsInclude | null
    /**
     * The data needed to create a PolicyDetails.
     * 
    **/
    data: XOR<PolicyDetailsCreateInput, PolicyDetailsUncheckedCreateInput>
  }


  /**
   * PolicyDetails createMany
   */
  export type PolicyDetailsCreateManyArgs = {
    data: Enumerable<PolicyDetailsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PolicyDetails update
   */
  export type PolicyDetailsUpdateArgs = {
    /**
     * Select specific fields to fetch from the PolicyDetails
     * 
    **/
    select?: PolicyDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyDetailsInclude | null
    /**
     * The data needed to update a PolicyDetails.
     * 
    **/
    data: XOR<PolicyDetailsUpdateInput, PolicyDetailsUncheckedUpdateInput>
    /**
     * Choose, which PolicyDetails to update.
     * 
    **/
    where: PolicyDetailsWhereUniqueInput
  }


  /**
   * PolicyDetails updateMany
   */
  export type PolicyDetailsUpdateManyArgs = {
    data: XOR<PolicyDetailsUpdateManyMutationInput, PolicyDetailsUncheckedUpdateManyInput>
    where?: PolicyDetailsWhereInput
  }


  /**
   * PolicyDetails upsert
   */
  export type PolicyDetailsUpsertArgs = {
    /**
     * Select specific fields to fetch from the PolicyDetails
     * 
    **/
    select?: PolicyDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyDetailsInclude | null
    /**
     * The filter to search for the PolicyDetails to update in case it exists.
     * 
    **/
    where: PolicyDetailsWhereUniqueInput
    /**
     * In case the PolicyDetails found by the `where` argument doesn't exist, create a new PolicyDetails with this data.
     * 
    **/
    create: XOR<PolicyDetailsCreateInput, PolicyDetailsUncheckedCreateInput>
    /**
     * In case the PolicyDetails was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PolicyDetailsUpdateInput, PolicyDetailsUncheckedUpdateInput>
  }


  /**
   * PolicyDetails delete
   */
  export type PolicyDetailsDeleteArgs = {
    /**
     * Select specific fields to fetch from the PolicyDetails
     * 
    **/
    select?: PolicyDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyDetailsInclude | null
    /**
     * Filter which PolicyDetails to delete.
     * 
    **/
    where: PolicyDetailsWhereUniqueInput
  }


  /**
   * PolicyDetails deleteMany
   */
  export type PolicyDetailsDeleteManyArgs = {
    where?: PolicyDetailsWhereInput
  }


  /**
   * PolicyDetails without action
   */
  export type PolicyDetailsArgs = {
    /**
     * Select specific fields to fetch from the PolicyDetails
     * 
    **/
    select?: PolicyDetailsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PolicyDetailsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PolicyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    version: 'version',
    quoteId: 'quoteId',
    startDate: 'startDate',
    policyNumber: 'policyNumber',
    status: 'status',
    isDeleted: 'isDeleted'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const PolicyTransactionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    version: 'version',
    policyId: 'policyId',
    name: 'name'
  };

  export type PolicyTransactionScalarFieldEnum = (typeof PolicyTransactionScalarFieldEnum)[keyof typeof PolicyTransactionScalarFieldEnum]


  export const PolicyDetailsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    version: 'version',
    policyId: 'policyId',
    name: 'name'
  };

  export type PolicyDetailsScalarFieldEnum = (typeof PolicyDetailsScalarFieldEnum)[keyof typeof PolicyDetailsScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type PolicyWhereInput = {
    AND?: Enumerable<PolicyWhereInput>
    OR?: Enumerable<PolicyWhereInput>
    NOT?: Enumerable<PolicyWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    version?: IntFilter | number
    quoteId?: StringFilter | string
    startDate?: DateTimeFilter | Date | string
    policyNumber?: StringFilter | string
    status?: EnumPolicyStatusFilter | PolicyStatus
    isDeleted?: BoolFilter | boolean
    transactions?: PolicyTransactionListRelationFilter
    details?: PolicyDetailsListRelationFilter
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    quoteId?: SortOrder
    startDate?: SortOrder
    policyNumber?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    transactions?: PolicyTransactionOrderByRelationAggregateInput
    details?: PolicyDetailsOrderByRelationAggregateInput
  }

  export type PolicyWhereUniqueInput = {
    id?: string
  }

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    quoteId?: SortOrder
    startDate?: SortOrder
    policyNumber?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _avg?: PolicyAvgOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
    _sum?: PolicySumOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PolicyScalarWhereWithAggregatesInput>
    OR?: Enumerable<PolicyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PolicyScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    version?: IntWithAggregatesFilter | number
    quoteId?: StringWithAggregatesFilter | string
    startDate?: DateTimeWithAggregatesFilter | Date | string
    policyNumber?: StringWithAggregatesFilter | string
    status?: EnumPolicyStatusWithAggregatesFilter | PolicyStatus
    isDeleted?: BoolWithAggregatesFilter | boolean
  }

  export type PolicyTransactionWhereInput = {
    AND?: Enumerable<PolicyTransactionWhereInput>
    OR?: Enumerable<PolicyTransactionWhereInput>
    NOT?: Enumerable<PolicyTransactionWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    version?: IntFilter | number
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
    policyId?: StringFilter | string
    name?: StringFilter | string
  }

  export type PolicyTransactionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policy?: PolicyOrderByWithRelationInput
    policyId?: SortOrder
    name?: SortOrder
  }

  export type PolicyTransactionWhereUniqueInput = {
    id?: string
  }

  export type PolicyTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policyId?: SortOrder
    name?: SortOrder
    _count?: PolicyTransactionCountOrderByAggregateInput
    _avg?: PolicyTransactionAvgOrderByAggregateInput
    _max?: PolicyTransactionMaxOrderByAggregateInput
    _min?: PolicyTransactionMinOrderByAggregateInput
    _sum?: PolicyTransactionSumOrderByAggregateInput
  }

  export type PolicyTransactionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PolicyTransactionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PolicyTransactionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PolicyTransactionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    version?: IntWithAggregatesFilter | number
    policyId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type PolicyDetailsWhereInput = {
    AND?: Enumerable<PolicyDetailsWhereInput>
    OR?: Enumerable<PolicyDetailsWhereInput>
    NOT?: Enumerable<PolicyDetailsWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    version?: IntFilter | number
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
    policyId?: StringFilter | string
    name?: StringFilter | string
  }

  export type PolicyDetailsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policy?: PolicyOrderByWithRelationInput
    policyId?: SortOrder
    name?: SortOrder
  }

  export type PolicyDetailsWhereUniqueInput = {
    id?: number
  }

  export type PolicyDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policyId?: SortOrder
    name?: SortOrder
    _count?: PolicyDetailsCountOrderByAggregateInput
    _avg?: PolicyDetailsAvgOrderByAggregateInput
    _max?: PolicyDetailsMaxOrderByAggregateInput
    _min?: PolicyDetailsMinOrderByAggregateInput
    _sum?: PolicyDetailsSumOrderByAggregateInput
  }

  export type PolicyDetailsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PolicyDetailsScalarWhereWithAggregatesInput>
    OR?: Enumerable<PolicyDetailsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PolicyDetailsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    version?: IntWithAggregatesFilter | number
    policyId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type PolicyCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    quoteId: string
    startDate?: Date | string
    policyNumber: string
    status: PolicyStatus
    isDeleted: boolean
    transactions?: PolicyTransactionCreateNestedManyWithoutPolicyInput
    details?: PolicyDetailsCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    quoteId: string
    startDate?: Date | string
    policyNumber: string
    status: PolicyStatus
    isDeleted: boolean
    transactions?: PolicyTransactionUncheckedCreateNestedManyWithoutPolicyInput
    details?: PolicyDetailsUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    quoteId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    transactions?: PolicyTransactionUpdateManyWithoutPolicyInput
    details?: PolicyDetailsUpdateManyWithoutPolicyInput
  }

  export type PolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    quoteId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    transactions?: PolicyTransactionUncheckedUpdateManyWithoutPolicyInput
    details?: PolicyDetailsUncheckedUpdateManyWithoutPolicyInput
  }

  export type PolicyCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    quoteId: string
    startDate?: Date | string
    policyNumber: string
    status: PolicyStatus
    isDeleted: boolean
  }

  export type PolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    quoteId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    quoteId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PolicyTransactionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    name: string
    policy: PolicyCreateNestedOneWithoutTransactionsInput
  }

  export type PolicyTransactionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    policyId: string
    name: string
  }

  export type PolicyTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    policy?: PolicyUpdateOneRequiredWithoutTransactionsInput
  }

  export type PolicyTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyTransactionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    policyId: string
    name: string
  }

  export type PolicyTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyDetailsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    name: string
    policy: PolicyCreateNestedOneWithoutDetailsInput
  }

  export type PolicyDetailsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    policyId: string
    name: string
  }

  export type PolicyDetailsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    policy?: PolicyUpdateOneRequiredWithoutDetailsInput
  }

  export type PolicyDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyDetailsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    policyId: string
    name: string
  }

  export type PolicyDetailsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumPolicyStatusFilter = {
    equals?: PolicyStatus
    in?: Enumerable<PolicyStatus>
    notIn?: Enumerable<PolicyStatus>
    not?: NestedEnumPolicyStatusFilter | PolicyStatus
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type PolicyTransactionListRelationFilter = {
    every?: PolicyTransactionWhereInput
    some?: PolicyTransactionWhereInput
    none?: PolicyTransactionWhereInput
  }

  export type PolicyDetailsListRelationFilter = {
    every?: PolicyDetailsWhereInput
    some?: PolicyDetailsWhereInput
    none?: PolicyDetailsWhereInput
  }

  export type PolicyTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    quoteId?: SortOrder
    startDate?: SortOrder
    policyNumber?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
  }

  export type PolicyAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    quoteId?: SortOrder
    startDate?: SortOrder
    policyNumber?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    quoteId?: SortOrder
    startDate?: SortOrder
    policyNumber?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
  }

  export type PolicySumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumPolicyStatusWithAggregatesFilter = {
    equals?: PolicyStatus
    in?: Enumerable<PolicyStatus>
    notIn?: Enumerable<PolicyStatus>
    not?: NestedEnumPolicyStatusWithAggregatesFilter | PolicyStatus
    _count?: NestedIntFilter
    _min?: NestedEnumPolicyStatusFilter
    _max?: NestedEnumPolicyStatusFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type PolicyRelationFilter = {
    is?: PolicyWhereInput
    isNot?: PolicyWhereInput
  }

  export type PolicyTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policyId?: SortOrder
    name?: SortOrder
  }

  export type PolicyTransactionAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type PolicyTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policyId?: SortOrder
    name?: SortOrder
  }

  export type PolicyTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policyId?: SortOrder
    name?: SortOrder
  }

  export type PolicyTransactionSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type PolicyDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policyId?: SortOrder
    name?: SortOrder
  }

  export type PolicyDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type PolicyDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policyId?: SortOrder
    name?: SortOrder
  }

  export type PolicyDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    policyId?: SortOrder
    name?: SortOrder
  }

  export type PolicyDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type PolicyTransactionCreateNestedManyWithoutPolicyInput = {
    create?: XOR<Enumerable<PolicyTransactionCreateWithoutPolicyInput>, Enumerable<PolicyTransactionUncheckedCreateWithoutPolicyInput>>
    connectOrCreate?: Enumerable<PolicyTransactionCreateOrConnectWithoutPolicyInput>
    createMany?: PolicyTransactionCreateManyPolicyInputEnvelope
    connect?: Enumerable<PolicyTransactionWhereUniqueInput>
  }

  export type PolicyDetailsCreateNestedManyWithoutPolicyInput = {
    create?: XOR<Enumerable<PolicyDetailsCreateWithoutPolicyInput>, Enumerable<PolicyDetailsUncheckedCreateWithoutPolicyInput>>
    connectOrCreate?: Enumerable<PolicyDetailsCreateOrConnectWithoutPolicyInput>
    createMany?: PolicyDetailsCreateManyPolicyInputEnvelope
    connect?: Enumerable<PolicyDetailsWhereUniqueInput>
  }

  export type PolicyTransactionUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<Enumerable<PolicyTransactionCreateWithoutPolicyInput>, Enumerable<PolicyTransactionUncheckedCreateWithoutPolicyInput>>
    connectOrCreate?: Enumerable<PolicyTransactionCreateOrConnectWithoutPolicyInput>
    createMany?: PolicyTransactionCreateManyPolicyInputEnvelope
    connect?: Enumerable<PolicyTransactionWhereUniqueInput>
  }

  export type PolicyDetailsUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<Enumerable<PolicyDetailsCreateWithoutPolicyInput>, Enumerable<PolicyDetailsUncheckedCreateWithoutPolicyInput>>
    connectOrCreate?: Enumerable<PolicyDetailsCreateOrConnectWithoutPolicyInput>
    createMany?: PolicyDetailsCreateManyPolicyInputEnvelope
    connect?: Enumerable<PolicyDetailsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPolicyStatusFieldUpdateOperationsInput = {
    set?: PolicyStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PolicyTransactionUpdateManyWithoutPolicyInput = {
    create?: XOR<Enumerable<PolicyTransactionCreateWithoutPolicyInput>, Enumerable<PolicyTransactionUncheckedCreateWithoutPolicyInput>>
    connectOrCreate?: Enumerable<PolicyTransactionCreateOrConnectWithoutPolicyInput>
    upsert?: Enumerable<PolicyTransactionUpsertWithWhereUniqueWithoutPolicyInput>
    createMany?: PolicyTransactionCreateManyPolicyInputEnvelope
    connect?: Enumerable<PolicyTransactionWhereUniqueInput>
    set?: Enumerable<PolicyTransactionWhereUniqueInput>
    disconnect?: Enumerable<PolicyTransactionWhereUniqueInput>
    delete?: Enumerable<PolicyTransactionWhereUniqueInput>
    update?: Enumerable<PolicyTransactionUpdateWithWhereUniqueWithoutPolicyInput>
    updateMany?: Enumerable<PolicyTransactionUpdateManyWithWhereWithoutPolicyInput>
    deleteMany?: Enumerable<PolicyTransactionScalarWhereInput>
  }

  export type PolicyDetailsUpdateManyWithoutPolicyInput = {
    create?: XOR<Enumerable<PolicyDetailsCreateWithoutPolicyInput>, Enumerable<PolicyDetailsUncheckedCreateWithoutPolicyInput>>
    connectOrCreate?: Enumerable<PolicyDetailsCreateOrConnectWithoutPolicyInput>
    upsert?: Enumerable<PolicyDetailsUpsertWithWhereUniqueWithoutPolicyInput>
    createMany?: PolicyDetailsCreateManyPolicyInputEnvelope
    connect?: Enumerable<PolicyDetailsWhereUniqueInput>
    set?: Enumerable<PolicyDetailsWhereUniqueInput>
    disconnect?: Enumerable<PolicyDetailsWhereUniqueInput>
    delete?: Enumerable<PolicyDetailsWhereUniqueInput>
    update?: Enumerable<PolicyDetailsUpdateWithWhereUniqueWithoutPolicyInput>
    updateMany?: Enumerable<PolicyDetailsUpdateManyWithWhereWithoutPolicyInput>
    deleteMany?: Enumerable<PolicyDetailsScalarWhereInput>
  }

  export type PolicyTransactionUncheckedUpdateManyWithoutPolicyInput = {
    create?: XOR<Enumerable<PolicyTransactionCreateWithoutPolicyInput>, Enumerable<PolicyTransactionUncheckedCreateWithoutPolicyInput>>
    connectOrCreate?: Enumerable<PolicyTransactionCreateOrConnectWithoutPolicyInput>
    upsert?: Enumerable<PolicyTransactionUpsertWithWhereUniqueWithoutPolicyInput>
    createMany?: PolicyTransactionCreateManyPolicyInputEnvelope
    connect?: Enumerable<PolicyTransactionWhereUniqueInput>
    set?: Enumerable<PolicyTransactionWhereUniqueInput>
    disconnect?: Enumerable<PolicyTransactionWhereUniqueInput>
    delete?: Enumerable<PolicyTransactionWhereUniqueInput>
    update?: Enumerable<PolicyTransactionUpdateWithWhereUniqueWithoutPolicyInput>
    updateMany?: Enumerable<PolicyTransactionUpdateManyWithWhereWithoutPolicyInput>
    deleteMany?: Enumerable<PolicyTransactionScalarWhereInput>
  }

  export type PolicyDetailsUncheckedUpdateManyWithoutPolicyInput = {
    create?: XOR<Enumerable<PolicyDetailsCreateWithoutPolicyInput>, Enumerable<PolicyDetailsUncheckedCreateWithoutPolicyInput>>
    connectOrCreate?: Enumerable<PolicyDetailsCreateOrConnectWithoutPolicyInput>
    upsert?: Enumerable<PolicyDetailsUpsertWithWhereUniqueWithoutPolicyInput>
    createMany?: PolicyDetailsCreateManyPolicyInputEnvelope
    connect?: Enumerable<PolicyDetailsWhereUniqueInput>
    set?: Enumerable<PolicyDetailsWhereUniqueInput>
    disconnect?: Enumerable<PolicyDetailsWhereUniqueInput>
    delete?: Enumerable<PolicyDetailsWhereUniqueInput>
    update?: Enumerable<PolicyDetailsUpdateWithWhereUniqueWithoutPolicyInput>
    updateMany?: Enumerable<PolicyDetailsUpdateManyWithWhereWithoutPolicyInput>
    deleteMany?: Enumerable<PolicyDetailsScalarWhereInput>
  }

  export type PolicyCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PolicyCreateWithoutTransactionsInput, PolicyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutTransactionsInput
    connect?: PolicyWhereUniqueInput
  }

  export type PolicyUpdateOneRequiredWithoutTransactionsInput = {
    create?: XOR<PolicyCreateWithoutTransactionsInput, PolicyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutTransactionsInput
    upsert?: PolicyUpsertWithoutTransactionsInput
    connect?: PolicyWhereUniqueInput
    update?: XOR<PolicyUpdateWithoutTransactionsInput, PolicyUncheckedUpdateWithoutTransactionsInput>
  }

  export type PolicyCreateNestedOneWithoutDetailsInput = {
    create?: XOR<PolicyCreateWithoutDetailsInput, PolicyUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutDetailsInput
    connect?: PolicyWhereUniqueInput
  }

  export type PolicyUpdateOneRequiredWithoutDetailsInput = {
    create?: XOR<PolicyCreateWithoutDetailsInput, PolicyUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutDetailsInput
    upsert?: PolicyUpsertWithoutDetailsInput
    connect?: PolicyWhereUniqueInput
    update?: XOR<PolicyUpdateWithoutDetailsInput, PolicyUncheckedUpdateWithoutDetailsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumPolicyStatusFilter = {
    equals?: PolicyStatus
    in?: Enumerable<PolicyStatus>
    notIn?: Enumerable<PolicyStatus>
    not?: NestedEnumPolicyStatusFilter | PolicyStatus
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumPolicyStatusWithAggregatesFilter = {
    equals?: PolicyStatus
    in?: Enumerable<PolicyStatus>
    notIn?: Enumerable<PolicyStatus>
    not?: NestedEnumPolicyStatusWithAggregatesFilter | PolicyStatus
    _count?: NestedIntFilter
    _min?: NestedEnumPolicyStatusFilter
    _max?: NestedEnumPolicyStatusFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type PolicyTransactionCreateWithoutPolicyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    name: string
  }

  export type PolicyTransactionUncheckedCreateWithoutPolicyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    name: string
  }

  export type PolicyTransactionCreateOrConnectWithoutPolicyInput = {
    where: PolicyTransactionWhereUniqueInput
    create: XOR<PolicyTransactionCreateWithoutPolicyInput, PolicyTransactionUncheckedCreateWithoutPolicyInput>
  }

  export type PolicyTransactionCreateManyPolicyInputEnvelope = {
    data: Enumerable<PolicyTransactionCreateManyPolicyInput>
    skipDuplicates?: boolean
  }

  export type PolicyDetailsCreateWithoutPolicyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    name: string
  }

  export type PolicyDetailsUncheckedCreateWithoutPolicyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    name: string
  }

  export type PolicyDetailsCreateOrConnectWithoutPolicyInput = {
    where: PolicyDetailsWhereUniqueInput
    create: XOR<PolicyDetailsCreateWithoutPolicyInput, PolicyDetailsUncheckedCreateWithoutPolicyInput>
  }

  export type PolicyDetailsCreateManyPolicyInputEnvelope = {
    data: Enumerable<PolicyDetailsCreateManyPolicyInput>
    skipDuplicates?: boolean
  }

  export type PolicyTransactionUpsertWithWhereUniqueWithoutPolicyInput = {
    where: PolicyTransactionWhereUniqueInput
    update: XOR<PolicyTransactionUpdateWithoutPolicyInput, PolicyTransactionUncheckedUpdateWithoutPolicyInput>
    create: XOR<PolicyTransactionCreateWithoutPolicyInput, PolicyTransactionUncheckedCreateWithoutPolicyInput>
  }

  export type PolicyTransactionUpdateWithWhereUniqueWithoutPolicyInput = {
    where: PolicyTransactionWhereUniqueInput
    data: XOR<PolicyTransactionUpdateWithoutPolicyInput, PolicyTransactionUncheckedUpdateWithoutPolicyInput>
  }

  export type PolicyTransactionUpdateManyWithWhereWithoutPolicyInput = {
    where: PolicyTransactionScalarWhereInput
    data: XOR<PolicyTransactionUpdateManyMutationInput, PolicyTransactionUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type PolicyTransactionScalarWhereInput = {
    AND?: Enumerable<PolicyTransactionScalarWhereInput>
    OR?: Enumerable<PolicyTransactionScalarWhereInput>
    NOT?: Enumerable<PolicyTransactionScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    version?: IntFilter | number
    policyId?: StringFilter | string
    name?: StringFilter | string
  }

  export type PolicyDetailsUpsertWithWhereUniqueWithoutPolicyInput = {
    where: PolicyDetailsWhereUniqueInput
    update: XOR<PolicyDetailsUpdateWithoutPolicyInput, PolicyDetailsUncheckedUpdateWithoutPolicyInput>
    create: XOR<PolicyDetailsCreateWithoutPolicyInput, PolicyDetailsUncheckedCreateWithoutPolicyInput>
  }

  export type PolicyDetailsUpdateWithWhereUniqueWithoutPolicyInput = {
    where: PolicyDetailsWhereUniqueInput
    data: XOR<PolicyDetailsUpdateWithoutPolicyInput, PolicyDetailsUncheckedUpdateWithoutPolicyInput>
  }

  export type PolicyDetailsUpdateManyWithWhereWithoutPolicyInput = {
    where: PolicyDetailsScalarWhereInput
    data: XOR<PolicyDetailsUpdateManyMutationInput, PolicyDetailsUncheckedUpdateManyWithoutDetailsInput>
  }

  export type PolicyDetailsScalarWhereInput = {
    AND?: Enumerable<PolicyDetailsScalarWhereInput>
    OR?: Enumerable<PolicyDetailsScalarWhereInput>
    NOT?: Enumerable<PolicyDetailsScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    version?: IntFilter | number
    policyId?: StringFilter | string
    name?: StringFilter | string
  }

  export type PolicyCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    quoteId: string
    startDate?: Date | string
    policyNumber: string
    status: PolicyStatus
    isDeleted: boolean
    details?: PolicyDetailsCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutTransactionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    quoteId: string
    startDate?: Date | string
    policyNumber: string
    status: PolicyStatus
    isDeleted: boolean
    details?: PolicyDetailsUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutTransactionsInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutTransactionsInput, PolicyUncheckedCreateWithoutTransactionsInput>
  }

  export type PolicyUpsertWithoutTransactionsInput = {
    update: XOR<PolicyUpdateWithoutTransactionsInput, PolicyUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PolicyCreateWithoutTransactionsInput, PolicyUncheckedCreateWithoutTransactionsInput>
  }

  export type PolicyUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    quoteId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    details?: PolicyDetailsUpdateManyWithoutPolicyInput
  }

  export type PolicyUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    quoteId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    details?: PolicyDetailsUncheckedUpdateManyWithoutPolicyInput
  }

  export type PolicyCreateWithoutDetailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    quoteId: string
    startDate?: Date | string
    policyNumber: string
    status: PolicyStatus
    isDeleted: boolean
    transactions?: PolicyTransactionCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutDetailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    quoteId: string
    startDate?: Date | string
    policyNumber: string
    status: PolicyStatus
    isDeleted: boolean
    transactions?: PolicyTransactionUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutDetailsInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutDetailsInput, PolicyUncheckedCreateWithoutDetailsInput>
  }

  export type PolicyUpsertWithoutDetailsInput = {
    update: XOR<PolicyUpdateWithoutDetailsInput, PolicyUncheckedUpdateWithoutDetailsInput>
    create: XOR<PolicyCreateWithoutDetailsInput, PolicyUncheckedCreateWithoutDetailsInput>
  }

  export type PolicyUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    quoteId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    transactions?: PolicyTransactionUpdateManyWithoutPolicyInput
  }

  export type PolicyUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    quoteId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    policyNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumPolicyStatusFieldUpdateOperationsInput | PolicyStatus
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    transactions?: PolicyTransactionUncheckedUpdateManyWithoutPolicyInput
  }

  export type PolicyTransactionCreateManyPolicyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    name: string
  }

  export type PolicyDetailsCreateManyPolicyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    name: string
  }

  export type PolicyTransactionUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyTransactionUncheckedUpdateWithoutPolicyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyTransactionUncheckedUpdateManyWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyDetailsUpdateWithoutPolicyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyDetailsUncheckedUpdateWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyDetailsUncheckedUpdateManyWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.DMMF.Document;
}