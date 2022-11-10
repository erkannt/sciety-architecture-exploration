import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';

type RouterPath = string
type HtmlFragment = string
type PageResult = E.Either<HtmlFragment, HtmlFragment>

type ErrorMessage = string

type InternalQuery = <A,B>(input: A) => TE.TaskEither<ErrorMessage, B>
type ThirdPartyQuery = <A,B>(input: A) => TE.TaskEither<ErrorMessage, B>

type Queries = Record<string, InternalQuery | ThirdPartyQuery>

type Page = (queries: Queries) => (input: unknown) => PageResult

type PageRepresentation = {
	path: RouterPath
	page: Page
	needsDefaultPageLayout: boolean
}

type App = {
	pages: Array<PageRepresentation>
}