import React from 'react';
import FilterLanguage from '../containers/FilterLanguage';

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  fontSize: '12px',
};

const LanguageBar = () => (
  <ul style={ulStyle}>
    <FilterLanguage>
      LT
    </FilterLanguage>
    {' | '}
    <FilterLanguage>
      EN
    </FilterLanguage>
    {' | '}
    <FilterLanguage>
      RU
    </FilterLanguage>
    {' | '}
    <FilterLanguage>
      LV
    </FilterLanguage>
    {' | '}
    <FilterLanguage>
      EE
    </FilterLanguage>
  </ul>
);

export default LanguageBar;
