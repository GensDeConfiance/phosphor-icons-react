
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/MouseScroll";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTZIMTEyQTY0LjA3LDY0LjA3LDAsMCwwLDQ4LDgwdjk2YTY0LjA3LDY0LjA3LDAsMCwwLDY0LDY0aDMyYTY0LjA3LDY0LjA3LDAsMCwwLDY0LTY0VjgwQTY0LjA3LDY0LjA3LDAsMCwwLDE0NCwxNlptNDgsMTYwYTQ4LjA1LDQ4LjA1LDAsMCwxLTQ4LDQ4SDExMmE0OC4wNSw0OC4wNSwwLDAsMS00OC00OFY4MGE0OC4wNSw0OC4wNSwwLDAsMSw0OC00OGgzMmE0OC4wNSw0OC4wNSwwLDAsMSw0OCw0OFpNMTM2LDgzLjMxdjg5LjM4bDEwLjM0LTEwLjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMmwtMjQsMjRhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMjAsMTcyLjY5VjgzLjMxTDEwOS42Niw5My42NkE4LDgsMCwwLDEsOTguMzQsODIuMzRsMjQtMjRhOCw4LDAsMCwxLDExLjMyLDBsMjQsMjRhOCw4LDAsMCwxLTExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMjBIMTEyQTYwLjA3LDYwLjA3LDAsMCwwLDUyLDgwdjk2YTYwLjA3LDYwLjA3LDAsMCwwLDYwLDYwaDMyYTYwLjA3LDYwLjA3LDAsMCwwLDYwLTYwVjgwQTYwLjA3LDYwLjA3LDAsMCwwLDE0NCwyMFptNTIsMTU2YTUyLjA2LDUyLjA2LDAsMCwxLTUyLDUySDExMmE1Mi4wNiw1Mi4wNiwwLDAsMS01Mi01MlY4MGE1Mi4wNiw1Mi4wNiwwLDAsMSw1Mi01MmgzMmE1Mi4wNiw1Mi4wNiwwLDAsMSw1Miw1MlpNMTMyLDczLjY2VjE4Mi4zNGwxNy4xNy0xNy4xN2E0LDQsMCwwLDEsNS42Niw1LjY2bC0yNCwyNGE0LDQsMCwwLDEtNS42NiwwbC0yNC0yNGE0LDQsMCwwLDEsNS42Ni01LjY2TDEyNCwxODIuMzRWNzMuNjZMMTA2LjgzLDkwLjgzYTQsNCwwLDAsMS01LjY2LTUuNjZsMjQtMjRhNCw0LDAsMCwxLDUuNjYsMGwyNCwyNGE0LDQsMCwwLDEtNS42Niw1LjY2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMThIMTEyQTYyLjA3LDYyLjA3LDAsMCwwLDUwLDgwdjk2YTYyLjA3LDYyLjA3LDAsMCwwLDYyLDYyaDMyYTYyLjA3LDYyLjA3LDAsMCwwLDYyLTYyVjgwQTYyLjA3LDYyLjA3LDAsMCwwLDE0NCwxOFptNTAsMTU4YTUwLjA2LDUwLjA2LDAsMCwxLTUwLDUwSDExMmE1MC4wNiw1MC4wNiwwLDAsMS01MC01MFY4MGE1MC4wNiw1MC4wNiwwLDAsMSw1MC01MGgzMmE1MC4wNiw1MC4wNiwwLDAsMSw1MCw1MFpNMTM0LDc4LjQ5djk5bDEzLjc2LTEzLjc1YTYsNiwwLDAsMSw4LjQ4LDguNDhsLTI0LDI0YTYsNiwwLDAsMS04LjQ4LDBsLTI0LTI0YTYsNiwwLDAsMSw4LjQ4LTguNDhMMTIyLDE3Ny41MXYtOTlMMTA4LjI0LDkyLjI0YTYsNiwwLDAsMS04LjQ4LTguNDhsMjQtMjRhNiw2LDAsMCwxLDguNDgsMGwyNCwyNGE2LDYsMCwxLDEtOC40OCw4LjQ4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTJIMTEyQTY4LjA3LDY4LjA3LDAsMCwwLDQ0LDgwdjk2YTY4LjA3LDY4LjA3LDAsMCwwLDY4LDY4aDMyYTY4LjA3LDY4LjA3LDAsMCwwLDY4LTY4VjgwQTY4LjA3LDY4LjA3LDAsMCwwLDE0NCwxMlptNDQsMTY0YTQ0LjA1LDQ0LjA1LDAsMCwxLTQ0LDQ0SDExMmE0NC4wNSw0NC4wNSwwLDAsMS00NC00NFY4MGE0NC4wNSw0NC4wNSwwLDAsMSw0NC00NGgzMmE0NC4wNSw0NC4wNSwwLDAsMSw0NCw0NFpNMTQwLDkzVjE2M2wzLjUxLTMuNTJhMTIsMTIsMCwwLDEsMTcsMTdsLTI0LDI0YTEyLDEyLDAsMCwxLTE3LDBsLTI0LTI0YTEyLDEyLDAsMCwxLDE3LTE3TDExNiwxNjNWOTNsLTMuNTEsMy41MmExMiwxMiwwLDAsMS0xNy0xN2wyNC0yNGExMiwxMiwwLDAsMSwxNywwbDI0LDI0YTEyLDEyLDAsMCwxLTE3LDE3WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTZIMTEyQTY0LjA3LDY0LjA3LDAsMCwwLDQ4LDgwdjk2YTY0LjA3LDY0LjA3LDAsMCwwLDY0LDY0aDMyYTY0LjA3LDY0LjA3LDAsMCwwLDY0LTY0VjgwQTY0LjA3LDY0LjA3LDAsMCwwLDE0NCwxNlptMi4zNCwxNDYuMzRhOCw4LDAsMCwxLDExLjMyLDExLjMybC0yNCwyNGE4LDgsMCwwLDEtMTEuMzIsMGwtMjQtMjRhOCw4LDAsMCwxLDExLjMyLTExLjMyTDEyMCwxNzIuNjlWODMuMzFMMTA5LjY2LDkzLjY2QTgsOCwwLDAsMSw5OC4zNCw4Mi4zNGwyNC0yNGE4LDgsMCwwLDEsMTEuMzIsMGwyNCwyNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTM2LDgzLjMxdjg5LjM4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsODB2OTZhNTYsNTYsMCwwLDEtNTYsNTZIMTEyYTU2LDU2LDAsMCwxLTU2LTU2VjgwYTU2LDU2LDAsMCwxLDU2LTU2aDMyQTU2LDU2LDAsMCwxLDIwMCw4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNDQsMTZIMTEyQTY0LjA3LDY0LjA3LDAsMCwwLDQ4LDgwdjk2YTY0LjA3LDY0LjA3LDAsMCwwLDY0LDY0aDMyYTY0LjA3LDY0LjA3LDAsMCwwLDY0LTY0VjgwQTY0LjA3LDY0LjA3LDAsMCwwLDE0NCwxNlptNDgsMTYwYTQ4LjA1LDQ4LjA1LDAsMCwxLTQ4LDQ4SDExMmE0OC4wNSw0OC4wNSwwLDAsMS00OC00OFY4MGE0OC4wNSw0OC4wNSwwLDAsMSw0OC00OGgzMmE0OC4wNSw0OC4wNSwwLDAsMSw0OCw0OFpNMTM2LDgzLjMxdjg5LjM4bDEwLjM0LTEwLjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMmwtMjQsMjRhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMjAsMTcyLjY5VjgzLjMxTDEwOS42Niw5My42NkE4LDgsMCwwLDEsOTguMzQsODIuMzRsMjQtMjRhOCw4LDAsMCwxLDExLjMyLDBsMjQsMjRhOCw4LDAsMCwxLTExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "MouseScroll";
export { I as MouseScroll }
