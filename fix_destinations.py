import re

with open('app/destinations/DestinationsMapInner.tsx', 'r') as f:
    content = f.read()

# Remove handler block
old_block = '''  const isNavigationBlocked = () => Date.now() < navigationBlockedUntil
  const cityHref = city?.href ?? ''

  const handlePopupCardPointerDown = (event?: {
    preventDefault?: () => void
    stopPropagation?: () => void
    nativeEvent?: Event | null
  } | null) => {
    try {
      safeStopReactEvent(event)
      touchStartedAfterBlockRef.current = !isNavigationBlocked()
    } catch {
      touchStartedAfterBlockRef.current = false
      schedulePopupClose()
    }
  }

  const handlePopupCardClick = (event: MouseEvent<HTMLElement>) => {
    try {
      if (isNavigationBlocked() || !touchStartedAfterBlockRef.current) {
        safeStopReactEvent(event)
        return
      }

      safeStopReactEvent(event)

      if (!cityHref || typeof window === 'undefined' || !window.location || typeof window.location.assign !== 'function') {
        schedulePopupClose()
        return
      }

      try {
        window.location.assign(cityHref)
      } catch {
        schedulePopupClose()
      }
    } catch {
      safeStopReactEvent(event)
      schedulePopupClose()
    }
  }

  const handlePopupCardKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return

    safeStopReactEvent(event)

    try {
      if (!cityHref || typeof window === 'undefined' || !window.location || typeof window.location.assign !== 'function') {
        schedulePopupClose()
        return
      }

      window.location.assign(cityHref)
    } catch {
      schedulePopupClose()
    }
  }'''

if old_block in content:
    content = content.replace(old_block, "  const isNavigationBlocked = () => Date.now() < navigationBlockedUntil")
    print("✅ Removed navigation handlers")
else:
    print("❌ Could not find handler block")

# Remove popup click div
old_popup = '''          <div
            role="link"
            tabIndex={0}
            aria-label={`Explore ${city.name}`}
            className="block cursor-pointer"
            onPointerDown={handlePopupCardPointerDown}
            onTouchStart={handlePopupCardPointerDown}
            onClick={handlePopupCardClick}
            onKeyDown={handlePopupCardKeyDown}
          >'''

new_popup = '''          <div
            aria-label={`${city.name} guide`}
            className="block"
          >'''

if old_popup in content:
    content = content.replace(old_popup, new_popup)
    print("✅ Removed popup click handlers")
else:
    print("❌ Could not find popup click handlers")

# Replace Explore with Top Attractions in popup
old_explore = '''                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#af5d32]">
                  Explore <ArrowRight size={12} />
                </span>'''

new_explore = '''                <div className="mt-2">
                  <p className="text-[10px] font-semibold text-[#64748b] uppercase tracking-wider mb-1">Top Attractions</p>
                  <div className="flex flex-wrap gap-1">
                    {city.topAttractions.slice(0, 3).map((attr) => (
                      <span key={attr} className="text-[10px] text-[#1a3a4a] bg-[#f5f1ea] px-1.5 py-0.5 rounded">{attr}</span>
                    ))}
                  </div>
                </div>'''

if old_explore in content:
    content = content.replace(old_explore, new_explore)
    print("✅ Replaced popup Explore with Top Attractions")
else:
    print("❌ Could not find popup Explore")

# Remove unused KeyboardEvent and MouseEvent imports (check if still needed)
if 'type KeyboardEvent' in content:
    content = content.replace('type KeyboardEvent, type MouseEvent', '')
    print("✅ Removed unused type imports")

with open('app/destinations/DestinationsMapInner.tsx', 'w') as f:
    f.write(content)
print("Done. Size:", len(content))
