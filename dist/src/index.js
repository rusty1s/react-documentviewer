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
    _classCallCheck(this, Documentviewer);

    return _possibleConstructorReturn(this, (Documentviewer.__proto__ || _Object$getPrototypeOf(Documentviewer)).apply(this, arguments));
  }

  _createClass(Documentviewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      // We need to take on a pretty ugly approach by adding the <object> tag by
      // modifying the innerHTML of our wrapper. Otherwise specific browsers
      // don't update their visual look if properties change.

      // First, remove the object tags on both sides.
      var error = this.wrapper.innerHTML.replace(/^<object[^>]*>/, '').replace(/<\/object>$/, '');

      // Then create a new object tag.
      this.wrapper.innerHTML = '<object ' + ('data="' + this.props.url + '" ') + ('type="' + this.props.type + '" ') + 'style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain" ' + ('>' + error + '</object>');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          url = _props.url,
          type = _props.type,
          NotSupportedError = _props.NotSupportedError,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['name', 'url', 'type', 'NotSupportedError', 'style']);

      var styles = _Object$assign({}, style, { position: 'relative' });

      return React.createElement(
        'div',
        _extends({ style: styles, ref: function ref(w) {
            _this2.wrapper = w;
          } }, props),
        NotSupportedError
      );
    }
  }]);

  return Documentviewer;
}(Component);

Documentviewer.propTypes = {
  name: PropTypes.string.isRequired,
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