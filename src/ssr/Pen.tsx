
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Pen";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMzIsNzMuMzcsMTgyLjYzLDI4LjY5YTE2LDE2LDAsMCwwLTIyLjYzLDBMMzYuNjksMTUyQTE1Ljg2LDE1Ljg2LDAsMCwwLDMyLDE2My4zMVYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIOTIuNjlBMTUuODYsMTUuODYsMCwwLDAsMTA0LDIxOS4zMWw4My42Ny04My42NiwzLjQ4LDEzLjktMzYuOCwzNi43OWE4LDgsMCwwLDAsMTEuMzEsMTEuMzJsNDAtNDBhOCw4LDAsMCwwLDIuMTEtNy42bC02LjktMjcuNjFMMjI3LjMyLDk2QTE2LDE2LDAsMCwwLDIyNy4zMiw3My4zN1pNNDgsMTc5LjMxLDc2LjY5LDIwOEg0OFptNDgsMjUuMzhMNTEuMzEsMTYwLDEzNiw3NS4zMSwxODAuNjksMTIwWm05Ni05NkwxNDcuMzIsNjRsMjQtMjRMMjE2LDg0LjY5WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuNDksNzYuMiwxNzkuOCwzMS41MWExMiwxMiwwLDAsMC0xNywwTDM5LjUxLDE1NC44M0ExMiwxMiwwLDAsMCwzNiwxNjMuMzFWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDkyLjY5YTExLjkzLDExLjkzLDAsMCwwLDguNDgtMy41MWw4OC42Ny04OC42Nyw1LjczLDIzLTM4LjM5LDM4LjRhNCw0LDAsMSwwLDUuNjUsNS42Nmw0MC00MGE0LDQsMCwwLDAsMS4wNi0zLjhsLTcuNDYtMjkuOCwyOC4wNi0yOC4wNkExMiwxMiwwLDAsMCwyMjQuNDksNzYuMlpNNDQsMjA4VjE2OS42Nkw4Ni4zNSwyMTJINDhBNCw0LDAsMCwxLDQ0LDIwOFptNTIsMi4zNEw0NS42NiwxNjAsMTM2LDY5LjY2LDE4Ni4zNSwxMjBaTTIxOC44Myw4Ny41MSwxOTIsMTE0LjM0LDE0MS42Niw2NGwyNi44My0yNi44M2E0LDQsMCwwLDEsNS42NiwwbDQ0LjY4LDQ0LjY5QTQsNCwwLDAsMSwyMTguODMsODcuNTFaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjUuOTEsNzQuNzksMTgxLjIyLDMwLjFhMTQsMTQsMCwwLDAtMTkuOCwwTDM4LjEsMTUzLjQxYTEzLjk0LDEzLjk0LDAsMCwwLTQuMSw5LjlWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDkyLjY5YTEzLjk0LDEzLjk0LDAsMCwwLDkuOS00LjFsODYuMTYtODYuMTYsNC42MSwxOC40Mi0zNy42LDM3LjZhNiw2LDAsMSwwLDguNDksOC40OGw0MC00MGE2LDYsMCwwLDAsMS41OC01LjdsLTcuMTgtMjguNywyNy4yNi0yNy4yNUExNCwxNCwwLDAsMCwyMjUuOTEsNzQuNzlaTTQ2LDIwOFYxNzQuNDlMODEuNTIsMjEwSDQ4QTIsMiwwLDAsMSw0NiwyMDhabTUwLS40OUw0OC40OCwxNjAsMTM2LDcyLjQ5LDE4My41MiwxMjBaTTIxNy40Miw4Ni4xLDE5MiwxMTEuNTIsMTQ0LjQ5LDY0LDE2OS45LDM4LjU5YTIsMiwwLDAsMSwyLjgzLDBsNDQuNjksNDQuNjhBMiwyLDAsMCwxLDIxNy40Miw4Ni4xWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMTUsNzAuNTQsMTg1LjQ2LDI1Ljg2YTIwLDIwLDAsMCwwLTI4LjI4LDBMMzMuODYsMTQ5LjE3QTE5Ljg2LDE5Ljg2LDAsMCwwLDI4LDE2My4zMVYyMDhhMjAsMjAsMCwwLDAsMjAsMjBIOTIuNjlhMTkuODUsMTkuODUsMCwwLDAsMTQuMTQtNS44Nmw3OS40Ni03OS40NSw0LjE2LDEzLjg5LTM0LjkzLDM0LjkzYTEyLDEyLDAsMCwwLDE3LDE3bDQwLTQwYTEyLDEyLDAsMCwwLDMtMTEuOTRsLTkuOTQtMzMuMTMsMjQuNTktMjQuNTlBMjAsMjAsMCwwLDAsMjMwLjE1LDcwLjU0Wk02NSwxNTJsNzEtNzEsMzksMzktNzEsNzFaTTUyLDE3M2wzMSwzMUg1MlpNMTkyLDEwMywxNTMsNjRsMTguMzQtMTguMzQsMzksMzlaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMzIsNzMuMzcsMTgyLjYzLDI4LjY5YTE2LDE2LDAsMCwwLTIyLjYzLDBMMzYuNjksMTUyQTE1Ljg2LDE1Ljg2LDAsMCwwLDMyLDE2My4zMVYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIOTIuNjlBMTUuODYsMTUuODYsMCwwLDAsMTA0LDIxOS4zMWw4My42Ny04My42NiwzLjQ4LDEzLjktMzYuOCwzNi43OWE4LDgsMCwwLDAsMTEuMzEsMTEuMzJsNDAtNDBhOCw4LDAsMCwwLDIuMTEtNy42bC02LjktMjcuNjFMMjI3LjMyLDk2QTE2LDE2LDAsMCwwLDIyNy4zMiw3My4zN1pNMTkyLDEwOC42OSwxNDcuMzIsNjRsMjQtMjRMMjE2LDg0LjY5WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuNjYsOTAuMzQsMTkyLDEyMCwxMzYsNjRsMjkuNjYtMjkuNjZhOCw4LDAsMCwxLDExLjMxLDBMMjIxLjY2LDc5QTgsOCwwLDAsMSwyMjEuNjYsOTAuMzRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI3LjMyLDczLjM3LDE4Mi42MywyOC42OWExNiwxNiwwLDAsMC0yMi42MywwTDM2LjY5LDE1MkExNS44NiwxNS44NiwwLDAsMCwzMiwxNjMuMzFWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDkyLjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDEwNCwyMTkuMzFsODMuNjctODMuNjYsMy40OCwxMy45LTM2LjgsMzYuNzlhOCw4LDAsMCwwLDExLjMxLDExLjMybDQwLTQwYTgsOCwwLDAsMCwyLjExLTcuNmwtNi45LTI3LjYxTDIyNy4zMiw5NkExNiwxNiwwLDAsMCwyMjcuMzIsNzMuMzdaTTQ4LDIwOFYxNzkuMzFMNzYuNjksMjA4Wm00OC0zLjMxTDUxLjMxLDE2MCwxMzYsNzUuMzEsMTgwLjY5LDEyMFptOTYtOTZMMTQ3LjMyLDY0bDI0LTI0TDIxNiw4NC42OVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Pen";
export { I as Pen }
