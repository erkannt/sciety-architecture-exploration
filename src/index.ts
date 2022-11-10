import { pipe } from 'fp-ts/lib/function';
import { App, ErrorMessage, HtmlFragment, Page } from '../types';
import * as E from 'fp-ts/Either';
import * as t from 'io-ts';

const paramCodec = t.type({})

type Params = t.TypeOf<typeof paramCodec>

type ViewModel = {} 

const renderPage = (viewModel: ViewModel) => '' as HtmlFragment

const renderErrorMessage = (errorMessage: ErrorMessage) => '' as HtmlFragment

const buildViewModel = (params: Params) => ({})

const validateParams = (codec: t.Type<Params>) => (input: unknown) => pipe(
	input,
	codec.decode,
	E.mapLeft(() => 'page called with bad params')
)

const homePage: Page = () => (input) => pipe(
	input,
	validateParams(paramCodec),
	E.map(buildViewModel),
	E.bimap(
		renderErrorMessage,
		renderPage
	)
)

const app: App = {
	pages: [
		{path: '/', page: homePage}
	]
}