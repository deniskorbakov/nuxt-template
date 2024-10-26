import type { Notification } from '#ui/types'

let timeoutValue: number = 4000

export const useNotifications = () => {
  const toast = useToast()
  const browser = useBrowser()

  function updateTimeout (id: string) {
    const notification: Partial<Notification> = {
      timeout: timeoutValue
    }

    setTimeout(() => {
      toast.update(id, notification)
    }, 2000)

    timeoutValue -= Math.floor(Math.random() * (10 - 1 + 1)) + 1
    if (timeoutValue < 3000) {
      timeoutValue = 4000
    }
  }

  function update (id: string): void {
    if (browser.isMobile()) {
      updateTimeout(id)
    }
  }

  function error (id: string, title: string, description: string): void {
    toast.add({
      id,
      title,
      description,
      icon: 'i-heroicons-information-circle-20-solid',
      color: 'red',
      click () {
        update(id)
      }
    })
  }

  function success (id: string, title: string, description: string): void {
    toast.add({
      id,
      title,
      description,
      icon: 'i-heroicons-check-circle-20-solid',
      color: 'green',
      click () {
        update(id)
      }
    })
  }

  return {
    error,
    success
  }
}
