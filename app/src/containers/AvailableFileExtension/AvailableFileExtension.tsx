import React, { Component, useState } from 'react';
const availableFormatExtensions: any = {
  'jpg': {
    isOpened: false,
    values: ['720x480', '600x600']
  },
  'png': {
    isOpened: false,
    values: ['400x300', '500x400']
  },
  'jpeg': {
    isOpened: false,
    values: ['1280x720', '720x480']
  }
};

const AvailableFileExtension: React.StatelessComponent = (props: any): JSX.Element => {
  const state = useState();

  const renderSubItems = (items: any) => {
    if (items && items.length > 0) {
      return (
        <ul>
          {items.map((item: any) => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      )
    }
  }

  const populateDropdowns = () => {
    let listWrapper = <ul></ul>;

    return Object.keys(availableFormatExtensions).map(key => {
      if (availableFormatExtensions[key]) {
        return (
          <li>{key} {renderSubItems(availableFormatExtensions[key].values)}</li>
        )
      }

      return
    });
  }

  return (
    <ul>
      {populateDropdowns()}
    </ul>
  )
}

export default AvailableFileExtension;