import _extends from 'babel-runtime/helpers/extends';
import _Object$assign from 'babel-runtime/core-js/object/assign';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';

var Documentviewer = function (_Component) {
  _inherits(Documentviewer, _Component);

  function Documentviewer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Documentviewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Documentviewer.__proto__ || _Object$getPrototypeOf(Documentviewer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hidden: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Documentviewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({ hidden: true }, function () {
        return _this2.setState({ hidden: false });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      var _this3 = this;

      this.setState({ hidden: true }, function () {
        return _this3.setState({ hidden: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          style = _props.style,
          url = _props.url,
          type = _props.type,
          NotSupportedError = _props.NotSupportedError,
          props = _objectWithoutProperties(_props, ['style', 'url', 'type', 'NotSupportedError']);

      var wrapperStyles = _Object$assign({}, style, { position: 'relative' });

      var objectStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      };

      if (this.state.hidden) {
        console.log('drin');return null;
      }

      return React.createElement(
        'div',
        _extends({ style: wrapperStyles, ref: function ref(w) {
            _this4.wrapper = w;
          } }, props),
        React.createElement(
          'object',
          {
            data: url,
            type: type,
            style: objectStyles
          },
          NotSupportedError
        )
      );
    }
  }]);

  return Documentviewer;
}(Component);

Documentviewer.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  NotSupportedError: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.any)
};

Documentviewer.defaultProps = {
  style: {},
  NotSupportedError: null
};

export default Documentviewer;