import React from 'react'
import { connect, ConnectedProps } from 'react-redux';

import { getStatus } from '../../selectors';
import TopBarPage from './TopBarPage';

type TProps = ConnectedProps<typeof connector>;

function TopBar({
  status,
}: TProps) {
  return (
    <TopBarPage
      status={status}
    />
  )
};

const mapStateToProps = (state: any) => ({
  status: getStatus(state),
});

const connector = connect(mapStateToProps, null);

export default connector(TopBar);
