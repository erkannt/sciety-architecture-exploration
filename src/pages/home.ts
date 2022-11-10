import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/Either';
import * as t from 'io-ts';
import { validateParams } from './validate-params.helper';
import { HtmlFragment, ErrorMessage, Page } from '../../types/sciety';

const paramCodec = t.type({})

type Params = t.TypeOf<typeof paramCodec>

export type Queries = {}

type ViewModel = {} 

const renderPage = (viewModel: ViewModel) => '' as HtmlFragment

const renderErrorMessage = (errorMessage: ErrorMessage) => '' as HtmlFragment

const buildViewModel = (params: Params) => ({})

export const home: Page = () => (input) => pipe(
	input,
	validateParams(paramCodec),
	E.map(buildViewModel),
	E.bimap(
		renderErrorMessage,
		renderPage
	)
)