import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';

type RouterPath = string
export type HtmlFragment = string
type PageResult = E.Either<HtmlFragment, HtmlFragment>

export type ErrorMessage = string

type InternalQuery = <A,B>(input: A) => TE.TaskEither<ErrorMessage, B>

type ThirdPartyQuery = <A,B>(input: A) => TE.TaskEither<ErrorMessage, B>

type Queries = Record<string, InternalQuery | ThirdPartyQuery>

export type Page = (queries: Queries) => (input: unknown) => PageResult

export type RouteToPage = {
	path: RouterPath
	page: Page
	doNotUseDefaultLayout?: boolean
}

type UserId = string

type ScietyTeam = 'the-sciety-team'

type Actor = UserId | ScietyTeam

type Command = Record<string, any>

type CommandValidator = <A>(input: unknown) => E.Either<ErrorMessage, Command>

type CommandHandler = (actor: Actor) => (command: Command) => E.Either<ErrorMessage, Command>

type RedirectTarget = string

type RedirectBuilder = (input: unknown) => RedirectTarget

export type RouteToCommand = {
	path: RouterPath
	commandHandler: CommandHandler
	commandValidator: CommandValidator
	redirectBuilder?: RedirectBuilder
}

export type App = {
	userFacingViews: ReadonlyArray<RouteToPage>
	userFacingCommands: ReadonlyArray<RouteToCommand>
}
