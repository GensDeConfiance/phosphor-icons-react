
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Perspective";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTIwSDIyNFY0OGExNiwxNiwwLDAsMC0xOC44Ni0xNS43NGwtMTYwLDI5LjA5QTE2LDE2LDAsMCwwLDMyLDc3LjA5VjEyMEgxNmE4LDgsMCwwLDAsMCwxNkgzMnY0Mi45MWExNiwxNiwwLDAsMCwxMy4xNCwxNS43NGwxNjAsMjkuMDlBMTYuNDcsMTYuNDcsMCwwLDAsMjA4LDIyNGExNiwxNiwwLDAsMCwxNi0xNlYxMzZoMTZhOCw4LDAsMCwwLDAtMTZaTTQ4LDc3LjA5LDIwOCw0OHY3Mkg0OFpNMjA4LDIwOCw0OCwxNzguOTFWMTM2SDIwOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI0SDIyMFY0OGExMiwxMiwwLDAsMC0xNC4xNS0xMS44MWwtMTYwLDI5LjFBMTIsMTIsMCwwLDAsMzYsNzcuMDlWMTI0SDE2YTQsNCwwLDAsMCwwLDhIMzZ2NDYuOTFhMTIsMTIsMCwwLDAsOS44NSwxMS44bDE2MCwyOS4wOWExMS4yOCwxMS4yOCwwLDAsMCwyLjE2LjIsMTIsMTIsMCwwLDAsMTItMTJWMTMyaDIwYTQsNCwwLDAsMCwwLThaTTQ0LDc3LjA5YTQsNCwwLDAsMSwzLjI4LTMuOTNsMTYwLTI5LjA5QTQsNCwwLDAsMSwyMTIsNDh2NzZINDRaTTIxMiwyMDhhNCw0LDAsMCwxLTQuNzIsMy45M2wtMTYwLTI5LjA5QTQsNCwwLDAsMSw0NCwxNzguOTFWMTMySDIxMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTIySDIyMlY0OGExNCwxNCwwLDAsMC0xNi41LTEzLjc3TDQ1LjUsNjMuMzJBMTQsMTQsMCwwLDAsMzQsNzcuMDlWMTIySDE2YTYsNiwwLDAsMCwwLDEySDM0djQ0LjkxYTE0LDE0LDAsMCwwLDExLjUsMTMuNzdsMTYwLDI5LjA5QTE0LjIsMTQuMiwwLDAsMCwyMDgsMjIyYTE0LDE0LDAsMCwwLDE0LTE0VjEzNGgxOGE2LDYsMCwwLDAsMC0xMlpNNDYsNzcuMDlhMiwyLDAsMCwxLDEuNjQtMmwxNjAtMjkuMS4zNywwYTIsMiwwLDAsMSwyLDJ2NzRINDZaTTIxMCwyMDhhMiwyLDAsMCwxLS43MiwxLjUzLDIsMiwwLDAsMS0xLjY0LjQ0bC0xNjAtMjkuMWEyLDIsMCwwLDEtMS42NC0yVjEzNEgyMTBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTE2SDIyOFY0OGEyMCwyMCwwLDAsMC0yMy41OC0xOS42N2wtMTYwLDI5LjA5QTIwLDIwLDAsMCwwLDI4LDc3LjA5VjExNkgxNmExMiwxMiwwLDAsMCwwLDI0SDI4djM4LjkxYTIwLDIwLDAsMCwwLDE2LjQyLDE5LjY3bDE2MCwyOS4wOUEyMCwyMCwwLDAsMCwyMjgsMjA4VjE0MGgxMmExMiwxMiwwLDAsMCwwLTI0Wk01Miw4MC40MywyMDQsNTIuOFYxMTZINTJaTTIwNCwyMDMuMiw1MiwxNzUuNTdWMTQwSDIwNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTM2YTgsOCwwLDAsMS04LDhIMjI0djY0YTE2LDE2LDAsMCwxLTE2LDE2LDE2LjQ3LDE2LjQ3LDAsMCwxLTIuODctLjI2bC0xNjAtMjkuMDlBMTYsMTYsMCwwLDEsMzIsMTc4LjkxVjE0NEgxNmE4LDgsMCwwLDEsMC0xNkgyNDBBOCw4LDAsMCwxLDI0OCwxMzZaTTM2LDExMkgyMjBhNCw0LDAsMCwwLDQtNFY0OC40MmExNi40OCwxNi40OCwwLDAsMC00LjA3LTExLjA4LDE2LDE2LDAsMCwwLTE0Ljc5LTUuMDhsLTE2MCwyOS4wOUExNiwxNiwwLDAsMCwzMiw3Ny4wOVYxMDhBNCw0LDAsMCwwLDM2LDExMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMjA4YTgsOCwwLDAsMS05LjQzLDcuODdsLTE2MC0yOS4wOUE4LDgsMCwwLDEsNDAsMTc4LjkxVjc3LjA5YTgsOCwwLDAsMSw2LjU3LTcuODdsMTYwLTI5LjA5QTgsOCwwLDAsMSwyMTYsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQwLDEyMEgyMjRWNDhhMTYsMTYsMCwwLDAtMTguODYtMTUuNzRsLTE2MCwyOS4wOUExNiwxNiwwLDAsMCwzMiw3Ny4wOVYxMjBIMTZhOCw4LDAsMCwwLDAsMTZIMzJ2NDIuOTFhMTYsMTYsMCwwLDAsMTMuMTQsMTUuNzRsMTYwLDI5LjA5QTE2LjQ3LDE2LjQ3LDAsMCwwLDIwOCwyMjRhMTYsMTYsMCwwLDAsMTYtMTZWMTM2aDE2YTgsOCwwLDAsMCwwLTE2Wk00OCw3Ny4wOSwyMDgsNDh2NzJINDhaTTIwOCwyMDgsNDgsMTc4LjkxVjEzNkgyMDhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Perspective";
export { I as Perspective }
