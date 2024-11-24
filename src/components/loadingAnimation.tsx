import { dotSpinner } from 'ldrs';
import '../styles/main.scss';

dotSpinner.register();

interface LoadingAnimationProps {
    className?: string; 
}

function LoadingAnimation({ className }: LoadingAnimationProps) {
    return (
        <l-dot-spinner
            size="45"
            speed="1.75"
            color="white"
        ></l-dot-spinner>
    );
}

export default LoadingAnimation;
