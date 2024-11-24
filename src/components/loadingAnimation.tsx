import { dotSpinner } from 'ldrs';
import '../styles/main.scss';

dotSpinner.register();


function LoadingAnimation() {
    return (
        <l-dot-spinner
            size="45"
            speed="1.75"
            color="white"
        ></l-dot-spinner>
    );
}

export default LoadingAnimation;
