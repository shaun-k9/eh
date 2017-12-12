import * as React from 'react';

class EventCover extends React.Component {
  render() {
    return (
      <div className="flex flex-3">
        <div className="video col">
            <div className="image fit">
            <img src="images/pic09.jpg" alt="" />
            </div>
            <p className="caption">
            Cras eget lacus sed mauris scelerisque tincidunt
            </p>
            <a href="generic.html" className="link"><span>Click Me</span></a>
        </div>
        <div className="video col">
            <div className="image fit">
            <img src="images/pic10.jpg" alt="" />
            </div>
            <p className="caption">
            Vivamus vulputate lacus non massa auctor lobortis
            </p>
            <a href="generic.html" className="link"><span>Click Me</span></a>
        </div>
        <div className="video col">
            <div className="image fit">
            <img src="images/pic11.jpg" alt="" />
            </div>
            <p className="caption">
            Nam eu nisi non ante sodales interdum a vitae neque
            </p>
            <a href="generic.html" className="link"><span>Click Me</span></a>
        </div>
      </div>
    );
  }
}

export default EventCover;