
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Cow";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMTkyYTgsOCwwLDAsMS04LDhIODBhOCw4LDAsMCwxLDAtMTZIOTZBOCw4LDAsMCwxLDEwNCwxOTJabTcyLThIMTYwYTgsOCwwLDAsMCwwLDE2aDE2YTgsOCwwLDAsMCwwLTE2Wm0tNzYtNDhhMTIsMTIsMCwxLDAtMTItMTJBMTIsMTIsMCwwLDAsMTAwLDEzNlptNTYsMGExMiwxMiwwLDEsMC0xMi0xMkExMiwxMiwwLDAsMCwxNTYsMTM2Wm04OC4zOS0xMy44OEExNiwxNiwwLDAsMSwyMzIsMTI4SDIwMHYzMmE0MCw0MCwwLDAsMS0yNCw3Mkg4MGE0MCw0MCwwLDAsMS0yNC03MlYxMjhIMjRBMTYsMTYsMCwwLDEsOC4zMSwxMDksNTYuMTMsNTYuMTMsMCwwLDEsNjMuMjIsNjRoMS42NEE1NS44Myw1NS44MywwLDAsMSw0OCwyNGE4LDgsMCwwLDEsMTYsMCw0MCw0MCwwLDAsMCw0MCw0MGg0OGE0MCw0MCwwLDAsMCw0MC00MCw4LDgsMCwwLDEsMTYsMCw1NS44Myw1NS44MywwLDAsMS0xNi44Niw0MGgxLjY0YTU2LjEzLDU2LjEzLDAsMCwxLDU0LjkxLDQ1QTE1LjgyLDE1LjgyLDAsMCwxLDI0NC4zOSwxMjIuMTJaTTcyLDE1Mi44YTQwLjU3LDQwLjU3LDAsMCwxLDgtLjhoOTZhNDAuNTcsNDAuNTcsMCwwLDEsOCwuOFYxMDRhMjQsMjQsMCwwLDAtMjQtMjRIOTZhMjQsMjQsMCwwLDAtMjQsMjRaTTU2LDExMnYtOGEzOS44MSwzOS44MSwwLDAsMSw4LTI0aC0uOEE0MC4wOSw0MC4wOSwwLDAsMCwyNCwxMTJabTE0NCw4MGEyNCwyNCwwLDAsMC0yNC0yNEg4MGEyNCwyNCwwLDAsMCwwLDQ4aDk2QTI0LDI0LDAsMCwwLDIwMCwxOTJabTMyLTgwYTQwLjA4LDQwLjA4LDAsMCwwLTM5LjItMzJIMTkyYTM5LjgxLDM5LjgxLDAsMCwxLDgsMjR2OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTkyYTQsNCwwLDAsMS00LDRIODBhNCw0LDAsMCwxLDAtOEg5NkE0LDQsMCwwLDEsMTAwLDE5MlptNzYtNEgxNjBhNCw0LDAsMCwwLDAsOGgxNmE0LDQsMCwwLDAsMC04Wm0tNzYtNzJhOCw4LDAsMSwwLDgsOEE4LDgsMCwwLDAsMTAwLDExNlptNTYsMGE4LDgsMCwxLDAsOCw4QTgsOCwwLDAsMCwxNTYsMTE2Wm04NS4zLDMuNTlBMTIsMTIsMCwwLDEsMjMyLDEyNEgxOTZ2MzguMDhBMzYsMzYsMCwwLDEsMTc2LDIyOEg4MGEzNiwzNiwwLDAsMS0yMC02NS45MlYxMjRIMjRhMTIsMTIsMCwwLDEtOS4zMi00LjQxLDExLjgyLDExLjgyLDAsMCwxLTIuNDctOS44NUE1Mi4xMSw1Mi4xMSwwLDAsMSw2My4yMiw2OEg3Ni4zNEE1Miw1MiwwLDAsMSw1MiwyNGE0LDQsMCwwLDEsOCwwLDQ0LjA1LDQ0LjA1LDAsMCwwLDQ0LDQ0aDQ4YTQ0LjA1LDQ0LjA1LDAsMCwwLDQ0LTQ0LDQsNCwwLDAsMSw4LDAsNTIsNTIsMCwwLDEtMjQuMzQsNDRoMTMuMTJhNTIuMTEsNTIuMTEsMCwwLDEsNTEsNDEuNzRBMTEuODIsMTEuODIsMCwwLDEsMjQxLjMsMTE5LjU5Wk02MCwxMTZWMTA0QTM1Ljk0LDM1Ljk0LDAsMCwxLDczLjQxLDc2SDYzLjIyYTQ0LjA5LDQ0LjA5LDAsMCwwLTQzLjE0LDM1LjMxLDMuODIsMy44MiwwLDAsMCwuODEsMy4yMUE0LDQsMCwwLDAsMjQsMTE2Wm0xMTYsNDhIODBhMjgsMjgsMCwwLDAsMCw1Nmg5NmEyOCwyOCwwLDAsMCwwLTU2Wm0xMi01Ljk0VjEwNGEyOCwyOCwwLDAsMC0yOC0yOEg5NmEyOCwyOCwwLDAsMC0yOCwyOHY1NC4wNkEzNS44OCwzNS44OCwwLDAsMSw4MCwxNTZoOTZBMzUuODgsMzUuODgsMCwwLDEsMTg4LDE1OC4wNlptNDcuOTItNDYuNzVBNDQuMDksNDQuMDksMCwwLDAsMTkyLjc4LDc2SDE4Mi41OUEzNS45NCwzNS45NCwwLDAsMSwxOTYsMTA0djEyaDM2YTQsNCwwLDAsMCwzLjEzLTEuNDhBMy44MiwzLjgyLDAsMCwwLDIzNS45MiwxMTEuMzFaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDIsMTkyYTYsNiwwLDAsMS02LDZIODBhNiw2LDAsMCwxLDAtMTJIOTZBNiw2LDAsMCwxLDEwMiwxOTJabTc0LTZIMTYwYTYsNiwwLDAsMCwwLDEyaDE2YTYsNiwwLDAsMCwwLTEyWm0tNzYtNzJhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsMTAwLDExNFptNTYsMGExMCwxMCwwLDEsMCwxMCwxMEExMCwxMCwwLDAsMCwxNTYsMTE0Wm04Ni44NSw2Ljg1QTE0LDE0LDAsMCwxLDIzMiwxMjZIMTk4djM1LjA1QTM4LDM4LDAsMCwxLDE3NiwyMzBIODBhMzgsMzgsMCwwLDEtMjItNjguOTVWMTI2SDI0YTE0LDE0LDAsMCwxLTEwLjg3LTUuMTUsMTMuODIsMTMuODIsMCwwLDEtMi44OC0xMS41QTU0LjEyLDU0LjEyLDAsMCwxLDYzLjIyLDY2aDYuODlBNTMuOTMsNTMuOTMsMCwwLDEsNTAsMjRhNiw2LDAsMCwxLDEyLDAsNDIsNDIsMCwwLDAsNDIsNDJoNDhhNDIsNDIsMCwwLDAsNDItNDIsNiw2LDAsMCwxLDEyLDAsNTMuOTMsNTMuOTMsMCwwLDEtMjAuMTEsNDJoNi44OWE1NC4xMiw1NC4xMiwwLDAsMSw1Mi45NSw0My4zNUExMy44MiwxMy44MiwwLDAsMSwyNDIuODUsMTIwLjg1Wk01OCwxMTRWMTA0QTM3Ljg3LDM3Ljg3LDAsMCwxLDY4LjMyLDc4aC01LjFBNDIuMDgsNDIuMDgsMCwwLDAsMjIsMTExLjdhMS44MywxLjgzLDAsMCwwLC40LDEuNTVBMiwyLDAsMCwwLDI0LDExNFptMTQ0LDc4YTI2LDI2LDAsMCwwLTI2LTI2SDgwYTI2LDI2LDAsMCwwLDAsNTJoOTZBMjYsMjYsMCwwLDAsMjAyLDE5MlptLTE2LTM2LjY2VjEwNGEyNiwyNiwwLDAsMC0yNi0yNkg5NmEyNiwyNiwwLDAsMC0yNiwyNnY1MS4zNEEzNy45NCwzNy45NCwwLDAsMSw4MCwxNTRoOTZBMzcuOTQsMzcuOTQsMCwwLDEsMTg2LDE1NS4zNFptNDgtNDMuNjRBNDIuMDgsNDIuMDgsMCwwLDAsMTkyLjc4LDc4aC01LjFBMzcuODcsMzcuODcsMCwwLDEsMTk4LDEwNHYxMGgzNGEyLDIsMCwwLDAsMS41OC0uNzVBMS44MywxLjgzLDAsMCwwLDIzNCwxMTEuN1oiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTI4YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDEyMCwxMjhabTMyLTE2YTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDE1MiwxMTJabTk1LjQ4LDEyLjY2QTIwLDIwLDAsMCwxLDIzMiwxMzJIMjA0djM1LjA1QTM4LDM4LDAsMCwxLDE4MiwyMzZINzRhMzgsMzgsMCwwLDEtMjItNjguOTVWMTMySDI0QTIwLDIwLDAsMCwxLDQuMzksMTA4LjE3YTYwLjE1LDYwLjE1LDAsMCwxLDUyLTQ3Ljc2QTU5LjcsNTkuNywwLDAsMSw0NCwyNGExMiwxMiwwLDAsMSwyNCwwLDM2LDM2LDAsMCwwLDM2LDM2aDQ4YTM2LDM2LDAsMCwwLDM2LTM2LDEyLDEyLDAsMCwxLDI0LDAsNTkuNyw1OS43LDAsMCwxLTEyLjM1LDM2LjQxLDYwLjE1LDYwLjE1LDAsMCwxLDUyLDQ3Ljc2QTE5Ljc4LDE5Ljc4LDAsMCwxLDI0Ny40OCwxMjQuNjZaTTc2LDE2MEgxODBWMTA0YTIwLDIwLDAsMCwwLTIwLTIwSDk2YTIwLDIwLDAsMCwwLTIwLDIwWk01Ni41LDg0LjY0QTM2LjE1LDM2LjE1LDAsMCwwLDI5LjI2LDEwOEg1MnYtNEE0My43MSw0My43MSwwLDAsMSw1Ni41LDg0LjY0Wk0xOTYsMTk4YTE0LDE0LDAsMCwwLTE0LTE0SDc0YTE0LDE0LDAsMCwwLDAsMjhIMTgyQTE0LDE0LDAsMCwwLDE5NiwxOThabTMwLjc0LTkwQTM2LjE1LDM2LjE1LDAsMCwwLDE5OS41LDg0LjY0LDQzLjcxLDQzLjcxLDAsMCwxLDIwNCwxMDR2NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMTkyYTgsOCwwLDAsMS04LDhIODBhOCw4LDAsMCwxLDAtMTZIOTZBOCw4LDAsMCwxLDEwNCwxOTJabTcyLThIMTYwYTgsOCwwLDAsMCwwLDE2aDE2YTgsOCwwLDAsMCwwLTE2Wm02OC4zOS02MS44OEExNiwxNiwwLDAsMSwyMzIsMTI4SDIwMHYzMmE0MCw0MCwwLDAsMS0yNCw3Mkg4MGE0MCw0MCwwLDAsMS0yNC03MlYxMjhIMjRBMTYsMTYsMCwwLDEsOC4zMSwxMDksNTYuMTMsNTYuMTMsMCwwLDEsNjMuMjIsNjRoMS42NEE1NS44Myw1NS44MywwLDAsMSw0OCwyNGE4LDgsMCwwLDEsMTYsMCw0MCw0MCwwLDAsMCw0MCw0MGg0OGE0MCw0MCwwLDAsMCw0MC00MCw4LDgsMCwwLDEsMTYsMCw1NS44Myw1NS44MywwLDAsMS0xNi44Niw0MGgxLjY0YTU2LjEzLDU2LjEzLDAsMCwxLDU0LjkxLDQ1QTE1LjgyLDE1LjgyLDAsMCwxLDI0NC4zOSwxMjIuMTJaTTE0NCwxMjRhMTIsMTIsMCwxLDAsMTItMTJBMTIsMTIsMCwwLDAsMTQ0LDEyNFptLTU2LDBhMTIsMTIsMCwxLDAsMTItMTJBMTIsMTIsMCwwLDAsODgsMTI0Wk01NiwxMTJ2LThhMzkuODEsMzkuODEsMCwwLDEsOC0yNGgtLjhBNDAuMDksNDAuMDksMCwwLDAsMjQsMTEyWm0xNDQsODBhMjQsMjQsMCwwLDAtMjQtMjRIODBhMjQsMjQsMCwwLDAsMCw0OGg5NkEyNCwyNCwwLDAsMCwyMDAsMTkyWm0zMi04MGE0MC4wOCw0MC4wOCwwLDAsMC0zOS4yLTMySDE5MmEzOS44MSwzOS44MSwwLDAsMSw4LDI0djhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTkyaDBhMzIsMzIsMCwwLDEtMzIsMzJIODBhMzIsMzIsMCwwLDEtMzItMzJoMGEzMiwzMiwwLDAsMSwzMi0zMmg5NkEzMiwzMiwwLDAsMSwyMDgsMTkyWk02NCwxMDRBMzIsMzIsMCwwLDEsOTYsNzJINjMuMjJhNDgsNDgsMCwwLDAtNDcuMDcsMzguNTNBOCw4LDAsMCwwLDI0LDEyMEg2NFptMTc1Ljg1LDYuNTNBNDgsNDgsMCwwLDAsMTkyLjc4LDcySDE2MGEzMiwzMiwwLDAsMSwzMiwzMnYxNmg0MEE4LDgsMCwwLDAsMjM5Ljg1LDExMC41M1oiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMDQsMTkyYTgsOCwwLDAsMS04LDhIODBhOCw4LDAsMCwxLDAtMTZIOTZBOCw4LDAsMCwxLDEwNCwxOTJabTcyLThIMTYwYTgsOCwwLDAsMCwwLDE2aDE2YTgsOCwwLDAsMCwwLTE2Wm0tNzYtNzJhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTAwLDExMlptNTYsMGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCwxNTYsMTEyWm04OC4zOSwxMC4xMkExNiwxNiwwLDAsMSwyMzIsMTI4SDIwMHYzMmE0MCw0MCwwLDAsMS0yNCw3Mkg4MGE0MCw0MCwwLDAsMS0yNC03MlYxMjhIMjRBMTYsMTYsMCwwLDEsOC4zMSwxMDksNTYuMTMsNTYuMTMsMCwwLDEsNjMuMjIsNjRoMS42NEE1NS44Myw1NS44MywwLDAsMSw0OCwyNGE4LDgsMCwwLDEsMTYsMCw0MCw0MCwwLDAsMCw0MCw0MGg0OGE0MCw0MCwwLDAsMCw0MC00MCw4LDgsMCwwLDEsMTYsMCw1NS44Myw1NS44MywwLDAsMS0xNi44Niw0MGgxLjY0YTU2LjEzLDU2LjEzLDAsMCwxLDU0LjkxLDQ1QTE1LjgyLDE1LjgyLDAsMCwxLDI0NC4zOSwxMjIuMTJaTTU2LDExMnYtOGEzOS44MSwzOS44MSwwLDAsMSw4LTI0aC0uOEE0MC4wOSw0MC4wOSwwLDAsMCwyNCwxMTJabTE0NCw4MGEyNCwyNCwwLDAsMC0yNC0yNEg4MGEyNCwyNCwwLDAsMCwwLDQ4aDk2QTI0LDI0LDAsMCwwLDIwMCwxOTJabS0xNi0zOS4yVjEwNGEyNCwyNCwwLDAsMC0yNC0yNEg5NmEyNCwyNCwwLDAsMC0yNCwyNHY0OC44YTQwLjU3LDQwLjU3LDAsMCwxLDgtLjhoOTZBNDAuNTcsNDAuNTcsMCwwLDEsMTg0LDE1Mi44Wk0yMzIsMTEyYTQwLjA4LDQwLjA4LDAsMCwwLTM5LjItMzJIMTkyYTM5LjgxLDM5LjgxLDAsMCwxLDgsMjR2OFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Cow";
export { I as Cow }
