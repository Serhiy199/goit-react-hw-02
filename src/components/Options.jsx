import { listButton } from './Options.module.css';

export default function Options({ updateFeedback, totalFeedback, resetFunction }) {
    return (
        <ul className={listButton}>
            <li>
                <button onClick={() => updateFeedback('good')}>Good</button>
            </li>
            <li>
                <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            </li>
            <li>
                <button onClick={() => updateFeedback('bad')}>Bad</button>
            </li>
            {totalFeedback ? (
                <li>
                    <button onClick={() => updateFeedback('reset')}>Reset</button>
                </li>
            ) : null}
        </ul>
    );
}
