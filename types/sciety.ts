import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';

// Wiring Types
export type HtmlFragment = string

export type ErrorMessage = string

// Domain Modelling
type UserId = string

type ScietyTeam = 'the-sciety-team'

type Actor = UserId | ScietyTeam

// Pages
type PageResult = E.Either<HtmlFragment, HtmlFragment>

export type Page = (queries: Queries) => (input: unknown) => PageResult

// Queries (depencies of components that need data from somewhere)
type InternalQuery = <A,B>(input: A) => TE.TaskEither<ErrorMessage, B>

type ThirdPartyQuery = <A,B>(input: A) => TE.TaskEither<ErrorMessage, B>

type Queries = Record<string, InternalQuery | ThirdPartyQuery>

// Commands
type Command = Record<string, any>

export type CommandValidator = <A>(input: unknown) => E.Either<ErrorMessage, Command>

export type CommandHandler = (actor: Actor) => (command: Command) => E.Either<ErrorMessage, Command>
