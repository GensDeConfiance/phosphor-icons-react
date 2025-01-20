
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Network";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTEySDEzNlY4OGg4YTE2LDE2LDAsMCwwLDE2LTE2VjQwYTE2LDE2LDAsMCwwLTE2LTE2SDExMkExNiwxNiwwLDAsMCw5Niw0MFY3MmExNiwxNiwwLDAsMCwxNiwxNmg4djI0SDI0YTgsOCwwLDAsMCwwLDE2SDU2djMySDQ4YTE2LDE2LDAsMCwwLTE2LDE2djMyYTE2LDE2LDAsMCwwLDE2LDE2SDgwYTE2LDE2LDAsMCwwLDE2LTE2VjE3NmExNiwxNiwwLDAsMC0xNi0xNkg3MlYxMjhIMTg0djMyaC04YTE2LDE2LDAsMCwwLTE2LDE2djMyYTE2LDE2LDAsMCwwLDE2LDE2aDMyYTE2LDE2LDAsMCwwLDE2LTE2VjE3NmExNiwxNiwwLDAsMC0xNi0xNmgtOFYxMjhoMzJhOCw4LDAsMCwwLDAtMTZaTTExMiw0MGgzMlY3MkgxMTJaTTgwLDIwOEg0OFYxNzZIODBabTEyOCwwSDE3NlYxNzZoMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTE2SDEzMlY4NGgxMmExMiwxMiwwLDAsMCwxMi0xMlY0MGExMiwxMiwwLDAsMC0xMi0xMkgxMTJhMTIsMTIsMCwwLDAtMTIsMTJWNzJhMTIsMTIsMCwwLDAsMTIsMTJoMTJ2MzJIMjRhNCw0LDAsMCwwLDAsOEg2MHY0MEg0OGExMiwxMiwwLDAsMC0xMiwxMnYzMmExMiwxMiwwLDAsMCwxMiwxMkg4MGExMiwxMiwwLDAsMCwxMi0xMlYxNzZhMTIsMTIsMCwwLDAtMTItMTJINjhWMTI0SDE4OHY0MEgxNzZhMTIsMTIsMCwwLDAtMTIsMTJ2MzJhMTIsMTIsMCwwLDAsMTIsMTJoMzJhMTIsMTIsMCwwLDAsMTItMTJWMTc2YTEyLDEyLDAsMCwwLTEyLTEySDE5NlYxMjRoMzZhNCw0LDAsMCwwLDAtOFpNMTA4LDcyVjQwYTQsNCwwLDAsMSw0LTRoMzJhNCw0LDAsMCwxLDQsNFY3MmE0LDQsMCwwLDEtNCw0SDExMkE0LDQsMCwwLDEsMTA4LDcyWk04NCwxNzZ2MzJhNCw0LDAsMCwxLTQsNEg0OGE0LDQsMCwwLDEtNC00VjE3NmE0LDQsMCwwLDEsNC00SDgwQTQsNCwwLDAsMSw4NCwxNzZabTEyOCwwdjMyYTQsNCwwLDAsMS00LDRIMTc2YTQsNCwwLDAsMS00LTRWMTc2YTQsNCwwLDAsMSw0LTRoMzJBNCw0LDAsMCwxLDIxMiwxNzZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTE0SDEzNFY4NmgxMGExNCwxNCwwLDAsMCwxNC0xNFY0MGExNCwxNCwwLDAsMC0xNC0xNEgxMTJBMTQsMTQsMCwwLDAsOTgsNDBWNzJhMTQsMTQsMCwwLDAsMTQsMTRoMTB2MjhIMjRhNiw2LDAsMCwwLDAsMTJINTh2MzZINDhhMTQsMTQsMCwwLDAtMTQsMTR2MzJhMTQsMTQsMCwwLDAsMTQsMTRIODBhMTQsMTQsMCwwLDAsMTQtMTRWMTc2YTE0LDE0LDAsMCwwLTE0LTE0SDcwVjEyNkgxODZ2MzZIMTc2YTE0LDE0LDAsMCwwLTE0LDE0djMyYTE0LDE0LDAsMCwwLDE0LDE0aDMyYTE0LDE0LDAsMCwwLDE0LTE0VjE3NmExNCwxNCwwLDAsMC0xNC0xNEgxOThWMTI2aDM0YTYsNiwwLDAsMCwwLTEyWk0xMTAsNzJWNDBhMiwyLDAsMCwxLDItMmgzMmEyLDIsMCwwLDEsMiwyVjcyYTIsMiwwLDAsMS0yLDJIMTEyQTIsMiwwLDAsMSwxMTAsNzJaTTgyLDE3NnYzMmEyLDIsMCwwLDEtMiwySDQ4YTIsMiwwLDAsMS0yLTJWMTc2YTIsMiwwLDAsMSwyLTJIODBBMiwyLDAsMCwxLDgyLDE3NlptMTI4LDB2MzJhMiwyLDAsMCwxLTIsMkgxNzZhMiwyLDAsMCwxLTItMlYxNzZhMiwyLDAsMCwxLDItMmgzMkEyLDIsMCwwLDEsMjEwLDE3NloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTA4SDE0MFY5Mmg0YTIwLDIwLDAsMCwwLDIwLTIwVjQwYTIwLDIwLDAsMCwwLTIwLTIwSDExMkEyMCwyMCwwLDAsMCw5Miw0MFY3MmEyMCwyMCwwLDAsMCwyMCwyMGg0djE2SDI0YTEyLDEyLDAsMCwwLDAsMjRINTJ2MjRINDhhMjAsMjAsMCwwLDAtMjAsMjB2MzJhMjAsMjAsMCwwLDAsMjAsMjBIODBhMjAsMjAsMCwwLDAsMjAtMjBWMTc2YTIwLDIwLDAsMCwwLTIwLTIwSDc2VjEzMkgxODB2MjRoLTRhMjAsMjAsMCwwLDAtMjAsMjB2MzJhMjAsMjAsMCwwLDAsMjAsMjBoMzJhMjAsMjAsMCwwLDAsMjAtMjBWMTc2YTIwLDIwLDAsMCwwLTIwLTIwaC00VjEzMmgyOGExMiwxMiwwLDAsMCwwLTI0Wk0xMTYsNDRoMjRWNjhIMTE2Wk03NiwyMDRINTJWMTgwSDc2Wm0xMjgsMEgxODBWMTgwaDI0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTIwYTgsOCwwLDAsMS04LDhIMjAwdjMyaDhhMTYsMTYsMCwwLDEsMTYsMTZ2MzJhMTYsMTYsMCwwLDEtMTYsMTZIMTc2YTE2LDE2LDAsMCwxLTE2LTE2VjE3NmExNiwxNiwwLDAsMSwxNi0xNmg4VjEyOEg3MnYzMmg4YTE2LDE2LDAsMCwxLDE2LDE2djMyYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjE3NmExNiwxNiwwLDAsMSwxNi0xNmg4VjEyOEgyNGE4LDgsMCwwLDEsMC0xNmg5NlY4OGgtOEExNiwxNiwwLDAsMSw5Niw3MlY0MGExNiwxNiwwLDAsMSwxNi0xNmgzMmExNiwxNiwwLDAsMSwxNiwxNlY3MmExNiwxNiwwLDAsMS0xNiwxNmgtOHYyNGg5NkE4LDgsMCwwLDEsMjQwLDEyMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsNDBWNzJhOCw4LDAsMCwxLTgsOEgxMTJhOCw4LDAsMCwxLTgtOFY0MGE4LDgsMCwwLDEsOC04aDMyQTgsOCwwLDAsMSwxNTIsNDBaTTgwLDE2OEg0OGE4LDgsMCwwLDAtOCw4djMyYTgsOCwwLDAsMCw4LDhIODBhOCw4LDAsMCwwLDgtOFYxNzZBOCw4LDAsMCwwLDgwLDE2OFptMTI4LDBIMTc2YTgsOCwwLDAsMC04LDh2MzJhOCw4LDAsMCwwLDgsOGgzMmE4LDgsMCwwLDAsOC04VjE3NkE4LDgsMCwwLDAsMjA4LDE2OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzIsMTEySDEzNlY4OGg4YTE2LDE2LDAsMCwwLDE2LTE2VjQwYTE2LDE2LDAsMCwwLTE2LTE2SDExMkExNiwxNiwwLDAsMCw5Niw0MFY3MmExNiwxNiwwLDAsMCwxNiwxNmg4djI0SDI0YTgsOCwwLDAsMCwwLDE2SDU2djMySDQ4YTE2LDE2LDAsMCwwLTE2LDE2djMyYTE2LDE2LDAsMCwwLDE2LDE2SDgwYTE2LDE2LDAsMCwwLDE2LTE2VjE3NmExNiwxNiwwLDAsMC0xNi0xNkg3MlYxMjhIMTg0djMyaC04YTE2LDE2LDAsMCwwLTE2LDE2djMyYTE2LDE2LDAsMCwwLDE2LDE2aDMyYTE2LDE2LDAsMCwwLDE2LTE2VjE3NmExNiwxNiwwLDAsMC0xNi0xNmgtOFYxMjhoMzJhOCw4LDAsMCwwLDAtMTZaTTExMiw0MGgzMlY3MkgxMTJaTTgwLDIwOEg0OFYxNzZIODBabTEyOCwwSDE3NlYxNzZoMzJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Network";
export { I as Network }
