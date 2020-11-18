import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom';

import Services from '../Services';

interface IProps {
  className?: string;
}

function Content({
  className: wrapperStyle,
}: IProps) {
  return (
    <div className={wrapperStyle}>
        <Switch>
          <Route>
            <Services />
          </Route>
        </Switch>
    </div>
  )
}

export default Content
