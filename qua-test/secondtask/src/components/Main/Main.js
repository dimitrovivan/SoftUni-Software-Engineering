import { useState } from 'react';

import './Main.css';
import PeriodsTable from './PeriodsTable/PeriodsTable';
import PeriodsForm from './PeriodsForm/PeriodsForm';
import CalculateForm from './CalculateForm/CalculateForm';
import { storageKey, allPeriodsExample } from './constants';


function Main() {
    const [periods, setPeriods] = useState();
    
    const onCopyAllPeriodsExample = () => navigator.clipboard.writeText(JSON.stringify(allPeriodsExample));

    const onSaveToLocalStorage = (e) => {
        e.preventDefault();

        let textArea = e.target.querySelector('.all-periods');
        let value = textArea.value;
        if (!value) return;

        localStorage.setItem(storageKey, value);
        setPeriods(JSON.parse(value));
        textArea.value = '';
    }

    return (
        <main className="m-main">
            <div className="data-section">
                <PeriodsForm onClickPeriodsExample={onCopyAllPeriodsExample} onFormSubmitHandler={onSaveToLocalStorage}/>
                <PeriodsTable data={periods} />
            </div>
                <CalculateForm />

        </main>
    )
}

export default Main;