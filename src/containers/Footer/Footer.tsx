import React from 'react'

interface IProps {
  className?: string;
}

function Footer({
  className: wrapperStyle,
}: IProps) {
  return (
    <div className={wrapperStyle}>
      Footer
    </div>
  )
};

export default Footer;
