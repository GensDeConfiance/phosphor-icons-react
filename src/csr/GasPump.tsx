
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/GasPump";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEsNjkuNjYsMjIxLjY2LDUwLjM0YTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwyMjkuNjYsODFBOCw4LDAsMCwxLDIzMiw4Ni42M1YxNjhhOCw4LDAsMCwxLTE2LDBWMTI4YTI0LDI0LDAsMCwwLTI0LTI0SDE3NlY1NmEyNCwyNCwwLDAsMC0yNC0yNEg3MkEyNCwyNCwwLDAsMCw0OCw1NlYyMDhIMzJhOCw4LDAsMCwwLDAsMTZIMTkyYTgsOCwwLDAsMCwwLTE2SDE3NlYxMjBoMTZhOCw4LDAsMCwxLDgsOHY0MGEyNCwyNCwwLDAsMCw0OCwwVjg2LjYzQTIzLjg1LDIzLjg1LDAsMCwwLDI0MSw2OS42NlpNNjQsMjA4VjU2YTgsOCwwLDAsMSw4LThoODBhOCw4LDAsMCwxLDgsOFYyMDhabTgwLTk2YTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLDAtMTZoNDhBOCw4LDAsMCwxLDE0NCwxMTJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzguMTQsNzIuNDksMjE4LjgzLDUzLjE3YTQsNCwwLDAsMC01LjY2LDUuNjZsMTkuMzIsMTkuMzFBMTIsMTIsMCwwLDEsMjM2LDg2LjYzVjE2OGExMiwxMiwwLDAsMS0yNCwwVjEyOGEyMCwyMCwwLDAsMC0yMC0yMEgxNzJWNTZhMjAsMjAsMCwwLDAtMjAtMjBINzJBMjAsMjAsMCwwLDAsNTIsNTZWMjEySDMyYTQsNCwwLDAsMCwwLDhIMTkyYTQsNCwwLDAsMCwwLThIMTcyVjExNmgyMGExMiwxMiwwLDAsMSwxMiwxMnY0MGEyMCwyMCwwLDAsMCw0MCwwVjg2LjYzQTE5Ljg1LDE5Ljg1LDAsMCwwLDIzOC4xNCw3Mi40OVpNNjAsMjEyVjU2QTEyLDEyLDAsMCwxLDcyLDQ0aDgwYTEyLDEyLDAsMCwxLDEyLDEyVjIxMlptODAtMTAwYTQsNCwwLDAsMS00LDRIODhhNCw0LDAsMCwxLDAtOGg0OEE0LDQsMCwwLDEsMTQwLDExMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuNTYsNzEuMDcsMjIwLjI0LDUxLjc2YTYsNiwwLDAsMC04LjQ4LDguNDhsMTkuMzEsMTkuMzJBOS45Myw5LjkzLDAsMCwxLDIzNCw4Ni42M1YxNjhhMTAsMTAsMCwwLDEtMjAsMFYxMjhhMjIsMjIsMCwwLDAtMjItMjJIMTc0VjU2YTIyLDIyLDAsMCwwLTIyLTIySDcyQTIyLDIyLDAsMCwwLDUwLDU2VjIxMEgzMmE2LDYsMCwwLDAsMCwxMkgxOTJhNiw2LDAsMCwwLDAtMTJIMTc0VjExOGgxOGExMCwxMCwwLDAsMSwxMCwxMHY0MGEyMiwyMiwwLDAsMCw0NCwwVjg2LjYzQTIxLjg4LDIxLjg4LDAsMCwwLDIzOS41Niw3MS4wN1pNNjIsMjEwVjU2QTEwLDEwLDAsMCwxLDcyLDQ2aDgwYTEwLDEwLDAsMCwxLDEwLDEwVjIxMFptODAtOThhNiw2LDAsMCwxLTYsNkg4OGE2LDYsMCwwLDEsMC0xMmg0OEE2LDYsMCwwLDEsMTQyLDExMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDcuOCw2Ni44MywyMjguNDksNDcuNTFhMTIsMTIsMCwwLDAtMTcsMTdMMjMwLjgzLDgzLjhBNCw0LDAsMCwxLDIzMiw4Ni42M1YxNjZhNiw2LDAsMCwxLTEyLDBWMTI4YTI4LDI4LDAsMCwwLTI4LTI4SDE4MFY1NmEyOCwyOCwwLDAsMC0yOC0yOEg3MkEyOCwyOCwwLDAsMCw0NCw1NlYyMDRIMzJhMTIsMTIsMCwwLDAsMCwyNEgxOTJhMTIsMTIsMCwwLDAsMC0yNEgxODBWMTI0aDEyYTQsNCwwLDAsMSw0LDR2MzhhMzAsMzAsMCwwLDAsNjAsMFY4Ni42M0EyNy44MSwyNy44MSwwLDAsMCwyNDcuOCw2Ni44M1pNNjgsMjA0VjU2YTQsNCwwLDAsMSw0LTRoODBhNCw0LDAsMCwxLDQsNFYyMDRabTcyLTkyYTEyLDEyLDAsMCwxLTEyLDEySDk2YTEyLDEyLDAsMCwxLDAtMjRoMzJBMTIsMTIsMCwwLDEsMTQwLDExMloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEsNjkuNjYsMjIxLjY2LDUwLjM0YTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwyMjkuNjYsODFBOCw4LDAsMCwxLDIzMiw4Ni42M1YxNjhhOCw4LDAsMCwxLTE2LDBWMTI4YTI0LDI0LDAsMCwwLTI0LTI0SDE3NlY1NmEyNCwyNCwwLDAsMC0yNC0yNEg3MkEyNCwyNCwwLDAsMCw0OCw1NlYyMDhIMzJhOCw4LDAsMCwwLDAsMTZIMTkyYTgsOCwwLDAsMCwwLTE2SDE3NlYxMjBoMTZhOCw4LDAsMCwxLDgsOHY0MGEyNCwyNCwwLDAsMCw0OCwwVjg2LjYzQTIzLjg1LDIzLjg1LDAsMCwwLDI0MSw2OS42NlpNMTQ0LDEyMEg4MGE4LDgsMCwwLDEsMC0xNmg2NGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNTZWMjE2SDU2VjU2QTE2LDE2LDAsMCwxLDcyLDQwaDgwQTE2LDE2LDAsMCwxLDE2OCw1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNDEsNjkuNjYsMjIxLjY2LDUwLjM0YTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwyMjkuNjYsODFBOCw4LDAsMCwxLDIzMiw4Ni42M1YxNjhhOCw4LDAsMCwxLTE2LDBWMTI4YTI0LDI0LDAsMCwwLTI0LTI0SDE3NlY1NmEyNCwyNCwwLDAsMC0yNC0yNEg3MkEyNCwyNCwwLDAsMCw0OCw1NlYyMDhIMzJhOCw4LDAsMCwwLDAsMTZIMTkyYTgsOCwwLDAsMCwwLTE2SDE3NlYxMjBoMTZhOCw4LDAsMCwxLDgsOHY0MGEyNCwyNCwwLDAsMCw0OCwwVjg2LjYzQTIzLjg1LDIzLjg1LDAsMCwwLDI0MSw2OS42NlpNNjQsMjA4VjU2YTgsOCwwLDAsMSw4LThoODBhOCw4LDAsMCwxLDgsOFYyMDhabTgwLTk2YTgsOCwwLDAsMS04LDhIODhhOCw4LDAsMCwxLDAtMTZoNDhBOCw4LDAsMCwxLDE0NCwxMTJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "GasPump";
export { I as GasPump }
