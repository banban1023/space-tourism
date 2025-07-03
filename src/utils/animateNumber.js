import { gsap } from 'gsap'

/**
 * 数字滚动动画
 * @param {String} selector - DOM 选择器，例如 '.distance span'
 * @param {Number|String} endValue - 最终数字（单位可以保留）
 * @param {Number} duration - 动画时间
 */
export function animateNumber (selector, endValue, duration = 1.5) {
  const el = document.querySelector(selector)
  if (!el) {
    console.warn('未找到元素:', selector)
    return
  }

  const match = String(endValue).match(/^([\d,.]+)(.*)$/)
  const number = parseFloat(match?.[1] || 0)
  const suffix = match?.[2] || ''

  // 重置文字，防止数字不变化动画无效
  el.textContent = '0' + suffix

  const obj = { val: 0 }

  gsap.to(obj, {
    val: number,
    duration,
    ease: 'power1.out',
    onUpdate: () => {
      el.textContent = Math.floor(obj.val).toLocaleString() + suffix
    }
  })
}
