import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import './DetailOverlay.css';

export default class DetailOverlay extends PureComponent {

    render() {
        return (
            <section className="event-detail-overlay">
                <div className="event-detail-overlay__container b-r-5">
                    <Link to={{ pathname: `/` }}>
                        <div className="event-detail-overlay__close" title="Close detail view"></div>
                    </Link>
                    <div>
                        {this.props.content}
                    </div>
                </div>
            </section>
        );
    }
}
