import { ref } from 'vue'
import { vars } from '@consts'

const slider = ref(null)
const wrapper = ref(null)

const elem_width = ref(null)
const slider_height = ref(null)

const get_elem_width = (count) => {
  return `calc(${slider.value.offsetWidth / count.value}px - ${
    count.value - 1
  } * ${vars.distance})`
}

const get_slider_height = () => {
  const slider_height = [...wrapper.value.children].reduce(
    (acc, slider_elem_node) => Math.max(acc, slider_elem_node.offsetHeight),
    0
  )
  return `${slider_height}px`
}

const get_on_resize = (count) => () => {
  elem_width.value = get_elem_width(count)
  slider_height.value = get_slider_height()
}

export default (count) => {
  const on_resize = get_on_resize(count)

  return {
    slider,
    wrapper,

    elem_width,
    slider_height,

    on_resize,
  }
}
