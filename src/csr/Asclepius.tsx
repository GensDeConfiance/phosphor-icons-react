
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Asclepius";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzl2MWE0MCw0MCwwLDAsMS00MCw0MEgxMzZ2ODBoOGExNiwxNiwwLDAsMCwxMC42Ny0yNy45Myw4LDgsMCwwLDEsMTAuNjYtMTEuOTJBMzIsMzIsMCwwLDEsMTQ0LDIxNmgtOHYxNmE4LDgsMCwwLDEtMTYsMFYyMTZIOTZhOCw4LDAsMCwxLDAtMTZoMjRWMTIwSDk2YTE2LDE2LDAsMCwwLDAsMzIsOCw4LDAsMCwxLDAsMTYsMzIsMzIsMCwwLDEsMC02NGgyNFYyNGE4LDgsMCwwLDEsMTYsMHY4MGg0MGEyNCwyNCwwLDAsMCwyNC0yNFY3OWEyMywyMywwLDAsMC0yMy0yM0gxNjBhOCw4LDAsMCwxLDAtMTZoMTdhMzksMzksMCwwLDEsMzksMzlaTTU2LDk2SDMyYTgsOCwwLDAsMS04LThWODBBNDAsNDAsMCwwLDEsNjQsNDBIOTZhOCw4LDAsMCwxLDAsMTZBNDAsNDAsMCwwLDEsNTYsOTZaTTgwLDU2SDY0QTI0LDI0LDAsMCwwLDQwLDgwSDU2QTI0LDI0LDAsMCwwLDgwLDU2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNzl2MWEzNiwzNiwwLDAsMS0zNiwzNkgxMzJ2ODhoMTJhMjAsMjAsMCwwLDAsMTMuMzMtMzQuOTEsNCw0LDAsMSwxLDUuMzQtNkEyOCwyOCwwLDAsMSwxNDQsMjEySDEzMnYyMGE0LDQsMCwwLDEtOCwwVjIxMkg5NmE0LDQsMCwwLDEsMC04aDI4VjExNkg5NmEyMCwyMCwwLDAsMCwwLDQwLDQsNCwwLDAsMSwwLDgsMjgsMjgsMCwwLDEsMC01NmgyOFYyNGE0LDQsMCwwLDEsOCwwdjg0aDQ0YTI4LDI4LDAsMCwwLDI4LTI4Vjc5YTI3LDI3LDAsMCwwLTI3LTI3SDE2MGE0LDQsMCwwLDEsMC04aDE3YTM1LDM1LDAsMCwxLDM1LDM1Wk01Niw5MkgzMmE0LDQsMCwwLDEtNC00VjgwQTM2LDM2LDAsMCwxLDY0LDQ0SDk2YTQsNCwwLDAsMSwwLDhIOTJ2NEEzNiwzNiwwLDAsMSw1Niw5MlpNODQsNTZWNTJINjRBMjgsMjgsMCwwLDAsMzYsODB2NEg1NkEyOCwyOCwwLDAsMCw4NCw1NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsNzl2MWEzOCwzOCwwLDAsMS0zOCwzOEgxMzR2ODRoMTBhMTgsMTgsMCwwLDAsMTItMzEuNDIsNiw2LDAsMSwxLDgtOC45NEEzMCwzMCwwLDAsMSwxNDQsMjE0SDEzNHYxOGE2LDYsMCwwLDEtMTIsMFYyMTRIOTZhNiw2LDAsMCwxLDAtMTJoMjZWMTE4SDk2YTE4LDE4LDAsMCwwLDAsMzYsNiw2LDAsMCwxLDAsMTIsMzAsMzAsMCwwLDEsMC02MGgyNlYyNGE2LDYsMCwwLDEsMTIsMHY4Mmg0MmEyNiwyNiwwLDAsMCwyNi0yNlY3OWEyNSwyNSwwLDAsMC0yNS0yNUgxNjBhNiw2LDAsMCwxLDAtMTJoMTdhMzcsMzcsMCwwLDEsMzcsMzdaTTU2LDk0SDMyYTYsNiwwLDAsMS02LTZWODBBMzgsMzgsMCwwLDEsNjQsNDJIOTZhNiw2LDAsMCwxLDAsMTJIOTR2MkEzOCwzOCwwLDAsMSw1Niw5NFpNODIsNTRINjRBMjYsMjYsMCwwLDAsMzgsODB2Mkg1NkEyNiwyNiwwLDAsMCw4Miw1NloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MS44Miw2MEg5MmExMiwxMiwwLDAsMCwwLTI0SDYwQTQ0LjA1LDQ0LjA1LDAsMCwwLDE2LDgwdjhhMTIsMTIsMCwwLDAsMTIsMTJINDhBNDQuMDYsNDQuMDYsMCwwLDAsOTEuODIsNjBaTTQ4LDc2SDQwLjRBMjAsMjAsMCwwLDEsNjAsNjBoNy42QTIwLDIwLDAsMCwxLDQ4LDc2Wm0xNzYsM3YxYTQ0LjA1LDQ0LjA1LDAsMCwxLTQ0LDQ0SDE0MHY3Mmg4YTEyLDEyLDAsMCwwLDEyLTEyLDExLjg3LDExLjg3LDAsMCwwLTQtOC45NSwxMiwxMiwwLDEsMSwxNi0xNy44OEEzNiwzNiwwLDAsMSwxNDgsMjIwaC04djEyYTEyLDEyLDAsMCwxLTI0LDBWMjIwSDkyYTEyLDEyLDAsMCwxLDAtMjRoMjRWMTI0SDEwMGExMiwxMiwwLDAsMC00LDIzLjMyQTEyLDEyLDAsMSwxLDg4LDE3MCwzNiwzNiwwLDAsMSwxMDAsMTAwaDE2VjI0YTEyLDEyLDAsMCwxLDI0LDB2NzZoNDBhMjAsMjAsMCwwLDAsMjAtMjBWNzlhMTkuMDUsMTkuMDUsMCwwLDAtMTktMTlIMTY0YTEyLDEyLDAsMCwxLDAtMjRoMTdhNDMuMDUsNDMuMDUsMCwwLDEsNDMsNDNaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTI4djcyaDExLjYyQTEyLjI1LDEyLjI1LDAsMCwwLDE2MCwxODguNTNhMTIsMTIsMCwwLDAtNS45My0xMC44Nyw0LjA4LDQuMDgsMCwwLDEtMi4wNi0zLjQ5di04Ljc5YTQsNCwwLDAsMSw1LjI1LTMuODFBMjguMDYsMjguMDYsMCwwLDEsMTc2LDE4Ny43MWMuMTYsMTUuNTYtMTMsMjguMjktMjguNTksMjguMjlIMTM2djE2YTgsOCwwLDAsMS0xNiwwVjIxNkg5NmE4LDgsMCwwLDEtOC04LjUzQTguMTcsOC4xNywwLDAsMSw5Ni4yNywyMDBIMTIwVjEyOEgxMDQuNDZjLTguNiwwLTE2LDYuNi0xNi40NCwxNS4xOWExNiwxNiwwLDAsMCwxMi44NywxNi41MSwzLjk0LDMuOTQsMCwwLDEsMy4xMSwzLjg5VjE3MmE0LDQsMCwwLDEtNCw0LDM2LDM2LDAsMCwxLTM2LTM2Ljg3QzY0LjQ3LDExOS40OCw4MSwxMDQsMTAwLjY4LDEwNEgxMjBWMjRhOCw4LDAsMCwxLDE2LDB2ODBoMzJhMTYsMTYsMCwwLDAsMTYtMTYuODFDMTgzLjU2LDc4LjYsMTc2LjE0LDcyLDE2Ny41NCw3MkgxNTZhNCw0LDAsMCwxLTQtNFY0NGE0LDQsMCwwLDEsNC00aDE1LjIyYzI0LjYyLDAsNDUuMiwyMC4xNSw0NC43Nyw0NC43NkE0NCw0NCwwLDAsMSwxNzIsMTI4Wk05Mi42Niw3MkgxMDBhNCw0LDAsMCwwLDQtNFY0NGE0LDQsMCwwLDAtNC00SDY0QTQwLDQwLDAsMCwwLDI0LDgwdjhhOCw4LDAsMCwwLDgsOEg1NkE0MCw0MCwwLDAsMCw5Mi42Niw3MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCw0OHY4QTMyLDMyLDAsMCwxLDU2LDg4SDMyVjgwQTMyLDMyLDAsMCwxLDY0LDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw3OXYxYTQwLDQwLDAsMCwxLTQwLDQwSDEzNnY4MGg4YTE2LDE2LDAsMCwwLDEwLjY3LTI3LjkzLDgsOCwwLDAsMSwxMC42Ni0xMS45MkEzMiwzMiwwLDAsMSwxNDQsMjE2aC04djE2YTgsOCwwLDAsMS0xNiwwVjIxNkg5NmE4LDgsMCwwLDEsMC0xNmgyNFYxMjBIOTZhMTYsMTYsMCwwLDAsMCwzMiw4LDgsMCwwLDEsMCwxNiwzMiwzMiwwLDAsMSwwLTY0aDI0VjI0YTgsOCwwLDAsMSwxNiwwdjgwaDQwYTI0LDI0LDAsMCwwLDI0LTI0Vjc5YTIzLDIzLDAsMCwwLTIzLTIzSDE2MGE4LDgsMCwwLDEsMC0xNmgxN2EzOSwzOSwwLDAsMSwzOSwzOVpNNTYsOTZIMzJhOCw4LDAsMCwxLTgtOFY4MEE0MCw0MCwwLDAsMSw2NCw0MEg5NmE4LDgsMCwwLDEsMCwxNkE0MCw0MCwwLDAsMSw1Niw5NlpNODAsNTZINjRBMjQsMjQsMCwwLDAsNDAsODBINTZBMjQsMjQsMCwwLDAsODAsNTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Asclepius";
export { I as Asclepius, I as Caduceus }
