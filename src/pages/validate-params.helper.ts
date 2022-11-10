import { pipe } from 'fp-ts/lib/function';
import { ErrorMessage, HtmlFragment, Page } from '../../types';
import * as E from 'fp-ts/Either';
import * as t from 'io-ts';

export const validateParams = <A>(codec: t.Type<A>) => (input: unknown): E.Either<ErrorMessage, A> => pipe(
	input,
	codec.decode,
	E.mapLeft(() => 'page called with bad params')
)