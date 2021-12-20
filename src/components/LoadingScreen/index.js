import * as sc from './styles';
import Lottie from 'react-lottie';
import LoadingAnimation from '../../assets/loadingBubbles.json';

export default function LoadingScreen() {
    return (
        <sc.LoadingScreenContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className='animation-container'>
                <Lottie
                    options={defaultOptions}
                    width={"100%"}
                    height={"auto"}
                    isStopped={false}
                    isPaused={false}
                />
            </div>
        </sc.LoadingScreenContainer>
    )
}

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};