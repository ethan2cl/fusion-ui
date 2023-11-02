import type { ComponentSizes } from '@fusion-ui-vue/constants'
import { componentSizes } from '@fusion-ui-vue/constants'
import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const switchHeight: Record<ComponentSizes, number> = {
  small: 28,
  medium: 32,
  large: 36,
}

export const switchProps = buildProps({
  modelValue: {
    type: Boolean,
    default: '',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ComponentSizes>,
    value: componentSizes,
    default: 'medium',
  },
  cs: {
    type: [Object, String, Array] as PropType<TemplateStringsArray>,
  },
  disabledIcon: {
    type: Boolean,
    default: false,
  },
})

export type SwitchProps = ExtractPropTypes<typeof switchProps>
