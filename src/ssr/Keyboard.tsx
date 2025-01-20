
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Keyboard";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJBMTYsMTYsMCwwLDAsMTYsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDIyNGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMjQsNDhabTAsMTQ0SDMyVjY0SDIyNFYxOTJabS0xNi02NGE4LDgsMCwwLDEtOCw4SDU2YTgsOCwwLDAsMSwwLTE2SDIwMEE4LDgsMCwwLDEsMjA4LDEyOFptMC0zMmE4LDgsMCwwLDEtOCw4SDU2YTgsOCwwLDAsMSwwLTE2SDIwMEE4LDgsMCwwLDEsMjA4LDk2Wk03MiwxNjBhOCw4LDAsMCwxLTgsOEg1NmE4LDgsMCwwLDEsMC0xNmg4QTgsOCwwLDAsMSw3MiwxNjBabTk2LDBhOCw4LDAsMCwxLTgsOEg5NmE4LDgsMCwwLDEsMC0xNmg2NEE4LDgsMCwwLDEsMTY4LDE2MFptNDAsMGE4LDgsMCwwLDEtOCw4aC04YTgsOCwwLDAsMSwwLTE2aDhBOCw4LDAsMCwxLDIwOCwxNjBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTJIMzJBMTIsMTIsMCwwLDAsMjAsNjRWMTkyYTEyLDEyLDAsMCwwLDEyLDEySDIyNGExMiwxMiwwLDAsMCwxMi0xMlY2NEExMiwxMiwwLDAsMCwyMjQsNTJabTQsMTQwYTQsNCwwLDAsMS00LDRIMzJhNCw0LDAsMCwxLTQtNFY2NGE0LDQsMCwwLDEsNC00SDIyNGE0LDQsMCwwLDEsNCw0Wm0tMjQtNjRhNCw0LDAsMCwxLTQsNEg1NmE0LDQsMCwwLDEsMC04SDIwMEE0LDQsMCwwLDEsMjA0LDEyOFptMC0zMmE0LDQsMCwwLDEtNCw0SDU2YTQsNCwwLDAsMSwwLThIMjAwQTQsNCwwLDAsMSwyMDQsOTZaTTY4LDE2MGE0LDQsMCwwLDEtNCw0SDU2YTQsNCwwLDAsMSwwLThoOEE0LDQsMCwwLDEsNjgsMTYwWm05NiwwYTQsNCwwLDAsMS00LDRIOTZhNCw0LDAsMCwxLDAtOGg2NEE0LDQsMCwwLDEsMTY0LDE2MFptNDAsMGE0LDQsMCwwLDEtNCw0aC04YTQsNCwwLDAsMSwwLThoOEE0LDQsMCwwLDEsMjA0LDE2MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTBIMzJBMTQsMTQsMCwwLDAsMTgsNjRWMTkyYTE0LDE0LDAsMCwwLDE0LDE0SDIyNGExNCwxNCwwLDAsMCwxNC0xNFY2NEExNCwxNCwwLDAsMCwyMjQsNTBabTIsMTQyYTIsMiwwLDAsMS0yLDJIMzJhMiwyLDAsMCwxLTItMlY2NGEyLDIsMCwwLDEsMi0ySDIyNGEyLDIsMCwwLDEsMiwyWm0tMjAtNjRhNiw2LDAsMCwxLTYsNkg1NmE2LDYsMCwwLDEsMC0xMkgyMDBBNiw2LDAsMCwxLDIwNiwxMjhabTAtMzJhNiw2LDAsMCwxLTYsNkg1NmE2LDYsMCwwLDEsMC0xMkgyMDBBNiw2LDAsMCwxLDIwNiw5NlpNNzAsMTYwYTYsNiwwLDAsMS02LDZINTZhNiw2LDAsMCwxLDAtMTJoOEE2LDYsMCwwLDEsNzAsMTYwWm05NiwwYTYsNiwwLDAsMS02LDZIOTZhNiw2LDAsMCwxLDAtMTJoNjRBNiw2LDAsMCwxLDE2NiwxNjBabTQwLDBhNiw2LDAsMCwxLTYsNmgtOGE2LDYsMCwwLDEsMC0xMmg4QTYsNiwwLDAsMSwyMDYsMTYwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDRIMzJBMjAsMjAsMCwwLDAsMTIsNjRWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDIyNGEyMCwyMCwwLDAsMCwyMC0yMFY2NEEyMCwyMCwwLDAsMCwyMjQsNDRabS00LDE0NEgzNlY2OEgyMjBaTTUyLDEyOGExMiwxMiwwLDAsMSwxMi0xMkgxOTJhMTIsMTIsMCwwLDEsMCwyNEg2NEExMiwxMiwwLDAsMSw1MiwxMjhabTAtMzZBMTIsMTIsMCwwLDEsNjQsODBIMTkyYTEyLDEyLDAsMCwxLDAsMjRINjRBMTIsMTIsMCwwLDEsNTIsOTJabTAsNzJhMTIsMTIsMCwwLDEsMTItMTJoOGExMiwxMiwwLDAsMSwwLDI0SDY0QTEyLDEyLDAsMCwxLDUyLDE2NFptMTA4LDBhMTIsMTIsMCwwLDEtMTIsMTJIMTA4YTEyLDEyLDAsMCwxLDAtMjRoNDBBMTIsMTIsMCwwLDEsMTYwLDE2NFptNDQsMGExMiwxMiwwLDAsMS0xMiwxMmgtOGExMiwxMiwwLDAsMSwwLTI0aDhBMTIsMTIsMCwwLDEsMjA0LDE2NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJBMTYsMTYsMCwwLDAsMTYsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDIyNGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMjQsNDhaTTY0LDE2OEg0OGE4LDgsMCwwLDEsMC0xNkg2NGE4LDgsMCwwLDEsMCwxNlptOTYsMEg5NmE4LDgsMCwwLDEsMC0xNmg2NGE4LDgsMCwwLDEsMCwxNlptNDgsMEgxOTJhOCw4LDAsMCwxLDAtMTZoMTZhOCw4LDAsMCwxLDAsMTZabTAtMzJINDhhOCw4LDAsMCwxLDAtMTZIMjA4YTgsOCwwLDAsMSwwLDE2Wm0wLTMySDQ4YTgsOCwwLDAsMSwwLTE2SDIwOGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRWMTkyYTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLTgtOFY2NGE4LDgsMCwwLDEsOC04SDIyNEE4LDgsMCwwLDEsMjMyLDY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCw0OEgzMkExNiwxNiwwLDAsMCwxNiw2NFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjI0YTE2LDE2LDAsMCwwLDE2LTE2VjY0QTE2LDE2LDAsMCwwLDIyNCw0OFptMCwxNDRIMzJWNjRIMjI0VjE5MlptLTE2LTY0YTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLDAtMTZIMjAwQTgsOCwwLDAsMSwyMDgsMTI4Wm0wLTMyYTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLDAtMTZIMjAwQTgsOCwwLDAsMSwyMDgsOTZaTTcyLDE2MGE4LDgsMCwwLDEtOCw4SDU2YTgsOCwwLDAsMSwwLTE2aDhBOCw4LDAsMCwxLDcyLDE2MFptOTYsMGE4LDgsMCwwLDEtOCw4SDk2YTgsOCwwLDAsMSwwLTE2aDY0QTgsOCwwLDAsMSwxNjgsMTYwWm00MCwwYTgsOCwwLDAsMS04LDhoLThhOCw4LDAsMCwxLDAtMTZoOEE4LDgsMCwwLDEsMjA4LDE2MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Keyboard";
export { I as Keyboard }
