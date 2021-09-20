import './PeriodsForm.css';
import { allPeriodsExample } from '../constants';

function PeriodsForm({
    onFormSubmitHandler,
    onClickPeriodsExample

}) {
    return <form onSubmit={onFormSubmitHandler}>
        <label htmlFor="all-periods">
            <h3 className="form-heading">Enter period:</h3>
            <div>Note: <span className="note">JSON format required.</span></div>
            <textarea id="all-periods" className="all-periods"></textarea>
            <div onClick={onClickPeriodsExample} className="copy-container">Copy Example</div>
        </label>
        <input type="submit" value="Submit" className="main-submit-btn" />
        <div className="all-periods-example">Example: {JSON.stringify(allPeriodsExample)}</div>

    </form>
}

export default PeriodsForm;