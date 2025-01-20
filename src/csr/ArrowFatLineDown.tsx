
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ArrowFatLineDown";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuMzksMTMyLjk0QTgsOCwwLDAsMCwyMjQsMTI4SDE4NFY3MmE4LDgsMCwwLDAtOC04SDgwYTgsOCwwLDAsMC04LDh2NTZIMzJhOCw4LDAsMCwwLTUuNjYsMTMuNjZsOTYsOTZhOCw4LDAsMCwwLDExLjMyLDBsOTYtOTZBOCw4LDAsMCwwLDIzMS4zOSwxMzIuOTRaTTEyOCwyMjAuNjksNTEuMzEsMTQ0SDgwYTgsOCwwLDAsMCw4LThWODBoODB2NTZhOCw4LDAsMCwwLDgsOGgyOC42OVpNNzIsNDBhOCw4LDAsMCwxLDgtOGg5NmE4LDgsMCwwLDEsMCwxNkg4MEE4LDgsMCwwLDEsNzIsNDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuNywxMzQuNDdBNCw0LDAsMCwwLDIyNCwxMzJIMTgwVjcyYTQsNCwwLDAsMC00LTRIODBhNCw0LDAsMCwwLTQsNHY2MEgzMmE0LDQsMCwwLDAtMi44Myw2LjgzbDk2LDk2YTQsNCwwLDAsMCw1LjY2LDBsOTYtOTZBNCw0LDAsMCwwLDIyNy43LDEzNC40N1pNMTI4LDIyNi4zNCw0MS42NiwxNDBIODBhNCw0LDAsMCwwLDQtNFY3Nmg4OHY2MGE0LDQsMCwwLDAsNCw0aDM4LjM0Wk03Niw0MGE0LDQsMCwwLDEsNC00aDk2YTQsNCwwLDAsMSwwLDhIODBBNCw0LDAsMCwxLDc2LDQwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNTQsMTMzLjdBNiw2LDAsMCwwLDIyNCwxMzBIMTgyVjcyYTYsNiwwLDAsMC02LTZIODBhNiw2LDAsMCwwLTYsNnY1OEgzMmE2LDYsMCwwLDAtNC4yNCwxMC4yNGw5Niw5NmE2LDYsMCwwLDAsOC40OCwwbDk2LTk2QTYsNiwwLDAsMCwyMjkuNTQsMTMzLjdaTTEyOCwyMjMuNTEsNDYuNDksMTQySDgwYTYsNiwwLDAsMCw2LTZWNzhoODR2NThhNiw2LDAsMCwwLDYsNmgzMy41MVpNNzQsNDBhNiw2LDAsMCwxLDYtNmg5NmE2LDYsMCwwLDEsMCwxMkg4MEE2LDYsMCwwLDEsNzQsNDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuMDksMTMxLjQxQTEyLDEyLDAsMCwwLDIyNCwxMjRIMTg4VjgwYTEyLDEyLDAsMCwwLTEyLTEySDgwQTEyLDEyLDAsMCwwLDY4LDgwdjQ0SDMyYTEyLDEyLDAsMCwwLTguNDgsMjAuNDlsOTYsOTZhMTIsMTIsMCwwLDAsMTcsMGw5Ni05NkExMiwxMiwwLDAsMCwyMzUuMDksMTMxLjQxWk0xMjgsMjE1LDYxLDE0OEg4MGExMiwxMiwwLDAsMCwxMi0xMlY5Mmg3MnY0NGExMiwxMiwwLDAsMCwxMiwxMmgxOVpNNjgsNDBBMTIsMTIsMCwwLDEsODAsMjhoOTZhMTIsMTIsMCwwLDEsMCwyNEg4MEExMiwxMiwwLDAsMSw2OCw0MFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Miw0MGE4LDgsMCwwLDEsOC04aDk2YTgsOCwwLDAsMSwwLDE2SDgwQTgsOCwwLDAsMSw3Miw0MFptMTU5LjM5LDkyLjk0QTgsOCwwLDAsMCwyMjQsMTI4SDE4NFY3MmE4LDgsMCwwLDAtOC04SDgwYTgsOCwwLDAsMC04LDh2NTZIMzJhOCw4LDAsMCwwLTUuNjYsMTMuNjZsOTYsOTZhOCw4LDAsMCwwLDExLjMyLDBsOTYtOTZBOCw4LDAsMCwwLDIzMS4zOSwxMzIuOTRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTM2bC05Niw5NkwzMiwxMzZIODBWNzJoOTZ2NjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMxLjM5LDEzMi45NEE4LDgsMCwwLDAsMjI0LDEyOEgxODRWNzJhOCw4LDAsMCwwLTgtOEg4MGE4LDgsMCwwLDAtOCw4djU2SDMyYTgsOCwwLDAsMC01LjY2LDEzLjY2bDk2LDk2YTgsOCwwLDAsMCwxMS4zMiwwbDk2LTk2QTgsOCwwLDAsMCwyMzEuMzksMTMyLjk0Wk0xMjgsMjIwLjY5LDUxLjMxLDE0NEg4MGE4LDgsMCwwLDAsOC04VjgwaDgwdjU2YTgsOCwwLDAsMCw4LDhoMjguNjlaTTcyLDQwYTgsOCwwLDAsMSw4LThoOTZhOCw4LDAsMCwxLDAsMTZIODBBOCw4LDAsMCwxLDcyLDQwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowFatLineDown";
export { I as ArrowFatLineDown }
