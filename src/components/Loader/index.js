import React from "react";
import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";

const Loader = ({ loading }) => (
    !loading
        ? null
        : (
            <div id="loader-body" className="loader-body">
                <div className="sweet-loading" />
                <div align="center" className="lds-ripple">
                    <BeatLoader
                        sizeUnit="px"
                        size={50}
                        color="#3fbfae"
                        loading={loading}
                    />
                </div>
            </div>
        )
);
Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
};


export default Loader;