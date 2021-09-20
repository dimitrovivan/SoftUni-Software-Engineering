import './PeriodsTable.css';

function PeriodsTable({
    data
}) {
    const renderTable = (data) => {
        return (
            <table className="periods-table">
                <thead>
                    <tr>
                        <th>Price Per Day</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Added</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.map(x => <tr key={x.from + x.added + x.price_per_day}>
                            <td>{x.price_per_day}</td>
                            <td>{x.from}</td>
                            <td>{x.to}</td>
                            <td>{x.added}</td>
                        </tr>

                        )

                        )
                    }

                </tbody>
            </table>
        )
    }


    return (
        (Array.isArray(data))
            ? renderTable(data)
            : <h2>No data to display...</h2>
    )

}

export default PeriodsTable;