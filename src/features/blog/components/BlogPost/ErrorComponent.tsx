import { ErrorScreen } from '@/components/ErrorScreen';
import { logErrorToTelegram } from '@/log';

type ErrorComponentProps =
    | {
          message: string;
      }
    | {
          error: Error;
      };

export async function ErrorComponent(props: ErrorComponentProps) {
    let message = 'An unexpected error occurred.';

    if ('message' in props) {
        message = props.message;
    }

    if ('error' in props) {
        await logErrorToTelegram(props.error);
    }

    return (
        <div className="mt-20">
            <ErrorScreen message={message} />
        </div>
    );
}
