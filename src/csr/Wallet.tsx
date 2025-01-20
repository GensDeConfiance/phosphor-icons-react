
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Wallet";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRINTZhOCw4LDAsMCwxLDAtMTZIMTkyYTgsOCwwLDAsMCwwLTE2SDU2QTI0LDI0LDAsMCwwLDMyLDU2VjE4NGEyNCwyNCwwLDAsMCwyNCwyNEgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWODBBMTYsMTYsMCwwLDAsMjE2LDY0Wm0wLDEyOEg1NmE4LDgsMCwwLDEtOC04Vjc4LjYzQTIzLjg0LDIzLjg0LDAsMCwwLDU2LDgwSDIxNlptLTQ4LTYwYTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDE2OCwxMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjhINTZhMTIsMTIsMCwwLDEsMC0yNEgxOTJhNCw0LDAsMCwwLDAtOEg1NkEyMCwyMCwwLDAsMCwzNiw1NlYxODRhMjAsMjAsMCwwLDAsMjAsMjBIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjgwQTEyLDEyLDAsMCwwLDIxNiw2OFptNCwxMjRhNCw0LDAsMCwxLTQsNEg1NmExMiwxMiwwLDAsMS0xMi0xMlY3MmExOS44NiwxOS44NiwwLDAsMCwxMiw0SDIxNmE0LDQsMCwwLDEsNCw0Wm0tMzItNjBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTg4LDEzMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjZINTZhMTAsMTAsMCwwLDEsMC0yMEgxOTJhNiw2LDAsMCwwLDAtMTJINTZBMjIsMjIsMCwwLDAsMzQsNTZWMTg0YTIyLDIyLDAsMCwwLDIyLDIySDIxNmExNCwxNCwwLDAsMCwxNC0xNFY4MEExNCwxNCwwLDAsMCwyMTYsNjZabTIsMTI2YTIsMiwwLDAsMS0yLDJINTZhMTAsMTAsMCwwLDEtMTAtMTBWNzUuNTlBMjEuODQsMjEuODQsMCwwLDAsNTYsNzhIMjE2YTIsMiwwLDAsMSwyLDJabS0yOC02MGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxOTAsMTMyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMTM2YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE5NiwxMzZabTQwLTM2djgwYTMyLDMyLDAsMCwxLTMyLDMySDYwYTMyLDMyLDAsMCwxLTMyLTMyVjYwLjkyQTMyLDMyLDAsMCwxLDYwLDI4SDE5MmExMiwxMiwwLDAsMSwwLDI0SDYwYTgsOCwwLDAsMC04LDguMjZ2LjA4QTguMzIsOC4zMiwwLDAsMCw2MC40OCw2OEgyMDRBMzIsMzIsMCwwLDEsMjM2LDEwMFptLTI0LDBhOCw4LDAsMCwwLTgtOEg2MC40OEEzMy43MiwzMy43MiwwLDAsMSw1Miw5MC45MlYxODBhOCw4LDAsMCwwLDgsOEgyMDRhOCw4LDAsMCwwLDgtOFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRINTZhOCw4LDAsMCwxLDAtMTZIMTkyYTgsOCwwLDAsMCwwLTE2SDU2QTI0LDI0LDAsMCwwLDMyLDU2VjE4NGEyNCwyNCwwLDAsMCwyNCwyNEgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWODBBMTYsMTYsMCwwLDAsMjE2LDY0Wm0tMzYsODBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTgwLDE0NFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsODBWMTkyYTgsOCwwLDAsMS04LDhINTZhMTYsMTYsMCwwLDEtMTYtMTZWNTZBMTYsMTYsMCwwLDAsNTYsNzJIMjE2QTgsOCwwLDAsMSwyMjQsODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDY0SDU2YTgsOCwwLDAsMSwwLTE2SDE5MmE4LDgsMCwwLDAsMC0xNkg1NkEyNCwyNCwwLDAsMCwzMiw1NlYxODRhMjQsMjQsMCwwLDAsMjQsMjRIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjgwQTE2LDE2LDAsMCwwLDIxNiw2NFptMCwxMjhINTZhOCw4LDAsMCwxLTgtOFY3OC42M0EyMy44NCwyMy44NCwwLDAsMCw1Niw4MEgyMTZabS00OC02MGExMiwxMiwwLDEsMSwxMiwxMkExMiwxMiwwLDAsMSwxNjgsMTMyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Wallet";
export { I as Wallet }
