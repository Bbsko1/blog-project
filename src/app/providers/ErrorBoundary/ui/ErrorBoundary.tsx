import {
    Component, ReactNode, ErrorInfo, Suspense,
} from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <Suspense fallback=""><PageError /></Suspense>;
        }

        return children;
    }
}

export default ErrorBoundary;
