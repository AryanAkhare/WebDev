import React  from "react";

const Filter = ({filterData}) => {
    return(
        <div>
            {/* Ensure we return JSX from map; add a stable key */}
            {filterData.map((data) => (
                <button key={data.id}>{data.title}</button>
            ))}
        </div>
    )
}

// Export the component so it can be imported elsewhere
export default Filter;