import React from 'react'

interface IProps {
  className?: string;
}

function TopBar({
  className: wrapperStyle,
}: IProps) {
  return (
    <div className={wrapperStyle}>
      TopBar
    </div>
  )
};

export default TopBar;
