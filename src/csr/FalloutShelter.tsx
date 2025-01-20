
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FalloutShelter";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlptNzEuMDUtOTEuNzdBOCw4LDAsMCwwLDE5MiwxMjBIMTQzbDIzLjcxLTM1LjU2QTgsOCwwLDAsMCwxNjAsNzJIOTZhOCw4LDAsMCwwLTYuNjYsMTIuNDRMMTEzLjA1LDEyMEg2NGE4LDgsMCwwLDAtNi42NiwxMi40NGwzMiw0OGE4LDgsMCwwLDAsMTMuMzIsMGwyNS4zNC0zOCwyNS4zNCwzOGE4LDgsMCwwLDAsMTMuMzIsMGwzMi00OEE4LDgsMCwwLDAsMTk5LjA1LDEyNC4yM1pNMTQ1LjA1LDg4LDEyOCwxMTMuNTgsMTExLDg4Wk05NiwxNjEuNTgsNzksMTM2aDM0LjFabTY0LDBMMTQzLDEzNmgzNC4xWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFptNjcuNTMtOTMuODlBNCw0LDAsMCwwLDE5MiwxMjRIMTM1LjQ3bDI3Ljg2LTQxLjc4QTQsNCwwLDAsMCwxNjAsNzZIOTZhNCw0LDAsMCwwLTMuMzMsNi4yMkwxMjAuNTMsMTI0SDY0YTQsNCwwLDAsMC0zLjMzLDYuMjJsMzIsNDhhNCw0LDAsMCwwLDYuNjYsMGwyOC42Ny00MywyOC42Nyw0M2E0LDQsMCwwLDAsNi42NiwwbDMyLTQ4QTQsNCwwLDAsMCwxOTUuNTMsMTI2LjExWk0xNTIuNTMsODQsMTI4LDEyMC43OSwxMDMuNDcsODRaTTk2LDE2OC43OSw3MS40NywxMzJoNDkuMDZabTY0LDBMMTM1LjQ3LDEzMmg0OS4wNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFptNjkuMjktOTIuODNBNiw2LDAsMCwwLDE5MiwxMjJIMTM5LjIxTDE2NSw4My4zM0E2LDYsMCwwLDAsMTYwLDc0SDk2YTYsNiwwLDAsMC01LDkuMzNMMTE2Ljc5LDEyMkg2NGE2LDYsMCwwLDAtNSw5LjMzbDMyLDQ4YTYsNiwwLDAsMCwxMCwwbDI3LTQwLjUxLDI3LDQwLjUxYTYsNiwwLDAsMCwxMCwwbDMyLTQ4QTYsNiwwLDAsMCwxOTcuMjksMTI1LjE3Wk0xNDguNzksODYsMTI4LDExNy4xOCwxMDcuMjEsODZaTTk2LDE2NS4xOCw3NS4yMSwxMzRoNDEuNThabTY0LDBMMTM5LjIxLDEzNGg0MS41OFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWm02Ni03My4zNC0yNCwzNmExMiwxMiwwLDAsMS0yMCwwbC0yMi0zMy0yMiwzM2ExMiwxMiwwLDAsMS0yMCwwbC0yNC0zNkExMiwxMiwwLDAsMSw3MiwxMjBoNDEuNThMOTQsOTAuNjZBMTIsMTIsMCwwLDEsMTA0LDcyaDQ4YTEyLDEyLDAsMCwxLDEwLDE4LjY2TDE0Mi40MiwxMjBIMTg0YTEyLDEyLDAsMCwxLDEwLDE4LjY2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuOTQsMTI0LjU1Yy0xLjc3LTU0LjQ5LTQ2LTk4LjcyLTEwMC40OS0xMDAuNDlBMTA0LjA5LDEwNC4wOSwwLDAsMCwyNC4wNiwxMzEuNDVjMS43Nyw1NC40OSw0Niw5OC43MiwxMDAuNDksMTAwLjQ5QTEwNC4wOSwxMDQuMDksMCwwLDAsMjMxLjk0LDEyNC41NVptLTMzLjU2LDE2LjkyTDE3NC45MywxNzQuM2E4LjUyLDguNTIsMCwwLDEtMTMuODYsMEwxMjgsMTI4LDk0LjkzLDE3NC4zYTguNTIsOC41MiwwLDAsMS0xMy44NiwwTDU3LjYyLDE0MS40N0E4LjUyLDguNTIsMCwwLDEsNjQuNTUsMTI4SDEyOEw5Ny42Miw4NS40N0E4LjUyLDguNTIsMCwwLDEsMTA0LjU1LDcyaDQ2LjlhOC41Miw4LjUyLDAsMCwxLDYuOTMsMTMuNDdMMTI4LDEyOGg2My40NUE4LjUyLDguNTIsMCwwLDEsMTk4LjM4LDE0MS40N1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzJhOTYsOTYsMCwxLDAsOTYsOTZBOTYsOTYsMCwwLDAsMTI4LDMyWm0zMiwxNDQtMzItNDhMOTYsMTc2LDY0LDEyOGg2NEw5Niw4MGg2NGwtMzIsNDhoNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMCwxOTJhODgsODgsMCwxLDEsODgtODhBODguMSw4OC4xLDAsMCwxLDEyOCwyMTZabTcxLjA1LTkxLjc3QTgsOCwwLDAsMCwxOTIsMTIwSDE0M2wyMy43MS0zNS41NkE4LDgsMCwwLDAsMTYwLDcySDk2YTgsOCwwLDAsMC02LjY2LDEyLjQ0TDExMy4wNSwxMjBINjRhOCw4LDAsMCwwLTYuNjYsMTIuNDRsMzIsNDhhOCw4LDAsMCwwLDEzLjMyLDBsMjUuMzQtMzgsMjUuMzQsMzhhOCw4LDAsMCwwLDEzLjMyLDBsMzItNDhBOCw4LDAsMCwwLDE5OS4wNSwxMjQuMjNaTTE0NS4wNSw4OCwxMjgsMTEzLjU4LDExMSw4OFpNOTYsMTYxLjU4LDc5LDEzNmgzNC4xWm02NCwwTDE0MywxMzZoMzQuMVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FalloutShelter";
export { I as FalloutShelter }
