
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/KeyReturn";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTA0djMyYTgsOCwwLDAsMS04LDhIOTkuMzFsMTAuMzUsMTAuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMybC0yNC0yNGE4LDgsMCwwLDEsMC0xMS4zMmwyNC0yNGE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMOTkuMzEsMTI4SDE2OFYxMDRhOCw4LDAsMCwxLDE2LDBabTQ4LTQ4VjIwMGExNiwxNiwwLDAsMS0xNiwxNkg0MGExNiwxNiwwLDAsMS0xNi0xNlY1NkExNiwxNiwwLDAsMSw0MCw0MEgyMTZBMTYsMTYsMCwwLDEsMjMyLDU2Wk0yMTYsMjAwVjU2SDQwVjIwMEgyMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTA0djMyYTQsNCwwLDAsMS00LDRIODkuNjZsMTcuMTcsMTcuMTdhNCw0LDAsMCwxLTUuNjYsNS42NmwtMjQtMjRhNCw0LDAsMCwxLDAtNS42NmwyNC0yNGE0LDQsMCwwLDEsNS42Niw1LjY2TDg5LjY2LDEzMkgxNzJWMTA0YTQsNCwwLDAsMSw4LDBabTQ4LTQ4VjIwMGExMiwxMiwwLDAsMS0xMiwxMkg0MGExMiwxMiwwLDAsMS0xMi0xMlY1NkExMiwxMiwwLDAsMSw0MCw0NEgyMTZBMTIsMTIsMCwwLDEsMjI4LDU2Wm0tOCwwYTQsNCwwLDAsMC00LTRINDBhNCw0LDAsMCwwLTQsNFYyMDBhNCw0LDAsMCwwLDQsNEgyMTZhNCw0LDAsMCwwLDQtNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODIsMTA0djMyYTYsNiwwLDAsMS02LDZIOTQuNDhsMTMuNzYsMTMuNzZhNiw2LDAsMSwxLTguNDgsOC40OGwtMjQtMjRhNiw2LDAsMCwxLDAtOC40OGwyNC0yNGE2LDYsMCwwLDEsOC40OCw4LjQ4TDk0LjQ4LDEzMEgxNzBWMTA0YTYsNiwwLDAsMSwxMiwwWm00OC00OFYyMDBhMTQsMTQsMCwwLDEtMTQsMTRINDBhMTQsMTQsMCwwLDEtMTQtMTRWNTZBMTQsMTQsMCwwLDEsNDAsNDJIMjE2QTE0LDE0LDAsMCwxLDIzMCw1NlptLTEyLDBhMiwyLDAsMCwwLTItMkg0MGEyLDIsMCwwLDAtMiwyVjIwMGEyLDIsMCwwLDAsMiwySDIxNmEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MS41MSwxNDQuNDlhMTIsMTIsMCwwLDEsMC0xN2wyNC0yNGExMiwxMiwwLDAsMSwxNywxN0wxMDksMTI0aDU1VjEwNGExMiwxMiwwLDAsMSwyNCwwdjMyYTEyLDEyLDAsMCwxLTEyLDEySDEwOWwzLjUyLDMuNTFhMTIsMTIsMCwwLDEtMTcsMTdaTTIzNiw1NlYyMDBhMjAsMjAsMCwwLDEtMjAsMjBINDBhMjAsMjAsMCwwLDEtMjAtMjBWNTZBMjAsMjAsMCwwLDEsNDAsMzZIMjE2QTIwLDIwLDAsMCwxLDIzNiw1NlptLTI0LDRINDRWMTk2SDIxMloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabS0zMiw5NmE4LDgsMCwwLDEtOCw4SDk5LjMxbDEwLjM1LDEwLjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMmwtMjQtMjRhOCw4LDAsMCwxLDAtMTEuMzJsMjQtMjRhOCw4LDAsMCwxLDExLjMyLDExLjMyTDk5LjMxLDEyOEgxNjhWMTA0YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMjAwYTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFY1NmE4LDgsMCwwLDEsOC04SDIxNkE4LDgsMCwwLDEsMjI0LDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4NCwxMDR2MzJhOCw4LDAsMCwxLTgsOEg5OS4zMWwxMC4zNSwxMC4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJsLTI0LTI0YTgsOCwwLDAsMSwwLTExLjMybDI0LTI0YTgsOCwwLDAsMSwxMS4zMiwxMS4zMkw5OS4zMSwxMjhIMTY4VjEwNGE4LDgsMCwwLDEsMTYsMFptNDgtNDhWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDQwLDQwSDIxNkExNiwxNiwwLDAsMSwyMzIsNTZaTTIxNiwyMDBWNTZINDBWMjAwSDIxNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "KeyReturn";
export { I as KeyReturn }
