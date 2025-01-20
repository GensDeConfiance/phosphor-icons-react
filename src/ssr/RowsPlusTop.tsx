
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/RowsPlusTop";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTYwSDQ4YTE2LDE2LDAsMCwwLTE2LDE2djI0YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxNzZBMTYsMTYsMCwwLDAsMjA4LDE2MFptMCw0MEg0OFYxNzZIMjA4djI0Wm0wLTExMkg0OGExNiwxNiwwLDAsMC0xNiwxNnYyNGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWMTA0QTE2LDE2LDAsMCwwLDIwOCw4OFptMCw0MEg0OFYxMDRIMjA4djI0Wk05Niw0MGE4LDgsMCwwLDEsOC04aDE2VjE2YTgsOCwwLDAsMSwxNiwwVjMyaDE2YTgsOCwwLDAsMSwwLDE2SDEzNlY2NGE4LDgsMCwwLDEtMTYsMFY0OEgxMDRBOCw4LDAsMCwxLDk2LDQwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTY0SDQ4YTEyLDEyLDAsMCwwLTEyLDEydjI0YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlYxNzZBMTIsMTIsMCwwLDAsMjA4LDE2NFptNCwzNmE0LDQsMCwwLDEtNCw0SDQ4YTQsNCwwLDAsMS00LTRWMTc2YTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRaTTIwOCw5Mkg0OGExMiwxMiwwLDAsMC0xMiwxMnYyNGExMiwxMiwwLDAsMCwxMiwxMkgyMDhhMTIsMTIsMCwwLDAsMTItMTJWMTA0QTEyLDEyLDAsMCwwLDIwOCw5MlptNCwzNmE0LDQsMCwwLDEtNCw0SDQ4YTQsNCwwLDAsMS00LTRWMTA0YTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRaTTEwMCw0MGE0LDQsMCwwLDEsNC00aDIwVjE2YTQsNCwwLDAsMSw4LDBWMzZoMjBhNCw0LDAsMCwxLDAsOEgxMzJWNjRhNCw0LDAsMCwxLTgsMFY0NEgxMDRBNCw0LDAsMCwxLDEwMCw0MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTYySDQ4YTE0LDE0LDAsMCwwLTE0LDE0djI0YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFYxNzZBMTQsMTQsMCwwLDAsMjA4LDE2MlptMiwzOGEyLDIsMCwwLDEtMiwySDQ4YTIsMiwwLDAsMS0yLTJWMTc2YTIsMiwwLDAsMSwyLTJIMjA4YTIsMiwwLDAsMSwyLDJaTTIwOCw5MEg0OGExNCwxNCwwLDAsMC0xNCwxNHYyNGExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWMTA0QTE0LDE0LDAsMCwwLDIwOCw5MFptMiwzOGEyLDIsMCwwLDEtMiwySDQ4YTIsMiwwLDAsMS0yLTJWMTA0YTIsMiwwLDAsMSwyLTJIMjA4YTIsMiwwLDAsMSwyLDJaTTk4LDQwYTYsNiwwLDAsMSw2LTZoMThWMTZhNiw2LDAsMCwxLDEyLDBWMzRoMThhNiw2LDAsMCwxLDAsMTJIMTM0VjY0YTYsNiwwLDAsMS0xMiwwVjQ2SDEwNEE2LDYsMCwwLDEsOTgsNDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTU2SDQ4YTIwLDIwLDAsMCwwLTIwLDIwdjI0YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFYxNzZBMjAsMjAsMCwwLDAsMjA4LDE1NlptLTQsNDBINTJWMTgwSDIwNFptNC0xMTZINDhhMjAsMjAsMCwwLDAtMjAsMjB2MjRhMjAsMjAsMCwwLDAsMjAsMjBIMjA4YTIwLDIwLDAsMCwwLDIwLTIwVjEwMEEyMCwyMCwwLDAsMCwyMDgsODBabS00LDQwSDUyVjEwNEgyMDRaTTk2LDM2YTEyLDEyLDAsMCwxLDEyLTEyaDhWMTZhMTIsMTIsMCwwLDEsMjQsMHY4aDhhMTIsMTIsMCwwLDEsMCwyNGgtOHY4YTEyLDEyLDAsMCwxLTI0LDBWNDhoLThBMTIsMTIsMCwwLDEsOTYsMzZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTc2djI0YTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjE3NmExNiwxNiwwLDAsMSwxNi0xNkgyMDhBMTYsMTYsMCwwLDEsMjI0LDE3NlpNMjA4LDg4SDQ4YTE2LDE2LDAsMCwwLTE2LDE2djI0YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxMDRBMTYsMTYsMCwwLDAsMjA4LDg4Wk0xMDQsNDhoMTZWNjRhOCw4LDAsMCwwLDE2LDBWNDhoMTZhOCw4LDAsMCwwLDAtMTZIMTM2VjE2YTgsOCwwLDAsMC0xNiwwVjMySDEwNGE4LDgsMCwwLDAsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTc2djI0YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFYxNzZhOCw4LDAsMCwxLDgtOEgyMDhBOCw4LDAsMCwxLDIxNiwxNzZabS04LTgwSDQ4YTgsOCwwLDAsMC04LDh2MjRhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFYxMDRBOCw4LDAsMCwwLDIwOCw5NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsMTYwSDQ4YTE2LDE2LDAsMCwwLTE2LDE2djI0YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlYxNzZBMTYsMTYsMCwwLDAsMjA4LDE2MFptMCw0MEg0OFYxNzZIMjA4djI0Wm0wLTExMkg0OGExNiwxNiwwLDAsMC0xNiwxNnYyNGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWMTA0QTE2LDE2LDAsMCwwLDIwOCw4OFptMCw0MEg0OFYxMDRIMjA4djI0Wk05Niw0MGE4LDgsMCwwLDEsOC04aDE2VjE2YTgsOCwwLDAsMSwxNiwwVjMyaDE2YTgsOCwwLDAsMSwwLDE2SDEzNlY2NGE4LDgsMCwwLDEtMTYsMFY0OEgxMDRBOCw4LDAsMCwxLDk2LDQwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "RowsPlusTop";
export { I as RowsPlusTop }
