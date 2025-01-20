
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/PaperPlaneTilt";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMzIsMjguNjhhMTYsMTYsMCwwLDAtMTUuNjYtNC4wOGwtLjE1LDBMMTkuNTcsODIuODRhMTYsMTYsMCwwLDAtMi40OSwyOS44TDEwMiwxNTRsNDEuMyw4NC44N0ExNS44NiwxNS44NiwwLDAsMCwxNTcuNzQsMjQ4cS42OSwwLDEuMzgtLjA2YTE1Ljg4LDE1Ljg4LDAsMCwwLDE0LTExLjUxbDU4LjItMTkxLjk0YzAtLjA1LDAtLjEsMC0uMTVBMTYsMTYsMCwwLDAsMjI3LjMyLDI4LjY4Wk0xNTcuODMsMjMxLjg1bC0uMDUuMTQsMC0uMDctNDAuMDYtODIuMyw0OC00OGE4LDgsMCwwLDAtMTEuMzEtMTEuMzFsLTQ4LDQ4TDI0LjA4LDk4LjI1bC0uMDcsMCwuMTQsMEwyMTYsNDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuNDcsMzEuNTJhMTEuODcsMTEuODcsMCwwLDAtMTEuODItM0wyMC43NCw4Ni42N2ExMiwxMiwwLDAsMC0xLjkxLDIyLjM4TDEwNSwxNTFsNDEuOTIsODYuMTVBMTEuODgsMTEuODgsMCwwLDAsMTU3Ljc0LDI0NGMuMzQsMCwuNjksMCwxLDBhMTEuODksMTEuODksMCwwLDAsMTAuNTItOC42M2w1OC4yMS0xOTIsMC0uMDhBMTEuODUsMTEuODUsMCwwLDAsMjI0LjQ3LDMxLjUyWm0tNC42Miw5LjU0LTU4LjIzLDE5MmE0LDQsMCwwLDEtNy40OC41OWwtNDEuMy04NC44Niw1MC01MGE0LDQsMCwxLDAtNS42Ni01LjY2bC01MCw1MC04NC45LTQxLjMxYTMuODgsMy44OCwwLDAsMS0yLjI3LTQsMy45MywzLjkzLDAsMCwxLDMtMy41NEwyMTQuOSwzNi4xNkEzLjkzLDMuOTMsMCwwLDEsMjE2LDM2YTQsNCwwLDAsMSwyLjc5LDEuMTlBMy45MywzLjkzLDAsMCwxLDIxOS44NSw0MS4wNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjUuODgsMzAuMTJhMTMuODMsMTMuODMsMCwwLDAtMTMuNy0zLjU4bC0uMTEsMEwyMC4xNCw4NC43N0ExNCwxNCwwLDAsMCwxOCwxMTAuODVsODUuNTYsNDEuNjRMMTQ1LjEyLDIzOGExMy44NywxMy44NywwLDAsMCwxMi42MSw4Yy40LDAsLjgxLDAsMS4yMS0uMDVhMTMuOSwxMy45LDAsMCwwLDEyLjI5LTEwLjA5bDU4LjItMTkxLjkzLDAtLjExQTEzLjgzLDEzLjgzLDAsMCwwLDIyNS44OCwzMC4xMlptLTgsMTAuNEwxNTkuNzMsMjMyLjQzbDAsLjExYTIsMiwwLDAsMS0zLjc2LjI2bC00MC42OC04My41OCw0OS00OWE2LDYsMCwxLDAtOC40OS04LjQ5bC00OSw0OUwyMy4xNSwxMDBhMiwyLDAsMCwxLC4zMS0zLjc0bC4xMSwwTDIxNS40OCwzOC4wOGExLjk0LDEuOTQsMCwwLDEsMS45Mi41MkEyLDIsMCwwLDEsMjE3LjkyLDQwLjUyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMTQsMjUuODZhMjAsMjAsMCwwLDAtMTkuNTctNS4xMWwtLjIyLjA3TDE4LjQ0LDc5YTIwLDIwLDAsMCwwLTMuMDYsMzcuMjVMOTksMTU3bDQwLjcxLDgzLjY1YTE5LjgxLDE5LjgxLDAsMCwwLDE4LDExLjM4Yy41NywwLDEuMTUsMCwxLjczLS4wN0ExOS44MiwxOS44MiwwLDAsMCwxNzcsMjM3LjU2TDIzNS4xOCw0NS42NWExLjQyLDEuNDIsMCwwLDAsLjA3LS4yMkEyMCwyMCwwLDAsMCwyMzAuMTQsMjUuODZaTTE1Ni45MSwyMjEuMDdsLTM0LjM3LTcwLjY0LDQ2LTQ1Ljk1YTEyLDEyLDAsMCwwLTE3LTE3bC00Niw0NkwzNC45Myw5OS4wOSwyMTAsNDZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuNCw0NC4zNHMwLC4xLDAsLjE1bC01OC4yLDE5MS45NGExNS44OCwxNS44OCwwLDAsMS0xNCwxMS41MXEtLjY5LjA2LTEuMzguMDZhMTUuODYsMTUuODYsMCwwLDEtMTQuNDItOS4xNUwxMDcsMTY0LjE1YTQsNCwwLDAsMSwuNzctNC41OGw1Ny45Mi01Ny45MmE4LDgsMCwwLDAtMTEuMzEtMTEuMzFMOTYuNDMsMTQ4LjI2YTQsNCwwLDAsMS00LjU4Ljc3TDE3LjA4LDExMi42NGExNiwxNiwwLDAsMSwyLjQ5LTI5LjhsMTkxLjk0LTU4LjIuMTUsMEExNiwxNiwwLDAsMSwyMzEuNCw0NC4zNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuNjksNDIuMThsLTU4LjIyLDE5MmE4LDgsMCwwLDEtMTQuOTIsMS4yNUwxMDgsMTQ4LDIwLjU4LDEwNS40NWE4LDgsMCwwLDEsMS4yNS0xNC45MmwxOTItNTguMjJBOCw4LDAsMCwxLDIyMy42OSw0Mi4xOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjcuMzIsMjguNjhhMTYsMTYsMCwwLDAtMTUuNjYtNC4wOGwtLjE1LDBMMTkuNTcsODIuODRhMTYsMTYsMCwwLDAtMi40OSwyOS44TDEwMiwxNTRsNDEuMyw4NC44N0ExNS44NiwxNS44NiwwLDAsMCwxNTcuNzQsMjQ4cS42OSwwLDEuMzgtLjA2YTE1Ljg4LDE1Ljg4LDAsMCwwLDE0LTExLjUxbDU4LjItMTkxLjk0YzAtLjA1LDAtLjEsMC0uMTVBMTYsMTYsMCwwLDAsMjI3LjMyLDI4LjY4Wk0xNTcuODMsMjMxLjg1bC0uMDUuMTQsMC0uMDctNDAuMDYtODIuMyw0OC00OGE4LDgsMCwwLDAtMTEuMzEtMTEuMzFsLTQ4LDQ4TDI0LjA4LDk4LjI1bC0uMDcsMCwuMTQsMEwyMTYsNDBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PaperPlaneTilt";
export { I as PaperPlaneTilt }
