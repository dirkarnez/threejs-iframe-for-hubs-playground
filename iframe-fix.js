function isElementClickable(element) {
  // 1. Basic existence and type check
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }

  // 2. Check for disabled states
  if (element.disabled || element.ariaDisabled === 'true' || element.tabIndex < 0) {
    return false;
  }

  // 3. Check computed styles for visibility and pointer events
  const styles = window.getComputedStyle(element);
  if (
    styles.pointerEvents === 'none' ||
    styles.display === 'none' ||
    ['hidden', 'collapse'].includes(styles.visibility) ||
    styles.opacity === '0' ||
    styles.cursor === 'not-allowed' ||
    styles.cursor === 'none'
  ) {
    return false;
  }

  // 4. Check for overlapping elements (simplified)
  // This checks if the element at the center of the target element is the target itself.
  // More complex scenarios might require checking multiple points or a larger area.
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const elementAtPoint = document.elementFromPoint(centerX, centerY);

  if (elementAtPoint !== element && !element.contains(elementAtPoint)) {
    return false; // Another element is on top or partially obscuring it
  }

  // 5. Check if the element is within the viewport or can be scrolled into it
  // This is a more advanced check and might involve evaluating scrollability.
  // For simplicity, we'll assume if it's not hidden and not overlapped, it's potentially clickable.

  return true;
}

let element = null;
for (element = document.elementFromPoint(30, 30); element != null && !isElementClickable(element); element = element.parentNode);
if (element != null) {
    element.click();
}
