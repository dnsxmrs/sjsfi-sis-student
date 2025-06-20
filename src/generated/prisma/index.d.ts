
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
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Evaluation
 * 
 */
export type Evaluation = $Result.DefaultSelection<Prisma.$EvaluationPayload>
/**
 * Model Grade
 * 
 */
export type Grade = $Result.DefaultSelection<Prisma.$GradePayload>
/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model ReportCard
 * 
 */
export type ReportCard = $Result.DefaultSelection<Prisma.$ReportCardPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation`: Exposes CRUD operations for the **Evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.EvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **Grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.GradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportCard`: Exposes CRUD operations for the **ReportCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportCards
    * const reportCards = await prisma.reportCard.findMany()
    * ```
    */
  get reportCard(): Prisma.ReportCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Attendance: 'Attendance',
    Enrollment: 'Enrollment',
    Evaluation: 'Evaluation',
    Grade: 'Grade',
    Parent: 'Parent',
    Payment: 'Payment',
    ReportCard: 'ReportCard',
    Section: 'Section',
    Student: 'Student',
    Subject: 'Subject',
    Teacher: 'Teacher'
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
      modelProps: "user" | "attendance" | "enrollment" | "evaluation" | "grade" | "parent" | "payment" | "reportCard" | "section" | "student" | "subject" | "teacher"
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
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Evaluation: {
        payload: Prisma.$EvaluationPayload<ExtArgs>
        fields: Prisma.EvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findMany: {
            args: Prisma.EvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          create: {
            args: Prisma.EvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          createMany: {
            args: Prisma.EvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          delete: {
            args: Prisma.EvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          update: {
            args: Prisma.EvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.EvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
          }
        }
      }
      Grade: {
        payload: Prisma.$GradePayload<ExtArgs>
        fields: Prisma.GradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findFirst: {
            args: Prisma.GradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findMany: {
            args: Prisma.GradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          create: {
            args: Prisma.GradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          createMany: {
            args: Prisma.GradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          delete: {
            args: Prisma.GradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          update: {
            args: Prisma.GradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          deleteMany: {
            args: Prisma.GradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          upsert: {
            args: Prisma.GradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrade>
          }
          groupBy: {
            args: Prisma.GradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradeCountArgs<ExtArgs>
            result: $Utils.Optional<GradeCountAggregateOutputType> | number
          }
        }
      }
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      ReportCard: {
        payload: Prisma.$ReportCardPayload<ExtArgs>
        fields: Prisma.ReportCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          findFirst: {
            args: Prisma.ReportCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          findMany: {
            args: Prisma.ReportCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>[]
          }
          create: {
            args: Prisma.ReportCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          createMany: {
            args: Prisma.ReportCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>[]
          }
          delete: {
            args: Prisma.ReportCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          update: {
            args: Prisma.ReportCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          deleteMany: {
            args: Prisma.ReportCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>[]
          }
          upsert: {
            args: Prisma.ReportCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportCardPayload>
          }
          aggregate: {
            args: Prisma.ReportCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportCard>
          }
          groupBy: {
            args: Prisma.ReportCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCardCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCardCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    attendance?: AttendanceOmit
    enrollment?: EnrollmentOmit
    evaluation?: EvaluationOmit
    grade?: GradeOmit
    parent?: ParentOmit
    payment?: PaymentOmit
    reportCard?: ReportCardOmit
    section?: SectionOmit
    student?: StudentOmit
    subject?: SubjectOmit
    teacher?: TeacherOmit
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
   * Count Type EnrollmentCountOutputType
   */

  export type EnrollmentCountOutputType = {
    Payment: number
    Subject: number
  }

  export type EnrollmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | EnrollmentCountOutputTypeCountPaymentArgs
    Subject?: boolean | EnrollmentCountOutputTypeCountSubjectArgs
  }

  // Custom InputTypes
  /**
   * EnrollmentCountOutputType without action
   */
  export type EnrollmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrollmentCountOutputType
     */
    select?: EnrollmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnrollmentCountOutputType without action
   */
  export type EnrollmentCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * EnrollmentCountOutputType without action
   */
  export type EnrollmentCountOutputTypeCountSubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Count Type ParentCountOutputType
   */

  export type ParentCountOutputType = {
    Student: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | ParentCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes
  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    Enrollment: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | SectionCountOutputTypeCountEnrollmentArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    Attendance: number
    Enrollment: number
    Evaluation: number
    Grade: number
    Payment: number
    ReportCard: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | StudentCountOutputTypeCountAttendanceArgs
    Enrollment?: boolean | StudentCountOutputTypeCountEnrollmentArgs
    Evaluation?: boolean | StudentCountOutputTypeCountEvaluationArgs
    Grade?: boolean | StudentCountOutputTypeCountGradeArgs
    Payment?: boolean | StudentCountOutputTypeCountPaymentArgs
    ReportCard?: boolean | StudentCountOutputTypeCountReportCardArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountReportCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportCardWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    Evaluation: number
    Grade: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Evaluation?: boolean | SubjectCountOutputTypeCountEvaluationArgs
    Grade?: boolean | SubjectCountOutputTypeCountGradeArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountEvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    Evaluation: number
    Section: number
    Subject: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Evaluation?: boolean | TeacherCountOutputTypeCountEvaluationArgs
    Section?: boolean | TeacherCountOutputTypeCountSectionArgs
    Subject?: boolean | TeacherCountOutputTypeCountSubjectArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountEvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    role: string | null
    createdAt: Date | null
    deletedAt: Date | null
    name: string | null
    passwordHashed: string | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    role: string | null
    createdAt: Date | null
    deletedAt: Date | null
    name: string | null
    passwordHashed: string | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    role: number
    createdAt: number
    deletedAt: number
    name: number
    passwordHashed: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
    deletedAt?: true
    name?: true
    passwordHashed?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
    deletedAt?: true
    name?: true
    passwordHashed?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
    deletedAt?: true
    name?: true
    passwordHashed?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    role: string
    createdAt: Date
    deletedAt: Date | null
    name: string
    passwordHashed: string
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    role?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    name?: boolean
    passwordHashed?: boolean
    updatedAt?: boolean
    Parent?: boolean | User$ParentArgs<ExtArgs>
    Student?: boolean | User$StudentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    name?: boolean
    passwordHashed?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    name?: boolean
    passwordHashed?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    name?: boolean
    passwordHashed?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "createdAt" | "deletedAt" | "name" | "passwordHashed" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | User$ParentArgs<ExtArgs>
    Student?: boolean | User$StudentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Parent: Prisma.$ParentPayload<ExtArgs> | null
      Student: Prisma.$StudentPayload<ExtArgs> | null
      Teacher: Prisma.$TeacherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      role: string
      createdAt: Date
      deletedAt: Date | null
      name: string
      passwordHashed: string
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
    Parent<T extends User$ParentArgs<ExtArgs> = {}>(args?: Subset<T, User$ParentArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Student<T extends User$StudentArgs<ExtArgs> = {}>(args?: Subset<T, User$StudentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Teacher<T extends User$TeacherArgs<ExtArgs> = {}>(args?: Subset<T, User$TeacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHashed: FieldRef<"User", 'String'>
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
   * User.Parent
   */
  export type User$ParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
  }

  /**
   * User.Student
   */
  export type User$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.Teacher
   */
  export type User$TeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
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
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    date: Date | null
    status: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    date: Date | null
    status: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    date: number
    status: number
    remarks: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    status?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    status?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    date?: true
    status?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    studentId: number
    date: Date
    status: string
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    date?: boolean
    status?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "date" | "status" | "remarks" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      date: Date
      status: string
      remarks: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly studentId: FieldRef<"Attendance", 'Int'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly remarks: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
    readonly deletedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    sectionId: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    sectionId: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    sectionId: number | null
    schoolYear: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    sectionId: number | null
    schoolYear: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    studentId: number
    sectionId: number
    schoolYear: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    studentId?: true
    sectionId?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    studentId?: true
    sectionId?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    studentId?: true
    sectionId?: true
    schoolYear?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    studentId?: true
    sectionId?: true
    schoolYear?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    studentId?: true
    sectionId?: true
    schoolYear?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: number
    studentId: number
    sectionId: number
    schoolYear: string
    status: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    sectionId?: boolean
    schoolYear?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Section?: boolean | SectionDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Payment?: boolean | Enrollment$PaymentArgs<ExtArgs>
    Subject?: boolean | Enrollment$SubjectArgs<ExtArgs>
    _count?: boolean | EnrollmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    sectionId?: boolean
    schoolYear?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Section?: boolean | SectionDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    sectionId?: boolean
    schoolYear?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Section?: boolean | SectionDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    studentId?: boolean
    sectionId?: boolean
    schoolYear?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "sectionId" | "schoolYear" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Section?: boolean | SectionDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Payment?: boolean | Enrollment$PaymentArgs<ExtArgs>
    Subject?: boolean | Enrollment$SubjectArgs<ExtArgs>
    _count?: boolean | EnrollmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Section?: boolean | SectionDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Section?: boolean | SectionDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      Section: Prisma.$SectionPayload<ExtArgs>
      Student: Prisma.$StudentPayload<ExtArgs>
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
      Subject: Prisma.$SubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      sectionId: number
      schoolYear: string
      status: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Payment<T extends Enrollment$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Enrollment$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Subject<T extends Enrollment$SubjectArgs<ExtArgs> = {}>(args?: Subset<T, Enrollment$SubjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'Int'>
    readonly studentId: FieldRef<"Enrollment", 'Int'>
    readonly sectionId: FieldRef<"Enrollment", 'Int'>
    readonly schoolYear: FieldRef<"Enrollment", 'String'>
    readonly status: FieldRef<"Enrollment", 'String'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"Enrollment", 'DateTime'>
    readonly deletedAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment.Payment
   */
  export type Enrollment$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Enrollment.Subject
   */
  export type Enrollment$SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    teacherId: number | null
    rating: number | null
  }

  export type EvaluationSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    teacherId: number | null
    rating: number | null
  }

  export type EvaluationMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    teacherId: number | null
    rating: number | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EvaluationMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    teacherId: number | null
    rating: number | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EvaluationCountAggregateOutputType = {
    id: number
    studentId: number
    subjectId: number
    teacherId: number
    rating: number
    comments: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type EvaluationAvgAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
    rating?: true
  }

  export type EvaluationSumAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
    rating?: true
  }

  export type EvaluationMinAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
    rating?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EvaluationMaxAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
    rating?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EvaluationCountAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
    rating?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation to aggregate.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type EvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithAggregationInput | EvaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: EvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _avg?: EvaluationAvgAggregateInputType
    _sum?: EvaluationSumAggregateInputType
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    id: number
    studentId: number
    subjectId: number
    teacherId: number
    rating: number
    comments: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    rating?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    rating?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    rating?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectScalar = {
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    rating?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type EvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subjectId" | "teacherId" | "rating" | "comments" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["evaluation"]>
  export type EvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $EvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs>
      Subject: Prisma.$SubjectPayload<ExtArgs>
      Teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      subjectId: number
      teacherId: number
      rating: number
      comments: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = $Result.GetResult<Prisma.$EvaluationPayload, S>

  type EvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface EvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'], meta: { name: 'Evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {EvaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFindUniqueArgs>(args: SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFindFirstArgs>(args?: SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationFindManyArgs>(args?: SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {EvaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends EvaluationCreateArgs>(args: SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {EvaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationCreateManyArgs>(args?: SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evaluations and returns the data saved in the database.
     * @param {EvaluationCreateManyAndReturnArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evaluation.
     * @param {EvaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends EvaluationDeleteArgs>(args: SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {EvaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationUpdateArgs>(args: SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {EvaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationUpdateManyArgs>(args: SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations and returns the data updated in the database.
     * @param {EvaluationUpdateManyAndReturnArgs} args - Arguments to update many Evaluations.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.updateManyAndReturn({
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
    updateManyAndReturn<T extends EvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evaluation.
     * @param {EvaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationUpsertArgs>(args: SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends EvaluationCountArgs>(
      args?: Subset<T, EvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationGroupByArgs} args - Group by arguments.
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
      T extends EvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation model
   */
  readonly fields: EvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evaluation model
   */
  interface EvaluationFieldRefs {
    readonly id: FieldRef<"Evaluation", 'Int'>
    readonly studentId: FieldRef<"Evaluation", 'Int'>
    readonly subjectId: FieldRef<"Evaluation", 'Int'>
    readonly teacherId: FieldRef<"Evaluation", 'Int'>
    readonly rating: FieldRef<"Evaluation", 'Int'>
    readonly comments: FieldRef<"Evaluation", 'String'>
    readonly createdAt: FieldRef<"Evaluation", 'DateTime'>
    readonly updatedAt: FieldRef<"Evaluation", 'DateTime'>
    readonly deletedAt: FieldRef<"Evaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation findUnique
   */
  export type EvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findUniqueOrThrow
   */
  export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findFirst
   */
  export type EvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findFirstOrThrow
   */
  export type EvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findMany
   */
  export type EvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluations to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation create
   */
  export type EvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation.
     */
    data: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
  }

  /**
   * Evaluation createMany
   */
  export type EvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evaluation createManyAndReturn
   */
  export type EvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation update
   */
  export type EvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation.
     */
    data: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
    /**
     * Choose, which Evaluation to update.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation updateMany
   */
  export type EvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
  }

  /**
   * Evaluation updateManyAndReturn
   */
  export type EvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation upsert
   */
  export type EvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation to update in case it exists.
     */
    where: EvaluationWhereUniqueInput
    /**
     * In case the Evaluation found by the `where` argument doesn't exist, create a new Evaluation with this data.
     */
    create: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
    /**
     * In case the Evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
  }

  /**
   * Evaluation delete
   */
  export type EvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter which Evaluation to delete.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation deleteMany
   */
  export type EvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluations to delete
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to delete.
     */
    limit?: number
  }

  /**
   * Evaluation without action
   */
  export type EvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
  }


  /**
   * Model Grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeAvgAggregateOutputType = {
    id: number | null
    subjectId: number | null
    studentId: number | null
    grade: number | null
  }

  export type GradeSumAggregateOutputType = {
    id: number | null
    subjectId: number | null
    studentId: number | null
    grade: number | null
  }

  export type GradeMinAggregateOutputType = {
    id: number | null
    subjectId: number | null
    studentId: number | null
    quarter: string | null
    grade: number | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GradeMaxAggregateOutputType = {
    id: number | null
    subjectId: number | null
    studentId: number | null
    quarter: string | null
    grade: number | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type GradeCountAggregateOutputType = {
    id: number
    subjectId: number
    studentId: number
    quarter: number
    grade: number
    remarks: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type GradeAvgAggregateInputType = {
    id?: true
    subjectId?: true
    studentId?: true
    grade?: true
  }

  export type GradeSumAggregateInputType = {
    id?: true
    subjectId?: true
    studentId?: true
    grade?: true
  }

  export type GradeMinAggregateInputType = {
    id?: true
    subjectId?: true
    studentId?: true
    quarter?: true
    grade?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GradeMaxAggregateInputType = {
    id?: true
    subjectId?: true
    studentId?: true
    quarter?: true
    grade?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type GradeCountAggregateInputType = {
    id?: true
    subjectId?: true
    studentId?: true
    quarter?: true
    grade?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grade to aggregate.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type GradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithAggregationInput | GradeOrderByWithAggregationInput[]
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum
    having?: GradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _avg?: GradeAvgAggregateInputType
    _sum?: GradeSumAggregateInputType
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }

  export type GradeGroupByOutputType = {
    id: number
    subjectId: number
    studentId: number
    quarter: string
    grade: number
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends GradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type GradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    studentId?: boolean
    quarter?: boolean
    grade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    studentId?: boolean
    quarter?: boolean
    grade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    studentId?: boolean
    quarter?: boolean
    grade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectScalar = {
    id?: boolean
    subjectId?: boolean
    studentId?: boolean
    quarter?: boolean
    grade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type GradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectId" | "studentId" | "quarter" | "grade" | "remarks" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["grade"]>
  export type GradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type GradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type GradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $GradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grade"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs>
      Subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subjectId: number
      studentId: number
      quarter: string
      grade: number
      remarks: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["grade"]>
    composites: {}
  }

  type GradeGetPayload<S extends boolean | null | undefined | GradeDefaultArgs> = $Result.GetResult<Prisma.$GradePayload, S>

  type GradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradeCountAggregateInputType | true
    }

  export interface GradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grade'], meta: { name: 'Grade' } }
    /**
     * Find zero or one Grade that matches the filter.
     * @param {GradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradeFindUniqueArgs>(args: SelectSubset<T, GradeFindUniqueArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradeFindUniqueOrThrowArgs>(args: SelectSubset<T, GradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradeFindFirstArgs>(args?: SelectSubset<T, GradeFindFirstArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradeFindFirstOrThrowArgs>(args?: SelectSubset<T, GradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradeFindManyArgs>(args?: SelectSubset<T, GradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grade.
     * @param {GradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
     */
    create<T extends GradeCreateArgs>(args: SelectSubset<T, GradeCreateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grades.
     * @param {GradeCreateManyArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradeCreateManyArgs>(args?: SelectSubset<T, GradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grades and returns the data saved in the database.
     * @param {GradeCreateManyAndReturnArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GradeCreateManyAndReturnArgs>(args?: SelectSubset<T, GradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grade.
     * @param {GradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
     */
    delete<T extends GradeDeleteArgs>(args: SelectSubset<T, GradeDeleteArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grade.
     * @param {GradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradeUpdateArgs>(args: SelectSubset<T, GradeUpdateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grades.
     * @param {GradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradeDeleteManyArgs>(args?: SelectSubset<T, GradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradeUpdateManyArgs>(args: SelectSubset<T, GradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades and returns the data updated in the database.
     * @param {GradeUpdateManyAndReturnArgs} args - Arguments to update many Grades.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.updateManyAndReturn({
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
    updateManyAndReturn<T extends GradeUpdateManyAndReturnArgs>(args: SelectSubset<T, GradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grade.
     * @param {GradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     */
    upsert<T extends GradeUpsertArgs>(args: SelectSubset<T, GradeUpsertArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends GradeCountArgs>(
      args?: Subset<T, GradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeGroupByArgs} args - Group by arguments.
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
      T extends GradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeGroupByArgs['orderBy'] }
        : { orderBy?: GradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grade model
   */
  readonly fields: GradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Grade model
   */
  interface GradeFieldRefs {
    readonly id: FieldRef<"Grade", 'Int'>
    readonly subjectId: FieldRef<"Grade", 'Int'>
    readonly studentId: FieldRef<"Grade", 'Int'>
    readonly quarter: FieldRef<"Grade", 'String'>
    readonly grade: FieldRef<"Grade", 'Float'>
    readonly remarks: FieldRef<"Grade", 'String'>
    readonly createdAt: FieldRef<"Grade", 'DateTime'>
    readonly updatedAt: FieldRef<"Grade", 'DateTime'>
    readonly deletedAt: FieldRef<"Grade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Grade findUnique
   */
  export type GradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findUniqueOrThrow
   */
  export type GradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findFirst
   */
  export type GradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findFirstOrThrow
   */
  export type GradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findMany
   */
  export type GradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grades to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade create
   */
  export type GradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Grade.
     */
    data: XOR<GradeCreateInput, GradeUncheckedCreateInput>
  }

  /**
   * Grade createMany
   */
  export type GradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grade createManyAndReturn
   */
  export type GradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grade update
   */
  export type GradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Grade.
     */
    data: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
    /**
     * Choose, which Grade to update.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade updateMany
   */
  export type GradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
    /**
     * Limit how many Grades to update.
     */
    limit?: number
  }

  /**
   * Grade updateManyAndReturn
   */
  export type GradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
    /**
     * Limit how many Grades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grade upsert
   */
  export type GradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Grade to update in case it exists.
     */
    where: GradeWhereUniqueInput
    /**
     * In case the Grade found by the `where` argument doesn't exist, create a new Grade with this data.
     */
    create: XOR<GradeCreateInput, GradeUncheckedCreateInput>
    /**
     * In case the Grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
  }

  /**
   * Grade delete
   */
  export type GradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter which Grade to delete.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade deleteMany
   */
  export type GradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grades to delete
     */
    where?: GradeWhereInput
    /**
     * Limit how many Grades to delete.
     */
    limit?: number
  }

  /**
   * Grade without action
   */
  export type GradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
  }


  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _avg: ParentAvgAggregateOutputType | null
    _sum: ParentSumAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ParentSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ParentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    contactNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ParentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    contactNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    userId: number
    contactNumber: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ParentAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ParentSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ParentMinAggregateInputType = {
    id?: true
    userId?: true
    contactNumber?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    userId?: true
    contactNumber?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    userId?: true
    contactNumber?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _avg?: ParentAvgAggregateInputType
    _sum?: ParentSumAggregateInputType
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: number
    userId: number
    contactNumber: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ParentCountAggregateOutputType | null
    _avg: ParentAvgAggregateOutputType | null
    _sum: ParentSumAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Student?: boolean | Parent$StudentArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>

  export type ParentSelectScalar = {
    id?: boolean
    userId?: boolean
    contactNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contactNumber" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Student?: boolean | Parent$StudentArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Student: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      contactNumber: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parents and returns the data saved in the database.
     * @param {ParentCreateManyAndReturnArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents and returns the data updated in the database.
     * @param {ParentUpdateManyAndReturnArgs} args - Arguments to update many Parents.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parents and only return the `id`
     * const parentWithIdOnly = await prisma.parent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParentUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
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
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Student<T extends Parent$StudentArgs<ExtArgs> = {}>(args?: Subset<T, Parent$StudentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parent model
   */
  interface ParentFieldRefs {
    readonly id: FieldRef<"Parent", 'Int'>
    readonly userId: FieldRef<"Parent", 'Int'>
    readonly contactNumber: FieldRef<"Parent", 'String'>
    readonly createdAt: FieldRef<"Parent", 'DateTime'>
    readonly updatedAt: FieldRef<"Parent", 'DateTime'>
    readonly deletedAt: FieldRef<"Parent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent createManyAndReturn
   */
  export type ParentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent updateManyAndReturn
   */
  export type ParentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to delete.
     */
    limit?: number
  }

  /**
   * Parent.Student
   */
  export type Parent$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    enrollmentId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    enrollmentId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    enrollmentId: number | null
    amount: number | null
    paymentType: string | null
    paymentMethod: string | null
    referenceNumber: string | null
    status: string | null
    paymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    enrollmentId: number | null
    amount: number | null
    paymentType: string | null
    paymentMethod: string | null
    referenceNumber: string | null
    status: string | null
    paymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    studentId: number
    enrollmentId: number
    amount: number
    paymentType: number
    paymentMethod: number
    referenceNumber: number
    status: number
    paymentDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    studentId?: true
    enrollmentId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    studentId?: true
    enrollmentId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    studentId?: true
    enrollmentId?: true
    amount?: true
    paymentType?: true
    paymentMethod?: true
    referenceNumber?: true
    status?: true
    paymentDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    studentId?: true
    enrollmentId?: true
    amount?: true
    paymentType?: true
    paymentMethod?: true
    referenceNumber?: true
    status?: true
    paymentDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    studentId?: true
    enrollmentId?: true
    amount?: true
    paymentType?: true
    paymentMethod?: true
    referenceNumber?: true
    status?: true
    paymentDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    studentId: number
    enrollmentId: number
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    enrollmentId?: boolean
    amount?: boolean
    paymentType?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    status?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    enrollmentId?: boolean
    amount?: boolean
    paymentType?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    status?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    enrollmentId?: boolean
    amount?: boolean
    paymentType?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    status?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    studentId?: boolean
    enrollmentId?: boolean
    amount?: boolean
    paymentType?: boolean
    paymentMethod?: boolean
    referenceNumber?: boolean
    status?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "enrollmentId" | "amount" | "paymentType" | "paymentMethod" | "referenceNumber" | "status" | "paymentDate" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      Enrollment: Prisma.$EnrollmentPayload<ExtArgs>
      Student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      enrollmentId: number
      amount: number
      paymentType: string
      paymentMethod: string
      referenceNumber: string
      status: string
      paymentDate: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Enrollment<T extends EnrollmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrollmentDefaultArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly studentId: FieldRef<"Payment", 'Int'>
    readonly enrollmentId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paymentType: FieldRef<"Payment", 'String'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly referenceNumber: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly deletedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model ReportCard
   */

  export type AggregateReportCard = {
    _count: ReportCardCountAggregateOutputType | null
    _avg: ReportCardAvgAggregateOutputType | null
    _sum: ReportCardSumAggregateOutputType | null
    _min: ReportCardMinAggregateOutputType | null
    _max: ReportCardMaxAggregateOutputType | null
  }

  export type ReportCardAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    averageGrade: number | null
    rank: number | null
  }

  export type ReportCardSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    averageGrade: number | null
    rank: number | null
  }

  export type ReportCardMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    schoolYear: string | null
    averageGrade: number | null
    rank: number | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ReportCardMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    schoolYear: string | null
    averageGrade: number | null
    rank: number | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ReportCardCountAggregateOutputType = {
    id: number
    studentId: number
    schoolYear: number
    averageGrade: number
    rank: number
    remarks: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ReportCardAvgAggregateInputType = {
    id?: true
    studentId?: true
    averageGrade?: true
    rank?: true
  }

  export type ReportCardSumAggregateInputType = {
    id?: true
    studentId?: true
    averageGrade?: true
    rank?: true
  }

  export type ReportCardMinAggregateInputType = {
    id?: true
    studentId?: true
    schoolYear?: true
    averageGrade?: true
    rank?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ReportCardMaxAggregateInputType = {
    id?: true
    studentId?: true
    schoolYear?: true
    averageGrade?: true
    rank?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ReportCardCountAggregateInputType = {
    id?: true
    studentId?: true
    schoolYear?: true
    averageGrade?: true
    rank?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ReportCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportCard to aggregate.
     */
    where?: ReportCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportCards to fetch.
     */
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportCards
    **/
    _count?: true | ReportCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportCardMaxAggregateInputType
  }

  export type GetReportCardAggregateType<T extends ReportCardAggregateArgs> = {
        [P in keyof T & keyof AggregateReportCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportCard[P]>
      : GetScalarType<T[P], AggregateReportCard[P]>
  }




  export type ReportCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportCardWhereInput
    orderBy?: ReportCardOrderByWithAggregationInput | ReportCardOrderByWithAggregationInput[]
    by: ReportCardScalarFieldEnum[] | ReportCardScalarFieldEnum
    having?: ReportCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCardCountAggregateInputType | true
    _avg?: ReportCardAvgAggregateInputType
    _sum?: ReportCardSumAggregateInputType
    _min?: ReportCardMinAggregateInputType
    _max?: ReportCardMaxAggregateInputType
  }

  export type ReportCardGroupByOutputType = {
    id: number
    studentId: number
    schoolYear: string
    averageGrade: number
    rank: number
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ReportCardCountAggregateOutputType | null
    _avg: ReportCardAvgAggregateOutputType | null
    _sum: ReportCardSumAggregateOutputType | null
    _min: ReportCardMinAggregateOutputType | null
    _max: ReportCardMaxAggregateOutputType | null
  }

  type GetReportCardGroupByPayload<T extends ReportCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportCardGroupByOutputType[P]>
            : GetScalarType<T[P], ReportCardGroupByOutputType[P]>
        }
      >
    >


  export type ReportCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    schoolYear?: boolean
    averageGrade?: boolean
    rank?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportCard"]>

  export type ReportCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    schoolYear?: boolean
    averageGrade?: boolean
    rank?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportCard"]>

  export type ReportCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    schoolYear?: boolean
    averageGrade?: boolean
    rank?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportCard"]>

  export type ReportCardSelectScalar = {
    id?: boolean
    studentId?: boolean
    schoolYear?: boolean
    averageGrade?: boolean
    rank?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ReportCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "schoolYear" | "averageGrade" | "rank" | "remarks" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["reportCard"]>
  export type ReportCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ReportCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ReportCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ReportCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportCard"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      schoolYear: string
      averageGrade: number
      rank: number
      remarks: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["reportCard"]>
    composites: {}
  }

  type ReportCardGetPayload<S extends boolean | null | undefined | ReportCardDefaultArgs> = $Result.GetResult<Prisma.$ReportCardPayload, S>

  type ReportCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCardCountAggregateInputType | true
    }

  export interface ReportCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportCard'], meta: { name: 'ReportCard' } }
    /**
     * Find zero or one ReportCard that matches the filter.
     * @param {ReportCardFindUniqueArgs} args - Arguments to find a ReportCard
     * @example
     * // Get one ReportCard
     * const reportCard = await prisma.reportCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportCardFindUniqueArgs>(args: SelectSubset<T, ReportCardFindUniqueArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportCardFindUniqueOrThrowArgs} args - Arguments to find a ReportCard
     * @example
     * // Get one ReportCard
     * const reportCard = await prisma.reportCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportCardFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardFindFirstArgs} args - Arguments to find a ReportCard
     * @example
     * // Get one ReportCard
     * const reportCard = await prisma.reportCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportCardFindFirstArgs>(args?: SelectSubset<T, ReportCardFindFirstArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardFindFirstOrThrowArgs} args - Arguments to find a ReportCard
     * @example
     * // Get one ReportCard
     * const reportCard = await prisma.reportCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportCardFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportCards
     * const reportCards = await prisma.reportCard.findMany()
     * 
     * // Get first 10 ReportCards
     * const reportCards = await prisma.reportCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportCardWithIdOnly = await prisma.reportCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportCardFindManyArgs>(args?: SelectSubset<T, ReportCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportCard.
     * @param {ReportCardCreateArgs} args - Arguments to create a ReportCard.
     * @example
     * // Create one ReportCard
     * const ReportCard = await prisma.reportCard.create({
     *   data: {
     *     // ... data to create a ReportCard
     *   }
     * })
     * 
     */
    create<T extends ReportCardCreateArgs>(args: SelectSubset<T, ReportCardCreateArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportCards.
     * @param {ReportCardCreateManyArgs} args - Arguments to create many ReportCards.
     * @example
     * // Create many ReportCards
     * const reportCard = await prisma.reportCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCardCreateManyArgs>(args?: SelectSubset<T, ReportCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportCards and returns the data saved in the database.
     * @param {ReportCardCreateManyAndReturnArgs} args - Arguments to create many ReportCards.
     * @example
     * // Create many ReportCards
     * const reportCard = await prisma.reportCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportCards and only return the `id`
     * const reportCardWithIdOnly = await prisma.reportCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCardCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportCard.
     * @param {ReportCardDeleteArgs} args - Arguments to delete one ReportCard.
     * @example
     * // Delete one ReportCard
     * const ReportCard = await prisma.reportCard.delete({
     *   where: {
     *     // ... filter to delete one ReportCard
     *   }
     * })
     * 
     */
    delete<T extends ReportCardDeleteArgs>(args: SelectSubset<T, ReportCardDeleteArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportCard.
     * @param {ReportCardUpdateArgs} args - Arguments to update one ReportCard.
     * @example
     * // Update one ReportCard
     * const reportCard = await prisma.reportCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportCardUpdateArgs>(args: SelectSubset<T, ReportCardUpdateArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportCards.
     * @param {ReportCardDeleteManyArgs} args - Arguments to filter ReportCards to delete.
     * @example
     * // Delete a few ReportCards
     * const { count } = await prisma.reportCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportCardDeleteManyArgs>(args?: SelectSubset<T, ReportCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportCards
     * const reportCard = await prisma.reportCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportCardUpdateManyArgs>(args: SelectSubset<T, ReportCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportCards and returns the data updated in the database.
     * @param {ReportCardUpdateManyAndReturnArgs} args - Arguments to update many ReportCards.
     * @example
     * // Update many ReportCards
     * const reportCard = await prisma.reportCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportCards and only return the `id`
     * const reportCardWithIdOnly = await prisma.reportCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportCardUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportCard.
     * @param {ReportCardUpsertArgs} args - Arguments to update or create a ReportCard.
     * @example
     * // Update or create a ReportCard
     * const reportCard = await prisma.reportCard.upsert({
     *   create: {
     *     // ... data to create a ReportCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportCard we want to update
     *   }
     * })
     */
    upsert<T extends ReportCardUpsertArgs>(args: SelectSubset<T, ReportCardUpsertArgs<ExtArgs>>): Prisma__ReportCardClient<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardCountArgs} args - Arguments to filter ReportCards to count.
     * @example
     * // Count the number of ReportCards
     * const count = await prisma.reportCard.count({
     *   where: {
     *     // ... the filter for the ReportCards we want to count
     *   }
     * })
    **/
    count<T extends ReportCardCountArgs>(
      args?: Subset<T, ReportCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportCardAggregateArgs>(args: Subset<T, ReportCardAggregateArgs>): Prisma.PrismaPromise<GetReportCardAggregateType<T>>

    /**
     * Group by ReportCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCardGroupByArgs} args - Group by arguments.
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
      T extends ReportCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportCardGroupByArgs['orderBy'] }
        : { orderBy?: ReportCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportCard model
   */
  readonly fields: ReportCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReportCard model
   */
  interface ReportCardFieldRefs {
    readonly id: FieldRef<"ReportCard", 'Int'>
    readonly studentId: FieldRef<"ReportCard", 'Int'>
    readonly schoolYear: FieldRef<"ReportCard", 'String'>
    readonly averageGrade: FieldRef<"ReportCard", 'Float'>
    readonly rank: FieldRef<"ReportCard", 'Int'>
    readonly remarks: FieldRef<"ReportCard", 'String'>
    readonly createdAt: FieldRef<"ReportCard", 'DateTime'>
    readonly updatedAt: FieldRef<"ReportCard", 'DateTime'>
    readonly deletedAt: FieldRef<"ReportCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportCard findUnique
   */
  export type ReportCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCard to fetch.
     */
    where: ReportCardWhereUniqueInput
  }

  /**
   * ReportCard findUniqueOrThrow
   */
  export type ReportCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCard to fetch.
     */
    where: ReportCardWhereUniqueInput
  }

  /**
   * ReportCard findFirst
   */
  export type ReportCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCard to fetch.
     */
    where?: ReportCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportCards to fetch.
     */
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportCards.
     */
    cursor?: ReportCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportCards.
     */
    distinct?: ReportCardScalarFieldEnum | ReportCardScalarFieldEnum[]
  }

  /**
   * ReportCard findFirstOrThrow
   */
  export type ReportCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCard to fetch.
     */
    where?: ReportCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportCards to fetch.
     */
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportCards.
     */
    cursor?: ReportCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportCards.
     */
    distinct?: ReportCardScalarFieldEnum | ReportCardScalarFieldEnum[]
  }

  /**
   * ReportCard findMany
   */
  export type ReportCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter, which ReportCards to fetch.
     */
    where?: ReportCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportCards to fetch.
     */
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportCards.
     */
    cursor?: ReportCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportCards.
     */
    skip?: number
    distinct?: ReportCardScalarFieldEnum | ReportCardScalarFieldEnum[]
  }

  /**
   * ReportCard create
   */
  export type ReportCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportCard.
     */
    data: XOR<ReportCardCreateInput, ReportCardUncheckedCreateInput>
  }

  /**
   * ReportCard createMany
   */
  export type ReportCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportCards.
     */
    data: ReportCardCreateManyInput | ReportCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportCard createManyAndReturn
   */
  export type ReportCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * The data used to create many ReportCards.
     */
    data: ReportCardCreateManyInput | ReportCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportCard update
   */
  export type ReportCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportCard.
     */
    data: XOR<ReportCardUpdateInput, ReportCardUncheckedUpdateInput>
    /**
     * Choose, which ReportCard to update.
     */
    where: ReportCardWhereUniqueInput
  }

  /**
   * ReportCard updateMany
   */
  export type ReportCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportCards.
     */
    data: XOR<ReportCardUpdateManyMutationInput, ReportCardUncheckedUpdateManyInput>
    /**
     * Filter which ReportCards to update
     */
    where?: ReportCardWhereInput
    /**
     * Limit how many ReportCards to update.
     */
    limit?: number
  }

  /**
   * ReportCard updateManyAndReturn
   */
  export type ReportCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * The data used to update ReportCards.
     */
    data: XOR<ReportCardUpdateManyMutationInput, ReportCardUncheckedUpdateManyInput>
    /**
     * Filter which ReportCards to update
     */
    where?: ReportCardWhereInput
    /**
     * Limit how many ReportCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportCard upsert
   */
  export type ReportCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportCard to update in case it exists.
     */
    where: ReportCardWhereUniqueInput
    /**
     * In case the ReportCard found by the `where` argument doesn't exist, create a new ReportCard with this data.
     */
    create: XOR<ReportCardCreateInput, ReportCardUncheckedCreateInput>
    /**
     * In case the ReportCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportCardUpdateInput, ReportCardUncheckedUpdateInput>
  }

  /**
   * ReportCard delete
   */
  export type ReportCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    /**
     * Filter which ReportCard to delete.
     */
    where: ReportCardWhereUniqueInput
  }

  /**
   * ReportCard deleteMany
   */
  export type ReportCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportCards to delete
     */
    where?: ReportCardWhereInput
    /**
     * Limit how many ReportCards to delete.
     */
    limit?: number
  }

  /**
   * ReportCard without action
   */
  export type ReportCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type SectionSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: number | null
    teacherId: number | null
    name: string | null
    gradeLevel: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SectionMaxAggregateOutputType = {
    id: number | null
    teacherId: number | null
    name: string | null
    gradeLevel: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    teacherId: number
    name: number
    gradeLevel: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type SectionSumAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    teacherId?: true
    name?: true
    gradeLevel?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    teacherId?: true
    name?: true
    gradeLevel?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    teacherId?: true
    name?: true
    gradeLevel?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: number
    teacherId: number
    name: string
    gradeLevel: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    name?: boolean
    gradeLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Enrollment?: boolean | Section$EnrollmentArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    name?: boolean
    gradeLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    name?: boolean
    gradeLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    teacherId?: boolean
    name?: boolean
    gradeLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "name" | "gradeLevel" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | Section$EnrollmentArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      Enrollment: Prisma.$EnrollmentPayload<ExtArgs>[]
      Teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherId: number
      name: string
      gradeLevel: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Enrollment<T extends Section$EnrollmentArgs<ExtArgs> = {}>(args?: Subset<T, Section$EnrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'Int'>
    readonly teacherId: FieldRef<"Section", 'Int'>
    readonly name: FieldRef<"Section", 'String'>
    readonly gradeLevel: FieldRef<"Section", 'String'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
    readonly deletedAt: FieldRef<"Section", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.Enrollment
   */
  export type Section$EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    parentId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    parentId: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    parentId: number | null
    studentNumber: string | null
    dateOfBirth: Date | null
    gender: string | null
    guardianName: string | null
    guardianContact: string | null
    address: string | null
    gradeLevel: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    parentId: number | null
    studentNumber: string | null
    dateOfBirth: Date | null
    gender: string | null
    guardianName: string | null
    guardianContact: string | null
    address: string | null
    gradeLevel: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    parentId: number
    studentNumber: number
    dateOfBirth: number
    gender: number
    guardianName: number
    guardianContact: number
    address: number
    gradeLevel: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    userId?: true
    parentId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    userId?: true
    parentId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    parentId?: true
    studentNumber?: true
    dateOfBirth?: true
    gender?: true
    guardianName?: true
    guardianContact?: true
    address?: true
    gradeLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    parentId?: true
    studentNumber?: true
    dateOfBirth?: true
    gender?: true
    guardianName?: true
    guardianContact?: true
    address?: true
    gradeLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    parentId?: true
    studentNumber?: true
    dateOfBirth?: true
    gender?: true
    guardianName?: true
    guardianContact?: true
    address?: true
    gradeLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    userId: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parentId?: boolean
    studentNumber?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    address?: boolean
    gradeLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Attendance?: boolean | Student$AttendanceArgs<ExtArgs>
    Enrollment?: boolean | Student$EnrollmentArgs<ExtArgs>
    Evaluation?: boolean | Student$EvaluationArgs<ExtArgs>
    Grade?: boolean | Student$GradeArgs<ExtArgs>
    Payment?: boolean | Student$PaymentArgs<ExtArgs>
    ReportCard?: boolean | Student$ReportCardArgs<ExtArgs>
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parentId?: boolean
    studentNumber?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    address?: boolean
    gradeLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    parentId?: boolean
    studentNumber?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    address?: boolean
    gradeLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    parentId?: boolean
    studentNumber?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    address?: boolean
    gradeLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "parentId" | "studentNumber" | "dateOfBirth" | "gender" | "guardianName" | "guardianContact" | "address" | "gradeLevel" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | Student$AttendanceArgs<ExtArgs>
    Enrollment?: boolean | Student$EnrollmentArgs<ExtArgs>
    Evaluation?: boolean | Student$EvaluationArgs<ExtArgs>
    Grade?: boolean | Student$GradeArgs<ExtArgs>
    Payment?: boolean | Student$PaymentArgs<ExtArgs>
    ReportCard?: boolean | Student$ReportCardArgs<ExtArgs>
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | ParentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
      Enrollment: Prisma.$EnrollmentPayload<ExtArgs>[]
      Evaluation: Prisma.$EvaluationPayload<ExtArgs>[]
      Grade: Prisma.$GradePayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
      ReportCard: Prisma.$ReportCardPayload<ExtArgs>[]
      Parent: Prisma.$ParentPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      parentId: number
      studentNumber: string
      dateOfBirth: Date
      gender: string
      guardianName: string
      guardianContact: string
      address: string
      gradeLevel: string
      status: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Attendance<T extends Student$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Student$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Enrollment<T extends Student$EnrollmentArgs<ExtArgs> = {}>(args?: Subset<T, Student$EnrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Evaluation<T extends Student$EvaluationArgs<ExtArgs> = {}>(args?: Subset<T, Student$EvaluationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Grade<T extends Student$GradeArgs<ExtArgs> = {}>(args?: Subset<T, Student$GradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends Student$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Student$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReportCard<T extends Student$ReportCardArgs<ExtArgs> = {}>(args?: Subset<T, Student$ReportCardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Parent<T extends ParentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParentDefaultArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly userId: FieldRef<"Student", 'Int'>
    readonly parentId: FieldRef<"Student", 'Int'>
    readonly studentNumber: FieldRef<"Student", 'String'>
    readonly dateOfBirth: FieldRef<"Student", 'DateTime'>
    readonly gender: FieldRef<"Student", 'String'>
    readonly guardianName: FieldRef<"Student", 'String'>
    readonly guardianContact: FieldRef<"Student", 'String'>
    readonly address: FieldRef<"Student", 'String'>
    readonly gradeLevel: FieldRef<"Student", 'String'>
    readonly status: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
    readonly deletedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.Attendance
   */
  export type Student$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Student.Enrollment
   */
  export type Student$EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Student.Evaluation
   */
  export type Student$EvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Student.Grade
   */
  export type Student$GradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Student.Payment
   */
  export type Student$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Student.ReportCard
   */
  export type Student$ReportCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCard
     */
    select?: ReportCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportCard
     */
    omit?: ReportCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportCardInclude<ExtArgs> | null
    where?: ReportCardWhereInput
    orderBy?: ReportCardOrderByWithRelationInput | ReportCardOrderByWithRelationInput[]
    cursor?: ReportCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportCardScalarFieldEnum | ReportCardScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
    teacherId: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
    teacherId: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
    teacherId: number | null
    name: string | null
    description: string | null
    gradeLevel: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    enrollmentId: number | null
    teacherId: number | null
    name: string | null
    description: string | null
    gradeLevel: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    enrollmentId: number
    teacherId: number
    name: number
    description: number
    gradeLevel: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    enrollmentId?: true
    teacherId?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    enrollmentId?: true
    teacherId?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    enrollmentId?: true
    teacherId?: true
    name?: true
    description?: true
    gradeLevel?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    enrollmentId?: true
    teacherId?: true
    name?: true
    description?: true
    gradeLevel?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    enrollmentId?: true
    teacherId?: true
    name?: true
    description?: true
    gradeLevel?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    enrollmentId: number
    teacherId: number
    name: string
    description: string | null
    gradeLevel: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentId?: boolean
    teacherId?: boolean
    name?: boolean
    description?: boolean
    gradeLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Evaluation?: boolean | Subject$EvaluationArgs<ExtArgs>
    Grade?: boolean | Subject$GradeArgs<ExtArgs>
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentId?: boolean
    teacherId?: boolean
    name?: boolean
    description?: boolean
    gradeLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentId?: boolean
    teacherId?: boolean
    name?: boolean
    description?: boolean
    gradeLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    enrollmentId?: boolean
    teacherId?: boolean
    name?: boolean
    description?: boolean
    gradeLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrollmentId" | "teacherId" | "name" | "description" | "gradeLevel" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Evaluation?: boolean | Subject$EvaluationArgs<ExtArgs>
    Grade?: boolean | Subject$GradeArgs<ExtArgs>
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Enrollment?: boolean | EnrollmentDefaultArgs<ExtArgs>
    Teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      Evaluation: Prisma.$EvaluationPayload<ExtArgs>[]
      Grade: Prisma.$GradePayload<ExtArgs>[]
      Enrollment: Prisma.$EnrollmentPayload<ExtArgs>
      Teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enrollmentId: number
      teacherId: number
      name: string
      description: string | null
      gradeLevel: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Evaluation<T extends Subject$EvaluationArgs<ExtArgs> = {}>(args?: Subset<T, Subject$EvaluationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Grade<T extends Subject$GradeArgs<ExtArgs> = {}>(args?: Subset<T, Subject$GradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Enrollment<T extends EnrollmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnrollmentDefaultArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly enrollmentId: FieldRef<"Subject", 'Int'>
    readonly teacherId: FieldRef<"Subject", 'Int'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly description: FieldRef<"Subject", 'String'>
    readonly gradeLevel: FieldRef<"Subject", 'String'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
    readonly deletedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.Evaluation
   */
  export type Subject$EvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Subject.Grade
   */
  export type Subject$GradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    userId: number | null
    employeeNumber: string | null
    specialization: string | null
    contactNumber: string | null
    assignedSections: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    employeeNumber: string | null
    specialization: string | null
    contactNumber: string | null
    assignedSections: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    userId: number
    employeeNumber: number
    specialization: number
    contactNumber: number
    assignedSections: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    userId?: true
    employeeNumber?: true
    specialization?: true
    contactNumber?: true
    assignedSections?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    userId?: true
    employeeNumber?: true
    specialization?: true
    contactNumber?: true
    assignedSections?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    userId?: true
    employeeNumber?: true
    specialization?: true
    contactNumber?: true
    assignedSections?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    userId: number
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeNumber?: boolean
    specialization?: boolean
    contactNumber?: boolean
    assignedSections?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    Evaluation?: boolean | Teacher$EvaluationArgs<ExtArgs>
    Section?: boolean | Teacher$SectionArgs<ExtArgs>
    Subject?: boolean | Teacher$SubjectArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeNumber?: boolean
    specialization?: boolean
    contactNumber?: boolean
    assignedSections?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeNumber?: boolean
    specialization?: boolean
    contactNumber?: boolean
    assignedSections?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    userId?: boolean
    employeeNumber?: boolean
    specialization?: boolean
    contactNumber?: boolean
    assignedSections?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "employeeNumber" | "specialization" | "contactNumber" | "assignedSections" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Evaluation?: boolean | Teacher$EvaluationArgs<ExtArgs>
    Section?: boolean | Teacher$SectionArgs<ExtArgs>
    Subject?: boolean | Teacher$SubjectArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      Evaluation: Prisma.$EvaluationPayload<ExtArgs>[]
      Section: Prisma.$SectionPayload<ExtArgs>[]
      Subject: Prisma.$SubjectPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      employeeNumber: string
      specialization: string
      contactNumber: string
      assignedSections: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Evaluation<T extends Teacher$EvaluationArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$EvaluationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Section<T extends Teacher$SectionArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$SectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Subject<T extends Teacher$SubjectArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$SubjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly userId: FieldRef<"Teacher", 'Int'>
    readonly employeeNumber: FieldRef<"Teacher", 'String'>
    readonly specialization: FieldRef<"Teacher", 'String'>
    readonly contactNumber: FieldRef<"Teacher", 'String'>
    readonly assignedSections: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"Teacher", 'DateTime'>
    readonly deletedAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.Evaluation
   */
  export type Teacher$EvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Teacher.Section
   */
  export type Teacher$SectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Teacher.Subject
   */
  export type Teacher$SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
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
    role: 'role',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    name: 'name',
    passwordHashed: 'passwordHashed',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    date: 'date',
    status: 'status',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    sectionId: 'sectionId',
    schoolYear: 'schoolYear',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subjectId: 'subjectId',
    teacherId: 'teacherId',
    rating: 'rating',
    comments: 'comments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    id: 'id',
    subjectId: 'subjectId',
    studentId: 'studentId',
    quarter: 'quarter',
    grade: 'grade',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contactNumber: 'contactNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    enrollmentId: 'enrollmentId',
    amount: 'amount',
    paymentType: 'paymentType',
    paymentMethod: 'paymentMethod',
    referenceNumber: 'referenceNumber',
    status: 'status',
    paymentDate: 'paymentDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReportCardScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    schoolYear: 'schoolYear',
    averageGrade: 'averageGrade',
    rank: 'rank',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ReportCardScalarFieldEnum = (typeof ReportCardScalarFieldEnum)[keyof typeof ReportCardScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    name: 'name',
    gradeLevel: 'gradeLevel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    parentId: 'parentId',
    studentNumber: 'studentNumber',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    guardianName: 'guardianName',
    guardianContact: 'guardianContact',
    address: 'address',
    gradeLevel: 'gradeLevel',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    enrollmentId: 'enrollmentId',
    teacherId: 'teacherId',
    name: 'name',
    description: 'description',
    gradeLevel: 'gradeLevel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    employeeNumber: 'employeeNumber',
    specialization: 'specialization',
    contactNumber: 'contactNumber',
    assignedSections: 'assignedSections',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringFilter<"User"> | string
    passwordHashed?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    name?: SortOrder
    passwordHashed?: SortOrder
    updatedAt?: SortOrder
    Parent?: ParentOrderByWithRelationInput
    Student?: StudentOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringFilter<"User"> | string
    passwordHashed?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Parent?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    name?: SortOrder
    passwordHashed?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHashed?: StringWithAggregatesFilter<"User"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    studentId?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    remarks?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Student?: StudentOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    studentId?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    remarks?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    studentId?: IntWithAggregatesFilter<"Attendance"> | number
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: StringWithAggregatesFilter<"Attendance"> | string
    remarks?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    studentId?: IntFilter<"Enrollment"> | number
    sectionId?: IntFilter<"Enrollment"> | number
    schoolYear?: StringFilter<"Enrollment"> | string
    status?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    Section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    Payment?: PaymentListRelationFilter
    Subject?: SubjectListRelationFilter
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    sectionId?: SortOrder
    schoolYear?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Section?: SectionOrderByWithRelationInput
    Student?: StudentOrderByWithRelationInput
    Payment?: PaymentOrderByRelationAggregateInput
    Subject?: SubjectOrderByRelationAggregateInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    studentId?: IntFilter<"Enrollment"> | number
    sectionId?: IntFilter<"Enrollment"> | number
    schoolYear?: StringFilter<"Enrollment"> | string
    status?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
    Section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    Payment?: PaymentListRelationFilter
    Subject?: SubjectListRelationFilter
  }, "id">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    sectionId?: SortOrder
    schoolYear?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enrollment"> | number
    studentId?: IntWithAggregatesFilter<"Enrollment"> | number
    sectionId?: IntWithAggregatesFilter<"Enrollment"> | number
    schoolYear?: StringWithAggregatesFilter<"Enrollment"> | string
    status?: StringWithAggregatesFilter<"Enrollment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Enrollment"> | Date | string | null
  }

  export type EvaluationWhereInput = {
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    id?: IntFilter<"Evaluation"> | number
    studentId?: IntFilter<"Evaluation"> | number
    subjectId?: IntFilter<"Evaluation"> | number
    teacherId?: IntFilter<"Evaluation"> | number
    rating?: IntFilter<"Evaluation"> | number
    comments?: StringNullableFilter<"Evaluation"> | string | null
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Evaluation"> | Date | string | null
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    Subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type EvaluationOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    rating?: SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Student?: StudentOrderByWithRelationInput
    Subject?: SubjectOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
  }

  export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    studentId?: IntFilter<"Evaluation"> | number
    subjectId?: IntFilter<"Evaluation"> | number
    teacherId?: IntFilter<"Evaluation"> | number
    rating?: IntFilter<"Evaluation"> | number
    comments?: StringNullableFilter<"Evaluation"> | string | null
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Evaluation"> | Date | string | null
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    Subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type EvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    rating?: SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EvaluationCountOrderByAggregateInput
    _avg?: EvaluationAvgOrderByAggregateInput
    _max?: EvaluationMaxOrderByAggregateInput
    _min?: EvaluationMinOrderByAggregateInput
    _sum?: EvaluationSumOrderByAggregateInput
  }

  export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    OR?: EvaluationScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evaluation"> | number
    studentId?: IntWithAggregatesFilter<"Evaluation"> | number
    subjectId?: IntWithAggregatesFilter<"Evaluation"> | number
    teacherId?: IntWithAggregatesFilter<"Evaluation"> | number
    rating?: IntWithAggregatesFilter<"Evaluation"> | number
    comments?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Evaluation"> | Date | string | null
  }

  export type GradeWhereInput = {
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    id?: IntFilter<"Grade"> | number
    subjectId?: IntFilter<"Grade"> | number
    studentId?: IntFilter<"Grade"> | number
    quarter?: StringFilter<"Grade"> | string
    grade?: FloatFilter<"Grade"> | number
    remarks?: StringNullableFilter<"Grade"> | string | null
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Grade"> | Date | string | null
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    Subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type GradeOrderByWithRelationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    studentId?: SortOrder
    quarter?: SortOrder
    grade?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Student?: StudentOrderByWithRelationInput
    Subject?: SubjectOrderByWithRelationInput
  }

  export type GradeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    subjectId?: IntFilter<"Grade"> | number
    studentId?: IntFilter<"Grade"> | number
    quarter?: StringFilter<"Grade"> | string
    grade?: FloatFilter<"Grade"> | number
    remarks?: StringNullableFilter<"Grade"> | string | null
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Grade"> | Date | string | null
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    Subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id">

  export type GradeOrderByWithAggregationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    studentId?: SortOrder
    quarter?: SortOrder
    grade?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: GradeCountOrderByAggregateInput
    _avg?: GradeAvgOrderByAggregateInput
    _max?: GradeMaxOrderByAggregateInput
    _min?: GradeMinOrderByAggregateInput
    _sum?: GradeSumOrderByAggregateInput
  }

  export type GradeScalarWhereWithAggregatesInput = {
    AND?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    OR?: GradeScalarWhereWithAggregatesInput[]
    NOT?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Grade"> | number
    subjectId?: IntWithAggregatesFilter<"Grade"> | number
    studentId?: IntWithAggregatesFilter<"Grade"> | number
    quarter?: StringWithAggregatesFilter<"Grade"> | string
    grade?: FloatWithAggregatesFilter<"Grade"> | number
    remarks?: StringNullableWithAggregatesFilter<"Grade"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Grade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Grade"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Grade"> | Date | string | null
  }

  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    id?: IntFilter<"Parent"> | number
    userId?: IntFilter<"Parent"> | number
    contactNumber?: StringFilter<"Parent"> | string
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    updatedAt?: DateTimeFilter<"Parent"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Parent"> | Date | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Student?: StudentListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contactNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    Student?: StudentOrderByRelationAggregateInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    contactNumber?: StringFilter<"Parent"> | string
    createdAt?: DateTimeFilter<"Parent"> | Date | string
    updatedAt?: DateTimeFilter<"Parent"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Parent"> | Date | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Student?: StudentListRelationFilter
  }, "id" | "userId">

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contactNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ParentCountOrderByAggregateInput
    _avg?: ParentAvgOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
    _sum?: ParentSumOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parent"> | number
    userId?: IntWithAggregatesFilter<"Parent"> | number
    contactNumber?: StringWithAggregatesFilter<"Parent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Parent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parent"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Parent"> | Date | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    studentId?: IntFilter<"Payment"> | number
    enrollmentId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    paymentType?: StringFilter<"Payment"> | string
    paymentMethod?: StringFilter<"Payment"> | string
    referenceNumber?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    Enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    enrollmentId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Enrollment?: EnrollmentOrderByWithRelationInput
    Student?: StudentOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    studentId?: IntFilter<"Payment"> | number
    enrollmentId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    paymentType?: StringFilter<"Payment"> | string
    paymentMethod?: StringFilter<"Payment"> | string
    referenceNumber?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    Enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    enrollmentId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    studentId?: IntWithAggregatesFilter<"Payment"> | number
    enrollmentId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paymentType?: StringWithAggregatesFilter<"Payment"> | string
    paymentMethod?: StringWithAggregatesFilter<"Payment"> | string
    referenceNumber?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
  }

  export type ReportCardWhereInput = {
    AND?: ReportCardWhereInput | ReportCardWhereInput[]
    OR?: ReportCardWhereInput[]
    NOT?: ReportCardWhereInput | ReportCardWhereInput[]
    id?: IntFilter<"ReportCard"> | number
    studentId?: IntFilter<"ReportCard"> | number
    schoolYear?: StringFilter<"ReportCard"> | string
    averageGrade?: FloatFilter<"ReportCard"> | number
    rank?: IntFilter<"ReportCard"> | number
    remarks?: StringNullableFilter<"ReportCard"> | string | null
    createdAt?: DateTimeFilter<"ReportCard"> | Date | string
    updatedAt?: DateTimeFilter<"ReportCard"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ReportCard"> | Date | string | null
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type ReportCardOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolYear?: SortOrder
    averageGrade?: SortOrder
    rank?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Student?: StudentOrderByWithRelationInput
  }

  export type ReportCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportCardWhereInput | ReportCardWhereInput[]
    OR?: ReportCardWhereInput[]
    NOT?: ReportCardWhereInput | ReportCardWhereInput[]
    studentId?: IntFilter<"ReportCard"> | number
    schoolYear?: StringFilter<"ReportCard"> | string
    averageGrade?: FloatFilter<"ReportCard"> | number
    rank?: IntFilter<"ReportCard"> | number
    remarks?: StringNullableFilter<"ReportCard"> | string | null
    createdAt?: DateTimeFilter<"ReportCard"> | Date | string
    updatedAt?: DateTimeFilter<"ReportCard"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ReportCard"> | Date | string | null
    Student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type ReportCardOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolYear?: SortOrder
    averageGrade?: SortOrder
    rank?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ReportCardCountOrderByAggregateInput
    _avg?: ReportCardAvgOrderByAggregateInput
    _max?: ReportCardMaxOrderByAggregateInput
    _min?: ReportCardMinOrderByAggregateInput
    _sum?: ReportCardSumOrderByAggregateInput
  }

  export type ReportCardScalarWhereWithAggregatesInput = {
    AND?: ReportCardScalarWhereWithAggregatesInput | ReportCardScalarWhereWithAggregatesInput[]
    OR?: ReportCardScalarWhereWithAggregatesInput[]
    NOT?: ReportCardScalarWhereWithAggregatesInput | ReportCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReportCard"> | number
    studentId?: IntWithAggregatesFilter<"ReportCard"> | number
    schoolYear?: StringWithAggregatesFilter<"ReportCard"> | string
    averageGrade?: FloatWithAggregatesFilter<"ReportCard"> | number
    rank?: IntWithAggregatesFilter<"ReportCard"> | number
    remarks?: StringNullableWithAggregatesFilter<"ReportCard"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReportCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReportCard"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ReportCard"> | Date | string | null
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: IntFilter<"Section"> | number
    teacherId?: IntFilter<"Section"> | number
    name?: StringFilter<"Section"> | string
    gradeLevel?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Section"> | Date | string | null
    Enrollment?: EnrollmentListRelationFilter
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Enrollment?: EnrollmentOrderByRelationAggregateInput
    Teacher?: TeacherOrderByWithRelationInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    teacherId?: IntFilter<"Section"> | number
    name?: StringFilter<"Section"> | string
    gradeLevel?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Section"> | Date | string | null
    Enrollment?: EnrollmentListRelationFilter
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Section"> | number
    teacherId?: IntWithAggregatesFilter<"Section"> | number
    name?: StringWithAggregatesFilter<"Section"> | string
    gradeLevel?: StringWithAggregatesFilter<"Section"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Section"> | Date | string | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    userId?: IntFilter<"Student"> | number
    parentId?: IntFilter<"Student"> | number
    studentNumber?: StringFilter<"Student"> | string
    dateOfBirth?: DateTimeFilter<"Student"> | Date | string
    gender?: StringFilter<"Student"> | string
    guardianName?: StringFilter<"Student"> | string
    guardianContact?: StringFilter<"Student"> | string
    address?: StringFilter<"Student"> | string
    gradeLevel?: StringFilter<"Student"> | string
    status?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    Attendance?: AttendanceListRelationFilter
    Enrollment?: EnrollmentListRelationFilter
    Evaluation?: EvaluationListRelationFilter
    Grade?: GradeListRelationFilter
    Payment?: PaymentListRelationFilter
    ReportCard?: ReportCardListRelationFilter
    Parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    studentNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    address?: SortOrder
    gradeLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Attendance?: AttendanceOrderByRelationAggregateInput
    Enrollment?: EnrollmentOrderByRelationAggregateInput
    Evaluation?: EvaluationOrderByRelationAggregateInput
    Grade?: GradeOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
    ReportCard?: ReportCardOrderByRelationAggregateInput
    Parent?: ParentOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    parentId?: IntFilter<"Student"> | number
    studentNumber?: StringFilter<"Student"> | string
    dateOfBirth?: DateTimeFilter<"Student"> | Date | string
    gender?: StringFilter<"Student"> | string
    guardianName?: StringFilter<"Student"> | string
    guardianContact?: StringFilter<"Student"> | string
    address?: StringFilter<"Student"> | string
    gradeLevel?: StringFilter<"Student"> | string
    status?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    Attendance?: AttendanceListRelationFilter
    Enrollment?: EnrollmentListRelationFilter
    Evaluation?: EvaluationListRelationFilter
    Grade?: GradeListRelationFilter
    Payment?: PaymentListRelationFilter
    ReportCard?: ReportCardListRelationFilter
    Parent?: XOR<ParentScalarRelationFilter, ParentWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    studentNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    address?: SortOrder
    gradeLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    userId?: IntWithAggregatesFilter<"Student"> | number
    parentId?: IntWithAggregatesFilter<"Student"> | number
    studentNumber?: StringWithAggregatesFilter<"Student"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    gender?: StringWithAggregatesFilter<"Student"> | string
    guardianName?: StringWithAggregatesFilter<"Student"> | string
    guardianContact?: StringWithAggregatesFilter<"Student"> | string
    address?: StringWithAggregatesFilter<"Student"> | string
    gradeLevel?: StringWithAggregatesFilter<"Student"> | string
    status?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    enrollmentId?: IntFilter<"Subject"> | number
    teacherId?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    gradeLevel?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Subject"> | Date | string | null
    Evaluation?: EvaluationListRelationFilter
    Grade?: GradeListRelationFilter
    Enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Evaluation?: EvaluationOrderByRelationAggregateInput
    Grade?: GradeOrderByRelationAggregateInput
    Enrollment?: EnrollmentOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    enrollmentId?: IntFilter<"Subject"> | number
    teacherId?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    gradeLevel?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Subject"> | Date | string | null
    Evaluation?: EvaluationListRelationFilter
    Grade?: GradeListRelationFilter
    Enrollment?: XOR<EnrollmentScalarRelationFilter, EnrollmentWhereInput>
    Teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    enrollmentId?: IntWithAggregatesFilter<"Subject"> | number
    teacherId?: IntWithAggregatesFilter<"Subject"> | number
    name?: StringWithAggregatesFilter<"Subject"> | string
    description?: StringNullableWithAggregatesFilter<"Subject"> | string | null
    gradeLevel?: StringWithAggregatesFilter<"Subject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Subject"> | Date | string | null
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    userId?: IntFilter<"Teacher"> | number
    employeeNumber?: StringFilter<"Teacher"> | string
    specialization?: StringFilter<"Teacher"> | string
    contactNumber?: StringFilter<"Teacher"> | string
    assignedSections?: StringNullableFilter<"Teacher"> | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    Evaluation?: EvaluationListRelationFilter
    Section?: SectionListRelationFilter
    Subject?: SubjectListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeNumber?: SortOrder
    specialization?: SortOrder
    contactNumber?: SortOrder
    assignedSections?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    Evaluation?: EvaluationOrderByRelationAggregateInput
    Section?: SectionOrderByRelationAggregateInput
    Subject?: SubjectOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    employeeNumber?: StringFilter<"Teacher"> | string
    specialization?: StringFilter<"Teacher"> | string
    contactNumber?: StringFilter<"Teacher"> | string
    assignedSections?: StringNullableFilter<"Teacher"> | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    Evaluation?: EvaluationListRelationFilter
    Section?: SectionListRelationFilter
    Subject?: SubjectListRelationFilter
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeNumber?: SortOrder
    specialization?: SortOrder
    contactNumber?: SortOrder
    assignedSections?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    userId?: IntWithAggregatesFilter<"Teacher"> | number
    employeeNumber?: StringWithAggregatesFilter<"Teacher"> | string
    specialization?: StringWithAggregatesFilter<"Teacher"> | string
    contactNumber?: StringWithAggregatesFilter<"Teacher"> | string
    assignedSections?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Teacher"> | Date | string | null
  }

  export type UserCreateInput = {
    email: string
    role?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    passwordHashed: string
    updatedAt?: Date | string
    Parent?: ParentCreateNestedOneWithoutUserInput
    Student?: StudentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    role?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    passwordHashed: string
    updatedAt?: Date | string
    Parent?: ParentUncheckedCreateNestedOneWithoutUserInput
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUpdateOneWithoutUserNestedInput
    Student?: StudentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    role?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    passwordHashed: string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    date: Date | string
    status: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student: StudentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    studentId: number
    date: Date | string
    status: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AttendanceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateManyInput = {
    id?: number
    studentId: number
    date: Date | string
    status: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentCreateInput = {
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Section: SectionCreateNestedOneWithoutEnrollmentInput
    Student: StudentCreateNestedOneWithoutEnrollmentInput
    Payment?: PaymentCreateNestedManyWithoutEnrollmentInput
    Subject?: SubjectCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    studentId: number
    sectionId: number
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutEnrollmentInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUpdateInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Section?: SectionUpdateOneRequiredWithoutEnrollmentNestedInput
    Student?: StudentUpdateOneRequiredWithoutEnrollmentNestedInput
    Payment?: PaymentUpdateManyWithoutEnrollmentNestedInput
    Subject?: SubjectUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Payment?: PaymentUncheckedUpdateManyWithoutEnrollmentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    studentId: number
    sectionId: number
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EnrollmentUpdateManyMutationInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationCreateInput = {
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student: StudentCreateNestedOneWithoutEvaluationInput
    Subject: SubjectCreateNestedOneWithoutEvaluationInput
    Teacher: TeacherCreateNestedOneWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateInput = {
    id?: number
    studentId: number
    subjectId: number
    teacherId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EvaluationUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateOneRequiredWithoutEvaluationNestedInput
    Subject?: SubjectUpdateOneRequiredWithoutEvaluationNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationCreateManyInput = {
    id?: number
    studentId: number
    subjectId: number
    teacherId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EvaluationUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeCreateInput = {
    quarter: string
    grade: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student: StudentCreateNestedOneWithoutGradeInput
    Subject: SubjectCreateNestedOneWithoutGradeInput
  }

  export type GradeUncheckedCreateInput = {
    id?: number
    subjectId: number
    studentId: number
    quarter: string
    grade: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GradeUpdateInput = {
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateOneRequiredWithoutGradeNestedInput
    Subject?: SubjectUpdateOneRequiredWithoutGradeNestedInput
  }

  export type GradeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeCreateManyInput = {
    id?: number
    subjectId: number
    studentId: number
    quarter: string
    grade: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GradeUpdateManyMutationInput = {
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParentCreateInput = {
    contactNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutParentInput
    Student?: StudentCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateInput = {
    id?: number
    userId: number
    contactNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student?: StudentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentUpdateInput = {
    contactNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutParentNestedInput
    Student?: StudentUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    contactNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ParentCreateManyInput = {
    id?: number
    userId: number
    contactNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ParentUpdateManyMutationInput = {
    contactNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    contactNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateInput = {
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Enrollment: EnrollmentCreateNestedOneWithoutPaymentInput
    Student: StudentCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    studentId: number
    enrollmentId: number
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUpdateOneRequiredWithoutPaymentNestedInput
    Student?: StudentUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyInput = {
    id?: number
    studentId: number
    enrollmentId: number
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCardCreateInput = {
    schoolYear: string
    averageGrade: number
    rank: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student: StudentCreateNestedOneWithoutReportCardInput
  }

  export type ReportCardUncheckedCreateInput = {
    id?: number
    studentId: number
    schoolYear: string
    averageGrade: number
    rank: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReportCardUpdateInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    averageGrade?: FloatFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateOneRequiredWithoutReportCardNestedInput
  }

  export type ReportCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    averageGrade?: FloatFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCardCreateManyInput = {
    id?: number
    studentId: number
    schoolYear: string
    averageGrade: number
    rank: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReportCardUpdateManyMutationInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    averageGrade?: FloatFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    averageGrade?: FloatFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SectionCreateInput = {
    name: string
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Enrollment?: EnrollmentCreateNestedManyWithoutSectionInput
    Teacher: TeacherCreateNestedOneWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: number
    teacherId: number
    name: string
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUpdateManyWithoutSectionNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: number
    teacherId: number
    name: string
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentCreateInput = {
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationCreateNestedManyWithoutStudentInput
    Grade?: GradeCreateNestedManyWithoutStudentInput
    Payment?: PaymentCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardCreateNestedManyWithoutStudentInput
    Parent: ParentCreateNestedOneWithoutStudentInput
    User: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    userId: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutStudentInput
    Grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUpdateManyWithoutStudentNestedInput
    Grade?: GradeUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUpdateManyWithoutStudentNestedInput
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    User?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUncheckedUpdateManyWithoutStudentNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    userId: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StudentUpdateManyMutationInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubjectCreateInput = {
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationCreateNestedManyWithoutSubjectInput
    Grade?: GradeCreateNestedManyWithoutSubjectInput
    Enrollment: EnrollmentCreateNestedOneWithoutSubjectInput
    Teacher: TeacherCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    enrollmentId: number
    teacherId: number
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutSubjectInput
    Grade?: GradeUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUpdateManyWithoutSubjectNestedInput
    Grade?: GradeUpdateManyWithoutSubjectNestedInput
    Enrollment?: EnrollmentUpdateOneRequiredWithoutSubjectNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUncheckedUpdateManyWithoutSubjectNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    enrollmentId: number
    teacherId: number
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeacherCreateInput = {
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationCreateNestedManyWithoutTeacherInput
    Section?: SectionCreateNestedManyWithoutTeacherInput
    Subject?: SubjectCreateNestedManyWithoutTeacherInput
    User: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    userId: number
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutTeacherInput
    Section?: SectionUncheckedCreateNestedManyWithoutTeacherInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUpdateManyWithoutTeacherNestedInput
    Section?: SectionUpdateManyWithoutTeacherNestedInput
    Subject?: SubjectUpdateManyWithoutTeacherNestedInput
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUncheckedUpdateManyWithoutTeacherNestedInput
    Section?: SectionUncheckedUpdateManyWithoutTeacherNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    userId: number
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TeacherUpdateManyMutationInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type ParentNullableScalarRelationFilter = {
    is?: ParentWhereInput | null
    isNot?: ParentWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    name?: SortOrder
    passwordHashed?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    name?: SortOrder
    passwordHashed?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    name?: SortOrder
    passwordHashed?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
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

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    sectionId?: SortOrder
    schoolYear?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    sectionId?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    sectionId?: SortOrder
    schoolYear?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    sectionId?: SortOrder
    schoolYear?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    sectionId?: SortOrder
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type EvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    rating?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EvaluationAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    rating?: SortOrder
  }

  export type EvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    rating?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    rating?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EvaluationSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    rating?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GradeCountOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    studentId?: SortOrder
    quarter?: SortOrder
    grade?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GradeAvgOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    studentId?: SortOrder
    grade?: SortOrder
  }

  export type GradeMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    studentId?: SortOrder
    quarter?: SortOrder
    grade?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GradeMinOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    studentId?: SortOrder
    quarter?: SortOrder
    grade?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type GradeSumOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    studentId?: SortOrder
    grade?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ParentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ParentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnrollmentScalarRelationFilter = {
    is?: EnrollmentWhereInput
    isNot?: EnrollmentWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    enrollmentId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    enrollmentId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    enrollmentId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    enrollmentId?: SortOrder
    amount?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    referenceNumber?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    enrollmentId?: SortOrder
    amount?: SortOrder
  }

  export type ReportCardCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolYear?: SortOrder
    averageGrade?: SortOrder
    rank?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReportCardAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    averageGrade?: SortOrder
    rank?: SortOrder
  }

  export type ReportCardMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolYear?: SortOrder
    averageGrade?: SortOrder
    rank?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReportCardMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    schoolYear?: SortOrder
    averageGrade?: SortOrder
    rank?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ReportCardSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    averageGrade?: SortOrder
    rank?: SortOrder
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type EvaluationListRelationFilter = {
    every?: EvaluationWhereInput
    some?: EvaluationWhereInput
    none?: EvaluationWhereInput
  }

  export type GradeListRelationFilter = {
    every?: GradeWhereInput
    some?: GradeWhereInput
    none?: GradeWhereInput
  }

  export type ReportCardListRelationFilter = {
    every?: ReportCardWhereInput
    some?: ReportCardWhereInput
    none?: ReportCardWhereInput
  }

  export type ParentScalarRelationFilter = {
    is?: ParentWhereInput
    isNot?: ParentWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    studentNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    address?: SortOrder
    gradeLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    studentNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    address?: SortOrder
    gradeLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    studentNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    address?: SortOrder
    gradeLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    teacherId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    teacherId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    gradeLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
    enrollmentId?: SortOrder
    teacherId?: SortOrder
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeNumber?: SortOrder
    specialization?: SortOrder
    contactNumber?: SortOrder
    assignedSections?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeNumber?: SortOrder
    specialization?: SortOrder
    contactNumber?: SortOrder
    assignedSections?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeNumber?: SortOrder
    specialization?: SortOrder
    contactNumber?: SortOrder
    assignedSections?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ParentCreateNestedOneWithoutUserInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    connect?: ParentWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type ParentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    connect?: ParentWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type TeacherUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ParentUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    upsert?: ParentUpsertWithoutUserInput
    disconnect?: ParentWhereInput | boolean
    delete?: ParentWhereInput | boolean
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutUserInput, ParentUpdateWithoutUserInput>, ParentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParentCreateOrConnectWithoutUserInput
    upsert?: ParentUpsertWithoutUserInput
    disconnect?: ParentWhereInput | boolean
    delete?: ParentWhereInput | boolean
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutUserInput, ParentUpdateWithoutUserInput>, ParentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type StudentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StudentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    upsert?: StudentUpsertWithoutAttendanceInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendanceInput, StudentUpdateWithoutAttendanceInput>, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type SectionCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<SectionCreateWithoutEnrollmentInput, SectionUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: SectionCreateOrConnectWithoutEnrollmentInput
    connect?: SectionWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<StudentCreateWithoutEnrollmentInput, StudentUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentInput
    connect?: StudentWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<PaymentCreateWithoutEnrollmentInput, PaymentUncheckedCreateWithoutEnrollmentInput> | PaymentCreateWithoutEnrollmentInput[] | PaymentUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEnrollmentInput | PaymentCreateOrConnectWithoutEnrollmentInput[]
    createMany?: PaymentCreateManyEnrollmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<SubjectCreateWithoutEnrollmentInput, SubjectUncheckedCreateWithoutEnrollmentInput> | SubjectCreateWithoutEnrollmentInput[] | SubjectUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutEnrollmentInput | SubjectCreateOrConnectWithoutEnrollmentInput[]
    createMany?: SubjectCreateManyEnrollmentInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<PaymentCreateWithoutEnrollmentInput, PaymentUncheckedCreateWithoutEnrollmentInput> | PaymentCreateWithoutEnrollmentInput[] | PaymentUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEnrollmentInput | PaymentCreateOrConnectWithoutEnrollmentInput[]
    createMany?: PaymentCreateManyEnrollmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutEnrollmentInput = {
    create?: XOR<SubjectCreateWithoutEnrollmentInput, SubjectUncheckedCreateWithoutEnrollmentInput> | SubjectCreateWithoutEnrollmentInput[] | SubjectUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutEnrollmentInput | SubjectCreateOrConnectWithoutEnrollmentInput[]
    createMany?: SubjectCreateManyEnrollmentInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SectionUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<SectionCreateWithoutEnrollmentInput, SectionUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: SectionCreateOrConnectWithoutEnrollmentInput
    upsert?: SectionUpsertWithoutEnrollmentInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutEnrollmentInput, SectionUpdateWithoutEnrollmentInput>, SectionUncheckedUpdateWithoutEnrollmentInput>
  }

  export type StudentUpdateOneRequiredWithoutEnrollmentNestedInput = {
    create?: XOR<StudentCreateWithoutEnrollmentInput, StudentUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentInput
    upsert?: StudentUpsertWithoutEnrollmentInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutEnrollmentInput, StudentUpdateWithoutEnrollmentInput>, StudentUncheckedUpdateWithoutEnrollmentInput>
  }

  export type PaymentUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<PaymentCreateWithoutEnrollmentInput, PaymentUncheckedCreateWithoutEnrollmentInput> | PaymentCreateWithoutEnrollmentInput[] | PaymentUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEnrollmentInput | PaymentCreateOrConnectWithoutEnrollmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutEnrollmentInput | PaymentUpsertWithWhereUniqueWithoutEnrollmentInput[]
    createMany?: PaymentCreateManyEnrollmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutEnrollmentInput | PaymentUpdateWithWhereUniqueWithoutEnrollmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutEnrollmentInput | PaymentUpdateManyWithWhereWithoutEnrollmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<SubjectCreateWithoutEnrollmentInput, SubjectUncheckedCreateWithoutEnrollmentInput> | SubjectCreateWithoutEnrollmentInput[] | SubjectUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutEnrollmentInput | SubjectCreateOrConnectWithoutEnrollmentInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutEnrollmentInput | SubjectUpsertWithWhereUniqueWithoutEnrollmentInput[]
    createMany?: SubjectCreateManyEnrollmentInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutEnrollmentInput | SubjectUpdateWithWhereUniqueWithoutEnrollmentInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutEnrollmentInput | SubjectUpdateManyWithWhereWithoutEnrollmentInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<PaymentCreateWithoutEnrollmentInput, PaymentUncheckedCreateWithoutEnrollmentInput> | PaymentCreateWithoutEnrollmentInput[] | PaymentUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutEnrollmentInput | PaymentCreateOrConnectWithoutEnrollmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutEnrollmentInput | PaymentUpsertWithWhereUniqueWithoutEnrollmentInput[]
    createMany?: PaymentCreateManyEnrollmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutEnrollmentInput | PaymentUpdateWithWhereUniqueWithoutEnrollmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutEnrollmentInput | PaymentUpdateManyWithWhereWithoutEnrollmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutEnrollmentNestedInput = {
    create?: XOR<SubjectCreateWithoutEnrollmentInput, SubjectUncheckedCreateWithoutEnrollmentInput> | SubjectCreateWithoutEnrollmentInput[] | SubjectUncheckedCreateWithoutEnrollmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutEnrollmentInput | SubjectCreateOrConnectWithoutEnrollmentInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutEnrollmentInput | SubjectUpsertWithWhereUniqueWithoutEnrollmentInput[]
    createMany?: SubjectCreateManyEnrollmentInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutEnrollmentInput | SubjectUpdateWithWhereUniqueWithoutEnrollmentInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutEnrollmentInput | SubjectUpdateManyWithWhereWithoutEnrollmentInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutEvaluationInput = {
    create?: XOR<StudentCreateWithoutEvaluationInput, StudentUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEvaluationInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutEvaluationInput = {
    create?: XOR<SubjectCreateWithoutEvaluationInput, SubjectUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutEvaluationInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutEvaluationInput = {
    create?: XOR<TeacherCreateWithoutEvaluationInput, TeacherUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEvaluationInput
    connect?: TeacherWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutEvaluationNestedInput = {
    create?: XOR<StudentCreateWithoutEvaluationInput, StudentUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEvaluationInput
    upsert?: StudentUpsertWithoutEvaluationInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutEvaluationInput, StudentUpdateWithoutEvaluationInput>, StudentUncheckedUpdateWithoutEvaluationInput>
  }

  export type SubjectUpdateOneRequiredWithoutEvaluationNestedInput = {
    create?: XOR<SubjectCreateWithoutEvaluationInput, SubjectUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutEvaluationInput
    upsert?: SubjectUpsertWithoutEvaluationInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutEvaluationInput, SubjectUpdateWithoutEvaluationInput>, SubjectUncheckedUpdateWithoutEvaluationInput>
  }

  export type TeacherUpdateOneRequiredWithoutEvaluationNestedInput = {
    create?: XOR<TeacherCreateWithoutEvaluationInput, TeacherUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEvaluationInput
    upsert?: TeacherUpsertWithoutEvaluationInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutEvaluationInput, TeacherUpdateWithoutEvaluationInput>, TeacherUncheckedUpdateWithoutEvaluationInput>
  }

  export type StudentCreateNestedOneWithoutGradeInput = {
    create?: XOR<StudentCreateWithoutGradeInput, StudentUncheckedCreateWithoutGradeInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGradeInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutGradeInput = {
    create?: XOR<SubjectCreateWithoutGradeInput, SubjectUncheckedCreateWithoutGradeInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutGradeInput
    connect?: SubjectWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutGradeNestedInput = {
    create?: XOR<StudentCreateWithoutGradeInput, StudentUncheckedCreateWithoutGradeInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGradeInput
    upsert?: StudentUpsertWithoutGradeInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutGradeInput, StudentUpdateWithoutGradeInput>, StudentUncheckedUpdateWithoutGradeInput>
  }

  export type SubjectUpdateOneRequiredWithoutGradeNestedInput = {
    create?: XOR<SubjectCreateWithoutGradeInput, SubjectUncheckedCreateWithoutGradeInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutGradeInput
    upsert?: SubjectUpsertWithoutGradeInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutGradeInput, SubjectUpdateWithoutGradeInput>, SubjectUncheckedUpdateWithoutGradeInput>
  }

  export type UserCreateNestedOneWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentInput
    connect?: UserWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutParentInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput> | StudentCreateWithoutParentInput[] | StudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput | StudentCreateOrConnectWithoutParentInput[]
    createMany?: StudentCreateManyParentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput> | StudentCreateWithoutParentInput[] | StudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput | StudentCreateOrConnectWithoutParentInput[]
    createMany?: StudentCreateManyParentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
    connectOrCreate?: UserCreateOrConnectWithoutParentInput
    upsert?: UserUpsertWithoutParentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParentInput, UserUpdateWithoutParentInput>, UserUncheckedUpdateWithoutParentInput>
  }

  export type StudentUpdateManyWithoutParentNestedInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput> | StudentCreateWithoutParentInput[] | StudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput | StudentCreateOrConnectWithoutParentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutParentInput | StudentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StudentCreateManyParentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutParentInput | StudentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutParentInput | StudentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput> | StudentCreateWithoutParentInput[] | StudentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutParentInput | StudentCreateOrConnectWithoutParentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutParentInput | StudentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: StudentCreateManyParentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutParentInput | StudentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutParentInput | StudentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type EnrollmentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPaymentInput
    connect?: EnrollmentWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<StudentCreateWithoutPaymentInput, StudentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPaymentInput
    connect?: StudentWhereUniqueInput
  }

  export type EnrollmentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutPaymentInput
    upsert?: EnrollmentUpsertWithoutPaymentInput
    connect?: EnrollmentWhereUniqueInput
    update?: XOR<XOR<EnrollmentUpdateToOneWithWhereWithoutPaymentInput, EnrollmentUpdateWithoutPaymentInput>, EnrollmentUncheckedUpdateWithoutPaymentInput>
  }

  export type StudentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<StudentCreateWithoutPaymentInput, StudentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPaymentInput
    upsert?: StudentUpsertWithoutPaymentInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPaymentInput, StudentUpdateWithoutPaymentInput>, StudentUncheckedUpdateWithoutPaymentInput>
  }

  export type StudentCreateNestedOneWithoutReportCardInput = {
    create?: XOR<StudentCreateWithoutReportCardInput, StudentUncheckedCreateWithoutReportCardInput>
    connectOrCreate?: StudentCreateOrConnectWithoutReportCardInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutReportCardNestedInput = {
    create?: XOR<StudentCreateWithoutReportCardInput, StudentUncheckedCreateWithoutReportCardInput>
    connectOrCreate?: StudentCreateOrConnectWithoutReportCardInput
    upsert?: StudentUpsertWithoutReportCardInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutReportCardInput, StudentUpdateWithoutReportCardInput>, StudentUncheckedUpdateWithoutReportCardInput>
  }

  export type EnrollmentCreateNestedManyWithoutSectionInput = {
    create?: XOR<EnrollmentCreateWithoutSectionInput, EnrollmentUncheckedCreateWithoutSectionInput> | EnrollmentCreateWithoutSectionInput[] | EnrollmentUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSectionInput | EnrollmentCreateOrConnectWithoutSectionInput[]
    createMany?: EnrollmentCreateManySectionInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type TeacherCreateNestedOneWithoutSectionInput = {
    create?: XOR<TeacherCreateWithoutSectionInput, TeacherUncheckedCreateWithoutSectionInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSectionInput
    connect?: TeacherWhereUniqueInput
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<EnrollmentCreateWithoutSectionInput, EnrollmentUncheckedCreateWithoutSectionInput> | EnrollmentCreateWithoutSectionInput[] | EnrollmentUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSectionInput | EnrollmentCreateOrConnectWithoutSectionInput[]
    createMany?: EnrollmentCreateManySectionInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EnrollmentUpdateManyWithoutSectionNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSectionInput, EnrollmentUncheckedCreateWithoutSectionInput> | EnrollmentCreateWithoutSectionInput[] | EnrollmentUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSectionInput | EnrollmentCreateOrConnectWithoutSectionInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutSectionInput | EnrollmentUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: EnrollmentCreateManySectionInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutSectionInput | EnrollmentUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutSectionInput | EnrollmentUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type TeacherUpdateOneRequiredWithoutSectionNestedInput = {
    create?: XOR<TeacherCreateWithoutSectionInput, TeacherUncheckedCreateWithoutSectionInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSectionInput
    upsert?: TeacherUpsertWithoutSectionInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSectionInput, TeacherUpdateWithoutSectionInput>, TeacherUncheckedUpdateWithoutSectionInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSectionInput, EnrollmentUncheckedCreateWithoutSectionInput> | EnrollmentCreateWithoutSectionInput[] | EnrollmentUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSectionInput | EnrollmentCreateOrConnectWithoutSectionInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutSectionInput | EnrollmentUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: EnrollmentCreateManySectionInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutSectionInput | EnrollmentUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutSectionInput | EnrollmentUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EvaluationCreateNestedManyWithoutStudentInput = {
    create?: XOR<EvaluationCreateWithoutStudentInput, EvaluationUncheckedCreateWithoutStudentInput> | EvaluationCreateWithoutStudentInput[] | EvaluationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutStudentInput | EvaluationCreateOrConnectWithoutStudentInput[]
    createMany?: EvaluationCreateManyStudentInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type GradeCreateNestedManyWithoutStudentInput = {
    create?: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput> | GradeCreateWithoutStudentInput[] | GradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentInput | GradeCreateOrConnectWithoutStudentInput[]
    createMany?: GradeCreateManyStudentInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutStudentInput = {
    create?: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput> | PaymentCreateWithoutStudentInput[] | PaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStudentInput | PaymentCreateOrConnectWithoutStudentInput[]
    createMany?: PaymentCreateManyStudentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReportCardCreateNestedManyWithoutStudentInput = {
    create?: XOR<ReportCardCreateWithoutStudentInput, ReportCardUncheckedCreateWithoutStudentInput> | ReportCardCreateWithoutStudentInput[] | ReportCardUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReportCardCreateOrConnectWithoutStudentInput | ReportCardCreateOrConnectWithoutStudentInput[]
    createMany?: ReportCardCreateManyStudentInputEnvelope
    connect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
  }

  export type ParentCreateNestedOneWithoutStudentInput = {
    create?: XOR<ParentCreateWithoutStudentInput, ParentUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ParentCreateOrConnectWithoutStudentInput
    connect?: ParentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EvaluationCreateWithoutStudentInput, EvaluationUncheckedCreateWithoutStudentInput> | EvaluationCreateWithoutStudentInput[] | EvaluationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutStudentInput | EvaluationCreateOrConnectWithoutStudentInput[]
    createMany?: EvaluationCreateManyStudentInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput> | GradeCreateWithoutStudentInput[] | GradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentInput | GradeCreateOrConnectWithoutStudentInput[]
    createMany?: GradeCreateManyStudentInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput> | PaymentCreateWithoutStudentInput[] | PaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStudentInput | PaymentCreateOrConnectWithoutStudentInput[]
    createMany?: PaymentCreateManyStudentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReportCardUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ReportCardCreateWithoutStudentInput, ReportCardUncheckedCreateWithoutStudentInput> | ReportCardCreateWithoutStudentInput[] | ReportCardUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReportCardCreateOrConnectWithoutStudentInput | ReportCardCreateOrConnectWithoutStudentInput[]
    createMany?: ReportCardCreateManyStudentInputEnvelope
    connect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type EvaluationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EvaluationCreateWithoutStudentInput, EvaluationUncheckedCreateWithoutStudentInput> | EvaluationCreateWithoutStudentInput[] | EvaluationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutStudentInput | EvaluationCreateOrConnectWithoutStudentInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutStudentInput | EvaluationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EvaluationCreateManyStudentInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutStudentInput | EvaluationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutStudentInput | EvaluationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type GradeUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput> | GradeCreateWithoutStudentInput[] | GradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentInput | GradeCreateOrConnectWithoutStudentInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutStudentInput | GradeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GradeCreateManyStudentInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutStudentInput | GradeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutStudentInput | GradeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput> | PaymentCreateWithoutStudentInput[] | PaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStudentInput | PaymentCreateOrConnectWithoutStudentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutStudentInput | PaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PaymentCreateManyStudentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutStudentInput | PaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutStudentInput | PaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReportCardUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ReportCardCreateWithoutStudentInput, ReportCardUncheckedCreateWithoutStudentInput> | ReportCardCreateWithoutStudentInput[] | ReportCardUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReportCardCreateOrConnectWithoutStudentInput | ReportCardCreateOrConnectWithoutStudentInput[]
    upsert?: ReportCardUpsertWithWhereUniqueWithoutStudentInput | ReportCardUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ReportCardCreateManyStudentInputEnvelope
    set?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    disconnect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    delete?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    connect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    update?: ReportCardUpdateWithWhereUniqueWithoutStudentInput | ReportCardUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ReportCardUpdateManyWithWhereWithoutStudentInput | ReportCardUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ReportCardScalarWhereInput | ReportCardScalarWhereInput[]
  }

  export type ParentUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<ParentCreateWithoutStudentInput, ParentUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ParentCreateOrConnectWithoutStudentInput
    upsert?: ParentUpsertWithoutStudentInput
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutStudentInput, ParentUpdateWithoutStudentInput>, ParentUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EvaluationCreateWithoutStudentInput, EvaluationUncheckedCreateWithoutStudentInput> | EvaluationCreateWithoutStudentInput[] | EvaluationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutStudentInput | EvaluationCreateOrConnectWithoutStudentInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutStudentInput | EvaluationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EvaluationCreateManyStudentInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutStudentInput | EvaluationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutStudentInput | EvaluationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput> | GradeCreateWithoutStudentInput[] | GradeUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentInput | GradeCreateOrConnectWithoutStudentInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutStudentInput | GradeUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GradeCreateManyStudentInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutStudentInput | GradeUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutStudentInput | GradeUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput> | PaymentCreateWithoutStudentInput[] | PaymentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutStudentInput | PaymentCreateOrConnectWithoutStudentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutStudentInput | PaymentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PaymentCreateManyStudentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutStudentInput | PaymentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutStudentInput | PaymentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReportCardUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ReportCardCreateWithoutStudentInput, ReportCardUncheckedCreateWithoutStudentInput> | ReportCardCreateWithoutStudentInput[] | ReportCardUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ReportCardCreateOrConnectWithoutStudentInput | ReportCardCreateOrConnectWithoutStudentInput[]
    upsert?: ReportCardUpsertWithWhereUniqueWithoutStudentInput | ReportCardUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ReportCardCreateManyStudentInputEnvelope
    set?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    disconnect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    delete?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    connect?: ReportCardWhereUniqueInput | ReportCardWhereUniqueInput[]
    update?: ReportCardUpdateWithWhereUniqueWithoutStudentInput | ReportCardUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ReportCardUpdateManyWithWhereWithoutStudentInput | ReportCardUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ReportCardScalarWhereInput | ReportCardScalarWhereInput[]
  }

  export type EvaluationCreateNestedManyWithoutSubjectInput = {
    create?: XOR<EvaluationCreateWithoutSubjectInput, EvaluationUncheckedCreateWithoutSubjectInput> | EvaluationCreateWithoutSubjectInput[] | EvaluationUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutSubjectInput | EvaluationCreateOrConnectWithoutSubjectInput[]
    createMany?: EvaluationCreateManySubjectInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type GradeCreateNestedManyWithoutSubjectInput = {
    create?: XOR<GradeCreateWithoutSubjectInput, GradeUncheckedCreateWithoutSubjectInput> | GradeCreateWithoutSubjectInput[] | GradeUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutSubjectInput | GradeCreateOrConnectWithoutSubjectInput[]
    createMany?: GradeCreateManySubjectInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedOneWithoutSubjectInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput
    connect?: EnrollmentWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutSubjectInput = {
    create?: XOR<TeacherCreateWithoutSubjectInput, TeacherUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectInput
    connect?: TeacherWhereUniqueInput
  }

  export type EvaluationUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<EvaluationCreateWithoutSubjectInput, EvaluationUncheckedCreateWithoutSubjectInput> | EvaluationCreateWithoutSubjectInput[] | EvaluationUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutSubjectInput | EvaluationCreateOrConnectWithoutSubjectInput[]
    createMany?: EvaluationCreateManySubjectInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<GradeCreateWithoutSubjectInput, GradeUncheckedCreateWithoutSubjectInput> | GradeCreateWithoutSubjectInput[] | GradeUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutSubjectInput | GradeCreateOrConnectWithoutSubjectInput[]
    createMany?: GradeCreateManySubjectInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type EvaluationUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<EvaluationCreateWithoutSubjectInput, EvaluationUncheckedCreateWithoutSubjectInput> | EvaluationCreateWithoutSubjectInput[] | EvaluationUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutSubjectInput | EvaluationCreateOrConnectWithoutSubjectInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutSubjectInput | EvaluationUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: EvaluationCreateManySubjectInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutSubjectInput | EvaluationUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutSubjectInput | EvaluationUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type GradeUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<GradeCreateWithoutSubjectInput, GradeUncheckedCreateWithoutSubjectInput> | GradeCreateWithoutSubjectInput[] | GradeUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutSubjectInput | GradeCreateOrConnectWithoutSubjectInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutSubjectInput | GradeUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: GradeCreateManySubjectInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutSubjectInput | GradeUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutSubjectInput | GradeUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type EnrollmentUpdateOneRequiredWithoutSubjectNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput
    upsert?: EnrollmentUpsertWithoutSubjectInput
    connect?: EnrollmentWhereUniqueInput
    update?: XOR<XOR<EnrollmentUpdateToOneWithWhereWithoutSubjectInput, EnrollmentUpdateWithoutSubjectInput>, EnrollmentUncheckedUpdateWithoutSubjectInput>
  }

  export type TeacherUpdateOneRequiredWithoutSubjectNestedInput = {
    create?: XOR<TeacherCreateWithoutSubjectInput, TeacherUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectInput
    upsert?: TeacherUpsertWithoutSubjectInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSubjectInput, TeacherUpdateWithoutSubjectInput>, TeacherUncheckedUpdateWithoutSubjectInput>
  }

  export type EvaluationUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<EvaluationCreateWithoutSubjectInput, EvaluationUncheckedCreateWithoutSubjectInput> | EvaluationCreateWithoutSubjectInput[] | EvaluationUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutSubjectInput | EvaluationCreateOrConnectWithoutSubjectInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutSubjectInput | EvaluationUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: EvaluationCreateManySubjectInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutSubjectInput | EvaluationUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutSubjectInput | EvaluationUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<GradeCreateWithoutSubjectInput, GradeUncheckedCreateWithoutSubjectInput> | GradeCreateWithoutSubjectInput[] | GradeUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutSubjectInput | GradeCreateOrConnectWithoutSubjectInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutSubjectInput | GradeUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: GradeCreateManySubjectInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutSubjectInput | GradeUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutSubjectInput | GradeUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type EvaluationCreateNestedManyWithoutTeacherInput = {
    create?: XOR<EvaluationCreateWithoutTeacherInput, EvaluationUncheckedCreateWithoutTeacherInput> | EvaluationCreateWithoutTeacherInput[] | EvaluationUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutTeacherInput | EvaluationCreateOrConnectWithoutTeacherInput[]
    createMany?: EvaluationCreateManyTeacherInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type SectionCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SectionCreateWithoutTeacherInput, SectionUncheckedCreateWithoutTeacherInput> | SectionCreateWithoutTeacherInput[] | SectionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutTeacherInput | SectionCreateOrConnectWithoutTeacherInput[]
    createMany?: SectionCreateManyTeacherInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type EvaluationUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<EvaluationCreateWithoutTeacherInput, EvaluationUncheckedCreateWithoutTeacherInput> | EvaluationCreateWithoutTeacherInput[] | EvaluationUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutTeacherInput | EvaluationCreateOrConnectWithoutTeacherInput[]
    createMany?: EvaluationCreateManyTeacherInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SectionCreateWithoutTeacherInput, SectionUncheckedCreateWithoutTeacherInput> | SectionCreateWithoutTeacherInput[] | SectionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutTeacherInput | SectionCreateOrConnectWithoutTeacherInput[]
    createMany?: SectionCreateManyTeacherInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type EvaluationUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<EvaluationCreateWithoutTeacherInput, EvaluationUncheckedCreateWithoutTeacherInput> | EvaluationCreateWithoutTeacherInput[] | EvaluationUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutTeacherInput | EvaluationCreateOrConnectWithoutTeacherInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutTeacherInput | EvaluationUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: EvaluationCreateManyTeacherInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutTeacherInput | EvaluationUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutTeacherInput | EvaluationUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type SectionUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SectionCreateWithoutTeacherInput, SectionUncheckedCreateWithoutTeacherInput> | SectionCreateWithoutTeacherInput[] | SectionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutTeacherInput | SectionCreateOrConnectWithoutTeacherInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutTeacherInput | SectionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SectionCreateManyTeacherInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutTeacherInput | SectionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutTeacherInput | SectionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type EvaluationUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<EvaluationCreateWithoutTeacherInput, EvaluationUncheckedCreateWithoutTeacherInput> | EvaluationCreateWithoutTeacherInput[] | EvaluationUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutTeacherInput | EvaluationCreateOrConnectWithoutTeacherInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutTeacherInput | EvaluationUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: EvaluationCreateManyTeacherInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutTeacherInput | EvaluationUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutTeacherInput | EvaluationUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SectionCreateWithoutTeacherInput, SectionUncheckedCreateWithoutTeacherInput> | SectionCreateWithoutTeacherInput[] | SectionUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutTeacherInput | SectionCreateOrConnectWithoutTeacherInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutTeacherInput | SectionUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SectionCreateManyTeacherInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutTeacherInput | SectionUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutTeacherInput | SectionUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ParentCreateWithoutUserInput = {
    contactNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student?: StudentCreateNestedManyWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutUserInput = {
    id?: number
    contactNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student?: StudentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ParentCreateOrConnectWithoutUserInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateWithoutUserInput = {
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationCreateNestedManyWithoutStudentInput
    Grade?: GradeCreateNestedManyWithoutStudentInput
    Payment?: PaymentCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardCreateNestedManyWithoutStudentInput
    Parent: ParentCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutStudentInput
    Grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type TeacherCreateWithoutUserInput = {
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationCreateNestedManyWithoutTeacherInput
    Section?: SectionCreateNestedManyWithoutTeacherInput
    Subject?: SubjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    id?: number
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutTeacherInput
    Section?: SectionUncheckedCreateNestedManyWithoutTeacherInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type ParentUpsertWithoutUserInput = {
    update: XOR<ParentUpdateWithoutUserInput, ParentUncheckedUpdateWithoutUserInput>
    create: XOR<ParentCreateWithoutUserInput, ParentUncheckedCreateWithoutUserInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutUserInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutUserInput, ParentUncheckedUpdateWithoutUserInput>
  }

  export type ParentUpdateWithoutUserInput = {
    contactNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateManyWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contactNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUpdateManyWithoutStudentNestedInput
    Grade?: GradeUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUpdateManyWithoutStudentNestedInput
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUncheckedUpdateManyWithoutStudentNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TeacherUpsertWithoutUserInput = {
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateWithoutUserInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUpdateManyWithoutTeacherNestedInput
    Section?: SectionUpdateManyWithoutTeacherNestedInput
    Subject?: SubjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUncheckedUpdateManyWithoutTeacherNestedInput
    Section?: SectionUncheckedUpdateManyWithoutTeacherNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type StudentCreateWithoutAttendanceInput = {
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationCreateNestedManyWithoutStudentInput
    Grade?: GradeCreateNestedManyWithoutStudentInput
    Payment?: PaymentCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardCreateNestedManyWithoutStudentInput
    Parent: ParentCreateNestedOneWithoutStudentInput
    User: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttendanceInput = {
    id?: number
    userId: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutStudentInput
    Grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendanceInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
  }

  export type StudentUpsertWithoutAttendanceInput = {
    update: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentUpdateWithoutAttendanceInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUpdateManyWithoutStudentNestedInput
    Grade?: GradeUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUpdateManyWithoutStudentNestedInput
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    User?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUncheckedUpdateManyWithoutStudentNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SectionCreateWithoutEnrollmentInput = {
    name: string
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Teacher: TeacherCreateNestedOneWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    teacherId: number
    name: string
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SectionCreateOrConnectWithoutEnrollmentInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutEnrollmentInput, SectionUncheckedCreateWithoutEnrollmentInput>
  }

  export type StudentCreateWithoutEnrollmentInput = {
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationCreateNestedManyWithoutStudentInput
    Grade?: GradeCreateNestedManyWithoutStudentInput
    Payment?: PaymentCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardCreateNestedManyWithoutStudentInput
    Parent: ParentCreateNestedOneWithoutStudentInput
    User: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    userId: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutStudentInput
    Grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutEnrollmentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutEnrollmentInput, StudentUncheckedCreateWithoutEnrollmentInput>
  }

  export type PaymentCreateWithoutEnrollmentInput = {
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student: StudentCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    studentId: number
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutEnrollmentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutEnrollmentInput, PaymentUncheckedCreateWithoutEnrollmentInput>
  }

  export type PaymentCreateManyEnrollmentInputEnvelope = {
    data: PaymentCreateManyEnrollmentInput | PaymentCreateManyEnrollmentInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutEnrollmentInput = {
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationCreateNestedManyWithoutSubjectInput
    Grade?: GradeCreateNestedManyWithoutSubjectInput
    Teacher: TeacherCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutEnrollmentInput = {
    id?: number
    teacherId: number
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutSubjectInput
    Grade?: GradeUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutEnrollmentInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutEnrollmentInput, SubjectUncheckedCreateWithoutEnrollmentInput>
  }

  export type SubjectCreateManyEnrollmentInputEnvelope = {
    data: SubjectCreateManyEnrollmentInput | SubjectCreateManyEnrollmentInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithoutEnrollmentInput = {
    update: XOR<SectionUpdateWithoutEnrollmentInput, SectionUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<SectionCreateWithoutEnrollmentInput, SectionUncheckedCreateWithoutEnrollmentInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutEnrollmentInput, SectionUncheckedUpdateWithoutEnrollmentInput>
  }

  export type SectionUpdateWithoutEnrollmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Teacher?: TeacherUpdateOneRequiredWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentUpsertWithoutEnrollmentInput = {
    update: XOR<StudentUpdateWithoutEnrollmentInput, StudentUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<StudentCreateWithoutEnrollmentInput, StudentUncheckedCreateWithoutEnrollmentInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutEnrollmentInput, StudentUncheckedUpdateWithoutEnrollmentInput>
  }

  export type StudentUpdateWithoutEnrollmentInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUpdateManyWithoutStudentNestedInput
    Grade?: GradeUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUpdateManyWithoutStudentNestedInput
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    User?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUncheckedUpdateManyWithoutStudentNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutEnrollmentInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutEnrollmentInput, PaymentUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<PaymentCreateWithoutEnrollmentInput, PaymentUncheckedCreateWithoutEnrollmentInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutEnrollmentInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutEnrollmentInput, PaymentUncheckedUpdateWithoutEnrollmentInput>
  }

  export type PaymentUpdateManyWithWhereWithoutEnrollmentInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutEnrollmentInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    studentId?: IntFilter<"Payment"> | number
    enrollmentId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    paymentType?: StringFilter<"Payment"> | string
    paymentMethod?: StringFilter<"Payment"> | string
    referenceNumber?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
  }

  export type SubjectUpsertWithWhereUniqueWithoutEnrollmentInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutEnrollmentInput, SubjectUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<SubjectCreateWithoutEnrollmentInput, SubjectUncheckedCreateWithoutEnrollmentInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutEnrollmentInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutEnrollmentInput, SubjectUncheckedUpdateWithoutEnrollmentInput>
  }

  export type SubjectUpdateManyWithWhereWithoutEnrollmentInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutEnrollmentInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: IntFilter<"Subject"> | number
    enrollmentId?: IntFilter<"Subject"> | number
    teacherId?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    gradeLevel?: StringFilter<"Subject"> | string
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Subject"> | Date | string | null
  }

  export type StudentCreateWithoutEvaluationInput = {
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Grade?: GradeCreateNestedManyWithoutStudentInput
    Payment?: PaymentCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardCreateNestedManyWithoutStudentInput
    Parent: ParentCreateNestedOneWithoutStudentInput
    User: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutEvaluationInput = {
    id?: number
    userId: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutEvaluationInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutEvaluationInput, StudentUncheckedCreateWithoutEvaluationInput>
  }

  export type SubjectCreateWithoutEvaluationInput = {
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Grade?: GradeCreateNestedManyWithoutSubjectInput
    Enrollment: EnrollmentCreateNestedOneWithoutSubjectInput
    Teacher: TeacherCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutEvaluationInput = {
    id?: number
    enrollmentId: number
    teacherId: number
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Grade?: GradeUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutEvaluationInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutEvaluationInput, SubjectUncheckedCreateWithoutEvaluationInput>
  }

  export type TeacherCreateWithoutEvaluationInput = {
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Section?: SectionCreateNestedManyWithoutTeacherInput
    Subject?: SubjectCreateNestedManyWithoutTeacherInput
    User: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutEvaluationInput = {
    id?: number
    userId: number
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Section?: SectionUncheckedCreateNestedManyWithoutTeacherInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutEvaluationInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutEvaluationInput, TeacherUncheckedCreateWithoutEvaluationInput>
  }

  export type StudentUpsertWithoutEvaluationInput = {
    update: XOR<StudentUpdateWithoutEvaluationInput, StudentUncheckedUpdateWithoutEvaluationInput>
    create: XOR<StudentCreateWithoutEvaluationInput, StudentUncheckedCreateWithoutEvaluationInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutEvaluationInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutEvaluationInput, StudentUncheckedUpdateWithoutEvaluationInput>
  }

  export type StudentUpdateWithoutEvaluationInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Grade?: GradeUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUpdateManyWithoutStudentNestedInput
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    User?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutEvaluationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectUpsertWithoutEvaluationInput = {
    update: XOR<SubjectUpdateWithoutEvaluationInput, SubjectUncheckedUpdateWithoutEvaluationInput>
    create: XOR<SubjectCreateWithoutEvaluationInput, SubjectUncheckedCreateWithoutEvaluationInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutEvaluationInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutEvaluationInput, SubjectUncheckedUpdateWithoutEvaluationInput>
  }

  export type SubjectUpdateWithoutEvaluationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Grade?: GradeUpdateManyWithoutSubjectNestedInput
    Enrollment?: EnrollmentUpdateOneRequiredWithoutSubjectNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutEvaluationInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Grade?: GradeUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type TeacherUpsertWithoutEvaluationInput = {
    update: XOR<TeacherUpdateWithoutEvaluationInput, TeacherUncheckedUpdateWithoutEvaluationInput>
    create: XOR<TeacherCreateWithoutEvaluationInput, TeacherUncheckedCreateWithoutEvaluationInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutEvaluationInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutEvaluationInput, TeacherUncheckedUpdateWithoutEvaluationInput>
  }

  export type TeacherUpdateWithoutEvaluationInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Section?: SectionUpdateManyWithoutTeacherNestedInput
    Subject?: SubjectUpdateManyWithoutTeacherNestedInput
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutEvaluationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Section?: SectionUncheckedUpdateManyWithoutTeacherNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type StudentCreateWithoutGradeInput = {
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationCreateNestedManyWithoutStudentInput
    Payment?: PaymentCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardCreateNestedManyWithoutStudentInput
    Parent: ParentCreateNestedOneWithoutStudentInput
    User: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutGradeInput = {
    id?: number
    userId: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutStudentInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGradeInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGradeInput, StudentUncheckedCreateWithoutGradeInput>
  }

  export type SubjectCreateWithoutGradeInput = {
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationCreateNestedManyWithoutSubjectInput
    Enrollment: EnrollmentCreateNestedOneWithoutSubjectInput
    Teacher: TeacherCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutGradeInput = {
    id?: number
    enrollmentId: number
    teacherId: number
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutGradeInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutGradeInput, SubjectUncheckedCreateWithoutGradeInput>
  }

  export type StudentUpsertWithoutGradeInput = {
    update: XOR<StudentUpdateWithoutGradeInput, StudentUncheckedUpdateWithoutGradeInput>
    create: XOR<StudentCreateWithoutGradeInput, StudentUncheckedCreateWithoutGradeInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutGradeInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutGradeInput, StudentUncheckedUpdateWithoutGradeInput>
  }

  export type StudentUpdateWithoutGradeInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUpdateManyWithoutStudentNestedInput
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    User?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutGradeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUncheckedUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectUpsertWithoutGradeInput = {
    update: XOR<SubjectUpdateWithoutGradeInput, SubjectUncheckedUpdateWithoutGradeInput>
    create: XOR<SubjectCreateWithoutGradeInput, SubjectUncheckedCreateWithoutGradeInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutGradeInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutGradeInput, SubjectUncheckedUpdateWithoutGradeInput>
  }

  export type SubjectUpdateWithoutGradeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUpdateManyWithoutSubjectNestedInput
    Enrollment?: EnrollmentUpdateOneRequiredWithoutSubjectNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutGradeInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type UserCreateWithoutParentInput = {
    email: string
    role?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    passwordHashed: string
    updatedAt?: Date | string
    Student?: StudentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: number
    email: string
    role?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    passwordHashed: string
    updatedAt?: Date | string
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type StudentCreateWithoutParentInput = {
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationCreateNestedManyWithoutStudentInput
    Grade?: GradeCreateNestedManyWithoutStudentInput
    Payment?: PaymentCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardCreateNestedManyWithoutStudentInput
    User: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutParentInput = {
    id?: number
    userId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutStudentInput
    Grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutParentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
  }

  export type StudentCreateManyParentInputEnvelope = {
    data: StudentCreateManyParentInput | StudentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParentInput = {
    update: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
  }

  export type UserUpdateWithoutParentInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutParentInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutParentInput, StudentUncheckedUpdateWithoutParentInput>
    create: XOR<StudentCreateWithoutParentInput, StudentUncheckedCreateWithoutParentInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutParentInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutParentInput, StudentUncheckedUpdateWithoutParentInput>
  }

  export type StudentUpdateManyWithWhereWithoutParentInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutParentInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    userId?: IntFilter<"Student"> | number
    parentId?: IntFilter<"Student"> | number
    studentNumber?: StringFilter<"Student"> | string
    dateOfBirth?: DateTimeFilter<"Student"> | Date | string
    gender?: StringFilter<"Student"> | string
    guardianName?: StringFilter<"Student"> | string
    guardianContact?: StringFilter<"Student"> | string
    address?: StringFilter<"Student"> | string
    gradeLevel?: StringFilter<"Student"> | string
    status?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
  }

  export type EnrollmentCreateWithoutPaymentInput = {
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Section: SectionCreateNestedOneWithoutEnrollmentInput
    Student: StudentCreateNestedOneWithoutEnrollmentInput
    Subject?: SubjectCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutPaymentInput = {
    id?: number
    studentId: number
    sectionId: number
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Subject?: SubjectUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutPaymentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput>
  }

  export type StudentCreateWithoutPaymentInput = {
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationCreateNestedManyWithoutStudentInput
    Grade?: GradeCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardCreateNestedManyWithoutStudentInput
    Parent: ParentCreateNestedOneWithoutStudentInput
    User: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutPaymentInput = {
    id?: number
    userId: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutStudentInput
    Grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
    ReportCard?: ReportCardUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutPaymentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPaymentInput, StudentUncheckedCreateWithoutPaymentInput>
  }

  export type EnrollmentUpsertWithoutPaymentInput = {
    update: XOR<EnrollmentUpdateWithoutPaymentInput, EnrollmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<EnrollmentCreateWithoutPaymentInput, EnrollmentUncheckedCreateWithoutPaymentInput>
    where?: EnrollmentWhereInput
  }

  export type EnrollmentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: EnrollmentWhereInput
    data: XOR<EnrollmentUpdateWithoutPaymentInput, EnrollmentUncheckedUpdateWithoutPaymentInput>
  }

  export type EnrollmentUpdateWithoutPaymentInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Section?: SectionUpdateOneRequiredWithoutEnrollmentNestedInput
    Student?: StudentUpdateOneRequiredWithoutEnrollmentNestedInput
    Subject?: SubjectUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subject?: SubjectUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type StudentUpsertWithoutPaymentInput = {
    update: XOR<StudentUpdateWithoutPaymentInput, StudentUncheckedUpdateWithoutPaymentInput>
    create: XOR<StudentCreateWithoutPaymentInput, StudentUncheckedCreateWithoutPaymentInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPaymentInput, StudentUncheckedUpdateWithoutPaymentInput>
  }

  export type StudentUpdateWithoutPaymentInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUpdateManyWithoutStudentNestedInput
    Grade?: GradeUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUpdateManyWithoutStudentNestedInput
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    User?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUncheckedUpdateManyWithoutStudentNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutReportCardInput = {
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationCreateNestedManyWithoutStudentInput
    Grade?: GradeCreateNestedManyWithoutStudentInput
    Payment?: PaymentCreateNestedManyWithoutStudentInput
    Parent: ParentCreateNestedOneWithoutStudentInput
    User: UserCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutReportCardInput = {
    id?: number
    userId: number
    parentId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutStudentInput
    Grade?: GradeUncheckedCreateNestedManyWithoutStudentInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutReportCardInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutReportCardInput, StudentUncheckedCreateWithoutReportCardInput>
  }

  export type StudentUpsertWithoutReportCardInput = {
    update: XOR<StudentUpdateWithoutReportCardInput, StudentUncheckedUpdateWithoutReportCardInput>
    create: XOR<StudentCreateWithoutReportCardInput, StudentUncheckedCreateWithoutReportCardInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutReportCardInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutReportCardInput, StudentUncheckedUpdateWithoutReportCardInput>
  }

  export type StudentUpdateWithoutReportCardInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUpdateManyWithoutStudentNestedInput
    Grade?: GradeUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUpdateManyWithoutStudentNestedInput
    Parent?: ParentUpdateOneRequiredWithoutStudentNestedInput
    User?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutReportCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUncheckedUpdateManyWithoutStudentNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type EnrollmentCreateWithoutSectionInput = {
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student: StudentCreateNestedOneWithoutEnrollmentInput
    Payment?: PaymentCreateNestedManyWithoutEnrollmentInput
    Subject?: SubjectCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutSectionInput = {
    id?: number
    studentId: number
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutEnrollmentInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutSectionInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutSectionInput, EnrollmentUncheckedCreateWithoutSectionInput>
  }

  export type EnrollmentCreateManySectionInputEnvelope = {
    data: EnrollmentCreateManySectionInput | EnrollmentCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutSectionInput = {
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationCreateNestedManyWithoutTeacherInput
    Subject?: SubjectCreateNestedManyWithoutTeacherInput
    User: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSectionInput = {
    id?: number
    userId: number
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutTeacherInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSectionInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSectionInput, TeacherUncheckedCreateWithoutSectionInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutSectionInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutSectionInput, EnrollmentUncheckedUpdateWithoutSectionInput>
    create: XOR<EnrollmentCreateWithoutSectionInput, EnrollmentUncheckedCreateWithoutSectionInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutSectionInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutSectionInput, EnrollmentUncheckedUpdateWithoutSectionInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutSectionInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutSectionInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    studentId?: IntFilter<"Enrollment"> | number
    sectionId?: IntFilter<"Enrollment"> | number
    schoolYear?: StringFilter<"Enrollment"> | string
    status?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Enrollment"> | Date | string | null
  }

  export type TeacherUpsertWithoutSectionInput = {
    update: XOR<TeacherUpdateWithoutSectionInput, TeacherUncheckedUpdateWithoutSectionInput>
    create: XOR<TeacherCreateWithoutSectionInput, TeacherUncheckedCreateWithoutSectionInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSectionInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSectionInput, TeacherUncheckedUpdateWithoutSectionInput>
  }

  export type TeacherUpdateWithoutSectionInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUpdateManyWithoutTeacherNestedInput
    Subject?: SubjectUpdateManyWithoutTeacherNestedInput
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUncheckedUpdateManyWithoutTeacherNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type AttendanceCreateWithoutStudentInput = {
    date: Date | string
    status: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: number
    date: Date | string
    status: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutStudentInput = {
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Section: SectionCreateNestedOneWithoutEnrollmentInput
    Payment?: PaymentCreateNestedManyWithoutEnrollmentInput
    Subject?: SubjectCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentInput = {
    id?: number
    sectionId: number
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutEnrollmentInput
    Subject?: SubjectUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentCreateManyStudentInputEnvelope = {
    data: EnrollmentCreateManyStudentInput | EnrollmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationCreateWithoutStudentInput = {
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Subject: SubjectCreateNestedOneWithoutEvaluationInput
    Teacher: TeacherCreateNestedOneWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutStudentInput = {
    id?: number
    subjectId: number
    teacherId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EvaluationCreateOrConnectWithoutStudentInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutStudentInput, EvaluationUncheckedCreateWithoutStudentInput>
  }

  export type EvaluationCreateManyStudentInputEnvelope = {
    data: EvaluationCreateManyStudentInput | EvaluationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type GradeCreateWithoutStudentInput = {
    quarter: string
    grade: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Subject: SubjectCreateNestedOneWithoutGradeInput
  }

  export type GradeUncheckedCreateWithoutStudentInput = {
    id?: number
    subjectId: number
    quarter: string
    grade: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GradeCreateOrConnectWithoutStudentInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput>
  }

  export type GradeCreateManyStudentInputEnvelope = {
    data: GradeCreateManyStudentInput | GradeCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutStudentInput = {
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Enrollment: EnrollmentCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutStudentInput = {
    id?: number
    enrollmentId: number
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutStudentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput>
  }

  export type PaymentCreateManyStudentInputEnvelope = {
    data: PaymentCreateManyStudentInput | PaymentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ReportCardCreateWithoutStudentInput = {
    schoolYear: string
    averageGrade: number
    rank: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReportCardUncheckedCreateWithoutStudentInput = {
    id?: number
    schoolYear: string
    averageGrade: number
    rank: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReportCardCreateOrConnectWithoutStudentInput = {
    where: ReportCardWhereUniqueInput
    create: XOR<ReportCardCreateWithoutStudentInput, ReportCardUncheckedCreateWithoutStudentInput>
  }

  export type ReportCardCreateManyStudentInputEnvelope = {
    data: ReportCardCreateManyStudentInput | ReportCardCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ParentCreateWithoutStudentInput = {
    contactNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutParentInput
  }

  export type ParentUncheckedCreateWithoutStudentInput = {
    id?: number
    userId: number
    contactNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ParentCreateOrConnectWithoutStudentInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutStudentInput, ParentUncheckedCreateWithoutStudentInput>
  }

  export type UserCreateWithoutStudentInput = {
    email: string
    role?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    passwordHashed: string
    updatedAt?: Date | string
    Parent?: ParentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: number
    email: string
    role?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    passwordHashed: string
    updatedAt?: Date | string
    Parent?: ParentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: IntFilter<"Attendance"> | number
    studentId?: IntFilter<"Attendance"> | number
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    remarks?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type EvaluationUpsertWithWhereUniqueWithoutStudentInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutStudentInput, EvaluationUncheckedUpdateWithoutStudentInput>
    create: XOR<EvaluationCreateWithoutStudentInput, EvaluationUncheckedCreateWithoutStudentInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutStudentInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutStudentInput, EvaluationUncheckedUpdateWithoutStudentInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutStudentInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutStudentInput>
  }

  export type EvaluationScalarWhereInput = {
    AND?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    OR?: EvaluationScalarWhereInput[]
    NOT?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    id?: IntFilter<"Evaluation"> | number
    studentId?: IntFilter<"Evaluation"> | number
    subjectId?: IntFilter<"Evaluation"> | number
    teacherId?: IntFilter<"Evaluation"> | number
    rating?: IntFilter<"Evaluation"> | number
    comments?: StringNullableFilter<"Evaluation"> | string | null
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    updatedAt?: DateTimeFilter<"Evaluation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Evaluation"> | Date | string | null
  }

  export type GradeUpsertWithWhereUniqueWithoutStudentInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutStudentInput, GradeUncheckedUpdateWithoutStudentInput>
    create: XOR<GradeCreateWithoutStudentInput, GradeUncheckedCreateWithoutStudentInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutStudentInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutStudentInput, GradeUncheckedUpdateWithoutStudentInput>
  }

  export type GradeUpdateManyWithWhereWithoutStudentInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutStudentInput>
  }

  export type GradeScalarWhereInput = {
    AND?: GradeScalarWhereInput | GradeScalarWhereInput[]
    OR?: GradeScalarWhereInput[]
    NOT?: GradeScalarWhereInput | GradeScalarWhereInput[]
    id?: IntFilter<"Grade"> | number
    subjectId?: IntFilter<"Grade"> | number
    studentId?: IntFilter<"Grade"> | number
    quarter?: StringFilter<"Grade"> | string
    grade?: FloatFilter<"Grade"> | number
    remarks?: StringNullableFilter<"Grade"> | string | null
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Grade"> | Date | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutStudentInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutStudentInput, PaymentUncheckedUpdateWithoutStudentInput>
    create: XOR<PaymentCreateWithoutStudentInput, PaymentUncheckedCreateWithoutStudentInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutStudentInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutStudentInput, PaymentUncheckedUpdateWithoutStudentInput>
  }

  export type PaymentUpdateManyWithWhereWithoutStudentInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutStudentInput>
  }

  export type ReportCardUpsertWithWhereUniqueWithoutStudentInput = {
    where: ReportCardWhereUniqueInput
    update: XOR<ReportCardUpdateWithoutStudentInput, ReportCardUncheckedUpdateWithoutStudentInput>
    create: XOR<ReportCardCreateWithoutStudentInput, ReportCardUncheckedCreateWithoutStudentInput>
  }

  export type ReportCardUpdateWithWhereUniqueWithoutStudentInput = {
    where: ReportCardWhereUniqueInput
    data: XOR<ReportCardUpdateWithoutStudentInput, ReportCardUncheckedUpdateWithoutStudentInput>
  }

  export type ReportCardUpdateManyWithWhereWithoutStudentInput = {
    where: ReportCardScalarWhereInput
    data: XOR<ReportCardUpdateManyMutationInput, ReportCardUncheckedUpdateManyWithoutStudentInput>
  }

  export type ReportCardScalarWhereInput = {
    AND?: ReportCardScalarWhereInput | ReportCardScalarWhereInput[]
    OR?: ReportCardScalarWhereInput[]
    NOT?: ReportCardScalarWhereInput | ReportCardScalarWhereInput[]
    id?: IntFilter<"ReportCard"> | number
    studentId?: IntFilter<"ReportCard"> | number
    schoolYear?: StringFilter<"ReportCard"> | string
    averageGrade?: FloatFilter<"ReportCard"> | number
    rank?: IntFilter<"ReportCard"> | number
    remarks?: StringNullableFilter<"ReportCard"> | string | null
    createdAt?: DateTimeFilter<"ReportCard"> | Date | string
    updatedAt?: DateTimeFilter<"ReportCard"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ReportCard"> | Date | string | null
  }

  export type ParentUpsertWithoutStudentInput = {
    update: XOR<ParentUpdateWithoutStudentInput, ParentUncheckedUpdateWithoutStudentInput>
    create: XOR<ParentCreateWithoutStudentInput, ParentUncheckedCreateWithoutStudentInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutStudentInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutStudentInput, ParentUncheckedUpdateWithoutStudentInput>
  }

  export type ParentUpdateWithoutStudentInput = {
    contactNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutParentNestedInput
  }

  export type ParentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    contactNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EvaluationCreateWithoutSubjectInput = {
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student: StudentCreateNestedOneWithoutEvaluationInput
    Teacher: TeacherCreateNestedOneWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentId: number
    teacherId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EvaluationCreateOrConnectWithoutSubjectInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutSubjectInput, EvaluationUncheckedCreateWithoutSubjectInput>
  }

  export type EvaluationCreateManySubjectInputEnvelope = {
    data: EvaluationCreateManySubjectInput | EvaluationCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type GradeCreateWithoutSubjectInput = {
    quarter: string
    grade: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student: StudentCreateNestedOneWithoutGradeInput
  }

  export type GradeUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentId: number
    quarter: string
    grade: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GradeCreateOrConnectWithoutSubjectInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutSubjectInput, GradeUncheckedCreateWithoutSubjectInput>
  }

  export type GradeCreateManySubjectInputEnvelope = {
    data: GradeCreateManySubjectInput | GradeCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutSubjectInput = {
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Section: SectionCreateNestedOneWithoutEnrollmentInput
    Student: StudentCreateNestedOneWithoutEnrollmentInput
    Payment?: PaymentCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentId: number
    sectionId: number
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutEnrollmentInput
  }

  export type EnrollmentCreateOrConnectWithoutSubjectInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherCreateWithoutSubjectInput = {
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationCreateNestedManyWithoutTeacherInput
    Section?: SectionCreateNestedManyWithoutTeacherInput
    User: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSubjectInput = {
    id?: number
    userId: number
    employeeNumber: string
    specialization: string
    contactNumber: string
    assignedSections?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutTeacherInput
    Section?: SectionUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSubjectInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSubjectInput, TeacherUncheckedCreateWithoutSubjectInput>
  }

  export type EvaluationUpsertWithWhereUniqueWithoutSubjectInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutSubjectInput, EvaluationUncheckedUpdateWithoutSubjectInput>
    create: XOR<EvaluationCreateWithoutSubjectInput, EvaluationUncheckedCreateWithoutSubjectInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutSubjectInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutSubjectInput, EvaluationUncheckedUpdateWithoutSubjectInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutSubjectInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutSubjectInput>
  }

  export type GradeUpsertWithWhereUniqueWithoutSubjectInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutSubjectInput, GradeUncheckedUpdateWithoutSubjectInput>
    create: XOR<GradeCreateWithoutSubjectInput, GradeUncheckedCreateWithoutSubjectInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutSubjectInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutSubjectInput, GradeUncheckedUpdateWithoutSubjectInput>
  }

  export type GradeUpdateManyWithWhereWithoutSubjectInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutSubjectInput>
  }

  export type EnrollmentUpsertWithoutSubjectInput = {
    update: XOR<EnrollmentUpdateWithoutSubjectInput, EnrollmentUncheckedUpdateWithoutSubjectInput>
    create: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput>
    where?: EnrollmentWhereInput
  }

  export type EnrollmentUpdateToOneWithWhereWithoutSubjectInput = {
    where?: EnrollmentWhereInput
    data: XOR<EnrollmentUpdateWithoutSubjectInput, EnrollmentUncheckedUpdateWithoutSubjectInput>
  }

  export type EnrollmentUpdateWithoutSubjectInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Section?: SectionUpdateOneRequiredWithoutEnrollmentNestedInput
    Student?: StudentUpdateOneRequiredWithoutEnrollmentNestedInput
    Payment?: PaymentUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Payment?: PaymentUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type TeacherUpsertWithoutSubjectInput = {
    update: XOR<TeacherUpdateWithoutSubjectInput, TeacherUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeacherCreateWithoutSubjectInput, TeacherUncheckedCreateWithoutSubjectInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSubjectInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSubjectInput, TeacherUncheckedUpdateWithoutSubjectInput>
  }

  export type TeacherUpdateWithoutSubjectInput = {
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUpdateManyWithoutTeacherNestedInput
    Section?: SectionUpdateManyWithoutTeacherNestedInput
    User?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    employeeNumber?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    assignedSections?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUncheckedUpdateManyWithoutTeacherNestedInput
    Section?: SectionUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type EvaluationCreateWithoutTeacherInput = {
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Student: StudentCreateNestedOneWithoutEvaluationInput
    Subject: SubjectCreateNestedOneWithoutEvaluationInput
  }

  export type EvaluationUncheckedCreateWithoutTeacherInput = {
    id?: number
    studentId: number
    subjectId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EvaluationCreateOrConnectWithoutTeacherInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutTeacherInput, EvaluationUncheckedCreateWithoutTeacherInput>
  }

  export type EvaluationCreateManyTeacherInputEnvelope = {
    data: EvaluationCreateManyTeacherInput | EvaluationCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type SectionCreateWithoutTeacherInput = {
    name: string
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Enrollment?: EnrollmentCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Enrollment?: EnrollmentUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutTeacherInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutTeacherInput, SectionUncheckedCreateWithoutTeacherInput>
  }

  export type SectionCreateManyTeacherInputEnvelope = {
    data: SectionCreateManyTeacherInput | SectionCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutTeacherInput = {
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationCreateNestedManyWithoutSubjectInput
    Grade?: GradeCreateNestedManyWithoutSubjectInput
    Enrollment: EnrollmentCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeacherInput = {
    id?: number
    enrollmentId: number
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    Evaluation?: EvaluationUncheckedCreateNestedManyWithoutSubjectInput
    Grade?: GradeUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectCreateManyTeacherInputEnvelope = {
    data: SubjectCreateManyTeacherInput | SubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTeacherInput = {
    email: string
    role?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    passwordHashed: string
    updatedAt?: Date | string
    Parent?: ParentCreateNestedOneWithoutUserInput
    Student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: number
    email: string
    role?: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    name: string
    passwordHashed: string
    updatedAt?: Date | string
    Parent?: ParentUncheckedCreateNestedOneWithoutUserInput
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type EvaluationUpsertWithWhereUniqueWithoutTeacherInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutTeacherInput, EvaluationUncheckedUpdateWithoutTeacherInput>
    create: XOR<EvaluationCreateWithoutTeacherInput, EvaluationUncheckedCreateWithoutTeacherInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutTeacherInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutTeacherInput, EvaluationUncheckedUpdateWithoutTeacherInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutTeacherInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutTeacherInput>
  }

  export type SectionUpsertWithWhereUniqueWithoutTeacherInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutTeacherInput, SectionUncheckedUpdateWithoutTeacherInput>
    create: XOR<SectionCreateWithoutTeacherInput, SectionUncheckedCreateWithoutTeacherInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutTeacherInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutTeacherInput, SectionUncheckedUpdateWithoutTeacherInput>
  }

  export type SectionUpdateManyWithWhereWithoutTeacherInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutTeacherInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: IntFilter<"Section"> | number
    teacherId?: IntFilter<"Section"> | number
    name?: StringFilter<"Section"> | string
    gradeLevel?: StringFilter<"Section"> | string
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Section"> | Date | string | null
  }

  export type SubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type SubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type UserUpsertWithoutTeacherInput = {
    update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type UserUpdateWithoutTeacherInput = {
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUpdateOneWithoutUserNestedInput
    Student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: StringFieldUpdateOperationsInput | string
    passwordHashed?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parent?: ParentUncheckedUpdateOneWithoutUserNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PaymentCreateManyEnrollmentInput = {
    id?: number
    studentId: number
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubjectCreateManyEnrollmentInput = {
    id?: number
    teacherId: number
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentUpdateWithoutEnrollmentInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubjectUpdateWithoutEnrollmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUpdateManyWithoutSubjectNestedInput
    Grade?: GradeUpdateManyWithoutSubjectNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUncheckedUpdateManyWithoutSubjectNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutEnrollmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentCreateManyParentInput = {
    id?: number
    userId: number
    studentNumber: string
    dateOfBirth: Date | string
    gender: string
    guardianName: string
    guardianContact: string
    address: string
    gradeLevel: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type StudentUpdateWithoutParentInput = {
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUpdateManyWithoutStudentNestedInput
    Grade?: GradeUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUpdateManyWithoutStudentNestedInput
    User?: UserUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    Evaluation?: EvaluationUncheckedUpdateManyWithoutStudentNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutStudentNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutStudentNestedInput
    ReportCard?: ReportCardUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    studentNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentCreateManySectionInput = {
    id?: number
    studentId: number
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EnrollmentUpdateWithoutSectionInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateOneRequiredWithoutEnrollmentNestedInput
    Payment?: PaymentUpdateManyWithoutEnrollmentNestedInput
    Subject?: SubjectUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Payment?: PaymentUncheckedUpdateManyWithoutEnrollmentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateManyStudentInput = {
    id?: number
    date: Date | string
    status: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EnrollmentCreateManyStudentInput = {
    id?: number
    sectionId: number
    schoolYear: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EvaluationCreateManyStudentInput = {
    id?: number
    subjectId: number
    teacherId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GradeCreateManyStudentInput = {
    id?: number
    subjectId: number
    quarter: string
    grade: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PaymentCreateManyStudentInput = {
    id?: number
    enrollmentId: number
    amount: number
    paymentType: string
    paymentMethod: string
    referenceNumber: string
    status: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReportCardCreateManyStudentInput = {
    id?: number
    schoolYear: string
    averageGrade: number
    rank: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AttendanceUpdateWithoutStudentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnrollmentUpdateWithoutStudentInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Section?: SectionUpdateOneRequiredWithoutEnrollmentNestedInput
    Payment?: PaymentUpdateManyWithoutEnrollmentNestedInput
    Subject?: SubjectUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Payment?: PaymentUncheckedUpdateManyWithoutEnrollmentNestedInput
    Subject?: SubjectUncheckedUpdateManyWithoutEnrollmentNestedInput
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationUpdateWithoutStudentInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subject?: SubjectUpdateOneRequiredWithoutEvaluationNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeUpdateWithoutStudentInput = {
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subject?: SubjectUpdateOneRequiredWithoutGradeNestedInput
  }

  export type GradeUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpdateWithoutStudentInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    referenceNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCardUpdateWithoutStudentInput = {
    schoolYear?: StringFieldUpdateOperationsInput | string
    averageGrade?: FloatFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCardUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    averageGrade?: FloatFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCardUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    schoolYear?: StringFieldUpdateOperationsInput | string
    averageGrade?: FloatFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationCreateManySubjectInput = {
    id?: number
    studentId: number
    teacherId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type GradeCreateManySubjectInput = {
    id?: number
    studentId: number
    quarter: string
    grade: number
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EvaluationUpdateWithoutSubjectInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateOneRequiredWithoutEvaluationNestedInput
    Teacher?: TeacherUpdateOneRequiredWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeUpdateWithoutSubjectInput = {
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateOneRequiredWithoutGradeNestedInput
  }

  export type GradeUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    quarter?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationCreateManyTeacherInput = {
    id?: number
    studentId: number
    subjectId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SectionCreateManyTeacherInput = {
    id?: number
    name: string
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubjectCreateManyTeacherInput = {
    id?: number
    enrollmentId: number
    name: string
    description?: string | null
    gradeLevel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EvaluationUpdateWithoutTeacherInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Student?: StudentUpdateOneRequiredWithoutEvaluationNestedInput
    Subject?: SubjectUpdateOneRequiredWithoutEvaluationNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SectionUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enrollment?: EnrollmentUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubjectUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUpdateManyWithoutSubjectNestedInput
    Grade?: GradeUpdateManyWithoutSubjectNestedInput
    Enrollment?: EnrollmentUpdateOneRequiredWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Evaluation?: EvaluationUncheckedUpdateManyWithoutSubjectNestedInput
    Grade?: GradeUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gradeLevel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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