
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ArrowUUpRight";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzAuMzQsMTMwLjM0LDIwNC42OSw5Nkg4OGE0OCw0OCwwLDAsMCwwLDk2aDg4YTgsOCwwLDAsMSwwLDE2SDg4QTY0LDY0LDAsMCwxLDg4LDgwSDIwNC42OUwxNzAuMzQsNDUuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMybDQ4LDQ4YTgsOCwwLDAsMSwwLDExLjMybC00OCw0OGE4LDgsMCwwLDEtMTEuMzItMTEuMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuMTcsMTMzLjE3LDIxNC4zNCw5Mkg4OGE1Miw1MiwwLDAsMCwwLDEwNGg4OGE0LDQsMCwwLDEsMCw4SDg4QTYwLDYwLDAsMCwxLDg4LDg0SDIxNC4zNEwxNzMuMTcsNDIuODNhNCw0LDAsMCwxLDUuNjYtNS42Nmw0OCw0OGE0LDQsMCwwLDEsMCw1LjY2bC00OCw0OGE0LDQsMCwwLDEtNS42Ni01LjY2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEuNzYsMTMxLjc2LDIwOS41MSw5NEg4OGE1MCw1MCwwLDAsMCwwLDEwMGg4OGE2LDYsMCwwLDEsMCwxMkg4OEE2Miw2MiwwLDAsMSw4OCw4MkgyMDkuNTFMMTcxLjc2LDQ0LjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhsNDgsNDhhNiw2LDAsMCwxLDAsOC40OGwtNDgsNDhhNiw2LDAsMCwxLTguNDgtOC40OFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjcuNTEsMTI3LjUxLDE5NSwxMDBIODhhNDQsNDQsMCwwLDAsMCw4OGg4OGExMiwxMiwwLDAsMSwwLDI0SDg4QTY4LDY4LDAsMCwxLDg4LDc2SDE5NUwxNjcuNTEsNDguNDlhMTIsMTIsMCwxLDEsMTctMTdsNDgsNDhhMTIsMTIsMCwwLDEsMCwxN2wtNDgsNDhhMTIsMTIsMCwwLDEtMTctMTdaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTM2Vjk2SDg4YTQ4LDQ4LDAsMCwwLDAsOTZoODhhOCw4LDAsMCwxLDAsMTZIODhBNjQsNjQsMCwwLDEsODgsODBoODBWNDBhOCw4LDAsMCwxLDEzLjY2LTUuNjZsNDgsNDhhOCw4LDAsMCwxLDAsMTEuMzJsLTQ4LDQ4QTgsOCwwLDAsMSwxNjgsMTM2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsODhsLTQ4LDQ4VjQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE3Mi45NCwxNDMuMzlhOCw4LDAsMCwwLDguNzItMS43M2w0OC00OGE4LDgsMCwwLDAsMC0xMS4zMmwtNDgtNDhBOCw4LDAsMCwwLDE2OCw0MFY4MEg4OGE2NCw2NCwwLDAsMCwwLDEyOGg4OGE4LDgsMCwwLDAsMC0xNkg4OGE0OCw0OCwwLDAsMSwwLTk2aDgwdjQwQTgsOCwwLDAsMCwxNzIuOTQsMTQzLjM5Wk0xODQsNTkuMzEsMjEyLjY5LDg4LDE4NCwxMTYuNjlaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowUUpRight";
export { I as ArrowUUpRight }
