
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ClipboardText";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTUyYTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLDAtMTZoNjRBOCw4LDAsMCwxLDE2OCwxNTJabS04LTQwSDk2YTgsOCwwLDAsMCwwLDE2aDY0YTgsOCwwLDAsMCwwLTE2Wm01Ni02NFYyMTZhMTYsMTYsMCwwLDEtMTYsMTZINTZhMTYsMTYsMCwwLDEtMTYtMTZWNDhBMTYsMTYsMCwwLDEsNTYsMzJIOTIuMjZhNDcuOTIsNDcuOTIsMCwwLDEsNzEuNDgsMEgyMDBBMTYsMTYsMCwwLDEsMjE2LDQ4Wk05Niw2NGg2NGEzMiwzMiwwLDAsMC02NCwwWk0yMDAsNDhIMTczLjI1QTQ3LjkzLDQ3LjkzLDAsMCwxLDE3Niw2NHY4YTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLTgtOFY2NGE0Ny45Myw0Ny45MywwLDAsMSwyLjc1LTE2SDU2VjIxNkgyMDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsMTUyYTQsNCwwLDAsMS00LDRIOTZhNCw0LDAsMCwxLDAtOGg2NEE0LDQsMCwwLDEsMTY0LDE1MlptLTQtMzZIOTZhNCw0LDAsMCwwLDAsOGg2NGE0LDQsMCwwLDAsMC04Wm01Mi02OFYyMTZhMTIsMTIsMCwwLDEtMTIsMTJINTZhMTIsMTIsMCwwLDEtMTItMTJWNDhBMTIsMTIsMCwwLDEsNTYsMzZIOTQuMDhhNDQsNDQsMCwwLDEsNjcuODQsMEgyMDBBMTIsMTIsMCwwLDEsMjEyLDQ4Wk05Miw2NHY0aDcyVjY0YTM2LDM2LDAsMCwwLTcyLDBaTTIwNCw0OGE0LDQsMCwwLDAtNC00SDE2Ny4xN0E0My43MSw0My43MSwwLDAsMSwxNzIsNjR2OGE0LDQsMCwwLDEtNCw0SDg4YTQsNCwwLDAsMS00LTRWNjRhNDMuNzEsNDMuNzEsMCwwLDEsNC44My0yMEg1NmE0LDQsMCwwLDAtNCw0VjIxNmE0LDQsMCwwLDAsNCw0SDIwMGE0LDQsMCwwLDAsNC00WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjYsMTUyYTYsNiwwLDAsMS02LDZIOTZhNiw2LDAsMCwxLDAtMTJoNjRBNiw2LDAsMCwxLDE2NiwxNTJabS02LTM4SDk2YTYsNiwwLDAsMCwwLDEyaDY0YTYsNiwwLDAsMCwwLTEyWm01NC02NlYyMTZhMTQsMTQsMCwwLDEtMTQsMTRINTZhMTQsMTQsMCwwLDEtMTQtMTRWNDhBMTQsMTQsMCwwLDEsNTYsMzRIOTMuMTdhNDUuOTEsNDUuOTEsMCwwLDEsNjkuNjYsMEgyMDBBMTQsMTQsMCwwLDEsMjE0LDQ4Wk05NCw2NHYyaDY4VjY0YTM0LDM0LDAsMCwwLTY4LDBaTTIwMiw0OGEyLDIsMCwwLDAtMi0ySDE3MC4zM0E0NS43Nyw0NS43NywwLDAsMSwxNzQsNjR2OGE2LDYsMCwwLDEtNiw2SDg4YTYsNiwwLDAsMS02LTZWNjRhNDUuNzcsNDUuNzcsMCwwLDEsMy42Ny0xOEg1NmEyLDIsMCwwLDAtMiwyVjIxNmEyLDIsMCwwLDAsMiwySDIwMGEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTY0YTEyLDEyLDAsMCwxLTEyLDEySDk2YTEyLDEyLDAsMCwxLDAtMjRoNjRBMTIsMTIsMCwwLDEsMTcyLDE2NFptLTEyLTUySDk2YTEyLDEyLDAsMCwwLDAsMjRoNjRhMTIsMTIsMCwwLDAsMC0yNFptNjAtNjRWMjE2YTIwLDIwLDAsMCwxLTIwLDIwSDU2YTIwLDIwLDAsMCwxLTIwLTIwVjQ4QTIwLDIwLDAsMCwxLDU2LDI4SDkwLjUzYTUxLjg4LDUxLjg4LDAsMCwxLDc0Ljk0LDBIMjAwQTIwLDIwLDAsMCwxLDIyMCw0OFpNMTAwLjI5LDYwaDU1LjQyYTI4LDI4LDAsMCwwLTU1LjQyLDBaTTE5Niw1MkgxNzguNTlBNTIuMTMsNTIuMTMsMCwwLDEsMTgwLDY0djhhMTIsMTIsMCwwLDEtMTIsMTJIODhBMTIsMTIsMCwwLDEsNzYsNzJWNjRhNTIuMTMsNTIuMTMsMCwwLDEsMS40MS0xMkg2MFYyMTJIMTk2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzJIMTYzLjc0YTQ3LjkyLDQ3LjkyLDAsMCwwLTcxLjQ4LDBINTZBMTYsMTYsMCwwLDAsNDAsNDhWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDAsMzJabS03MiwwYTMyLDMyLDAsMCwxLDMyLDMySDk2QTMyLDMyLDAsMCwxLDEyOCwzMlptMzIsMTI4SDk2YTgsOCwwLDAsMSwwLTE2aDY0YTgsOCwwLDAsMSwwLDE2Wm0wLTMySDk2YTgsOCwwLDAsMSwwLTE2aDY0YTgsOCwwLDAsMSwwLDE2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDhWMjE2YTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsOC04SDk2YTM5LjgzLDM5LjgzLDAsMCwwLTgsMjR2OGg4MFY2NGEzOS44MywzOS44MywwLDAsMC04LTI0aDQwQTgsOCwwLDAsMSwyMDgsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTY4LDE1MmE4LDgsMCwwLDEtOCw4SDk2YTgsOCwwLDAsMSwwLTE2aDY0QTgsOCwwLDAsMSwxNjgsMTUyWm0tOC00MEg5NmE4LDgsMCwwLDAsMCwxNmg2NGE4LDgsMCwwLDAsMC0xNlptNTYtNjRWMjE2YTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjQ4QTE2LDE2LDAsMCwxLDU2LDMySDkyLjI2YTQ3LjkyLDQ3LjkyLDAsMCwxLDcxLjQ4LDBIMjAwQTE2LDE2LDAsMCwxLDIxNiw0OFpNOTYsNjRoNjRhMzIsMzIsMCwwLDAtNjQsMFpNMjAwLDQ4SDE3My4yNUE0Ny45Myw0Ny45MywwLDAsMSwxNzYsNjR2OGE4LDgsMCwwLDEtOCw4SDg4YTgsOCwwLDAsMS04LThWNjRhNDcuOTMsNDcuOTMsMCwwLDEsMi43NS0xNkg1NlYyMTZIMjAwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ClipboardText";
export { I as ClipboardText }
