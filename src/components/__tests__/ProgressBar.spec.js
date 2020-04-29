/* eslint-disable no-debugger */
import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('Chapter 3', () => {
  test('is hidden on initial render', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
  })

  test('initializes with 0% width', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%')
  })
})

describe('Chapter 4', () => {
  test('displays the bar when start is called', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.vm.hidden).toBeTruthy()
    wrapper.vm.start()
    expect(wrapper.vm.hidden).toBeFalsy()
  })

  // test('sets the bar to 100% width when finish is called', () => {
  //   const wrapper = shallowMount(ProgressBar)
  //   wrapper.vm.start()
  //   wrapper.vm.finish()
  //   debugger
  //   expect(wrapper.element.style.width).toBe('100%')
  // })

  test('hides the bar when finish is called', () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(wrapper.vm.hidden).toBeTruthy()
  })

  test('resets to 0% width when start is called', () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.finish()
    wrapper.vm.start()
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('clears timer when finish is called', () => {
    jest.spyOn(window, 'clearInterval')
    setInterval.mockReturnValue(123)
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(window.clearInterval).toHaveBeenCalledWith(123)
  })
})
