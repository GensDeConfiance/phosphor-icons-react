
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ShootingStar";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuMzUsNzAuMDhhMTMuNDEsMTMuNDEsMCwwLDAtMTEuNzctOS4yOGwtMzYuOTQtMi45MkwxNzYuNDMsMjQuMjJhMTMuNTEsMTMuNTEsMCwwLDAtMjQuODYsMEwxMzcuMzYsNTcuODgsMTAwLjQyLDYwLjhhMTMuMzksMTMuMzksMCwwLDAtNy42NiwyMy41OGwyOC4wNiwyMy42OC04LjU2LDM1LjM5YTEzLjMyLDEzLjMyLDAsMCwwLDUuMSwxMy45MSwxMy41MSwxMy41MSwwLDAsMCwxNSwuNjlMMTY0LDEzOWwzMS42NSwxOS4wNmExMy41NCwxMy41NCwwLDAsMCwxNS0uNjksMTMuMzQsMTMuMzQsMCwwLDAsNS4wOS0xMy45MWwtOC41Ni0zNS4zOSwyOC4wNi0yMy42OEExMy4zMiwxMy4zMiwwLDAsMCwyMzkuMzUsNzAuMDhaTTE5My4wOCw5OWE4LDgsMCwwLDAtMi42MSw4bDguMjgsMzQuMjFMMTY4LjEzLDEyMi44YTgsOCwwLDAsMC04LjI1LDBsLTMwLjYyLDE4LjQzTDEzNy41NCwxMDdhOCw4LDAsMCwwLTIuNjItOEwxMDgsNzYuMjZsMzUuNTItMi44MWE4LDgsMCwwLDAsNi43NC00Ljg3TDE2NCwzNS45MWwxMy43OSwzMi42N2E4LDgsMCwwLDAsNi43NCw0Ljg3bDM1LjUzLDIuODFabS0xMDUsMjQuMThMMjkuNjYsMTgxLjY2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmw1OC40NS01OC40NWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJabTEwLjgxLDQ5Ljg3YTgsOCwwLDAsMSwwLDExLjMxTDQ1LjY2LDIzNy42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsNTMuMjctNTMuMjZBOCw4LDAsMCwxLDk4LjkyLDE3My4wOFptNzMtMWE4LDgsMCwwLDEsMCwxMS4zMmwtNTQuMjgsNTQuMjhhOCw4LDAsMCwxLTExLjMyLTExLjMybDU0LjI5LTU0LjI4QTgsOCwwLDAsMSwxNzEuOTQsMTcyLjA2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuNTUsNzEuM2E5LjQ0LDkuNDQsMCwwLDAtOC4yOC02LjUxTDE4Ny45LDYxLjY4LDE3Mi43NSwyNS43N2E5LjUxLDkuNTEsMCwwLDAtMTcuNDksMEwxNDAuMSw2MS42OGwtMzkuMzYsMy4xMWE5LjM5LDkuMzksMCwwLDAtNS40LDE2LjUzbDMwLDI1LjI4LTkuMTQsMzcuNzlhOS4yNCw5LjI0LDAsMCwwLDMuNTgsOS43NSw5LjUyLDkuNTIsMCwwLDAsMTAuNTYuNDhMMTY0LDEzNC4zMmwzMy43MiwyMC4zYTkuNTIsOS41MiwwLDAsMCwxMC41Ni0uNDgsOS4yNCw5LjI0LDAsMCwwLDMuNTgtOS43NWwtOS4xNS0zNy43OSwyOS45NS0yNS4yOEE5LjM0LDkuMzQsMCwwLDAsMjM1LjU1LDcxLjNabS04LjA1LDMuOTEtMzEuODQsMjYuODdhNCw0LDAsMCwwLTEuMzEsNGw5LjczLDQwLjE5YTEuMjgsMS4yOCwwLDAsMS0uNTMsMS40MiwxLjUsMS41LDAsMCwxLTEuNzEuMDdsLTM1Ljc3LTIxLjUzYTQsNCwwLDAsMC00LjEzLDBsLTM1Ljc4LDIxLjUzYTEuNDgsMS40OCwwLDAsMS0xLjctLjA3LDEuMywxLjMsMCwwLDEtLjU0LTEuNDJsOS43My00MC4xOWE0LDQsMCwwLDAtMS4zMS00TDEwMC41MSw3NS4yMWExLjI5LDEuMjksMCwwLDEtLjQ0LTEuNDYsMS40LDEuNCwwLDAsMSwxLjMtMWw0MS43OS0zLjNBNCw0LDAsMCwwLDE0Ni41Myw2N2wxNi4xLTM4LjE1YTEuNTEsMS41MSwwLDAsMSwyLjc1LDBMMTgxLjQ4LDY3YTQsNCwwLDAsMCwzLjM3LDIuNDNsNDEuNzksMy4zYTEuMzksMS4zOSwwLDAsMSwxLjI5LDFBMS4yNywxLjI3LDAsMCwxLDIyNy41LDc1LjIxWk04NS4yOCwxMjAuMzgsMjYuODMsMTc4LjgzYTQsNCwwLDAsMS01LjY2LTUuNjZsNTguNDUtNTguNDVhNCw0LDAsMCwxLDUuNjYsNS42NlptMTAuODEsNTUuNTNhNCw0LDAsMCwxLDAsNS42NUw0Mi44MywyMzQuODNhNCw0LDAsMCwxLTUuNjYtNS42Nmw1My4yNy01My4yNkE0LDQsMCwwLDEsOTYuMDksMTc1LjkxWm03My0xYTQsNCwwLDAsMSwwLDUuNjZsLTU0LjI4LDU0LjI4YTQsNCwwLDAsMS01LjY2LTUuNjZsNTQuMjktNTQuMjhBNCw0LDAsMCwxLDE2OS4xMSwxNzQuODlaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNDUsNzAuNjlhMTEuNDIsMTEuNDIsMCwwLDAtMTAtNy45bC0zOC4xNi0zTDE3NC41OSwyNWExMS41MSwxMS41MSwwLDAsMC0yMS4xOCwwTDEzOC43Myw1OS43OGwtMzguMTUsM2ExMS4zOSwxMS4zOSwwLDAsMC02LjUzLDIwLjA2bDI5LDI0LjQ4LTguODYsMzYuNTlhMTEuMzUsMTEuMzUsMCwwLDAsNC4zNCwxMS44MywxMS41MSwxMS41MSwwLDAsMCwxMi43OC41OEwxNjQsMTM2LjY2bDMyLjY5LDE5LjY3YTExLjUsMTEuNSwwLDAsMCwxMi43Ny0uNTgsMTEuMzMsMTEuMzMsMCwwLDAsNC4zNC0xMS44M0wyMDUsMTA3LjMzbDI5LTI0LjQ4QTExLjMyLDExLjMyLDAsMCwwLDIzNy40NSw3MC42OVptLTQzLjA4LDI5Ljg3YTYsNiwwLDAsMC0yLDZsOS40MSwzOC44NkwxNjcuMSwxMjQuNTJhNiw2LDAsMCwwLTYuMTksMGwtMzQuNzIsMjAuODksOS40MS0zOC44NmE2LDYsMCwwLDAtMi02TDEwMi45NCw3NC42NWw0MC4zNy0zLjE5YTYsNiwwLDAsMCw1LjA2LTMuNjVsMTUuNjMtMzcsMTUuNjMsMzdhNiw2LDAsMCwwLDUuMDYsMy42NWw0MC4zNywzLjE5Wk04Ni42OSwxMjEuNzksMjguMjQsMTgwLjI0YTYsNiwwLDAsMS04LjQ4LTguNDhsNTguNDUtNTguNDVhNiw2LDAsMCwxLDguNDgsOC40OFptMTAuODIsNTIuN2E2LDYsMCwwLDEsMCw4LjQ5TDQ0LjI0LDIzNi4yNGE2LDYsMCwwLDEtOC40OC04LjQ4TDg5LDE3NC40OUE2LDYsMCwwLDEsOTcuNTEsMTc0LjQ5Wm03My0xYTYsNiwwLDAsMSwwLDguNDhsLTU0LjI5LDU0LjI4YTYsNiwwLDAsMS04LjQ4LTguNDhMMTYyLDE3My40OEE2LDYsMCwwLDEsMTcwLjUzLDE3My40OFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMTYsNjguODVhMTcuNCwxNy40LDAsMCwwLTE1LjI2LTEybC0zNC41Mi0yLjcyTDE4MC4xMiwyMi42NmExNy41MiwxNy41MiwwLDAsMC0zMi4yNCwwTDEzNC42Miw1NC4wOWwtMzQuNTEsMi43MmExNy4zOSwxNy4zOSwwLDAsMC05LjkzLDMwLjYybDI2LjE3LDIyLjEtOCwzM2ExNy40NiwxNy40NiwwLDAsMCwyNiwxOUwxNjQsMTQzLjY2bDI5LjU5LDE3LjgxYTE3LjQ2LDE3LjQ2LDAsMCwwLDI2LTE5bC04LTMzLDI2LjE3LTIyLjFBMTcuMywxNy4zLDAsMCwwLDI0My4xNiw2OC44NVpNMTkwLjUsOTZhMTIsMTIsMCwwLDAtMy45MiwxMmw2LDI0LjkxLTIyLjQxLTEzLjVhMTIuMDYsMTIuMDYsMCwwLDAtMTIuMzgsMGwtMjIuNDEsMTMuNSw2LTI0LjkxYTEyLDEyLDAsMCwwLTMuOTMtMTJMMTE4LDc5LjQ4bDI1LjgzLTJhMTIsMTIsMCwwLDAsMTAuMTEtNy4zTDE2NCw0Ni4ybDEwLjExLDIzLjk0YTEyLDEyLDAsMCwwLDEwLjExLDcuM2wyNS44MiwyWm0tMTU4LDg4LjUyYTEyLDEyLDAsMCwxLTE3LTE3bDUxLjc2LTUxLjc1YTEyLDEyLDAsMCwxLDE3LDE3Wm02My41OS04LjU3YTEyLDEyLDAsMCwxLDAsMTdsLTQ3LjU5LDQ3LjZhMTIsMTIsMCwwLDEtMTctMTdsNDcuNi00Ny41OUExMiwxMiwwLDAsMSw5Ni4wOCwxNzUuOTJabTYyLjQ0LDkuNTZhMTIsMTIsMCwwLDEsMCwxN2wtMzgsMzhhMTIsMTIsMCwwLDEtMTctMTdsMzgtMzhBMTIsMTIsMCwwLDEsMTU4LjUyLDE4NS40OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuMjQsODQuMzhsLTI4LjA2LDIzLjY4LDguNTYsMzUuMzlhMTMuMzQsMTMuMzQsMCwwLDEtNS4wOSwxMy45MSwxMy41NCwxMy41NCwwLDAsMS0xNSwuNjlMMTY0LDEzOWwtMzEuNjUsMTkuMDZhMTMuNTEsMTMuNTEsMCwwLDEtMTUtLjY5LDEzLjMyLDEzLjMyLDAsMCwxLTUuMS0xMy45MWw4LjU2LTM1LjM5TDkyLjc2LDg0LjM4YTEzLjM5LDEzLjM5LDAsMCwxLDcuNjYtMjMuNThsMzYuOTQtMi45MiwxNC4yMS0zMy42NmExMy41MSwxMy41MSwwLDAsMSwyNC44NiwwbDE0LjIxLDMzLjY2LDM2Ljk0LDIuOTJhMTMuMzksMTMuMzksMCwwLDEsNy42NiwyMy41OFpNODguMTEsMTExLjg5YTgsOCwwLDAsMC0xMS4zMiwwTDE4LjM0LDE3MC4zNGE4LDgsMCwwLDAsMTEuMzIsMTEuMzJsNTguNDUtNTguNDVBOCw4LDAsMCwwLDg4LjExLDExMS44OVptLS41LDYxLjE5TDM0LjM0LDIyNi4zNGE4LDgsMCwwLDAsMTEuMzIsMTEuMzJsNTMuMjYtNTMuMjdhOCw4LDAsMCwwLTExLjMxLTExLjMxWm03My0xLTU0LjI5LDU0LjI4YTgsOCwwLDAsMCwxMS4zMiwxMS4zMmw1NC4yOC01NC4yOGE4LDgsMCwwLDAtMTEuMzEtMTEuMzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMDgsNzguMjZsLTMxLjg0LDI2Ljg4TDIwOCwxNDUuMzNhNS40Niw1LjQ2LDAsMCwxLTguMTksNS44NkwxNjQsMTI5LjY2bC0zNS43OCwyMS41M2E1LjQ2LDUuNDYsMCwwLDEtOC4xOS01Ljg2bDkuNzMtNDAuMTlMOTcuOTIsNzguMjZhNS4zOCw1LjM4LDAsMCwxLDMuMTMtOS40OGw0MS43OS0zLjMxLDE2LjEtMzguMTRhNS41MSw1LjUxLDAsMCwxLDEwLjEyLDBsMTYuMSwzOC4xNEwyMjcsNjguNzhBNS4zOCw1LjM4LDAsMCwxLDIzMC4wOCw3OC4yNloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzkuMzUsNzAuMDhhMTMuNDEsMTMuNDEsMCwwLDAtMTEuNzctOS4yOGwtMzYuOTQtMi45MkwxNzYuNDMsMjQuMjJhMTMuNTEsMTMuNTEsMCwwLDAtMjQuODYsMEwxMzcuMzYsNTcuODgsMTAwLjQyLDYwLjhhMTMuMzksMTMuMzksMCwwLDAtNy42NiwyMy41OGwyOC4wNiwyMy42OC04LjU2LDM1LjM5YTEzLjMyLDEzLjMyLDAsMCwwLDUuMSwxMy45MSwxMy41MSwxMy41MSwwLDAsMCwxNSwuNjlMMTY0LDEzOWwzMS42NSwxOS4wNmExMy41NCwxMy41NCwwLDAsMCwxNS0uNjksMTMuMzQsMTMuMzQsMCwwLDAsNS4wOS0xMy45MWwtOC41Ni0zNS4zOSwyOC4wNi0yMy42OEExMy4zMiwxMy4zMiwwLDAsMCwyMzkuMzUsNzAuMDhaTTE5My4wOCw5OWE4LDgsMCwwLDAtMi42MSw4bDguMjgsMzQuMjFMMTY4LjEzLDEyMi44YTgsOCwwLDAsMC04LjI1LDBsLTMwLjYyLDE4LjQzTDEzNy41NCwxMDdhOCw4LDAsMCwwLTIuNjItOEwxMDgsNzYuMjZsMzUuNTItMi44MWE4LDgsMCwwLDAsNi43NC00Ljg3TDE2NCwzNS45MWwxMy43OSwzMi42N2E4LDgsMCwwLDAsNi43NCw0Ljg3bDM1LjUzLDIuODFabS0xMDUsMjQuMThMMjkuNjYsMTgxLjY2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmw1OC40NS01OC40NWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJabTEwLjgxLDQ5Ljg3YTgsOCwwLDAsMSwwLDExLjMxTDQ1LjY2LDIzNy42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJsNTMuMjctNTMuMjZBOCw4LDAsMCwxLDk4LjkyLDE3My4wOFptNzMtMWE4LDgsMCwwLDEsMCwxMS4zMmwtNTQuMjgsNTQuMjhhOCw4LDAsMCwxLTExLjMyLTExLjMybDU0LjI5LTU0LjI4QTgsOCwwLDAsMSwxNzEuOTQsMTcyLjA2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ShootingStar";
export { I as ShootingStar }
