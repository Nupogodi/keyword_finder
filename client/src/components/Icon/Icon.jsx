import React from 'react';

// Constants
import { ICONS } from 'utils/constants';

const Icon = ({ iconType, className, text = '' }) => {
  const IconConmponent = ICONS[iconType];

  return (
    <>
      {text}
      <IconConmponent className={className} />
    </>
  );
};

export default Icon;
