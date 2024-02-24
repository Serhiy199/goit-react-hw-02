import { useState } from 'react';
import { useEffect } from 'react';
import Description from './components/Description';
import Options from './components/Options';
import Feedback from './components/Feedback';
import Notification from './components/Notification';

import './App.css';

function App() {
    const [feedbackCounts, setFeedbackCounts] = useState(() => {
        const savedClicks = window.localStorage.getItem('saved-clicks');
        return savedClicks !== null ? JSON.parse(savedClicks) : { good: 0, neutral: 0, bad: 0 };
    });

    const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

    const updateFeedback = feedbackType => {
        setFeedbackCounts({ ...feedbackCounts, [feedbackType]: feedbackCounts[feedbackType] + 1 });
        if (feedbackType === 'reset') {
            setFeedbackCounts({
                good: 0,
                neutral: 0,
                bad: 0,
            });
        }
    };

    useEffect(() => {
        localStorage.setItem('saved-clicks', JSON.stringify(feedbackCounts));
    }, [feedbackCounts]);

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
            {totalFeedback ? (
                <Feedback clickButton={feedbackCounts} totalFeedback={totalFeedback} />
            ) : (
                <Notification />
            )}
        </>
    );
}

export default App;
