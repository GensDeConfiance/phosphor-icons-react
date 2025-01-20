
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Trophy";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRIMjA4VjQ4YTgsOCwwLDAsMC04LThINTZhOCw4LDAsMCwwLTgsOFY2NEgyNEExNiwxNiwwLDAsMCw4LDgwVjk2YTQwLDQwLDAsMCwwLDQwLDQwaDMuNjVBODAuMTMsODAuMTMsMCwwLDAsMTIwLDE5MS42MVYyMTZIOTZhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZIMTM2VjE5MS41OGMzMS45NC0zLjIzLDU4LjQ0LTI1LjY0LDY4LjA4LTU1LjU4SDIwOGE0MCw0MCwwLDAsMCw0MC00MFY4MEExNiwxNiwwLDAsMCwyMzIsNjRaTTQ4LDEyMEEyNCwyNCwwLDAsMSwyNCw5NlY4MEg0OHYzMnEwLDQsLjM5LDhabTE0NC04LjljMCwzNS41Mi0yOSw2NC42NC02NCw2NC45YTY0LDY0LDAsMCwxLTY0LTY0VjU2SDE5MlpNMjMyLDk2YTI0LDI0LDAsMCwxLTI0LDI0aC0uNWE4MS44MSw4MS44MSwwLDAsMCwuNS04LjlWODBoMjRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjhIMjA0VjQ4YTQsNCwwLDAsMC00LTRINTZhNCw0LDAsMCwwLTQsNFY2OEgyNEExMiwxMiwwLDAsMCwxMiw4MFY5NmEzNiwzNiwwLDAsMCwzNiwzNmg2LjY2QTc2LDc2LDAsMCwwLDEyNCwxODcuODlWMjIwSDk2YTQsNCwwLDAsMCwwLDhoNjRhNCw0LDAsMCwwLDAtOEgxMzJWMTg3Ljg4YzMyLjkzLTEuNzQsNjAuNDEtMjQuOTEsNjkuMTEtNTUuODhIMjA4YTM2LDM2LDAsMCwwLDM2LTM2VjgwQTEyLDEyLDAsMCwwLDIzMiw2OFpNNDgsMTI0QTI4LDI4LDAsMCwxLDIwLDk2VjgwYTQsNCwwLDAsMSw0LTRINTJ2MzZhNzcsNzcsMCwwLDAsMSwxMlptMTQ4LTEyLjljMCwzNy43MS0zMC43OSw2OC42Mi02OCw2OC45YTY4LDY4LDAsMCwxLTY4LTY4VjUySDE5NlpNMjM2LDk2YTI4LDI4LDAsMCwxLTI4LDI4aC01LjFhNzcuMzUsNzcuMzUsMCwwLDAsMS4xLTEyLjlWNzZoMjhhNCw0LDAsMCwxLDQsNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjZIMjA2VjQ4YTYsNiwwLDAsMC02LTZINTZhNiw2LDAsMCwwLTYsNlY2NkgyNEExNCwxNCwwLDAsMCwxMCw4MFY5NmEzOCwzOCwwLDAsMCwzOCwzOGg1LjE0QTc4LDc4LDAsMCwwLDEyMiwxODkuNzVWMjE4SDk2YTYsNiwwLDAsMCwwLDEyaDY0YTYsNiwwLDAsMCwwLTEySDEzNFYxODkuNzVjMzIuNDQtMi41Miw1OS40My0yNS4zLDY4LjYyLTU1Ljc1SDIwOGEzOCwzOCwwLDAsMCwzOC0zOFY4MEExNCwxNCwwLDAsMCwyMzIsNjZaTTQ4LDEyMkEyNiwyNiwwLDAsMSwyMiw5NlY4MGEyLDIsMCwwLDEsMi0ySDUwdjM0YTgwLjg3LDgwLjg3LDAsMCwwLC42NSwxMFptMTQ2LTEwLjljMCwzNi42Mi0yOS4zOCw2Ni42My02NS41LDY2LjlBNjYsNjYsMCwwLDEsNjIsMTEyVjU0SDE5NFpNMjM0LDk2YTI2LDI2LDAsMCwxLTI2LDI2aC0yLjc3YTc4LjQ1LDc4LjQ1LDAsMCwwLC43Ny0xMC45Vjc4aDI2YTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjBIMjEyVjQ4YTEyLDEyLDAsMCwwLTEyLTEySDU2QTEyLDEyLDAsMCwwLDQ0LDQ4VjYwSDI0QTIwLDIwLDAsMCwwLDQsODBWOTZhNDQuMDUsNDQuMDUsMCwwLDAsNDQsNDRoLjc3QTg0LjE4LDg0LjE4LDAsMCwwLDExNiwxOTUuMTVWMjEySDk2YTEyLDEyLDAsMCwwLDAsMjRoNjRhMTIsMTIsMCwwLDAsMC0yNEgxNDBWMTk1LjExYzMwLjk0LTQuNTEsNTYuNTMtMjYuMiw2Ny01NS4xMWgxYTQ0LjA1LDQ0LjA1LDAsMCwwLDQ0LTQ0VjgwQTIwLDIwLDAsMCwwLDIzMiw2MFpNMjgsOTZWODRINDR2MjhjMCwxLjIxLDAsMi40MS4wOSwzLjYxQTIwLDIwLDAsMCwxLDI4LDk2Wm0xNjAsMTUuMWMwLDMzLjMzLTI2LjcxLDYwLjY1LTU5LjU0LDYwLjlBNjAsNjAsMCwwLDEsNjgsMTEyVjYwSDE4OFpNMjI4LDk2YTIwLDIwLDAsMCwxLTE2LjEyLDE5LjYyYy4wOC0xLjUuMTItMywuMTItNC41MlY4NGgxNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRIMjA4VjQ4YTgsOCwwLDAsMC04LThINTZhOCw4LDAsMCwwLTgsOFY2NEgyNEExNiwxNiwwLDAsMCw4LDgwVjk2YTQwLDQwLDAsMCwwLDQwLDQwaDMuNjVBODAuMTMsODAuMTMsMCwwLDAsMTIwLDE5MS42MVYyMTZIOTZhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZIMTM2VjE5MS41OGMzMS45NC0zLjIzLDU4LjQ0LTI1LjY0LDY4LjA4LTU1LjU4SDIwOGE0MCw0MCwwLDAsMCw0MC00MFY4MEExNiwxNiwwLDAsMCwyMzIsNjRaTTQ4LDEyMEEyNCwyNCwwLDAsMSwyNCw5NlY4MEg0OHYzMnEwLDQsLjM5LDhaTTIzMiw5NmEyNCwyNCwwLDAsMS0yNCwyNGgtLjVhODEuODEsODEuODEsMCwwLDAsLjUtOC45VjgwaDI0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDh2NjMuMWMwLDM5LjctMzEuNzUsNzIuNi03MS40NSw3Mi45QTcyLDcyLDAsMCwxLDU2LDExMlY0OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzIsNjRIMjA4VjQ4YTgsOCwwLDAsMC04LThINTZhOCw4LDAsMCwwLTgsOFY2NEgyNEExNiwxNiwwLDAsMCw4LDgwVjk2YTQwLDQwLDAsMCwwLDQwLDQwaDMuNjVBODAuMTMsODAuMTMsMCwwLDAsMTIwLDE5MS42MVYyMTZIOTZhOCw4LDAsMCwwLDAsMTZoNjRhOCw4LDAsMCwwLDAtMTZIMTM2VjE5MS41OGMzMS45NC0zLjIzLDU4LjQ0LTI1LjY0LDY4LjA4LTU1LjU4SDIwOGE0MCw0MCwwLDAsMCw0MC00MFY4MEExNiwxNiwwLDAsMCwyMzIsNjRaTTQ4LDEyMEEyNCwyNCwwLDAsMSwyNCw5NlY4MEg0OHYzMnEwLDQsLjM5LDhabTE0NC04LjljMCwzNS41Mi0yOSw2NC42NC02NCw2NC45YTY0LDY0LDAsMCwxLTY0LTY0VjU2SDE5MlpNMjMyLDk2YTI0LDI0LDAsMCwxLTI0LDI0aC0uNWE4MS44MSw4MS44MSwwLDAsMCwuNS04LjlWODBoMjRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Trophy";
export { I as Trophy }
