import { listButton } from './Options.module.css';

export default function Options({ updateFeedback, totalFeedback }) {
    return (
        <ul className={listButton}>
            <li>
                <button onClick={updateFeedback}>Good</button>
            </li>
            <li>
                <button onClick={updateFeedback}>Neutral</button>
            </li>
            <li>
                <button onClick={updateFeedback}>Bad</button>
            </li>
            {totalFeedback ? (
                <li>
                    <button onClick={updateFeedback}>Reset</button>
                </li>
            ) : null}
        </ul>
    );
}
