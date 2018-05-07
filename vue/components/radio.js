import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
let __vueComponentPropsKeys;
function __vueComponentGetPropKeys(props) {
  __vueComponentPropsKeys = Object.keys(props);
  return props;
}
const RadioProps = Utils.extend({
  checked: Boolean,
  name: [
    Number,
    String
  ],
  value: [
    Number,
    String,
    Boolean
  ],
  disabled: Boolean,
  readonly: Boolean
}, Mixins.colorProps);
export default {
  name: 'f7-radio',
  props: __vueComponentGetPropKeys(RadioProps),
  render() {
    var _h = this.$createElement;
    const self = this;
    const {name, value, disabled, readonly, checked} = self;
    const inputEl = _h('input', {
      on: { change: self.onChange.bind(self) },
      attrs: {
        type: 'radio',
        name: name,
        value: value,
        disabled: disabled,
        readonly: readonly,
        checked: checked
      }
    });
    const iconEl = _h('i', { class: 'icon-radio' });
    return _h('label', {
      style: self.props.style,
      class: self.classes,
      attrs: { id: self.props.id }
    }, [
      inputEl,
      iconEl,
      this.$slots['default']
    ]);
  },
  computed: {
    classes() {
      const self = this;
      return Utils.classNames(self.props.className, {
        radio: true,
        disabled: self.disabled
      }, Mixins.colorClasses(self));
    },
    props() {
      return __vueComponentProps(this, __vueComponentPropsKeys);
    }
  },
  methods: {
    onChange(event) {
      this.dispatchEvent('change', event);
    },
    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    }
  }
};