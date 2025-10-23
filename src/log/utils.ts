import util from 'node:util';

export function serializeError(error: unknown): string {
    return util.inspect(error, {
        showHidden: false,
        depth: null,
        colors: false,
    });
}
