import React, { Component } from 'react';
import { connect } from 'react-redux';


class StatusResults extends Component {
  render() {
    return (
      <div className="alert-panel">
        <div className="alert alert-success small mb-0" role="alert">
          Showing rows 0 - 24 (29 total, Query took 0.0006 seconds.)
        </div>

        <div className="alert alert-secondary mb-0" role="alert">
          <code>
            SELECT * FROM `columns_priv`
          </code>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StatusResults);





