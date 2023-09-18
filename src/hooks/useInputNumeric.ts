const useInputNumeric = (el: HTMLInputElement) => {
  el.addEventListener('keypress', (evt) => {
    if (/^([0-9])/.test(evt.key)) {
      return true
    } else evt.preventDefault()
  })
}

export default useInputNumeric
