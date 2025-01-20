
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Function";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBhOCw4LDAsMCwxLTgsOEgxNzAuNzFhMjQsMjQsMCwwLDAtMjMuNjIsMTkuNzFMMTM3LjU5LDEyMEgxODRhOCw4LDAsMCwxLDAsMTZIMTM0LjY4bC0xMCw1NS4xNkE0MCw0MCwwLDAsMSw4NS4yOSwyMjRINTZhOCw4LDAsMCwxLDAtMTZIODUuMjlhMjQsMjQsMCwwLDAsMjMuNjItMTkuNzFsOS41LTUyLjI5SDcyYTgsOCwwLDAsMSwwLTE2aDQ5LjMybDEwLTU1LjE2QTQwLDQwLDAsMCwxLDE3MC43MSwzMkgyMDBBOCw4LDAsMCwxLDIwOCw0MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsNDBhNCw0LDAsMCwxLTQsNEgxNzAuNzFhMjgsMjgsMCwwLDAtMjcuNTUsMjNsLTEwLjM3LDU3SDE4NGE0LDQsMCwwLDEsMCw4SDEzMS4zNGwtMTAuNjMsNTguNDRBMzYsMzYsMCwwLDEsODUuMjksMjIwSDU2YTQsNCwwLDAsMSwwLThIODUuMjlhMjgsMjgsMCwwLDAsMjcuNTUtMjNsMTAuMzctNTdINzJhNCw0LDAsMCwxLDAtOGg1Mi42NmwxMC42My01OC40NEEzNiwzNiwwLDAsMSwxNzAuNzEsMzZIMjAwQTQsNCwwLDAsMSwyMDQsNDBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsNDBhNiw2LDAsMCwxLTYsNkgxNzAuNzFhMjYsMjYsMCwwLDAtMjUuNTgsMjEuMzVMMTM1LjE5LDEyMkgxODRhNiw2LDAsMCwxLDAsMTJIMTMzbC0xMC4zMyw1Ni44QTM4LDM4LDAsMCwxLDg1LjI5LDIyMkg1NmE2LDYsMCwwLDEsMC0xMkg4NS4yOWEyNiwyNiwwLDAsMCwyNS41OC0yMS4zNUwxMjAuODEsMTM0SDcyYTYsNiwwLDAsMSwwLTEyaDUxbDEwLjMzLTU2LjhBMzgsMzgsMCwwLDEsMTcwLjcxLDM0SDIwMEE2LDYsMCwwLDEsMjA2LDQwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNDBhMTIsMTIsMCwwLDEtMTIsMTJIMTcwLjcxQTIwLDIwLDAsMCwwLDE1MSw2OC40MkwxNDIuMzgsMTE2SDE4NGExMiwxMiwwLDAsMSwwLDI0SDEzOGwtOS40NCw1MS44N0E0NCw0NCwwLDAsMSw4NS4yOSwyMjhINTZhMTIsMTIsMCwwLDEsMC0yNEg4NS4yOUEyMCwyMCwwLDAsMCwxMDUsMTg3LjU4TDExMy42MiwxNDBINzJhMTIsMTIsMCwwLDEsMC0yNGg0Nmw5LjQ0LTUxLjg3QTQ0LDQ0LDAsMCwxLDE3MC43MSwyOEgyMDBBMTIsMTIsMCwwLDEsMjEyLDQwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE3Niw3MkgxNTkuOTJhMTYsMTYsMCwwLDAtMTUuNzMsMTNsLTYuNTUsMzVIMTY4YTgsOCwwLDAsMSwwLDE2SDEzNC42NGwtNy4xMSwzNy45QTMyLDMyLDAsMCwxLDk2LjA4LDIwMEg4MGE4LDgsMCwwLDEsMC0xNkg5Ni4wOEExNiwxNiwwLDAsMCwxMTEuODEsMTcxTDExOC4zNiwxMzZIODhhOCw4LDAsMCwxLDAtMTZoMzMuMzZsNy4xMS0zNy45QTMyLDMyLDAsMCwxLDE1OS45Miw1NkgxNzZhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDU2VjU2QTE2LDE2LDAsMCwxLDcyLDQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCw0MGE4LDgsMCwwLDEtOCw4SDE3MC43MWEyNCwyNCwwLDAsMC0yMy42MiwxOS43MUwxMzcuNTksMTIwSDE4NGE4LDgsMCwwLDEsMCwxNkgxMzQuNjhsLTEwLDU1LjE2QTQwLDQwLDAsMCwxLDg1LjI5LDIyNEg1NmE4LDgsMCwwLDEsMC0xNkg4NS4yOWEyNCwyNCwwLDAsMCwyMy42Mi0xOS43MWw5LjUtNTIuMjlINzJhOCw4LDAsMCwxLDAtMTZoNDkuMzJsMTAtNTUuMTZBNDAsNDAsMCwwLDEsMTcwLjcxLDMySDIwMEE4LDgsMCwwLDEsMjA4LDQwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Function";
export { I as Function }
