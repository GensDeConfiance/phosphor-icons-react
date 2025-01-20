
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Pause";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzJIMTYwYTE2LDE2LDAsMCwwLTE2LDE2VjIwOGExNiwxNiwwLDAsMCwxNiwxNmg0MGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDAsMzJabTAsMTc2SDE2MFY0OGg0MFpNOTYsMzJINTZBMTYsMTYsMCwwLDAsNDAsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDk2YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDk2LDMyWm0wLDE3Nkg1NlY0OEg5NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzZIMTYwYTEyLDEyLDAsMCwwLTEyLDEyVjIwOGExMiwxMiwwLDAsMCwxMiwxMmg0MGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDAsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRIMTYwYTQsNCwwLDAsMS00LTRWNDhhNCw0LDAsMCwxLDQtNGg0MGE0LDQsMCwwLDEsNCw0Wk05NiwzNkg1NkExMiwxMiwwLDAsMCw0NCw0OFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIOTZhMTIsMTIsMCwwLDAsMTItMTJWNDhBMTIsMTIsMCwwLDAsOTYsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINTZhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDk2YTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzRIMTYwYTE0LDE0LDAsMCwwLTE0LDE0VjIwOGExNCwxNCwwLDAsMCwxNCwxNGg0MGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDAsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJIMTYwYTIsMiwwLDAsMS0yLTJWNDhhMiwyLDAsMCwxLDItMmg0MGEyLDIsMCwwLDEsMiwyWk05NiwzNEg1NkExNCwxNCwwLDAsMCw0Miw0OFYyMDhhMTQsMTQsMCwwLDAsMTQsMTRIOTZhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsOTYsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJINTZhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDk2YTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjhIMTYwYTIwLDIwLDAsMCwwLTIwLDIwVjIwOGEyMCwyMCwwLDAsMCwyMCwyMGg0MGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDAsMjhabS00LDE3NkgxNjRWNTJoMzJaTTk2LDI4SDU2QTIwLDIwLDAsMCwwLDM2LDQ4VjIwOGEyMCwyMCwwLDAsMCwyMCwyMEg5NmEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCw5NiwyOFpNOTIsMjA0SDYwVjUySDkyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDE2MGExNiwxNiwwLDAsMS0xNi0xNlY0OGExNiwxNiwwLDAsMSwxNi0xNmg0MEExNiwxNiwwLDAsMSwyMTYsNDhaTTk2LDMySDU2QTE2LDE2LDAsMCwwLDQwLDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNkg5NmExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCw5NiwzMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDhWMjA4YTgsOCwwLDAsMS04LDhIMTYwYTgsOCwwLDAsMS04LThWNDhhOCw4LDAsMCwxLDgtOGg0MEE4LDgsMCwwLDEsMjA4LDQ4Wk05Niw0MEg1NmE4LDgsMCwwLDAtOCw4VjIwOGE4LDgsMCwwLDAsOCw4SDk2YTgsOCwwLDAsMCw4LThWNDhBOCw4LDAsMCwwLDk2LDQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwMCwzMkgxNjBhMTYsMTYsMCwwLDAtMTYsMTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwMCwzMlptMCwxNzZIMTYwVjQ4aDQwWk05NiwzMkg1NkExNiwxNiwwLDAsMCw0MCw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIOTZhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsOTYsMzJabTAsMTc2SDU2VjQ4SDk2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Pause";
export { I as Pause }
