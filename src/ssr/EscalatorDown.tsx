
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/EscalatorDown";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzAuMzQsODUuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDE5Miw4NC42OVY0OGE4LDgsMCwwLDEsMTYsMFY4NC42OWwxMC4zNC0xMC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJsLTI0LDI0YTgsOCwwLDAsMS0xMS4zMiwwWk0yNDAsMTYwdjQwYTE2LDE2LDAsMCwxLTE2LDE2SDE2OGE4LDgsMCwwLDEtNS44OC0yLjU3TDY4LjUsMTEySDMyQTE2LDE2LDAsMCwxLDE2LDk2VjU2QTE2LDE2LDAsMCwxLDMyLDQwSDg4YTgsOCwwLDAsMSw1Ljg4LDIuNTdMMTg3LjUsMTQ0SDIyNEExNiwxNiwwLDAsMSwyNDAsMTYwWm0tMTYsMEgxODRhOCw4LDAsMCwxLTUuODgtMi41N0w4NC41LDU2SDMyVjk2SDcyYTgsOCwwLDAsMSw1Ljg4LDIuNTdMMTcxLjUsMjAwSDIyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuMTcsODIuODNhNCw0LDAsMCwxLDUuNjYtNS42NkwxOTYsOTQuMzRWNDhhNCw0LDAsMCwxLDgsMFY5NC4zNGwxNy4xNy0xNy4xN2E0LDQsMCwxLDEsNS42Niw1LjY2bC0yNCwyNGE0LDQsMCwwLDEtNS42NiwwWk0yMzYsMTYwdjQwYTEyLDEyLDAsMCwxLTEyLDEySDE2OGE0LDQsMCwwLDEtMi45NC0xLjI5TDcwLjI1LDEwOEgzMkExMiwxMiwwLDAsMSwyMCw5NlY1NkExMiwxMiwwLDAsMSwzMiw0NEg4OGE0LDQsMCwwLDEsMi45NCwxLjI5TDE4NS43NSwxNDhIMjI0QTEyLDEyLDAsMCwxLDIzNiwxNjBabS04LDBhNCw0LDAsMCwwLTQtNEgxODRhNCw0LDAsMCwxLTIuOTQtMS4yOUw4Ni4yNSw1MkgzMmE0LDQsMCwwLDAtNCw0Vjk2YTQsNCwwLDAsMCw0LDRINzJhNCw0LDAsMCwxLDIuOTQsMS4yOUwxNjkuNzUsMjA0SDIyNGE0LDQsMCwwLDAsNC00WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEuNzYsODQuMjRhNiw2LDAsMCwxLDguNDgtOC40OEwxOTQsODkuNTFWNDhhNiw2LDAsMCwxLDEyLDBWODkuNTFsMTMuNzYtMTMuNzVhNiw2LDAsMCwxLDguNDgsOC40OGwtMjQsMjRhNiw2LDAsMCwxLTguNDgsMFpNMjM4LDE2MHY0MGExNCwxNCwwLDAsMS0xNCwxNEgxNjhhNiw2LDAsMCwxLTQuNDEtMS45M0w2OS4zNywxMTBIMzJBMTQsMTQsMCwwLDEsMTgsOTZWNTZBMTQsMTQsMCwwLDEsMzIsNDJIODhhNiw2LDAsMCwxLDQuNDEsMS45M0wxODYuNjMsMTQ2SDIyNEExNCwxNCwwLDAsMSwyMzgsMTYwWm0tMTIsMGEyLDIsMCwwLDAtMi0ySDE4NGE2LDYsMCwwLDEtNC40MS0xLjkzTDg1LjM3LDU0SDMyYTIsMiwwLDAsMC0yLDJWOTZhMiwyLDAsMCwwLDIsMkg3MmE2LDYsMCwwLDEsNC40MSwxLjkzTDE3MC42MywyMDJIMjI0YTIsMiwwLDAsMCwyLTJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjcuNTEsODguNDlhMTIsMTIsMCwwLDEsMTctMTdMMTg4LDc1VjQ4YTEyLDEyLDAsMCwxLDI0LDBWNzVsMy41MS0zLjUyYTEyLDEyLDAsMCwxLDE3LDE3bC0yNCwyNGExMiwxMiwwLDAsMS0xNywwWk0yNDQsMTYwdjQwYTIwLDIwLDAsMCwxLTIwLDIwSDE2OGExMiwxMiwwLDAsMS04LjgyLTMuODZMNjYuNzUsMTE2SDMyQTIwLDIwLDAsMCwxLDEyLDk2VjU2QTIwLDIwLDAsMCwxLDMyLDM2SDg4YTEyLDEyLDAsMCwxLDguODIsMy44NkwxODkuMjUsMTQwSDIyNEEyMCwyMCwwLDAsMSwyNDQsMTYwWm0tMjQsNEgxODRhMTIsMTIsMCwwLDEtOC44Mi0zLjg2TDgyLjc1LDYwSDM2VjkySDcyYTEyLDEyLDAsMCwxLDguODIsMy44NkwxNzMuMjUsMTk2SDIyMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzAuMzQsODUuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDE5Miw4NC42OVY0OGE4LDgsMCwwLDEsMTYsMFY4NC42OWwxMC4zNC0xMC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJsLTI0LDI0YTgsOCwwLDAsMS0xMS4zMiwwWk0yMjQsMTQ0SDE4Ny41TDkzLjg4LDQyLjU3QTgsOCwwLDAsMCw4OCw0MEgzMkExNiwxNiwwLDAsMCwxNiw1NlY5NmExNiwxNiwwLDAsMCwxNiwxNkg2OC41bDkzLjYyLDEwMS40M0E4LDgsMCwwLDAsMTY4LDIxNmg1NmExNiwxNiwwLDAsMCwxNi0xNlYxNjBBMTYsMTYsMCwwLDAsMjI0LDE0NFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTYwdjQwYTgsOCwwLDAsMS04LDhIMTY4TDcyLDEwNEgzMmE4LDgsMCwwLDEtOC04VjU2YTgsOCwwLDAsMSw4LThIODhsOTYsMTA0aDQwQTgsOCwwLDAsMSwyMzIsMTYwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE3MC4zNCw4NS42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTkyLDg0LjY5VjQ4YTgsOCwwLDAsMSwxNiwwVjg0LjY5bDEwLjM0LTEwLjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMmwtMjQsMjRhOCw4LDAsMCwxLTExLjMyLDBaTTI0MCwxNjB2NDBhMTYsMTYsMCwwLDEtMTYsMTZIMTY4YTgsOCwwLDAsMS01Ljg4LTIuNTdMNjguNSwxMTJIMzJBMTYsMTYsMCwwLDEsMTYsOTZWNTZBMTYsMTYsMCwwLDEsMzIsNDBIODhhOCw4LDAsMCwxLDUuODgsMi41N0wxODcuNSwxNDRIMjI0QTE2LDE2LDAsMCwxLDI0MCwxNjBabS0xNiwwSDE4NGE4LDgsMCwwLDEtNS44OC0yLjU3TDg0LjUsNTZIMzJWOTZINzJhOCw4LDAsMCwxLDUuODgsMi41N0wxNzEuNSwyMDBIMjI0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "EscalatorDown";
export { I as EscalatorDown }
