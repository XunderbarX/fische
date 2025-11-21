import { vi } from 'vitest'
import { effect } from './effect'
import { renderHook } from '@testing-library/react'

describe('useDebouncedEffect', () => {
  vi.useFakeTimers()

  it('should call the function after the specified delay', () => {
    const mockFn = vi.fn()
    renderHook(() => effect(mockFn, 1000))
    expect(mockFn).not.toHaveBeenCalled()

    vi.runAllTimers()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
