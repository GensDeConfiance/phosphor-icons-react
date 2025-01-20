
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TreasureChest";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDBINzJBNTYuMDYsNTYuMDYsMCwwLDAsMTYsOTZ2OTZhMTYsMTYsMCwwLDAsMTYsMTZIMjI0YTE2LDE2LDAsMCwwLDE2LTE2Vjk2QTU2LjA2LDU2LjA2LDAsMCwwLDE4NCw0MFptNDAsNTZ2OEgxOTJWNTYuOEE0MC4wNyw0MC4wNywwLDAsMSwyMjQsOTZabS04OCw0MEgxMjBWMTA0aDE2Wm0tMjQsMTZoMzJhOCw4LDAsMCwwLDgtOFYxMjBoMjR2NzJIODBWMTIwaDI0djI0QTgsOCwwLDAsMCwxMTIsMTUyWm00MC00OFY5NmE4LDgsMCwwLDAtOC04SDExMmE4LDgsMCwwLDAtOCw4djhIODBWNTZoOTZ2NDhaTTY0LDU2LjhWMTA0SDMyVjk2QTQwLjA3LDQwLjA3LDAsMCwxLDY0LDU2LjhaTTMyLDEyMEg2NHY3MkgzMlptMTkyLDcySDE5MlYxMjBoMzJ2NzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDRINzJBNTIuMDYsNTIuMDYsMCwwLDAsMjAsOTZ2OTZhMTIsMTIsMCwwLDAsMTIsMTJIMjI0YTEyLDEyLDAsMCwwLDEyLTEyVjk2QTUyLjA2LDUyLjA2LDAsMCwwLDE4NCw0NFptNDQsNTJ2MTJIMTg4VjUyLjE5QTQ0LjA2LDQ0LjA2LDAsMCwxLDIyOCw5NlptLTg4LDQ0SDExNlYxMDBoMjRabS0yOCw4aDMyYTQsNCwwLDAsMCw0LTRWMTE2aDMydjgwSDc2VjExNmgzMnYyOEE0LDQsMCwwLDAsMTEyLDE0OFptMzYtNDBWOTZhNCw0LDAsMCwwLTQtNEgxMTJhNCw0LDAsMCwwLTQsNHYxMkg3NlY1MkgxODB2NTZaTTY4LDUyLjE5VjEwOEgyOFY5NkE0NC4wNiw0NC4wNiwwLDAsMSw2OCw1Mi4xOVpNMjgsMTkyVjExNkg2OHY4MEgzMkE0LDQsMCwwLDEsMjgsMTkyWm0xOTYsNEgxODhWMTE2aDQwdjc2QTQsNCwwLDAsMSwyMjQsMTk2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDJINzJBNTQuMDYsNTQuMDYsMCwwLDAsMTgsOTZ2OTZhMTQsMTQsMCwwLDAsMTQsMTRIMjI0YTE0LDE0LDAsMCwwLDE0LTE0Vjk2QTU0LjA2LDU0LjA2LDAsMCwwLDE4NCw0MlptNDIsNTR2MTBIMTkwVjU0LjQ0QTQyLjA1LDQyLjA1LDAsMCwxLDIyNiw5NlptLTg4LDQySDExOFYxMDJoMjBabS0yNiwxMmgzMmE2LDYsMCwwLDAsNi02VjExOGgyOHY3Nkg3OFYxMThoMjh2MjZBNiw2LDAsMCwwLDExMiwxNTBabTM4LTQ0Vjk2YTYsNiwwLDAsMC02LTZIMTEyYTYsNiwwLDAsMC02LDZ2MTBINzhWNTRIMTc4djUyWk02Niw1NC40NFYxMDZIMzBWOTZBNDIuMDUsNDIuMDUsMCwwLDEsNjYsNTQuNDRaTTMwLDE5MlYxMThINjZ2NzZIMzJBMiwyLDAsMCwxLDMwLDE5MlptMTk0LDJIMTkwVjExOGgzNnY3NEEyLDIsMCwwLDEsMjI0LDE5NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzZINzJBNjAuMDcsNjAuMDcsMCwwLDAsMTIsOTZ2OTZhMjAsMjAsMCwwLDAsMjAsMjBIMjI0YTIwLDIwLDAsMCwwLDIwLTIwVjk2QTYwLjA3LDYwLjA3LDAsMCwwLDE4NCwzNlptMzYsNjB2NEgxOTJWNjAuOTFBMzYuMDUsMzYuMDUsMCwwLDEsMjIwLDk2Wm0tOTIsNjBhMTIsMTIsMCwwLDAsMTItMTJWMTI0aDI4djY0SDg4VjEyNGgyOHYyMEExMiwxMiwwLDAsMCwxMjgsMTU2Wm0xMi01NlY5NmExMiwxMiwwLDAsMC0yNCwwdjRIODhWNjBoODB2NDBaTTY0LDYwLjkxVjEwMEgzNlY5NkEzNi4wNSwzNi4wNSwwLDAsMSw2NCw2MC45MVpNMzYsMTI0SDY0djY0SDM2Wm0xNTYsNjRWMTI0aDI4djY0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI0djY4YTE2LDE2LDAsMCwxLTE2LDE2SDMyYTE2LDE2LDAsMCwxLTE2LTE2VjEyNGE0LDQsMCwwLDEsNC00SDU2djY0YTgsOCwwLDAsMCw4LjUzLDhBOC4xNyw4LjE3LDAsMCwwLDcyLDE4My43M1YxMjBoNDB2MjBhNCw0LDAsMCwwLDQsNGgyNGE0LDQsMCwwLDAsNC00VjEyMGg0MHY2NGE4LDgsMCwwLDAsOC41Myw4LDguMTcsOC4xNywwLDAsMCw3LjQ3LTguMjVWMTIwaDM2QTQsNCwwLDAsMSwyNDAsMTI0Wk0xODQsNDBINzJBNTYsNTYsMCwwLDAsMTYsOTZ2NGE0LDQsMCwwLDAsNCw0SDU2VjY0LjI3QTguMTcsOC4xNywwLDAsMSw2My40Nyw1Niw4LDgsMCwwLDEsNzIsNjR2NDBoNDBWOTJhNCw0LDAsMCwxLDQtNGgyNGE0LDQsMCwwLDEsNCw0djEyaDQwVjY0LjI3QTguMTcsOC4xNywwLDAsMSwxOTEuNDcsNTYsOCw4LDAsMCwxLDIwMCw2NHY0MGgzNmE0LDQsMCwwLDAsNC00Vjk2QTU2LDU2LDAsMCwwLDE4NCw0MFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTEydjgwYTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLTgtOFYxMTJoODh2MzJoMzJWMTEyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4NCw0MEg3MkE1Ni4wNiw1Ni4wNiwwLDAsMCwxNiw5NnY5NmExNiwxNiwwLDAsMCwxNiwxNkgyMjRhMTYsMTYsMCwwLDAsMTYtMTZWOTZBNTYuMDYsNTYuMDYsMCwwLDAsMTg0LDQwWm00MCw1NnY4SDE5MlY1Ni44QTQwLjA3LDQwLjA3LDAsMCwxLDIyNCw5NlptLTg4LDQwSDEyMFYxMDRoMTZabS0yNCwxNmgzMmE4LDgsMCwwLDAsOC04VjEyMGgyNHY3Mkg4MFYxMjBoMjR2MjRBOCw4LDAsMCwwLDExMiwxNTJabTQwLTQ4Vjk2YTgsOCwwLDAsMC04LThIMTEyYTgsOCwwLDAsMC04LDh2OEg4MFY1Nmg5NnY0OFpNNjQsNTYuOFYxMDRIMzJWOTZBNDAuMDcsNDAuMDcsMCwwLDEsNjQsNTYuOFpNMzIsMTIwSDY0djcySDMyWm0xOTIsNzJIMTkyVjEyMGgzMnY3MloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TreasureChest";
export { I as TreasureChest }
