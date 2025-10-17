import React from "react";
import {FcLike} from 'react-icons/fc'
// Minimal stub for Card component to avoid runtime errors
// Replace with real implementation when ready
const Card = ({course}) => {
    return (
        <div>
            {/* Card placeholder */}
            <div>
                {/* Bind to the prop (no quotes) and provide a safe fallback */}
                {/* Bind to the prop (no quotes) and provide a safe fallback */}
                {/* Bind to the prop (no quotes) and provide a safe fallback */}
                {/* Bind to the prop (no quotes) and provide a safe fallback */}
                
                <img src={course?.image?.url || ""} alt={course?.title || "course image"} />
                <div>
                    <button>
                        <FcLike fontSize="1.75rem"></FcLike>
                    </button>
                </div>
            </div>

            <div>
                <p>
                   {course.title} 
                </p>
                <p>
                    {/* The API uses 'description', not 'desc' */}
                    {course.description}
                </p>
            </div>
        </div>
    );
}

export default Card;

