import { useState } from 'react';
import { useEffect } from 'react';
import Description from './components/Description';
import Options from './components/Options';
import Feedback from './components/Feedback';

import './App.css';

function App() {
    const [clickButton, setclickButton] = useState(() => {
        const savedClicks = window.localStorage.getItem('saved-clicks');
        return savedClicks !== null ? JSON.parse(savedClicks) : { good: 0, neutral: 0, bad: 0 };
    });

    const totalFeedback = clickButton.good + clickButton.neutral + clickButton.bad;

    const updateFeedback = feedbackType => {
        const targetButton = feedbackType.target.textContent.toLowerCase();

        setclickButton({ ...clickButton, [targetButton]: clickButton[targetButton] + 1 });
        if (targetButton === 'reset') {
            setclickButton({
                good: 0,
                neutral: 0,
                bad: 0,
            });
        }
    };

    useEffect(() => {
        localStorage.setItem('saved-clicks', JSON.stringify(clickButton));
    }, [clickButton]);

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
            {totalFeedback ? (
                <Feedback clickButton={clickButton} totalFeedback={totalFeedback} />
            ) : (
                'No feedback yet'
            )}
        </>
    );
}

export default App;
