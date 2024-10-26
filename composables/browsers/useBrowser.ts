export const useBrowser = () => {
  function isMobile (): boolean {
    return window.screen.width <= 768
  }

  return {
    isMobile
  }
}
