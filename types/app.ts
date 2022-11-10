import { CommandHandler, CommandValidator, Page, Saga } from './sciety';

type RouterPath = string

export type RouteToPage = {
	path: RouterPath
	page: Page
	doNotUseDefaultLayout?: boolean
}

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
	sagas: ReadonlyArray<Saga>
}
