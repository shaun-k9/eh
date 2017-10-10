import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class EventHub extends React.Component {

    render() {

        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {

    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventHub);