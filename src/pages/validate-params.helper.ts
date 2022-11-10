import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/Either';
import * as t from 'io-ts';
import { ErrorMessage } from '../../types/sciety';

export const validateParams = <A>(codec: t.Type<A>) => (input: unknown): E.Either<ErrorMessage, A> => pipe(
	input,
	codec.decode,
	E.mapLeft(() => 'page called with bad params')
)