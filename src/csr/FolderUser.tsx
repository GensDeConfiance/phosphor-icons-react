
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FolderUser";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNjEsMTk4LjYyYTMyLDMyLDAsMSwwLTQ1LjIzLDAsNDAsNDAsMCwwLDAtMTcuMTEsMjMuMzIsOCw4LDAsMCwwLDUuNjcsOS43OUE4LjE1LDguMTUsMCwwLDAsMTYwLDIzMmE4LDgsMCwwLDAsNy43My01Ljk1QzE3MC41NiwyMTUuNDIsMTgwLjU0LDIwOCwxOTIsMjA4czIxLjQ0LDcuNDIsMjQuMjcsMTguMDVhOCw4LDAsMSwwLDE1LjQ2LTQuMTFBNDAsNDAsMCwwLDAsMjE0LjYxLDE5OC42MlpNMTkyLDE2MGExNiwxNiwwLDEsMS0xNiwxNkExNiwxNiwwLDAsMSwxOTIsMTYwWm0yNC04OEgxMzEuMzFMMTA0LDQ0LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDkyLjY5LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjIwMC42MUExNS40LDE1LjQsMCwwLDAsMzkuMzgsMjE2aDgxLjE4YTgsOCwwLDAsMCwwLTE2SDQwVjg4SDIxNnYzMmE4LDgsMCwwLDAsMTYsMFY4OEExNiwxNiwwLDAsMCwyMTYsNzJaTTkyLjY5LDU2bDE2LDE2SDQwVjU2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDcuNSwxOTkuM2EyOCwyOCwwLDEsMC0zMSwwQTM2LjI0LDM2LjI0LDAsMCwwLDE1Ni4xMywyMjNhNCw0LDAsMCwwLDIuODQsNC44OSwzLjcsMy43LDAsMCwwLDEsLjE0LDQsNCwwLDAsMCwzLjg3LTNjMy4yOS0xMi4zOCwxNC44NS0yMSwyOC4xMy0yMXMyNC44NCw4LjY1LDI4LjEzLDIxYTQsNCwwLDEsMCw3LjczLTIuMDVBMzYuMjIsMzYuMjIsMCwwLDAsMjA3LjUsMTk5LjNaTTE3MiwxNzZhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTcyLDE3NlpNMjE2LDc2SDEyOS42NkwxMDEuMTcsNDcuNTFBMTIsMTIsMCwwLDAsOTIuNjksNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwLjYxQTExLjQsMTEuNCwwLDAsMCwzOS4zOCwyMTJoODEuMThhNCw0LDAsMCwwLDAtOEgzOS4zOEEzLjM5LDMuMzksMCwwLDEsMzYsMjAwLjYxVjg0SDIxNmE0LDQsMCwwLDEsNCw0djMyYTQsNCwwLDAsMCw4LDBWODhBMTIsMTIsMCwwLDAsMjE2LDc2Wk00MCw1Mkg5Mi42OWE0LDQsMCwwLDEsMi44MiwxLjE3TDExOC4zNCw3NkgzNlY1NkE0LDQsMCwwLDEsNDAsNTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuMjgsMTk5YTMwLDMwLDAsMSwwLTM4LjU2LDAsMzguMDksMzguMDksMCwwLDAtMTguNTIsMjMuNSw2LDYsMCwwLDAsNC4yNiw3LjM0LDYuMjYsNi4yNiwwLDAsMCwxLjU0LjIsNiw2LDAsMCwwLDUuOC00LjQ2QzE2OC44NiwyMTQsMTc5LjYzLDIwNiwxOTIsMjA2czIzLjE0LDgsMjYuMiwxOS41NGE2LDYsMCwwLDAsMTEuNi0zLjA5QTM4LjA5LDM4LjA5LDAsMCwwLDIxMS4yOCwxOTlaTTE5MiwxNThhMTgsMTgsMCwxLDEtMTgsMThBMTgsMTgsMCwwLDEsMTkyLDE1OFptMjQtODRIMTMwLjQ4TDEwMi41OSw0Ni4xYTEzLjk0LDEzLjk0LDAsMCwwLTkuOS00LjFINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwLjYxQTEzLjQsMTMuNCwwLDAsMCwzOS4zOCwyMTRoODEuMThhNiw2LDAsMCwwLDAtMTJIMzkuMzhBMS40LDEuNCwwLDAsMSwzOCwyMDAuNjFWODZIMjE2YTIsMiwwLDAsMSwyLDJ2MzJhNiw2LDAsMCwwLDEyLDBWODhBMTQsMTQsMCwwLDAsMjE2LDc0Wk00MCw1NEg5Mi42OWEyLDIsMCwwLDEsMS40MS41OUwxMTMuNTEsNzRIMzhWNTZBMiwyLDAsMCwxLDQwLDU0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuNTEsMTk3Ljk0YTM2LDM2LDAsMSwwLTU3LDAsNDMuNzUsNDMuNzUsMCwwLDAtMTUuMDgsMjMsMTIsMTIsMCwwLDAsOC41MiwxNC42N0ExMS43NywxMS43NywwLDAsMCwxNjAsMjM2YTEyLDEyLDAsMCwwLDExLjU5LTguOTJDMTc0LDIxOC4yLDE4Mi4zNSwyMTIsMTkyLDIxMnMxOCw2LjIsMjAuNCwxNS4wOGExMiwxMiwwLDAsMCwyMy4xOS02LjE3QTQzLjcsNDMuNywwLDAsMCwyMjAuNTEsMTk3Ljk0Wk0xOTIsMTY0YTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDE5MiwxNjRabTI0LTk2SDEzMy4zOWwtMjYtMjkuMjlBMjAsMjAsMCwwLDAsOTIuNDEsMzJINDBBMjAsMjAsMCwwLDAsMjAsNTJWMjAwLjYxQTE5LjQxLDE5LjQxLDAsMCwwLDM5LjM4LDIyMGg3My4xOGExMiwxMiwwLDAsMCwwLTI0SDQ0VjkySDIxMnYxNmExMiwxMiwwLDAsMCwyNCwwVjg4QTIwLDIwLDAsMCwwLDIxNiw2OFpNNDQsNjhWNTZIOTAuNjFsMTAuNjcsMTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuNzMsMjIxLjk0QTgsOCwwLDAsMSwyMjQsMjMySDE2MEE4LDgsMCwwLDEsMTUyLjI3LDIyMmE0MCw0MCwwLDAsMSwxNy4xMS0yMy4zMywzMiwzMiwwLDEsMSw0NS4yNCwwQTQwLDQwLDAsMCwxLDIzMS43MywyMjEuOTRaTTIzMiw4OHYzMmE4LDgsMCwwLDEtMTYsMFY4OEg0MFYyMDBoODAuNTZhOCw4LDAsMCwxLDAsMTZIMzkuMzhBMTUuNCwxNS40LDAsMCwxLDI0LDIwMC42MlY1NkExNiwxNiwwLDAsMSw0MCw0MEg5Mi42OUExNS44NiwxNS44NiwwLDAsMSwxMDQsNDQuNjlMMTMxLjMxLDcySDIxNkExNiwxNiwwLDAsMSwyMzIsODhaTTEwOC42OSw3MmwtMTYtMTZINDBWNzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTc2YTI0LDI0LDAsMSwxLTI0LTI0QTI0LDI0LDAsMCwxLDIxNiwxNzZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE0LjYxLDE5OC42MmEzMiwzMiwwLDEsMC00NS4yMywwLDQwLDQwLDAsMCwwLTE3LjExLDIzLjMyLDgsOCwwLDAsMCw1LjY3LDkuNzlBOC4xNSw4LjE1LDAsMCwwLDE2MCwyMzJhOCw4LDAsMCwwLDcuNzMtNS45NUMxNzAuNTYsMjE1LjQyLDE4MC41NCwyMDgsMTkyLDIwOHMyMS40NCw3LjQyLDI0LjI3LDE4LjA1YTgsOCwwLDEsMCwxNS40Ni00LjExQTQwLDQwLDAsMCwwLDIxNC42MSwxOTguNjJaTTE5MiwxNjBhMTYsMTYsMCwxLDEtMTYsMTZBMTYsMTYsMCwwLDEsMTkyLDE2MFptMjQtODhIMTMxLjMxTDEwNCw0NC42OUExNS44NiwxNS44NiwwLDAsMCw5Mi42OSw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYyMDAuNjFBMTUuNCwxNS40LDAsMCwwLDM5LjM4LDIxNmg4MS4xOGE4LDgsMCwwLDAsMC0xNkg0MFY4OEgyMTZ2MzJhOCw4LDAsMCwwLDE2LDBWODhBMTYsMTYsMCwwLDAsMjE2LDcyWk05Mi42OSw1NmwxNiwxNkg0MFY1NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FolderUser";
export { I as FolderUser }
