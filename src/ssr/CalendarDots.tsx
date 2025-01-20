
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CalendarDots";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJIMTg0VjI0YTgsOCwwLDAsMC0xNiwwdjhIODhWMjRhOCw4LDAsMCwwLTE2LDB2OEg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNNzIsNDh2OGE4LDgsMCwwLDAsMTYsMFY0OGg4MHY4YTgsOCwwLDAsMCwxNiwwVjQ4aDI0VjgwSDQ4VjQ4Wk0yMDgsMjA4SDQ4Vjk2SDIwOFYyMDhabS02OC03NmExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNDAsMTMyWm00NCwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE4NCwxMzJaTTk2LDE3MmExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSw5NiwxNzJabTQ0LDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDE3MlptNDQsMGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxODQsMTcyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZIMTgwVjI0YTQsNCwwLDAsMC04LDBWMzZIODRWMjRhNCw0LDAsMCwwLTgsMFYzNkg0OEExMiwxMiwwLDAsMCwzNiw0OFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIMjA4YTEyLDEyLDAsMCwwLDEyLTEyVjQ4QTEyLDEyLDAsMCwwLDIwOCwzNlpNNDgsNDRINzZWNTZhNCw0LDAsMCwwLDgsMFY0NGg4OFY1NmE0LDQsMCwwLDAsOCwwVjQ0aDI4YTQsNCwwLDAsMSw0LDRWODRINDRWNDhBNCw0LDAsMCwxLDQ4LDQ0Wk0yMDgsMjEySDQ4YTQsNCwwLDAsMS00LTRWOTJIMjEyVjIwOEE0LDQsMCwwLDEsMjA4LDIxMlptLTcyLTgwYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDEzNiwxMzJabTQ0LDBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTgwLDEzMlpNOTIsMTcyYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDkyLDE3MlptNDQsMGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxMzYsMTcyWm00NCwwYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDE4MCwxNzJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRIMTgyVjI0YTYsNiwwLDAsMC0xMiwwVjM0SDg2VjI0YTYsNiwwLDAsMC0xMiwwVjM0SDQ4QTE0LDE0LDAsMCwwLDM0LDQ4VjIwOGExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsMjA4LDM0Wk00OCw0Nkg3NFY1NmE2LDYsMCwwLDAsMTIsMFY0Nmg4NFY1NmE2LDYsMCwwLDAsMTIsMFY0NmgyNmEyLDIsMCwwLDEsMiwyVjgySDQ2VjQ4QTIsMiwwLDAsMSw0OCw0NlpNMjA4LDIxMEg0OGEyLDIsMCwwLDEtMi0yVjk0SDIxMFYyMDhBMiwyLDAsMCwxLDIwOCwyMTBabS03MC03OGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxMzgsMTMyWm00NCwwYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDE4MiwxMzJaTTk0LDE3MmExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSw5NCwxNzJabTQ0LDBhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsMTM4LDE3MlptNDQsMGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxODIsMTcyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhIMTg4VjI0YTEyLDEyLDAsMCwwLTI0LDB2NEg5MlYyNGExMiwxMiwwLDAsMC0yNCwwdjRINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhaTTY4LDUyYTEyLDEyLDAsMCwwLDI0LDBoNzJhMTIsMTIsMCwwLDAsMjQsMGgxNlY3Nkg1MlY1MlpNNTIsMjA0VjEwMEgyMDRWMjA0Wm05Mi03NmExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxNDQsMTI4Wm00OCwwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE5MiwxMjhaTTk2LDE3NmExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSw5NiwxNzZabTQ4LDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTQ0LDE3NlptNDgsMGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxOTIsMTc2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJIMTg0VjI0YTgsOCwwLDAsMC0xNiwwdjhIODhWMjRhOCw4LDAsMCwwLTE2LDB2OEg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNODQsMTg0YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDg0LDE4NFptNDQsMGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsMTg0Wm0wLTQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxNDRabTQ0LDQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE3MiwxODRabTAtNDBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTcyLDE0NFptMzYtNjRINDhWNDhINzJ2OGE4LDgsMCwwLDAsMTYsMFY0OGg4MHY4YTgsOCwwLDAsMCwxNiwwVjQ4aDI0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWODhINDBWNDhhOCw4LDAsMCwxLDgtOEgyMDhBOCw4LDAsMCwxLDIxNiw0OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsMzJIMTg0VjI0YTgsOCwwLDAsMC0xNiwwdjhIODhWMjRhOCw4LDAsMCwwLTE2LDB2OEg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNNzIsNDh2OGE4LDgsMCwwLDAsMTYsMFY0OGg4MHY4YTgsOCwwLDAsMCwxNiwwVjQ4aDI0VjgwSDQ4VjQ4Wk0yMDgsMjA4SDQ4Vjk2SDIwOFYyMDhabS02OC03NmExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNDAsMTMyWm00NCwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE4NCwxMzJaTTk2LDE3MmExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSw5NiwxNzJabTQ0LDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDE3MlptNDQsMGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxODQsMTcyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CalendarDots";
export { I as CalendarDots }
