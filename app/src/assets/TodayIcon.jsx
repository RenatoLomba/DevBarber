import React from "react";

const TodayIcon = ({ width, height, fill, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            style={{ ...style }}
        >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill={fill} d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
        </svg>
    );
}

export default TodayIcon;
