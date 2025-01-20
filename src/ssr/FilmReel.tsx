
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/FilmReel";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjE2SDE4My4zNkExMDMuOTUsMTAzLjk1LDAsMSwwLDEyOCwyMzJIMjMyYTgsOCwwLDAsMCwwLTE2Wk00MCwxMjhhODgsODgsMCwxLDEsODgsODhBODguMSw4OC4xLDAsMCwxLDQwLDEyOFptODgtMjRhMjQsMjQsMCwxLDAtMjQtMjRBMjQsMjQsMCwwLDAsMTI4LDEwNFptMC0zMmE4LDgsMCwxLDEtOCw4QTgsOCwwLDAsMSwxMjgsNzJabTI0LDEwNGEyNCwyNCwwLDEsMC0yNCwyNEEyNCwyNCwwLDAsMCwxNTIsMTc2Wm0tMzIsMGE4LDgsMCwxLDEsOCw4QTgsOCwwLDAsMSwxMjAsMTc2Wm01Ni0yNGEyNCwyNCwwLDEsMC0yNC0yNEEyNCwyNCwwLDAsMCwxNzYsMTUyWm0wLTMyYTgsOCwwLDEsMS04LDhBOCw4LDAsMCwxLDE3NiwxMjBaTTgwLDEwNGEyNCwyNCwwLDEsMCwyNCwyNEEyNCwyNCwwLDAsMCw4MCwxMDRabTAsMzJhOCw4LDAsMSwxLDgtOEE4LDgsMCwwLDEsODAsMTM2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjIwSDE2Ny4xOEExMDAsMTAwLDAsMSwwLDEyOCwyMjhIMjMyYTQsNCwwLDAsMCwwLThaTTM2LDEyOGE5Miw5MiwwLDEsMSw5Miw5MkE5Mi4xLDkyLjEsMCwwLDEsMzYsMTI4Wm05Mi0yOGEyMCwyMCwwLDEsMC0yMC0yMEEyMCwyMCwwLDAsMCwxMjgsMTAwWm0wLTMyYTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDEyOCw2OFptMjAsMTA4YTIwLDIwLDAsMSwwLTIwLDIwQTIwLDIwLDAsMCwwLDE0OCwxNzZabS0zMiwwYTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDExNiwxNzZabTYwLTI4YTIwLDIwLDAsMSwwLTIwLTIwQTIwLDIwLDAsMCwwLDE3NiwxNDhabTAtMzJhMTIsMTIsMCwxLDEtMTIsMTJBMTIsMTIsMCwwLDEsMTc2LDExNlptLTk2LThhMjAsMjAsMCwxLDAsMjAsMjBBMjAsMjAsMCwwLDAsODAsMTA4Wm0wLDMyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDgwLDE0MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjE4SDE3NmExMDIsMTAyLDAsMSwwLTQ4LDEySDIzMmE2LDYsMCwwLDAsMC0xMlpNMzgsMTI4YTkwLDkwLDAsMSwxLDkwLDkwQTkwLjEsOTAuMSwwLDAsMSwzOCwxMjhabTkwLTI2YTIyLDIyLDAsMSwwLTIyLTIyQTIyLDIyLDAsMCwwLDEyOCwxMDJabTAtMzJhMTAsMTAsMCwxLDEtMTAsMTBBMTAsMTAsMCwwLDEsMTI4LDcwWm0yMiwxMDZhMjIsMjIsMCwxLDAtMjIsMjJBMjIsMjIsMCwwLDAsMTUwLDE3NlptLTMyLDBhMTAsMTAsMCwxLDEsMTAsMTBBMTAsMTAsMCwwLDEsMTE4LDE3NlptNTgtMjZhMjIsMjIsMCwxLDAtMjItMjJBMjIsMjIsMCwwLDAsMTc2LDE1MFptMC0zMmExMCwxMCwwLDEsMS0xMCwxMEExMCwxMCwwLDAsMSwxNzYsMTE4Wk04MCwxMDZhMjIsMjIsMCwxLDAsMjIsMjJBMjIsMjIsMCwwLDAsODAsMTA2Wm0wLDMyYTEwLDEwLDAsMSwxLDEwLTEwQTEwLDEwLDAsMCwxLDgwLDEzOFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjEySDE5NS44QTEwNy45NCwxMDcuOTQsMCwxLDAsMTI4LDIzNkgyMzJhMTIsMTIsMCwwLDAsMC0yNFpNNDQsMTI4YTg0LDg0LDAsMSwxLDg0LDg0QTg0LjA5LDg0LjA5LDAsMCwxLDQ0LDEyOFptNjQtNDRhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTA4LDg0Wm0yMCwxMDhhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMTI4LDE5MlptMjQtNjRhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTUyLDEyOFptLTQ4LDBhMjAsMjAsMCwxLDEtMjAtMjBBMjAsMjAsMCwwLDEsMTA0LDEyOFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjE2SDE4My4zNkExMDMuOTUsMTAzLjk1LDAsMSwwLDEyOCwyMzJIMjMyYTgsOCwwLDAsMCwwLTE2Wk04MCwxNDhhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsODAsMTQ4Wm00OCw0OGEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSwxMjgsMTk2Wm0wLTk2YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDEyOCwxMDBabTI4LDI4YTIwLDIwLDAsMSwxLDIwLDIwQTIwLDIwLDAsMCwxLDE1NiwxMjhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzJhOTYsOTYsMCwxLDAsOTYsOTZBOTYsOTYsMCwwLDAsMTI4LDMyWk04MCwxNDRhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsODAsMTQ0Wm00OCw0OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjgsMTkyWm0wLTk2YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDEyOCw5NlptNDgsNDhhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMTc2LDE0NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzIsMjE2SDE4My4zNkExMDMuOTUsMTAzLjk1LDAsMSwwLDEyOCwyMzJIMjMyYTgsOCwwLDAsMCwwLTE2Wk00MCwxMjhhODgsODgsMCwxLDEsODgsODhBODguMSw4OC4xLDAsMCwxLDQwLDEyOFptODgtMjRhMjQsMjQsMCwxLDAtMjQtMjRBMjQsMjQsMCwwLDAsMTI4LDEwNFptMC0zMmE4LDgsMCwxLDEtOCw4QTgsOCwwLDAsMSwxMjgsNzJabTI0LDEwNGEyNCwyNCwwLDEsMC0yNCwyNEEyNCwyNCwwLDAsMCwxNTIsMTc2Wm0tMzIsMGE4LDgsMCwxLDEsOCw4QTgsOCwwLDAsMSwxMjAsMTc2Wm01Ni0yNGEyNCwyNCwwLDEsMC0yNC0yNEEyNCwyNCwwLDAsMCwxNzYsMTUyWm0wLTMyYTgsOCwwLDEsMS04LDhBOCw4LDAsMCwxLDE3NiwxMjBaTTgwLDEwNGEyNCwyNCwwLDEsMCwyNCwyNEEyNCwyNCwwLDAsMCw4MCwxMDRabTAsMzJhOCw4LDAsMSwxLDgtOEE4LDgsMCwwLDEsODAsMTM2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FilmReel";
export { I as FilmReel }
