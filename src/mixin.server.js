const { Mixin } = require('@untool/core');
const { ServerStyleSheet, StyleSheetManager } = require('styled-components');
const React = require('react');

module.exports = class StyledComponentsMixin extends Mixin {
  enhanceElement(reactElement) {
    this.sheet = new ServerStyleSheet();

    return (
      <StyleSheetManager sheet={this.sheet.instance}>
        {reactElement}
      </StyleSheetManager>
    );
  }

  enhanceData(data) {
    data.fragments.headSuffix += this.sheet.getStyleTags();
    return data;
  }
};
