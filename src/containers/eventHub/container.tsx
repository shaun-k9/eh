import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventCover from '../../components/event/eventCover';

class EventHub extends React.Component {

  render() {

    // const eventArray = 6;

    return (
      <div id="main">
        <section className="wrapper ">
          <div className="inner">
            <header className="align-center">
              <h2>Upcoming Events</h2>
            </header>

            <EventCover/>

            
          </div>
        </section>
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