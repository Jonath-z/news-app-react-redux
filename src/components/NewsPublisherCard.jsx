import React from "react";

const NewsPublisherCard = ({name, description}) => {
    return (
        <div className="py-2">
            <h2 className="font-bold">{name}</h2>
            <p className="text-sm font-light">{description}</p>
        </div>
    );
};

export default NewsPublisherCard;
