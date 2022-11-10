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

export type RoutesToPages = {
	path: RouterPath
	page: Page
	doNotUseDefaultLayout?: boolean
}

export type App = {
	userFacingViews: ReadonlyArray<RoutesToPages>
}