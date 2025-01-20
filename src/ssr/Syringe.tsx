
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Syringe";


/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsNjYuMzRsLTQ4LTQ4YTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwxOTYuNjksNDgsMTY4LDc2LjY5LDEzMy42Niw0Mi4zNGE4LDgsMCwwLDAtMTEuMzIsMTEuMzJMMTI4LjY5LDYwbC04NCw4NEExNS44NiwxNS44NiwwLDAsMCw0MCwxNTUuMzF2NDkuMzhMMTguMzQsMjI2LjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMkw1MS4zMSwyMTZoNDkuMzhBMTUuODYsMTUuODYsMCwwLDAsMTEyLDIxMS4zMWw4NC04NCw2LjM0LDYuMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyTDE3OS4zMSw4OCwyMDgsNTkuMzFsMTguMzQsMTguMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyWk0xMDAuNjksMjAwSDU2VjE1NS4zMWwxOC0xOCwyMC4zNCwyMC4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJMODUuMzEsMTI2LDk4LDExMy4zMWwyMC4zNCwyMC4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJMMTA5LjMxLDEwMiwxNDAsNzEuMzEsMTg0LjY5LDExNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuODMsNjkuMTdsLTQ4LTQ4YTQsNCwwLDAsMC01LjY2LDUuNjZMMjAyLjM0LDQ4LDE2OCw4Mi4zNCwxMzAuODMsNDUuMTdhNCw0LDAsMSwwLTUuNjYsNS42NkwxMzQuMzQsNjAsNDcuNTEsMTQ2LjgzQTEyLDEyLDAsMCwwLDQ0LDE1NS4zMXY1MUwyMS4xNywyMjkuMTdhNCw0LDAsMCwwLDUuNjYsNS42Nkw0OS42NiwyMTJoNTFhMTEuOTMsMTEuOTMsMCwwLDAsOC40OC0zLjUxTDE5NiwxMjEuNjZsOS4xNyw5LjE3YTQsNCwwLDAsMCw1LjY2LTUuNjZMMTczLjY2LDg4LDIwOCw1My42NmwyMS4xNywyMS4xN2E0LDQsMCwxLDAsNS42Ni01LjY2Wk0xMDMuNTEsMjAyLjgzYTQsNCwwLDAsMS0yLjgyLDEuMTdINTJWMTU1LjMxYTQsNCwwLDAsMSwxLjE3LTIuODJMNzQsMTMxLjY2bDIzLjE3LDIzLjE3YTQsNCwwLDEsMCw1LjY2LTUuNjZMNzkuNjYsMTI2LDk4LDEwNy42NmwyMy4xNywyMy4xN2E0LDQsMCwwLDAsNS42Ni01LjY2TDEwMy42NiwxMDIsMTQwLDY1LjY2bDI1LjE3LDI1LjE3aDBMMTkwLjM0LDExNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjQsNjcuNzZsLTQ4LTQ4YTYsNiwwLDAsMC04LjQ4LDguNDhMMTk5LjUxLDQ4LDE2OCw3OS41MSwxMzIuMjQsNDMuNzZhNiw2LDAsMSwwLTguNDgsOC40OEwxMzEuNTEsNjAsNDYuMSwxNDUuNDFhMTMuOTQsMTMuOTQsMCwwLDAtNC4xLDkuOXY1MC4yTDE5Ljc2LDIyNy43NmE2LDYsMCwxLDAsOC40OCw4LjQ4TDUwLjQ5LDIxNGg1MC4yYTEzLjk0LDEzLjk0LDAsMCwwLDkuOS00LjFMMTk2LDEyNC40OWw3Ljc2LDcuNzVhNiw2LDAsMCwwLDguNDgtOC40OEwxNzYuNDksODgsMjA4LDU2LjQ5bDE5Ljc2LDE5Ljc1YTYsNiwwLDAsMCw4LjQ4LTguNDhaTTEwMi4xLDIwMS40MWEyLDIsMCwwLDEtMS40MS41OUg1NFYxNTUuMzFhMiwyLDAsMCwxLC41OS0xLjQxTDc0LDEzNC40OWwyMS43NiwyMS43NWE2LDYsMCwxLDAsOC40OC04LjQ4TDgyLjQ5LDEyNiw5OCwxMTAuNDlsMjEuNzYsMjEuNzVhNiw2LDAsMCwwLDguNDgtOC40OEwxMDYuNDksMTAyLDE0MCw2OC40OSwxODcuNTEsMTE2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksNjMuNTFsLTQ4LTQ4YTEyLDEyLDAsMCwwLTE3LDE3TDE5MSw0OCwxNjgsNzEsMTM2LjQ5LDM5LjUxYTEyLDEyLDAsMSwwLTE3LDE3TDEyMyw2MCw0MS44NiwxNDEuMTdBMTkuODYsMTkuODYsMCwwLDAsMzYsMTU1LjMxVjIwM0wxNS41MSwyMjMuNTFhMTIsMTIsMCwwLDAsMTcsMTdMNTMsMjIwaDQ3LjcyYTE5Ljg2LDE5Ljg2LDAsMCwwLDE0LjE0LTUuODZMMTk2LDEzM2wzLjUxLDMuNTJhMTIsMTIsMCwwLDAsMTctMTdMMTg1LDg4bDIzLTIzLDE1LjUxLDE1LjUyYTEyLDEyLDAsMSwwLDE3LTE3Wk05OSwxOTZINjBWMTU3bDE0LTE0LDE3LjUxLDE3LjUyYTEyLDEyLDAsMCwwLDE3LTE3TDkxLDEyNmwxMS0xMSwxNy41MSwxNy41MmExMiwxMiwwLDAsMCwxNy0xN0wxMTksOThsMjEtMjEsMzksMzlaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsNzcuNmE4LDgsMCwwLDEtMTEuMzIsMEwyMDgsNTkuMjUsMTc5LjMsODhsMzQuMzUsMzQuMzVhOCw4LDAsMCwxLTExLjMyLDExLjMyTDE5NiwxMjcuMjdsLTg0LDg0QTE2LDE2LDAsMCwxLDEwMC42NSwyMTZINTEuMjZMMjkuNiwyMzcuNjZhOCw4LDAsMCwxLTExLjcyLS40Myw4LjIxLDguMjEsMCwwLDEsLjYxLTExLjFsMjEuNDUtMjEuNDZWMTU1LjI4QTE2LDE2LDAsMCwxLDQ0LjYzLDE0NGwxNS4xOC0xNS4xOGE0LDQsMCwwLDEsNS42NiwwTDk0LjMsMTU3LjYzYTgsOCwwLDEsMCwxMS4zMi0xMS4zMkw3Ni43OCwxMTcuNDdhNCw0LDAsMCwxLDAtNS42NmwxMS0xMWE0LDQsMCwwLDEsNS42NiwwbDI4Ljg0LDI4Ljg0YTgsOCwwLDEsMCwxMS4zMi0xMS4zMkwxMDQuNzksODkuNDZhNCw0LDAsMCwxLDAtNS42NmwyMy44Ny0yMy44Ni02LjM1LTYuMzVhOCw4LDAsMCwxLC4xOC0xMS40OSw4LjIyLDguMjIsMCwwLDEsMTEuMzcuNDFMMTY4LDc2LjYzbDI4LjY5LTI4LjdMMTc4LjMzLDI5LjU4YTgsOCwwLDAsMSwuMTctMTEuNDksOC4yMyw4LjIzLDAsMCwxLDExLjM4LjQxbDQ3Ljc4LDQ3Ljc4QTgsOCwwLDAsMSwyMzcuNjYsNzcuNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMTE2bC04OS42Niw4OS42NmE4LDgsMCwwLDEtNS42NSwyLjM0SDQ4VjE1NS4zMWE4LDgsMCwwLDEsMi4zNC01LjY1TDE0MCw2MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzcuNjYsNjYuMzRsLTQ4LTQ4YTgsOCwwLDAsMC0xMS4zMiwxMS4zMkwxOTYuNjksNDgsMTY4LDc2LjY5LDEzMy42Niw0Mi4zNGE4LDgsMCwwLDAtMTEuMzIsMTEuMzJMMTI4LjY5LDYwbC04NCw4NEExNS44NiwxNS44NiwwLDAsMCw0MCwxNTUuMzF2NDkuMzhMMTguMzQsMjI2LjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMkw1MS4zMSwyMTZoNDkuMzhBMTUuODYsMTUuODYsMCwwLDAsMTEyLDIxMS4zMWw4NC04NCw2LjM0LDYuMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyTDE3OS4zMSw4OCwyMDgsNTkuMzFsMTguMzQsMTguMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyWk0xMDAuNjksMjAwSDU2VjE1NS4zMWwxOC0xOCwyMC4zNCwyMC4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJMODUuMzEsMTI2LDk4LDExMy4zMWwyMC4zNCwyMC4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJMMTA5LjMxLDEwMiwxNDAsNzEuMzEsMTg0LjY5LDExNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Syringe";
export { I as Syringe }
