
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/HighHeel";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEsMTU2LjE5LDE4MCwxNDQuNyw2OS42NiwzNC4zNGE4LDgsMCwwLDAtMTEuNTYuMjZDMzYuMTEsNTguNjQsMjQsODksMjQsMTIwdjcyYTE2LDE2LDAsMCwwLDE2LDE2SDcyYTE2LDE2LDAsMCwwLDE2LTE2VjE0My4wNmMyLjQ5LDEuNDUsNC45NCwzLDcuMzQsNC42NGExMTIuNDUsMTEyLjQ1LDAsMCwxLDQwLjU1LDUwLjM5QTE1LjksMTUuOSwwLDAsMCwxNTAuNzIsMjA4SDI0MGExNiwxNiwwLDAsMCwxNi0xNnYtNC43M0EzMS43MiwzMS43MiwwLDAsMCwyMzEsMTU2LjE5Wk03MiwxOTJINDBWMTI4LjI5YTExMC44OCwxMTAuODgsMCwwLDEsMzIsNy4xMlptMTY4LDBIMTUwLjY4YTEyOC4zNiwxMjguMzYsMCwwLDAtNDYuMjctNTcuNDYsMTI2LjksMTI2LjksMCwwLDAtNjQuMTItMjIuMjZBMTEwLjY3LDExMC42NywwLDAsMSw2NC40Niw1MS43OEwxNzAuMzQsMTU3LjY2YTgsOCwwLDAsMCwzLjksMi4xNGw1My4yNCwxMkExNS44MSwxNS44MSwwLDAsMSwyNDAsMTg3LjMxWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMDksMTYwLjA5LDE3OCwxNDguMzUsNjYuODMsMzcuMTdBNCw0LDAsMCwwLDYzLjkxLDM2YTQsNCwwLDAsMC0yLjg2LDEuM0MzOS43NCw2MC42LDI4LDkwLDI4LDEyMHY3MmExMiwxMiwwLDAsMCwxMiwxMkg3MmExMiwxMiwwLDAsMCwxMi0xMlYxMzYuMzZhMTE2LjczLDExNi43MywwLDAsMSw1NS41OSw2MC4yM0ExMS45MywxMS45MywwLDAsMCwxNTAuNzIsMjA0SDI0MGExMiwxMiwwLDAsMCwxMi0xMnYtNC43M0EyNy43NCwyNy43NCwwLDAsMCwyMzAuMDksMTYwLjA5Wk03NiwxOTJhNCw0LDAsMCwxLTQsNEg0MGE0LDQsMCwwLDEtNC00VjEyNC4wOGExMTQuOSwxMTQuOSwwLDAsMSw0MCw4LjYyWm0xNjgsMGE0LDQsMCwwLDEtNCw0SDE1MC43MmE0LDQsMCwwLDEtMy43MS0yLjQyLDEyNC4zNiwxMjQuMzYsMCwwLDAtNDQuODctNTUuNzYsMTIzLjEsMTIzLjEsMCwwLDAtNjYuMDctMjEuNzVjLjkzLTI1LjMzLDEwLjgtNTAsMjguMTEtNzAuMjNsMTA5LDEwOWE0LDQsMCwwLDAsMiwxLjA3bDUzLjIyLDEyQTE5Ljc5LDE5Ljc5LDAsMCwxLDI0NCwxODcuMzFaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuNTMsMTU4LjE0LDE3OSwxNDYuNTMsNjguMjQsMzUuNzZhNiw2LDAsMCwwLTguNjcuMTlDMzcuOTIsNTkuNjIsMjYsODkuNDcsMjYsMTIwdjcyYTE0LDE0LDAsMCwwLDE0LDE0SDcyYTE0LDE0LDAsMCwwLDE0LTE0VjEzOS42NWExMTUsMTE1LDAsMCwxLDUxLjc0LDU3LjY5LDEzLjkyLDEzLjkyLDAsMCwwLDEzLDguNjZIMjQwYTE0LDE0LDAsMCwwLDE0LTE0di00LjczQTI5LjczLDI5LjczLDAsMCwwLDIzMC41MywxNTguMTRaTTc0LDE5MmEyLDIsMCwwLDEtMiwySDQwYTIsMiwwLDAsMS0yLTJWMTI2LjE4QTExMi43NSwxMTIuNzUsMCwwLDEsNzQsMTM0Wm0xNjgsMGEyLDIsMCwwLDEtMiwySDE1MC43MmEyLDIsMCwwLDEtMS44Ni0xLjE4LDEyNi41MywxMjYuNTMsMCwwLDAtNDUuNTgtNTYuNjUsMTI1LjEzLDEyNS4xMywwLDAsMC02NS4xMi0yMkMzOS40Nyw5MC42Niw0OC42LDY3LjgzLDY0LjMxLDQ4Ljc5TDE3MS43NiwxNTYuMjRhNiw2LDAsMCwwLDIuOTIsMS42MWw1My4yMywxMkExNy44MSwxNy44MSwwLDAsMSwyNDIsMTg3LjMxWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuOTMsMTUyLjMxbC00NS44Mi0xMS4xN0w3Mi40OSwzMS41MWExMiwxMiwwLDAsMC0xNy4zNC4zOUMzMi40OCw1Ni42OCwyMCw4OCwyMCwxMjB2NzJhMjAsMjAsMCwwLDAsMjAsMjBINzJhMjAsMjAsMCwwLDAsMjAtMjBWMTUwLjI5bDEuMDcuNzFhMTA4LjQ0LDEwOC40NCwwLDAsMSwzOS4xMSw0OC42QTE5LjksMTkuOSwwLDAsMCwxNTAuNzIsMjEySDIzNmEyMCwyMCwwLDAsMCwyMC0yMHYtNC43M0EzNS42OCwzNS42OCwwLDAsMCwyMjcuOTMsMTUyLjMxWk02OCwxODhINDRWMTMyLjY3YTEwNi42OSwxMDYuNjksMCwwLDEsMjQsNS41MVptMTY0LDBIMTUzLjM1YTEzMi40NCwxMzIuNDQsMCwwLDAtNDYuNjctNTYuNzcsMTMxLjA4LDEzMS4wOCwwLDAsMC02Mi0yMi42M0ExMDYuNjksMTA2LjY5LDAsMCwxLDY0Ljg3LDU3Ljg0TDE2Ny41MSwxNjAuNDlhMTIuMDYsMTIuMDYsMCwwLDAsNS42NSwzLjE3bDQ5LjIsMTIsLjI1LjA2YTExLjg0LDExLjg0LDAsMCwxLDkuMzksMTEuNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiwxNDRhOTUuMjgsOTUuMjgsMCwwLDEsMzcuNTMsNy42Nyw0LDQsMCwwLDEsMi40NywzLjdWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjE0OGE0LDQsMCwwLDEsNC00Wm0xOTksMTIuMTlMMTgwLDE0NC43MSw2OS42NiwzNC4zNGE4LDgsMCwwLDAtMTEuNTYuMjZDMzYuMTEsNTguNjQsMjQsODksMjQsMTIwYTgsOCwwLDAsMCw4LDgsMTExLjIsMTExLjIsMCwwLDEsNjMuMzQsMTkuNywxMTIuNDUsMTEyLjQ1LDAsMCwxLDQwLjU1LDUwLjM5QTE1LjksMTUuOSwwLDAsMCwxNTAuNzIsMjA4SDI0MGExNiwxNiwwLDAsMCwxNi0xNnYtNC43M0EzMS43MiwzMS43MiwwLDAsMCwyMzEsMTU2LjE5WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTg3LjMxVjE5MmE4LDgsMCwwLDEtOCw4SDE1MC43MmE4LDgsMCwwLDEtNy40Mi00LjkyQzEyNS41MSwxNTEuMjgsODIuMzgsMTIwLDMyLDEyMGMwLTMxLDEyLjU5LTU4Ljc4LDMyLTgwTDE3NiwxNTJsNTMuMjEsMTJBMjMuOTIsMjMuOTIsMCwwLDEsMjQ4LDE4Ny4zMVoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzEsMTU2LjE5LDE4MCwxNDQuNzEsNjkuNjYsMzQuMzRhOCw4LDAsMCwwLTExLjU2LjI2QzM2LjExLDU4LjY0LDI0LDg5LDI0LDEyMHY3MmExNiwxNiwwLDAsMCwxNiwxNkg3MmExNiwxNiwwLDAsMCwxNi0xNlYxNDMuMDZjMi40OSwxLjQ1LDQuOTQsMyw3LjM0LDQuNjRhMTEyLjQ1LDExMi40NSwwLDAsMSw0MC41NSw1MC4zOUExNS45LDE1LjksMCwwLDAsMTUwLjcyLDIwOEgyNDBhMTYsMTYsMCwwLDAsMTYtMTZ2LTQuNzNBMzEuNzIsMzEuNzIsMCwwLDAsMjMxLDE1Ni4xOVpNNzIsMTkySDQwVjEyOC4yOWExMTAuODgsMTEwLjg4LDAsMCwxLDMyLDcuMTJabTE2OCwwSDE1MC42OGExMjguMzYsMTI4LjM2LDAsMCwwLTQ2LjI3LTU3LjQ2LDEyNi45LDEyNi45LDAsMCwwLTY0LjEyLTIyLjI2QTExMC42NywxMTAuNjcsMCwwLDEsNjQuNDYsNTEuNzhMMTcwLjM0LDE1Ny42NmE4LDgsMCwwLDAsMy45LDIuMTRsNTMuMjQsMTJBMTUuODEsMTUuODEsMCwwLDEsMjQwLDE4Ny4zMVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "HighHeel";
export { I as HighHeel }
