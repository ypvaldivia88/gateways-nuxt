import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

const wrapperTextStyle = ['text-sm']

const wrapperBoxStyle = ['flex', 'justify-center', 'content-center', 'text-sm']

const wrapperStyleFn = function (ctx, classes) {
  if (ctx.classification === 'text') return classes.concat(wrapperTextStyle)
  if (ctx.classification === 'number') return classes.concat(wrapperTextStyle)
  if (ctx.classification === 'box') return classes.concat(wrapperBoxStyle)
}

const labelBaseStyle = [
  'block',
  'text-sm',
  'font-medium',
  'leading-5',
  'text-gray-700',
]

const labelBoxStyle = [
  'pl-3',
  'text-sm',
  'leading-5',
  'font-medium',
  'text-gray-700',
]

const labelFileStyle = [
  'block',
  'text-sm',
  'font-medium',
  'leading-5',
  'text-gray-700',
]

const labelStyleFn = function (ctx, classes) {
  if (ctx.classification === 'text') return classes.concat(labelBaseStyle)
  if (ctx.classification === 'number') return classes.concat(labelBaseStyle)
  if (ctx.classification === 'box') return classes.concat(labelBoxStyle)
  if (ctx.classification === 'group') return classes.concat(inputGroupStyle)
  if (ctx.classification === 'file') return classes.concat(labelFileStyle)
  if (ctx.classification === 'button') return classes.concat(inputButtonStyle)
  if (ctx.classification === 'select') return classes.concat(labelBaseStyle)
}

const inputTextStyle = [
  'form-input',
  'block',
  'w-full',
  'focus:outline-none',
  'focus:shadow-outline-blue',
  'focus:border-blue-300',
  'transition',
  'duration-150',
  'ease-in-out',
  'sm:text-sm',
  'sm:leading-5',
  'text-black',
]

const inputNumberStyle = [
  'form-input',
  'block',
  'w-full',
  'focus:outline-none',
  'focus:shadow-outline-blue',
  'focus:border-blue-300',
  'transition',
  'duration-150',
  'ease-in-out',
  'sm:text-sm',
  'sm:leading-5',
  'text-black',
  'no-arrows',
]

const inputCurrencyStyle = [
  'form-input',
  'block',
  'w-full',
  'pl-7',
  'pr-12',
  'sm:text-sm',
  'sm:leading-5',
]

const inputGroupStyle = []

const inputSelectStyle = [
  'mt-1',
  'form-select',
  'block',
  'w-full',
  'pl-3',
  'pr-10',
  'py-2',
  'text-base',
  'leading-6',
  'border-gray-300',
  'focus:outline-none',
  'focus:shadow-outline-blue',
  'focus:border-blue-300',
  'sm:text-sm',
  'sm:leading-5',
]

const inputBoxStyle = [
  'form-checkbox',
  'h-4',
  'w-4',
  'text-indigo-600',
  'transition',
  'duration-150',
  'ease-in-out',
]

const inputButtonStyle = [
  'w-full',
  'flex',
  'justify-center',
  'py-2',
  'px-4',
  'border',
  'border-transparent',
  'text-sm',
  'font-medium',
  'rounded-md',
  'text-white',
  'bg-teal-400',
  'hover:bg-teal-300',
  'focus:outline-none',
  'focus:border-indigo-500',
  'focus:shadow-outline-indigo',
  'active:bg-teal-500',
  'transition',
  'duration-150',
  'ease-in-out',
]

const inputButtonDisabledStyle = [
  'w-full',
  'bg-blue-500',
  'text-white',
  'font-bold',
  'py-2',
  'px-4',
  'rounded',
  'opacity-50',
  'cursor-not-allowed',
]

const inputStyleFn = function (ctx, classes) {
  // Add "type" styles before the broader classification property
  if (ctx.type === 'number') return classes.concat(inputNumberStyle)
  if (ctx.type === 'currency') return classes.concat(inputCurrencyStyle)
  if (ctx.classification === 'text') return classes.concat(inputTextStyle)
  if (ctx.classification === 'box') return classes.concat(inputBoxStyle)
  if (ctx.classification === 'group') return classes.concat(inputGroupStyle)
  if (ctx.classification === 'button') {
    if (ctx.attrs.disabled) return classes.concat(inputButtonDisabledStyle)
    return classes.concat(inputButtonStyle)
  }
  if (ctx.classification === 'select') return classes.concat(inputSelectStyle)
}

const elementBaseStyle = ['mt-2']

const elementSelectStyle = []

const elementTextStyle = ['rounded-md', 'shadow-sm']

const elementFileStyle = ['mt-3']

const elementStyleFn = function (ctx, classes) {
  const c = classes.concat(elementBaseStyle)
  if (ctx.classification === 'text') return c.concat(elementTextStyle)
  if (ctx.classification === 'box') return classes.concat()
  if (ctx.classification === 'group') return c.concat()
  if (ctx.classification === 'file') return c.concat(elementFileStyle)
  if (ctx.classification === 'button') return c.concat()
  if (ctx.classification === 'select') return c.concat(elementSelectStyle)
}

Vue.use(VueFormulate, {
  classes: {
    wrapper: wrapperStyleFn, // Make into fn that detects first element
    label: labelStyleFn,
    element: elementStyleFn,
    input: inputStyleFn,
    help: 'mt-2 text-xs text-gray-500',
    error: 'mt-2 text-xs text-red-600',
  },
})
