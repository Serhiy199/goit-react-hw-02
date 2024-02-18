export default function Feedback({ clickButton: { good, neutral, bad }, totalFeedback }) {
    const getPpositive = Math.round(((good + neutral) / totalFeedback) * 100);
    return (
        <ul className="listButton">
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                <p>Bad: {bad}</p>
            </li>
            {totalFeedback ? (
                <li>
                    <p>Positive: {getPpositive}%</p>
                </li>
            ) : null}
        </ul>
    );
}
