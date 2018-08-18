'use strict';

/**
 * material-ui-credit-card-icons
 * https://github.com/codefoundries/material-ui-credit-card-icons
 *
 * Copyright (c) 2016 Code Foundries, Aleksandar Chalakov
 * Licensed under the MIT license.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconVisa = exports.IconMasterCard = exports.IconJCB = exports.IconDiscover = exports.IconDinersClub = exports.IconCreditCardOutline = exports.IconAmericanExpress = undefined;
exports.getCreditCardIconByName = getCreditCardIconByName;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon_AmericanExpress = require('./Icon_AmericanExpress');

var _Icon_AmericanExpress2 = _interopRequireDefault(_Icon_AmericanExpress);

var _Icon_CreditCardOutline = require('./Icon_CreditCardOutline');

var _Icon_CreditCardOutline2 = _interopRequireDefault(_Icon_CreditCardOutline);

var _Icon_DinersClub = require('./Icon_DinersClub');

var _Icon_DinersClub2 = _interopRequireDefault(_Icon_DinersClub);

var _Icon_Discover = require('./Icon_Discover');

var _Icon_Discover2 = _interopRequireDefault(_Icon_Discover);

var _Icon_JCB = require('./Icon_JCB');

var _Icon_JCB2 = _interopRequireDefault(_Icon_JCB);

var _Icon_MasterCard = require('./Icon_MasterCard');

var _Icon_MasterCard2 = _interopRequireDefault(_Icon_MasterCard);

var _Icon_Visa = require('./Icon_Visa');

var _Icon_Visa2 = _interopRequireDefault(_Icon_Visa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IconAmericanExpress = _Icon_AmericanExpress2.default;
exports.IconCreditCardOutline = _Icon_CreditCardOutline2.default;
exports.IconDinersClub = _Icon_DinersClub2.default;
exports.IconDiscover = _Icon_Discover2.default;
exports.IconJCB = _Icon_JCB2.default;
exports.IconMasterCard = _Icon_MasterCard2.default;
exports.IconVisa = _Icon_Visa2.default;
function getCreditCardIconByName(iconName) {
  if (iconName == 'AmericanExpress') {
    return _react2.default.createElement(_Icon_AmericanExpress2.default, null);
  }
  if (iconName == 'DinersClub') {
    return _react2.default.createElement(_Icon_DinersClub2.default, null);
  }
  if (iconName == 'Discover') {
    return _react2.default.createElement(_Icon_Discover2.default, null);
  }
  if (iconName == 'JCB') {
    return _react2.default.createElement(_Icon_JCB2.default, null);
  }
  if (iconName == 'MasterCard') {
    return _react2.default.createElement(_Icon_MasterCard2.default, null);
  }
  if (iconName == 'Visa') {
    return _react2.default.createElement(_Icon_Visa2.default, null);
  }
  return _react2.default.createElement(_Icon_CreditCardOutline2.default, null);
}
//# sourceMappingURL=index.js.map