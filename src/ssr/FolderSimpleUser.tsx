
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/FolderSimpleUser";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNjEsMTk4LjYyYTMyLDMyLDAsMSwwLTQ1LjIzLDAsNDAsNDAsMCwwLDAtMTcuMTEsMjMuMzIsOCw4LDAsMCwwLDUuNjcsOS43OUE4LjE1LDguMTUsMCwwLDAsMTYwLDIzMmE4LDgsMCwwLDAsNy43My01Ljk1QzE3MC41NiwyMTUuNDIsMTgwLjU0LDIwOCwxOTIsMjA4czIxLjQ0LDcuNDIsMjQuMjcsMTguMDVhOCw4LDAsMSwwLDE1LjQ2LTQuMTFBNDAsNDAsMCwwLDAsMjE0LjYxLDE5OC42MlpNMTkyLDE2MGExNiwxNiwwLDEsMS0xNiwxNkExNiwxNiwwLDAsMSwxOTIsMTYwWm00MC03MnYzMmE4LDgsMCwwLDEtMTYsMFY4OEgxMzAuNjdhMTYuMTIsMTYuMTIsMCwwLDEtOS42LTMuMkw5My4zMyw2NEg0MFYyMDBoODBhOCw4LDAsMCwxLDAsMTZINDBhMTYsMTYsMCwwLDEtMTYtMTZWNjRBMTYsMTYsMCwwLDEsNDAsNDhIOTMuMzNhMTYuMTIsMTYuMTIsMCwwLDEsOS42LDMuMkwxMzAuNjcsNzJIMjE2QTE2LDE2LDAsMCwxLDIzMiw4OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDcuNSwxOTkuM2EyOCwyOCwwLDEsMC0zMSwwQTM2LjI0LDM2LjI0LDAsMCwwLDE1Ni4xMywyMjNhNCw0LDAsMCwwLDIuODQsNC44OSwzLjcsMy43LDAsMCwwLDEsLjE0LDQsNCwwLDAsMCwzLjg3LTNjMy4yOS0xMi4zOCwxNC44NS0yMSwyOC4xMy0yMXMyNC44NCw4LjY1LDI4LjEzLDIxYTQsNCwwLDEsMCw3LjczLTIuMDVBMzYuMjIsMzYuMjIsMCwwLDAsMjA3LjUsMTk5LjNaTTE3MiwxNzZhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTcyLDE3NlptNTYtODh2MzJhNCw0LDAsMCwxLTgsMFY4OGE0LDQsMCwwLDAtNC00SDEzMC42N2ExMi4wNSwxMi4wNSwwLDAsMS03LjItMi40TDk1LjczLDYwLjhhNCw0LDAsMCwwLTIuNC0uOEg0MGE0LDQsMCwwLDAtNCw0VjIwMGE0LDQsMCwwLDAsNCw0aDgwYTQsNCwwLDAsMSwwLDhINDBhMTIsMTIsMCwwLDEtMTItMTJWNjRBMTIsMTIsMCwwLDEsNDAsNTJIOTMuMzNhMTIuMDUsMTIuMDUsMCwwLDEsNy4yLDIuNGwyNy43NCwyMC44YTQsNCwwLDAsMCwyLjQuOEgyMTZBMTIsMTIsMCwwLDEsMjI4LDg4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuMjgsMTk5YTMwLDMwLDAsMSwwLTM4LjU2LDAsMzguMDksMzguMDksMCwwLDAtMTguNTIsMjMuNSw2LDYsMCwwLDAsNC4yNiw3LjM0LDYuMjYsNi4yNiwwLDAsMCwxLjU0LjIsNiw2LDAsMCwwLDUuOC00LjQ2QzE2OC44NiwyMTQsMTc5LjYzLDIwNiwxOTIsMjA2czIzLjE0LDgsMjYuMiwxOS41NGE2LDYsMCwwLDAsMTEuNi0zLjA4QTM4LjA5LDM4LjA5LDAsMCwwLDIxMS4yOCwxOTlaTTE5MiwxNThhMTgsMTgsMCwxLDEtMTgsMThBMTgsMTgsMCwwLDEsMTkyLDE1OFptMzgtNzB2MzJhNiw2LDAsMCwxLTEyLDBWODhhMiwyLDAsMCwwLTItMkgxMzAuNjdhMTQsMTQsMCwwLDEtOC40LTIuOEw5NC41Myw2Mi40YTIsMiwwLDAsMC0xLjItLjRINDBhMiwyLDAsMCwwLTIsMlYyMDBhMiwyLDAsMCwwLDIsMmg4MGE2LDYsMCwwLDEsMCwxMkg0MGExNCwxNCwwLDAsMS0xNC0xNFY2NEExNCwxNCwwLDAsMSw0MCw1MEg5My4zM2ExNCwxNCwwLDAsMSw4LjQsMi44bDI3Ljc0LDIwLjhhMiwyLDAsMCwwLDEuMi40SDIxNkExNCwxNCwwLDAsMSwyMzAsODhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuNTEsMTk3Ljk0YTM2LDM2LDAsMSwwLTU3LDAsNDMuNzUsNDMuNzUsMCwwLDAtMTUuMDgsMjMsMTIsMTIsMCwwLDAsOC41MiwxNC42N0ExMS43NywxMS43NywwLDAsMCwxNjAsMjM2YTEyLDEyLDAsMCwwLDExLjU5LTguOTJDMTc0LDIxOC4yLDE4Mi4zNSwyMTIsMTkyLDIxMnMxOCw2LjIsMjAuNCwxNS4wOGExMiwxMiwwLDAsMCwyMy4xOS02LjE3QTQzLjcsNDMuNywwLDAsMCwyMjAuNTEsMTk3Ljk0Wk0xOTIsMTY0YTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDE5MiwxNjRabTQ0LTc2djIwYTEyLDEyLDAsMCwxLTI0LDBWOTJIMTMwLjY3YTIwLjEsMjAuMSwwLDAsMS0xMi00TDkyLDY4SDQ0VjE5Nmg2OGExMiwxMiwwLDAsMSwwLDI0SDQwYTIwLDIwLDAsMCwxLTIwLTIwVjY0QTIwLDIwLDAsMCwxLDQwLDQ0SDkzLjMzYTIwLjEyLDIwLjEyLDAsMCwxLDEyLDRMMTMyLDY4aDg0QTIwLDIwLDAsMCwxLDIzNiw4OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuNzMsMjIxLjk0QTgsOCwwLDAsMSwyMjQsMjMySDE2MEE4LDgsMCwwLDEsMTUyLjI3LDIyMmE0MCw0MCwwLDAsMSwxNy4xMS0yMy4zMywzMiwzMiwwLDEsMSw0NS4yNCwwQTQwLDQwLDAsMCwxLDIzMS43MywyMjEuOTRaTTIxNiw3MkgxMzAuNjdMMTAyLjkzLDUxLjJhMTYuMTIsMTYuMTIsMCwwLDAtOS42LTMuMkg0MEExNiwxNiwwLDAsMCwyNCw2NFYyMDBhMTYsMTYsMCwwLDAsMTYsMTZoODBhOCw4LDAsMCwwLDAtMTZINDBWNjRIOTMuMzNsMjcuNzQsMjAuOGExNi4xMiwxNi4xMiwwLDAsMCw5LjYsMy4ySDIxNnYzMmE4LDgsMCwwLDAsMTYsMFY4OEExNiwxNiwwLDAsMCwyMTYsNzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTc2YTI0LDI0LDAsMSwxLTI0LTI0QTI0LDI0LDAsMCwxLDIxNiwxNzZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE0LjYxLDE5OC42MmEzMiwzMiwwLDEsMC00NS4yMywwLDQwLDQwLDAsMCwwLTE3LjExLDIzLjMyLDgsOCwwLDAsMCw1LjY3LDkuNzlBOC4xNSw4LjE1LDAsMCwwLDE2MCwyMzJhOCw4LDAsMCwwLDcuNzMtNS45NUMxNzAuNTYsMjE1LjQyLDE4MC41NCwyMDgsMTkyLDIwOHMyMS40NCw3LjQyLDI0LjI3LDE4LjA1YTgsOCwwLDEsMCwxNS40Ni00LjExQTQwLDQwLDAsMCwwLDIxNC42MSwxOTguNjJaTTE5MiwxNjBhMTYsMTYsMCwxLDEtMTYsMTZBMTYsMTYsMCwwLDEsMTkyLDE2MFptNDAtNzJ2MzJhOCw4LDAsMCwxLTE2LDBWODhIMTMwLjY3YTE2LjEyLDE2LjEyLDAsMCwxLTkuNi0zLjJMOTMuMzMsNjRINDBWMjAwaDgwYTgsOCwwLDAsMSwwLDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjY0QTE2LDE2LDAsMCwxLDQwLDQ4SDkzLjMzYTE2LjEyLDE2LjEyLDAsMCwxLDkuNiwzLjJMMTMwLjY3LDcySDIxNkExNiwxNiwwLDAsMSwyMzIsODhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FolderSimpleUser";
export { I as FolderSimpleUser }
