
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Command";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTQ0SDE2MFYxMTJoMjBhMzYsMzYsMCwxLDAtMzYtMzZWOTZIMTEyVjc2YTM2LDM2LDAsMSwwLTM2LDM2SDk2djMySDc2YTM2LDM2LDAsMSwwLDM2LDM2VjE2MGgzMnYyMGEzNiwzNiwwLDEsMCwzNi0zNlpNMTYwLDc2YTIwLDIwLDAsMSwxLDIwLDIwSDE2MFpNNTYsNzZhMjAsMjAsMCwwLDEsNDAsMFY5Nkg3NkEyMCwyMCwwLDAsMSw1Niw3NlpNOTYsMTgwYTIwLDIwLDAsMSwxLTIwLTIwSDk2Wm0xNi02OGgzMnYzMkgxMTJabTY4LDg4YTIwLDIwLDAsMCwxLTIwLTIwVjE2MGgyMGEyMCwyMCwwLDAsMSwwLDQwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTQ4SDE1NlYxMDhoMjRhMzIsMzIsMCwxLDAtMzItMzJ2MjRIMTA4Vjc2YTMyLDMyLDAsMSwwLTMyLDMyaDI0djQwSDc2YTMyLDMyLDAsMSwwLDMyLDMyVjE1Nmg0MHYyNGEzMiwzMiwwLDEsMCwzMi0zMlpNMTU2LDc2YTI0LDI0LDAsMSwxLDI0LDI0SDE1NlpNNTIsNzZhMjQsMjQsMCwwLDEsNDgsMHYyNEg3NkEyNCwyNCwwLDAsMSw1Miw3NlptNDgsMTA0YTI0LDI0LDAsMSwxLTI0LTI0aDI0Wm04LTcyaDQwdjQwSDEwOFptNzIsOTZhMjQsMjQsMCwwLDEtMjQtMjRWMTU2aDI0YTI0LDI0LDAsMCwxLDAsNDhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTQ2SDE1OFYxMTBoMjJhMzQsMzQsMCwxLDAtMzQtMzRWOThIMTEwVjc2YTM0LDM0LDAsMSwwLTM0LDM0SDk4djM2SDc2YTM0LDM0LDAsMSwwLDM0LDM0VjE1OGgzNnYyMmEzNCwzNCwwLDEsMCwzNC0zNFpNMTU4LDc2YTIyLDIyLDAsMSwxLDIyLDIySDE1OFpNNTQsNzZhMjIsMjIsMCwwLDEsNDQsMFY5OEg3NkEyMiwyMiwwLDAsMSw1NCw3NlpNOTgsMTgwYTIyLDIyLDAsMSwxLTIyLTIySDk4Wm0xMi03MGgzNnYzNkgxMTBabTcwLDkyYTIyLDIyLDAsMCwxLTIyLTIyVjE1OGgyMmEyMiwyMiwwLDAsMSwwLDQ0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTQwSDE2NFYxMTZoMTZhNDAsNDAsMCwxLDAtNDAtNDBWOTJIMTE2Vjc2YTQwLDQwLDAsMSwwLTQwLDQwSDkydjI0SDc2YTQwLDQwLDAsMSwwLDQwLDQwVjE2NGgyNHYxNmE0MCw0MCwwLDEsMCw0MC00MFpNMTY0LDc2YTE2LDE2LDAsMSwxLDE2LDE2SDE2NFpNNjAsNzZhMTYsMTYsMCwwLDEsMzIsMFY5Mkg3NkExNiwxNiwwLDAsMSw2MCw3NlpNOTIsMTgwYTE2LDE2LDAsMSwxLTE2LTE2SDkyWm0yNC02NGgyNHYyNEgxMTZabTY0LDgwYTE2LDE2LDAsMCwxLTE2LTE2VjE2NGgxNmExNiwxNiwwLDAsMSwwLDMyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsMTE2aDI0djI0SDExNlpNODYsNzJhMTQsMTQsMCwwLDAsMCwyOGgxNFY4NkExNCwxNCwwLDAsMCw4Niw3MlptOTgsMTRhMTQsMTQsMCwwLDAtMjgsMHYxNGgxNEExNCwxNCwwLDAsMCwxODQsODZaTTcyLDE3MGExNCwxNCwwLDAsMCwyOCwwVjE1Nkg4NkExNCwxNCwwLDAsMCw3MiwxNzBaTTIyNCw0OFYyMDhhMTYsMTYsMCwwLDEtMTYsMTZINDhhMTYsMTYsMCwwLDEtMTYtMTZWNDhBMTYsMTYsMCwwLDEsNDgsMzJIMjA4QTE2LDE2LDAsMCwxLDIyNCw0OFptLTY4LDkyVjExNmgxNGEzMCwzMCwwLDEsMC0zMC0zMHYxNEgxMTZWODZhMzAsMzAsMCwxLDAtMzAsMzBoMTR2MjRIODZhMzAsMzAsMCwxLDAsMzAsMzBWMTU2aDI0djE0YTMwLDMwLDAsMSwwLDMwLTMwWm0wLDMwYTE0LDE0LDAsMSwwLDE0LTE0SDE1NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNzZoMGEyOCwyOCwwLDAsMS0yOCwyOEgxNTJWNzZhMjgsMjgsMCwwLDEsMjgtMjhoMEEyOCwyOCwwLDAsMSwyMDgsNzZaTTc2LDQ4aDBBMjgsMjgsMCwwLDAsNDgsNzZoMGEyOCwyOCwwLDAsMCwyOCwyOGgyOFY3NkEyOCwyOCwwLDAsMCw3Niw0OFpNMTgwLDE1MkgxNTJ2MjhhMjgsMjgsMCwwLDAsMjgsMjhoMGEyOCwyOCwwLDAsMCwyOC0yOGgwQTI4LDI4LDAsMCwwLDE4MCwxNTJaTTQ4LDE4MGgwYTI4LDI4LDAsMCwwLDI4LDI4aDBhMjgsMjgsMCwwLDAsMjgtMjhWMTUySDc2QTI4LDI4LDAsMCwwLDQ4LDE4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODAsMTQ0SDE2MFYxMTJoMjBhMzYsMzYsMCwxLDAtMzYtMzZWOTZIMTEyVjc2YTM2LDM2LDAsMSwwLTM2LDM2SDk2djMySDc2YTM2LDM2LDAsMSwwLDM2LDM2VjE2MGgzMnYyMGEzNiwzNiwwLDEsMCwzNi0zNlpNMTYwLDc2YTIwLDIwLDAsMSwxLDIwLDIwSDE2MFpNNTYsNzZhMjAsMjAsMCwwLDEsNDAsMFY5Nkg3NkEyMCwyMCwwLDAsMSw1Niw3NlpNOTYsMTgwYTIwLDIwLDAsMSwxLTIwLTIwSDk2Wm0xNi02OGgzMnYzMkgxMTJabTY4LDg4YTIwLDIwLDAsMCwxLTIwLTIwVjE2MGgyMGEyMCwyMCwwLDAsMSwwLDQwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Command";
export { I as Command }
