import React from "react";

const HomeIcon = ({ width, height, fill, style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            style={{ ...style }}
        >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill={fill} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
        </svg>
    );
}

export default HomeIcon;
