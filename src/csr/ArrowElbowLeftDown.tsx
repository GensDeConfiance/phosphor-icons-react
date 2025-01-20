
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ArrowElbowLeftDown";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNzJhOCw4LDAsMCwxLTgsOEg5NlYxOTYuNjlsMzQuMzQtMzQuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMybC00OCw0OGE4LDgsMCwwLDEtMTEuMzIsMGwtNDgtNDhhOCw4LDAsMCwxLDExLjMyLTExLjMyTDgwLDE5Ni42OVY3MmE4LDgsMCwwLDEsOC04SDIzMkE4LDgsMCwwLDEsMjQwLDcyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNzJhNCw0LDAsMCwxLTQsNEg5MlYyMDYuMzRsNDEuMTctNDEuMTdhNCw0LDAsMCwxLDUuNjYsNS42NmwtNDgsNDhhNCw0LDAsMCwxLTUuNjYsMGwtNDgtNDhhNCw0LDAsMCwxLDUuNjYtNS42Nkw4NCwyMDYuMzRWNzJhNCw0LDAsMCwxLDQtNEgyMzJBNCw0LDAsMCwxLDIzNiw3MloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsNzJhNiw2LDAsMCwxLTYsNkg5NFYyMDEuNTFsMzcuNzYtMzcuNzVhNiw2LDAsMCwxLDguNDgsOC40OGwtNDgsNDhhNiw2LDAsMCwxLTguNDgsMGwtNDgtNDhhNiw2LDAsMCwxLDguNDgtOC40OEw4MiwyMDEuNTFWNzJhNiw2LDAsMCwxLDYtNkgyMzJBNiw2LDAsMCwxLDIzOCw3MloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsNzJhMTIsMTIsMCwwLDEtMTIsMTJIMTAwVjE4N2wyNy41MS0yNy41MmExMiwxMiwwLDAsMSwxNywxN2wtNDgsNDhhMTIsMTIsMCwwLDEtMTcsMGwtNDgtNDhhMTIsMTIsMCwxLDEsMTctMTdMNzYsMTg3VjcyQTEyLDEyLDAsMCwxLDg4LDYwSDIzMkExMiwxMiwwLDAsMSwyNDQsNzJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNzJhOCw4LDAsMCwxLTgsOEg5NnY4MGg0MGE4LDgsMCwwLDEsNS42NiwxMy42NmwtNDgsNDhhOCw4LDAsMCwxLTExLjMyLDBsLTQ4LTQ4QTgsOCwwLDAsMSw0MCwxNjBIODBWNzJhOCw4LDAsMCwxLDgtOEgyMzJBOCw4LDAsMCwxLDI0MCw3MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTY4LDg4LDIxNiw0MCwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDY0SDg4YTgsOCwwLDAsMC04LDh2ODhINDBhOCw4LDAsMCwwLTUuNjYsMTMuNjZsNDgsNDhhOCw4LDAsMCwwLDExLjMyLDBsNDgtNDhBOCw4LDAsMCwwLDEzNiwxNjBIOTZWODBIMjMyYTgsOCwwLDAsMCwwLTE2Wk04OCwyMDQuNjksNTkuMzEsMTc2aDU3LjM4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowElbowLeftDown";
export { I as ArrowElbowLeftDown }
