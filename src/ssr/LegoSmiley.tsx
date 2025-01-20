
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/LegoSmiley";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTI0YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEwMCwxMjRabTU2LTI0YTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDE1NiwxMDBabS00LjI3LDQ1LjIzYTQ1LDQ1LDAsMCwxLTQ3LjQ2LDAsOCw4LDAsMCwwLTguNTQsMTMuNTQsNjEsNjEsMCwwLDAsNjQuNTQsMCw4LDgsMCwwLDAtOC41NC0xMy41NFpNMjE2LDgwdjk2YTMyLjA2LDMyLjA2LDAsMCwxLTI0LDMxdjE3YTE2LDE2LDAsMCwxLTE2LDE2SDgwYTE2LDE2LDAsMCwxLTE2LTE2VjIwN2EzMi4wNiwzMi4wNiwwLDAsMS0yNC0zMVY4MEEzMiwzMiwwLDAsMSw3Miw0OEg4OFYzMmExNiwxNiwwLDAsMSwxNi0xNmg0OGExNiwxNiwwLDAsMSwxNiwxNlY0OGgxNkEzMiwzMiwwLDAsMSwyMTYsODBaTTEwNCw0OGg0OFYzMkgxMDRabTcyLDE3NlYyMDhIODB2MTZaTTIwMCw4MGExNiwxNiwwLDAsMC0xNi0xNkg3MkExNiwxNiwwLDAsMCw1Niw4MHY5NmExNiwxNiwwLDAsMCwxNiwxNkgxODRhMTYsMTYsMCwwLDAsMTYtMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTIwYTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEwMCwxMjBabTU2LTE2YTgsOCwwLDEsMCw4LDhBOCw4LDAsMCwwLDE1NiwxMDRabS0yLjEzLDQ0LjYyYTQ5LDQ5LDAsMCwxLTUxLjc0LDAsNCw0LDAsMCwwLTQuMjYsNi43Nyw1Nyw1NywwLDAsMCw2MC4yNiwwLDQsNCwwLDAsMC00LjI2LTYuNzZaTTIxMiw4MHY5NmEyOCwyOCwwLDAsMS0yNCwyNy43MVYyMjRhMTIsMTIsMCwwLDEtMTIsMTJIODBhMTIsMTIsMCwwLDEtMTItMTJWMjAzLjcxQTI4LDI4LDAsMCwxLDQ0LDE3NlY4MEEyOCwyOCwwLDAsMSw3Miw1Mkg5MlYzMmExMiwxMiwwLDAsMSwxMi0xMmg0OGExMiwxMiwwLDAsMSwxMiwxMlY1MmgyMEEyOCwyOCwwLDAsMSwyMTIsODBaTTEwMCw1Mmg1NlYzMmE0LDQsMCwwLDAtNC00SDEwNGE0LDQsMCwwLDAtNCw0Wm04MCwxNzJWMjA0SDc2djIwYTQsNCwwLDAsMCw0LDRoOTZBNCw0LDAsMCwwLDE4MCwyMjRaTTIwNCw4MGEyMCwyMCwwLDAsMC0yMC0yMEg3MkEyMCwyMCwwLDAsMCw1Miw4MHY5NmEyMCwyMCwwLDAsMCwyMCwyMEgxODRhMjAsMjAsMCwwLDAsMjAtMjBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTIyYTEwLDEwLDAsMSwxLDEwLTEwQTEwLDEwLDAsMCwxLDEwMCwxMjJabTU2LTIwYTEwLDEwLDAsMSwwLDEwLDEwQTEwLDEwLDAsMCwwLDE1NiwxMDJabS0zLjIsNDQuOTJhNDcsNDcsMCwwLDEtNDkuNiwwLDYsNiwwLDAsMC02LjQsMTAuMTYsNTksNTksMCwwLDAsNjIuNCwwLDYsNiwwLDEsMC02LjQtMTAuMTZaTTIxNCw4MHY5NmEzMC4wNSwzMC4wNSwwLDAsMS0yNCwyOS40VjIyNGExNCwxNCwwLDAsMS0xNCwxNEg4MGExNCwxNCwwLDAsMS0xNC0xNFYyMDUuNEEzMC4wNSwzMC4wNSwwLDAsMSw0MiwxNzZWODBBMzAsMzAsMCwwLDEsNzIsNTBIOTBWMzJhMTQsMTQsMCwwLDEsMTQtMTRoNDhhMTQsMTQsMCwwLDEsMTQsMTRWNTBoMThBMzAsMzAsMCwwLDEsMjE0LDgwWk0xMDIsNTBoNTJWMzJhMiwyLDAsMCwwLTItMkgxMDRhMiwyLDAsMCwwLTIsMlptNzYsMTc0VjIwNkg3OHYxOGEyLDIsMCwwLDAsMiwyaDk2QTIsMiwwLDAsMCwxNzgsMjI0Wk0yMDIsODBhMTgsMTgsMCwwLDAtMTgtMThINzJBMTgsMTgsMCwwLDAsNTQsODB2OTZhMTgsMTgsMCwwLDAsMTgsMThIMTg0YTE4LDE4LDAsMCwwLDE4LTE4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCwxMTJhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsODQsMTEyWm03Mi0xNmExNiwxNiwwLDEsMCwxNiwxNkExNiwxNiwwLDAsMCwxNTYsOTZabS02LjQsNDUuODVhNDEsNDEsMCwwLDEtNDMuMiwwLDEyLDEyLDAsMSwwLTEyLjgsMjAuMyw2NSw2NSwwLDAsMCw2OC44LDAsMTIsMTIsMCwxLDAtMTIuOC0yMC4zWk0yMjAsODR2ODhhMzYuMDcsMzYuMDcsMCwwLDEtMjQsMzMuOTRWMjI0YTIwLDIwLDAsMCwxLTIwLDIwSDgwYTIwLDIwLDAsMCwxLTIwLTIwVjIwNS45NEEzNi4wNywzNi4wNywwLDAsMSwzNiwxNzJWODRBMzYsMzYsMCwwLDEsNzIsNDhIODRWMzJhMjAsMjAsMCwwLDEsMjAtMjBoNDhhMjAsMjAsMCwwLDEsMjAsMjBWNDhoMTJBMzYsMzYsMCwwLDEsMjIwLDg0Wk0xMDgsNDhoNDBWMzZIMTA4Wm02NCwxNzJWMjA4SDg0djEyWk0xOTYsODRhMTIsMTIsMCwwLDAtMTItMTJINzJBMTIsMTIsMCwwLDAsNjAsODR2ODhhMTIsMTIsMCwwLDAsMTIsMTJIMTg0YTEyLDEyLDAsMCwwLDEyLTEyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDhIMTY4VjMyYTE2LDE2LDAsMCwwLTE2LTE2SDEwNEExNiwxNiwwLDAsMCw4OCwzMlY0OEg3MkEzMiwzMiwwLDAsMCw0MCw4MHY5NmEzMi4wNiwzMi4wNiwwLDAsMCwyNCwzMXYxN2ExNiwxNiwwLDAsMCwxNiwxNmg5NmExNiwxNiwwLDAsMCwxNi0xNlYyMDdhMzIuMDYsMzIuMDYsMCwwLDAsMjQtMzFWODBBMzIsMzIsMCwwLDAsMTg0LDQ4Wm0tMjgsNTJhMTIsMTIsMCwxLDEtMTIsMTJBMTIsMTIsMCwwLDEsMTU2LDEwMFptNC4yNyw1OC43N2E2MSw2MSwwLDAsMS02NC41NCwwLDgsOCwwLDAsMSw4LjU0LTEzLjU0LDQ1LDQ1LDAsMCwwLDQ3LjQ2LDAsOCw4LDAsMCwxLDguNTQsMTMuNTRaTTEwNCwzMmg0OFY0OEgxMDRabS00LDY4YTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDEwMCwxMDBabTc2LDEyNEg4MFYyMDhoOTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODB2OTZhMjQsMjQsMCwwLDEtMjQsMjRINzJhMjQsMjQsMCwwLDEtMjQtMjRWODBBMjQsMjQsMCwwLDEsNzIsNTZIMTg0QTI0LDI0LDAsMCwxLDIwOCw4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMDAsMTI0YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEwMCwxMjRabTU2LTI0YTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDE1NiwxMDBabS00LjI3LDQ1LjIzYTQ1LDQ1LDAsMCwxLTQ3LjQ2LDAsOCw4LDAsMCwwLTguNTQsMTMuNTQsNjEsNjEsMCwwLDAsNjQuNTQsMCw4LDgsMCwwLDAtOC41NC0xMy41NFpNMjE2LDgwdjk2YTMyLjA2LDMyLjA2LDAsMCwxLTI0LDMxdjE3YTE2LDE2LDAsMCwxLTE2LDE2SDgwYTE2LDE2LDAsMCwxLTE2LTE2VjIwN2EzMi4wNiwzMi4wNiwwLDAsMS0yNC0zMVY4MEEzMiwzMiwwLDAsMSw3Miw0OEg4OFYzMmExNiwxNiwwLDAsMSwxNi0xNmg0OGExNiwxNiwwLDAsMSwxNiwxNlY0OGgxNkEzMiwzMiwwLDAsMSwyMTYsODBaTTEwNCw0OGg0OFYzMkgxMDRabTcyLDE3NlYyMDhIODB2MTZaTTIwMCw4MGExNiwxNiwwLDAsMC0xNi0xNkg3MkExNiwxNiwwLDAsMCw1Niw4MHY5NmExNiwxNiwwLDAsMCwxNiwxNkgxODRhMTYsMTYsMCwwLDAsMTYtMTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "LegoSmiley";
export { I as LegoSmiley }
